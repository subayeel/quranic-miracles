/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Flame,
  Mountain,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Pickaxe,
} from "lucide-react";

const CoalMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Combustible Rock",
        icon: Flame,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Mountain,
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Reflection",
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
              <Flame className="text-red-600 dark:text-red-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Coal
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Geology • Medium
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
                  Combustible Rock
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran mentions stones that can be used as fuel for fire.
                  Skeptics claim this is scientifically inaccurate since stones
                  don't burn. However, we now know that coal - a combustible
                  rock - exists and is widely used as fuel.
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Coal - A Rock That Burns
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In 7th century Arabia, people primarily used wood as fuel
                    for fire. The concept of rocks that could burn would have
                    been foreign to them. Today, coal is recognized as one of
                    the world's most important fossil fuels - literally a stone
                    that burns.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Evidence
                </h2>
                <blockquote className="border-l-4 border-slate-500 pl-6 py-4 mb-8 bg-slate-50 dark:bg-slate-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "What is Coal? Coal is an organic sedimentary rock that
                    forms from the accumulation and preservation of plant
                    materials, usually in a swamp environment. Coal is a
                    combustible rock and, along with oil and natural gas, it is
                    one of the three most important fossil fuels. Coal has a
                    wide range of uses; the most important use is for the
                    generation of electricity."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Geology, Coal, 2020
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Pickaxe
                        size={20}
                        className="text-slate-500 dark:text-slate-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Coal Formation
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Coal forms over millions of years as plant material is
                      buried, compressed, and transformed by heat and pressure.
                      This process creates a carbon-rich rock that can be burned
                      as fuel.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Flame
                        size={20}
                        className="text-red-500 dark:text-red-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Historical Usage
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      While coal has been used in various parts of the world
                      since ancient times, it was not known or used in 7th
                      century Arabia. Wood was the primary fuel source in that
                      region and era.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The scientific description of coal as a "combustible rock" is
                  significant because this knowledge was not available to the
                  people of Arabia during the time the Quran was revealed. The
                  concept of stones that could burn would have seemed
                  contradictory to common experience.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Reference
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/2/24"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 2:24
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "But if you do not-and you will not-then beware the Fire
                        whose fuel is people and stones, prepared for the
                        disbelievers."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        فَإِنْ لَمْ تَفْعَلُوا وَلَنْ تَفْعَلُوا فَاتَّقُوا
                        النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ ۖ
                        أُعِدَّتْ لِلْكَافِرِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The key phrase "وَقُودُهَا النَّاسُ وَالْحِجَارَةُ"
                    (waqooduha an-nasu wal-hijarah) means "whose fuel is people
                    and stones." The word "حِجَارَةُ" (hijarah) specifically
                    refers to stones or rocks. This description indicates rocks
                    that can burn - precisely what coal is.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic mention of stones as fuel aligns perfectly with
                    our modern understanding of coal as a combustible rock,
                    knowledge that was not available in 7th century Arabia.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The correlation between modern scientific understanding of
                  coal and the Quranic verse raises an intriguing question:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    coal?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In 7th century Arabia, the concept of rocks that could burn
                    as fuel would have been counterintuitive and unknown. Coal
                    was not mined or used in that region, and the Arabs
                    primarily used wood for fire. Yet the Quran specifically
                    mentions stones as fuel for fire - a scientific fact that
                    matches our modern understanding of coal as a combustible
                    rock.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In 7th century Arabia, wood was the primary fuel source.
                      The concept of combustible stones was foreign to the
                      region and time period.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today we know coal is indeed a combustible rock, widely
                      used as fuel for electricity generation and other
                      industrial purposes.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This alignment between the Quranic description and scientific
                  knowledge invites thoughtful consideration about the source of
                  this information. The mention of stones that burn as fuel
                  represents knowledge that was not part of the common
                  understanding in 7th century Arabia.
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
              <Flame className="text-red-600 dark:text-red-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Earth's Resources
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The wonders of our planet's natural resources continue to affirm
              connections between ancient texts and modern scientific
              discoveries.
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
          className="bg-red-600 dark:bg-red-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CoalMiracle;
