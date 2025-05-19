/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Ruler, // Icon for measurement/kilometers
  ChevronRight,
  MapPin, // Icon for location/distance
  BookOpen, // Icon for Quran
  Sparkles, // Icon for reflection/miracle
  ArrowUp,
  Database, // Could represent data/knowledge
  HelpCircle,
  Quote, // From original, good for reflection/question
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Assuming these are available
import { Button } from "@/components/ui/button"; // Assuming these are available
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming these are available

// Define a type for the content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for the Lucide icon component
  color: string; // Background color class for card icon wrapper
  iconColor: string; // Text color class for the icon
}

const KilometerDay: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a specific type for sectionRefs if needed, otherwise Record<string, HTMLElement | null> is fine
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Define the content sections and their properties
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Kilometer Connection",
        icon: Ruler,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Earth's Iron Core",
        icon: MapPin,
        color: "bg-stone-100 dark:bg-stone-800", // Using stone for earth/rock
        iconColor: "text-stone-600 dark:text-stone-400",
      },
      {
        id: "quran",
        title: "The Verse Count",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "miracle",
        title: "An Astonishing Correlation",
        icon: Sparkles, // Or HelpCircle
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-600 dark:text-yellow-400",
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

    // Ensure we have access to the current refs object for cleanup
    const currentRefs = sectionRefs.current;

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element; // Store the element reference
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
      // Use `start` to scroll the top of the element to the top of the viewport
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Ruler className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Kilometers</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Mathematics & Quran - Exploring a fascinating link
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Discover the Connection <ChevronRight size={16} />
            </Button>
            {/* Optional: Add a button back to intro or another relevant section */}
            {/* <Button
                            variant="outline"
                            className="text-purple-100 border-purple-100 hover:bg-purple-700"
                            onClick={() => scrollToSection("intro")}
                        >
                            Learn More
                        </Button> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              {" "}
              {/* Sticky position */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Unpacking kilometers and a unique Quranic observation
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
              {" "}
              {/* Added scroll-mt-20 for smooth scrolling offset */}
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Ruler className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Kilometer Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Let's talk about kilometers, a unit of distance commonly
                    used today. It's simply 1000 meters. While this unit is
                    standard for us, imagine a time 1400 years ago, in the 7th
                    century, when such standardized units of measurement were
                    unknown, especially for vast distances within the Earth
                    itself!
                  </p>
                  <p>
                    Prepare to explore a fascinating correlation found when
                    looking at the structure of the Quran and the scientific
                    knowledge we have today about our planet.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Knowledge in the 7th Century
                    </h3>
                    <p>
                      In the 7th century, during the time of the Prophet
                      Muhammad ﷺ, understanding of Earth's internal structure
                      was based on limited observations and philosophical ideas,
                      not scientific measurement. Concepts like Earth's core,
                      its composition, or precise distances to deep layers like
                      where iron is concentrated were completely beyond the
                      knowledge of people living then.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Context */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-stone-600 dark:border-stone-400">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800">
                      <MapPin
                        className="text-stone-600 dark:text-stone-400"
                        size={24}
                      />
                    </div>
                    <CardTitle>Earth's Iron Core</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern science tells us incredible things about our planet's
                    structure. Beneath the surface, Earth is layered like an
                    onion, and its very center holds a dense core.
                  </p>
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Database
                        size={16}
                        className="text-stone-600 dark:text-stone-400"
                      />{" "}
                      What's Inside?
                    </h3>
                    <p>
                      A significant part of Earth's core is made up of iron,
                      alloyed with nickel and other elements. Seismic studies
                      show this core has a liquid outer layer and a solid inner
                      core.
                    </p>
                  </div>

                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote
                        size={16}
                        className="text-stone-600 dark:text-stone-400"
                      />{" "}
                      Scientific Description
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "With a radius of almost 3,500 km (2,200 miles), Earth's
                      core is about the size of the entire planet Mars... A
                      small, central part of the core, however, below a depth of
                      about 5,100 km (3,200 miles), is solid iron."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.britannica.com/place/Earth/The-interior"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Britannica, Earth The Interior, 2019
                      </a>
                    </div>
                  </div>
                  <p>
                    So, based on scientific data, the solid inner core, where
                    iron is heavily concentrated, is found at depths starting
                    around 5100 km below the Earth's surface.
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
                    <CardTitle>The Verse Count</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at the Quran. There's a chapter specifically
                    named "Al-Hadid," which means "The Iron." This chapter
                    discusses iron.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      Locating the "Iron" Verse
                    </h3>
                    <p>
                      Interestingly, if you count the verses from the very
                      beginning of the Quran (starting from Surah Al-Fatihah) up
                      to the verse that explicitly mentions "Iron" within Surah
                      Al-Hadid (Chapter 57), you arrive at a specific number.
                    </p>
                    {/* Reference to the counting method */}
                    <div className="mt-3 text-sm">
                      Based on{" "}
                      <a
                        href="http://www.kaheel7.com/ar/index.php/1/2087--2019"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran Characters Counter
                      </a>{" "}
                      and similar analyses.
                    </div>
                  </div>

                  <div className="mt-6 text-center text-2xl font-bold text-green-700 dark:text-green-300">
                    The verse mentioning "Iron" is the{" "}
                    <span className="text-3xl">
                      5100<sup>th</sup>
                    </span>{" "}
                    verse from the beginning of the Quran.
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Miracle/Reflection */}
            <section id="miracle" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500 dark:border-yellow-400">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Sparkles
                        className="text-yellow-600 dark:text-yellow-400"
                        size={24}
                      />
                    </div>
                    <CardTitle>An Astonishing Correlation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here's where it gets truly remarkable. We've seen that
                    modern science estimates the solid iron core of the Earth is
                    located approximately 5100 kilometers below the surface.
                    And, as we just noted, the verse mentioning "Iron" is the
                    5100th verse in the Quran.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800 text-center">
                    <h3 className="font-bold text-xl mb-3">
                      The Number of Verses to Iron = The Distance to Iron's
                      Concentration in Earth (in km)!
                    </h3>
                    <p className="text-lg italic text-gray-700 dark:text-gray-300">
                      5100 verses $\approx$ 5100 km
                    </p>
                  </div>

                  <p>
                    Remembering our earlier point: in the 7th century, the
                    concept of a kilometer didn't exist, nor did anyone possess
                    the scientific knowledge or tools to measure the depth of
                    Earth's layers or determine the concentration of elements
                    like iron so precisely.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <HelpCircle
                        size={20}
                        className="text-yellow-600 dark:text-yellow-400"
                      />{" "}
                      Pondering the Knowledge Source
                    </h3>
                    <p>
                      How could a text revealed 1400 years ago contain a number
                      (the verse count) that correlates so closely with a
                      specific, scientifically determined physical distance
                      within the Earth – a distance measured in a unit
                      (kilometers) unknown at the time?
                    </p>
                    <p className="mt-3">
                      This astonishing correlation is seen by many as a sign,
                      inviting us to reflect on the potential divine origin of
                      the Quran and the depth of its wisdom, which seems to
                      resonate with truths discovered centuries later.
                    </p>
                  </div>
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-900">
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Connections: Quran and Science
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Reflecting on remarkable correlations that span centuries and fields
            of knowledge.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KilometerDay;
