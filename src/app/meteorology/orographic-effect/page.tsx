/* eslint-disable react/no-unescaped-entities */
"use client"; // This directive is for App Router in Next.js

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  CloudRain, // Icon for rain/weather
  Mountain, // Icon for mountains
  BookOpen, // Icon for Quran/Knowledge
  ChevronRight, // Icon for navigation
  ArrowUp, // Icon for scroll to top
  Sparkles, // Icon for miracles/wonder
  Quote, // Icon for quotes
} from "lucide-react"; // Using lucide-react for icons

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Assuming Shadcn UI components
import { Button } from "@/components/ui/button"; // Assuming Shadcn UI components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming Shadcn UI components
import { Badge } from "@/components/ui/badge"; // Assuming Shadcn UI components

// Define a type for the content sections
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for the Lucide icon component
  color: string; // Background color class for section header/icon
  iconColor: string; // Text color class for the icon
}

const OrographicEffect: React.FC = () => {
  // State to track the currently active section based on scroll position
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Ref to store references to each section's DOM element
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the structure and content for each section using useMemo for performance
  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Orographic Effect",
        icon: CloudRain,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Explanation",
        icon: Mountain,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: Sparkles,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view for scroll-spy navigation
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set the active section ID when it comes into view
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements defined in the contents array
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element; // Store the element reference
        observer.observe(element); // Start observing the element
      }
    });

    // Cleanup function to unobserve elements when the component unmounts
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Re-run effect if contents array changes (though it's memoized)

  // Function to smoothly scroll to a specific section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update the active section state immediately
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll with smooth animation
    }
  };

  return (
    // Main container with background and text colors
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-700 dark:from-blue-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Header Icon */}
            <CloudRain className="text-blue-200" size={32} />
            {/* Main Title */}
            <h1 className="text-4xl font-bold">Orographic Effect</h1>
          </div>
          {/* Subtitle/Difficulty */}
          <p className="text-xl max-w-2xl text-blue-100">Meteorology - Easy</p>
          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Learn More <ChevronRight size={16} />
            </Button>
            {/* Optional: Button to go back to intro */}
            {/* <Button
                            variant="outline"
                            className="text-blue-700"
                            onClick={() => scrollToSection("intro")}
                        >
                            Introduction
                        </Button> */}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid layout for sidebar and main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar (hidden on small screens, shown on large) */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Explore how mountains influence rain
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Navigation links */}
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium" // Active state styling
                            : ""
                        }`}
                      >
                        <Icon className={iconColor} size={18} />{" "}
                        {/* Section Icon */}
                        <span>{title}</span> {/* Section Title */}
                        {/* Chevron icon for active section */}
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

          {/* Main Content Column */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                {" "}
                {/* Left border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <CloudRain className="text-blue-500" size={24} />{" "}
                      {/* Section Icon */}
                    </div>
                    <CardTitle>Mountains Trigger Rain</CardTitle>{" "}
                    {/* Section Title */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever noticed that mountain areas often receive more
                    rainfall than surrounding lowlands? This phenomenon, known
                    as the orographic effect, is a fascinating aspect of
                    meteorology.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Look at an Ancient Claim vs. Modern Science
                    </h3>
                    <p>
                      There is a claim found in the Quran, revealed in the 7th
                      century, that higher ground receives more rain. At a time
                      when detailed meteorological knowledge was limited, some
                      skeptics might have questioned this. However, modern
                      science has confirmed that elevation, particularly in the
                      presence of mountains, plays a significant role in
                      precipitation patterns.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation Section */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                {" "}
                {/* Left border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Mountain className="text-green-500" size={24} />{" "}
                      {/* Section Icon */}
                    </div>
                    <CardTitle>Scientific Explanation</CardTitle>{" "}
                    {/* Section Title */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-green-500" /> How
                      Mountains Affect Precipitation
                    </h3>
                    {/* Quoted text from Sciencing.com */}
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "<strong>How Do Mountains Affect Precipitation?</strong>
                      <br />
                      <br />
                      <strong>Cloud Formation</strong>
                      <br />
                      Mountains pose a significant obstacle to stable air flow.
                      As air approaches the mountain it is forced upwards. At
                      higher altitudes, the temperatures drop, condensing water
                      vapor. This process results in the formation of clouds.
                      Mountains may also restrict or slow down air flow. This
                      restriction may also result in lifting air to high
                      altitudes and creating clouds prior to the air reaching
                      the slopes of the mountain.
                      <br />
                      <br />
                      <strong>Orographic Effect</strong>
                      <br />
                      As the air is forced higher by the mountain, the clouds
                      that were formed eventually release water in the form of
                      precipitation. This so-called orographic effect occurs
                      because the clouds' ability to hold moisture lessens as
                      temperatures drop. The higher the mountain, the lower the
                      temperatures at its peak. This forces the clouds to
                      release the precipitation in the form of thunderstorms in
                      the summer and severe snowstorms in the winter. The
                      orographic effect occurs on the windward side -- the side
                      that faces the wind."
                    </p>
                    {/* Reference link */}
                    <div className="mt-3 text-sm">
                      <a
                        href="https://sciencing.com/do-mountains-affect-precipitation-8691099.html"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sciencing, How Do Mountains Affect Precipitation?, 2018
                      </a>
                    </div>
                  </div>

                  {/* Image related to Orographic Effect */}
                  <div className="image-wrapper my-8">
                    <img
                      className="w-full h-auto rounded-lg shadow-lg"
                      src="assets/images/orographic-effect-500x277.webp" // Use the provided image source
                      alt="Illustration of the orographic effect showing moist air rising over a mountain, forming clouds and rain on the windward side, and creating a dry rain shadow on the leeward side." // Descriptive alt text
                    />
                  </div>

                  <p>
                    So, the science is clear: when moist air encounters a
                    mountain, it's forced upward, cools, and releases its
                    moisture as rain or snow on the side facing the wind (the
                    windward side). This explains why mountainous regions often
                    experience higher precipitation.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference Section */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                {" "}
                {/* Left border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <BookOpen className="text-indigo-500" size={24} />{" "}
                      {/* Section Icon */}
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>{" "}
                    {/* Section Title */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3">
                      {/* Link to the Quranic verse */}
                      <a
                        href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/265"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:265
                      </a>
                    </h3>
                    {/* Quranic verse in English and Arabic */}
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the parable of those who spend their wealth
                          seeking Allah's approval, and to strengthen their
                          souls, is that of a garden on a high ground, if heavy
                          rain falls on it its produce is doubled and if no
                          heavy rain falls then dew. Allah is seeing of
                          everything you do"
                        </p>
                      </div>
                      {/* Arabic text with right-to-left direction */}
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٦٥ وَمَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمُ
                          ابْتِغَاءَ مَرْضَاتِ اللَّهِ وَتَثْبِيتًا مِنْ
                          أَنْفُسِهِمْ كَمَثَلِ جَنَّةٍ بِرَبْوَةٍ أَصَابَهَا
                          وَابِلٌ فَآتَتْ أُكُلَهَا ضِعْفَيْنِ فَإِنْ لَمْ
                          يُصِبْهَا وَابِلٌ فَطَلٌّ ۗ وَاللَّهُ بِمَا
                          تَعْمَلُونَ بَصِيرٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Explanation of the key term */}
                  <div className="mt-6">
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                      Key Term
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "Rabua" (رَبْوَةٍ) used in this verse
                      means "high ground". The verse describes a garden on a
                      "high ground" that receives heavy rain, resulting in
                      doubled produce, while other areas might only receive dew.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection Section */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                {" "}
                {/* Left border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Sparkles className="text-purple-500" size={24} />{" "}
                      {/* Section Icon */}
                    </div>
                    <CardTitle>Reflection</CardTitle> {/* Section Title */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific explanation of the orographic
                    effect, where mountains (high ground) indeed trigger
                    significant rainfall on their windward sides, look at the
                    description in Quran 2:265.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have known that high
                      ground receives more rain?
                    </h3>
                    <p>
                      In the 7th century, detailed scientific understanding of
                      atmospheric pressure, air currents, condensation points at
                      different altitudes, and the precise mechanics of how
                      mountains influence weather was simply not available.
                      Weather observations were largely empirical and localized.
                      The idea that elevation *directly* correlates with
                      increased rainfall in a specific and predictable
                      meteorological process like the orographic effect was
                      beyond the scope of general knowledge at that time.
                    </p>
                  </div>

                  <p>
                    The verse describes a specific condition for a garden on
                    high ground receiving heavy rain ('wabil'), distinct from
                    lower areas potentially receiving only dew ('tal'). This
                    aligns remarkably with the orographic effect, where the
                    windward side of elevated terrain receives significantly
                    more precipitation than surrounding areas or the leeward
                    side (rain shadow). This correspondence between a
                    7th-century text and a modern scientific understanding
                    invites contemplation.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Popover */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            {/* Button to open mobile navigation */}
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              <CloudRain size={24} /> {/* Icon for the button */}
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            {/* Mobile navigation links */}
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    // Close the popover after clicking a link (optional, depends on desired UX)
                    // This would require state management for the popover itself or a direct way to close it.
                  }}
                  className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-gray-800 font-medium"
                      : ""
                  }`}
                >
                  <Icon className={iconColor} size={18} /> {/* Section Icon */}
                  <span>{title}</span> {/* Section Title */}
                  {/* Chevron icon for active section */}
                  {activeSection === id && (
                    <ChevronRight className="ml-auto" size={16} />
                  )}
                </button>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-blue-500" size={18} /> {/* Footer Icon */}
            <h3 className="text-lg font-medium">Exploring Earth's Weather</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Understanding the natural world can lead to deeper reflections on
            ancient wisdom and modern discovery.
          </p>
          {/* Back to Top button */}
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

export default OrographicEffect;
