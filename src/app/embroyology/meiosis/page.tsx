/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Dna,
  ChevronRight,
  Microscope,
  BookOpen,
  Quote,
  HelpCircle,
  Split,
  ArrowUp,
  Sparkles,
  CircleDot,
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

// Define TypeScript types
type SectionType = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

type SectionRefs = {
  [key: string]: HTMLElement | null;
};

const MeiosisComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<SectionType[]>(() => {
    return [
      {
        id: "intro",
        title: "Cell Division",
        icon: CircleDot,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Microscope,
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
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 dark:from-purple-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Dna className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Meiosis</h1>
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
              className="text-purple-50 border-purple-200 hover:bg-purple-800/30"
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
                    Explore the miracle of cell division
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
                      <CircleDot className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Cell Division - Meiosis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, a unique aspect of cell division is described
                    in a way that aligns with our modern understanding of
                    meiosis. Skeptics claim that whoever wrote the Quran could
                    not have known about cellular processes. Today, scientists
                    have mapped out the process of meiosis in great detail,
                    showing it occurs in specific phases.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Eight Phases of Meiosis
                    </h3>
                    <p>
                      Meiosis is a special type of cell division that occurs in
                      sexually-reproducing organisms. Unlike mitosis (regular
                      cell division), meiosis reduces the chromosome number by
                      half, creating cells with only one copy of each
                      chromosome—essential for reproduction. This process occurs
                      through eight distinct phases.
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
                      <Microscope className="text-blue-500" size={24} />
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
                      "Meiosis is a special type of cell division of germ cells
                      in sexually-reproducing organisms used to produce the
                      gametes, such as sperm or egg cells. It involves two
                      rounds of division that ultimately result in four cells
                      with only one copy of each paternal and maternal
                      chromosome (haploid). Additionally, prior to the division,
                      genetic material from the paternal and maternal copies of
                      each chromosome is crossed over, creating new combinations
                      of code on each chromosome. Later on, during
                      fertilisation, the haploid cells produced by meiosis from
                      a male and female will fuse to create a cell with two
                      copies of each chromosome again, the zygote."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Meiosis"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Meiosis, 2021
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Split size={16} className="text-blue-500" /> Eight
                        Distinct Phases
                      </h3>
                      <p>
                        Modern biology identifies eight phases in meiosis:
                        Prophase I, Metaphase I, Anaphase I, Telophase I,
                        Prophase II, Metaphase II, Anaphase II, and Telophase
                        II. Each phase represents a critical step in the process
                        of creating reproductive cells.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Dna size={16} className="text-blue-500" /> Chromosome
                        Pairs
                      </h3>
                      <p>
                        In sexually-reproducing organisms, chromosomes exist in
                        pairs—one from each parent. Meiosis carefully divides
                        these pairs to create cells with half the genetic
                        material, crucial for reproduction.
                      </p>
                    </div>
                  </div>

                  <p>
                    The intricate process of meiosis, with its eight specific
                    phases, was completely unknown in ancient times. The
                    microscope wasn't invented until the 17th century, and
                    detailed understanding of cellular processes came much
                    later. However, the Quran appears to reference this process
                    with remarkable accuracy.
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
                        href="https://www.quranwow.com/#/ch/39/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/6"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 39:6
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "He created you from one person, then made from it its
                          mate, and brought down cattle for you. Eight pairs He
                          creates you in the wombs of your mothers, in
                          successive formations, in a triple darkness. Such is
                          Allah, your Lord. His is the kingdom. There is no god
                          but He. So what made you deviate?"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ ثُمَّ جَعَلَ مِنْهَا
                          زَوْجَهَا وَأَنْزَلَ لَكُمْ مِنَ الْأَنْعَامِ
                          ثَمَانِيَةَ أَزْوَاجٍ ۚ يَخْلُقُكُمْ فِي بُطُونِ
                          أُمَّهَاتِكُمْ خَلْقًا مِنْ بَعْدِ خَلْقٍ فِي
                          ظُلُمَاتٍ ثَلَاثٍ ۚ ذَٰلِكُمُ اللَّهُ رَبُّكُمْ لَهُ
                          الْمُلْكُ ۖ لَا إِلَٰهَ إِلَّا هُوَ ۖ فَأَنَّىٰ
                          تُصْرَفُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "Eight pairs He creates you in the wombs of your mothers"
                      (ثَمَانِيَةَ أَزْوَاجٍ) is particularly noteworthy. Today
                      we know that in sexually-reproducing organisms like humans
                      and cattle, the pairs of chromosomes divide in eight
                      specific phases during meiosis. This precise reference to
                      "eight pairs" aligns remarkably with our modern
                      understanding of the meiotic process.
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
                    The correlation between modern scientific knowledge of
                    meiosis and the Quranic verse raises a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      meiosis?
                    </h3>
                    <p>
                      The specific reference to "eight pairs" in the process of
                      human creation—corresponding precisely to the eight phases
                      of meiosis—would have been impossible to know in the 7th
                      century. Cellular biology and the intricate processes of
                      reproduction at the microscopic level were completely
                      unknown until many centuries later, requiring advanced
                      technology to observe and document.
                    </p>
                  </div>

                  <p>
                    This correspondence between the Quranic description and
                    modern scientific discovery presents a remarkable
                    coincidence that invites deeper contemplation. The detailed
                    understanding of meiosis—including its eight distinct
                    phases—was not established until the late 19th and early
                    20th centuries, requiring advanced microscopes and
                    scientific techniques. Yet this verse appears to reference
                    with precision a biological process critical to human
                    reproduction.
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
            <h3 className="text-lg font-medium">Exploring Life's Mysteries</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The miraculous complexity of cell division continues to amaze
            scientists, connecting ancient wisdom with modern biological
            discoveries.
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

export default MeiosisComponent;
