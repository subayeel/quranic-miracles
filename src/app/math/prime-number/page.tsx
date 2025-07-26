/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Hash,
  SquareDivide,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Calculator,
  Quote,
} from "lucide-react";

const PrimeNumbersPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Indivisible Numbers",
        icon: Hash,
      },
      {
        id: "definition",
        title: "What is a Prime?",
        icon: Calculator,
      },
      {
        id: "chapter1",
        title: "Chapter 1 Analysis",
        icon: BookOpen,
      },
      {
        id: "mathany",
        title: "Mathany Connection",
        icon: SquareDivide,
      },
      {
        id: "totalcount",
        title: "The Grand Total",
        icon: Quote,
      },
      {
        id: "reflection",
        title: "Historical Context",
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
              <Hash className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  The Mystery of Primes
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
                  Indivisible Numbers, Indivisible Concept
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Prime numbers are special because they can only be divided
                  evenly by 1 and themselves. They are, in essence,
                  'indivisible' building blocks in the world of numbers.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Remarkable Pattern
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    It's fascinating to consider this concept in relation to the
                    Quran. For example, the word "Allah" appears 2699 times in
                    the Quran. Interestingly, 2699 is a prime number –
                    indivisible, just as the concept of Allah (God) is central
                    and indivisible in Islam.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Skeptics might see this as mere coincidence, but let's explore
                  further numerical characteristics within the Quran and see if
                  there's a deeper pattern at work.
                </p>
              </section>

              {/* Definition */}
              <section id="definition" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  What Exactly is a Prime Number?
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "A prime number (or a prime) is a natural number greater
                    than 1 that cannot be formed by multiplying two smaller
                    natural numbers. A natural number greater than 1 that is not
                    prime is called a composite number... Primes are central in
                    number theory because of the fundamental theorem of
                    arithmetic: every natural number greater than 1 is either a
                    prime itself or can be factorized as a product of primes
                    that is unique up to their order."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Prime Number, 2020
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calculator
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Simple Definition
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Simply put, primes are numbers like 2, 3, 5, 7, 11, and so
                      on. They are the foundational numbers that, when
                      multiplied together, create all other whole numbers
                      greater than 1.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <SquareDivide
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Indivisible Nature
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      What makes them special is their indivisibility - they
                      cannot be broken down into smaller whole number factors
                      other than 1 and themselves.
                    </p>
                  </div>
                </div>
              </section>

              {/* Chapter 1 Analysis */}
              <section id="chapter1" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Chapter 1: A Prime Example
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Let's look at the very first chapter of the Quran, Al-Fatiha.
                  According to numerical analyses, it exhibits some remarkable
                  characteristics that align with the concept of prime numbers.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Al-Fatiha's Prime Characteristics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Verse Count</h4>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        7
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        (Prime number)
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Word Count</h4>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        29
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        (Prime number)
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Letter Count</h4>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        139
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        (Prime number)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    <a
                      href="https://quran.com/en/1/1"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Quran Chapter 1 →
                    </a>
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    All key counts for this foundational chapter are prime
                    numbers, creating a pattern of mathematical indivisibility
                    that mirrors the theological concept of divine unity.
                  </p>
                </div>
              </section>

              {/* Mathany Connection */}
              <section id="mathany" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  "Mathany" and Prime Factors
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran itself provides a potentially related concept that
                  deepens this numerical mystery. In Surah Al-Hijr (15:87),
                  Allah says:
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/15/87"
                      className="text-teal-700 dark:text-teal-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 15:87
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "We have given you seven of the pairs (Mathany), and the
                        Grand Quran."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٨٧ وَلَقَدْ آتَيْنَاكَ سَبْعًا مِنَ الْمَثَانِي
                        وَالْقُرْآنَ الْعَظِيمَ
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Here, the number seven (the verse count of Al-Fatiha) is
                  explicitly referred to as belonging to a group called
                  "Mathany" (مَثَانِي). In another verse, Surah Az-Zumar
                  (39:23), the *entire* Quran is described using the same term:
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/39/23"
                      className="text-teal-700 dark:text-teal-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 39:23
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Allah has sent down the best of narrations: A Scripture
                        consistent and paired (Mathany)..."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٢٣ اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا
                        مُتَشَابِهًا مَثَانِيَ ...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Mathematical Connection
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The word "Mathany" is derived from a root meaning "pair" or
                    "to do again." While it has various interpretations, one
                    could relate it to the concept of multiplication or pairing
                    in mathematics. The Fundamental Theorem of Arithmetic tells
                    us any non-prime number greater than 1 can be formed by
                    *multiplying prime numbers together*.
                  </p>
                </div>
              </section>

              {/* Total Letter Count */}
              <section id="totalcount" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Grand Total: A Prime Discovery
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Taking this pattern further, let's consider the total number
                  of letters in the entire Quran. Careful counts indicate this
                  number is 326159.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    Total Letters in the Quran: 326,159
                  </h3>
                  <div className="text-center">
                    <span className="inline-block bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 text-lg font-medium px-4 py-2 rounded-full">
                      This is a Prime Number
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Mathematical Significance
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Checking if 326159 is prime requires significant
                      calculation. The analysis confirms that 326159 is indeed a
                      prime number - indivisible.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Preservation Implications
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      If even a single letter were added, removed, or changed,
                      the total would change and likely no longer be prime,
                      potentially breaking this numerical characteristic.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    <a
                      href="http://www.kaheel7.com/ar/index.php/1/2087--2019"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reference: Quran Characters Counter →
                    </a>
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This finding suggests the Quran is numerically "indivisible"
                    at its foundational level, mirroring the theological concept
                    of divine unity through mathematical precision.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Historical Perspective
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  These numerical observations lead to a compelling question,
                  especially when considering the historical context of the 7th
                  century.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century have known about the
                    mathematical significance of prime numbers?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    In the 7th century, mathematical knowledge was developing,
                    but the concept of prime numbers was based on much smaller
                    integers. Identifying a number like 326159 as prime requires
                    systematic division tests or more advanced techniques, which
                    were simply not available or practical at that time.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The sheer task of accurately counting every single letter in
                    the entire Arabic text of the Quran would also have been an
                    immense undertaking, extremely prone to error without modern
                    computational tools.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Limited Mathematical Tools
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The mathematical understanding and computational abilities
                      of the 7th century were insufficient for such complex
                      numerical analysis and prime number identification.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Intentional Design</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The apparent deliberate numerical structure points to
                      knowledge seemingly beyond the human capabilities and
                      mathematical understanding of that era.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This intersection of ancient scripture and abstract
                  mathematical properties presents a fascinating point for
                  reflection on the source of such precise numerical design.
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
              <Hash className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Numbers, Patterns, and Meaning
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring the intriguing world of numbers within the Quranic text.
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
          className="bg-blue-600 dark:bg-blue-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PrimeNumbersPage;
