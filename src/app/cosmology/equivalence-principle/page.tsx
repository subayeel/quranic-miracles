/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Scale,
  ChevronRight,
  Rocket,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
  GraduationCap,
  FlaskConical,
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

type SectionContent = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const EquivalencePrinciple: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Gravity & Acceleration",
        icon: Scale,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: FlaskConical,
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
            <Scale className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Equivalence Principle</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Physics - Advanced
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
              className="text-purple-100 border-purple-300 hover:bg-purple-700"
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
                    Exploring gravity and acceleration
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
                      <Scale className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Gravity & Acceleration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, mass balance on Earth and acceleration are
                    mentioned together. Skeptics claim that whoever wrote the
                    Quran made a mistake; a mass balance will always work on
                    Earth or in zero G, no need for any acceleration. Today
                    scientists confirm that the mass balance only works on Earth
                    or in an accelerating frame, never in zero G.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Acceleration is Equivalent to Gravity
                    </h3>
                    <p>
                      According to the Equivalence Principle, there is no
                      physical difference between the effects of gravity and
                      acceleration. A person standing in an elevator
                      accelerating upward feels the same force as someone
                      standing on Earth in a gravitational field. However, this
                      equivalence breaks down in zero gravity environments.
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
                      <FlaskConical className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Explanation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In the theory of general relativity, the equivalence
                      principle is the equivalence of gravitational and inertial
                      mass, and Albert Einstein's observation that the
                      gravitational 'force' as experienced locally while
                      standing on a massive body (such as the Earth) is the same
                      as the pseudo-force experienced by an observer in a
                      non-inertial (accelerated) frame of reference."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Equivalence_principle"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Equivalence Principle, 2021
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Rocket size={16} className="text-blue-500" /> Mass
                        Balance in Space
                      </h3>
                      <p>
                        A mass balance (scale) doesn't work in zero gravity. If
                        you put a mass on one side, it won't tilt in zero-G
                        because there's no gravitational force acting on the
                        objects being compared.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <GraduationCap size={16} className="text-gray-500" />{" "}
                        Einstein's Insight
                      </h3>
                      <p>
                        However, if a spaceship accelerates, the mass balance
                        will work again as if it were still on
                        Earth—demonstrating Einstein's equivalence principle in
                        action.
                      </p>
                    </div>
                  </div>

                  <p>
                    This principle was formalized by Einstein in the early 20th
                    century, but the relationship between gravity and
                    acceleration would have been impossible to conceptualize in
                    the 7th century—let alone understand that mass balances
                    don't work in zero gravity.
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
                        href="https://www.quranwow.com/#/ch/55/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/7"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 55:7
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the sky, He raised; and He set up the balance."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧ وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Connection
                    </Badge>
                    <p className="mt-3">
                      The verse mentions two concepts in conjunction: the
                      raising of the sky (which can be interpreted as an
                      accelerating frame in space) and the setting up of the
                      balance (al-Mizan, which refers to scales or weighing
                      instruments). Today, we understand why these concepts
                      appear together in the same verse—because scales function
                      properly in two conditions: under gravity and in
                      acceleration.
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
                    The connection between the Quranic verse and the modern
                    understanding of the equivalence principle raises a profound
                    question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the equivalence principle?
                    </h3>
                    <p>
                      The relationship between acceleration and gravity—a
                      concept that required Einstein's genius to formalize in
                      the 20th century—appears to be referenced in a text from
                      the 7th century. The understanding that mass balances work
                      in both gravitational fields and accelerating frames, but
                      not in zero gravity, would have been impossible to
                      discover without advanced physics knowledge and space
                      exploration.
                    </p>
                  </div>

                  <p>
                    In the 7th century, people used balance scales regularly,
                    but they had no way of knowing these instruments would be
                    useless in zero gravity. The mention of raising the sky
                    (acceleration) alongside the balance (scales) shows a
                    connection between these phenomena that aligns remarkably
                    with what modern physics has confirmed through Einstein's
                    equivalence principle.
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
            <h3 className="text-lg font-medium">Exploring Physics and Faith</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intersection of ancient texts and modern science continues to
            reveal fascinating connections across centuries of human knowledge.
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

export default EquivalencePrinciple;
