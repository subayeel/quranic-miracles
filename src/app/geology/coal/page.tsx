/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Flame,
  ChevronRight,
  Mountain,
  BookOpen,
  Quote,
  HelpCircle,
  Pickaxe,
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

type SectionType = {
  id: string;
  title: string;
  icon: React.FC<{ className?: string; size?: number }>;
  color: string;
  iconColor: string;
};

const CoalMiracle = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionType[]>(() => {
    return [
      {
        id: "intro",
        title: "Combustible Rock",
        icon: Flame,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Mountain,
        color: "bg-slate-100 dark:bg-slate-900",
        iconColor: "text-slate-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
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
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 `}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-700 dark:from-red-800 dark:to-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Coal</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">Geology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-red-700 hover:bg-red-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-red-700"
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
                    Explore the miracle of combustible stones
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
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Flame className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Combustible Rock</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran mentions stones that can be used as fuel for fire.
                    Skeptics claim this is scientifically inaccurate since
                    stones don't burn. However, we now know that coal - a
                    combustible rock - exists and is widely used as fuel.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-lg mb-3">
                      Coal - A Rock That Burns
                    </h3>
                    <p>
                      In 7th century Arabia, people primarily used wood as fuel
                      for fire. The concept of rocks that could burn would have
                      been foreign to them. Today, coal is recognized as one of
                      the world's most important fossil fuels - literally a
                      stone that burns.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-slate-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                      <Mountain className="text-slate-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-lg border border-slate-100 dark:border-slate-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-slate-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "What is Coal?
                      <br />
                      Coal is an organic sedimentary rock that forms from the
                      accumulation and preservation of plant materials, usually
                      in a swamp environment. Coal is a combustible rock and,
                      along with oil and natural gas, it is one of the three
                      most important fossil fuels. Coal has a wide range of
                      uses; the most important use is for the generation of
                      electricity."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="#"
                        className="text-slate-600 dark:text-slate-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Geology, Coal, 2020
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Pickaxe size={16} className="text-slate-500" /> Coal
                        Formation
                      </h3>
                      <p>
                        Coal forms over millions of years as plant material is
                        buried, compressed, and transformed by heat and
                        pressure. This process creates a carbon-rich rock that
                        can be burned as fuel.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Flame size={16} className="text-red-500" /> Historical
                        Usage
                      </h3>
                      <p>
                        While coal has been used in various parts of the world
                        since ancient times, it was not known or used in 7th
                        century Arabia. Wood was the primary fuel source in that
                        region and era.
                      </p>
                    </div>
                  </div>

                  <p>
                    The scientific description of coal as a "combustible rock"
                    is significant because this knowledge was not available to
                    the people of Arabia during the time the Quran was revealed.
                    The concept of stones that could burn would have seemed
                    contradictory to common experience.
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
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/2/24"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:24
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "But if you do not-and you will not-then beware the
                          Fire whose fuel is people and stones, prepared for the
                          disbelievers."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          فَإِنْ لَمْ تَفْعَلُوا وَلَنْ تَفْعَلُوا فَاتَّقُوا
                          النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ ۖ
                          أُعِدَّتْ لِلْكَافِرِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The key phrase "وَقُودُهَا النَّاسُ وَالْحِجَارَةُ"
                      (waqooduha an-nasu wal-hijarah) means "whose fuel is
                      people and stones." The word "حِجَارَةُ" (hijarah)
                      specifically refers to stones or rocks. This description
                      indicates rocks that can burn - precisely what coal is.
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
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern scientific understanding of
                    coal and the Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      coal?
                    </h3>
                    <p>
                      In 7th century Arabia, the concept of rocks that could
                      burn as fuel would have been counterintuitive and unknown.
                      Coal was not mined or used in that region, and the Arabs
                      primarily used wood for fire. Yet the Quran specifically
                      mentions stones as fuel for fire - a scientific fact that
                      matches our modern understanding of coal as a combustible
                      rock.
                    </p>
                  </div>

                  <p>
                    This alignment between the Quranic description and
                    scientific knowledge invites thoughtful consideration about
                    the source of this information. The mention of stones that
                    burn as fuel represents knowledge that was not part of the
                    common understanding in 7th century Arabia.
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
            <Sparkles className="text-red-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Earth's Resources</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of our planet's natural resources continue to affirm
            connections between ancient texts and modern scientific discoveries.
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

export default CoalMiracle;
