/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain,
  ChevronRight,
  Move,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowRight,
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

type ContentSection = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const Tectonics = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Mountains Moving",
        icon: Mountain,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Move,
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
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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
      <div className="bg-gradient-to-r from-emerald-500 to-teal-700 dark:from-emerald-700 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="text-teal-200" size={32} />
            <h1 className="text-4xl font-bold">Moving Mountains</h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">Geology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-emerald-700 hover:bg-emerald-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-emerald-50 border-emerald-50 hover:bg-emerald-700"
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
                    Explore Earth's moving mountains
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
              <Card className="border-l-4 border-emerald-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <Mountain className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>Mountains Moving</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, mountains are described as moving. Skeptics
                    claim that whoever wrote the Quran made a mistake; mountains
                    were believed to be fixed and immovable. Today, geologists
                    confirm that mountains do indeed move very slowly.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-bold text-lg mb-3">
                      Earth's Moving Crust
                    </h3>
                    <p>
                      What appears unchanging to the human eye is actually in
                      constant motion. Earth's crust has been moving for
                      billions of years, with not only mountains but entire
                      continents slowly drifting across the planet's surface at
                      rates measured in centimeters per year.
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
                      <Move className="text-blue-500" size={24} />
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
                      "Plate tectonics
                      <br />
                      The lithosphere, which is the rigid outermost shell of a
                      planet (the crust and upper mantle), is broken into
                      tectonic plates. The Earth's lithosphere is composed of
                      seven or eight major plates (depending on how they are
                      defined) and many minor plates. Where the plates meet,
                      their relative motion determines the type of boundary:
                      convergent, divergent, or transform. Earthquakes, volcanic
                      activity, mountain-building, and oceanic trench formation
                      occur along these plate boundaries (or faults). The
                      relative movement of the plates typically ranges from zero
                      to 100 mm annually."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Plate_tectonics"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Plate tectonics, 2021
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <ArrowRight size={16} className="text-blue-500" />{" "}
                        Continental Drift
                      </h3>
                      <p>
                        The theory of continental drift, now understood as plate
                        tectonics, reveals that Earth's continents are in
                        constant motion. Mountains, which form at the boundaries
                        of these plates, move along with them.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Move size={16} className="text-blue-500" /> Measurable
                        Motion
                      </h3>
                      <p>
                        With modern GPS technology, scientists can now measure
                        the precise movement of mountains, which typically move
                        at rates of 0-100 millimeters per year—imperceptible to
                        human observation but significant over geological time.
                      </p>
                    </div>
                  </div>

                  <p>
                    The concept that mountains and continents move was
                    completely unknown in ancient times and would not be
                    scientifically confirmed until the development of the plate
                    tectonics theory in the 20th century. Yet remarkably, the
                    Quran described this phenomenon 1400 years ago.
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
                        href="https://www.quranwow.com/#/ch/27/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/88"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 27:88
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "You see the mountains and think they are firmly
                          fixed: but they are moving away just like the clouds
                          are moving away: (such is) the artistry of Allah, Who
                          disposes of all things in perfect order: for He knows
                          all what you do."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً وَهِيَ
                          تَمُرُّ مَرَّ السَّحَابِ ۚ صُنْعَ اللَّهِ الَّذِي
                          أَتْقَنَ كُلَّ شَيْءٍ ۚ إِنَّهُ خَبِيرٌ بِمَا
                          تَفْعَلُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "Tamurru marra as-sahab تَمُرُّ مَرَّ السَّحَابِ" means
                      they are moving away just like the clouds are moving away.
                      This directly contradicts the common perception that
                      mountains are permanently fixed in place, and aligns with
                      modern geological understanding.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                      Historical Context
                    </Badge>
                    <p className="mt-3">
                      In contrast to the Quranic description, other ancient
                      texts often described mountains as immovable pillars or
                      fixed foundations of the earth. For example, the Bible in
                      1 Samuel 2:8 describes Earth as fixed on top of pillars.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern geological knowledge and the
                    Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about tectonics?
                    </h3>
                    <p>
                      The idea that mountains move—a concept that would not be
                      scientifically understood until the 20th century with the
                      development of plate tectonics theory—appears to be
                      referenced in a text from the 7th century. This connection
                      between ancient scripture and modern geological discovery
                      invites contemplation about the origins of knowledge.
                    </p>
                  </div>

                  <p>
                    This geological phenomenon—that Earth's crust is divided
                    into tectonic plates which move, carrying mountains along
                    with them—was completely unknown in the ancient world and
                    would not be discovered until centuries later with advanced
                    scientific methods. The reference in the Quran to mountains
                    moving like clouds aligns remarkably with what geology has
                    confirmed in modern times.
                  </p>

                  <p>
                    At a time when mountains were widely viewed as the epitome
                    of stability and permanence across cultures, the Quran
                    presented a different perspective that would only be
                    verified by science over a millennium later.
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
            <Sparkles className="text-emerald-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Earth's Dynamic Nature
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The seemingly immovable mountains reveal Earth's constant change,
            connecting ancient wisdom with modern scientific discoveries.
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

export default Tectonics;
