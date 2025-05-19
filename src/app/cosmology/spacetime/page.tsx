/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  BookOpen,
  Sparkles,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

// Using placeholder icons if the requested ones aren't available in lucide-react
// Let's use 'Rocket' for cosmos/galaxy if 'Galaxy' isn't there, 'Fingerprint' for science if 'Atom' is too generic, 'RotateCcw' for curvature if 'Orbit' isn't available.
import {
  Rocket, // Substitute for Galaxy/Cosmos
  Fingerprint, // Substitute for Atom (Science)
  RotateCcw, // Substitute for Orbit (Curvature)
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

// Define types for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide Icon components
  color: string;
  iconColor: string;
}

const SpacetimeCurvature: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Using a generic type for sectionRefs value, or more specifically HTMLElement | null
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Space-Time and Mass",
        icon: Rocket, // Using Rocket as a substitute for a space icon
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Science Unveils Curvature",
        icon: Fingerprint, // Using Fingerprint as a substitute for a science icon
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "A Quranic Insight",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "reflection",
        title: "Pondering the Source",
        icon: HelpCircle,
        color: "bg-fuchsia-100 dark:bg-fuchsia-900",
        iconColor: "text-fuchsia-500",
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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="text-indigo-300" size={32} />
            <h1 className="text-4xl font-bold">Space-Time</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Exploring the Cosmos through Science and Revelation
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn the Basics
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
                  <CardTitle className="text-lg">Journey Guide</CardTitle>
                  <CardDescription>
                    Navigate the wonders of space-time
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
                      <Rocket className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Space-Time and Mass</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Modern physics reveals a profound connection between space,
                    time, and mass. Astonishingly, some believe this intricate
                    relationship was hinted at in the Quran centuries before its
                    scientific discovery, presenting a remarkable point for
                    reflection.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Beyond Three Dimensions
                    </h3>
                    <p>
                      We typically think of the universe in three dimensions of
                      space (up/down, left/right, forward/backward). However,
                      Albert Einstein's theories showed that space and time are
                      woven together into a single fabric: space-time. And
                      crucially, this fabric is not static or flat.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Fingerprint className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Science Unveils Curvature</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    One of the most revolutionary insights of modern physics,
                    coming long after the 7th century, is how mass interacts
                    with space-time. Massive objects, like stars and planets,
                    don't just sit *in* space-time; they actually *shape* it.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-indigo-500" /> Mass
                      Tells Spacetime How to Curve
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Spacetime tells matter how to move; matter tells
                      spacetime how to curve."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.goodreads.com/quotes/87587-spacetime-tells-matter-how-to-move-matter-tells-spacetime" // Linking to a common source for the quote
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        John Wheeler & Kenneth Ford, Geons, Black Holes, and
                        Quantum Foam (2000), p. 235.
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-indigo-500" /> The
                        Fabric Bends
                      </h3>
                      <p>
                        Imagine space-time as a flexible sheet. Placing a heavy
                        ball (mass) on it causes the sheet to bend or curve
                        around it. This curvature is what we experience as
                        gravity. Objects moving near the mass follow the curve
                        in the sheet.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-gray-500" /> A
                        Recent Discovery
                      </h3>
                      <p>
                        This understanding of gravity as the curvature of
                        space-time is a cornerstone of Einstein's General
                        Relativity, developed in the early 20th century. The
                        idea that mass dictates the geometry of space-time was
                        completely unknown in the 7th century world.
                      </p>
                    </div>
                  </div>

                  <p>
                    This scientific reality—that massive objects cause
                    space-time to curve—was unveiled by physicists in the 20th
                    century. Now, let's explore a fascinating potential
                    correlation found in a scripture revealed over 1400 years
                    ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>A Quranic Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    In the Quran, there is a verse that mentions the stars and
                    trees prostrating. While 'prostration' traditionally refers
                    to bowing in worship, some have pondered if, in light of
                    modern science, this verse holds an additional, deeper
                    meaning related to the physical universe.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/55/6" // Linking to Quran.com for the verse
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 55:6
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the stars and the trees prostrate."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">٦ وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Pondering the Meaning
                    </Badge>
                    <p className="mt-3">
                      Traditionally, the prostration of stars and trees is
                      understood as their submission to Allah's will and the
                      natural laws He has established for them. However, when
                      considered alongside the scientific understanding of
                      spacetime, a fascinating parallel emerges.
                    </p>
                    <p className="mt-3">
                      Imagine the act of prostrating in prayer: a person lowers
                      their face to become parallel with the ground. Now,
                      consider the scientific finding that massive objects like
                      stars *curve spacetime* around them. This curvature means
                      that the very fabric of space-time is bent, becoming
                      "parallel" to the surface of the star.
                    </p>
                    <p className="mt-3">
                      The concept shared in the references is that just as a
                      worshipper's face becomes parallel to the ground in
                      prostration, spacetime itself curves to become "parallel"
                      to the "face" (surface) of a star due to its mass. This is
                      what matter *does* to spacetime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-fuchsia-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900">
                      <HelpCircle className="text-fuchsia-500" size={24} />
                    </div>
                    <CardTitle>Pondering the Source</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This intriguing connection between modern physics and an
                    ancient verse invites us to reflect deeply:
                  </p>

                  <div className="bg-fuchsia-50 dark:bg-fuchsia-900/30 p-6 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this intricate relationship between mass and the
                      curvature of space-time—a concept only recently discovered
                      by scientists—be potentially alluded to in a text from the
                      7th century?
                    </h3>
                    <p>
                      The idea that massive objects physically shape the
                      geometry of the universe was far beyond the scientific
                      understanding available in the 7th century. There were no
                      tools, theories, or observations that could have led
                      anyone at that time to conceive of space-time curvature.
                    </p>
                  </div>

                  <p>
                    The Quran, revealed in an era when such scientific knowledge
                    was impossible to attain through human means, presents a
                    statement about stars prostrating. When interpreted in light
                    of modern scientific understanding of spacetime curvature,
                    this verse takes on a potentially profound new dimension,
                    which some view as a miraculous sign.
                  </p>
                  <p>
                    It reminds us to explore the universe around us and the
                    wisdom found within sacred texts with an open and reflective
                    mind.
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
            <h3 className="text-lg font-medium">
              Exploring Cosmic Connections
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Where science meets scripture, inviting contemplation on the wonders
            of creation.
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

export default SpacetimeCurvature;
