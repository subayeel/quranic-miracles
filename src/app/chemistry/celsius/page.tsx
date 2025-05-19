/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Thermometer, // Using Thermometer icon
  ChevronRight,
  FlaskConical, // For scientific evidence
  BookOpen, // For Quranic reference
  Lightbulb, // For reflection/insight
  RotateCcw, // To represent measurement/calculation
  ArrowUp,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming these are available
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming these are available

// Define TypeScript types for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind class for background color
  iconColor: string; // Tailwind class for icon color
}

const CelsiusMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  // useRef is typically used for DOM elements, not state for content structure
  // Keeping it similar to the example, but noting its primary use is for refs to elements
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Silver & Temperature",
        icon: Thermometer,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Fact: Melting Point",
        icon: FlaskConical,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "Quranic Occurrences",
        icon: BookOpen,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "correspondence",
        title: "Numerical Harmony",
        icon: RotateCcw, // Represents calculation/finding a pattern
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "reflection",
        title: "Contemplation",
        icon: Lightbulb, // Represents insight/reflection
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
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
  }, [contents]); // Dependency array includes contents

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
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 dark:from-blue-800 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Celsius & Silver</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Exploring a potential numerical sign in the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Connection <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-700"
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
                  <CardDescription>Navigate the points</CardDescription>
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
                      <Thermometer className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Silver and Temperature</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Let's explore a fascinating observation regarding the
                    element silver, its physical properties, and an intriguing
                    numerical pattern found within the verses of the Holy Quran.
                    This exploration touches upon scientific knowledge and how
                    it might resonate with ancient scripture.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Connecting Science and Scripture
                    </h3>
                    <p>
                      Sometimes, modern scientific facts seem to align with
                      patterns or descriptions found in ancient religious texts.
                      While correlation doesn't always equal causation,
                      exploring these points of connection can be
                      thought-provoking. Today, we focus on the melting point of
                      silver.
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
                      <FlaskConical className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Scientific Fact: Melting Point</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Thermometer size={16} className="text-teal-500" />{" "}
                      Melting Point of Silver
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      The melting point of silver (Ag) is the temperature at
                      which it changes from a solid to a liquid state at
                      standard atmospheric pressure. This is a well-established
                      physical constant determined through scientific
                      measurement.
                    </p>
                    <div className="mt-3 text-lg font-bold text-center text-teal-600 dark:text-teal-400">
                      Melting Point of Silver: <br /> 961.78 &deg;C
                      (approximately 962&deg;C)
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      This precise measurement, especially in the Celsius scale,
                      is a product of modern scientific understanding and
                      instrumentation. The Celsius scale itself was developed in
                      the 18th century, centuries after the Quran was revealed.
                    </p>
                  </div>

                  <p>
                    Understanding the melting point of silver with this level of
                    precision, and using the Celsius scale, is a relatively
                    recent scientific achievement. In the 7th century, during
                    the time of the Quran's revelation, while people knew about
                    the physical properties of silver like its ability to melt
                    under heat, they certainly did not measure it in degrees
                    Celsius or know its exact melting point number as 962.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <BookOpen className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Quranic Occurrences of "The Silver"</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The specific Arabic phrase "الْفِضَّةَ" (al-fiḍḍah), meaning
                    "the silver," appears twice in the Holy Quran. Let's look at
                    where these mentions occur.
                  </p>

                  {/* Verse 1 */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/3/v/14"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 3:14
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Adorned for the people is the love of desires, such
                          as women, and children, and piles upon piles of the
                          gold and{" "}
                          <span className="font-bold text-purple-700 dark:text-purple-300">
                            the silver
                          </span>
                          , and branded horses, and livestock, and fields. These
                          are the conveniences of the worldly life, but with
                          Allah lies the finest resort."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٤ زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ مِنَ
                          النِّسَاءِ وَالْبَنِينَ وَالْقَنَاطِيرِ
                          الْمُقَنْطَرَةِ مِنَ الذَّهَبِ وَالْفِضَّةِ
                          وَالْخَيْلِ الْمُسَوَّمَةِ وَالْأَنْعَامِ وَالْحَرْثِ
                          ۗ ذَٰلِكَ مَتَاعُ الْحَيَاةِ الدُّنْيَا ۖ وَاللَّهُ
                          عِنْدَهُ حُسْنُ الْمَآبِ
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Verse 2 */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/9/v/34"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 9:34 (part)
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "O you who believe! Many of the rabbis and priests
                          consume people's wealth illicitly, and hinder from
                          Allah’s path. Those who hoard the gold and{" "}
                          <span className="font-bold text-purple-700 dark:text-purple-300">
                            the silver
                          </span>
                          , and do not spend them in Allah’s cause, inform them
                          of a painful punishment."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٤ يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّ كَثِيرًا مِنَ
                          الْأَحْبَارِ وَالرُّهْبَانِ لَيَأْكُلُونَ أَمْوَالَ
                          النَّاسِ بِالْبَاطِلِ وَيَصُدُّونَ عَنْ سَبِيلِ
                          اللَّهِ ۗ وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ
                          وَالْفِضَّةَ وَلَا يُنْفِقُونَهَا فِي سَبِيلِ اللَّهِ
                          فَبَشِّرْهُمْ بِعَذَابٍ أَلِيمٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6">
                    The second mention is in the context of severe heat ("heated
                    in the Fire of Hell") in the subsequent verse (9:35), which
                    is relevant as silver's properties related to heat (like
                    melting) are being discussed.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Numerical Harmony */}
            <section id="correspondence" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <RotateCcw className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>An Intriguing Numerical Finding</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Using textual analysis of the Quran, specifically counting
                    elements within its structure, some researchers have made an
                    interesting observation related to the verses where "the
                    silver" (الْفِضَّةَ) appears.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <RotateCcw size={16} className="text-yellow-500" /> The
                      Calculation
                    </h3>
                    <p>
                      According to certain analyses (such as those potentially
                      derived from tools like Quran Characters Counter mentioned
                      in the reference), if you take a specific index or count
                      associated with the second occurrence of "الْفِضَّةَ"
                      (e.g., 1269) and subtract the index or count associated
                      with the first occurrence (e.g., 307), you get the number
                      962.
                    </p>
                    <div className="mt-4 text-center text-xl font-bold text-yellow-700 dark:text-yellow-300">
                      1269 - 307 = 962
                    </div>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      (Note: The exact nature of the numbers 1269 and 307
                      depends on the specific counting methodology used, such as
                      cumulative word count or other indexing methods within the
                      Quranic text.)
                    </p>
                  </div>

                  <p>
                    The result of this numerical operation within the structure
                    of the Quran is 962.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <Lightbulb className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>Points for Contemplation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here's where the two pieces of information converge: the
                    scientific fact and the numerical finding in the Quran.
                  </p>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Connecting 962: The Melting Point & The Quranic Number
                    </h3>
                    <p>
                      We know from modern science that the melting point of
                      silver is approximately 962&deg;C.
                    </p>
                    <p className="mt-2">
                      We found a numerical result of 962 derived from the
                      positions/counts associated with the mentions of "the
                      silver" in the Quran.
                    </p>
                    <p className="mt-4 font-semibold text-center">
                      The number matches!
                    </p>
                  </div>

                  <p>
                    This correspondence becomes particularly thought-provoking
                    when we consider the historical context. The Quran was
                    revealed in the 7th century. The Celsius temperature scale
                    didn't exist until the 18th century, developed by Anders
                    Celsius. The precise melting point of silver as 962&deg;C is
                    a fact established through modern scientific methods and
                    tools, far beyond the reach of knowledge available in the
                    7th century.
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-pink-500" /> A
                      Potential Sign?
                    </h3>
                    <p>
                      For believers, finding such a specific numerical
                      correspondence between a scientific constant unknown at
                      the time of revelation and a pattern within the Quran's
                      text can be seen as a potential sign, a subtle indication
                      of the divine origin of the scripture. It's presented as a
                      point of wonder and contemplation on the depth and layers
                      within the Quran.
                    </p>
                  </div>

                  <p>
                    How could a text revealed over 1400 years ago contain such a
                    precise numerical link to a scientific property that would
                    only be discovered and measured accurately many centuries
                    later using a temperature scale that didn't exist? This is
                    the intriguing question that such observations invite us to
                    ponder.
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">Reflecting on Connections</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the fascinating intersections between scientific knowledge
            and the intricate patterns found within the Holy Quran.
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

export default CelsiusMiracle;
