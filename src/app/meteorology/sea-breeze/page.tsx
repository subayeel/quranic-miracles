/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Wind,
  ChevronRight,
  Sunrise,
  BookOpen,
  Quote,
  HelpCircle,
  CloudRain,
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

// Define types for our component
type Section = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  iconColor: string;
};

type SectionRefs = {
  [key: string]: HTMLElement | null;
};

const SeaBreeze: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<Section[]>(() => {
    return [
      {
        id: "intro",
        title: "Wind Direction Reversal",
        icon: Wind,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: CloudRain,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
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
      <div className="bg-gradient-to-r from-blue-500 to-cyan-700 dark:from-blue-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Wind className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Sea Breeze</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Meteorology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-100"
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
                    Explore sea breezes and wind patterns
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
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Wind className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Wind Direction Reversal</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, sunrise is related to wind direction. Skeptics
                    have claimed that whoever wrote the Quran made a mistake;
                    sunrise shouldn't be related to wind direction. Today,
                    meteorologists confirm that the sun causes reversal in wind
                    direction between land and sea.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Sea and Land Breezes
                    </h3>
                    <p>
                      The sun's heat causes air pressure differences between
                      land and sea, creating a natural cycle where wind
                      direction reverses from day to night. This phenomenon, now
                      well-understood in meteorology, appears to be referenced
                      in the Quran 1400 years ago.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <CloudRain className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> Scientific
                      Explanation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Sea Breeze:
                      <br />A sea breeze or onshore breeze is any wind that
                      blows from a large body of water toward or onto a
                      landmass; it develops due to differences in air pressure
                      created by the differing heat capacities of water and dry
                      land. As such, sea breezes are more localised than
                      prevailing winds. Because land absorbs solar radiation far
                      more quickly than water, a sea breeze is a common
                      occurrence along coasts after sunrise. By contrast, a land
                      breeze or offshore breeze is the reverse effect: dry land
                      also cools more quickly than water and, after sunset, a
                      sea breeze dissipates and the wind instead flows from the
                      land towards the sea."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Sea_breeze"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Sea Breeze, 2019
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center py-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg max-w-md">
                      <img
                        src="/api/placeholder/600/400"
                        alt="Sea breeze diagram showing wind direction reversal between day and night"
                        className="rounded-lg mb-3"
                      />
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                        Sea breeze during day (left) and land breeze during
                        night (right)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sunrise size={16} className="text-teal-500" /> Daytime
                        Process
                      </h3>
                      <p>
                        During the day, the sun heats the land faster than the
                        adjacent water, causing air over land to warm and rise.
                        Cooler air from over the sea flows toward the land,
                        creating a sea breeze.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <CloudRain size={16} className="text-gray-500" />{" "}
                        Nighttime Reversal
                      </h3>
                      <p>
                        At night, the process reverses. Land cools more quickly
                        than water, creating an opposite temperature gradient
                        and causing the wind direction to change from land to
                        sea.
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
                        href="https://www.quranwow.com/#/ch/81/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/18"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 81:18
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And by the morning as it breathes."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">١٨ وَالصُّبْحِ إِذَا تَنَفَّسَ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "Subh صُّبْحِ" refers to the onset of daylight. The verse
                      uses the metaphor of "breathing" (تَنَفَّسَ - tanaffasa)
                      which describes the reversal of air flow. Just as when we
                      breathe, air direction reverses, the verse suggests that
                      morning causes the wind direction to reverse - precisely
                      what happens with sea breezes.
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
                    The connection between the Quranic verse and modern
                    meteorological understanding raises an important question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      sea breezes?
                    </h3>
                    <p>
                      The scientific understanding of how solar radiation
                      creates temperature differences between land and water,
                      resulting in predictable wind direction changes, is a
                      relatively recent development in meteorology. Yet, the
                      Quran's reference to morning "breathing" appears to
                      describe this same phenomenon using a fitting metaphor.
                    </p>
                  </div>

                  <p>
                    In 7th century Arabia, there was no scientific understanding
                    of differential heating, air pressure systems, or the
                    thermodynamics that drive coastal wind patterns. While
                    coastal inhabitants might observe wind patterns changing,
                    the connection to the rising sun and the systematic nature
                    of this reversal was not scientifically established until
                    much later.
                  </p>

                  <p>
                    The Quranic verse uses the metaphor of breathing - an inward
                    and outward movement - to describe what modern science has
                    confirmed: the cyclical reversal of winds from sea to land
                    during the day and land to sea at night, triggered by the
                    sun's appearance and disappearance.
                  </p>
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
              <Wind size={24} />
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
            <h3 className="text-lg font-medium">Exploring Natural Patterns</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The connection between ancient wisdom and modern scientific
            understanding continues to surprise and inspire us.
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

export default SeaBreeze;
