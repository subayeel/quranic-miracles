/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  Globe,
  BookOpen,
  Sparkles,
  HelpCircle,
  ArrowUp,
  Sigma,
  Scaling,
} from "lucide-react";

const LightYears = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Journey to the Stars",
        icon: Star,
      },
      {
        id: "science",
        title: "Cosmic Distances: Light-Years",
        icon: Scaling,
      },
      {
        id: "quran",
        title: "The Star & The Earth in Quran",
        icon: BookOpen,
      },
      {
        id: "correlation",
        title: "A Curious Correspondence",
        icon: Sigma,
      },
      {
        id: "reflection",
        title: "Contemplating The Connection",
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
              <Star
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Light-Years
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
                  Journey to the Stars
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The universe is vast, with stars scattered across immense
                  distances. To measure these incredible cosmic stretches,
                  astronomers use special units. One such unit is the
                  light-year.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    What is a Light-Year?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    A light-year is the distance light travels in one Earth
                    year. Since light travels at an astonishing speed (about
                    186,282 miles per second), a light-year represents a truly
                    enormous distance – about 5.88 trillion miles (9.46 trillion
                    kilometers)!
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Among the myriad of stars, one shines brightest in our night
                  sky: Sirius. Known as "the Dog Star," it has fascinated
                  civilizations for millennia and holds a special mention in the
                  Quran.
                </p>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Cosmic Distances: Light-Years
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern astronomy allows us to measure the distances to stars
                  with remarkable accuracy using methods like stellar parallax.
                  When we turn our instruments towards Sirius, we find its
                  distance:
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <div className="text-center">
                    <Globe
                      className="text-blue-600 dark:text-blue-400 mx-auto mb-3"
                      size={36}
                    />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Distance to Sirius
                    </h3>
                    <p className="text-2xl font-semibold text-blue-700 dark:text-blue-300">
                      8.61 light-years
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      (Approximately 81.5 trillion kilometers!)
                    </p>
                  </div>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sigma
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Unit Conversion
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      8.61 light-years = 861 centi light-years (since 1
                      light-year = 100 centi light-years)
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Scaling
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Measurement Precision
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      So, the distance to Sirius is approximately 861 centi
                      light-years. This unit, while not commonly used for
                      stellar distances, is mathematically valid.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Star & The Earth in Quran
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran, revealed in the 7th century, contains verses that
                  mention both the star Sirius and the Earth.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/53/49"
                      className="text-purple-700 dark:text-purple-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 53:49
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And that it is He who is the Lord of Sirius
                        (الشِّعْرَىٰ)."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٩ وَأَنَّهُ هُوَ رَبُّ الشِّعْرَىٰ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/7/54"
                      className="text-purple-700 dark:text-purple-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 7:54
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Indeed, your Lord is Allah, who created the heavens and
                        the earth in six days..."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٥٤ إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ
                        وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ...
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Correlation */}
              <section id="correlation" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Curious Correspondence
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  A fascinating claim is made regarding the number of letters in
                  the Quran between the specific instance of the word
                  "الشِّعْرَىٰ" (Sirius) in Surah 53, verse 49, and the specific
                  instance of the word "الْأَرْضِ" (Earth) in Surah 7, verse 54.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <Sparkles size={20} className="text-teal-600" /> The Claimed
                    Count
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    According to a specific methodology of counting letters
                    within a particular standard text of the Quran, the number
                    of letters between these two specific words is calculated.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-mono text-center text-lg">
                      Letter Index of "الأرض" (7:54) - Letter Index of
                      "الشِّعْرَىٰ" (53:49)
                      <br />
                      286099 - 285238 ={" "}
                      <span className="font-bold text-teal-700 dark:text-teal-300">
                        861
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">The Correspondence</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Number of letters between "الشِّعْرَىٰ" (53:49) and
                    "الْأَرْضِ" (7:54) = 861
                    <br />
                    Distance to Sirius = 861 centi light-years
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Contemplating The Connection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  This alleged correlation between a letter count in a
                  7th-century text and a modern scientific measurement of
                  stellar distance prompts deep reflection.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could anyone 1400 years ago have known about the
                    distance to Sirius, and how could a text revealed then
                    contain a numerical structure that allegedly corresponds to
                    this distance measured in a specific modern unit?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, human knowledge of the cosmos was
                    limited to observations made with the naked eye. The concept
                    of light-years didn't exist. There were no telescopes
                    capable of measuring the tiny angles needed for stellar
                    parallax, let alone the precise distance to a star like
                    Sirius.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of cosmology
                      was limited. The precise description of cosmic origins
                      shows remarkable insight into the universe's fundamental
                      nature.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's cosmological research confirms exactly what the
                      Quran described: a numerical correspondence that seems to
                      transcend time and knowledge limitations.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This specific correspondence, if found to be accurate
                  according to the counting methodology, is presented as a sign
                  pointing towards a source of knowledge beyond 7th-century
                  human capacity, suggesting a divine origin for the Quranic
                  text.
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
                Exploring Cosmic Miracles
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The universe holds wonders, and sometimes, science and scripture
              seem to whisper the same secrets across time.
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

export default LightYears;
