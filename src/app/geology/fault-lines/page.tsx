/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  LandPlot, // Using LandPlot for geology/earth icon
  ChevronRight,
  Bolt, // Represents earthquakes often associated with faults
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
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

// Define TypeScript interface for section content structure
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Represents the Lucide icon component type
  color: string; // Tailwind CSS class for background color (e.g., border, icon container)
  iconColor: string; // Tailwind CSS class for icon color
}

const FaultLines = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for the ref
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections and their metadata using the interface
  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Earth's Cracks",
        icon: LandPlot,
        color: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-500",
      },
      {
        id: "science",
        title: "Geological Faults",
        icon: Bolt,
        color: "bg-gray-100 dark:bg-gray-900", // Using gray for rock/earth
        iconColor: "text-gray-500",
      },
      {
        id: "quran",
        title: "Quranic Mention",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Historical Context",
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
      threshold: 0.3, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the section ID from the entry target
          const sectionId = entry.target.id;
          // Check if the ID is one of our known sections before setting state
          if (contents.some((item) => item.id === sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements
    contents.forEach(({ id }) => {
      // Ensure the element exists before trying to observe
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    // Cleanup function for the observer
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Dependency array includes contents

  // Function to scroll to a specific section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Set active section immediately on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-600 to-gray-800 dark:from-stone-800 dark:to-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <LandPlot className="text-stone-300" size={32} />
            <h1 className="text-4xl font-bold">Earth's Fault Lines</h1>
          </div>
          <p className="text-xl max-w-2xl text-gray-200">Geology - Insights</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-gray-700 hover:bg-gray-100"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-800"
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
                    Discover Earth's hidden fractures
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
                      <LandPlot className="text-stone-500" size={24} />
                    </div>
                    <CardTitle>Earth's Cracks</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Did you know that the ground beneath our feet isn't a
                    single, solid shell? It's actually fractured with numerous
                    cracks and faults. In the past, some skeptics questioned
                    this idea, but modern geology has confirmed that Earth is
                    indeed full of these features.
                  </p>
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-bold text-lg mb-3">
                      Understanding Faults
                    </h3>
                    <p>
                      These fractures, known as faults, are crucial to
                      understanding how our planet works. They are where pieces
                      of Earth's crust move relative to each other, often
                      leading to significant geological events like earthquakes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-gray-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900">
                      <Bolt className="text-gray-500" size={24} />
                    </div>
                    <CardTitle>Geological Faults</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900/30 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      Geological Definition
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In geology, a fault is a planar fracture or discontinuity
                      in a volume of rock, across which there has been
                      significant displacement as a result of rock-mass
                      movement. Large faults within the Earth's crust result
                      from the action of plate tectonic forces, with the largest
                      forming the boundaries between the plates... Energy
                      release associated with rapid movement on active faults is
                      the cause of most earthquakes... A fault trace or fault
                      line is a place where the fault can be seen or mapped on
                      the surface. A fault trace is also the line commonly
                      plotted on geologic maps to represent a fault."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Fault_(geology)"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Fault (geology), 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    As explained by modern geology, Earth's crust is indeed
                    filled with these fractures and fault lines. They represent
                    areas where rock masses have moved, driven by the immense
                    forces of plate tectonics. The significant earthquakes we
                    experience are a direct result of sudden movements along
                    these faults.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Bolt size={16} className="text-gray-500" /> Tectonic
                        Activity
                      </h3>
                      <p>
                        Faults are often the boundaries or results of movement
                        within Earth's tectonic plates, the giant slabs that
                        make up the planet's outer shell.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <LandPlot size={16} className="text-stone-500" /> Hidden
                        Structures
                      </h3>
                      <p>
                        While some faults are visible on the surface (fault
                        traces), many exist deep within the Earth's crust,
                        hidden from direct view and requiring geological study
                        to map and understand.
                      </p>
                    </div>
                  </div>
                  <p>
                    Understanding the extent and nature of these subsurface
                    faults is a relatively recent development in scientific
                    history, made possible by advancements in seismology,
                    geophysics, and geological mapping techniques.
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
                    <CardTitle>Quranic Mention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/86/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/12" // Adjusted link for Surah 86, Ayah 12
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 86:12
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the Earth that has faults."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">١٢ وَالْأَرْضِ ذَاتِ الصَّدْعِ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Arabic Term
                    </Badge>
                    <p className="mt-3">
                      The Arabic word used in this verse is "Al-Sada'"
                      (الصَّدْعِ). Based on its root meaning and linguistic
                      analysis, "Sada'" (صدع) signifies a crack, split, or
                      fissure. In this context, referring to the Earth, it
                      directly points to the existence of internal cracks or
                      faults within the planet.
                    </p>
                    <p className="mt-3">
                      The verse doesn't just describe the surface but implies
                      the Earth *itself* has these splits or fissures deep
                      within.
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
                    <CardTitle>Historical Context</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering what was known about the Earth's structure in
                    the 7th century, this Quranic verse presents a
                    thought-provoking point.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have known about the
                      Earth's internal faults?
                    </h3>
                    <p>
                      In the 7th century, geological understanding was extremely
                      limited. The idea that the solid Earth beneath our feet is
                      riddled with deep, internal fractures that cause
                      earthquakes and are driven by vast tectonic forces was
                      completely unknown. Knowledge was primarily based on
                      surface observations, and the sophisticated tools and
                      techniques needed to map and understand subsurface geology
                      simply did not exist. The mention of the Earth having
                      "faults" or "cracks" in the Quran, especially implying
                      internal ones through the use of the word "Sada'", aligns
                      with modern scientific understanding in a way that seems
                      far beyond the scientific knowledge available at that
                      time.
                    </p>
                  </div>

                  <p>
                    This congruence between ancient scripture and modern
                    geological discovery invites us to reflect on the source of
                    such information.
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
            <Sparkles className="text-stone-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Earth's Depths</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intricate structure of our planet continues to reveal wonders,
            bridging ancient text with modern scientific understanding.
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

export default FaultLines;
