/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Orbit,
  Atom,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Link,
} from "lucide-react";

const GravityComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Gravity & Folding",
        icon: Orbit,
      },
      {
        id: "science",
        title: "Scientific Context",
        icon: Atom,
      },
      {
        id: "quran",
        title: "Quranic References",
        icon: BookOpen,
      },
      {
        id: "connection",
        title: "Connecting Quran & Science",
        icon: Link,
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
              <Orbit
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Gravity
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cosmology • Advanced
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
                  Gravity and the Fabric of Spacetime
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In the Quran, there are verses that can be understood in
                  relation to gravity, and intriguingly, some seem to connect it
                  to the concept of "folding" the heavens. For a long time, this
                  might have puzzled those who saw gravity purely as a force
                  between objects. However, modern science, particularly
                  Einstein's General Relativity, offers a perspective where
                  gravity is intimately linked to the curvature or "folding" of
                  spacetime itself.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Gravity: More Than Just a Force
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Newton described gravity as a force pulling objects
                    together. Einstein's groundbreaking theory, General
                    Relativity, reframed this, showing that gravity isn't a
                    force in the traditional sense, but rather a consequence of
                    mass and energy warping the very fabric of spacetime around
                    them. Objects then simply follow the curves in this warped
                    spacetime.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Orbit
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Spacetime Curvature
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Mass and energy warp the fabric of spacetime, creating the
                      effect we experience as gravity.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Link
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Folding the Heavens
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The Quranic concept of "folding" the heavens aligns with
                      modern understanding of spacetime curvature.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Understanding: The Fate of the Universe
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Recent data has suggested that the Big Rip scenario is
                    unlikely. This leaves the Big Chill (continued expansion)
                    and the Big Crunch (re-collapse due to gravity) as primary
                    contenders."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Modern Cosmology
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Big Chill</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Continued expansion where everything spreads out and
                      cools, leading to heat death.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Big Crunch</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Expansion reverses and everything collapses back in due to
                      gravitational forces.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Gravity's Role</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The total amount of matter and energy determines whether
                      gravity can overcome expansion.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The idea of a Big Crunch relies on the total amount of matter
                  and energy in the universe being enough for gravity to
                  eventually overcome the expansion. It's a scenario where
                  gravity ultimately wins, pulling everything back together.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic References to the Great Hour
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran speaks about "The Hour," often understood as the Day
                  of Judgment or the end of the current universal order. Two
                  particular verses offer intriguing descriptions related to
                  this event:
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/7/187"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 7:187
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "They ask you about the Hour, 'When will it come?' Say,
                        'Knowledge of it rests with my Lord. None can reveal its
                        coming except He. It weighs heavily on the heavens and
                        the earth. It will not come upon you except suddenly.'"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٨٧ يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا ۖ
                        قُلْ إِنَّمَا عِلْمُهَا عِنْدَ رَبِّي ۖ لَا يُجَلِّيهَا
                        لِوَقْتِهَا إِلَّا هُوَ ۚ ثَقُلَتْ فِي السَّمَاوَاتِ
                        وَالْأَرْضِ ۚ لَا تَأْتِيكُمْ إِلَّا بَغْتَةً
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/21/104"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 21:104
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "On the day when We will fold the heaven, like the
                        folder compacts the books, and as We originated the
                        first creation We shall return it; a promise (binding on
                        Us); surely We will deliver."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٠٤ يَوْمَ نَطْوِي السَّمَاءَ كَطَيِّ السِّجِلِّ
                        لِلْكُتُبِ ۚ كَمَا بَدَأْنَا أَوَّلَ خَلْقٍ نُعِيدُهُ ۚ
                        وَعْدًا عَلَيْنَا ۚ إِنَّا كُنَّا فَاعِلِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The phrase "ثَقُلَتْ (thaqulat)" means "it weighs heavily,"
                    describing The Hour as something that will weigh heavily
                    upon the heavens and the earth. The description of "folding
                    the heaven, like the folder compacts the books" suggests a
                    collapsing or compacting process.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    These verses link an event caused by "weighing heavily"
                    (gravity) with an event described as "folding the heaven."
                    This parallel resonates with the modern scientific
                    understanding that gravity is the curvature or folding of
                    spacetime.
                  </p>
                </div>
              </section>

              {/* Connection */}
              <section id="connection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Drawing the Connection: Gravity and Folding
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When we look at these two verses together in light of modern
                  scientific understanding, a remarkable potential connection
                  emerges.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Unified View?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Verse 7:187 describes The Hour as "weighing heavily," which
                    aligns with the idea of gravity playing a crucial role,
                    potentially in a cosmic collapse scenario like the Big
                    Crunch. Verse 21:104 describes the end state as "folding the
                    heaven." In General Relativity, gravity is understood as the
                    curvature or warping (a form of "folding") of spacetime.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  If both verses are describing the same ultimate event – the
                  end of the universe as we know it, potentially a Big Crunch –
                  then the Quranic description links an event caused by
                  "weighing heavily" (gravity) with an event described as
                  "folding the heaven." This parallel drawn in the Quranic text
                  between gravity and folding the cosmos is strikingly resonant
                  with the modern scientific understanding that gravity is the
                  curvature or folding of spacetime.
                </p>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point for Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific knowledge available in the 7th
                  century, the concept of gravity as a force was not clearly
                  defined, let alone the sophisticated understanding that
                  gravity is linked to the curvature or folding of the very
                  fabric of spacetime.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could this knowledge be present?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The depiction in the Quran, linking the "heavy weighing"
                    (gravity) of The Hour to the "folding" of the heavens, seems
                    to touch upon ideas that would only be formulated by science
                    many centuries later with Einstein's General Relativity.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of gravity and
                      spacetime was limited. The precise description of cosmic
                      phenomena shows remarkable insight.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's cosmological research confirms the connection
                      between gravity and spacetime curvature that the Quran
                      described.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This alignment between ancient scripture and modern cosmology
                  invites deep thought about the source of this knowledge. How
                  could someone living in the 7th century, without any means to
                  measure or conceptualize spacetime curvature or cosmic
                  gravitational collapse scenarios, describe the end of the
                  universe using language that resonates so closely with modern
                  scientific understanding?
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
                className="text-indigo-600 dark:text-indigo-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Cosmic Phenomena
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The mysteries of the universe and their potential reflection in
              ancient texts continue to inspire awe and reflection.
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

export default GravityComponent;
