/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Crown,
  ChevronRight,
  History,
  BookOpen,
  Quote,
  HelpCircle,
  Scroll,
  ArrowUp,
  Sparkles,
  Clock,
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

const PharaohTitle: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Title of Pharaoh",
        icon: Crown,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "history",
        title: "Historical Evidence",
        icon: History,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Accuracy",
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">The Title of Pharaoh</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Historical Linguistics - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("history")}
            >
              Continue <ChevronRight size={16} />
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
                    Explore the evolution of the Pharaoh title
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
                      <Crown className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>The Royal Title of Pharaoh</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For centuries, many believed that all Egyptian rulers were
                    called "Pharaohs" throughout Egyptian history. However,
                    modern archaeological discoveries reveal a different
                    picture—one that the Quran correctly portrayed 1400 years
                    ago.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-lg mb-3">
                      Common Historical Misconception
                    </h3>
                    <p>
                      Many ancient and modern texts incorrectly apply the title
                      "Pharaoh" to Egyptian rulers across all time periods. This
                      includes instances in the Bible where the rulers of Egypt
                      during the time of Abraham and Joseph are called Pharaohs.
                      Modern Egyptology has revealed this to be historically
                      inaccurate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Evidence */}
            <section id="history" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <History className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Historical Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" />{" "}
                      Archaeological Findings
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "From the Twelfth Dynasty onward, the word appears in a
                      wish formula 'Great House, May it Live, Prosper, and be in
                      Health', but again only with reference to the royal palace
                      and not the person. Sometime during the era of the New
                      Kingdom, Second Intermediate Period, pharaoh became the
                      form of address for a person who was king."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Pharaoh"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Pharaoh, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Scroll size={16} className="text-indigo-500" />{" "}
                        Original Meaning
                      </h3>
                      <p>
                        Before the New Kingdom period (c. 1570-1069 BCE), the
                        word "Pharaoh" (pr-ꜥꜣ) meant "Great House" and referred
                        only to the royal palace or court, not to the ruler
                        himself.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Clock size={16} className="text-amber-500" /> Evolution
                        of the Title
                      </h3>
                      <p>
                        Only during the New Kingdom period did "Pharaoh" evolve
                        to become a title used to directly address the Egyptian
                        ruler, coinciding with the time of Moses according to
                        historical timelines.
                      </p>
                    </div>
                  </div>

                  <p>
                    Modern archaeological research conclusively shows that the
                    rulers of Egypt were simply called "kings" during earlier
                    periods, including the time traditionally associated with
                    Joseph. Only later, during the New Kingdom (the era
                    associated with Moses), did the title "Pharaoh" come to
                    designate the ruler.
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
                    <CardTitle>Quranic Accuracy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Remarkably, the Quran makes the correct historical
                    distinction in its terminology, despite being revealed in
                    7th century Arabia, long before modern archaeological
                    discoveries confirmed this historical detail.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://quran.com/12/54"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 12:54 - Joseph's Time
                        </a>
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="italic mb-2">
                            "The king said, 'Bring him to me, and I will reserve
                            him for myself.' And when he spoke to him, he said,
                            'This day you are with us established and secure.'"
                          </p>
                        </div>
                        <div className="font-arabic text-right text-lg">
                          <p dir="rtl">
                            وَقَالَ الْمَلِكُ ائْتُونِي بِهِ أَسْتَخْلِصْهُ
                            لِنَفْسِي ۖ فَلَمَّا كَلَّمَهُ قَالَ إِنَّكَ
                            الْيَوْمَ لَدَيْنَا مَكِينٌ أَمِينٌ
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 text-sm">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Key Term
                        </Badge>
                        <p className="mt-2">
                          "al-malik الْمَلِكُ" means "the king" - correctly used
                          for the pre-New Kingdom ruler
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://quran.com/40/26"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 40:26 - Moses' Time
                        </a>
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="italic mb-2">
                            "Pharaoh said, 'Let me kill Moses, and let him
                            appeal to his Lord. I fear he may change your
                            religion, or spread disorder in the land.'"
                          </p>
                        </div>
                        <div className="font-arabic text-right text-lg">
                          <p dir="rtl">
                            وَقَالَ فِرْعَوْنُ ذَرُونِي أَقْتُلْ مُوسَىٰ
                            وَلْيَدْعُ رَبَّهُ ۖ إِنِّي أَخَافُ أَنْ يُبَدِّلَ
                            دِينَكُمْ أَوْ أَنْ يُظْهِرَ فِي الْأَرْضِ
                            الْفَسَادَ
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 text-sm">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Key Term
                        </Badge>
                        <p className="mt-2">
                          "fir'awn فِرْعَوْنُ" means "Pharaoh" - correctly used
                          for the New Kingdom ruler
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6">
                    The Quran's precise terminology—consistently using "king"
                    for the ruler in Joseph's story and "Pharaoh" for the ruler
                    in Moses' time—perfectly aligns with modern archaeological
                    findings about when this title came into use, despite this
                    knowledge not being available in the 7th century.
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
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The historical accuracy of the Quran's terminology for
                    Egyptian rulers raises a profound question:
                  </p>

                  <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border border-rose-100 dark:border-rose-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the correct usage of the title "Pharaoh"?
                    </h3>
                    <p>
                      This linguistic precision in the Quran—distinguishing
                      between "king" and "Pharaoh" in exactly the historically
                      correct periods—was only confirmed by archaeologists and
                      linguists in the modern era. This level of historical
                      accuracy would have been impossible to know in 7th century
                      Arabia, which had no access to Egyptian hieroglyphic
                      translations or archaeological evidence about ancient
                      Egyptian royal titles.
                    </p>
                  </div>

                  <p>
                    This historical precision stands in contrast to other
                    ancient texts which often anachronistically use "Pharaoh"
                    for all Egyptian rulers. Unlike these texts, the Quran makes
                    the correct distinction despite being revealed centuries
                    before modern archaeological discoveries confirmed these
                    linguistic details about ancient Egypt.
                  </p>

                  <p>
                    The accuracy of such a specific historical detail—one that
                    was unknown to the scholars of the 7th century—invites
                    contemplation about the origins of the knowledge contained
                    in the Quranic text.
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
              Exploring Historical Linguistics
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

export default PharaohTitle;
