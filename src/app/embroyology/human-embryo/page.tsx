/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Microscope,
  ChevronRight,
  Dna,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Heart,
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

interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const HumanEmbryology: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Embryonic Development",
        icon: Microscope,
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
      <div className="bg-gradient-to-r from-purple-500 to-pink-700 dark:from-purple-700 dark:to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Microscope className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Human Embryology</h1>
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
              className="text-purple-100 border-purple-100 hover:bg-purple-800/30"
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
                    Explore human embryonic development
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
                      <Microscope className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Embryonic Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran describes human embryonic development with
                    remarkable precision. Skeptics question how such accurate
                    descriptions could exist in a 7th century text, long before
                    microscopes and modern embryology. Today, scientists confirm
                    these descriptions align with contemporary understanding.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Embryo's Leech-like Appearance
                    </h3>
                    <p>
                      The early human embryo attaches itself to the uterine wall
                      to feed, similar to how a leech attaches to a host.
                      Remarkably, the physical appearance of the embryo during
                      this stage also resembles a leech—a fact only visible with
                      modern microscopy.
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
                      <Quote size={16} className="text-blue-500" /> Modern
                      Embryology
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The embryo is now nearly 1/5 inch long. The embryo's form
                      resembles that of a leech or bloodworm... and has a
                      primitive heart tube, blood vessels, and primordial blood
                      cells circulating throughout its tiny body. It obtains
                      nourishment and oxygen directly from the endometrium...
                      resembling the way a leech obtains blood from its host."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        From modern embryology textbooks, describing weeks 3-4
                        of development
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Heart size={16} className="text-blue-500" /> Attachment
                        Process
                      </h3>
                      <p>
                        The embryo develops specialized structures that allow it
                        to implant into the endometrium (uterine lining) and
                        establish a connection to the mother's blood supply,
                        extracting nutrients much like a leech.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <CircleDot size={16} className="text-gray-500" /> Visual
                        Similarity
                      </h3>
                      <p>
                        During weeks 3-4 of development, the human embryo has an
                        elongated, curved shape with a bulge at one end and a
                        tail-like structure, strikingly resembling a leech in
                        both form and relative proportions.
                      </p>
                    </div>
                  </div>

                  <p>
                    By week 6, the embryo's developing vertebrae have a
                    distinctive appearance with somites (segments of the
                    developing spine) that resemble teeth marks or something
                    that has been chewed—precisely matching the Quranic
                    description of "mudgha" (chewed substance).
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
                        href="https://www.quranwow.com/#/ch/23/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/14"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 23:14
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then We developed the semen into a leech. Then We
                          developed the leech into a lump. Then We developed the
                          lump into bones. Then We clothed the bones with flesh.
                          Then We produced it into another creature. Most
                          Blessed is Allah, the Best of Creators."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ثُمَّ خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا
                          الْعَلَقَةَ مُضْغَةً فَخَلَقْنَا الْمُضْغَةَ عِظَامًا
                          فَكَسَوْنَا الْعِظَامَ لَحْمًا ثُمَّ أَنْشَأْنَاهُ
                          خَلْقًا آخَرَ ۚ فَتَبَارَكَ اللَّهُ أَحْسَنُ
                          الْخَالِقِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Terms
                    </Badge>
                    <div className="mt-3 space-y-4">
                      <div>
                        <h4 className="font-medium">Alaqa (عَلَقَةً)</h4>
                        <p>
                          Meaning "leech" or "something that clings," this term
                          accurately describes both the appearance and behavior
                          of the embryo in its early stages of development.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Mudgha (مُضْغَةً)</h4>
                        <p>
                          Meaning "chewed substance" or "something that has been
                          chewed," this perfectly describes the appearance of
                          the somites (segments) visible in the embryo's
                          developing vertebral column around week 6.
                        </p>
                      </div>
                    </div>
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
                    The correlation between modern embryological knowledge and
                    the Quranic descriptions raises a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      human embryonic development?
                    </h3>
                    <p>
                      The accurate description of embryonic development
                      stages—visible only with microscopes invented centuries
                      later—appears in a text from the 7th century. This
                      connection between ancient scripture and modern scientific
                      discovery invites contemplation about the origins of such
                      knowledge.
                    </p>
                  </div>

                  <p>
                    In the 7th century, the prevailing understanding of human
                    development was based on Ancient Greek theories that were
                    largely inaccurate. The detailed stages of embryonic
                    development, the leech-like appearance, and the chewed-like
                    appearance of the vertebral column were all unknown until
                    the advent of microscopy many centuries later. Yet the
                    Quranic description aligns remarkably with what modern
                    science has confirmed.
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
            <h3 className="text-lg font-medium">Exploring Life's Origins</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of human development continue to unfold, connecting
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

export default HumanEmbryology;
