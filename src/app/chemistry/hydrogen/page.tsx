/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles, // Used for intro/reflection
  ChevronRight,
  GraduationCap, // Representing Science/Knowledge
  BookOpen,
  HelpCircle,
  ArrowUp,
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

// Define types for content items
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind background color class
  iconColor: string; // Tailwind text color class
}

const HydrogenComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Sun's Secret",
        icon: Sparkles,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Modern Discovery",
        icon: GraduationCap,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "A Quranic Hint",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Keeping green for Quran consistency
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Profound Question",
        icon: HelpCircle,
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
      <div className="bg-gradient-to-r from-blue-700 to-purple-800 dark:from-blue-900 dark:to-purple-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-blue-300" size={32} />
            <h1 className="text-4xl font-bold">Hydrogen</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-200">
            Unveiling the Sun's Primary Element
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-100 border-blue-100 hover:bg-blue-800 hover:text-white"
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
                  <CardDescription>Explore Hydrogen in the Sun</CardDescription>
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
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Sparkles className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Sun's Secret</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever wondered what the Sun is made of? For most of
                    human history, the composition of stars, including our own
                    Sun, was a complete mystery. People could only gaze at its
                    brightness and feel its warmth, without any way to
                    understand its fundamental building blocks.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Mystery for Centuries
                    </h3>
                    <p>
                      In the 7th century, during the time the Quran was
                      revealed, understanding the chemical composition of
                      distant celestial bodies like the Sun was far beyond the
                      technological and scientific capabilities of humanity.
                      There were no telescopes capable of spectrographic
                      analysis, no understanding of elements as we know them
                      today.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <GraduationCap className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Modern Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fast forward to the modern era, with advanced telescopes and
                    the science of spectroscopy, we can now analyze the light
                    from stars and determine their composition. And what have
                    scientists discovered about the Sun?
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      The Dominant Element
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The Sun is composed primarily of the chemical elements
                      hydrogen and helium... they account for 74.9% and 23.8% of
                      the mass of the Sun in the photosphere, respectively."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Sun#Composition"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Sun, 2021
                      </a>
                    </div>
                  </div>

                  <p>
                    This tells us that the Sun is overwhelmingly made of
                    Hydrogen! Hydrogen is the lightest and most abundant element
                    in the universe, and it fuels the nuclear fusion that makes
                    the Sun shine.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-indigo-500" />{" "}
                        Mostly Hydrogen
                      </h3>
                      <p>
                        Roughly 75% of the Sun's mass is Hydrogen, making it by
                        far the most dominant element.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <GraduationCap size={16} className="text-gray-500" />{" "}
                        Spectroscopy
                      </h3>
                      <p>
                        This knowledge was gained through complex modern
                        scientific techniques analyzing the Sun's light
                        spectrum.
                      </p>
                    </div>
                  </div>
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
                    <CardTitle>A Quranic Hint</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at Chapter 91 of the Quran, which is
                    actually titled "Ash-Shams" (الشَّمْسُ) - meaning "The Sun".
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      Quran Chapter 91: Ash-Shams (The Sun)
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        {/* Placeholder for Chapter 91 verses - user can link or add */}
                        <p className="italic mb-4">
                          [Verses of Chapter 91 would go here]
                          <br />
                          ...And the verses continue.
                        </p>
                        <div className="mt-3 text-sm">
                          <a
                            href="https://www.quranwow.com/#/ch/91" // Example link
                            className="text-green-600 dark:text-green-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Explore Chapter 91
                          </a>
                        </div>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
                          <br />
                          وَالشَّمْسِ وَضُحَاهَا ﴿١﴾
                          <br />
                          ... (verses 2-15 would follow)
                          <br />
                          فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنبِهِمْ فَسَوَّاهَا
                          ﴿١٤﴾
                          <br />
                          وَلَا يَخَافُ عُقْبَاهَا ﴿١٥﴾
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    When we examine the Arabic text of this specific chapter, a
                    remarkable pattern emerges. Let's consider the element
                    Hydrogen. Its chemical symbol is "H". In Arabic, the letter
                    corresponding most closely to 'H' (like in 'Hydrogen') is
                    "هـ" (pronounced 'Ha').
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Unique Observation
                    </h3>
                    <p>
                      Interestingly, every single verse in Quran Chapter 91,
                      "The Sun", ends with the Arabic letter "هـ". It is said
                      that this is the only chapter in the entire Quran where
                      *all* verses share this particular ending sound and
                      letter.
                    </p>
                    <div className="mt-3 text-sm">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Arabic Letter: هـ
                      </Badge>
                      <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Chemical Symbol: H
                      </Badge>
                    </div>
                  </div>

                  <p>
                    Considering the modern scientific discovery that the Sun is
                    predominantly made of Hydrogen (symbol H), and the unique
                    linguistic feature that every verse in the Quranic chapter
                    titled "The Sun" ends with the Arabic letter "هـ" (Arabic
                    'H'), some see this as a profound hint or sign.
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
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>A Profound Question</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This brings us to a truly thought-provoking point when
                    viewed through the lens of history:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could anyone in the 7th century have known about the
                      Sun's primary composition or linked it to a specific
                      Arabic letter in such a unique pattern?
                    </h3>
                    <p>
                      The knowledge that the Sun is mainly Hydrogen relies on
                      sophisticated scientific methods developed many centuries
                      after the Quran was revealed. The intricate linguistic
                      pattern in Chapter 91 seems to align with this modern
                      discovery in a way that goes beyond mere coincidence,
                      especially given the title of the chapter.
                    </p>
                  </div>

                  <p>
                    For those who believe the Quran is a divine revelation, this
                    correlation between a fundamental scientific fact, unknown
                    to humanity until recently, and a unique linguistic
                    structure in a chapter named "The Sun," serves as one of
                    many signs pointing to a source of knowledge beyond human
                    reach at that time.
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
            <Sparkles className="text-blue-600" size={18} />
            <h3 className="text-lg font-medium">Reflecting on Cosmic Signs</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the universe and ancient texts for insights into knowledge
            and creation.
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

export default HydrogenComponent;
