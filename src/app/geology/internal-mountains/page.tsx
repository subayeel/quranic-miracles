/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain, // Icon for mountains/earth
  ChevronRight,
  Layers, // Represents Earth's layers
  BookOpen,
  Quote,
  HelpCircle,
  // RotateCcw, // Not relevant here
  ArrowUp,
  Sparkles,
  Globe, // Alternative header icon
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

// Define a type for the content sections for better type safety
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind background color for card border and icon background
  iconColor: string; // Tailwind text color for icon
}

const InternalMountains: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Using a Ref to store section elements for IntersectionObserver
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections and their properties
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Earth's Stability",
        icon: Globe, // Use Globe for intro
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "science",
        title: "Modern Discovery",
        icon: Layers, // Use Layers for science
        color: "bg-blue-100 dark:bg-blue-900", // Can reuse blue or pick a different color
        iconColor: "text-blue-500", // Match icon color to card border
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900", // Teal theme for Quran section
        iconColor: "text-teal-600",
      },
      {
        id: "reflection",
        title: "A Profound Question",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Can reuse Amber or pick a different color
        iconColor: "text-amber-500",
      },
    ];
  }, []); // Empty dependency array means this runs once on mount

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If a section is intersecting and it's not the currently active one, update state
        if (entry.isIntersecting && activeSection !== entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current; // Get the mutable ref object

    // Observe all section elements based on their IDs
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element; // Store the element reference
        observer.observe(element); // Start observing
      }
    });

    // Cleanup function: disconnect the observer and clear refs when component unmounts
    return () => {
      observer.disconnect(); // Stop observing all elements
      // Optional: clear the ref contents if needed, though disconnect is sufficient
      // contents.forEach(({ id }) => {
      //   currentRefs[id] = null;
      // });
    };
    // Add activeSection to dependencies so the observer can update if necessary,
    // though in this case, checking activeSection inside the observer callback is key.
    // Adding contents ensures observer re-setup if contents change (unlikely here).
  }, [contents, activeSection]); // Dependencies for useEffect

  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (id: string) => {
    // Update state first (optional, but good practice if needed before scroll)
    // setActiveSection(id); // IntersectionObserver will handle setting activeSection based on scroll
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-800 dark:from-green-800 dark:to-teal-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Using Mountain icon for the header */}
            <Mountain className="text-green-200" size={32} />
            <h1 className="text-4xl font-bold">Internal Mountains</h1>
          </div>
          <p className="text-xl max-w-2xl text-green-100">
            Discoveries Beneath the Surface
          </p>
          {/* Buttons to navigate to key sections */}
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Discovery <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-green-100 border-green-300 hover:bg-green-700/30"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar - Hidden on small screens, sticky on large */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>Journey into Earth's depths</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {/* Map through contents to create navigation links */}
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        // Apply active styling based on activeSection state
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium"
                            : ""
                        }`}
                      >
                        {/* Render the icon */}
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {/* Show arrow icon if this is the active section */}
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

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Icon and Title for the section */}
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Globe className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Earth's Stability: An Ancient View</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    For centuries, mountains were understood as majestic peaks
                    rising from the Earth's surface. It was widely believed that
                    these visible mountains acted like pegs, stabilizing the
                    crust and preventing the Earth from shaking or "swaying."
                    This was the prevailing view for a very long time,
                    particularly in the 7th century when the Quran was revealed.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">
                      Understanding in the 7th Century
                    </h3>
                    <p>
                      In the 7th century, knowledge of Earth's deep internal
                      structure was non-existent. Ideas about the planet's
                      interior were based on speculation, not empirical
                      observation. Mountains were purely a surface phenomenon in
                      the human understanding of that time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Discovery Section */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Layers className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Modern Geological Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fast forward to the modern era, with advanced technologies
                    like seismology, scientists can now peer deep beneath the
                    Earth's surface. What they've discovered is astonishing and
                    goes far beyond the visible mountains we live among.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Seismic
                      Insights
                    </h3>
                    {/* Include the quote from the NBC News article */}
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Deep inside Earth, scientists find weird blobs and
                      mountains taller than Mount Everest... Researchers such as
                      Barbara Romanowicz at the University of California,
                      Berkeley are using seismic (earthquake) waves to scan our
                      planet’s innards... At the 410-mile level, researchers
                      recently identified a tremendous interior mountain range,
                      with peaks perhaps even taller than Mount Everest."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.nbcnews.com/mach/science/deep-inside-earth-scientists-find-weird-blobs-mountains-taller-mount-ncna1008336" // Link to the article
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NBC News, Deep inside Earth, scientists find weird blobs
                        and mountains taller than Mount Everest, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Layers size={16} className="text-blue-500" />{" "}
                        Subsurface Structures
                      </h3>
                      <p>
                        Scientists have found immense mountain ranges buried
                        hundreds of miles below the Earth's surface,
                        specifically around 400 miles (640 km) down at a mantle
                        transition zone.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain size={16} className="text-gray-500" />{" "}
                        Towering Peaks
                      </h3>
                      <p>
                        These newly discovered internal mountains have peaks
                        estimated to be up to 40 miles (64 km) high,
                        significantly taller than surface mountains relative to
                        their surroundings.
                      </p>
                    </div>
                  </div>
                  <p>
                    Furthermore, these internal structures are understood to
                    play a role in influencing the dynamics and movement of the
                    Earth's mantle layers above them, acting as barriers or
                    anchors. This provides a modern scientific perspective on
                    how subsurface features contribute to Earth's internal
                    stability.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Insight Section */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-600" size={24} />
                    </div>
                    <CardTitle>The Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/21/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/31" // Link to Quran 21:31
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 21:31
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        {/* English Translation */}
                        <p className="italic mb-4">
                          "And We placed in earth mountains, lest it sways with
                          them, and We placed therein signposts and passages,
                          that they may be guided."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        {/* Arabic Text */}
                        <p dir="rtl">
                          ٣١ وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ أَنْ تَمِيدَ
                          بِهِمْ وَجَعَلْنَا فِيهَا فِجَاجًا سُبُلًا لَعَلَّهُمْ
                          يَهْتَدُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The verse uses the Arabic phrase "Fee al-ard" (فِي
                      الْأَرْضِ), which translates to "in the earth" or "inside
                      the earth." Significantly, it does{" "}
                      <span className="font-semibold">not</span> use "Ala
                      al-ard" (عَلَى الْأَرْضِ), which means "on the earth" or
                      "on top of the earth."
                    </p>
                    <p className="mt-3">
                      The verse states that these mountains were placed "in the
                      earth" to prevent it from swaying. This aligns remarkably
                      with the modern discovery of deep internal mountains
                      located hundreds of miles *inside* the Earth, which
                      geologists understand contribute to the stability of the
                      planet's layers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection Section */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>
                      Connecting Ancient Text and Modern Science
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Consider the context of the 7th century. Human understanding
                    of Earth's geology was limited to what could be observed on
                    the surface. The idea that massive mountains existed
                    hundreds of miles *inside* the solid Earth was beyond
                    imagination and certainly beyond any means of detection
                    available at that time. There were no seismic tools, no
                    deep-drilling capabilities, nothing to suggest such a
                    reality.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could anyone in the 7th century know about mountains
                      deep inside the Earth?
                    </h3>
                    <p>
                      The Quranic verse, revealed over 1400 years ago, speaks of
                      mountains placed "in the earth" specifically to prevent it
                      from swaying. This description intrigues many because it
                      resonates with modern geological findings about deep
                      internal structures that influence Earth's stability,
                      something that was completely unknown and undetectable
                      with 7th-century technology or knowledge.
                    </p>
                  </div>

                  <p>
                    This connection between an ancient scripture and a recent,
                    complex scientific discovery invites contemplation. It
                    prompts us to consider the source of the knowledge present
                    in the Quran, especially details that seem to predate human
                    scientific capability by many centuries.
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
            {/* Footer icon */}
            <Sparkles className="text-green-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Earth's Hidden Depths
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of our planet, both visible and hidden, continue to
            reveal profound insights.
          </p>
          {/* Back to Top button */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InternalMountains;
