/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplets,
  ChevronRight,
  GlassWater,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUpDown,
  ArrowUp,
  Sparkles,
  Mountain,
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

// Define types for our content items
type ContentItem = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const SoilExpansion = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentItem[]>(() => {
    return [
      {
        id: "intro",
        title: "Expanding Soil",
        icon: Mountain,
        color: "bg-brown-100 dark:bg-brown-900",
        iconColor: "text-amber-700",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: GlassWater,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
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
      <div className="bg-gradient-to-r from-amber-600 to-brown-700 dark:from-amber-800 dark:to-brown-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="text-amber-200" size={32} />
            <h1 className="text-4xl font-bold">Soil</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">Geology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-amber-50 border-amber-50 hover:bg-amber-800/20"
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
                    Explore soil's expanding nature
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
              <Card className="border-l-4 border-amber-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Mountain className="text-amber-700" size={24} />
                    </div>
                    <CardTitle>Expanding Soil</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there's a reference to soil that expands when
                    exposed to water. Skeptics have questioned this statement,
                    but modern science has confirmed that certain soils do
                    indeed expand significantly when wet.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-lg mb-3">
                      Soil Expansion Causes Infrastructure Damage
                    </h3>
                    <p>
                      When certain soils absorb water, they can increase in
                      volume significantly. This expansion and subsequent
                      contraction when drying causes countless potholes on
                      roadways and damage to building foundations around the
                      world each year.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <GlassWater className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "What is an 'Expansive Soil'?
                      <br />
                      Expansive soils contain minerals such as smectite clays
                      that are capable of absorbing water. When they absorb
                      water, they increase in volume. The more water they
                      absorb, the more their volume increases. Expansions of ten
                      percent or more are not uncommon. This change in volume
                      can exert enough force on a building or other structure to
                      cause damage."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Geology, Expansive Soil and Expansive Clay, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <ArrowUpDown size={16} className="text-blue-500" />{" "}
                        Swelling Phenomenon
                      </h3>
                      <p>
                        When water penetrates certain clay minerals, it causes
                        them to dramatically expand. This expansion can exert
                        forces strong enough to lift concrete slabs, crack
                        foundations, and damage roadways.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-blue-500" /> Water
                        Absorption
                      </h3>
                      <p>
                        Expansive soils can increase their volume up to 10% or
                        more when absorbing water. When they dry out, they
                        contract, creating a cycle of expansion and contraction
                        that damages structures built on them.
                      </p>
                    </div>
                  </div>

                  <p>
                    Potholes on asphalt roads are often caused by this expansion
                    and contraction cycle. When water causes the soil beneath to
                    expand, it pushes the asphalt upward. When the soil dries
                    and contracts, the unsupported asphalt collapses, forming a
                    pothole. This scientific understanding is relatively recent,
                    yet remarkably, the Quran described this phenomenon 1400
                    years ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/41/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/39"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 41:39
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And of His signs is that you see the land still. But
                          when We send down water upon it, it shakes and rises.
                          Surely, He Who revived it will revive the dead. He is
                          Able to do all things."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَمِنْ آيَاتِهِ أَنَّكَ تَرَى الْأَرْضَ خَاشِعَةً
                          فَإِذَا أَنْزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ
                          وَرَبَتْ ۚ إِنَّ الَّذِي أَحْيَاهَا لَمُحْيِي
                          الْمَوْتَىٰ ۚ إِنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "Rabat رَبَتْ" used in this verse means
                      "rose higher" or "increased in height." It comes from
                      "Rabua رَبْوَة" meaning high ground, and its verb "Yarbu
                      يَربُو" means to rise higher. This same word appears in
                      Quran 13:17 referring to something that floats or rises to
                      the top of water.
                    </p>
                    <p className="mt-2">
                      The verse clearly describes how water causes the soil to
                      "shake" (اهْتَزَّتْ - ihtazzat) and "rise" (رَبَتْ -
                      rabat), precisely describing the expansion property of
                      certain soils when they absorb water.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern scientific understanding of
                    expansive soils and the Quranic verse raises an intriguing
                    question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      soil expansion?
                    </h3>
                    <p>
                      The detailed description in the Quran of soil rising when
                      water falls upon it—a phenomenon that requires modern
                      scientific knowledge to fully understand—appears in a text
                      from the 7th century, long before the development of
                      modern geology. This connection between ancient scripture
                      and contemporary scientific discovery invites
                      contemplation about the origins of such precise knowledge.
                    </p>
                  </div>

                  <p>
                    The scientific understanding of expansive soils and their
                    behavior when exposed to water is relatively recent. Modern
                    engineering and geology have only in the past century begun
                    to fully document and understand the significant forces
                    these soils can exert when they absorb water. Yet, the
                    Quranic verse directly describes this process of soil
                    shaking and rising when water falls upon it, using
                    terminology that accurately captures the physical phenomenon
                    now recognized by science.
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
            <Sparkles className="text-amber-600" size={18} />
            <h3 className="text-lg font-medium">Exploring Earth Sciences</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The remarkable properties of our planet continue to unfold,
            connecting ancient wisdom with modern scientific discoveries.
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

export default SoilExpansion;
