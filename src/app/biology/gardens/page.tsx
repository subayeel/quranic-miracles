/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Leaf,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Heart,
} from "lucide-react";

const Gardens = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Natural Antidepressant",
        icon: Heart,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Leaf,
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
              <Leaf className="text-green-600 dark:text-green-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Gardens & Mental Health
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Biology • Medium
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
                  Natural Antidepressant
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Gardens have been cherished by humans for millennia, but their
                  profound impact on mental health has only recently been
                  validated by modern science. What ancient texts described as
                  sources of joy are now being prescribed as natural medicine.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Wisdom, Modern Discovery
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the Quran, gardens bring joy. Skeptics claim that whoever
                    wrote the Quran made a mistake; gardens have no effect on
                    us. Today gardens are used as a natural antidepressant and
                    recognized therapy has profound positive effects on our
                    mental wellbeing.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Evidence
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "There is increasing awareness among researchers and health
                    practitioners of the potential health benefits derived from
                    gardening activities."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — National Center for Biotechnology Information, 2016
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Heart
                        size={20}
                        className="text-pink-500 dark:text-pink-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Mental Health Benefits
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Modern research confirms that spending time in gardens
                      reduces symptoms of depression and anxiety, improves mood,
                      and enhances overall psychological wellbeing.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Leaf
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Horticultural Therapy
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Gardens are now prescribed as therapy for mental health
                      conditions, with "horticultural therapy" becoming
                      recognized as an effective treatment approach.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The research shows that gardening increases:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>Individual's life satisfaction</li>
                  <li>Vigor and psychological wellbeing</li>
                  <li>Positive affects and sense of community</li>
                  <li>Cognitive function</li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  While also reducing:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>Stress and anger</li>
                  <li>Fatigue and depression</li>
                  <li>Anxiety symptoms</li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Gardens are being prescribed as a natural antidepressant.
                  However this was portrayed in the Quran 1400 years before it
                  was discovered.
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
                      href="https://quran.com/en/27/60"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 27:60
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Or, who created the heavens and the earth, and rains
                        down water from the sky for you? With it We produce
                        joyful gardens, whose trees you could not have produced.
                        Is there another god with Allah? But they are a people
                        who equate."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٦٠ أَمَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَأَنْزَلَ
                        لَكُمْ مِنَ السَّمَاءِ مَاءً فَأَنْبَتْنَا بِهِ
                        حَدَائِقَ ذَاتَ بَهْجَةٍ مَا كَانَ لَكُمْ أَنْ
                        تُنْبِتُوا شَجَرَهَا ۗ أَإِلَٰهٌ مَعَ اللَّهِ ۚ بَلْ
                        هُمْ قَوْمٌ يَعْدِلُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>"Bahjat بَهْجَةٍ"</strong> means joy or delight. In
                    this verse gardens bring joy or delight. Today gardens are
                    being prescribed as a natural antidepressant, confirming
                    what was mentioned 1400 years ago about gardens' ability to
                    bring joy to the human spirit.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of gardens as bringing "joy"
                    (bahjah) aligns with modern scientific understanding of
                    gardens as natural antidepressants and their positive
                    psychological effects.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The connection between ancient texts and modern scientific
                  discoveries invites us to reflect on knowledge across time:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone 1400 years ago have known about the
                    psychological effects of gardens?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic description of gardens as bringing "joy"
                    (bahjah) aligns with modern scientific understanding of
                    gardens as natural antidepressants. This specific mention of
                    gardens' positive psychological effects, rather than just
                    their beauty or practical uses, raises interesting questions
                    about the source of this knowledge.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      While people have appreciated gardens throughout history,
                      the specific understanding of their mental health benefits
                      and antidepressant properties is a relatively recent
                      scientific discovery.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The alignment between this ancient text and modern
                      psychological science offers a fascinating perspective on
                      knowledge, revelation, and our connection to nature.
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
              <Leaf className="text-green-600 dark:text-green-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Nature's Healing Spaces
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Gardens continue to reveal their healing gifts, connecting ancient
              wisdom with modern scientific discovery.
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
          className="bg-green-600 dark:bg-green-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Gardens;
