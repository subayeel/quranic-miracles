/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Dna,
  ChevronRight,
  FlaskConical,
  BookOpen,
  Quote,
  HelpCircle,
  SplitSquareVertical,
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

type SectionContent = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const BiologySperm = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Diversity in Sperm",
        icon: Dna,
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
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
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
      <div className="bg-gradient-to-r from-purple-500 to-blue-700 dark:from-purple-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Dna className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Sperm</h1>
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
              className="text-purple-100 border-purple-200 hover:bg-purple-800/30"
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
                    Explore human genetics and reproduction
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
                      <Dna className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Diversity in Sperm</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran describes sperm as "mixed" (amshaj), implying
                    diversity. Critics historically questioned this description,
                    assuming all sperm were identical. Modern science now
                    confirms the remarkable genetic diversity among individual
                    sperm cells produced by a single male.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Chromosomal Diversity in Reproduction
                    </h3>
                    <p>
                      Modern genetics has revealed that while females produce
                      eggs with a single set of chromosomes, males produce
                      millions of sperm with different chromosomal combinations.
                      Each sperm cell carries a unique genetic blueprint, making
                      them fundamentally "mixed" or diverse in their genetic
                      makeup.
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
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In humans, each cell normally contains 23 pairs of
                      chromosomes, for a total of 46. Twenty-two of these pairs,
                      called autosomes, look the same in both males and females.
                      The 23rd pair, the sex chromosomes, differ between males
                      and females. During meiosis, the male produces millions of
                      sperm cells which contain either an X or a Y chromosome.
                      This gives each sperm a 50% chance of fertilizing an egg
                      with either an X or a Y chromosome, thus determining the
                      sex of the baby."
                      <br />
                      <br />
                      "The process of meiotic recombination further increases
                      the genetic diversity in each sperm through crossover
                      events, which shuffle segments between paired chromosomes.
                      This means that each sperm cell contains a unique
                      combination of genes, different not just from other sperm
                      cells but also from the father's own cells."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://ghr.nlm.nih.gov/primer/basics/howmanychromosomes"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Institutes of Health, Genetics Home Reference
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <SplitSquareVertical
                          size={16}
                          className="text-blue-500"
                        />{" "}
                        Genetic Variation
                      </h3>
                      <p>
                        Each sperm cell carries a different genetic combination
                        due to the process of meiotic recombination, creating
                        billions of possible genetic variations from a single
                        male.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Dna size={16} className="text-gray-500" /> Female
                        Contribution
                      </h3>
                      <p>
                        Unlike sperm, each egg cell from a female contains a
                        single, consistent set of chromosomes, providing a
                        stable genetic foundation that pairs with the variable
                        male contribution.
                      </p>
                    </div>
                  </div>

                  <p>
                    This genetic diversity in sperm was completely unknown in
                    ancient times. Only with the development of modern genetic
                    science in the 20th century did we gain the ability to
                    observe and understand these microscopic differences between
                    individual sperm cells.
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
                        href="https://quran.com/76/2"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 76:2
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "We created man from a mixed sperm (nutfatin
                          amshajin), to test him; and We made him hearing and
                          seeing."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢ إِنَّا خَلَقْنَا الْإِنْسَانَ مِنْ نُطْفَةٍ
                          أَمْشَاجٍ نَبْتَلِيهِ فَجَعَلْنَاهُ سَمِيعًا بَصِيرًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Term
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "Amshaje أَمْشَاجٍ" means "mixed" or
                      "mingled" or "combined" - describing something not uniform
                      or not unique. In the context of human creation, this term
                      precisely describes what modern science has confirmed:
                      sperm cells are genetically diverse and mixed, unlike egg
                      cells which carry a single genetic configuration.
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
                    The correlation between modern scientific findings about
                    genetic diversity in sperm and the Quranic description
                    raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the genetic diversity of sperm?
                    </h3>
                    <p>
                      The genetic variation between individual sperm cells—a
                      phenomenon that requires advanced microscopy and genetic
                      science to observe and understand—appears to be referenced
                      in a text from the 7th century. This connection between
                      ancient scripture and modern scientific discovery invites
                      contemplation about the origins of such knowledge.
                    </p>
                  </div>

                  <p>
                    In the 7th century, there was no scientific understanding of
                    genetics, chromosomes, or cellular diversity. The human egg
                    wasn't discovered until 1827, and sperm cells weren't
                    properly understood until the invention of powerful
                    microscopes. The genetic diversity within sperm cells was
                    completely unknown until the development of modern genetics
                    in the 20th century.
                  </p>

                  <p>
                    The contrast with other ancient texts is notable. While the
                    Quran describes sperm as "mixed" (diverse), some other
                    ancient texts contained scientifically inaccurate
                    explanations of reproduction and heredity. For example, the
                    belief that physical characteristics were determined by what
                    parents observed during conception, rather than by genetic
                    material, was common in ancient times.
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
            <h3 className="text-lg font-medium">Exploring Human Creation</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of human reproduction continue to unfold, connecting
            ancient texts with modern scientific discoveries.
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

export default BiologySperm;
