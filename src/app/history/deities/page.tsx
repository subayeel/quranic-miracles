/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Crown,
  ChevronRight,
  Book,
  ScrollText,
  Quote,
  HelpCircle,
  History,
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

interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const Deities = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Pharaohs as Gods",
        icon: Crown,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "evidence",
        title: "Historical Evidence",
        icon: History,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: Book,
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
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 dark:from-purple-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Deities</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Ancient History - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("evidence")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-purple-600"
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
                    Explore the divinity of Pharaohs
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
                      <Crown className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Pharaohs as Gods</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, Pharaohs were described as being worshiped
                    like gods. Skeptics claimed that whoever wrote the Quran
                    made a mistake; Pharaohs were respected and obeyed like
                    kings but never worshiped like gods. Today, Egyptologists
                    confirm that Pharaohs were indeed worshiped as deities.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Hidden Knowledge of Ancient Egypt
                    </h3>
                    <p>
                      For centuries, the religious practices of ancient Egypt
                      remained a mystery to the world. The understanding of
                      hieroglyphics was lost until the 19th century when the
                      Rosetta Stone was deciphered, finally allowing scholars to
                      understand the true nature of Pharaonic worship.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Evidence */}
            <section id="evidence" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <History className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Historical Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Academic
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Divinity and Deities in Ancient Egypt.
                      <br />
                      By the early New Kingdom, deification of the living king
                      had become an established practice and the living king
                      could himself be worshiped and supplicated for aid as a
                      god."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        Religion in Ancient Egypt: Gods, Myths, and Personal
                        Practice, p 64.
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <ScrollText size={16} className="text-blue-500" /> Lost
                        Knowledge
                      </h3>
                      <p>
                        Nobody knew how to read hieroglyphs for over 1,000 years
                        after the collapse of ancient Egyptian civilization. It
                        wasn't until the Rosetta Stone was deciphered in the
                        19th century that we could understand their religious
                        texts.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Crown size={16} className="text-amber-500" /> Divine
                        Status
                      </h3>
                      <p>
                        Modern archaeological and historical research confirms
                        that Pharaohs were not merely respected as political
                        leaders but were literally worshiped as incarnations of
                        gods, particularly Horus.
                      </p>
                    </div>
                  </div>

                  <p>
                    Pharaohs claimed divinity and were worshiped as gods by
                    their subjects. This historical fact was only confirmed
                    recently after hieroglyphs were deciphered, yet it was
                    accurately described in the Quran 1400 years before these
                    discoveries.
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
                      <Book className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/28/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/38"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 28:38
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Pharaoh said, 'O nobles, I know of no god for you
                          other than myself. So fire-up the bricks for me O
                          Hamaan, and build me a tower, that I may ascend to the
                          God of Moses, though I think he is a liar.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَقَالَ فِرْعَوْنُ يَا أَيُّهَا الْمَلَأُ مَا عَلِمْتُ
                          لَكُمْ مِنْ إِلَٰهٍ غَيْرِي فَأَوْقِدْ لِي يَا
                          هَامَانُ عَلَى الطِّينِ فَاجْعَلْ لِي صَرْحًا لَعَلِّي
                          أَطَّلِعُ إِلَىٰ إِلَٰهِ مُوسَىٰ وَإِنِّي لَأَظُنُّهُ
                          مِنَ الْكَاذِبِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "O nobles, I know of no god for you other than myself"
                      (مَا عَلِمْتُ لَكُمْ مِنْ إِلَٰهٍ غَيْرِي) - In this
                      verse, Pharaoh explicitly claims divinity. This perfectly
                      aligns with what modern Egyptologists have discovered
                      about the religious status of Pharaohs in ancient Egyptian
                      society.
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
                    The correlation between modern archaeological findings and
                    the Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known that
                      Pharaohs were worshiped as deities?
                    </h3>
                    <p>
                      In 7th century Arabia, there was no access to ancient
                      Egyptian religious texts. The hieroglyphic script had been
                      lost for centuries and would not be deciphered until the
                      19th century with the discovery of the Rosetta Stone. Yet
                      the Quran accurately describes this historical fact that
                      was unknown to the world at that time.
                    </p>
                  </div>

                  <p>
                    The divine status of Pharaohs—that they weren't merely
                    respected rulers but actually worshiped as gods—was
                    completely unknown during the time of the Quran's
                    revelation. This information remained hidden from humanity
                    until scholars finally decoded hieroglyphics many centuries
                    later. The precise reference in the Quran to Pharaohs
                    claiming godhood aligns remarkably with what modern
                    archaeological research has confirmed about ancient Egyptian
                    religious practices.
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
            <h3 className="text-lg font-medium">Exploring Ancient History</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of ancient civilizations continue to unfold,
            connecting ancient texts with modern archaeological discoveries.
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

export default Deities;
