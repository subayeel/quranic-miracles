/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Quote,
  ArrowUp,
  Waves, // Using Waves icon for gravitational waves
  Atom, // Using Atom/science icon
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

// Define TypeScript interfaces for content structure
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Background color class
  iconColor: string; // Icon color class
}

const GravitationalWaves: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for the ref object
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Ripples in Spacetime",
        icon: Waves,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "The Science Behind the Ripples",
        icon: Atom,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Insights",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Thought-Provoking Connection",
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
      threshold: 0.3, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only set active section if it's currently intersecting
        // This prevents previous sections from becoming active when scrolling down past them
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;
    const elementsToObserve = contents
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // Clear previous observations if contents change (though useMemo prevents this for this component)
    Object.values(currentRefs).forEach((el) => {
      if (el) observer.unobserve(el);
    });
    sectionRefs.current = {}; // Reset refs

    // Observe all section elements
    elementsToObserve.forEach((element) => {
      sectionRefs.current[element.id] = element;
      observer.observe(element);
    });

    return () => {
      // Clean up observer
      Object.values(sectionRefs.current).forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [contents]); // Dependency array includes contents

  const scrollToSection = (id: string) => {
    // Set active section immediately on click for better UX
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="text-purple-300" size={32} />
            <h1 className="text-4xl font-bold">Gravitational Waves</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-200">
            Exploring the Ripples in Spacetime
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-100 hover:bg-white hover:text-indigo-700"
              onClick={() => scrollToSection("intro")}
            >
              Start Here
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
                    Journey through the cosmos and ancient text
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
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Waves className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Ripples in Spacetime</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine the universe as a vast, flexible fabric called
                    spacetime. When massive objects move and accelerate within
                    this fabric, they create disturbances, much like dropping a
                    stone into a pond creates ripples on the surface. These
                    cosmic ripples are known as gravitational waves.
                  </p>
                  <p>
                    For centuries, these waves were only theoretical. It wasn't
                    until very recently, with incredibly sensitive instruments,
                    that we were finally able to detect them directly. Yet,
                    remarkably, it seems the Quran, revealed over 1400 years
                    ago, may have hinted at the very existence and nature of
                    these waves at a time when such a concept was completely
                    beyond human understanding.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Concept Unknown to the 7th Century
                    </h3>
                    <p>
                      In the 7th century, the idea of spacetime, or that the
                      movement of celestial bodies could generate waves
                      traversing the cosmos, was entirely outside the scope of
                      human knowledge or even imagination. The understanding of
                      gravity was limited, let alone its propagation as waves.
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
                      <Atom className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Science Behind the Ripples</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> What Science
                      Tells Us
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Gravitational waves are disturbances in the curvature
                      (fabric) of spacetime, generated by accelerated masses,
                      that propagate as waves outward from their source at the
                      speed of light...
                      <br />
                      Gravitational-wave astronomy is a branch of observational
                      astronomy that uses gravitational waves to collect
                      observational data about sources of detectable
                      gravitational waves such as binary star systems composed
                      of white dwarfs, neutron stars, and black holes; and
                      events such as supernovae, and the formation of the early
                      universe shortly after the Big Bang."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Gravitational_wave"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Gravitational Wave, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    These are not just theoretical concepts; they are actual
                    waves that stretch and compress the very fabric of space and
                    time as they pass through.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Waves size={16} className="text-blue-500" /> Affecting
                        Objects
                      </h3>
                      <p>
                        Crucially, when a gravitational wave passes through an
                        object (like you, the Earth, or a distant star), it
                        doesn't push it around. Instead, it stretches and
                        contracts the object slightly in a specific pattern as
                        the wave distorts spacetime itself. This effect is a
                        form of vibration.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-blue-500" /> Modern
                        Discovery
                      </h3>
                      <p>
                        Detecting these tiny distortions requires extremely
                        sensitive equipment, like the LIGO and Virgo
                        observatories. It was only in 2015 that the first direct
                        detection of gravitational waves was made, opening a new
                        window to understanding the universe.
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
                    <CardTitle>Quranic Insights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the advanced scientific understanding required
                    to even conceive of gravitational waves, let's look at some
                    verses from the Quran, a book revealed in the 7th century to
                    Prophet Muhammad (peace be upon him), an individual known to
                    be illiterate.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/52/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/9"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 52:9
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "On the Day when the heaven vibrates in waves."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">٩ يَوْمَ تَمُورُ السَّمَاءُ مَوْرًا</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Meaning of Words
                      </Badge>
                      <p className="mt-2">
                        The Arabic word "Maur" (مَور) means waves. The word
                        "Tamur" (تَمُورُ) means vibrates or oscillates.
                        Interestingly, "Tamur" is also used in Quran 67:16 to
                        describe the vibrations of an earthquake.
                      </p>
                      <p className="mt-2">
                        This verse speaks of the 'heaven' (which can encompass
                        the cosmos/spacetime) vibrating in waves. Modern science
                        tells us that gravitational waves cause objects (and
                        spacetime) to vibrate and that they are, indeed, waves.
                        The Quran describes vibrations caused by waves – a
                        precise description of the effect of gravitational waves
                        stretching and contracting things in place.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/21/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/33"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 21:33
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "It is He who created the night and the day, and the
                          sun and the moon, everything swimming in an orbit."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٣ وَهُوَ الَّذِي خَلَقَ اللَّيْلَ وَالنَّهَارَ
                          وَالشَّمْسَ وَالْقَمَرَ ۖ كُلٌّ فِي فَلَكٍ يَسْبَحُونَ
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Meaning of Swimming
                      </Badge>
                      <p className="mt-2">
                        The Arabic word "Yasbahoon" (يَسْبَحُونَ) means
                        swimming. Why would the Quran describe celestial bodies
                        as "swimming" in their orbits?
                      </p>
                      <p className="mt-2">
                        Modern science provides a fascinating potential answer:
                        as celestial bodies move and accelerate through
                        spacetime, they create gravitational waves, effectively
                        generating ripples around them as a ship does when it
                        "swims" through water. This word choice, "swimming,"
                        precisely captures the action of creating waves through
                        movement in a medium (spacetime).
                      </p>
                    </div>
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
                    <CardTitle>A Thought-Provoking Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The concepts of gravitational waves, spacetime distortion,
                    and how massive objects generate these ripples are deeply
                    complex and were entirely unknown to humanity until the last
                    century.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      gravitational waves and their unique effects?
                    </h3>
                    <p>
                      The detailed description in Quran 52:9 – of the heaven
                      vibrating in waves, aligning with how gravitational waves
                      stretch and contract spacetime – and the evocative use of
                      "swimming" in Quran 21:33 to describe celestial motion and
                      its wave-generating effect, present a remarkable
                      correlation.
                    </p>
                  </div>

                  <p>
                    In the 7th century, scientific understanding was limited.
                    The precise nature of the cosmos, the concept of spacetime,
                    or the existence of these faint, yet powerful, gravitational
                    ripples was unimaginable. The alignment between these
                    ancient verses and modern scientific discoveries invites us
                    to reflect on the source of such knowledge and the
                    miraculous nature of the Quran.
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Cosmic Ripples and Ancient Wisdom
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The universe continues to reveal its secrets, showing profound
            connections where we least expect them.
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

export default GravitationalWaves;
