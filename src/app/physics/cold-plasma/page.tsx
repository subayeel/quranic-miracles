/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo, FC } from "react";
import {
  Flame, // Icon for Fire/Plasma
  ChevronRight,
  FlaskConical, // Icon for Science
  BookOpen, // Icon for Quran
  HelpCircle, // Icon for Reflection
  ArrowUp,
  Sparkles,
  ThermometerSnowflake,
  Quote, // Icon for Cold/Freezing
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

// Define TypeScript types for the content structure
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind background color class for icon background
  iconColor: string; // Tailwind text color class for icon
}

const ColdPlasmaMiracle: FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  // Using a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections using useMemo for stability
  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Fire That Doesn't Burn",
        icon: Flame,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "science",
        title: "Cold Plasma Discovery",
        icon: FlaskConical,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Account",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
    ];
  }, []); // Empty dependency array means this memo runs only once

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

    // Cleanup function to unobserve elements
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
      // Disconnect the observer
      observer.disconnect();
    };
  }, [contents]); // Dependency array includes contents

  // Function to scroll to a specific section
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
      <div className="bg-gradient-to-r from-red-500 to-pink-700 dark:from-red-700 dark:to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="text-orange-300" size={32} />
            <h1 className="text-4xl font-bold">Fire</h1>
          </div>
          <p className="text-xl max-w-2xl text-red-100">
            Physics - Advanced Concepts
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-red-700 hover:bg-red-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/20 hover:text-white"
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
                    Explore fire that doesn't burn
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
                      <Flame className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Fire That Doesn't Burn</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the miraculous account of Prophet Abraham (peace be upon
                    him), he was thrown into a fire that, by divine command, did
                    not burn him. Skeptics might question this, believing fire
                    must always burn. Yet, modern science has unveiled a
                    fascinating phenomenon: fire that doesn't burn, known as
                    cold plasma.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Seemingly Impossible Event?
                    </h3>
                    <p>
                      The idea of surviving intense flames unharmed seems
                      impossible by conventional understanding. For centuries,
                      fire has been universally associated with destruction and
                      burning. How could a fire exist that defied this
                      fundamental property?
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
                    <CardTitle>Cold Plasma Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Surprisingly, modern science has discovered states of matter
                    that behave in ways previously thought impossible. One such
                    discovery is Nonthermal Plasma, often called "cold plasma."
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Description
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "A nonthermal plasma, cold plasma or non-equilibrium
                      plasma is a plasma which is not in thermodynamic
                      equilibrium, because the electron temperature is much
                      hotter than the temperature of heavy species (ions and
                      neutrals)... While the 'electron gas' reaches a
                      temperature of 20,000 K ... the rest of the gas, ions and
                      neutral atoms, stays barely above room temperature, so the
                      bulb can even be touched with hands while operating."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Nonthermal_plasma"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Nonthermal Plasma, 2021
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <ThermometerSnowflake
                          size={16}
                          className="text-blue-500"
                        />{" "}
                        Not Hot to Touch
                      </h3>
                      <p>
                        Unlike conventional fire where all particles are
                        extremely hot, in cold plasma, only the electrons are
                        very energetic. The overall gas temperature can be low,
                        even near room temperature, making it feel cool to the
                        touch.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-blue-500" /> Beyond
                        Burning
                      </h3>
                      <p>
                        Remarkably, cold plasma can be used in ways that don't
                        involve burning. Some applications even involve
                        localized cooling or freezing effects, demonstrating a
                        property opposite to traditional fire.
                      </p>
                    </div>
                  </div>

                  <p>
                    This "fire" that exists at low temperatures and doesn't
                    burn, and can even cool, is a concept that was unknown to
                    science until relatively recently.
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
                    <CardTitle>Quranic Account</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran recounts the story of Prophet Abraham (peace be
                    upon him) when he was thrown into a blazing fire by his
                    people for challenging their idols.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/21/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/69"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 21:69
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "We said, 'O fire, be cold and safe on Abraham.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦٩ قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ
                          إِبْرَاهِيمَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The key phrase here is "be cold and safe" (كُونِي بَرْدًا
                      وَسَلَامًا - "kūnī bardan wa salāmā"). This describes a
                      state of fire that is precisely the opposite of its known
                      nature – not burning, but cold and harmless.
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
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific understanding available in the
                    7th century, the concept of a fire that is "cold and safe"
                    was truly extraordinary and seemingly paradoxical. Fire was
                    understood purely by its destructive, burning nature.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this description of fire, aligning with modern
                      discoveries like cold plasma, be present in a text
                      revealed 1400 years ago?
                    </h3>
                    <p>
                      The Quranic depiction of a fire that is commanded to be
                      "cold and safe" resonates remarkably with the properties
                      of cold plasma – a state of matter that appears like fire
                      but doesn't burn and can even have cooling effects. This
                      parallel invites reflection on the potential origins of
                      such knowledge, long before its scientific discovery.
                    </p>
                  </div>

                  <p>
                    The existence of cold plasma challenges the ancient, and
                    even relatively recent, understanding of fire. The Quran's
                    description of fire being cold and safe on Abraham (peace be
                    upon him) aligns with a concept only understood by modern
                    physics.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-red-600 hover:bg-red-700">
              <Flame size={24} />
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
            <Sparkles className="text-red-500" size={18} />
            <h3 className="text-lg font-medium">Exploring States of Matter</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of the physical world continue to surprise us,
            revealing connections between ancient accounts and modern scientific
            understanding.
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

export default ColdPlasmaMiracle;
