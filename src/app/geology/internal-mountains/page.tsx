/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Mountain,
  Layers,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const InternalMountains = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Earth's Stability",
        icon: Mountain,
      },
      {
        id: "science",
        title: "Modern Discovery",
        icon: Layers,
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Profound Question",
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
              <Mountain
                className="text-green-600 dark:text-green-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Internal Mountains
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
                  Earth's Stability
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  For centuries, mountains were understood as majestic peaks
                  rising from the Earth's surface. It was widely believed that
                  these visible mountains acted like pegs, stabilizing the crust
                  and preventing the Earth from shaking or "swaying."
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Understanding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, knowledge of Earth's deep internal
                    structure was non-existent. Ideas about the planet's
                    interior were based on speculation, not empirical
                    observation. Mountains were purely a surface phenomenon in
                    the human understanding of that time.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Mountain
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Surface View
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Ancient civilizations saw mountains as solid formations
                      rising from the earth, with no understanding of what lay
                      beneath.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Layers
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Hidden Reality
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Modern science reveals that what we see above ground is
                      only a fraction of the mountain's total structure.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Discovery */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Modern Geological Discovery
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Deep inside Earth, scientists find weird blobs and
                    mountains taller than Mount Everest... At the 410-mile
                    level, researchers recently identified a tremendous interior
                    mountain range, with peaks perhaps even taller than Mount
                    Everest."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — NBC News, 2019
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Seismic Discovery</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Using seismic waves, scientists discovered massive
                      mountain ranges buried hundreds of miles below the
                      surface.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Towering Heights</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      These internal mountains have peaks up to 40 miles high,
                      dwarfing surface mountains in relative scale.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Earth's Stability</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      These structures influence mantle dynamics and contribute
                      to Earth's internal stability.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This scientific understanding of subsurface mountain ranges
                  was only established through modern seismology and advanced
                  imaging technology, capabilities that were completely
                  unavailable in ancient times.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Insight
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/21/31"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 21:31
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And We placed in earth mountains, lest it sways with
                        them, and We placed therein signposts and passages, that
                        they may be guided."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٣١ وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ أَنْ تَمِيدَ
                        بِهِمْ وَجَعَلْنَا فِيهَا فِجَاجًا سُبُلًا لَعَلَّهُمْ
                        يَهْتَدُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The verse uses the Arabic phrase "Fee al-ard" (فِي
                    الْأَرْضِ), meaning "in the earth" or "inside the earth,"
                    not "on the earth." This precise language aligns remarkably
                    with the modern discovery of internal mountain ranges
                    located hundreds of miles inside the Earth.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of mountains placed "in the earth"
                    to prevent swaying perfectly matches modern geological
                    understanding of how deep internal structures contribute to
                    Earth's stability.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Profound Question
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific evidence for deep internal mountain
                  ranges and their role in Earth's stability, the description in
                  Quran 21:31 presents a remarkable point for reflection:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could anyone in the 7th century have known about
                    mountains deep inside the Earth?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century CE, human understanding of Earth's
                    interior was limited to surface observations. There were no
                    seismic instruments, no deep-drilling capabilities, nothing
                    to suggest the existence of massive mountain ranges hundreds
                    of miles beneath the surface. The idea that these internal
                    structures contribute to planetary stability was beyond the
                    scientific knowledge of the time.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed knowledge of Earth's internal
                      structure was impossible to obtain. The precise
                      description shows remarkable insight into geological
                      reality.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's geological research confirms exactly what the
                      Quran described: mountains placed inside the Earth that
                      contribute to its stability.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This example demonstrates how ancient texts and modern geology
                  can illuminate each other, encouraging us to approach both
                  traditional scriptures and scientific discoveries with
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
              <Mountain
                className="text-green-600 dark:text-green-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Earth's Hidden Architecture
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring the profound connections between ancient wisdom and
              modern geological discoveries.
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

export default InternalMountains;
