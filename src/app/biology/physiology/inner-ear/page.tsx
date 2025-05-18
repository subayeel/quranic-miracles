/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Headphones, // Using Headphones for ear theme
  ChevronRight,
  Scale, // Using Scale to represent balance
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Quote, // Another icon option for balance/activity
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

const InnerEar = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "More Than Hearing!",
        icon: Headphones, // Or Ear icon if available/preferred
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "The Science of Balance",
        icon: Scale, // Or Activity icon
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "A Quranic Clue",
        icon: BookOpen,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
      },
      {
        id: "reflection",
        title: "Pause and Ponder",
        icon: HelpCircle, // Or Lightbulb
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
    ];
  }, []);

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
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="text-purple-200" size={32} /> {/* Or Ear */}
            <h1 className="text-4xl font-bold">The Inner Ear</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Your Body's Secret Balance System
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-700"
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
                    Discover the wonders of the inner ear
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
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Headphones className="text-purple-500" size={24} />{" "}
                      {/* Or Ear */}
                    </div>
                    <CardTitle>More Than Hearing!</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    We usually think of our ears as just for hearing sounds –
                    listening to music, chatting with friends, or hearing the
                    birds sing. But deep inside your ear is a tiny, amazing
                    system responsible for something totally different: your
                    balance!
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">A Hidden Talent</h3>
                    <p>
                      For centuries, people primarily understood the ear's role
                      in detecting sound. The intricate connection between the
                      inner ear and maintaining balance was a hidden secret of
                      our anatomy, unknown to most.
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
                      <Scale className="text-teal-500" size={24} />{" "}
                      {/* Or Activity */}
                    </div>
                    <CardTitle>The Science of Balance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Your inner ear contains a complex system called the
                    vestibular system. This system includes the semicircular
                    canals and the otolith organs, and it's like your body's
                    personal navigation and stability expert!
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> What Science
                      Says
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Providing balance, when moving or stationary, is also a
                      central function of the ear. The ear facilitates two types
                      of balance: static balance, which allows a person to feel
                      the effects of gravity, and dynamic balance, which allows
                      a person to sense acceleration."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Ear#Balance"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Ear, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    These tiny structures detect movement and changes in your
                    head's position, sending signals to your brain that help you
                    stay upright, whether you're standing still, walking, or
                    even spinning! This detailed understanding of the inner
                    ear's role in balance is a relatively modern scientific
                    discovery.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-emerald-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <BookOpen className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>A Quranic Clue</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, here's where things get really interesting. The Quran,
                    revealed over 1400 years ago, seems to allude to a
                    surprising function related to the ear that wasn't known at
                    the time.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/18/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/11"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 18:11
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then We hit them on their ears in the cave for a
                          number of years."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١١ فَضَرَبْنَا عَلَىٰ آذَانِهِمْ فِي الْكَهْفِ سِنِينَ
                          عَدَدًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
                      Understanding the Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "Darabna ala Athanihim (فَضَرَبْنَا عَلَىٰ
                      آذَانِهِمْ)" literally means "We hit them on their ears".
                      In the context of the verse describing the sleepers in the
                      cave, this phrase is understood to signify rendering them
                      deeply unconscious, unable to be easily awakened by normal
                      sounds or disturbances – much like being "knocked out"
                      where the sense of balance and spatial orientation is
                      profoundly affected, leading to a state of deep
                      unawareness beyond mere sleep. People witnessing them
                      would think they were awake, yet they were in a prolonged
                      state of unconsciousness.
                    </p>
                  </div>
                  <p>
                    At a time when the ear was thought to be solely about
                    hearing, this description points towards the ear's
                    connection to a state beyond simple sleep and waking,
                    aligning with what we now understand about the inner ear's
                    vital role in consciousness and balance.
                  </p>
                  {/* Optional Image/GIF section - uncomment if you have images locally */}
                  {/*
                                     <div className="flex justify-center my-8">
                                         <img
                                             src="/assets/images/inner-ear-med.webp" // Replace with your image path
                                             alt="Diagram of the Inner Ear"
                                             className="rounded-lg shadow-md max-w-sm"
                                         />
                                     </div>
                                     <div className="flex justify-center my-8">
                                          <img
                                              src="/assets/images/inner-ear.gif" // Replace with your gif path
                                              alt="Animated inner ear"
                                              className="rounded-lg shadow-md max-w-sm"
                                          />
                                      </div>
                                    */}
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <HelpCircle className="text-yellow-500" size={24} />{" "}
                      {/* Or Lightbulb */}
                    </div>
                    <CardTitle>Pause and Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>This brings us to a truly thought-provoking point:</p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century, without modern
                      anatomy knowledge, describe an effect linked to the ears
                      that aligns with our current understanding of balance and
                      consciousness?
                    </h3>
                    <p>
                      In the 7th century, the detailed functions of the inner
                      ear, especially its role in balance and spatial
                      orientation and how affecting it can lead to profound
                      unconsciousness, were completely unknown. Medical
                      understanding of the ear was limited primarily to its
                      function in hearing. The notion that a specific action
                      related to the ears could induce a deep, prolonged state
                      of being "knocked out" as described or alluded to in the
                      verse is remarkable, as it points towards a connection
                      that science would only unravel centuries later.
                    </p>
                  </div>

                  <p>
                    The fact that this ancient text mentions a seemingly
                    specific physiological effect connected to the ears, which
                    resonates with modern scientific understanding of the inner
                    ear's vestibular system and its link to states of
                    consciousness, is a wonder that invites us to reflect
                    deeply. It's a gentle reminder of the incredible wisdom
                    contained within the human body and potentially, within
                    ancient scriptures.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700">
              <Headphones size={24} /> {/* Or Ear */}
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Wonders Within and Without
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Our bodies hold amazing secrets, sometimes hinted at in ways that
            connect across time and knowledge.
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

export default InnerEar;
