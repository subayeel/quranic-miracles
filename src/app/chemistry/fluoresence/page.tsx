/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Lightbulb, // For the concept of light/illumination
  ChevronRight,
  FlaskConical, // For scientific evidence
  BookOpen, // For Quranic reference
  Leaf, // For plants/olive tree
  Microscope, // For scientific detail/measurement
  ArrowUp,
  Sparkles, // For wonder/miracle
  Droplets, // For oil
} from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming these are available
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming these are available

// Define TypeScript types for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind class for background color
  iconColor: string; // Tailwind class for icon color
}

const FluorescenceMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  // useRef is typically used for DOM elements, not state for content structure
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Plants' Hidden Light",
        icon: Leaf,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "science",
        title: "Scientific Fact: Fluorescence",
        icon: FlaskConical,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "quran",
        title: "Quranic Mention: Olive Oil",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "correspondence",
        title: "Connecting the Dots",
        icon: Lightbulb, // Represents insight/connection
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
      {
        id: "reflection",
        title: "Points for Contemplation",
        icon: Sparkles, // Represents wonder/reflection
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust threshold as needed
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
  }, [contents]); // Dependency array includes contents

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
      <div className="bg-gradient-to-r from-green-600 to-lime-700 dark:from-green-800 dark:to-lime-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="text-green-200" size={32} />
            <h1 className="text-4xl font-bold">Fluorescence & The Quran</h1>
          </div>
          <p className="text-xl max-w-2xl text-green-100">
            Exploring the hidden light of plants and a potential sign in
            scripture
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => scrollToSection("science")}
            >
              Discover the Connection <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-green-700"
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
                  <CardDescription>Navigate the points</CardDescription>
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
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Leaf className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Plants' Hidden Light</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Did you know that plants emit light that is invisible to our
                    eyes? For most of human history, this was completely
                    unknown. Let's explore this fascinating scientific fact and
                    see how it might connect with a description found in the
                    Holy Quran.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">The Unseen Glow</h3>
                    <p>
                      Plants are constantly interacting with light through
                      photosynthesis. As a byproduct of this process, they
                      re-emit a small amount of light, primarily in the red and
                      far-red spectrum, which we cannot see. This phenomenon is
                      called fluorescence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <FlaskConical className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>
                      Scientific Fact: Chlorophyll Fluorescence
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Microscope size={16} className="text-yellow-500" />{" "}
                      Understanding Fluorescence
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      Chlorophyll fluorescence is a key indicator of plant
                      health and photosynthetic activity. Scientists use
                      specialized instruments called fluorometers to measure
                      this faint light. Even NASA studies plant fluorescence
                      from space to monitor vegetation globally! This is a
                      modern field of research, made possible by advancements in
                      technology.
                    </p>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      (Phys, First-of-its-Kind Fluorescence Map Offers a New
                      View of the World's Land Plants, 2011)
                    </p>
                  </div>

                  <p>
                    While the concept of light is ancient, the understanding
                    that plants emit their *own* light (fluorescence) and the
                    ability to measure it is a relatively recent scientific
                    development. In the 7th century, during the time of the
                    Quran's revelation, people observed plants, but they had no
                    way of knowing about this invisible emission of light.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Droplets size={16} className="text-yellow-500" /> Olive
                      Oil and Fluorescence
                    </h3>
                    <p>
                      Interestingly, research has shown that extra virgin olive
                      oil is particularly fluorescent compared to other
                      vegetable oils. One of its fluorescence bands is
                      attributed to chlorophyll, and its chlorophyll footprint
                      at 681 nm was found to be the highest among the tested
                      oils.
                    </p>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      (US Public Library for Medicine, Fluorescence spectra
                      measurement of olive oil and other vegetable oils, 2000;
                      Scientific Research, Characterization of Vegetable Oils by
                      Fluorescence Spectroscopy, 2011)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>
                      Quranic Mention: The Blessed Olive Tree
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    In the Holy Quran, there is a beautiful verse that describes
                    Allah's Light using a parable that includes a blessed olive
                    tree and its oil.
                  </p>

                  {/* Verse 24:35 */}
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/24/v/35"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 24:35 (Surah An-Nur - The Light)
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Allah is the Light of the heavens and the earth. The
                          allegory of His light is that of a pillar on which is
                          a lamp. The lamp is within a glass. The glass is like
                          a brilliant planet, fueled by a blessed tree, an olive
                          tree, neither eastern nor western.{" "}
                          <span className="font-bold text-teal-700 dark:text-teal-300">
                            Its oil would almost illuminate, even if no fire has
                            touched it.
                          </span>{" "}
                          Light upon Light. Allah guides to His light whomever
                          He wills. Allah thus cites the parables for the
                          people. Allah is cognizant of everything."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٥ اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ
                          نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ ۖ الْمِصْبَاحُ
                          فِي زُجَاجَةٍ ۖ الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ
                          دُرِّيٌّ يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ
                          لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا
                          يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ ۚ نُورٌ عَلَىٰ
                          نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَنْ يَشَاءُ ۚ
                          وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ ۗ وَاللَّهُ
                          بِكُلِّ شَيْءٍ عَلِيمٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6">
                    The phrase "Its oil would almost illuminate, even if no fire
                    has touched it" is particularly striking. It describes the
                    oil of the blessed olive tree as having a property of
                    illumination independent of burning.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Connecting the Dots */}
            <section id="correspondence" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Lightbulb className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>
                      Connecting the Scientific Fact and the Verse
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's bring together the scientific understanding of
                    fluorescence and the description in Quran 24:35.
                  </p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Illumination Without Fire = Fluorescence?
                    </h3>
                    <p>
                      Modern science tells us that chlorophyll in plants (like
                      the olive tree) and present in olive oil causes
                      fluorescence – the emission of light without heat or
                      combustion (fire).
                    </p>
                    <p className="mt-2">
                      The Quranic verse describes olive oil that "would almost
                      illuminate, even if no fire has touched it."
                    </p>
                    <p className="mt-4 font-semibold text-center">
                      This description aligns remarkably well with the
                      phenomenon of fluorescence!
                    </p>
                  </div>

                  <p>
                    Furthermore, the phrase "Light upon Light" could be
                    interpreted in various ways, but one modern scientific lens
                    could see it as a reference to the fact that what we
                    perceive as light is only a small part of the full
                    electromagnetic spectrum, which includes many forms of
                    "light" invisible to us (like the light emitted during
                    fluorescence).
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Sparkles className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Points for Contemplation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This convergence of a modern scientific fact and an ancient
                    scriptural description raises profound questions, especially
                    when considering the historical context.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Knowledge Beyond the 7th Century
                    </h3>
                    <p>
                      In the 7th century, people knew that olive oil was a
                      source of fuel for lamps (requiring fire). They had no
                      concept of light being emitted from the oil itself without
                      combustion, nor did they have the tools to detect or
                      measure fluorescence. The fact that extra virgin olive oil
                      is particularly fluorescent was also unknown.
                    </p>
                  </div>

                  <p>
                    How could a text revealed at a time when this scientific
                    knowledge was completely inaccessible contain a description
                    that so accurately reflects the property of fluorescence in
                    olive oil – the emission of light without fire?
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-purple-500" /> A
                      Potential Sign?
                    </h3>
                    <p>
                      For believers, this striking correlation between the
                      Quranic description and the modern scientific discovery of
                      fluorescence in olive oil serves as a powerful potential
                      sign of the divine origin of the Quran. It suggests a
                      source of knowledge far beyond human understanding at the
                      time of its revelation, inviting deep reflection on the
                      nature of this sacred text.
                    </p>
                  </div>
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
            <Sparkles className="text-green-500" size={18} />
            <h3 className="text-lg font-medium">Reflecting on Connections</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the fascinating intersections between scientific knowledge
            and the intricate patterns found within the Holy Quran.
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

export default FluorescenceMiracle;
