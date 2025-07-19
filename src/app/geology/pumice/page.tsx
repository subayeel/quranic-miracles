/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain,
  ChevronRight,
  Droplets,
  BookOpen,
  Quote,
  HelpCircle,
  Bird,
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

// Define TypeScript types
type ContentSection = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  iconColor: string;
};

type SectionRefs = {
  [key: string]: HTMLElement | null;
};

const PumiceStone: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Floating Stone",
        icon: Mountain,
        color: "bg-slate-100 dark:bg-slate-900",
        iconColor: "text-slate-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Droplets,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-700 dark:to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="text-gray-200" size={32} />
            <h1 className="text-4xl font-bold">Pumice</h1>
          </div>
          <p className="text-xl max-w-2xl text-gray-100">Geology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-slate-700 hover:bg-slate-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-slate-700"
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
                    Explore the miracle of pumice
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
              <Card className="border-l-4 border-slate-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                      <Mountain className="text-slate-500" size={24} />
                    </div>
                    <CardTitle>Floating Stone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, birds are described carrying stones to attack
                    an enemy. Skeptics claim that whoever wrote the Quran made a
                    mistake; stones are too heavy to be carried by birds. Today
                    geologists confirm that pumice stone is so light that it can
                    float on water.
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-lg border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Least Dense Stone
                    </h3>
                    <p>
                      Pumice is unique among stones - it's the least dense stone
                      on Earth and the only one that can float on water. This
                      volcanic rock is formed when superheated, highly
                      pressurized magma is ejected and rapidly cools, trapping
                      gas bubbles within the solidifying rock.
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
                      <Droplets className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Pumice is created when super-heated, highly pressurized
                      rock is violently ejected from a volcano. The unusual
                      foamy configuration of pumice happens because of
                      simultaneous rapid cooling and rapid depressurization. The
                      depressurization creates bubbles by lowering the
                      solubility of gases (including water and CO2) that are
                      dissolved in the lava, causing the gases to rapidly
                      exsolve (like the bubbles of CO2 that appear when a
                      carbonated drink is opened). The simultaneous cooling and
                      depressurization freezes the bubbles in the matrix."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Pumice"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Pumice, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-blue-500" />{" "}
                        Incredible Porosity
                      </h3>
                      <p>
                        Pumice has a porosity of 90% or more, making it
                        exceptionally light. Its structure consists of
                        thin-walled bubble-like cavities connected to each
                        other, which allows it to float on water until these
                        cavities gradually fill.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Bird size={16} className="text-gray-500" /> Light
                        Enough for Birds
                      </h3>
                      <p>
                        With a density that can be as low as 0.25 g/cm³
                        (compared to typical rocks at 2.5-3.5 g/cm³), pumice is
                        light enough that pieces could indeed be carried by
                        larger birds over significant distances.
                      </p>
                    </div>
                  </div>

                  <p>
                    The exceptional lightness of pumice was not well understood
                    in ancient times. Its ability to float on water would have
                    seemed miraculous to people of the 7th century, as most
                    cultures understood stones to be universally heavy objects
                    that sink in water.
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
                        href="https://www.quranwow.com/#/ch/105/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/3"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 105:3-4
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "He sent against them swarms of birds. Throwing at
                          them rocks of pumice."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣ وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ٤
                          تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Term
                    </Badge>
                    <p className="mt-3">
                      The term "Sijjeel" (سِجِّيلٍ) in the Quran refers to the
                      pumice stones that the birds carried. This same term
                      appears in Quran 15:74 describing a volcanic event where a
                      city was showered with stones.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-4">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/15/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/74"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 15:74
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And We turned [the cities] upside down and rained
                          upon them stones of baked clay (sijjeel)."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          فَجَعَلْنَا عَالِيَهَا سَافِلَهَا وَأَمْطَرْنَا
                          عَلَيْهِمْ حِجَارَةً مِّن سِجِّيلٍ
                        </p>
                      </div>
                    </div>
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
                    The Quranic description of birds carrying stones presents a
                    fascinating connection to modern geological knowledge:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      pumice?
                    </h3>
                    <p>
                      In 7th century Arabia, the detailed knowledge of volcanic
                      rocks and their unique properties would have been
                      extremely limited. The concept that birds could carry
                      stones over long distances would seem impossible unless
                      someone understood that certain stones like pumice have
                      exceptionally low density compared to ordinary rocks.
                    </p>
                  </div>

                  <p>
                    The scientific understanding that pumice is the least dense
                    stone on Earth, with a unique ability to float on water due
                    to its highly porous structure, was not established until
                    much later in scientific history. Yet the Quran describes
                    birds carrying stones in a way that aligns with the physical
                    properties of pumice that modern geology has confirmed.
                  </p>

                  <p>
                    This correlation between the Quranic description and modern
                    scientific understanding of pumice properties invites
                    contemplation about how such knowledge could have been
                    available in 7th century Arabia, particularly to someone who
                    was known to be unlettered.
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
            <Sparkles className="text-slate-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Earth's Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of our planet continue to unfold, connecting ancient
            texts with modern geological discoveries.
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

export default PumiceStone;
