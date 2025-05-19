/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Ruler, // Icon for Meter/Measurement
  ChevronRight,
  BookOpen, // Icon for Quranic Reference
  Scale, // Icon for Correlation/Measurement
  HelpCircle, // Icon for Reflection/Question
  ArrowUp, // Icon for Back to Top
  Sparkles, // Icon for general wonder/miracle
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define types for the content structure
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const MeterComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs if possible, but this is sufficient
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Units of Distance",
        icon: Ruler,
        color: "bg-cyan-100 dark:bg-cyan-900", // Using Cyan colors
        iconColor: "text-cyan-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Keeping green for Quran
        iconColor: "text-green-500",
      },
      {
        id: "correlation",
        title: "The Correlation",
        icon: Scale, // Or Hash
        color: "bg-blue-100 dark:bg-blue-900", // Using Blue colors
        iconColor: "text-blue-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Keeping amber for reflection
        iconColor: "text-amber-500",
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
  }, [contents]); // Depend on contents

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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-800 dark:from-cyan-800 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Ruler className="text-teal-200" size={32} />
            <h1 className="text-4xl font-bold">Meter</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">Mathematics - Easy</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-cyan-700 hover:bg-cyan-50"
              onClick={() => scrollToSection("quran")} // Direct to the first main point
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-cyan-700"
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
                    Exploring the Meter connection
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
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "intro")?.color
                      }`}
                    >
                      <Ruler
                        className={
                          contents.find((c) => c.id === "intro")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Units of Distance in the 7th Century</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the 7th century CE, when the Quran was revealed, people
                    used traditional units to measure distance. Units like the
                    'cubit' (the length from the elbow to the tip of the middle
                    finger) were common and understood.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Meter - A Later Invention
                    </h3>
                    <p>
                      The 'meter', the standard unit of length we use today in
                      the International System of Units (SI), was not conceived
                      until much later. It was formally defined in the late 18th
                      century, over a thousand years after the 7th century.
                      Therefore, the concept and standard length of a meter were
                      completely unknown to people living at the time of the
                      Quran's revelation.
                    </p>
                  </div>
                  <p>
                    Considering this historical context, it's fascinating to
                    look at how distances are mentioned in the Quran.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "quran")?.color
                      }`}
                    >
                      <BookOpen
                        className={
                          contents.find((c) => c.id === "quran")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>A Mention of Length</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran mentions specific lengths using familiar units of
                    the time, like the cubit. One particular verse refers to a
                    chain:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/69/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/32"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 69:32
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then in a chain whose length is seventy cubits, tie
                          him up."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٢ ثُمَّ فِي سِلْسِلَةٍ ذَرْعُهَا سَبْعُونَ ذِرَاعًا
                          فَاسْلُكُوهُ
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Here, the length of the chain is explicitly given as seventy
                    cubits.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* The Correlation */}
            <section id="correlation" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "correlation")?.color
                      }`}
                    >
                      <Scale
                        className={
                          contents.find((c) => c.id === "correlation")
                            ?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Finding a Modern Equivalent</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    While people at the time knew what 70 cubits represented,
                    they had no concept of the meter. However, centuries later,
                    when the meter became a standard unit, an interesting
                    calculation emerged.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      70 Cubits = 32 Meters?
                    </h3>
                    <p>
                      Based on common understandings and historical measurements
                      of the cubit's length, it turns out that seventy cubits is
                      approximately equivalent to thirty-two meters.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      A Striking Coincidence?
                    </Badge>
                    <p className="mt-3">
                      What makes this observation particularly noteworthy is the
                      number '32'. This modern equivalent measurement in meters
                      (32) happens to be the exact number of the verse in the
                      Quran (Chapter 69, Verse 32) where the length of seventy
                      cubits is mentioned.
                    </p>
                    {/* Optional: Mention the image conceptually if not including it */}
                    {/* <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                            (This correlation is often illustrated visually, showing the verse number alongside the meter equivalence.)
                                        </p> */}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "reflection")?.color
                      }`}
                    >
                      <HelpCircle
                        className={
                          contents.find((c) => c.id === "reflection")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>A Point for Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This leads us to a point of deep contemplation, especially
                    considering the historical context:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could anyone in the 7th century, who only knew the
                      cubit and had no concept of a meter, possibly know that
                      seventy cubits correlates precisely with the number of the
                      verse (32) when measured in meters?
                    </h3>
                  </div>

                  <p>
                    The meter didn't exist as a standard unit back then. This
                    correlation seems to point to a knowledge far beyond the
                    human understanding and available information of that time.
                    It's seen by many as a remarkable sign within the Quran
                    itself.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-cyan-600 hover:bg-cyan-700">
              <Ruler size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
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
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-cyan-600" size={18} />{" "}
            {/* Changed icon color */}
            <h3 className="text-lg font-medium">Exploring Units and Meaning</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Subtle numerical and measurement correlations like this invite us to
            ponder the depth and origins of the Quran's knowledge.
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

export default MeterComponent;
