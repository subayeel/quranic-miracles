/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Torus,
  ChevronRight,
  Atom,
  BookOpen,
  Quote,
  HelpCircle,
  Expand,
  ArrowUp,
  Sparkles,
  History,
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

// Define TypeScript interfaces
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

const ExpandingUniverse: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Expanding Universe",
        icon: Torus,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Atom,
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
        id: "historical",
        title: "Historical Context",
        icon: History,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
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

  const scrollToSection = (id: string): void => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 dark:from-purple-800 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Torus className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Expanding Universe</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Cosmology - Advanced
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
              className="text-white border-white hover:bg-purple-700"
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
                    Explore the expanding cosmos
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
                      <Torus className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Expanding Universe</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, the universe is described as expanding.
                    Skeptics claimed that whoever wrote the Quran made a
                    fundamental error, as the universe was believed to be static
                    and unchanging for centuries. Today, modern science confirms
                    that the universe is indeed expanding at an accelerating
                    rate.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Expanding Since the Big Bang
                    </h3>
                    <p>
                      The universe has been expanding since its inception in the
                      Big Bang approximately 13.8 billion years ago. This
                      expansion is not just continuing today but actually
                      accelerating, driven by a mysterious force scientists call
                      "Dark Energy."
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
                      <Atom className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Modern
                      Cosmological Discoveries
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In physical cosmology, cosmic inflation, cosmological
                      inflation, or just inflation, is a theory of exponential
                      expansion of space in the early universe... The
                      inflationary epoch lasted from 10^−36 seconds after the
                      conjectured Big Bang singularity to some time between
                      10^−33 and 10^−32 seconds after the singularity. Following
                      the inflationary period, the universe continued to expand,
                      but at a slower rate."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Inflation_(cosmology)"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Inflation (Cosmology), 2023
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Expand size={16} className="text-blue-500" /> Hubble's
                        Discovery
                      </h3>
                      <p>
                        In 1929, Edwin Hubble observed that galaxies are moving
                        away from us, and the farther they are, the faster they
                        recede. This observation led to the understanding that
                        the universe is expanding, not static as previously
                        believed.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Atom size={16} className="text-blue-500" /> Dark Energy
                      </h3>
                      <p>
                        Astronomers have confirmed the existence of "Dark
                        Energy," a mysterious repulsive force that counteracts
                        gravity. As distance increases, this force becomes
                        stronger, accelerating the universe's expansion.
                      </p>
                    </div>
                  </div>

                  <p>
                    Scientists today do not fully understand what this "Dark
                    Energy" is, but they know that it comprises about 68% of the
                    universe's total energy and is causing the entire universe
                    to expand at an increasing rate. This acceleration was only
                    discovered in the late 1990s, earning the scientists the
                    Nobel Prize in Physics in 2011.
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
                        href="https://quran.com/51/47"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 51:47
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the heaven, We built it with craftsmanship and We
                          are still expanding."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا
                          لَمُوسِعُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "Wa-innā lamūsiʿūna وَإِنَّا لَمُوسِعُونَ" specifically
                      translates to "We are indeed expanding it." The present
                      continuous tense used here indicates an ongoing
                      action—that the expansion of the universe is still
                      happening, a fact confirmed by modern science.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Context */}
            <section id="historical" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <History className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Historical Context</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Understanding the historical context is crucial to
                    appreciating the significance of this reference in the
                    Quran:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-medium mb-3">
                      Scientific Understanding in the 7th Century
                    </h3>
                    <p>
                      In the 7th century when the Quran was revealed, the
                      prevailing cosmological understanding across civilizations
                      was that of a static, unchanging universe. The concept of
                      an expanding cosmos was completely foreign to human
                      thought.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-amber-500" /> Einstein's
                      "Greatest Blunder"
                    </h3>
                    <p>
                      Even Albert Einstein, as late as the early 20th century,
                      initially rejected the idea of an expanding universe. When
                      his equations of General Relativity suggested the universe
                      must be expanding or contracting, he introduced a
                      "cosmological constant" to force a static solution. After
                      Hubble's discovery confirmed the expansion, Einstein
                      called this modification his "greatest blunder."
                    </p>
                  </div>

                  <p className="mt-4">
                    The Bible in Job 37:18 describes the sky as "hard as a
                    mirror of cast bronze," supporting the then-common belief in
                    a static, solid firmament. This stands in contrast to the
                    Quranic description of an expanding heaven, which aligns
                    with modern scientific understanding.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <HelpCircle className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern cosmological discoveries and
                    the Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the expanding universe?
                    </h3>
                    <p>
                      The concept of an expanding universe—a phenomenon that
                      wasn't scientifically discovered until the 20th century
                      and required advanced telescopes and mathematics to
                      detect—appears to be referenced in a text from the 7th
                      century. This connection between ancient scripture and
                      modern scientific discovery invites contemplation about
                      the origins of such knowledge.
                    </p>
                  </div>

                  <p>
                    The expanding universe is considered one of the most
                    significant discoveries in modern astronomy. It
                    fundamentally changed our understanding of the cosmos and
                    led to theories like the Big Bang. The reference in the
                    Quran to an expanding heaven, at a time when no human could
                    have known this fact, presents a remarkable alignment
                    between ancient text and contemporary science that continues
                    to inspire curiosity and wonder.
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
            <h3 className="text-lg font-medium">Exploring Cosmic Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of our universe continue to unfold, connecting ancient
            wisdom with modern scientific discoveries.
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

export default ExpandingUniverse;
