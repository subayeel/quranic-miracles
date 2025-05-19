/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Ear,
  ChevronRight,
  Eye,
  BookOpen,
  Quote,
  HelpCircle,
  Brain,
  ArrowUp,
  Sparkles,
  BabyIcon,
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

interface SectionContent {
  id: string;
  title: string;
  icon: React.FC<{ className?: string; size?: number }>;
  color: string;
  iconColor: string;
}

const HumanSenses = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Senses Development",
        icon: Brain,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: BabyIcon,
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
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 dark:from-purple-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Ear className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Human Senses</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Human Development - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-50 border-purple-200 hover:bg-purple-800/30"
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
                    Explore human sensory development
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
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Brain className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Senses Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, sensory development is described in a
                    particular order, with hearing mentioned before vision.
                    Modern science has now confirmed that hearing indeed
                    develops before vision in human embryonic development.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Order of Sensory Development
                    </h3>
                    <p>
                      The order in which our senses develop during gestation is
                      a fascinating aspect of human development. Modern
                      embryology has revealed that our ears form and become
                      functional before our eyes - a fact that couldn't have
                      been observed or known in the 7th century.
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
                      <BabyIcon className="text-blue-500" size={24} />
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
                      "The development of the ear and the onset of hearing
                      occurs earlier than the development of the eye and vision.
                      The first acoustic responses have been recorded at 16
                      weeks of gestation, whereas the first responses to light
                      have only been observed in the third trimester, after 28
                      weeks. By birth, the hearing system is well developed,
                      whereas visual acuity is poor and visual cortical function
                      is immature."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        Journal of Perinatal Medicine, "Fetal Sensory
                        Development", 2010
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Ear size={16} className="text-blue-500" /> Hearing
                        Development
                      </h3>
                      <p>
                        The auditory system begins functioning around 16 weeks
                        of gestation. A baby can hear its mother's voice,
                        heartbeat, and other external sounds well before birth.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Eye size={16} className="text-gray-500" /> Vision
                        Development
                      </h3>
                      <p>
                        Visual development occurs later, with the eyes only
                        becoming responsive to light after 28 weeks of
                        gestation. Visual ability continues to develop
                        significantly after birth.
                      </p>
                    </div>
                  </div>

                  <p>
                    Modern embryology and developmental biology have
                    conclusively shown that hearing develops significantly
                    earlier than vision in human embryos. This sequential
                    development was unknown until advanced medical imaging and
                    research techniques became available in the 20th century.
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
                      Quranic Verses Mentioning Hearing and Vision
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <h4 className="font-medium mb-2">Quran 76:2</h4>
                        <p className="italic mb-4">
                          "We created man from a fertilizing sperm, to test him;
                          and We made him hearing and seeing."
                        </p>
                        <h4 className="font-medium mb-2">Quran 23:78</h4>
                        <p className="italic mb-4">
                          "It is He who produced for you the hearing, and the
                          eyesight, and the feelings. But little gratitude you
                          show."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl" className="mb-4">
                          ٢ إِنَّا خَلَقْنَا الْإِنْسَانَ مِنْ نُطْفَةٍ
                          أَمْشَاجٍ نَبْتَلِيهِ فَجَعَلْنَاهُ سَمِيعًا بَصِيرًا
                        </p>
                        <p dir="rtl">
                          ٧٨ وَهُوَ الَّذِي أَنْشَأَ لَكُمُ السَّمْعَ
                          وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۚ قَلِيلًا مَا
                          تَشْكُرُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Observation
                    </Badge>
                    <p className="mt-3">
                      In the Quran, whenever the senses of hearing and seeing
                      are mentioned together, hearing (سَمِيعًا / السَّمْعَ) is
                      consistently mentioned before vision (بَصِيرًا /
                      الْأَبْصَارَ). This pattern appears repeatedly throughout
                      the text, maintaining this specific order that mirrors the
                      actual developmental sequence in human embryos.
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
                    The correlation between modern embryological findings and
                    the Quranic verses raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the sequence of human sensory development?
                    </h3>
                    <p>
                      The consistent mention of hearing before vision in the
                      Quran aligns perfectly with what modern embryology has
                      confirmed about human development. This knowledge would
                      have been impossible to acquire through observation in the
                      7th century, as it requires sophisticated imaging
                      technologies that were developed only in recent decades.
                    </p>
                  </div>

                  <p>
                    The fact that the Quran consistently places hearing before
                    vision in multiple verses doesn't appear to be coincidental,
                    especially when we consider that this precise sequence was
                    only scientifically confirmed in the 20th century. This
                    correlation between ancient text and modern scientific
                    discovery invites thoughtful contemplation about the origins
                    of knowledge.
                  </p>

                  <p>
                    Unlike some other ancient texts that contain scientific
                    inaccuracies about the natural world, the Quran's
                    description of sensory development demonstrates a remarkable
                    alignment with contemporary scientific understanding.
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Human Development</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of human development continue to unfold, connecting
            ancient texts with modern scientific discoveries.
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

export default HumanSenses;
