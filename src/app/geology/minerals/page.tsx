/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain,
  ChevronRight,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Gem,
  Map,
  Paintbrush,
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

// Define TypeScript type for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
  borderColor: string;
}

const MineralsComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define content sections using useMemo for stability
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Streaked Colorful Mountains",
        icon: Mountain,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-600",
        borderColor: "border-emerald-600",
      },
      {
        id: "science",
        title: "Geological Discoveries",
        icon: Gem,
        color: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-600",
        borderColor: "border-stone-600",
      },
      {
        id: "quran",
        title: "Quranic Verse",
        icon: BookOpen,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-600",
        borderColor: "border-amber-600",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-violet-100 dark:bg-violet-900",
        iconColor: "text-violet-600",
        borderColor: "border-violet-600",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust threshold if needed for better section detection
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
  }, [contents]); // Depend on contents array

  // Function to scroll to a section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update active section state immediately
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-800 dark:from-green-800 dark:to-emerald-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="text-emerald-200" size={32} />
            <h1 className="text-4xl font-bold">Minerals</h1>
          </div>
          <p className="text-xl max-w-2xl text-green-100">
            Geology - Earth's Colorful Formations
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-emerald-700 hover:bg-emerald-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Discoveries <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-emerald-100 border-emerald-100 hover:bg-emerald-700 hover:text-white"
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
                    Discover the science and Quranic mention of colorful
                    mountains
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
              {/* Find the correct border color from the contents array */}
              <Card
                className={`border-l-4 ${
                  contents.find((c) => c.id === "intro")?.borderColor
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Find the correct icon background color from the contents array */}
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "intro")?.color
                      }`}
                    >
                      {/* Find the correct icon color from the contents array */}
                      <Mountain
                        className={
                          contents.find((c) => c.id === "intro")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Streaked Colorful Mountains</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran mentions the existence of mountains with distinct
                    streaks of varying colors, including white, red, and
                    pitch-black. Historically, many skeptics found this
                    description unusual or inaccurate, especially considering
                    the predominantly rocky and monochrome landscape of the
                    Arabian desert.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Description Beyond 7th Century Arabia?
                    </h3>
                    <p>
                      While different colored rocks exist, mountains displaying
                      clear, layered streaks of varied colors on the same
                      formation are geographically rare. The idea that such
                      formations existed would not have been common knowledge to
                      someone living in the Arabian peninsula in the 7th
                      century.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Geological Discoveries */}
            <section id="science" className="scroll-mt-20">
              {/* Find the correct border color from the contents array */}
              <Card
                className={`border-l-4 ${
                  contents.find((c) => c.id === "science")?.borderColor
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Find the correct icon background color from the contents array */}
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "science")?.color
                      }`}
                    >
                      {/* Find the correct icon color from the contents array */}
                      <Gem
                        className={
                          contents.find((c) => c.id === "science")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Geological Discoveries</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Map size={16} className="text-stone-600" /> Modern
                      Confirmation in Distant Lands
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      Today, geological exploration has confirmed the existence
                      of mountains that exhibit striking, multi-colored streaks.
                      These formations are often found in regions with specific
                      geological histories involving the layering of different
                      mineral deposits and environmental exposure. A famous
                      example is the Vinicunca mountain in Peru, often called
                      "Rainbow Mountain," which displays layers of turquoise,
                      gold, red, and white.
                    </p>
                    {/* Add a potential link or citation if available and verifiable */}
                    {/* <div className="mt-3 text-sm">
                      <a href="#" className="text-stone-600 dark:text-stone-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        Learn more about Rainbow Mountain
                      </a>
                    </div> */}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Paintbrush size={16} className="text-stone-600" />{" "}
                        Mineral Composition
                      </h3>
                      <p>
                        The different colors in these streaked mountains are due
                        to varying mineral compositions within the rock layers.
                        For instance, iron oxides can create reds and yellows,
                        while sulfur can appear yellow, and chlorite can create
                        greens.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Map size={16} className="text-stone-600" />{" "}
                        Geographical Rarity
                      </h3>
                      <p>
                        While minerals are ubiquitous, formations where these
                        different mineral layers are exposed on a mountain
                        surface in distinct, visible streaks are relatively rare
                        globally and are notably absent in the Arabian desert
                        region.
                      </p>
                    </div>
                  </div>

                  <p>
                    The discovery of such geological wonders like Rainbow
                    Mountain in Peru validates the Quran's description of
                    streaked colorful mountains, a phenomenon not evident in the
                    immediate surroundings of 7th-century Arabia.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Verse */}
            <section id="quran" className="scroll-mt-20">
              {/* Find the correct border color from the contents array */}
              <Card
                className={`border-l-4 ${
                  contents.find((c) => c.id === "quran")?.borderColor
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Find the correct icon background color from the contents array */}
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "quran")?.color
                      }`}
                    >
                      {/* Find the correct icon color from the contents array */}
                      <BookOpen
                        className={
                          contents.find((c) => c.id === "quran")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/35/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/27"
                        className="text-amber-700 dark:text-amber-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 35:27
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Have you not seen that Allah sends down water from
                          the sky? With it We produce fruits of various colors.
                          And in the mountains are{" "}
                          <strong>
                            streaks of white and red, varying in their hue and
                            pitch-black
                          </strong>
                          . Mountains with streaked colors."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٧ أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ
                          مَاءً فَأَخْرَجْنَا بِهِ ثَمَرَاتٍ مُخْتَلِفًا
                          أَلْوَانُهَا ۚ وَمِنَ الْجِبَالِ جُدَدٌ بِيضٌ وَحُمْرٌ
                          مُخْتَلِفٌ أَلْوَانُهَا وَغَرَابِيبُ سُودٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                      Key Description
                    </Badge>
                    <p className="mt-3">
                      The phrase "جُدَدٌ بِيضٌ وَحُمْرٌ مُخْتَلِفٌ أَلْوَانُهَا
                      وَغَرَابِيبُ سُودٌ" (judadun beeḍun wa ḥumrun mukhtalifun
                      alwānuhā wa gharābeebu sūdun) specifically translates to
                      "streaks of white and red, varying in their hue and
                      pitch-black". The word "جُدَدٌ" (judad) refers to tracks,
                      streaks, or distinct paths, strongly suggesting layered or
                      striped formations within the mountains.
                    </p>
                    <p className="mt-3">
                      This verse describes mountains not just having rocks of
                      different colors, but displaying these colors in distinct
                      streaks or layers, consistent with the geological
                      formations discovered much later in other parts of the
                      world.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              {/* Find the correct border color from the contents array */}
              <Card
                className={`border-l-4 ${
                  contents.find((c) => c.id === "reflection")?.borderColor
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Find the correct icon background color from the contents array */}
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "reflection")?.color
                      }`}
                    >
                      {/* Find the correct icon color from the contents array */}
                      <HelpCircle
                        className={
                          contents.find((c) => c.id === "reflection")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the context of the 7th century Arabian
                    peninsula, where vast, multi-colored streaked mountains were
                    not a local feature, the mention in the Quran prompts a
                    significant question:
                  </p>

                  <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border border-violet-100 dark:border-violet-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man from 7th Century Arabia have accurately
                      described rare geological formations existing in distant
                      lands like Peru?
                    </h3>
                    <p>
                      The specific detail about "streaks" or layers of varying
                      colors (white, red, black) within mountains aligns
                      precisely with the nature of formations like Rainbow
                      Mountain, which are a product of complex geological
                      processes and mineral stratification. Knowledge of such
                      specific geological features, especially those not present
                      locally, would have been entirely beyond the scientific or
                      observational capacity of the time. This precise
                      description in the Quran, centuries before such formations
                      were widely known or understood geologically, is seen as a
                      remarkable point of contemplation.
                    </p>
                  </div>

                  <p>
                    The correlation between the Quran's description and modern
                    geological discoveries highlights a fascinating congruence
                    that invites deeper thought about the source of the
                    knowledge contained within the ancient text.
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
            <Mountain className="text-emerald-600" size={18} />
            <h3 className="text-lg font-medium">Exploring Earth's Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The natural world reveals intricate details that resonate across
            time and knowledge.
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

export default MineralsComponent;
