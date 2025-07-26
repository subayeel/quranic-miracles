/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Circle,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Target,
  Calculator,
  Hash,
  ChevronRight,
} from "lucide-react";

const PiDay: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Introducing Pi (π)",
        icon: Circle,
      },
      {
        id: "what-is-pi",
        title: "Pi and Angles",
        icon: Target,
      },
      {
        id: "quran",
        title: "The Quranic Verse",
        icon: BookOpen,
      },
      {
        id: "numerical-connection",
        title: "A Numerical Correspondence",
        icon: Calculator,
      },
      {
        id: "reflection",
        title: "Point for Reflection",
        icon: HelpCircle,
      },
    ],
    []
  );

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

    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Circle
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Pi (π)
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mathematics • Medium
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                Share
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                Bookmark
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid">
          {/* Main Content - Medium Style */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none dark:prose-invert">
              {/* Introduction */}
              <section id="intro" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Introducing Pi (π)
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Pi (π) is one of the most fascinating numbers in mathematics,
                  representing the ratio of a circle's circumference to its
                  diameter. It's a value that appears in countless formulas
                  across science and engineering.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Mathematical Constant
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    While ancient civilizations had approximations of this
                    ratio, the symbol π was popularized much later. For example,
                    the Welsh mathematician William Jones is noted for his use
                    of the symbol π in 1706. This level of mathematical
                    formalization and widely accepted numerical value
                    (approximately 3.14159) is a relatively recent development
                    in human history.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Let's explore some interesting properties of π and then see
                  how they might connect to an ancient text.
                </p>
              </section>

              {/* Pi and Angles */}
              <section id="what-is-pi" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Pi and Angles
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Pi is fundamental to understanding circles and angles. While
                  we commonly measure angles in degrees (360° for a full
                  circle), radians offer another way, especially useful in
                  higher mathematics and physics.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <Circle size={20} className="text-blue-500" />
                    Radians and Centiradians
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    In radians, a full circle is 2π radians, and a half-circle
                    is π radians.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border mb-4">
                    <p className="font-mono text-center">
                      180° = π radians
                      <br />
                      360° = 2π radians
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If we express these values in centiradians (where 1
                    centiradian = 0.01 radians), we get approximations:
                    <br />
                    π radians ≈ 3.14 radians = 314 centiradians
                    <br />
                    2π radians ≈ 6.28 radians = 628 centiradians
                  </p>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  These specific numerical values (314 and 628) take on
                  significance when looking at a particular verse in the Quran.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Verse
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  There's a particular verse in the Quran that seems to hint at
                  Earth's spherical nature and contains fascinating numerical
                  properties when analyzed through the lens of Abjad numerals.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Quran 96:8
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "But to your Lord is the return (الرُّجْعَىٰ)."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٨ إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">Linguistic Insight</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The word "الرُّجْعَىٰ" (Al-Rujaa) means "the return." In the
                    context of this verse, it could be interpreted as suggesting
                    that everything returns to Allah, potentially implying a
                    spherical or cyclical nature of existence and movement—
                    something that aligns with our modern understanding of
                    Earth's sphericity and orbital motion.
                  </p>
                </div>
              </section>

              {/* Numerical Connection */}
              <section id="numerical-connection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Numerical Correspondence
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Another layer of interpretation involves the ancient system of
                  Abjad numerals, where each Arabic letter has a numerical
                  value. This system existed in various forms at the time of the
                  Quran's revelation.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <Hash className="text-yellow-500" size={20} />
                    Gematria Values
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    According to the numerical assignments used in this
                    analysis:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Word Value</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        The gematrical value of the word الرُّجْعَىٰ
                        ("Al-Rujaa") is calculated as:
                      </p>
                      <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                        314
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Verse Value</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        The gematrical value of the entire verse إِنَّ إِلَىٰ
                        رَبِّكَ الرُّجْعَىٰ is calculated as:
                      </p>
                      <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                        628
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    <a
                      href="https://en.wikipedia.org/wiki/Abjad_numerals"
                      className="text-yellow-600 dark:text-yellow-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more about Abjad Numerals (Wikipedia)
                    </a>
                  </p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 p-8 rounded-lg mb-8">
                  <span className="inline-block bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Remarkable Correspondence
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    These numerical values derived from the Arabic text (314 and
                    628) correspond exactly to the approximate values of π and
                    2π when expressed in centiradians:
                    <br />
                    • 314 centiradians ≈ π radians
                    <br />• 628 centiradians ≈ 2π radians
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Point for Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the context of the 7th century:
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could this verse, revealed 1400 years ago, seem to imply
                    Earth's sphericity AND contain numerical values related to π
                    and 2π in centiradians, concepts not formalized until
                    centuries later?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The apparent convergence of the verse's linguistic meaning
                    (implying return/sphericity) and its numerical value via an
                    existing ancient system (matching π and 2π in centiradians)
                    is presented as a remarkable alignment that points to
                    knowledge beyond human capacity at the time of its
                    revelation.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, the precise value and formal
                      understanding of π and circular measurement in
                      radians/centiradians were not established.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Divine Knowledge</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This connection between an ancient text and modern
                      mathematical constants invites contemplation about the
                      source of such knowledge.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This connection between an ancient text and modern
                  mathematical constants invites contemplation about the source
                  of such knowledge, particularly when considering the
                  historical context where precise mathematical understanding
                  was limited.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>

      {/* Medium-style Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Sparkles
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Connections in the Cosmos
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Reflecting on the patterns found in mathematics, nature, and
              ancient texts.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm flex items-center space-x-1 mx-auto"
            >
              <ArrowUp size={16} />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation - Medium Style */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            const nextIndex =
              (contents.findIndex((c) => c.id === activeSection) + 1) %
              contents.length;
            scrollToSection(contents[nextIndex].id);
          }}
          className="bg-purple-600 dark:bg-purple-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PiDay;
