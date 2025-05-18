/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Activity, // Using Activity icon for seismic motion
  Zap, // Using Zap for shaking/energy release
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
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

// Define a type for the section content structure
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for a React component like an icon
  color: string; // Tailwind class for background color
  iconColor: string; // Tailwind class for text color
}

const AftershocksComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Understanding Aftershocks",
        icon: Activity,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "science",
        title: "Scientific Explanation",
        icon: Zap,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Portrayal",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Historical Perspective",
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
      threshold: 0.3, // Adjust threshold as needed
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
      observer.disconnect(); // Also disconnect the observer
    };
  }, [contents]); // Dependency array includes contents

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
      <div className="bg-gradient-to-r from-red-600 to-rose-800 dark:from-red-800 dark:to-rose-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-rose-200" size={32} />
            <h1 className="text-4xl font-bold">Aftershocks</h1>
          </div>
          <p className="text-xl max-w-2xl text-rose-100">
            Understanding Seismic Events
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-rose-700 hover:bg-rose-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-rose-100 border-rose-100 hover:bg-rose-900/20"
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
                    Explore the science and scripture behind aftershocks
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
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Activity className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Understanding Aftershocks</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever felt a smaller tremor after a significant
                    earthquake? Those are called aftershocks! They're a common
                    part of seismic activity, but understanding them is a
                    relatively recent scientific achievement.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-lg mb-3">
                      What Happens After the Main Shock?
                    </h3>
                    <p>
                      When a large earthquake (the mainshock) occurs, it doesn't
                      always mean the shaking is over. The Earth's crust in that
                      area needs to adjust after the massive release of energy.
                      This adjustment often leads to smaller, subsequent
                      earthquakes known as aftershocks. While the mainshock
                      releases most of the energy, aftershocks contribute to the
                      overall seismic activity in the region.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Zap className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Explanation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Scientists today have a clear understanding of aftershocks
                    thanks to advanced seismological instruments. They know that
                    aftershocks are distinct events that follow a predictable
                    pattern, decreasing in magnitude and frequency over time.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Definition
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In seismology, an aftershock is a smaller earthquake that
                      follows a larger earthquake, in the same area of the main
                      shock, caused as the displaced crust adjusts to the
                      effects of the main shock. Large earthquakes can have
                      hundreds to thousands of instrumentally detectable
                      aftershocks, which steadily decrease in magnitude and
                      frequency according to known laws..."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Aftershock" // Using the provided URL
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Aftershock, 2021
                      </a>
                    </div>
                  </div>

                  <p>
                    This precise understanding—that there is a main, powerful
                    quake, followed by subsequent, *weaker*, *distinct* quakes
                    (aftershocks) that diminish over time—is a modern scientific
                    discovery, made possible by sensitive detection equipment.
                    Knowledge of this specific sequence wouldn't have been
                    available through simple observation 1400 years ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Portrayal */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Portrayal</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's look at a passage from the Quran that describes a
                    significant seismic event:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/79/6-7" // Using a standard Quran link
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 79:6-7
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "[It will be] on the Day the Shaker shakes,"
                          <br />
                          "There will follow it the subsequent [one]."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦ يَوْمَ تَرْجُفُ الرَّاجِفَةُ
                          <br />٧ تَتْبَعُهَا الرَّادِفَةُ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrases
                    </Badge>
                    <p className="mt-3">
                      The Arabic phrases are:
                      <br />"<span className="font-arabic">الرَّاجِفَةُ</span>"
                      (Ar-Rājifah) meaning "the Shaker" - interpreted as the
                      initial, powerful earthquake.
                      <br />"
                      <span className="font-arabic">
                        تَتْبَعُهَا الرَّادِفَةُ
                      </span>
                      " (Tatbaʿuhā Ar-Rādifah) meaning "there will follow it the
                      subsequent one" - interpreted as a tremor or shock that
                      distinctly follows the first one.
                    </p>
                    <p className="mt-3">
                      This verse describes a sequence: a main, impactful shaking
                      event, *followed by* another distinct shaking event. This
                      sounds remarkably like the scientific description of a
                      mainshock followed by an aftershock.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Perspective (Reflection) */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Historical Perspective</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's pause and consider the context of the 7th
                    century, when the Quran was revealed.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Could someone in the 7th century truly understand the
                      concept of aftershocks?
                    </h3>
                    <p>
                      Imagine living 1400 years ago. While people certainly
                      experienced earthquakes, their understanding was based
                      solely on what they could feel and see. They knew major
                      quakes were scary, and sometimes smaller tremors happened
                      afterward. But the precise nature of aftershocks as
                      *distinct, subsequent quakes* caused by crustal
                      adjustment, following predictable patterns, and being
                      scientifically measurable – that knowledge simply did not
                      exist. There were no seismographs to detect and
                      differentiate these events scientifically.
                    </p>
                  </div>

                  <p>
                    The Quranic verse 79:6-7 doesn't just mention shaking; it
                    describes a specific sequence: a "Shaker" followed by a
                    "subsequent one." This detailed description of a main event
                    followed by a distinct, later event aligns so closely with
                    the modern scientific definition of a mainshock and
                    aftershock.
                  </p>

                  <p className="font-medium">
                    How could such a specific detail about the mechanics of
                    earthquakes, unknown to the science of the time, be present
                    in a text revealed in the 7th century? It's a point that
                    invites deep contemplation for those exploring the potential
                    miraculous nature of the Quran.
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
            <Sparkles className="text-rose-600" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Earth's Forces and Ancient Texts
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The powerful forces shaping our planet offer intriguing connections
            to ancient scriptures, prompting us to wonder and reflect.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AftershocksComponent;
