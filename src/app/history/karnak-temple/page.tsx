/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Landmark,
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

// TypeScript interfaces
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

const KarnakTemple: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Pharaohs and Pillars",
        icon: Landmark,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "science",
        title: "Archaeological Evidence",
        icon: History,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
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
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-700 dark:to-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Landmark className="text-amber-200" size={32} />
            <h1 className="text-4xl font-bold">Karnak Temple</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">
            Archaeology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-amber-50 border-amber-200 hover:bg-amber-800/50"
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
                    Explore Karnak Temple history
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
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Landmark className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Pillars Built by Pharaohs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, the pillars were attributed to Pharaohs.
                    Skeptics claim that whoever wrote the Quran made a mistake;
                    arguing that the pillars and obelisks were built before the
                    time of Pharaohs. Today, Egyptologists confirm that the
                    pillars and obelisks were indeed built later by Pharaohs.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-lg mb-3">
                      Karnak Temple Chronology
                    </h3>
                    <p>
                      Construction of Karnak temple began in the Middle Kingdom,
                      but the iconic pillars and obelisks were actually built
                      later during the New Kingdom period. This distinction in
                      timing is crucial to understanding who constructed these
                      magnificent structures.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Archaeological Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <History className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Archaeological Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> Historical
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Great Hypostyle Hall
                      <br />
                      Architecture and Construction The Great Hypostyle Hall
                      covers an area of 5,000 m² (54,000 sq ft). The roof, now
                      fallen, was supported by 134 columns in 16 rows; the 2
                      middle rows are higher than the others (being 10 metres
                      (33 ft) in circumference and 24 metres (79 ft) high). The
                      134 papyrus columns represent the primeval papyrus swamp
                      from which Amun; a self-created deity, arose from the
                      waters of chaos at the beginning of creating. The hall was
                      not constructed by Horemheb, or Amenhotep III as earlier
                      scholars had thought but was built entirely by Seti I who
                      engraved the northern wing of the hall with inscriptions.
                      Decoration of the southern wing was completed by the 19th
                      dynasty pharaoh Ramesses II."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Great_Hypostyle_Hall"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Great Hypostyle Hall, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-indigo-500" />{" "}
                        Middle Kingdom Origins
                      </h3>
                      <p>
                        The initial construction of Karnak temple began during
                        the Middle Kingdom period (c. 2055-1650 BCE), when the
                        ruler of Egypt was called "king" rather than "Pharaoh."
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Landmark size={16} className="text-amber-500" /> New
                        Kingdom Expansion
                      </h3>
                      <p>
                        The Great Hypostyle Hall with its 134 massive pillars
                        was built during the New Kingdom (c. 1550-1070 BCE),
                        specifically by Pharaoh Seti I and completed by Pharaoh
                        Ramesses II.
                      </p>
                    </div>
                  </div>

                  <p>
                    The construction chronology reveals a crucial distinction:
                    the temple complex began in the Middle Kingdom era before
                    the title "Pharaoh" was used, but the grand pillars and
                    obelisks that made Karnak famous were built later by rulers
                    who were indeed called Pharaohs. This historical timeline
                    was only confirmed by modern archaeological research.
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
                        href="https://www.quranwow.com/#/ch/38/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/12"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 38:12
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Before them the people of Noah denied the truth; as
                          did Aad, and Pharaoh of pillars."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ وَعَادٌ وَفِرْعَوْنُ
                          ذُو الْأَوْتَادِ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "Al-awtad الْأَوْتَادِ" means stakes or pillars. The
                      phrase "Pharaoh of pillars" is particularly significant
                      because we now know that the title "Pharaoh" was given to
                      Egyptian rulers specifically during the New Kingdom
                      period, not before. This aligns perfectly with
                      archaeological findings about when the massive pillars at
                      Karnak were constructed.
                    </p>
                  </div>
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
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern archaeological findings and
                    the Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border border-rose-100 dark:border-rose-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      Karnak Temple's chronology?
                    </h3>
                    <p>
                      The precise attribution of pillars to Pharaohs—a
                      historical detail that aligns with modern archaeological
                      discoveries about the construction timeline of Karnak
                      Temple—appears in a text from the 7th century. This
                      connection between ancient scripture and archaeological
                      evidence invites contemplation about the origins of such
                      historical knowledge.
                    </p>
                  </div>

                  <p>
                    The distinction between the Middle Kingdom origins of Karnak
                    Temple and the New Kingdom construction of its famous
                    pillars by rulers properly called "Pharaohs" is a nuanced
                    historical detail. This chronological accuracy in the
                    Quranic reference to "Pharaoh of pillars" represents
                    historical precision that would have been impossible to know
                    in 7th century Arabia, far removed from the scholarly
                    understanding of ancient Egyptian history and titles.
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
            <Sparkles className="text-amber-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Ancient Civilizations
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discovering connections between ancient texts and archaeological
            findings reveals the depth of historical knowledge across time.
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

export default KarnakTemple;
