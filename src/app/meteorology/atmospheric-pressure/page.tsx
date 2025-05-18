/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Cloud, // Using Cloud for atmospheric topic
  ChevronRight,
  Gauge, // Gauge or BarChart2 for pressure/measurement
  BookOpen,
  Lightbulb, // Lightbulb for reflection/pondering
  ArrowUp,
  Sparkles,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind background color class for card border/icons
  iconColor: string; // Tailwind text color class for icons
  badgeColor?: string; // Optional badge color class
  badgeTextColor?: string; // Optional badge text color class
}

const AtmosphericPressureComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Altitude & Breathing",
        icon: Cloud,
        color: "border-blue-500", // Blue theme for atmosphere
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Explanation",
        icon: Gauge,
        color: "border-gray-500", // Gray for scientific facts
        iconColor: "text-gray-500",
      },
      {
        id: "quran",
        title: "Quranic Description",
        icon: BookOpen,
        color: "border-green-500", // Green for Quran
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: Lightbulb,
        color: "border-purple-500", // Purple for reflection
        iconColor: "text-purple-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Highlight section when 30% visible
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
      <div className="bg-gradient-to-r from-blue-500 to-cyan-700 dark:from-blue-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Atmospheric Pressure</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">Meteorology - Easy</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700 border-white hover:bg-white/10"
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
                    Explore how altitude affects the air around us
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
              <Card className={`border-l-4 ${contents[0].color}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-blue-100 dark:bg-blue-900`}
                    >
                      <Cloud className={contents[0].iconColor} size={24} />
                    </div>
                    <CardTitle>Altitude and Breathing Difficulty</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever wondered why breathing feels different high up
                    in the mountains compared to sea level? There's a physical
                    reason for this, related to something called atmospheric
                    pressure.
                  </p>
                  <p>
                    Interestingly, 1400 years ago, the concept of how altitude
                    affects breathing wasn't understood. Most people lived near
                    sea level or in low-lying areas, and there were no means to
                    travel high into the atmosphere to observe its effects
                    directly.
                  </p>
                  <div
                    className={`bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border ${contents[0].color.replace(
                      "border",
                      "border-"
                    )}`}
                  >
                    <h3 className="font-bold text-lg mb-3">
                      The Air Around Us Has Weight!
                    </h3>
                    <p>
                      Atmospheric pressure is simply the weight of the column of
                      air above us pressing down. The higher you go, the less
                      air is above you, and therefore, the pressure decreases.
                      This lower pressure also means the air is less dense, and
                      there's less oxygen available to breathe with each breath.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation */}
            <section id="science" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[1].color}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800`}
                    >
                      <Gauge className={contents[1].iconColor} size={24} />
                    </div>
                    <CardTitle>The Science of High Altitude</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    As you ascend higher into the atmosphere, two key things
                    happen:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <span className="font-medium">
                        Atmospheric Pressure Decreases:
                      </span>{" "}
                      The total weight of the air above you is less.
                    </li>
                    <li>
                      <span className="font-medium">
                        Oxygen Availability Decreases:
                      </span>{" "}
                      While the *percentage* of oxygen in the air remains about
                      21%, the *total amount* of air (and thus oxygen molecules)
                      in a given volume is lower because the air is less dense.
                    </li>
                  </ul>

                  <div
                    className={`bg-gray-50 dark:bg-gray-900/30 p-6 rounded-lg border ${contents[1].color.replace(
                      "border",
                      "border-"
                    )}`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Gauge size={16} className={contents[1].iconColor} /> The
                      "Death Zone"
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The death zone, in mountaineering, refers to altitudes
                      above a certain point where the amount of oxygen is
                      insufficient to sustain human life for an extended time
                      span. This point is generally tagged as 8,000 m (26,000
                      ft, less than 356 millibars of atmospheric pressure)."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Effects_of_high_altitude_on_humans"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Effects of high altitude on humans, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    Above the "Death Zone," human life cannot be sustained
                    without supplemental oxygen. The feeling is one of
                    suffocation and extreme tightness in the chest, as your body
                    struggles to get enough oxygen from the thin air. This is
                    well-documented by modern science and high-altitude
                    exploration.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Description */}
            <section id="quran" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[2].color}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-green-100 dark:bg-green-900`}
                    >
                      <BookOpen className={contents[2].iconColor} size={24} />
                    </div>
                    <CardTitle>The Quranic Description</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the lack of knowledge about atmospheric pressure
                    and high altitude effects in the 7th century, it's
                    remarkable to find a description in the Quran that aligns
                    with the physical sensation of ascending into the sky:
                  </p>
                  <div
                    className={`bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border ${contents[2].color.replace(
                      "border",
                      "border-"
                    )}`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/6/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/125"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 6:125
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Those whom Allah wants to guide, He opens their
                          chests to Islam; And those whom He wants to leave
                          astray, He makes their chests tight and constricted,
                          as if they are ascending to the sky: Such is the
                          penalty of Allah on those who refuse to believe."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          فَمَنْ يُرِدِ اللَّهُ أَنْ يَهْدِيَهُ يَشْرَحْ
                          صَدْرَهُ لِلْإِسْلَامِ ۖ وَمَنْ يُرِدْ أَنْ يُضِلَّهُ
                          يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا
                          يَصَّعَّدُ فِي السَّمَاءِ ۚ كَذَٰلِكَ يَجْعَلُ اللَّهُ
                          الرِّجْسَ عَلَى الَّذِينَ لَا يُؤْمِنُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "
                      <span className="font-bold italic">
                        كأنما يصّعّد في السماء
                      </span>
                      " (ka'annama yaṣṣaʿʿadu fī l-samāʾ) translates to "as if
                      he were ascending into the sky" or "as if they are
                      ascending to the sky". It's used here as a powerful
                      metaphor for a feeling of extreme constriction and
                      difficulty, likening it to the physical sensation one
                      would experience when going upwards into the sky.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[3].color}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-purple-100 dark:bg-purple-900`}
                    >
                      <Lightbulb className={contents[3].iconColor} size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Consider the context of the 7th century CE.
                    <span className="font-bold">
                      There was no scientific understanding of atmospheric
                      pressure, air density, or the physiological effects of
                      high altitude.
                    </span>{" "}
                    Travel to significant altitudes was limited, primarily on
                    foot up mountains, but the systematic observation and
                    scientific explanation of breathing difficulties were
                    non-existent. People might have noticed *some* difficulty
                    high up, but wouldn't have understood *why* it happened in
                    terms of physics or physiology. The idea of a "death zone"
                    was certainly not a known scientific concept.
                  </p>

                  <div
                    className={`bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border ${contents[3].color.replace(
                      "border",
                      "border-"
                    )}`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this specific physical sensation, caused by
                      decreasing atmospheric pressure at high altitude, be
                      described so accurately as a metaphor in a text from 1400
                      years ago?
                    </h3>
                    <p>
                      The Quranic description precisely matches the feeling of
                      chest tightness and constriction experienced when
                      ascending to the thin air of high altitudes—a scientific
                      reality that was entirely beyond the knowledge and means
                      of observation available in the 7th century. This
                      unexpected alignment between the ancient text and modern
                      scientific understanding is a significant point for
                      reflection.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              <Cloud size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
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
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Air and Elevation</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discoveries about our atmosphere reveal intriguing connections with
            ancient descriptions.
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

export default AtmosphericPressureComponent;
