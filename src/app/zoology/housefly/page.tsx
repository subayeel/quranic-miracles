/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bug,
  ChevronRight,
  FlaskConical,
  BookOpen,
  Quote,
  HelpCircle,
  Droplets,
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

const Housefly = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Housefly's Diet",
        icon: Bug,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
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
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
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
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 dark:from-green-800 dark:to-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bug className="text-green-200" size={32} />
            <h1 className="text-4xl font-bold">Housefly</h1>
          </div>
          <p className="text-xl max-w-2xl text-emerald-100">
            Zoology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-green-100 border-green-100 hover:bg-green-700"
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
                    Explore housefly's feeding mechanism
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
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Bug className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Housefly's Diet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there's a statement that if a housefly steals
                    something from you, you can never get it back. Skeptics
                    claim that whoever wrote the Quran made a mistake; we can
                    always catch the fly and get it back. Today scientists
                    confirm that if a housefly steals something, it is already
                    digested—transformed into different material.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">
                      Houseflies Can Only Consume Liquids
                    </h3>
                    <p>
                      Houseflies cannot carry away food in a solid form.
                      Instead, they have a specialized feeding mechanism where
                      they secrete enzymes to break down solids and then suck up
                      the resulting liquids. This means that anything a housefly
                      "steals" is immediately transformed through digestion.
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
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Houseflies play an important ecological role in breaking
                      down and recycling organic matter. Adults are mainly
                      carnivorous; their primary food is animal matter, carrion,
                      and feces, but they also consume milk, sugary substances,
                      and rotting fruit and vegetables. Solid foods are softened
                      with saliva before being sucked up."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Housefly"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Housefly, 2020
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-blue-500" />{" "}
                        Liquefaction Process
                      </h3>
                      <p>
                        Houseflies have evolved a sophisticated feeding system.
                        They secrete digestive enzymes onto food, breaking down
                        solids externally before consuming them through their
                        proboscis as liquids.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Bug size={16} className="text-gray-500" /> Immediate
                        Digestion
                      </h3>
                      <p>
                        When a housefly lands on food, the substances it takes
                        have already been chemically altered by its saliva
                        before consumption, making recovery of the original
                        material impossible.
                      </p>
                    </div>
                  </div>

                  <p>
                    The unique feeding mechanism of houseflies means that they
                    don't physically carry away pieces of food like other
                    insects might. Instead, they transform solids into liquids
                    on the spot and consume the liquid form. This scientific
                    fact, discovered in detail only in modern times, aligns
                    remarkably with what was stated in the Quran 1400 years ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <BookOpen className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/73"
                        className="text-amber-600 dark:text-amber-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 22:73
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "O people! A parable is presented, so listen to it:
                          Those you invoke besides Allah will never create a
                          housefly, even if they banded together for that
                          purpose. And if the housefly steals anything from
                          them, they cannot recover it from it. Weak are the
                          pursuer and the pursued."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧٣ يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا
                          لَهُ ۚ إِنَّ الَّذِينَ تَدْعُونَ مِنْ دُونِ اللَّهِ
                          لَنْ يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ ۖ
                          وَإِنْ يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَا
                          يَسْتَنْقِذُوهُ مِنْهُ ۚ ضَعُفَ الطَّالِبُ
                          وَالْمَطْلُوبُ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The verse states: "And if the housefly steals anything
                      from them, they cannot recover it from it," indicating
                      that whatever a housefly takes cannot be retrieved in its
                      original form. The phrase "Weak are the pursuer and the
                      pursued" is particularly noteworthy. The pursuer (the
                      person) is weak because they cannot recover what was
                      taken, and the pursued (what was taken) is weak because it
                      has been transformed through digestion.
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
                    The alignment between modern scientific understanding of
                    housefly feeding mechanisms and the Quranic verse raises an
                    intriguing question:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about housefly digestion?
                    </h3>
                    <p>
                      The detailed understanding of how houseflies feed—that
                      they transform solids into liquids through enzyme
                      secretion before consumption—is a relatively recent
                      scientific discovery. Yet, the Quran's statement that
                      whatever a housefly takes cannot be recovered aligns
                      precisely with this modern understanding of fly biology.
                    </p>
                  </div>

                  <p>
                    In 7th century Arabia, the common understanding would have
                    been that flies simply land on food and carry pieces away,
                    much like other insects. The nuanced insight that a fly's
                    "theft" involves an immediate transformation of the material
                    through digestive enzymes—making recovery
                    impossible—represents an understanding of biology that
                    wasn't scientifically documented until many centuries later.
                  </p>

                  <p>
                    The verse even indicates that both "the pursuer and the
                    pursued" are weak—suggesting not only that the person cannot
                    recover what was taken, but that what was taken is itself
                    altered or weakened. This aligns perfectly with our modern
                    understanding that the fly's saliva immediately begins
                    breaking down and weakening the molecular structure of
                    whatever it consumes.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700">
              <Bug size={24} />
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
            <Sparkles className="text-green-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Nature's Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intricate mechanisms of even the smallest creatures continue to
            reveal connections between ancient texts and modern scientific
            discoveries.
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

export default Housefly;
