/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplets, // Represents water
  Mountain, // Represents rocks/geology
  BookOpen, // Represents Quran
  HelpCircle, // Represents reflection/questions
  ChevronRight, // Navigation icon
  ArrowUp, // Back to Top icon
  Quote, // Quote icon
  Layers, // Represents layers/structure of rocks
  Search, // Represents discovery/evidence
  Sparkles, // Footer icon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define types for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind color class for background
  iconColor: string; // Tailwind color class for icon text
}

const PorousRocks: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Using a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Rocks Can Store Water",
        icon: Mountain,
        color: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-500",
      },
      {
        id: "geology",
        title: "Geological Evidence",
        icon: Layers,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "reflection",
        title: "Reflection & 7th Century Context",
        icon: HelpCircle,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-600 to-gray-800 dark:from-stone-800 dark:to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="text-cyan-300" size={32} />
            <h1 className="text-4xl font-bold">Porous Rocks</h1>
          </div>
          <p className="text-xl max-w-2xl text-stone-200">
            Geology - Earth's Natural Storage
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-stone-700 hover:bg-stone-100"
              onClick={() => scrollToSection("geology")}
            >
              Explore Discovery <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-stone-100 border-stone-100 hover:bg-stone-100 hover:text-stone-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Uncover the secrets of rocks and water
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium"
                            : ""
                        }`}
                      >
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {activeSection === id && (
                          <ChevronRight className="ml-auto" size={16} />
                        )}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-stone-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900">
                      <Mountain className="text-stone-500" size={24} />
                    </div>
                    <CardTitle>Rocks Can Store Water</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Did you know that some rocks can actually hold water? This
                    might sound surprising at first!
                  </p>
                  <p>
                    Historically, skeptics claimed that the idea of rocks
                    storing water was incorrect, suggesting it was a mistake in
                    ancient texts. However, modern geology has since confirmed
                    that certain types of rocks, known as porous rocks, are
                    capable of holding significant amounts of water and other
                    fluids within their structure.
                  </p>
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Hidden Spaces in Rocks
                    </h3>
                    <p>
                      The ability of rocks to store water depends on their
                      porosity – the amount of empty space (pores) within the
                      rock structure. These interconnected pores can act like
                      tiny storage containers for liquids and gases.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Geological Evidence */}
            <section id="geology" className="scroll-mt-20">
              <Card className="border-l-4 border-emerald-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <Layers className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>Geological Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Geologists have extensively studied the Earth's crust and
                    discovered various types of rocks with porous structures.
                    These rocks play a crucial role in the storage and movement
                    of groundwater, oil, and natural gas.
                  </p>

                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-emerald-500" />{" "}
                      Scientific Definition
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Reservoir rocks are rocks that have the ability to store
                      fluids inside their pores, so that the fluids (water, oil,
                      and gas) can be accumulated."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://wiki.aapg.org/Reservoir"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        American Association of Petroleum Geologists Wiki,
                        Reservoir, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Search size={16} className="text-emerald-500" />
                        Modern Discovery
                      </h3>
                      <p>
                        Our understanding of how fluids are stored within the
                        Earth's crust has greatly advanced with modern
                        geological techniques and technologies developed
                        relatively recently.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-blue-500" /> Water
                        Storage
                      </h3>
                      <p>
                        Groundwater is a vital resource, and it is primarily
                        stored in these porous rock formations beneath the
                        surface.
                      </p>
                    </div>
                  </div>

                  <p>
                    The concept of porous rocks holding and releasing water is a
                    fundamental principle in hydrology and petroleum geology
                    today. However, the detailed scientific understanding of
                    this phenomenon is a product of relatively recent scientific
                    advancement, not common knowledge 1400 years ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/74"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:74
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then after that your hearts hardened like rocks, or
                          even harder. For there are some rocks from which
                          rivers gush out, and others that crack and water comes
                          out from them, and others that descend in awe of
                          Allah. Allah is not unaware of what you do."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧٤ ثُمَّ قَسَتْ قُلُوبُكُمْ مِنْ بَعْدِ ذَٰلِكَ فَهِيَ
                          كَالْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةً ۚ وَإِنَّ مِنَ
                          الْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ الْأَنْهَارُ ۚ
                          وَإِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ
                          الْمَاءُ ۚ وَإِنَّ مِنْهَا لَمَا يَهْبِطُ مِنْ
                          خَشْيَةِ اللَّهِ ۗ وَمَا اللَّهُ بِغَافِلٍ عَمَّا
                          تَعْمَلُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Relevant Phrase
                    </Badge>
                    <p className="mt-3">
                      The verse mentions different types of rocks, including{" "}
                      <span className="font-medium italic">
                        "others that crack and water comes out from them"
                        (وَإِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ
                        الْمَاءُ)
                      </span>
                      . This beautifully describes how water, stored within the
                      rock's structure (perhaps in pores or fractures), can be
                      released, sometimes by cracking or breaking.
                    </p>
                    <p className="mt-3">
                      This aligns remarkably with the modern geological
                      understanding of how porous rocks store and release water,
                      whether through natural fractures or extraction.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <HelpCircle className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Reflection & 7th Century Context</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific knowledge available in the 7th
                    century, the detailed understanding of rock porosity and its
                    role in storing and releasing water was not a known
                    scientific fact.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      porous rocks storing and releasing water?
                    </h3>
                    <p>
                      In the 7th century, people observed water sources like
                      springs and wells, but the scientific explanation for
                      *how* rocks held and released this water at a structural
                      level wasn't understood. The detailed mechanisms of
                      porosity and fluid mechanics within rock formations were
                      beyond the scientific grasp of the time.
                    </p>
                    <p className="mt-3">
                      Yet, the Quranic verse precisely describes rocks from
                      which water emerges when they crack. This observation,
                      which aligns with the behavior of porous or fractured
                      rocks, is presented without the benefit of modern
                      geological science.
                    </p>
                  </div>

                  <p>
                    This intriguing parallel between the ancient text and modern
                    geological discovery invites us to reflect on the source of
                    such knowledge, especially considering the context of the
                    time in which the Quran was revealed.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-emerald-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Earth's Design</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discoveries in geology reveal the intricate ways nature works,
            echoing descriptions found in ancient scriptures.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PorousRocks;
