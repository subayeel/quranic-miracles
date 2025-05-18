/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain, // Or another earth/ground icon
  ChevronRight,
  Globe, // Or another science/geology icon
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Home, // To represent buildings/houses
  Quote, // For scientific quotes
} from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming you have Shadcn UI components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming you have Shadcn UI components
import { Badge } from "@/components/ui/badge"; // Assuming you have Shadcn UI components

// Define TypeScript interface for the content structure
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Background color class for icons/borders
  iconColor: string; // Text color class for icons
}

const SinkholeMiracle: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for the sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Ground Collapses",
        icon: Mountain, // Using Mountain for general earth/ground
        color: "bg-stone-100 dark:bg-stone-900", // Earthy/stone colors
        iconColor: "text-stone-500",
      },
      {
        id: "science",
        title: "Modern Confirmation",
        icon: Globe, // Using Globe for geology/science
        color: "bg-blue-100 dark:bg-blue-900", // Science-related blue
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Account",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Green for Quran
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-yellow-100 dark:bg-yellow-900", // Reflection/question color
        iconColor: "text-yellow-500",
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
    setActiveSection(id); // Set active section immediately on click
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
            <Mountain className="text-stone-300" size={32} />
            <h1 className="text-4xl font-bold">Sinkholes</h1>
          </div>
          <p className="text-xl max-w-2xl text-gray-300">
            Earth's Mysterious Collapses
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-stone-700 hover:bg-stone-100"
              onClick={() => scrollToSection("science")}
            >
              Explore Discovery <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-gray-200 border-gray-200 hover:bg-gray-700"
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
                    Understanding Earth's sudden collapses
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
                    <CardTitle>Sudden Ground Collapses</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever heard of a hole in the ground suddenly
                    appearing and swallowing things? These are called sinkholes,
                    and they are natural depressions or holes in the ground.
                  </p>
                  <p>
                    In the Quran, there's a description of the earth suddenly
                    collapsing beneath a person and their house. Based on what
                    was known in the 7th century, someone might have simply
                    thought this was an exaggeration or perhaps just holes dug
                    by animals. Skeptics could claim it was a mistake to
                    describe such a dramatic event.
                  </p>
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Home
                        size={20}
                        className="text-stone-600 dark:text-stone-400"
                      />{" "}
                      What are Sinkholes?
                    </h3>
                    <p>
                      Sinkholes are cavities in the ground, especially in
                      limestone landscapes, caused by water erosion and
                      drainage. They can vary greatly in size and shape.
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
                      <Globe className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Modern Confirmation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Today, geologists confirm that sinkholes are indeed real,
                    and they can form suddenly and be large enough to swallow
                    entire buildings! This is a phenomenon that has been
                    scientifically documented.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Description
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Sinkholes vary in size from 1 to 600 m (3.3 to 2,000 ft)
                      both in diameter and depth, and vary in form from
                      soil-lined bowls to bedrock-edged chasms. Sinkholes may
                      form gradually or suddenly, and are found worldwide."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Sinkhole" // Using a general link to Wikipedia
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Sinkhole, 2018
                      </a>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Real-World
                      Event
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Giant sinkhole swallows three-story building in tropical
                      storm In the northern part of Guatemala City, the downpour
                      created a sinkhole the size of a street intersection.
                      Residents told CNN that a three-story building and a house
                      fell into the hole."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.smh.com.au/world/giant-sinkhole-swallows-three-story-building-in-tropical-storm-20100601-x1o4.html" // Link from reference
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SMH, Giant sinkhole swallows three-story building in
                        tropical storm, 2010
                      </a>
                    </div>
                  </div>

                  <p>
                    These accounts from modern science and news confirm that
                    sudden, large-scale ground collapses capable of swallowing
                    structures are a real geological phenomenon. This was a
                    concept completely unknown in the 7th century.
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
                    <CardTitle>Quranic Account</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran describes a powerful incident where the earth
                    suddenly gave way. Consider this verse:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/28/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/81" // Example link for Quran 28:81
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 28:81
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "So We collapsed the earth beneath him and his house.
                          He had no company to save him from Allah, and he could
                          not defend himself."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٨١ فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ فَمَا كَانَ
                          لَهُ مِنْ فِئَةٍ يَنْصُرُونَهُ مِنْ دُونِ اللَّهِ
                          وَمَا كَانَ مِنَ الْمُنْتَصِرِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The Arabic phrase فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ
                      (fa khasafnā bihi wa bidārihi al-arḍ) directly translates
                      to "So We collapsed the earth beneath him and his house."
                      This precisely describes the kind of sudden, localized
                      ground failure that swallows a structure, which we now
                      understand as a sinkhole event.
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
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the time the Quran was revealed (7th century),
                    knowledge about dramatic geological events like sudden
                    ground collapses swallowing buildings was non-existent. The
                    common understanding of holes in the ground might extend
                    only to those dug by animals.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living 1400 years ago describe a
                      phenomenon—the earth suddenly collapsing and swallowing a
                      house—that perfectly aligns with what modern geology and
                      recorded events confirm about sinkholes, a concept unknown
                      back then?
                    </h3>
                    <p>
                      The detailed description in the Quran, mentioning both the
                      person and their house being swallowed by the collapsing
                      earth, goes far beyond the simple idea of animal burrows
                      and accurately reflects a dramatic geological event that
                      science has only recently understood and documented. This
                      invites us to think about the source of such precise
                      information at that time.
                    </p>
                  </div>

                  <p>
                    This connection between an ancient text and a modern
                    scientific and documented geological event offers a
                    fascinating point for reflection.
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
            <Sparkles className="text-yellow-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Earth's Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting geological realities with ancient accounts invites us to
            reflect on knowledge across time.
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

export default SinkholeMiracle;
