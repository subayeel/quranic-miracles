/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Plane,
  ChevronRight,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Layers,
} from "lucide-react";

const Flight = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Ancient Prophecy",
        icon: Plane,
      },
      {
        id: "quran",
        title: "The Quranic References",
        icon: BookOpen,
      },
      {
        id: "layers",
        title: "Riding Through Layers",
        icon: Layers,
      },
      {
        id: "reflection",
        title: "Historical Inquiry",
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
              <Plane className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Human Flight Foretold
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  History • Medium
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
                  A Prophecy of Flight
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Imagine a world where the highest point a human could reach
                  was the peak of a mountain or perhaps how high they could
                  jump. For most of history, this was reality. 1400 years ago,
                  the concept of human flight, soaring through the skies, was
                  purely the stuff of myth and imagination.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Beyond Human Imagination
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    At a time when human mobility was limited to land and sea,
                    the idea of reaching the sky by means other than falling or
                    jumping seemed impossible. Yet, the Quran contained verses
                    that spoke of humanity's ability to traverse the sky and
                    operate within its layers.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Plane
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        7th Century Reality
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Human flight was inconceivable—the sky remained forever
                      out of reach for humanity.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Layers
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Modern Achievement
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Today we routinely travel through atmospheric layers and
                      explore space itself.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quranic References */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic References
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/29/22"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 29:22
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "You cannot escape (Allah's might), on earth or in the
                        sky; and you have no protector and no savior besides
                        Allah."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٢٢ وَمَا أَنْتُمْ بِمُعْجِزِينَ فِي الْأَرْضِ وَلَا فِي
                        السَّمَاءِ ۖ وَمَا لَكُمْ مِنْ دُونِ اللَّهِ مِنْ
                        وَلِيٍّ وَلَا نَصِيرٍ
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    This verse implies realms "on earth" and "in the sky" where
                    one might attempt to operate. At a time when the sky was
                    inaccessible to humans, mentioning it as a place where one
                    might try to escape suggests future human capability to
                    operate within it.
                  </p>
                </div>
              </section>

              {/* Riding Through Layers */}
              <section id="layers" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Riding Through Layers
                </h2>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 mb-8 bg-purple-50 dark:bg-purple-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "You will ride layer upon layer." (Latarkabunna tabaqan an
                    tabaq)
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Quran 84:19
                  </cite>
                </blockquote>

                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/84/19"
                      className="text-purple-700 dark:text-purple-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 84:19
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "You will ride layer upon layer."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٩ لَتَرْكَبُنَّ طَبَقًا عَنْ طَبَقٍ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase Analysis
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    The Arabic word "Tabak طبق" means "layer," "stratum," or
                    "level." The phrase "tabaqan an tabaq" implies ascending or
                    moving through successive layers or stages.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Aviation Layers</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Aircraft ascend through different atmospheric layers
                      during flight.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Space Travel</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Spacecraft travel through layers of atmosphere into space
                      strata.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Impossible Concept</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This layered ascent was entirely outside human experience
                      1400 years ago.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">Modern Aviation Reality</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This description remarkably aligns with modern flight, where
                    aircraft ascend through different atmospheric layers, or
                    spacecraft travel through layers of the atmosphere and into
                    different strata of space.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Inquiry
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the historical context of the 7th century, where
                  the idea of human flight was non-existent, the presence of
                  these verses in the Quran presents a profound point for
                  contemplation:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century have known that humans
                    would one day "ride through layers" of the sky?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    These descriptions do not align with myths of flying
                    creatures or magic carpets, but rather with the methodical
                    ascent through atmospheric layers characteristic of modern
                    aviation and space travel. The precision of the phrase "ride
                    layer upon layer" is particularly striking when considered
                    from someone living in a time with no concept of flight
                    dynamics or atmospheric science.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">7th Century Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      No concept of atmospheric layers, flight dynamics, or the
                      possibility of human-powered flight existed.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Precise Description</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The Quranic description accurately depicts modern
                      aviation's layer-by-layer ascent through the atmosphere.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  The Quranic verses, revealed centuries before the invention of
                  aircraft, accurately point towards a future reality of human
                  capability in the sky. This remarkable alignment invites
                  reflection on the nature and source of the knowledge contained
                  within these ancient texts.
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
              <Plane className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Sky & Scripture
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Witnessing how ancient text seems to resonate with modern
              achievements in flight technology.
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
          className="bg-blue-600 dark:bg-blue-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Flight;
