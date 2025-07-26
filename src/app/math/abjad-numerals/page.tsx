/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Hash,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Scale,
} from "lucide-react";

const AbjadNumerals = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Ancient Numerical Systems",
        icon: Hash,
      },
      {
        id: "discovery",
        title: "Encoding in the Quran",
        icon: BookOpen,
      },
      {
        id: "patterns",
        title: "Numerical Patterns",
        icon: Scale,
      },
      {
        id: "reflection",
        title: "A Mathematical Inquiry",
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
              <Hash
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Abjad Numerals
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
                  Ancient Numerical Systems
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Before the Arabic numbers we use today, an ancient system
                  called Abjad numerals was used. In this system, each letter of
                  the Arabic alphabet had a specific numerical value, creating a
                  sophisticated alphanumeric code.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Understanding Abjad Numerals
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Abjad numerals, also known as Hisab al-Jummal, form a
                    decimal alphabetic numeral system where the 28 letters of
                    the Arabic alphabet are assigned numerical values. This
                    system was in use in the Arabic-speaking world even before
                    the adoption of positional Arabic numerals around the 8th
                    century.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Hash
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Letter Values
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      In the Abjad system, letters represent values: 'alif' is
                      1, 'bāʾ' is 2, and so on up to 9. Then letters represent
                      tens and hundreds, going up to 1000.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Historical Use
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      This ancient system predates modern numbering and was
                      widely used for calculations and record-keeping in the
                      Islamic world.
                    </p>
                  </div>
                </div>
              </section>

              {/* Discovery in the Quran */}
              <section id="discovery" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Encoding in the Quran
                </h2>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 mb-8 bg-purple-50 dark:bg-purple-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "This ancient numeral system appears to be encoded within
                    the text of the Quran itself, revealing remarkable
                    mathematical patterns."
                  </p>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Interestingly, this ancient numeral system appears to be
                  encoded within the text of the Quran itself. Let's examine an
                  example from Surah 111 that demonstrates this sophisticated
                  mathematical structure.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/111/1"
                      className="text-purple-700 dark:text-purple-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 111:1-5
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Condemned are the hands of Abee Lahab, and he is
                        condemned. His wealth did not avail him, nor did what he
                        acquired. He will burn in a Flaming Fire. And his
                        wife—the firewood carrier. Around her neck is a rope of
                        thorns."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١ تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ
                        <br />٢ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ
                        <br />٣ سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ
                        <br />٤ وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ
                        <br />٥ فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Numerical Patterns */}
              <section id="patterns" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Numerical Patterns
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  By applying the Abjad numerical values to the letters and
                  words in this Surah, remarkable patterns emerge that
                  demonstrate an intricate mathematical structure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Scale size={16} className="text-green-500" />
                      Odd Positions
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The gematrical (Abjad) value of all odd-numbered words
                      (1st, 3rd, 5th, etc.) sums to <strong>3049</strong>.
                      Remarkably, the value of all odd-numbered letters
                      throughout the Surah also sums to <strong>3049</strong>.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Scale size={16} className="text-blue-500" />
                      Even Positions
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Similarly, the gematrical value of all even-numbered words
                      (2nd, 4th, 6th, etc.) is <strong>2382</strong>. The value
                      of all even-numbered letters is also exactly
                      <strong>2382</strong>.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border border-amber-100 dark:border-amber-800">
                  <h4 className="font-medium mb-2">Perfect Balance</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This intricate numerical coding means that altering even a
                    single letter would disrupt this precise mathematical
                    balance, demonstrating remarkable precision in the text's
                    composition.
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <a
                      href="https://www.youtube.com/watch?v=46kcd-u3TZM&ab_channel=skakvac"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Extraordinary numerical coding in the Quran, evidence that
                      this book is from God (Video Link)
                    </a>
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Mathematical Inquiry
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the sophistication of this numerical structure, a
                  thought-provoking question emerges about the origins of such
                  mathematical precision.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could this intricate Abjad numerical encoding, known
                    before the 8th century, be woven into the fabric of the
                    Quran, a text revealed in the 7th century?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The presence of such a detailed and consistent numerical
                    pattern, based on an ancient system, within the Quranic text
                    invites contemplation on its origin and preservation through
                    centuries. This connection between an established ancient
                    numerical system and the Quranic text is indeed remarkable.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, creating such complex mathematical
                      patterns would have required extraordinary computational
                      abilities and foresight about future mathematical
                      analysis.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Mathematical Precision</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This level of numerical precision, embedded within the
                      very letters and words, highlights a layer of complexity
                      that continues to fascinate researchers today.
                    </p>
                  </div>
                </div>
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
              <Hash
                className="text-indigo-600 dark:text-indigo-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Ancient Wisdom, Modern Discovery
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring the intersection of ancient numerical systems and
              sophisticated mathematical patterns.
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
          className="bg-indigo-600 dark:bg-indigo-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AbjadNumerals;
