/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Lock, // Changed icon for the topic
  ChevronRight,
  History,
  BookOpen,
  Quote,
  HelpCircle,
  RotateCcw,
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

// TypeScript interfaces - Reusable from the example
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

const DoorLocks: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "The Story of Joseph",
        icon: BookOpen, // Start with BookOpen for the Quranic story context
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "context",
        title: "Ancient Locks: The View",
        icon: History,
        color: "bg-gray-100 dark:bg-gray-800", // Use gray for historical context
        iconColor: "text-gray-500",
      },
      {
        id: "evidence",
        title: "Archaeological Discovery",
        icon: RotateCcw, // Icon for discovery/change in understanding
        color: "bg-indigo-100 dark:bg-indigo-900", // Use indigo for the evidence section
        iconColor: "text-indigo-500",
      },
      {
        id: "quranic_detail",
        title: "The Quranic Detail",
        icon: Lock, // Use Lock for the specific detail
        color: "bg-green-100 dark:bg-green-900", // Use green for Quranic analysis
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Point of Contemplation",
        icon: HelpCircle,
        color: "bg-rose-100 dark:bg-rose-900",
        iconColor: "text-rose-500",
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">The Miracle of Door Locks</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">History - Verified</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("context")}
            >
              Discover <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-50 border-blue-200 hover:bg-blue-800/50"
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
                    Explore ancient door technology
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
            {/* Introduction - The Story */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Story of Prophet Joseph (Yusuf)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran narrates the detailed and inspiring story of
                    Prophet Joseph. Part of this story describes a pivotal
                    moment involving closed doors.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Scene in the Quran
                    </h3>
                    <p>
                      In the house where Joseph was living, the lady of the
                      house attempted to seduce him. The description of this
                      event includes a specific detail about the doors.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Context */}
            <section id="context" className="scroll-mt-20">
              <Card className="border-l-4 border-gray-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <History className="text-gray-500" size={24} />
                    </div>
                    <CardTitle>
                      Ancient Locks: The Previously Held View
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    For a long time, it was commonly believed that advanced door
                    locking mechanisms were primarily inventions of the Greek
                    and Roman civilizations, dating back to the 1st millennium
                    BC.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-gray-500" /> Historical
                      Perception
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "During 1st millennia BC, locks finally started improving
                      with the technologies and designs that were introduced by
                      Greeks and Romans..."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.historyofkeys.com/" // Use the provided reference URL
                        className="text-gray-600 dark:text-gray-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        History Of Keys, History Of Locks, 2021
                      </a>
                    </div>
                  </div>
                  <p>
                    Based on this understanding, some skeptics questioned the
                    Quranic narrative, suggesting that mentioning secured doors
                    in the time of Joseph (who lived centuries before the 1st
                    millennium BC) might be an anachronism or a mistake,
                    assuming locks were not prevalent or sophisticated enough
                    then.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Archaeological Evidence */}
            <section id="evidence" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <RotateCcw className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Archaeological Confirmation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    However, modern archaeology has revealed a fascinating truth
                    that challenges the older historical view. Excavations and
                    research have uncovered clear evidence of sophisticated door
                    locking mechanisms that existed much, much earlier than the
                    Greek and Roman eras.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Ancient Egyptian Ingenuity
                    </h3>
                    <p>
                      Evidence shows that the ancient Egyptians were pioneers in
                      lock technology. They developed a form of pin-tumbler lock
                      made of wood approximately 6000 years ago.
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.historyofkeys.com/" // Use the provided reference URL again
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        History Of Keys, History Of Locks, 2021
                      </a>
                    </div>
                  </div>

                  <p>
                    This discovery pushes the history of functional door locks
                    back by several millennia, placing their invention squarely
                    in ancient Egypt, long before the time of Joseph and
                    thousands of years before the previously credited Greek and
                    Roman civilizations.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference & Detail */}
            <section id="quranic_detail" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Lock className="text-green-500" size={24} />
                    </div>
                    <CardTitle>The Quranic Detail About Doors</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/12/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/23" // Link to Quran 12:23
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 12:23
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "She in whose house he was living tried to seduce him.
                          She shut the doors, and said, “I am yours.” He said,
                          “Allah forbid! He is my Lord. He has given me a good
                          home. Sinners never succeed.”
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَرَاوَدَتْهُ الَّتِي هُوَ فِي بَيْتِهَا عَنْ نَفْسِهِ
                          وَغَلَّقَتِ الْأَبْوَابَ وَقَالَتْ هَيْتَ لَكَ ۚ قَالَ
                          مَعَاذَ اللَّهِ ۖ إِنَّهُ رَبِّي أَحْسَنَ مَثْوَايَ ۖ
                          إِنَّهُ لَا يُفْلِحُ الظَّالِمُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Interpreting "Shut the Doors"
                    </Badge>
                    <p className="mt-3">
                      The phrase "She shut the doors" (وغلّقت الأبواب) implies
                      more than simply closing them. In the context of
                      preventing someone from leaving or anyone from entering
                      during a private attempt, it strongly suggests securing
                      them – i.e., locking them. For the doors to be truly
                      effective in preventing access, they would need to be
                      locked.
                    </p>
                  </div>

                  <p>
                    The Quran, revealed in the 7th century CE, mentions this
                    detail about secured doors in a story set in ancient Egypt.
                    At the time of the Quran's revelation, the widespread
                    knowledge available would align with the later Greek/Roman
                    understanding of locks, not the sophisticated Egyptian ones
                    from millennia earlier.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-rose-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900">
                      <HelpCircle className="text-rose-500" size={24} />
                    </div>
                    <CardTitle>A Point of Contemplation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the historical context available in the 7th
                    century, when the prevailing knowledge about advanced locks
                    pointed towards Greek and Roman origins much later than the
                    time of Joseph, the Quran's detail presents an interesting
                    point for reflection.
                  </p>

                  <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border border-rose-100 dark:border-rose-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could knowledge of ancient Egyptian door locks,
                      discovered by modern archaeology, be present in a
                      7th-century text?
                    </h3>
                    <p>
                      The Quran accurately portrays a detail about the
                      technology available in ancient Egypt (specifically, the
                      existence of effective door locks) during the era of
                      Prophet Joseph. This historical accuracy aligns with
                      recent archaeological findings, not with the historical
                      understanding prevalent in the 7th century CE. This
                      invites contemplation about the source of such information
                      in the Quran.
                    </p>
                  </div>

                  <p>
                    The fact that the Quran refers to a situation implying
                    secured doors in the time and place of Prophet Joseph—a
                    detail later validated by the discovery of ancient Egyptian
                    locks predating Greek/Roman ones by thousands of
                    years—highlights a remarkable correlation between a
                    7th-century text and modern historical and archaeological
                    knowledge.
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Historical Details
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting ancient narratives with modern discoveries can offer new
            perspectives on historical accuracy.
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

export default DoorLocks;
