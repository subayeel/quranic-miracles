/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  Expand,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Telescope,
} from "lucide-react";

const RedShiftingPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Redshifting Universe",
        icon: Expand,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Telescope,
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
              <Expand className="text-red-600 dark:text-red-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Redshifting
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Astronomy • Medium
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
                  Redshifting Universe
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In the Quran, the color of the sky shifts towards the red.
                  Skeptics claim that whoever wrote the Quran made a mistake;
                  the expansion of the universe doesn't affect the color of
                  light. Today scientists confirm that the expansion of the
                  universe causes redshifting.
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Universe Expansion Causes Light to Stretch
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The expansion of the universe stretches light waves from
                    distant galaxies, shifting their color toward the red end of
                    the spectrum. The farther away a galaxy is, the faster it
                    moves away from us, and the more its light is redshifted.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Expand
                        size={20}
                        className="text-red-500 dark:text-red-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Proportional to Distance
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The redshift effect is proportional to distance - the
                      farther away galaxies are, the faster they are receding
                      from us, and the more their light shifts toward the red
                      end of the spectrum.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles
                        size={20}
                        className="text-red-500 dark:text-red-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Color Gradient
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The redshifting creates a color gradient across the
                      observable universe - much like the varied intensity of
                      paint - with more distant objects appearing more red than
                      closer ones.
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
                    "Redshift happens when light seen coming from an object that
                    is moving away is proportionally increased in wavelength, or
                    shifted to the red end of the visible spectrum. In general,
                    the faster the object is moving away, the more extreme the
                    redshift. The light from distant galaxies is shifted towards
                    the red end of the spectrum because the Universe is
                    expanding. This is known as cosmological redshift."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Redshift, 2023
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Hubble's Discovery</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Edwin Hubble discovered this phenomenon in 1929 when he
                      observed that distant galaxies have their light shifted
                      toward the red end of the spectrum.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Expansion Evidence</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The degree of redshift is proportional to distance from
                      Earth, providing key evidence for the expanding universe
                      theory.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Rose-like Pattern</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The universe expands like a rose opening, with outer parts
                      moving faster than inner parts, creating the observed
                      redshift pattern.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This observation became one of the key pieces of evidence for
                  the expanding universe theory, fundamentally changing our
                  understanding of cosmology.
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
                      href="https://quran.com/en/55/37"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 55:37
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "If the heaven ripped and it were a rose like paint."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٣٧ فَإِذَا انْشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَةً
                        كَالدِّهَانِ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    "Wardatan kaddihan وَرْدَةً كَالدِّهَانِ" translates to "a
                    rose like paint". This refers to both the expanding pattern
                    (like a rose opening) and the varying intensity of the red
                    color (like paint), perfectly describing how the universe
                    appears redder at greater distances.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Rose-like Expansion
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quran uses the analogy of a rose opening to describe how
                    the universe expands, with outer parts moving faster than
                    inner parts. Just as the outer petals of a rose move outward
                    more than the inner petals, galaxies farther from us move
                    away faster, creating the rose-like expansion pattern we
                    observe today.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The description combines two remarkable insights: the
                    expansion pattern of the universe (like a rose opening) and
                    the redshifting of light from distant galaxies (varying
                    paint colors), both concepts unknown in the 7th century.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The correlation between modern scientific understanding of
                  redshift and the Quranic verse raises a profound question:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a man who lived 1400 years ago have known about
                    redshifting?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The redshift phenomenon—which requires advanced telescopes
                    and spectroscopic analysis to detect—appears to be
                    referenced in a text from the 7th century. This connection
                    between the Quranic description of the heavens as a "rose
                    like paint" and our modern understanding of the redshifted,
                    expanding universe invites deep contemplation about the
                    origins of this knowledge.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In 7th century Arabia, there was no scientific
                      understanding of light spectra, the Doppler effect, or
                      cosmic expansion. The prevailing cosmological models
                      viewed the heavens as fixed celestial spheres.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Discovery</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The concept that the universe is expanding with a color
                      shift proportional to distance was completely unknown
                      until Edwin Hubble's discovery in 1929, almost 1300 years
                      after the Quran was revealed.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  The description in the Quran of the heavens as "a rose like
                  paint" remarkably aligns with two key aspects of modern
                  cosmology: the expansion pattern of the universe and the
                  redshifting of light from distant galaxies. This alignment
                  between ancient wisdom and contemporary science continues to
                  inspire reflection and wonder.
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
              <Expand className="text-red-600 dark:text-red-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring the Expanding Cosmos
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Ancient texts and modern science converge in our understanding of
              the universe's expansion and the redshifting of light across
              cosmic distances.
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
          className="bg-red-600 dark:bg-red-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default RedShiftingPage;
