/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Scroll,
  ChevronRight,
  Landmark,
  BookOpen,
  Quote,
  HelpCircle,
  HistoryIcon,
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

// Define types for our component
type ContentSection = {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  iconColor: string;
};

const MourningPharaoh: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Mourning of Pharaoh",
        icon: Landmark,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "hieroglyphs",
        title: "Egyptian Hieroglyphs",
        icon: HistoryIcon,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
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
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
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
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 dark:from-purple-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Scroll className="text-amber-200" size={32} />
            <h1 className="text-4xl font-bold">Mourning of Pharaoh</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">
            Archaeology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("hieroglyphs")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-700"
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
                    Explore ancient Egyptian beliefs and the Quran
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
                      <Landmark className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Mourning of Pharaoh</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there's a peculiar mention that the skies
                    didn't weep for Pharaoh. Skeptics claim that whoever wrote
                    the Quran made a mistake; no one claimed that the sky wept
                    for Pharaohs. Today, Egyptologists have found hieroglyphs
                    revealing that ancient Egyptians indeed believed the sky
                    wept for their deceased Pharaohs.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Ancient Egyptian Funerary Beliefs
                    </h3>
                    <p>
                      Ancient Egyptians had complex beliefs regarding the death
                      of their Pharaohs. These beliefs were recorded in
                      hieroglyphic texts that remained undeciphered for
                      centuries after the Quran was revealed. Only after the
                      decipherment of hieroglyphs in the 1820s did scholars
                      discover that Egyptians believed the sky mourned when a
                      Pharaoh died.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Egyptian Hieroglyphs */}
            <section id="hieroglyphs" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HistoryIcon className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Egyptian Hieroglyphs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-amber-500" /> Historical
                      Context
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Egyptian Hieroglyphs: With the final closing of pagan
                      temples in the 5th century, knowledge of hieroglyphic
                      writing was lost. Although attempts were made, the script
                      remained undeciphered throughout the Middle Ages and the
                      early modern period. The decipherment of hieroglyphic
                      writing was finally accomplished in the 1820s by
                      Jean-Francois Champollion, with the help of the Rosetta
                      Stone."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
                        className="text-amber-600 dark:text-amber-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Egyptian hieroglyphs, 2020
                      </a>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800 mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-amber-500" /> Discovered
                      Funerary Texts
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "When hieroglyphs were finally deciphered they found out
                      how Egyptians mourned their Pharaoh. A pyramid text
                      describing the dead Pharaoh's fight for supremacy in
                      heaven, says: The sky weeps, the stars shake, the keepers
                      of the gods tremble and their servants flee when they
                      behold the King rising up as spirit, as a god who lives on
                      his fathers and possesses his mothers."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="#"
                        className="text-amber-600 dark:text-amber-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Symbols of Transformation, C.G. Jung, Volume 5 page 1757
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Scroll size={16} className="text-amber-500" /> Lost
                        Knowledge
                      </h3>
                      <p>
                        The ability to read Egyptian hieroglyphs was completely
                        lost for over 1,000 years. During the time of Prophet
                        Muhammad (7th century CE), no one in the world could
                        decipher these ancient writings.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <HistoryIcon size={16} className="text-gray-500" />{" "}
                        Modern Discovery
                      </h3>
                      <p>
                        It wasn't until the 19th century that Champollion's
                        breakthrough with the Rosetta Stone allowed scholars to
                        learn that ancient Egyptians believed the sky wept when
                        a Pharaoh died.
                      </p>
                    </div>
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
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/44/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/29"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 44:29
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Neither heaven nor earth wept over them, nor were
                          they reprieved."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ وَمَا
                          كَانُوا مُنْظَرِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ" (Neither
                      heaven nor earth wept over them) directly addresses the
                      ancient Egyptian belief that the sky would weep for their
                      deceased Pharaoh. The Quran specifically contradicts this
                      belief, stating that when the Pharaoh and his people were
                      drowned, the sky did not weep for them.
                    </p>
                  </div>

                  <p className="mt-4">
                    This verse appears to be responding to an ancient Egyptian
                    belief that was documented in hieroglyphic texts - that the
                    sky would weep when a Pharaoh died. The Quran is negating
                    this belief, stating that for this particular Pharaoh
                    (associated with Moses in Islamic tradition), the sky did
                    not weep.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <HelpCircle className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The connection between the Quranic verse and Egyptian
                    hieroglyphic texts that remained undeciphered for over a
                    millennium after the Quran's revelation raises an intriguing
                    question:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the mourning of Pharaoh?
                    </h3>
                    <p>
                      The reference to heavens not weeping for the Pharaoh
                      appears to address a belief that was recorded in Egyptian
                      hieroglyphs - texts that were completely unreadable to
                      anyone in the world during the 7th century CE when the
                      Quran was revealed. The understanding of hieroglyphic
                      writing had been lost centuries earlier and wouldn't be
                      recovered until the 1820s.
                    </p>
                  </div>

                  <p>This historical context is significant because:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Knowledge of hieroglyphic writing was lost in the 5th
                      century CE
                    </li>
                    <li>The Quran was revealed in the 7th century CE</li>
                    <li>
                      Hieroglyphs weren't deciphered until the 19th century
                    </li>
                    <li>
                      Only after decipherment did scholars discover texts
                      stating "the sky weeps" for dead Pharaohs
                    </li>
                  </ul>

                  <p className="mt-4">
                    The Quranic reference to heaven not weeping for the Pharaoh
                    appears to be addressing a belief that would have been
                    unknown to people living in 7th century Arabia. This
                    connection between ancient Egyptian beliefs and the Quranic
                    text invites contemplation about the origins of knowledge
                    contained within the Quran.
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
            <h3 className="text-lg font-medium">Exploring Ancient Knowledge</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discovering connections between ancient beliefs, sacred texts, and
            modern archaeological findings.
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

export default MourningPharaoh;
