/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bird,
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  Footprints,
  Microscope,
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

const RaptorsPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Flesh Eating Birds",
        icon: Bird,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Microscope,
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
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-700 dark:to-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bird className="text-amber-200" size={32} />
            <h1 className="text-4xl font-bold">Raptors</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">
            Zoology - Intermediate
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-amber-50 border-amber-50 hover:bg-amber-700"
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
                    Explore birds of prey hunting methods
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
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Bird className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Flesh Eating Birds</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran some birds catch prey with their feet. Skeptics
                    claim that whoever wrote the Quran made a mistake; birds
                    catch prey with their bills, not their feet. Today
                    Zoologists confirm that raptors, the flesh eating birds,
                    catch prey with their feet.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-lg mb-3">
                      How Birds Hunt Their Prey
                    </h3>
                    <p>
                      Most birds catch prey with their bills. However, raptors
                      (birds of prey) are special - they use powerful feet
                      equipped with talons to catch and kill their prey,
                      contrary to common perception in ancient times.
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
                      <Microscope className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Modern
                      Zoological Understanding
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Bird of Prey:
                      <br />
                      Birds of prey, or raptors, include species of bird that
                      primarily hunt and feed on vertebrates that are large
                      relative to the hunter. Additionally, they have keen
                      eyesight for detecting food at a distance or during
                      flight, strong feet equipped with talons for grasping or
                      killing prey, and powerful, curved beaks for tearing
                      flesh."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Bird_of_prey"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Bird of Prey, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Footprints size={16} className="text-blue-500" />{" "}
                        Talons, Not Bills
                      </h3>
                      <p>
                        Unlike most birds, raptors use their powerful feet and
                        sharp talons to catch, kill, and carry their prey. The
                        bill is primarily used for tearing flesh after the prey
                        is caught.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Bird size={16} className="text-gray-500" /> Hawking is
                        Different
                      </h3>
                      <p>
                        "Hawking" refers to how birds catch flying insects with
                        their bills. This term comes from the visual similarity
                        to how hawks hunt, though the actual mechanism is quite
                        different.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg overflow-hidden max-w-md">
                      <div className="p-4 text-center">
                        <p className="font-medium">
                          Raptors catch prey with their feet
                        </p>
                      </div>
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
                        href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/31"
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
                      The phrase "was snatched by the birds" (فَتَخْطَفُهُ
                      الطَّيْرُ) is significant. Since these birds attack
                      humans, they would be flesh-eating raptors. The Quran
                      describes them as snatching humans in mid-air without
                      eating them immediately - implying the use of feet rather
                      than bills for the capture.
                    </p>
                  </div>

                  <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p>
                      In 7th century Arabia, detailed zoological knowledge about
                      the hunting methods of different bird species would have
                      been limited. Most people would have observed common birds
                      catching insects or small prey with their bills. The
                      specific hunting method of raptors using their feet would
                      not have been widely documented or studied.
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
                    The distinction between how most birds catch prey (with
                    their bills) versus how raptors hunt (with their feet)
                    presents an interesting consideration:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about raptors?
                    </h3>
                    <p>
                      The specific description in the Quran of birds snatching
                      prey (in this case, metaphorically a human) aligns with
                      modern zoological understanding that raptors use their
                      feet, not their bills, to catch prey. This specific
                      hunting behavior wasn't systematically documented until
                      modern zoological studies.
                    </p>
                  </div>

                  <p>
                    While people in ancient times would have observed birds of
                    prey hunting, the specific understanding that raptors catch
                    with their feet while most other birds use their bills
                    represents a zoological detail that seems to be accurately
                    reflected in the Quranic text. This subtle distinction in
                    bird hunting behavior appears in a metaphorical passage that
                    aligns with what modern science has confirmed about raptor
                    hunting techniques.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-amber-600 hover:bg-amber-700">
              <Bird size={24} />
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
            <Sparkles className="text-amber-500" size={18} />
            <h3 className="text-lg font-medium">Wonders of Nature</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discovering connections between ancient texts and modern zoological
            knowledge invites us to reflect on the origins of scientific
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

export default RaptorsPage;
