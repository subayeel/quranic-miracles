/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  GlassWater,
  ChevronRight,
  AlarmClock,
  BookOpen,
  Quote,
  HelpCircle,
  Rabbit,
  ArrowUp,
  Sparkles,
  Dna,
  FileText,
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

// Define types for section content
type SectionContent = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  iconColor: string;
};

const HydrogenPeroxide = () => {
  // State to track active section
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define content sections
  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Aging Connection",
        icon: GlassWater,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Dna,
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
      <div className="bg-gradient-to-r from-purple-500 to-blue-700 dark:from-purple-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <GlassWater className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Hydrogen Peroxide</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Biology - Advanced
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
              className="text-purple-100 border-purple-100 hover:bg-purple-800/20"
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
                    Explore the dual role of H₂O₂
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
                      <GlassWater className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Aging Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, white hair and weak bones are linked by
                    something flammable. Skeptics claim this connection is
                    mistaken. However, modern science reveals that hydrogen
                    peroxide—a compound that can be flammable at high
                    concentrations—is linked to both conditions.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Dual Role of H₂O₂
                    </h3>
                    <p>
                      Hydrogen peroxide (H₂O₂) plays multiple roles in the human
                      body. It accumulates in hair follicles causing graying and
                      also contributes to bone loss in estrogen deficiency. This
                      dual role connecting two seemingly unrelated aging
                      processes was unknown until recent scientific discoveries.
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
                      <Dna className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Gray Hair
                      Connection
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "It's been known for years that hair turns gray due to a
                      natural buildup of hydrogen peroxide in hair follicles,
                      which causes oxidative stress and graying. (Hydrogen
                      peroxide solutions have been used for years as a cheap and
                      easy way to 'go blonde.')
                      <br />
                      <br />
                      In younger people, an enzyme called catalase breaks down
                      hydrogen peroxide into water and oxygen. But lower levels
                      of this enzyme, combined with lower levels of enzymes
                      called MSR A and B that repair hydrogen peroxide damage,
                      cause hair to turn gray as we age."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.nbcnews.com/healthmain/gray-hair-cure-scientists-find-root-cause-discoloration-1c6437362"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NBC News, Gray hair cure? Scientists find root cause of
                        discoloration, 2013
                      </a>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800 mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Bone Health
                      Connection
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "We found that glutathione peroxidase 1 (Gpx), the enzyme
                      primarily responsible for the intracellular degradation of
                      hydrogen peroxide, is overwhelmingly the predominant
                      antioxidant enzyme expressed by osteoclasts...
                      <br />
                      <br />
                      These results suggest that hydrogen peroxide is the
                      reactive oxygen species responsible for signaling the bone
                      loss of estrogen deficiency."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://academic.oup.com/pnas/article/102/40/14406/1806324"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Oxford Academic, Hydrogen Peroxide Is Essential for
                        Estrogen-Deficiency Bone Loss and Osteoclast Formation,
                        2005
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <AlarmClock size={16} className="text-blue-500" /> Aging
                        Process
                      </h3>
                      <p>
                        As we age, hydrogen peroxide accumulates in our bodies
                        due to reduced antioxidant enzyme activity. This natural
                        process affects multiple systems, including hair
                        follicles and bone tissue.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Rabbit size={16} className="text-red-500" /> Explosive
                        Nature
                      </h3>
                      <p>
                        At high concentrations (above 91%), hydrogen peroxide
                        becomes extremely dangerous and flammable. It's even
                        used as rocket fuel due to its explosive properties.
                      </p>
                    </div>
                  </div>

                  <p>
                    The scientific discovery of hydrogen peroxide's dual role in
                    both graying hair and weakening bones was only made in
                    recent decades. The connection between these seemingly
                    unrelated aging processes through a compound that can be
                    flammable presents a remarkable parallel to the Quranic
                    description.
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
                        href="https://quran.com/19/4"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 19:4
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "He said, 'My Lord, my bones have become feeble, and
                          my hair is aflame with gray, and never, Lord, have I
                          been disappointed in my prayer to you.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ
                          الرَّأْسُ شَيْبًا وَلَمْ أَكُنْ بِدُعَائِكَ رَبِّ
                          شَقِيًّا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "وَاشْتَعَلَ الرَّأْسُ شَيْبًا" (washtaʿala
                      al-raʾsu shayban) contains the root word "شعل" (sh-ʿ-l)
                      which relates to flames, burning, or ignition. The verse
                      connects weak bones and gray hair using terminology
                      related to combustion or flammability.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <FileText size={16} className="text-green-500" />{" "}
                      Linguistic Analysis
                    </h3>
                    <p>
                      The Arabic word "اشْتَعَلَ" (ishtaʿala) refers to
                      something catching fire or becoming aflame. This
                      metaphorical description of gray hair uses terminology
                      related to combustion—remarkably similar to the flammable
                      properties of hydrogen peroxide at high concentrations.
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
                    The correlation between modern scientific findings and the
                    Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about hydrogen peroxide?
                    </h3>
                    <p>
                      The connection between weak bones and gray hair through a
                      flammable compound (hydrogen peroxide) was only discovered
                      by science in the early 21st century. The presence of this
                      scientific relationship in a text from the 7th century is
                      remarkable considering:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>
                        Hydrogen peroxide wasn't isolated and identified until
                        1818 by Louis Jacques Thénard
                      </li>
                      <li>
                        Its role in graying hair was only confirmed in the early
                        2000s
                      </li>
                      <li>
                        Its connection to bone loss was discovered even more
                        recently in 2005
                      </li>
                    </ul>
                  </div>

                  <p>
                    The Quranic verse connects two seemingly unrelated aging
                    processes—weak bones and gray hair—through imagery of
                    combustion or flammability. Modern science has since
                    discovered that hydrogen peroxide, a compound that is indeed
                    flammable at high concentrations, is the common factor
                    behind both conditions.
                  </p>

                  <p>
                    This alignment between ancient text and contemporary
                    scientific discovery invites contemplation about the origins
                    of knowledge in religious texts and their relationship to
                    modern scientific understanding.
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
            <h3 className="text-lg font-medium">Exploring Human Biology</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The connections between ancient wisdom and modern scientific
            discoveries continue to inspire and enlighten our understanding of
            the human body.
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

export default HydrogenPeroxide;
