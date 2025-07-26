/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  DoorClosed,
  Atom,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Infinity,
} from "lucide-react";

const WormholeDay = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Exploring Wormholes",
        icon: DoorClosed,
      },
      {
        id: "science",
        title: "The Science of Shortcuts",
        icon: Atom,
      },
      {
        id: "quran",
        title: "Wormholes in the Quran",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Deeper Look",
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
              <DoorClosed
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Wormholes
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Physics • Medium
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
                  Exploring Wormholes
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Imagine looking up at a distant star and wishing you could
                  reach it in just a few steps. This might sound like science
                  fiction, but theoretical physics explores concepts that could
                  make such cosmic shortcuts possible: wormholes.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Remarkably, centuries before modern physics conceived of such
                  ideas, a concept resembling these cosmic bridges was mentioned
                  in the Quran. How could a text from the 7th century touch upon
                  something so advanced? Let's explore!
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Shortcut Through Space-Time
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Wormholes, also known as Einstein-Rosen bridges, are
                    hypothetical tunnels through space-time. If they exist, they
                    could connect two very distant points in the universe,
                    allowing for much faster travel than traversing normal
                    space.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence / Explanation */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Science of Shortcuts
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In 1935, Albert Einstein and Nathan Rosen, using the theory of
                  General Relativity, described theoretical "bridges" through
                  space-time. These hypothetical structures were later
                  popularized as "wormholes" and are envisioned as tunnels
                  connecting two different points in space-time.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Think of a wormhole like an incredibly efficient,
                    frictionless roller coaster for cosmic travel. You wouldn't
                    necessarily need continuous rocket power to move through it.
                    Gravity would theoretically pull you in, guide you through,
                    and expel you out the other side."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Theoretical Physics
                  </cite>
                </blockquote>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800 mb-8">
                  <h4 className="font-medium mb-3">
                    Relativistic Effects During Transit
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                    During transit through a wormhole, relativistic effects from
                    intense gravity could cause interesting phenomena:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    <li>
                      Your clock might slow down relative to an observer outside
                      (time dilation).
                    </li>
                    <li>
                      Your size might appear to shrink (length contraction).
                    </li>
                    <li>
                      From an outside perspective, your energy and mass would
                      appear to increase dramatically as you approach
                      relativistic speeds.
                    </li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                    However, upon exiting the wormhole, everything would return
                    to normal for the traveler.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  While mathematically possible within General Relativity,
                  wormholes remain theoretical. We have never observed one, and
                  the energy requirements to create and keep one stable for
                  travel are immense, possibly requiring exotic matter.
                  Physicists understand the concept, but actual human use is
                  firmly in the realm of speculation for now.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Interestingly, the Quran mentions a concept that some modern
                  Muslims interpret as wormholes. The Arabic word used is
                  'Ma'arej' (معارج), which translates to 'ascending ways' or
                  'ladders'.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/70/3"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 70:3-4
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "(a penalty) from Allah (who owns) the ascending ways
                        [Ma'arej in Arabic],
                        <br />
                        The angels and the Spirit ascend to Him in a Day, the
                        measure of which is fifty thousand years."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٣ مِنَ اللَّهِ ذِي الْمَعَارِجِ
                        <br />٤ تَعْرُجُ الْمَلَائِكَةُ وَالرُّوحُ إِلَيْهِ فِي
                        يَوْمٍ كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Interpretation
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The reference to 'Ma'arej' as "ascending ways" owned by
                    Allah, which angels and the Spirit use to ascend over a
                    period described as fifty thousand years, is seen by some as
                    pointing to a means of traversing vast cosmic distances
                    efficiently. The "fifty thousand years" could be interpreted
                    in various ways, but within the context of rapid travel
                    through these 'Ma'arej', it is sometimes linked to
                    relativistic time dilation.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    Muslims also believe that these "ascending ways" are not
                    exclusive to angels. The miraculous night journey and
                    ascension of Prophet Muhammad (known as the Israa and
                    Mi'raj) is understood by many to have involved traversing
                    the cosmos instantaneously, using such a method. 'Mi'raj'
                    (معراج) is the singular form of 'Ma'arej'.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic concept of "ascending ways" for rapid cosmic
                    travel, combined with references to time dilation effects,
                    shows remarkable parallels to modern wormhole theory -
                    concepts that were completely unknown in the 7th century.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Deeper Look
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The striking correlation between a theoretical concept in
                  modern physics (wormholes) and a term used in a 7th-century
                  text (Ma'arej) invites profound contemplation about the source
                  of this knowledge.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century possibly describe a
                    concept so aligned with Einstein's General Relativity,
                    centuries before its formulation?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, understanding of the cosmos was limited.
                    The idea of shortcuts through vast interstellar distances,
                    or the relativistic effects like time dilation associated
                    with extreme gravity or speed, were far beyond the
                    scientific grasp of the time.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran also describes hypothetical "doors in the heaven"
                  that contract interstellar distances into mere walking
                  distances, leading to distant structures. The text suggests
                  that even if such a clear sign were shown to non-believers,
                  they would dismiss it as mere illusion. This narrative aligns
                  with the bizarre, almost magical, effect a wormhole travel
                  might appear to have.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This alignment between an ancient text and a complex
                  theoretical physics concept, one that requires advanced
                  mathematics and understanding of space-time, is seen by
                  believers as a compelling sign of the text's divine origin.
                  The precision with which these cosmic concepts are described
                  in a 7th-century text continues to invite reflection and
                  wonder.
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
              <Infinity
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Space-Time Mysteries
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Connecting ancient texts and modern concepts about the cosmos.
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

export default WormholeDay;
