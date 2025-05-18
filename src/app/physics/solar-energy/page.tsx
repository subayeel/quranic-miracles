/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sun,
  ChevronRight,
  Zap, // Icon for energy/science
  BookOpen,
  Quote,
  HelpCircle,
  Scale, // Icon for conservation/balance
  ArrowUp,
  Sparkles,
  Bolt, // Alternative energy icon
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

const SolarEnergyComponent = () => {
  const [activeSection, setActiveSection] = useState("solar-intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "solar-intro",
        title: "The Sun's 'Loan'",
        icon: Sun,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "solar-science",
        title: "Conservation of Energy",
        icon: Zap,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "solar-quran",
        title: "Quranic Mention",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "solar-reflection",
        title: "Food for Thought",
        icon: HelpCircle,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
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
      <div className="bg-gradient-to-r from-yellow-400 to-amber-600 dark:from-yellow-700 dark:to-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Solar Energy</h1>
          </div>
          <p className="text-xl max-w-2xl text-yellow-100">
            Exploring Energy's Balance
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("solar-science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            {/* Adjusted link to Intro */}
            <Button
              variant="outline"
              className="text-yellow-800 border-yellow-800 hover:bg-yellow-50"
              onClick={() => scrollToSection("solar-intro")}
            >
              What's This About?
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
                    Understand energy conservation
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
            <section id="solar-intro" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Sun className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>The Sun's 'Loan'</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Did you know that in the Quran, it's described as if the sun
                    'lends' us something that we later have to 'repay'?
                  </p>
                  <p>
                    Some people in the past might have thought this idea sounded
                    strange. Why would the sun *lend* anything? And what would
                    we possibly *repay* to it?
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-lg mb-3">
                      An Ancient Concept, Modern Implications
                    </h3>
                    <p>
                      This intriguing description in the Quran seems to touch
                      upon a concept remarkably similar to what modern science
                      understands about energy. Let's explore how!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Principle */}
            <section id="solar-science" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Zap className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Conservation of Energy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    In physics, one of the most fundamental principles is the
                    law of conservation of energy.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-amber-500" /> Scientific
                      Definition
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In physics and chemistry, the law of conservation of
                      energy states that the total energy of an isolated system
                      remains constant; it is said to be conserved over time. In
                      the case of a closed system the principle says that the
                      total amount of energy within the system can only be
                      changed through energy entering or leaving the system.
                      Energy can neither be created nor destroyed; rather, it
                      can only be transformed or transferred from one form to
                      another."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Conservation_of_energy"
                        className="text-amber-600 dark:text-amber-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Conservation of energy, 2024
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Bolt size={16} className="text-amber-500" /> Energy
                        Transformations
                      </h3>
                      <p>
                        Energy is constantly changing forms around us – from
                        light to heat, chemical to kinetic, and so on.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Scale size={16} className="text-gray-500" />{" "}
                        Maintaining Balance
                      </h3>
                      <p>
                        What's crucial is that the total amount of energy in a
                        closed system stays the same. You can't create extra
                        energy, nor does it just disappear.
                      </p>
                    </div>
                  </div>

                  <p>
                    This means if you gain energy from somewhere (like heat from
                    the sun), you must eventually lose that same amount of
                    energy elsewhere. It's like a cosmic balance!
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Mention */}
            <section id="solar-quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Mention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/18/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/17"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 18:17
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "You would have seen the sun, when it rose, veering
                          away from their cave towards the right, and when it
                          sets, it lends them from the left, as they lay in the
                          midst of the cave. That was one of Allah’s wonders. He
                          whom Allah guides is truly guided; but he whom He
                          misguides, for him you will find no directing friend."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٧ وَتَرَى الشَّمْسَ إِذَا طَلَعَتْ تَزَاوَرُ عَنْ
                          كَهْفِهِمْ ذَاتَ الْيَمِينِ وَإِذَا غَرَبَتْ
                          تَقْرِضُهُمْ ذَاتَ الشِّمَالِ وَهُمْ فِي فَجْوَةٍ
                          مِنْهُ ۚ ذَٰلِكَ مِنْ آيَاتِ اللَّهِ ۗ مَنْ يَهْدِ
                          اللَّهُ فَهُوَ الْمُهْتَدِ ۖ وَمَنْ يُضْلِلْ فَلَنْ
                          تَجِدَ لَهُ وَلِيًّا مُرْشِدًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Term Analysis
                    </Badge>
                    <p className="mt-3">
                      The Arabic word used here is "تَقْرِضُهُمْ" (taqridhuhum),
                      which comes from the root "قَرْض" (qardh), meaning a loan.
                      So, the verse says the sun "lends" them from the left.
                    </p>
                    <p className="mt-2">
                      In Islamic understanding, a loan is typically expected to
                      be repaid without any interest or alteration – you repay
                      exactly what was lent. Applying this to the sun's "loan,"
                      it suggests that whatever is received from the sun must be
                      given back later, precisely the same amount.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="solar-reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <HelpCircle className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>Food for Thought</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>Here's where things get really interesting!</p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have possibly
                      described the interaction with the sun's energy using a
                      concept (a loan with no interest) that so accurately
                      mirrors the modern scientific principle of energy
                      conservation?
                    </h3>
                    <p>
                      The idea that energy is conserved – gained and then lost
                      without alteration – is a cornerstone of modern physics.
                      It wasn't understood or scientifically formulated until
                      centuries after the 7th century. Think about it: people in
                      the 7th century didn't have the tools or knowledge to
                      measure energy or understand its transformations in this
                      way.
                    </p>
                  </div>

                  <p>
                    Yet, the Quranic verse uses the analogy of a precise loan
                    from the sun ("it lends them") that must be repaid,
                    perfectly illustrating the principle that energy absorbed
                    (gained from the sun) must be released (lost later, e.g., in
                    the shade, through radiation, etc.) with the total amount
                    conserved. This subtle yet profound description invites us
                    to reflect on the origin of this knowledge.
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
              <Sun size={24} />
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
            <h3 className="text-lg font-medium">
              Energy's Enduring Principles
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The deep principles governing the universe resonate across time,
            inviting us to explore the wonders around us.
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

export default SolarEnergyComponent;
