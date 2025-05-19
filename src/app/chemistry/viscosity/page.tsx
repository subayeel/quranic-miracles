/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplets, // Represents liquids/flow
  FlaskConical, // Represents science/experimentation
  BookOpen, // Represents the Quran/ scripture
  Lightbulb, // Represents insight/reflection
  ChevronRight,
  ArrowUp,
  Sparkles, // Represents wonder/miracle
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

// Define type for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind classes for background
  iconColor: string; // Tailwind classes for text color
}

const ViscosityMiracle: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Understanding Viscosity",
        icon: Droplets,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-600",
      },
      {
        id: "science",
        title: "Modern Scientific View",
        icon: FlaskConical,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-600",
      },
      {
        id: "quran",
        title: "Rivers of Paradise",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600",
      },
      {
        id: "reflection",
        title: "A Remarkable Harmony",
        icon: Lightbulb,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-600",
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
      <div className="bg-gradient-to-r from-teal-600 to-cyan-800 dark:from-teal-800 dark:to-cyan-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="text-teal-200" size={32} />
            <h1 className="text-4xl font-bold">Viscosity</h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            Exploring the property of fluid flow
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-teal-100 border-teal-100 hover:bg-teal-700 hover:text-white"
              onClick={() => scrollToSection("intro")}
            >
              What is Viscosity?
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
                    Navigate the world of fluid thickness
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
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Droplets className="text-teal-600" size={24} />
                    </div>
                    <CardTitle>Understanding Viscosity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Viscosity is a fascinating property of liquids that
                    describes how much they resist flowing. Think of it as the
                    "thickness" or internal friction of a fluid. Some liquids,
                    like water, flow very easily, while others, like honey, are
                    much slower.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3">
                      Knowledge in the 7th Century
                    </h3>
                    <p>
                      Around 1400 years ago, people certainly knew that some
                      liquids were thicker than others – honey, for instance,
                      was clearly understood to be very viscous, resisting flow
                      much more than water. However, the subtle differences in
                      viscosity between liquids like water, milk, and wine were
                      not easily discernible or measurable with the technology
                      and understanding of that time. It was practically
                      impossible for someone then to accurately rank these three
                      liquids by their precise resistance to flow.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Understanding */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <FlaskConical className="text-blue-600" size={24} />
                    </div>
                    <CardTitle>Modern Scientific View</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern science provides us with precise ways to measure and
                    understand viscosity. We know that different liquids have
                    characteristic viscosity values.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Droplets size={16} className="text-blue-600" /> Relative
                      Viscosities
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Viscosity is a material property which describes the
                      resistance of a fluid to shearing flows. It corresponds
                      roughly to the intuitive notion of a fluid's 'thickness'.
                      For instance, honey has a much higher viscosity than
                      water."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/List_of_viscosities"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, List of viscosities, 2020
                      </a>
                    </div>
                  </div>

                  <p>
                    Based on modern measurements, we know the order of
                    increasing viscosity for several common liquids. For pure
                    water, milk, wine, and honey, the order from least viscous
                    (flows most easily) to most viscous (flows least easily) is:
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <ArrowUp size={16} className="text-blue-500" /> Increasing
                      Viscosity
                    </h3>
                    <p>
                      Water {"→"} Milk {"→"} Wine {"→"} Honey
                    </p>
                  </div>
                  <p>
                    This precise ranking of water, milk, and wine in terms of
                    their viscosity was not something readily observable or
                    known to people in the 7th century.
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
                      <BookOpen className="text-green-600" size={24} />
                    </div>
                    <CardTitle>Rivers of Paradise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/47/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/15"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 47:15
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "The likeness of the Garden promised to the righteous:
                          in it are rivers of pure water, and rivers of milk
                          forever fresh, and rivers of wine delightful to the
                          drinkers, and rivers of strained honey. And therein
                          they will have of every fruit, and forgiveness from
                          their Lord. Like one abiding in the Fire forever, and
                          are given to drink boiling water, that cuts-up their
                          bowels?"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          مَثَلُ الْجَنَّةِ الَّتِي وُعِدَ الْمُتَّقُونَ ۖ
                          فِيهَا أَنْهَارٌ مِنْ مَاءٍ غَيْرِ آسِنٍ وَأَنْهَارٌ
                          مِنْ لَبَنٍ لَمْ يَتَغَيَّرْ طَعْمُهُ وَأَنْهَارٌ مِنْ
                          خَمْرٍ لَذَّةٍ لِلشَّارِبِينَ وَأَنْهَارٌ مِنْ عَسَلٍ
                          مُصَفًّى ۖ وَلَهُمْ فِيهَا مِنْ كُلِّ الثَّمَرَاتِ
                          وَمَغْفِرَةٌ مِنْ رَبِّهِمْ ۖ كَمَنْ هُوَ خَالِدٌ فِي
                          النَّارِ وَسُقُوا مَاءً حَمِيمًا فَقَطَّعَ
                          أَمْعَاءَهُمْ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Observation
                    </Badge>
                    <p className="mt-3">
                      This verse beautifully describes the rivers in Paradise.
                      Notice the order in which the rivers are mentioned: water,
                      milk, wine, and honey. These are all flowing liquids,
                      meaning their property of viscosity is relevant.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Lightbulb className="text-purple-600" size={24} />
                    </div>
                    <CardTitle>A Remarkable Harmony</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's bring the pieces together. We've seen the modern
                    scientific understanding of viscosity and the precise order
                    of water, milk, wine, and honey from least to most viscous.
                    We've also seen the Quranic description of the rivers of
                    Paradise, listing these very liquids in the exact same
                    order: water, milk, wine, honey.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this specific order, not easily discernable in
                      the 7th century, be mentioned in the Quran?
                    </h3>
                    <p>
                      The precise relative viscosity of water, milk, and wine
                      was knowledge unavailable to people living 1400 years ago,
                      especially to an illiterate man in the Arabian Peninsula.
                      Yet, the Quran presents these liquids in an order that
                      perfectly aligns with modern scientific measurements of
                      viscosity.
                    </p>
                  </div>

                  <p>
                    This harmony between a verse revealed in the 7th century and
                    scientific facts discovered much later invites us to reflect
                    deeply. It is seen by many as one of the remarkable signs
                    within the Quran, pointing to a source of knowledge that
                    transcends the human understanding of its time.
                  </p>
                  <div className="flex justify-center mt-6">
                    <Sparkles className="text-purple-500" size={36} />
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
            <Sparkles className="text-teal-500" size={18} />
            <h3 className="text-lg font-medium">
              Reflecting on Flow and Faith
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the wonders found in creation and scripture.
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

export default ViscosityMiracle;
