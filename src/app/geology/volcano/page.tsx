/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain,
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  ActivitySquare,
  ArrowUp,
  Sparkles,
  FileSearch,
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

interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

interface SectionRef {
  [key: string]: HTMLElement | null;
}

const Volcano: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRef>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Volcanic Eruptions",
        icon: Mountain,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: FileSearch,
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
      <div className="bg-gradient-to-r from-red-500 to-orange-700 dark:from-red-700 dark:to-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="text-red-200" size={32} />
            <h1 className="text-4xl font-bold">Volcanoes</h1>
          </div>
          <p className="text-xl max-w-2xl text-red-100">Geology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-red-700 hover:bg-red-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-red-50 border-red-50 hover:bg-red-700/20"
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
                  <CardDescription>Explore volcanic activity</CardDescription>
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
                      <Mountain className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Volcanic Eruptions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran indicates that earthquakes precede volcanic
                    eruptions. Skeptics have claimed that whoever wrote the
                    Quran couldn't have known about this relationship, as the
                    science of volcanology wasn't developed in the 7th century.
                    Today, scientists confirm that seismic activity is indeed a
                    precursor to volcanic eruptions.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-lg mb-3">
                      Earthquakes and Volcanic Eruptions
                    </h3>
                    <p>
                      Modern geology has established that earthquakes and
                      tremors almost always precede volcanic eruptions. This
                      relationship is now a fundamental aspect of predicting
                      volcanic activity, but this knowledge would have been
                      unavailable to people living in the Arabian Peninsula in
                      the 7th century.
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
                      <FileSearch className="text-blue-500" size={24} />
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
                      "Prediction of volcanic activity:
                      <br />
                      Seismic activity (earthquakes and tremors) always occurs
                      as volcanoes awaken and prepare to erupt and are a very
                      important link to eruptions. Some volcanoes normally have
                      continuing low-level seismic activity, but an increase may
                      signal a greater likelihood of an eruption. The types of
                      earthquakes that occur and where they start and end are
                      also key signs."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Prediction_of_volcanic_activity"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Prediction of volcanic activity, 2018
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <ActivitySquare size={16} className="text-blue-500" />{" "}
                        Seismic Precursors
                      </h3>
                      <p>
                        Volcanologists monitor seismic activity around volcanoes
                        as a primary method for predicting eruptions. Increased
                        earthquake frequency often signals magma movement
                        beneath the surface.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain size={16} className="text-gray-500" /> Earth's
                        Loads
                      </h3>
                      <p>
                        When a volcano erupts, it expels materials from deep
                        within the Earth - including magma, gases, and ash -
                        which can be understood as the "loads" or burdens that
                        the Earth brings forth.
                      </p>
                    </div>
                  </div>

                  <p>
                    The connection between earthquakes and volcanic eruptions is
                    now well-established in geological science. Modern
                    monitoring equipment can detect these seismic signals and
                    help predict when a volcano might erupt. This knowledge,
                    however, is relatively recent in human history and would
                    have been unknown in the 7th century Arabian Peninsula.
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
                        href="https://www.quranwow.com/#/ch/99/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/1"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 99:1-2
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "If the earth is shaken with its quake. If the earth
                          brings out its loads."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١ إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا ٢
                          وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Connection
                    </Badge>
                    <p className="mt-3">
                      The sequence described in these verses is significant:
                      first, the earth is shaken with earthquakes, and then it
                      brings out its loads. This precisely matches the modern
                      understanding of volcanic eruptions, where seismic
                      activity (earthquakes) precedes the expulsion of magma and
                      other materials from within the Earth.
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
                    The correlation between modern scientific understanding of
                    volcanic activity and the Quranic verse raises an
                    interesting question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      volcano eruptions?
                    </h3>
                    <p>
                      The precise relationship between earthquakes and volcanic
                      eruptions—a phenomenon that requires modern scientific
                      instruments and geological understanding to properly
                      observe—appears to be referenced in a text from the 7th
                      century. This connection between ancient scripture and
                      contemporary scientific discovery invites contemplation
                      about the origins of such knowledge.
                    </p>
                  </div>

                  <p>
                    In 7th century Arabia, far from active volcanic regions,
                    understanding the relationship between earthquakes and
                    volcanic eruptions would have been virtually impossible. The
                    Arabian Peninsula has very few active volcanoes, and the
                    people of that time had limited means to study geological
                    phenomena. Yet, the Quranic description aligns remarkably
                    with what modern volcanologists have confirmed through
                    advanced scientific methods and equipment.
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
            <Sparkles className="text-red-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Earth's Dynamic Forces
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of our planet continue to unfold, connecting ancient
            texts with modern scientific discoveries.
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

export default Volcano;
