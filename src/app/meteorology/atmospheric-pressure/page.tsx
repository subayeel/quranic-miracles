/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Cloud,
  Gauge,
  BookOpen,
  Lightbulb,
  ArrowUp,
} from "lucide-react";

const AtmosphericPressureComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Breathing at Altitude",
        icon: Cloud,
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: Gauge,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: Lightbulb,
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
              <Cloud className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Atmospheric Pressure
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Meteorology • Medium
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
                  Breathing at Altitude
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Have you ever wondered why breathing feels different high up
                  in the mountains compared to sea level? There's a physical
                  reason for this, related to something called atmospheric
                  pressure.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Air Around Us Has Weight
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Atmospheric pressure is simply the weight of the column of
                    air above us pressing down. The higher you go, the less air
                    is above you, and therefore, the pressure decreases. This
                    lower pressure also means the air is less dense, and there's
                    less oxygen available to breathe with each breath.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Gauge
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Pressure Decreases
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The total weight of the air above you is less at higher
                      altitudes, resulting in lower atmospheric pressure.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Cloud
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Oxygen Availability
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      While the percentage of oxygen remains about 21%, the
                      total amount of oxygen molecules in a given volume is
                      lower.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Interestingly, 1400 years ago, the concept of how altitude
                  affects breathing wasn't understood. Most people lived near
                  sea level or in low-lying areas, and there were no means to
                  travel high into the atmosphere to observe its effects
                  directly.
                </p>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Scientific Model
                </h2>
                <blockquote className="border-l-4 border-gray-500 pl-6 py-4 mb-8 bg-gray-50 dark:bg-gray-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The death zone, in mountaineering, refers to altitudes
                    above a certain point where the amount of oxygen is
                    insufficient to sustain human life for an extended time
                    span. This point is generally tagged as 8,000 m (26,000 ft,
                    less than 356 millibars of atmospheric pressure)."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Effects of high altitude on humans, 2019
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Lower Pressure</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      As altitude increases, atmospheric pressure decreases
                      because there's less air pressing down from above.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Thinner Air</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Lower pressure means air is less dense, containing fewer
                      oxygen molecules per breath.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Death Zone</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Above 8,000m, oxygen levels are insufficient to sustain
                      human life without supplemental oxygen.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Above the "Death Zone," human life cannot be sustained without
                  supplemental oxygen. The feeling is one of suffocation and
                  extreme tightness in the chest, as your body struggles to get
                  enough oxygen from the thin air. This is well-documented by
                  modern science and high-altitude exploration.
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
                      href="https://quran.com/en/6/125"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 6:125
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Those whom Allah wants to guide, He opens their chests
                        to Islam; And those whom He wants to leave astray, He
                        makes their chests tight and constricted, as if they are
                        ascending to the sky: Such is the penalty of Allah on
                        those who refuse to believe."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        فَمَنْ يُرِدِ اللَّهُ أَنْ يَهْدِيَهُ يَشْرَحْ صَدْرَهُ
                        لِلْإِسْلَامِ ۖ وَمَنْ يُرِدْ أَنْ يُضِلَّهُ يَجْعَلْ
                        صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي
                        السَّمَاءِ ۚ كَذَٰلِكَ يَجْعَلُ اللَّهُ الرِّجْسَ عَلَى
                        الَّذِينَ لَا يُؤْمِنُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The phrase "كأنما يصّعّد في السماء" (ka'annama yaṣṣaʿʿadu fī
                    l-samāʾ) translates to "as if he were ascending into the
                    sky." It's used here as a powerful metaphor for a feeling of
                    extreme constriction and difficulty, likening it to the
                    physical sensation one would experience when going upwards
                    into the sky.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description precisely matches the feeling of
                    chest tightness and constriction experienced when ascending
                    to high altitudes—a scientific reality that was entirely
                    beyond observation in the 7th century.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point to Ponder
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Consider the context of the 7th century CE. There was no
                  scientific understanding of atmospheric pressure, air density,
                  or the physiological effects of high altitude.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could this specific physical sensation, caused by
                    decreasing atmospheric pressure at high altitude, be
                    described so accurately as a metaphor in a text from 1400
                    years ago?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Travel to significant altitudes was limited, primarily on
                    foot up mountains, but the systematic observation and
                    scientific explanation of breathing difficulties were
                    non-existent. People might have noticed some difficulty high
                    up, but wouldn't have understood why it happened in terms of
                    physics or physiology.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, there was no concept of a "death zone"
                      or systematic understanding of altitude effects on human
                      physiology.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The precise physical sensation described in the Quran
                      matches exactly what modern science has documented about
                      high-altitude physiology.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This unexpected alignment between the ancient text and modern
                  scientific understanding is a significant point for
                  reflection, demonstrating how traditional wisdom can sometimes
                  anticipate scientific discoveries.
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
              <Cloud className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Air and Elevation
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Discoveries about our atmosphere reveal intriguing connections
              with ancient descriptions.
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

export default AtmosphericPressureComponent;
