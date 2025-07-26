/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Mountain,
  Globe,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Home,
} from "lucide-react";

const SinkholeMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Ground Collapses",
        icon: Mountain,
      },
      {
        id: "science",
        title: "Modern Confirmation",
        icon: Globe,
      },
      {
        id: "quran",
        title: "The Quranic Account",
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
              <Mountain
                className="text-stone-600 dark:text-stone-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Sinkholes
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
                  Sudden Ground Collapses
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Have you ever heard of a hole in the ground suddenly appearing
                  and swallowing things? These are called sinkholes, and they
                  are natural depressions or holes in the ground that can form
                  dramatically and without warning.
                </p>
                <div className="bg-stone-50 dark:bg-stone-900/30 border-l-4 border-stone-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Earth's Mysterious Collapses
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the Quran, there's a description of the earth suddenly
                    collapsing beneath a person and their house. Based on what
                    was known in the 7th century, someone might have simply
                    thought this was an exaggeration or perhaps just holes dug
                    by animals. Skeptics could claim it was a mistake to
                    describe such a dramatic event.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Home
                        size={20}
                        className="text-stone-500 dark:text-stone-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        What are Sinkholes?
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Sinkholes are cavities in the ground, especially in
                      limestone landscapes, caused by water erosion and
                      drainage.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Mountain
                        size={20}
                        className="text-stone-500 dark:text-stone-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Sudden Formation
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      They can vary greatly in size and shape, forming gradually
                      or suddenly without warning.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Modern Confirmation
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Sinkholes vary in size from 1 to 600 m (3.3 to 2,000 ft)
                    both in diameter and depth, and vary in form from soil-lined
                    bowls to bedrock-edged chasms. Sinkholes may form gradually
                    or suddenly, and are found worldwide."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Sinkhole, 2018
                  </cite>
                </blockquote>
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Real-World Event
                  </h3>
                  <blockquote className="border-l-4 border-blue-400 pl-4 py-2 mb-4">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                      "Giant sinkhole swallows three-story building in tropical
                      storm. In the northern part of Guatemala City, the
                      downpour created a sinkhole the size of a street
                      intersection. Residents told CNN that a three-story
                      building and a house fell into the hole."
                    </p>
                    <cite className="text-sm text-gray-600 dark:text-gray-400">
                      — SMH, Giant sinkhole swallows three-story building in
                      tropical storm, 2010
                    </cite>
                  </blockquote>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Formation Process</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Created by water erosion of soluble bedrock like
                      limestone, creating underground cavities that eventually
                      collapse.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Size Range</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Can range from small depressions to massive chasms capable
                      of swallowing entire buildings and city blocks.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Global Phenomenon</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Found worldwide, this geological process was completely
                      unknown as a scientific concept in the 7th century.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, geologists confirm that sinkholes are indeed real, and
                  they can form suddenly and be large enough to swallow entire
                  buildings! These accounts from modern science and news confirm
                  that sudden, large-scale ground collapses are a documented
                  geological phenomenon.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/28/81"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 28:81
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "So We collapsed the earth beneath him and his house. He
                        had no company to save him from Allah, and he could not
                        defend himself."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٨١ فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ فَمَا كَانَ
                        لَهُ مِنْ فِئَةٍ يَنْصُرُونَهُ مِنْ دُونِ اللَّهِ وَمَا
                        كَانَ مِنَ الْمُنْتَصِرِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic phrase فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ (fa
                    khasafnā bihi wa bidārihi al-arḍ) directly translates to "So
                    We collapsed the earth beneath him and his house." This
                    precisely describes the kind of sudden, localized ground
                    failure that swallows a structure, which we now understand
                    as a sinkhole event.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The detailed description in the Quran, mentioning both the
                    person and their house being swallowed by the collapsing
                    earth, goes far beyond simple animal burrows and accurately
                    reflects a dramatic geological event that science has only
                    recently understood and documented.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point to Ponder
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the time the Quran was revealed (7th century),
                  knowledge about dramatic geological events like sudden ground
                  collapses swallowing buildings was non-existent:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone living 1400 years ago describe a
                    phenomenon that perfectly aligns with what modern geology
                    confirms about sinkholes?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The common understanding of holes in the ground in the 7th
                    century might extend only to those dug by animals or simple
                    pits. The detailed description in the Quran, mentioning both
                    the person and their house being swallowed by the collapsing
                    earth, accurately reflects a dramatic geological event that
                    science has only recently understood and documented.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, understanding of geological processes
                      was limited. The concept of sudden ground collapse was
                      beyond contemporary knowledge.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's documented cases confirm exactly what the Quran
                      described: sudden earth collapse capable of swallowing
                      structures.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This connection between an ancient text and a modern
                  scientific and documented geological event offers a
                  fascinating point for reflection on the source of such precise
                  information at that time.
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
                className="text-stone-600 dark:text-stone-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Earth's Wonders
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Connecting geological realities with ancient accounts invites us
              to reflect on knowledge across time.
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
          className="bg-stone-600 dark:bg-stone-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SinkholeMiracle;
