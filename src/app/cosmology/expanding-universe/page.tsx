/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Torus,
  Atom,
  BookOpen,
  HelpCircle,
  Expand,
  ArrowUp,
  Sparkles,
  History,
} from "lucide-react";

const ExpandingUniverse = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Expanding Universe",
        icon: Torus,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Atom,
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
      },
      {
        id: "historical",
        title: "Historical Context",
        icon: History,
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
              <Torus
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Expanding Universe
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
                  Expanding Universe
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In the Quran, the universe is described as expanding. Skeptics
                  claimed that whoever wrote the Quran made a fundamental error,
                  as the universe was believed to be static and unchanging for
                  centuries. Today, modern science confirms that the universe is
                  indeed expanding at an accelerating rate.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Expanding Since the Big Bang
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The universe has been expanding since its inception in the
                    Big Bang approximately 13.8 billion years ago. This
                    expansion is not just continuing today but actually
                    accelerating, driven by a mysterious force scientists call
                    "Dark Energy."
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Expand
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Hubble's Discovery
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      In 1929, Edwin Hubble observed that galaxies are moving
                      away from us, and the farther they are, the faster they
                      recede.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Atom
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Dark Energy
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Astronomers have confirmed the existence of "Dark Energy,"
                      a mysterious repulsive force that counteracts gravity and
                      accelerates expansion.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Evidence
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In physical cosmology, cosmic inflation, cosmological
                    inflation, or just inflation, is a theory of exponential
                    expansion of space in the early universe... The inflationary
                    epoch lasted from 10^−36 seconds after the conjectured Big
                    Bang singularity to some time between 10^−33 and 10^−32
                    seconds after the singularity. Following the inflationary
                    period, the universe continued to expand, but at a slower
                    rate."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Inflation_(cosmology)"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Inflation (Cosmology), 2023
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Hubble's Law</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The observation that galaxies are moving away from us,
                      with velocity proportional to distance, led to the
                      understanding that the universe is expanding.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Cosmic Inflation</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The theory of exponential expansion in the early universe
                      explains many observed features of the cosmos.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Accelerating Expansion</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Dark Energy causes the universe to expand at an increasing
                      rate, a discovery that earned the 2011 Nobel Prize in
                      Physics.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Scientists today do not fully understand what this "Dark
                  Energy" is, but they know that it comprises about 68% of the
                  universe's total energy and is causing the entire universe to
                  expand at an increasing rate.
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
                      href="https://quran.com/51/47"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 51:47
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And the heaven, We built it with craftsmanship and We
                        are still expanding."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    "Wa-innā lamūsiʿūna وَإِنَّا لَمُوسِعُونَ" specifically
                    translates to "We are indeed expanding it." The present
                    continuous tense used here indicates an ongoing action—that
                    the expansion of the universe is still happening, a fact
                    confirmed by modern science.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of an expanding heaven perfectly
                    matches the modern understanding of cosmic expansion. This
                    alignment between ancient wisdom and contemporary cosmology
                    is remarkable, especially considering the historical
                    context.
                  </p>
                </div>
              </section>

              {/* Historical Context */}
              <section id="historical" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Context
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Understanding the historical context is crucial to
                  appreciating the significance of this reference in the Quran:
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Scientific Understanding in the 7th Century
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century when the Quran was revealed, the
                    prevailing cosmological understanding across civilizations
                    was that of a static, unchanging universe. The concept of an
                    expanding cosmos was completely foreign to human thought.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Einstein's "Greatest Blunder"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Even Albert Einstein, as late as the early 20th century,
                    initially rejected the idea of an expanding universe. When
                    his equations of General Relativity suggested the universe
                    must be expanding or contracting, he introduced a
                    "cosmological constant" to force a static solution. After
                    Hubble's discovery confirmed the expansion, Einstein called
                    this modification his "greatest blunder."
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Bible in Job 37:18 describes the sky as "hard as a mirror
                  of cast bronze," supporting the then-common belief in a
                  static, solid firmament. This stands in contrast to the
                  Quranic description of an expanding heaven, which aligns with
                  modern scientific understanding.
                </p>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The correlation between modern cosmological discoveries and
                  the Quranic verse raises an intriguing question:
                </p>
                <div className="bg-pink-50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man who lived 1400 years ago have known about the
                    expanding universe?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The concept of an expanding universe—a phenomenon that
                    wasn't scientifically discovered until the 20th century and
                    required advanced telescopes and mathematics to
                    detect—appears to be referenced in a text from the 7th
                    century. This connection between ancient scripture and
                    modern scientific discovery invites contemplation about the
                    origins of such knowledge.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Perspective</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of cosmology
                      was limited. The precise description of cosmic expansion
                      shows remarkable insight into the universe's fundamental
                      nature.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's cosmological research confirms exactly what the
                      Quran described: the universe is expanding and this
                      expansion is accelerating.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  The expanding universe is considered one of the most
                  significant discoveries in modern astronomy. It fundamentally
                  changed our understanding of the cosmos and led to theories
                  like the Big Bang. The reference in the Quran to an expanding
                  heaven, at a time when no human could have known this fact,
                  presents a remarkable alignment between ancient text and
                  contemporary science.
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
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Cosmic Wonders
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The mysteries of our universe continue to unfold, connecting
              ancient wisdom with modern scientific discoveries.
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

export default ExpandingUniverse;
