/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  AlertTriangle,
  Mountain,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const LandslideMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Shifting Ground",
        icon: Mountain,
      },
      {
        id: "geology",
        title: "Geological Facts",
        icon: AlertTriangle,
      },
      {
        id: "quran",
        title: "Quranic Verse",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
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
              <AlertTriangle
                className="text-amber-600 dark:text-amber-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Landslides
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
                  Shifting Ground
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Have you ever thought about how the ground beneath us can
                  shift? We're exploring the fascinating world of landslides – a
                  phenomenon that involves the movement of rock, debris, or
                  earth down a slope.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Understanding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    While it was known in 7th-century Arabia that sandy areas
                    could collapse, the idea that solid, rocky mountains could
                    experience similar catastrophic failures was largely
                    unknown. The concept of a mountain simply "caving in" was
                    likely outside common understanding.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Mountain
                        size={20}
                        className="text-amber-500 dark:text-amber-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Known Instability
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Ancient peoples understood that loose sand and soil could
                      collapse or shift, especially in desert environments.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <AlertTriangle
                        size={20}
                        className="text-amber-500 dark:text-amber-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Unknown Phenomenon
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The idea that massive, solid mountains could experience
                      catastrophic failures and landslides was largely unknown.
                    </p>
                  </div>
                </div>
              </section>

              {/* Geological Facts */}
              <section id="geology" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Geological Facts
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The term landslide refers to several forms of mass wasting
                    that include a wide range of ground movements, such as
                    rockfalls, deep-seated slope failures, mudflows, and debris
                    flows. Landslides occur in a variety of environments,
                    characterized by either steep or gentle slope gradients,
                    from mountain ranges to coastal cliffs."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Landslide, 2020
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Mountain Ranges</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Landslides, including rockfalls and deep slope failures,
                      occur in mountain ranges made of solid rock.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Diverse Environments</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      These geological events happen in various terrains, not
                      just loose soil or sandy areas.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Natural Process</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Landslides are widespread natural processes linked to
                      gravity and geological conditions.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Modern geology confirms that landslides are not limited to
                  loose materials but occur in solid rocky terrain. This
                  understanding was not part of common knowledge in the 7th
                  century, when observations were limited to surface phenomena.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Verse
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/17/68"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 17:68
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Are you confident that He will not cause side of land
                        to cave in beneath you? Or unleash a tornado against
                        you? And then you find no protector for yourselves."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٦٨ أَفَأَمِنْتُمْ أَنْ يَخْسِفَ بِكُمْ جَانِبَ الْبَرِّ
                        أَوْ يُرْسِلَ عَلَيْكُمْ حَاصِبًا ثُمَّ لَا تَجِدُوا
                        لَكُمْ وَكِيلًا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The phrase "يَخْسِفَ بِكُمْ جَانِبَ الْبَرِّ" (yakhsifa
                    bikum janib al-barr) translates as "cause side of land to
                    cave in beneath you." This description aligns remarkably
                    with landslide phenomena, where masses of earth or rock move
                    downwards from the side of slopes.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of land caving in from the side
                    perfectly describes landslide mechanics, including those
                    occurring in rocky mountain terrain - knowledge that was
                    beyond 7th-century understanding.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point to Ponder
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Connecting the geological understanding of landslides in
                  various terrains, including rocky mountains, with the Quranic
                  verse from the 7th century brings us to an intriguing point:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century describe land caving in
                    from the side when this knowledge wasn't widespread?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic verse speaks generally about the potential for
                    land to collapse from the side, a description that fits both
                    known (sand dunes) and then-unknown (rocky mountains) types
                    of landslides. This accurate description, predating modern
                    geological understanding by over a thousand years, invites
                    reflection on the source of this knowledge.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, understanding of rocky mountain
                      landslides was not part of common or scientific knowledge
                      available to desert communities.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's geological science confirms that landslides occur
                      across diverse environments, exactly as the general
                      description suggests.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  Exploring such correlations between ancient texts and modern
                  science can deepen our appreciation for both the natural world
                  and the profound wisdom found in scriptures across cultures.
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
              <AlertTriangle
                className="text-amber-600 dark:text-amber-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Earth's Dynamic Forces
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring how ancient wisdom and modern geology illuminate the
              dynamic forces that shape our planet.
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

export default LandslideMiracle;
