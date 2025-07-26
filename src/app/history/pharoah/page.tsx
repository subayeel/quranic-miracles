/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Crown,
  History,
  BookOpen,
  Sparkles,
  ArrowUp,
  Clock,
} from "lucide-react";

const PharaohTitle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Title of Pharaoh",
        icon: Crown,
      },
      {
        id: "history",
        title: "Historical Evidence",
        icon: History,
      },
      {
        id: "quran",
        title: "Quranic Accuracy",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Reflection",
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
              <Crown className="text-amber-600 dark:text-amber-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  The Title of Pharaoh
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  History • Medium
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
                  Title of Pharaoh
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  For centuries, many believed that all Egyptian rulers were
                  called "Pharaohs" throughout Egyptian history. However, modern
                  archaeological discoveries reveal a different picture—one that
                  the Quran correctly portrayed 1400 years ago.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Common Historical Misconception
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Many ancient and modern texts incorrectly apply the title
                    "Pharaoh" to Egyptian rulers across all time periods. This
                    includes instances in the Bible where the rulers of Egypt
                    during the time of Abraham and Joseph are called Pharaohs.
                    Modern Egyptology has revealed this to be historically
                    inaccurate.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Let's explore what modern archaeology has revealed about when
                  this title was actually used.
                </p>
              </section>

              {/* Historical Evidence */}
              <section id="history" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Evidence
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern archaeological research has conclusively shown that the
                  rulers of Egypt were simply called "kings" during earlier
                  periods, including the time traditionally associated with
                  Joseph. Only later did the title "Pharaoh" come to designate
                  the ruler.
                </p>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "From the Twelfth Dynasty onward, the word appears in a wish
                    formula 'Great House, May it Live, Prosper, and be in
                    Health', but again only with reference to the royal palace
                    and not the person. Sometime during the era of the New
                    Kingdom, Second Intermediate Period, pharaoh became the form
                    of address for a person who was king."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Pharaoh, 2019
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <History
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Original Meaning
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Before the New Kingdom period (c. 1570-1069 BCE), the word
                      "Pharaoh" (pr-ꜥꜣ) meant "Great House" and referred only to
                      the royal palace or court, not to the ruler himself.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock
                        size={20}
                        className="text-amber-500 dark:text-amber-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Evolution of the Title
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Only during the New Kingdom period did "Pharaoh" evolve to
                      become a title used to directly address the Egyptian
                      ruler, coinciding with the time of Moses according to
                      historical timelines.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This archaeological evidence shows that the distinction
                  between "king" and "Pharaoh" as titles for Egyptian rulers is
                  historically significant and chronologically specific.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Accuracy
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Remarkably, the Quran makes the correct historical distinction
                  in its terminology, despite being revealed in 7th century
                  Arabia, long before modern archaeological discoveries
                  confirmed this historical detail.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Joseph's Time vs. Moses' Time
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-green-100 dark:border-green-700">
                      <h4 className="font-bold mb-3">
                        <a
                          href="https://quran.com/12/54"
                          className="text-green-700 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 12:54 - Joseph's Time
                        </a>
                      </h4>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "The king said, 'Bring him to me, and I will reserve him
                        for myself.' And when he spoke to him, he said, 'This
                        day you are with us established and secure.'"
                      </p>
                      <div className="font-arabic text-right text-lg mb-4">
                        <p
                          dir="rtl"
                          className="text-gray-800 dark:text-gray-100"
                        >
                          وَقَالَ الْمَلِكُ ائْتُونِي بِهِ أَسْتَخْلِصْهُ
                          لِنَفْسِي ۖ فَلَمَّا كَلَّمَهُ قَالَ إِنَّكَ الْيَوْمَ
                          لَدَيْنَا مَكِينٌ أَمِينٌ
                        </p>
                      </div>
                      <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full">
                        "al-malik الْمَلِكُ" - the king
                      </span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-green-100 dark:border-green-700">
                      <h4 className="font-bold mb-3">
                        <a
                          href="https://quran.com/40/26"
                          className="text-green-700 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 40:26 - Moses' Time
                        </a>
                      </h4>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Pharaoh said, 'Let me kill Moses, and let him appeal to
                        his Lord. I fear he may change your religion, or spread
                        disorder in the land.'"
                      </p>
                      <div className="font-arabic text-right text-lg mb-4">
                        <p
                          dir="rtl"
                          className="text-gray-800 dark:text-gray-100"
                        >
                          وَقَالَ فِرْعَوْنُ ذَرُونِي أَقْتُلْ مُوسَىٰ
                          وَلْيَدْعُ رَبَّهُ ۖ إِنِّي أَخَافُ أَنْ يُبَدِّلَ
                          دِينَكُمْ أَوْ أَنْ يُظْهِرَ فِي الْأَرْضِ الْفَسَادَ
                        </p>
                      </div>
                      <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full">
                        "fir'awn فِرْعَوْنُ" - Pharaoh
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quran's precise terminology—consistently using "king"
                    for the ruler in Joseph's story and "Pharaoh" for the ruler
                    in Moses' time—perfectly aligns with modern archaeological
                    findings about when this title came into use, despite this
                    knowledge not being available in the 7th century.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The historical accuracy of the Quran's terminology for
                  Egyptian rulers raises a profound question about the source of
                  this knowledge.
                </p>
                <div className="bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone who lived 1400 years ago have known about
                    the correct usage of the title "Pharaoh"?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    This linguistic precision in the Quran—distinguishing
                    between "king" and "Pharaoh" in exactly the historically
                    correct periods—was only confirmed by archaeologists and
                    linguists in the modern era. This level of historical
                    accuracy would have been impossible to know in 7th century
                    Arabia, which had no access to Egyptian hieroglyphic
                    translations or archaeological evidence about ancient
                    Egyptian royal titles.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This historical precision stands in contrast to other ancient
                  texts which often anachronistically use "Pharaoh" for all
                  Egyptian rulers. Unlike these texts, the Quran makes the
                  correct distinction despite being revealed centuries before
                  modern archaeological discoveries confirmed these linguistic
                  details about ancient Egypt. The accuracy of such a specific
                  historical detail—one that was unknown to the scholars of the
                  7th century—invites contemplation about the origins of the
                  knowledge contained in the Quranic text.
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
                className="text-amber-600 dark:text-amber-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Historical Linguistics
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Discovering connections between ancient texts and archaeological
              findings reveals the depth of historical knowledge across time.
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
          className="bg-amber-600 dark:bg-amber-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PharaohTitle;
