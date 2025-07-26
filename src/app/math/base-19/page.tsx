/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Calculator,
  Key,
  Layers,
  ListOrdered,
  Sparkles,
  ArrowUp,
  Code,
} from "lucide-react";
import Image from "next/image";

const Base19Component: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Understanding Number Bases",
        icon: Layers,
      },
      {
        id: "connection",
        title: "The Base-19 Connection",
        icon: Key,
      },
      {
        id: "decoding",
        title: "Counting the Letters",
        icon: ListOrdered,
      },
      {
        id: "reflection",
        title: "A Mathematical Miracle",
        icon: Sparkles,
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
              <Calculator
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Base-19
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
                  Understanding Number Bases
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In mathematics, we commonly use a base-10 numeral system
                  (decimal), where we use digits 0 through 9. Computers rely on
                  a base-2 system (binary) using only 0 and 1. It has been
                  observed that the Quran appears to incorporate a base-19
                  numerical structure, adding another layer to its intricate
                  composition.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Mysterious Letters
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    One fascinating aspect relates to the mysterious letters
                    that begin certain chapters of the Quran. These letters,
                    known as Huroof Muqatta'at (Disconnected Letters), appear in
                    various combinations and their meaning has been a subject of
                    discussion for centuries.
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/26/1"
                      className="text-indigo-700 dark:text-indigo-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 26:1-4
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Ta, Seen, Meem, these are verses of the clarifying
                        book. Maybe you are frustrated that they don't believe.
                        If We wish We can send down from heaven a sign their
                        necks remain for it subdued."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١ طسم
                        <br />٢ تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ
                        <br />٣ لَعَلَّكَ بَاخِعٌ نَفْسَكَ أَلَّا يَكُونُوا
                        مُؤْمِنِينَ
                        <br />٤ إِنْ نَشَأْ نُنَزِّلْ عَلَيْهِمْ مِنَ السَّمَاءِ
                        آيَةً فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Base-19 Connection */}
              <section id="connection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Base-19 Connection
                </h2>
                <blockquote className="border-l-4 border-teal-500 pl-6 py-4 mb-8 bg-teal-50 dark:bg-teal-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The claim regarding Base-19 centers around the total number
                    of verses in the Quran, which is commonly accepted as 6236
                    in our standard base-10 system."
                  </p>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When the number 6236 (base-10) is converted to a base-19
                  system, it results in the number H54 (base-19). In base-19,
                  digits range from 0-9 and then A-I representing values 10-18.
                  H represents 17.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <Code size={20} className="text-teal-500" />
                    Base Conversion
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-sm mb-4">
                    <p>6236₁₀ = 17 × 19² + 5 × 19¹ + 4 × 19⁰</p>
                    <p>= 17 × 361 + 5 × 19 + 4 × 1</p>
                    <p>= 6137 + 95 + 4 = 6236</p>
                    <p className="font-bold text-teal-600 dark:text-teal-400">
                      6236₁₀ = H54₁₉
                    </p>
                  </div>
                  <div className="text-center">
                    <Image
                      src="/images/base-19.webp"
                      width={500}
                      height={200}
                      alt="Base 10 to Base 19 Conversion"
                      className="mx-auto rounded-lg"
                    />
                  </div>
                  <div className="mt-4 text-sm">
                    <a
                      href="http://www.unitconversion.org/numbers/base-10-to-base-19-conversion.html"
                      className="text-teal-600 dark:text-teal-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.unitconversion.org
                    </a>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The intriguing part is how these numbers might connect to the
                  Huroof Muqatta'at - the mysterious letters that begin certain
                  chapters.
                </p>
              </section>

              {/* Counting the Letters */}
              <section id="decoding" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Counting the Letters
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Let's examine the specific counts of the letters Ta (ط), Seen
                  (س), and Meem (م) across the entire text of the Quran.
                  Researchers have meticulously counted the occurrences of these
                  letters throughout the text.
                </p>
                <div className="text-center mb-8">
                  <Image
                    src="/images/base-19-count.webp"
                    alt="Counts of Ta, Seen, Meem"
                    className="mx-auto rounded-lg"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-medium mb-2">Ta (ط): 34</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Total occurrences of the letter Ta throughout the Quran
                    </p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-medium mb-2">Seen (س): 102</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Total occurrences of the letter Seen throughout the Quran
                    </p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-medium mb-2">Meem (م): 266</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Total occurrences of the letter Meem throughout the Quran
                    </p>
                  </div>
                </div>
                <div className="text-center mb-8">
                  <Image
                    src="/images/base-19-base.webp"
                    alt="Letters mapping to Base 19 digits"
                    className="mx-auto rounded-lg"
                    width={420}
                    height={220}
                  />
                </div>
                <div className="text-center mb-8">
                  <Image
                    src="/images/base-19-number.webp"
                    alt="H54 in Base 19"
                    className="mx-auto rounded-lg"
                    width={420}
                    height={220}
                  />
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
                  <h4 className="font-medium mb-2">A Precise Code</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Ta, Seen, and Meem correspond to the digits H, 5, and 4
                    respectively in the base-19 representation (H54) of the
                    total number of verses (6236). This implies that if even a
                    single verse were added or removed, the total would change
                    and break this numerical link.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Mathematical Miracle
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  This numerical structure raises a truly thought-provoking
                  question when considered from the perspective of the 7th
                  century CE, the time of the Quran's revelation.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could anyone 1400 years ago have conceived of, let alone
                    encoded, a text using a base-19 numerical system related to
                    specific letter counts that align with the total verse
                    count?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Knowledge of different number bases, particularly something
                    like base-19, and the ability to perform conversions between
                    them were far beyond the general understanding of
                    mathematics in the 7th century world, including the Arabian
                    peninsula.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Mathematical sophistication required to create such
                      patterns was beyond the knowledge available in 7th century
                      Arabia.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Divine Sign</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The verse quoted (26:4) mentions signs that would be sent
                      down. For believers, this base-19 pattern is seen as one
                      such sign.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Furthermore, accurately counting the occurrences of specific
                  letters across an entire book and correlating that count to
                  its total number of verses via a non-standard base system
                  would require a level of mathematical sophistication and
                  meticulous textual analysis that seems impossible for the
                  time.
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
              <Calculator
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Numerical Patterns
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Discovering hidden structures and potential signs within ancient
              texts through modern mathematical understanding.
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

export default Base19Component;
