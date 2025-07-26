/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Ruler,
  MapPin,
  BookOpen,
  Sparkles,
  ArrowUp,
  Quote,
} from "lucide-react";

const KilometerDay: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Kilometer Connection",
        icon: Ruler,
      },
      {
        id: "science",
        title: "Earth's Iron Core",
        icon: MapPin,
      },
      {
        id: "quran",
        title: "The Verse Count",
        icon: BookOpen,
      },
      {
        id: "miracle",
        title: "An Astonishing Correlation",
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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Ruler
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Kilometers
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
                  The Kilometer Connection
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Let's talk about kilometers, a unit of distance commonly used
                  today. It's simply 1000 meters. While this unit is standard
                  for us, imagine a time 1400 years ago, in the 7th century,
                  when such standardized units of measurement were unknown,
                  especially for vast distances within the Earth itself!
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Knowledge in the 7th Century
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, during the time of the Prophet Muhammad
                    ﷺ, understanding of Earth's internal structure was based on
                    limited observations and philosophical ideas, not scientific
                    measurement. Concepts like Earth's core, its composition, or
                    precise distances to deep layers like where iron is
                    concentrated were completely beyond the knowledge of people
                    living then.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Prepare to explore a fascinating correlation found when
                  looking at the structure of the Quran and the scientific
                  knowledge we have today about our planet.
                </p>
              </section>

              {/* Scientific Context */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Earth's Iron Core
                </h2>
                <blockquote className="border-l-4 border-stone-500 pl-6 py-4 mb-8 bg-stone-50 dark:bg-stone-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "With a radius of almost 3,500 km (2,200 miles), Earth's
                    core is about the size of the entire planet Mars... A small,
                    central part of the core, however, below a depth of about
                    5,100 km (3,200 miles), is solid iron."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    <a
                      href="https://www.britannica.com/place/Earth/The-interior"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      — Britannica, Earth The Interior, 2019
                    </a>
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern science tells us incredible things about our planet's
                  structure. Beneath the surface, Earth is layered like an
                  onion, and its very center holds a dense core.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin
                        size={20}
                        className="text-stone-500 dark:text-stone-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Core Composition
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      A significant part of Earth's core is made up of iron,
                      alloyed with nickel and other elements. Seismic studies
                      show this core has a liquid outer layer and a solid inner
                      core.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Quote
                        size={20}
                        className="text-stone-500 dark:text-stone-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Precise Depth
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Based on scientific data, the solid inner core, where iron
                      is heavily concentrated, is found at depths starting
                      around 5100 km below the Earth's surface.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Verse Count
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now, let's look at the Quran. There's a chapter specifically
                  named "Al-Hadid," which means "The Iron." This chapter
                  discusses iron and its significance.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Locating the "Iron" Verse
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Interestingly, if you count the verses from the very
                    beginning of the Quran (starting from Surah Al-Fatihah) up
                    to the verse that explicitly mentions "Iron" within Surah
                    Al-Hadid (Chapter 57), you arrive at a specific number.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-green-700 dark:text-green-300 mb-2">
                      5100
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      The verse mentioning "Iron" is the <strong>5100th</strong>{" "}
                      verse from the beginning of the Quran
                    </p>
                  </div>
                  <div className="mt-4 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Based on{" "}
                      <a
                        href="http://www.kaheel7.com/ar/index.php/1/2087--2019"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran Characters Counter
                      </a>{" "}
                      and similar analyses.
                    </span>
                  </div>
                </div>
              </section>

              {/* Reflection */}
              <section id="miracle" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  An Astonishing Correlation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Here's where it gets truly remarkable. We've seen that modern
                  science estimates the solid iron core of the Earth is located
                  approximately 5100 kilometers below the surface. And, as we
                  just noted, the verse mentioning "Iron" is the 5100th verse in
                  the Quran.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    The Number of Verses to Iron = The Distance to Iron's
                    Concentration in Earth (in km)!
                  </h3>
                  <div className="text-center text-3xl font-bold text-yellow-700 dark:text-yellow-300 mb-4">
                    5100 verses ≈ 5100 km
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Remembering our earlier point: in the 7th century, the
                    concept of a kilometer didn't exist, nor did anyone possess
                    the scientific knowledge or tools to measure the depth of
                    Earth's layers or determine the concentration of elements
                    like iron so precisely.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a text revealed 1400 years ago contain a number
                    (the verse count) that correlates so closely with a
                    specific, scientifically determined physical distance within
                    the Earth?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    This astonishing correlation is seen by many as a sign,
                    inviting us to reflect on the potential divine origin of the
                    Quran and the depth of its wisdom, which seems to resonate
                    with truths discovered centuries later.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of Earth's
                      internal structure and the concept of kilometers as a unit
                      of measurement were unknown.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's scientific research confirms the precise depth
                      where iron concentration is highest in Earth's core,
                      matching this remarkable numerical correlation.
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
              <Ruler
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Connections: Quran and Science
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Reflecting on remarkable correlations that span centuries and
              fields of knowledge.
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

export default KilometerDay;
