/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Compass,
  ChevronRight,
  Globe,
  BookOpen,
  Quote,
  HelpCircle,
  Atom,
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

type ContentSection = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const IsotropyComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Isotropy in Space",
        icon: Compass,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Globe,
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
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 dark:from-indigo-700 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="text-indigo-200" size={32} />
            <h1 className="text-4xl font-bold">Isotropy</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Cosmology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-200 hover:bg-indigo-700"
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
                    Explore cosmic directionality
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
                      <Compass className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Isotropy in Space</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, it's indicated that there is no preferred
                    direction in outer space. Skeptics claim that whoever wrote
                    the Quran made a mistake; the preferred direction should be
                    the center of the universe. Today, cosmologists confirm that
                    the universe has no center and there are no preferred
                    directions in outer space.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      No Preferred Direction in Space
                    </h3>
                    <p>
                      Isotropy is a fundamental concept in modern cosmology that
                      describes how the universe looks essentially the same in
                      all directions. There is no special direction or
                      orientation in space that is fundamentally different from
                      others when observed on a large scale.
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
                      <Globe className="text-blue-500" size={24} />
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
                      "Definition of Isotropy:
                      <br />
                      No preferred directions in space. Definition of Isotropy
                      Qualitatively, isotropy refers to the absence of preferred
                      directions in space."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        'Primordial Cosmology', Montani Battisti Benini
                        Imponente, World Scientific (2011) page 97.
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Atom size={16} className="text-blue-500" /> Modern
                        Cosmology
                      </h3>
                      <p>
                        Modern cosmological models, particularly the Standard
                        Model, are built on the Cosmological Principle, which
                        holds that the universe is both homogeneous (the same
                        everywhere) and isotropic (the same in all directions).
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Globe size={16} className="text-gray-500" /> No Center
                        to the Universe
                      </h3>
                      <p>
                        Contrary to earlier beliefs, modern cosmology has
                        established that the universe has no center. The Big
                        Bang occurred everywhere at once, and all points are
                        equivalent in the expanding universe.
                      </p>
                    </div>
                  </div>

                  <p>
                    The concept of isotropy—that there are no preferred
                    directions in space—is a cornerstone of modern cosmology but
                    was completely unknown in the ancient world. The prevailing
                    view throughout most of human history was that the Earth was
                    at the center of the universe, creating a preferred
                    direction (toward the center).
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
                        href="https://www.quranwow.com/#/ch/24/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/35"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 24:35
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Allah is the Light of the heavens and the earth. The
                          allegory of His light is that of a pillar on which is
                          a lamp. The lamp is within a glass. The glass is like
                          a brilliant planet, fueled by a blessed tree, an olive
                          tree, neither eastern nor western. Its oil would
                          almost illuminate, even if no fire has touched it.
                          Light upon Light. Allah guides to His light whomever
                          He wills. Allah thus cites the parables for the
                          people. Allah is cognizant of everything."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٥ اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ
                          نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ ۖ الْمِصْبَاحُ
                          فِي زُجَاجَةٍ ۖ الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ
                          دُرِّيٌّ يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ
                          لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا
                          يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ ۚ نُورٌ عَلَىٰ
                          نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَنْ يَشَاءُ ۚ
                          وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ ۗ وَاللَّهُ
                          بِكُلِّ شَيْءٍ عَلِيمٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "Neither eastern nor western" (لَا شَرْقِيَّةٍ وَلَا
                      غَرْبِيَّةٍ) is particularly significant. In the context
                      of the verse, it describes an olive tree that is "neither
                      eastern nor western," suggesting there is no preferred
                      direction in the cosmos—a concept that aligns perfectly
                      with the modern understanding of isotropy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern cosmological understanding of
                    isotropy and the Quranic verse raises an intriguing
                    question:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about isotropy?
                    </h3>
                    <p>
                      The concept of isotropy—that there are no preferred
                      directions in space—is a relatively recent development in
                      cosmology, requiring advanced scientific understanding and
                      observations. Yet, this concept appears to be referenced
                      in a text from the 7th century, when the prevailing view
                      was that the Earth was at the center of the universe with
                      clear directionality.
                    </p>
                  </div>

                  <p>
                    In the 7th century, the geocentric model of the universe was
                    dominant across civilizations. The idea that the universe
                    has no center and no preferred directions would have been
                    considered counterintuitive, if not heretical. The Quranic
                    reference to something being "neither eastern nor western"
                    in the context of celestial descriptions aligns remarkably
                    with what modern cosmology has only confirmed in recent
                    decades through advanced observations and mathematical
                    models.
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
            <Sparkles className="text-indigo-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Cosmic Principles</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of our universe continue to unfold, connecting ancient
            texts with modern scientific discoveries.
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

export default IsotropyComponent;
