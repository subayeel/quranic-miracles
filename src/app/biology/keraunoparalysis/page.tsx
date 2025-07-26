/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Zap,
  ChevronRight,
  Activity,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

const Keraunoparalysis = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "What is Keraunoparalysis?",
        icon: Zap,
      },
      {
        id: "science",
        title: "Medical Understanding",
        icon: Activity,
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
              <Zap className="text-yellow-600 dark:text-yellow-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Keraunoparalysis
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Biology • Extreme
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
                  Caused by Lightning Strike
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Keraunoparalysis is a rare but fascinating medical condition
                  that reveals the incredible power of lightning and its effects
                  on the human body.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <AlertTriangle className="text-yellow-600" size={20} />
                    Understanding Keraunoparalysis
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Keraunoparalysis is a temporary paralysis caused by
                    lightning strike. When lightning strikes a person, it can
                    cause their muscles to become completely paralyzed for
                    several hours, even though they remain conscious and aware
                    of their surroundings.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Knowledge, Modern Discovery
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>
                      1400 years ago nobody knew about keraunoparalysis however
                      it was portrayed in the Quran.
                    </strong>{" "}
                    This medical condition was only scientifically understood
                    and named in recent decades, yet ancient texts described the
                    phenomenon with remarkable accuracy.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Medical Understanding
                </h2>
                <blockquote className="border-l-4 border-red-500 pl-6 py-4 mb-8 bg-red-50 dark:bg-red-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Lightning strikes can also induce a transient paralysis
                    known as keraunoparalysis. Signs and symptoms of
                    keraunoparalysis include lack of pulse, pallor or cyanosis,
                    and motor and sensory loss in the extremities. However,
                    keraunoparalysis usually resolves within a few hours."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Lightning_injury"
                      className="text-red-600 dark:text-red-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Lightning Injury, 2020
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Activity
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Symptoms
                      </h3>
                    </div>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Complete paralysis of limbs</li>
                      <li>• Loss of sensation in extremities</li>
                      <li>• Weak or absent pulse</li>
                      <li>• Pale or bluish skin color</li>
                      <li>• Inability to move or stand</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Recovery
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The good news is that keraunoparalysis is temporary. Most
                      patients recover full function within a few hours to a day
                      after the lightning strike, as the nervous system
                      gradually returns to normal.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  A lightning strike can cause temporary paralysis. This medical
                  phenomenon was only recently understood and documented,
                  however it was described in the Quran 1400 years before it was
                  scientifically discovered.
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
                      href="https://quran.com/en/51/44"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 51:44-45
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "But they defied the command of their Lord, so the
                        lightning struck them as they looked on. They could not
                        rise up, nor could they find help."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٤ فَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ فَأَخَذَتْهُمُ
                        الصَّاعِقَةُ وَهُمْ يَنْظُرُونَ
                        <br />
                        ٤٥ فَمَا اسْتَطَاعُوا مِنْ قِيَامٍ وَمَا كَانُوا
                        مُنْتَصِرِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    "<strong>They could not rise up</strong>" - today we
                    understand why this happens. When lightning strikes a
                    person, it causes keraunoparalysis - a temporary paralysis
                    that prevents the victim from standing or moving, exactly as
                    described in this ancient verse.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description perfectly matches what modern
                    medicine knows about keraunoparalysis: victims of lightning
                    strikes are conscious ("as they looked on") but unable to
                    move or stand up ("could not rise up"). This specific detail
                    about the inability to stand is a hallmark symptom of
                    keraunoparalysis.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The correspondence between ancient texts and modern medical
                  understanding invites us to consider the nature of knowledge
                  and observation across time:
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    keraunoparalysis?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic description includes specific medical details
                    about lightning strike victims: they remain conscious but
                    cannot stand or move. This precise description of
                    keraunoparalysis symptoms was unknown to medical science
                    until recent decades, yet it was recorded with remarkable
                    accuracy 1400 years ago.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, medical knowledge was limited, and the
                      specific effects of lightning on the human nervous system
                      were completely unknown. The detailed description of
                      paralysis following lightning strikes shows remarkable
                      precision.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's medical research confirms exactly what the Quran
                      described: lightning can cause temporary paralysis while
                      leaving victims conscious. This alignment between ancient
                      text and modern science is striking.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This example demonstrates how ancient wisdom and modern
                  science can illuminate each other, encouraging us to approach
                  both traditional texts and scientific discoveries with
                  curiosity and respect.
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
                className="text-yellow-600 dark:text-yellow-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                The Power of Lightning
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Understanding keraunopararalysis bridges the gap between ancient
              wisdom and modern medical science.
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
          className="bg-yellow-600 dark:bg-yellow-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Keraunoparalysis;
