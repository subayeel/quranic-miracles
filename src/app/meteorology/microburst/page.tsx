/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  CloudRain,
  ChevronRight,
  Wind,
  Plane,
  BookOpen,
  Quote,
  HelpCircle,
  AlertTriangle,
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

// Define types for section and content
interface ContentSection {
  id: string;
  title: string;
  icon: React.FC<{ className?: string; size?: number }>;
  color: string;
  iconColor: string;
}

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

const Microburst: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Vertical Winds",
        icon: Wind,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: CloudRain,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "aviation",
        title: "Aviation Threat",
        icon: Plane,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-800 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Wind className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Microburst</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Meteorology - Extreme
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
              className="text-blue-100 border-blue-100 hover:bg-blue-800"
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
                    Explore Microburst Phenomenon
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
                    <CardTitle>Vertical Winds</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran there is a description of wind that travels
                    vertically down to the ground. Skeptics claim that whoever
                    wrote the Quran made a mistake; winds move laterally but not
                    vertically. Today scientists confirm the existence of
                    microburst, a wind with a downward vertical direction
                    towards the ground.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Understanding Wind Patterns
                    </h3>
                    <p>
                      The Bible describes the four winds, one wind from each of
                      the four corners of the Earth. Although surface winds
                      typically move parallel to the ground, the Quran uniquely
                      mentions a downward-moving wind. This vertical wind
                      phenomenon was unknown in ancient times but has now been
                      scientifically documented.
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
                      <CloudRain className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> Scientific
                      Definition
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Microburst:
                      <br />
                      A microburst is an intense small-scale downdraft produced
                      by a thunderstorm or rain shower. There are two types of
                      microbursts: wet microbursts and dry microbursts. They go
                      through three stages in their cycle, the downburst,
                      outburst, and cushion stages also called 'Suriano's
                      Stroke'. A microburst can be particularly dangerous to
                      aircraft, especially during landing, due to the wind shear
                      caused by its gust front. Several fatal and historic
                      crashes have been attributed to the phenomenon over the
                      past several decades, and flight crew training goes to
                      great lengths on how to properly recover from a
                      microburst/wind shear event.
                      <br />
                      <br />A microburst often has high winds that can knock
                      over fully grown trees. They usually last for seconds to
                      minutes."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Microburst"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Microburst, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Wind size={16} className="text-indigo-500" /> Downward
                        Force
                      </h3>
                      <p>
                        Microbursts are intense vertical winds that move
                        downward toward the ground. This strong downdraft can
                        level trees and create dangerous conditions on the
                        ground.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <CloudRain size={16} className="text-gray-500" /> Types
                        of Microbursts
                      </h3>
                      <p>
                        Scientists have identified two primary types: wet
                        microbursts, which occur with precipitation, and dry
                        microbursts, which can happen in seemingly clear
                        conditions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Aviation Threat */}
            <section id="aviation" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Plane className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Threat to Aviation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <AlertTriangle size={18} className="text-red-500" />
                      Modern Aviation Challenge
                    </h3>
                    <p>
                      Microbursts took the aviation industry by surprise when
                      they were identified as the cause of several fatal
                      accidents. Aircraft entering a microburst encounter
                      rapidly changing wind directions and speeds – a phenomenon
                      known as wind shear – that can cause sudden loss of lift
                      and control, particularly during takeoff or landing
                      phases.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="relative h-48 md:h-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        [Microburst Image 1: Vertical wind diagram showing
                        downward air movement]
                      </div>
                    </div>
                    <div className="relative h-48 md:h-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        [Microburst Image 2: Effect on aircraft during landing
                        approach]
                      </div>
                    </div>
                  </div>

                  <p className="mt-4">
                    The sudden, powerful nature of microbursts makes them
                    especially dangerous. Today, advanced weather radar systems
                    and pilot training help mitigate these risks, but they
                    remain a significant concern for aviation safety worldwide.
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
                        href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/31"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 22:31
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Being true to Allah, without associating anything
                          with Him. Whoever associates anything with Allah it is
                          as though he has fallen from the sky, and was snatched
                          by the birds, or was taken down by the wind to a deep
                          place."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣١ حُنَفَاءَ لِلَّهِ غَيْرَ مُشْرِكِينَ بِهِ ۚ وَمَنْ
                          يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ
                          فَتَخْطَفُهُ الطَّيْرُ أَوْ تَهْوِي بِهِ الرِّيحُ فِي
                          مَكَانٍ سَحِيقٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "تَهْوِي بِهِ الرِّيحُ فِي مَكَانٍ سَحِيقٍ" (tahwee bihi
                      al-reehu fee makanin saheeq) means "taken down by the wind
                      to a deep place." This describes wind with a downward
                      vertical direction that carries downward to low grounds –
                      precisely matching the modern understanding of a
                      microburst.
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
                    The correlation between the Quranic description and modern
                    meteorological findings presents a compelling question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about microbursts?
                    </h3>
                    <p>
                      The phenomenon of vertical downdrafts—a weather pattern
                      only recently documented and understood by modern
                      meteorology—appears to be described in a text from the 7th
                      century. This weather phenomenon remained unknown
                      throughout most of human history until modern aviation
                      incidents prompted scientific investigation.
                    </p>
                  </div>

                  <p>
                    In the 7th century Arabian Peninsula, knowledge of weather
                    was limited to observable surface winds. The concept of
                    powerful downdrafts that could pose a threat to those "in
                    the sky" would have been beyond the scope of meteorological
                    understanding at that time. Yet the Quranic verse refers
                    specifically to a wind with downward direction that carries
                    to deep places—matching what we now know as a microburst.
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
            <h3 className="text-lg font-medium">Exploring Weather Phenomena</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting ancient wisdom with modern scientific discoveries in
            meteorology and atmospheric sciences.
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

export default Microburst;
