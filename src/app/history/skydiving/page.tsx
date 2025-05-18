/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Umbrella,
  ChevronRight,
  Wind,
  BookOpen,
  Quote,
  HelpCircle,
  Compass,
  ArrowUp,
  Sparkles,
  Cloud,
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

// Define our section type for better type safety
type ContentSection = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const SkydivingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Free-Fall from Sky",
        icon: Umbrella,
        color: "bg-sky-100 dark:bg-sky-900",
        iconColor: "text-sky-500",
      },
      {
        id: "science",
        title: "Modern Skydiving",
        icon: Wind,
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
      <div className="bg-gradient-to-r from-sky-500 to-blue-700 dark:from-sky-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Umbrella className="text-sky-200" size={32} />
            <h1 className="text-4xl font-bold">Skydiving</h1>
          </div>
          <p className="text-xl max-w-2xl text-sky-100">
            Human Flight - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-sky-700 hover:bg-sky-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-sky-600"
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
                    Explore human flight through the ages
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
              <Card className="border-l-4 border-sky-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900">
                      <Umbrella className="text-sky-500" size={24} />
                    </div>
                    <CardTitle>Free-Fall from the Sky</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there is a depiction of humans free-falling
                    from the sky. Skeptics claim that whoever wrote the Quran
                    made a mistake; humans will never fall from the sky. Today,
                    this very activity has become a popular sport known as
                    skydiving.
                  </p>
                  <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-lg border border-sky-100 dark:border-sky-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Wonder of Human Flight
                    </h3>
                    <p>
                      For millennia, humans dreamed of flying through the air,
                      but the concept of intentionally jumping from great
                      heights and falling freely through the atmosphere would
                      have seemed impossible or suicidal to ancient peoples. Yet
                      today, thousands experience this exhilarating activity
                      safely every day.
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
                      <Wind className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Modern Skydiving</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Definition
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Parachuting:
                      <br />
                      Parachuting, including also skydiving, is a method of
                      transiting from a high point in the atmosphere to the
                      surface of Earth with the aid of gravity, involving the
                      control of speed during the descent using a parachute or
                      parachutes.
                      <br />
                      <br />
                      For human skydiving, it may involve a phase of more or
                      less free-falling (the skydiving segment) which is a
                      period when the parachute has not yet been deployed and
                      the body gradually accelerates to terminal velocity."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Parachuting"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Parachuting, 2021
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Cloud size={16} className="text-blue-500" /> Free-Fall
                        Stage
                      </h3>
                      <p>
                        During free-fall, skydivers experience the sensation of
                        flying as they reach terminal velocities of
                        approximately 120 mph (190 km/h) in a belly-to-earth
                        position, with experienced divers able to control their
                        movements with precision.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Compass size={16} className="text-gray-500" />{" "}
                        Historical Context
                      </h3>
                      <p>
                        Free-falling as a human activity only became possible in
                        the 20th century, with the first intentional free-fall
                        jump with a parachute occurring in the 1920s. It would
                        have been unimaginable in the 7th century.
                      </p>
                    </div>
                  </div>

                  <p>
                    The concept of humans deliberately falling from great
                    heights in the sky before deploying a device to safely land
                    became a reality only in the modern era. The first recorded
                    parachute jump in history was made by André-Jacques Garnerin
                    in 1797, more than a thousand years after the Quran was
                    written.
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
                      "فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ" (fakannama kharra min
                      as-sama'i) translates to "as though he has fallen from the
                      sky." This phrase describes a human free-falling from the
                      sky—an experience that today is known as skydiving but
                      would have been completely unfamiliar to people in the 7th
                      century.
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
                    The correlation between the Quranic metaphor and the modern
                    activity of skydiving raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about skydiving?
                    </h3>
                    <p>
                      The vivid description of a person falling from the sky—an
                      experience that would only become possible with modern
                      technology more than a millennium later—appears in a text
                      from the 7th century. This connection between ancient
                      scripture and modern human achievement invites
                      contemplation about sources of knowledge.
                    </p>
                  </div>

                  <p>
                    In the 7th century Arabian Peninsula, the concept of humans
                    intentionally falling from great heights in the sky would
                    have been completely foreign and outside the realm of
                    possibility. Without airplanes, helicopters, or other flying
                    craft, there would have been no practical way for humans to
                    be high enough in the sky to experience free-fall. The
                    reference in the Quran to falling from the sky aligns
                    remarkably with what has become a popular recreational
                    activity and sport in modern times.
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
            <Sparkles className="text-sky-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Human Flight</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of modern human flight continue to unfold, connecting
            ancient texts with contemporary human achievements.
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

export default SkydivingPage;
