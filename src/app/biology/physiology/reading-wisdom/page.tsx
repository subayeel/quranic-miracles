/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  BookOpen,
  Brain, // Or another icon related to mind/learning
  ChevronRight,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
  ScrollText, // Icon for text/scroll
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ReadingWisdom = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Born Ready to Read",
        icon: Brain,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Modern Discovery",
        icon: ScrollText, // Icon for text/document
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "Wisdom in the Quran",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Keeping green for Quran section as in AstronomyDay
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Keeping amber for reflection
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
      <div className="bg-gradient-to-r from-indigo-600 to-violet-800 dark:from-indigo-800 dark:to-violet-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Reading</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Unlocking the innate ability
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-100 hover:bg-indigo-800/30"
              onClick={() => scrollToSection("intro")}
            >
              Learn About It
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
                  <CardTitle className="text-lg">Reading Insights</CardTitle>
                  <CardDescription>
                    Explore the built-in capacity for reading
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
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Brain className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Born Ready to Read?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For a long time, it was commonly thought that learning to
                    read was purely something we acquire step-by-step well after
                    being born. It seemed like a skill built entirely from
                    scratch through teaching and practice.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Historical View vs. Modern Science
                    </h3>
                    <p>
                      In the 7th century, the idea that a newborn baby's brain
                      might already be set up in a specific way to help them
                      learn to read later on would have been completely
                      unimaginable. Reading was clearly a learned ability, like
                      riding a horse or weaving. Yet, recent science tells a
                      surprising story!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <ScrollText className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Modern Scientific Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> Neuroimaging
                      Insights
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Humans Are Born With Brains ‘Prewired’ to See Words
                      <br />
                      Humans are born with a part of the brain that is prewired
                      to be receptive to seeing words and letters, setting the
                      stage at birth for people to learn how to read, a new
                      study suggests. Analyzing brain scans of newborns,
                      researchers found that this part of the brain – called the
                      “visual word form area” (VWFA) – is connected to the
                      language network of the brain.
                      <br />
                      ... “We found that isn’t true. Even at birth, the VWFA is
                      more connected functionally to the language network of the
                      brain than it is to other areas,” Saygin said. “It is an
                      incredibly exciting finding.”
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://neurosciencenews.com/neurodevelopment-language-prewired-17202/"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Neuroscience News, Humans Are Born With Brains
                        ‘Prewired’ to See Words, 2020
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Brain size={16} className="text-teal-500" /> The Visual
                      Word Form Area (VWFA)
                    </h3>
                    <p>
                      This specific area in the brain (VWFA) isn't just a blank
                      slate; even in newborns, it shows connections to the
                      language parts of the brain. This suggests our brains come
                      with a predisposition, a kind of "prewiring," that makes
                      us uniquely ready to process written words when we
                      encounter them. This fascinating discovery is quite
                      recent!
                    </p>
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
                    <CardTitle>Wisdom in the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Interestingly, the very first verses revealed in the Quran
                    touch upon the act of reading and the creation of humanity:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/96/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/0"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 96:1-5
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Read: In the Name of your Lord who created.
                          <br />
                          Created man from a clinging substance.
                          <br />
                          Read: And your Lord is the Most Generous.
                          <br />
                          He who taught by the pen.
                          <br />
                          Taught man what he never knew."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                          <br />
                          ١ اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
                          <br />
                          ٢ خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ
                          <br />
                          ٣ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ
                          <br />
                          ٤ الَّذِي عَلَّمَ بِالْقَلَمِ
                          <br />٥ عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Connecting the dots
                    </Badge>
                    <p className="mt-3">
                      The verses start with a command to "Read." Then they
                      mention the creation of man "from a clinging substance"
                      (often interpreted as the early embryonic stage, *before*
                      birth). Following this is the mention of teaching "by the
                      pen," which is the tool for writing words. The sequence
                      suggests a connection between creation (before birth) and
                      the ability taught "by the pen" (reading/writing). Could
                      this imply that the *capacity* or *potential* for reading
                      is instilled in humans from their very creation?
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
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific discovery about the brain's
                    prewiring for reading, let's reflect on the Quranic verses
                    revealed 1400 years ago:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century know that the
                      foundation for reading is established from the very
                      beginning of human creation?
                    </h3>
                    <p>
                      At a time when reading was seen purely as a skill acquired
                      long after birth through instruction and practice, and
                      with no understanding of neuroscience or brain
                      development, the Quran speaks about creation ("before
                      birth") and teaching by the pen (reading) in close
                      proximity. The concept of a 'prewired' brain was certainly
                      beyond the knowledge and tools available 1400 years ago.
                      This alignment between an ancient text and a modern
                      scientific finding invites us to consider the source of
                      such knowledge.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-indigo-600 hover:bg-indigo-700">
              <BookOpen size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
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
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-indigo-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Knowledge and Creation
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting insights about human creation and the capacity for
            reading across time.
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

export default ReadingWisdom;
