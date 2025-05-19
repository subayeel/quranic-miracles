/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bone,
  ChevronRight,
  FlaskConical,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Microscope,
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
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  iconColor: string;
};

const BonesMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Bones Before Muscles",
        icon: Bone,
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
            <Bone className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Bones</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Embryology - Advanced
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
              className="text-purple-50 border-purple-200 hover:bg-purple-700"
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
                    Explore embryonic development
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
                      <Bone className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Bones Before Muscles</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, it is stated that bones form before muscles
                    during embryonic development. Critics historically claimed
                    this sequence was incorrect. Today, modern embryology
                    confirms the Quranic description is precisely accurate.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Form Before Function
                    </h3>
                    <p>
                      In the 7th century, no one could have known which forms
                      first in human development - bones or muscles. The
                      sequence of embryonic development was a mystery that would
                      remain unsolved for over a millennium. Yet, the Quran
                      correctly describes this precise developmental sequence.
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
                      Research
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The sequential development of the Meckel's cartilage
                      started as early as stage 13 (32 days) with the appearance
                      of condensation of mesenchymal cells within the mandibular
                      prominence. During stage 17 (41 days), the primary
                      ossification center of the mandible appeared on the
                      inferior margin of the Meckel's cartilage. The muscular
                      attachments to the Meckel's cartilage in embryos were
                      observed at stage 18 (44 days)."
                    </p>
                    <div className="mt-3 text-sm">
                      <cite>
                        Wyganowska-Świątkowska M, Przystańska A. The Meckel's
                        cartilage in human embryonic and early fetal periods.
                        Anat Sci Int. 2011 Jun;86(2):98-107.
                      </cite>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Microscope size={16} className="text-blue-500" /> Bone
                        Formation
                      </h3>
                      <p>
                        The first ossification (bone formation) occurs in the
                        mandible (jaw bone) at approximately day 41 of embryonic
                        development. This Meckel's cartilage transforms into
                        actual bone before the associated muscles form.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Microscope size={16} className="text-blue-500" />{" "}
                        Muscle Formation
                      </h3>
                      <p>
                        The muscular attachments to these newly formed bones are
                        only observed three days later, at approximately day 44
                        of embryonic development, confirming the sequence of
                        bone-then-muscle.
                      </p>
                    </div>
                  </div>

                  <p>
                    This precise developmental sequence—bones forming before the
                    muscles that attach to them—was only confirmed with advanced
                    imaging technology and microscopic study of embryos in
                    modern times. This knowledge was completely inaccessible
                    1400 years ago.
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
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The Arabic phrase "fa-kasawna al-'izam lahman"
                      (فَكَسَوْنَا الْعِظَامَ لَحْمًا) translates to "Then We
                      clothed the bones with flesh." This clearly indicates that
                      bones form first, and then muscles (flesh) develop around
                      them—precisely matching modern embryological findings.
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
                    The correlation between modern embryological discoveries and
                    the Quranic verse raises a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the formation of bones before muscles?
                    </h3>
                    <p>
                      The precise sequence of embryonic development—with bones
                      forming before the muscles that attach to them—is a
                      discovery that required advanced microscopy and scientific
                      study over the past century. This knowledge was completely
                      inaccessible in the 7th century, when there were no
                      microscopes, no embryology textbooks, and no way to
                      observe embryonic development.
                    </p>
                  </div>

                  <p>
                    While other ancient texts contained numerous errors
                    regarding human development, the Quran's description matches
                    what we now know to be scientifically accurate. The mandible
                    (jaw bone) begins ossification at day 41 of embryonic
                    development, with muscles attaching to these bones only
                    three days later—exactly as the Quranic sequence describes:
                    bones first, then muscles.
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
            <h3 className="text-lg font-medium">Exploring Human Development</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of embryonic development continue to affirm connections
            between ancient wisdom and modern scientific discoveries.
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

export default BonesMiracle;
