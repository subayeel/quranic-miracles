/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Globe,
  ChevronRight,
  Clock,
  BookOpen,
  HelpCircle,
  Scale,
  ArrowUp,
  Sparkles,
  Compass,
  Maximize,
} from "lucide-react";

const UniverseAge: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Cosmic Ratio",
        icon: Globe,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Clock,
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
      },
      {
        id: "relativity",
        title: "Time Relativity",
        icon: Scale,
      },
      {
        id: "reflection",
        title: "A Cosmic Reflection",
        icon: HelpCircle,
      },
    ],
    []
  );

  // Set up Intersection Observer to track which section is in view
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

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
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
              <Globe
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Age of the Universe
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cosmology • Medium
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
                  Cosmic Ratio
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran states that the universe is three times the age of
                  Earth. Skeptics have claimed this was a copying mistake, but
                  modern cosmology confirms this ratio is accurate.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The 1:3 Ratio in Modern Science
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    According to modern cosmology, the universe is approximately
                    13.8 billion years old, while Earth formed about 4.6 billion
                    years ago. This places the age of Earth at roughly one-third
                    the age of the universe (4.6/13.8 ≈ 1/3).
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Globe
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Universe Age
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The universe began with the Big Bang approximately 13.8
                      billion years ago, determined through measurements of
                      cosmic microwave background radiation.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Compass
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Earth Formation
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Earth began forming around 4.6 billion years ago, along
                      with our solar system, determined through radiometric
                      dating of the oldest rocks and meteorites.
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
                    "The age of the universe is approximately 13.77 billion
                    years, based on measurements of cosmic microwave background
                    radiation and other cosmological parameters. The Earth is
                    estimated to be about 4.54 billion years old, based on
                    radiometric dating of meteorite material."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Modern Cosmology & Astrophysics
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Universe Age</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The universe began with the Big Bang approximately 13.8
                      billion years ago. This age is determined through
                      measurements of cosmic microwave background radiation and
                      the expansion rate of the universe.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Earth Formation</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Earth began forming around 4.6 billion years ago, along
                      with our solar system. This age is determined through
                      radiometric dating of the oldest rocks and meteorites
                      found on Earth.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">The Ratio</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      These scientific discoveries about the age of the universe
                      relative to Earth were made only in the 20th century with
                      advanced technology and mathematical models.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Yet remarkably, the Quran mentioned this 1:3 ratio over 1400
                  years ago, long before modern scientific instruments could
                  measure cosmic timescales.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Reference
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Key Verses
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Say: 'Is it that you deny Him [Allah] who created the
                        Earth in two days? And you claim others to be equal to
                        Him? He is the Lord of (all) the Worlds.'"
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        — Quran 41:9
                      </p>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And we have created the Heavens and Earth and
                        EVERYTHING IN BETWEEN in six days and We were not
                        touched by fatigue."
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        — Quran 50:38
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p
                        dir="rtl"
                        className="text-gray-800 dark:text-gray-100 mb-4"
                      >
                        ٩ قُلْ أَئِنَّكُمْ لَتَكْفُرُونَ بِالَّذِي خَلَقَ
                        الْأَرْضَ فِي يَوْمَيْنِ وَتَجْعَلُونَ لَهُ أَنْدَادًا ۚ
                        ذَٰلِكَ رَبُّ الْعَالَمِينَ
                      </p>
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٣٨ وَلَقَدْ خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا
                        بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ وَمَا مَسَّنَا مِنْ
                        لُغُوبٍ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    According to these verses, Earth was created in two days,
                    while the entire universe (the Heavens, Earth, and
                    everything in between) was created in six days. This places
                    Earth's creation at one-third of the total creation period
                    (2/6 = 1/3).
                  </p>
                </div>
              </section>

              {/* Time Relativity */}
              <section id="relativity" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Time Relativity
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran also acknowledges the concept of time relativity,
                  which wasn't scientifically understood until Einstein's
                  theories in the early 20th century:
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Quran 22:47
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "They challenge you to bring forth that torture [in
                        Hell] and Allah will not break His promise; a day of
                        your Lord [Paradise/Hell] is like a thousand years of
                        what you count."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٧ وَيَسْتَعْجِلُونَكَ بِالْعَذَابِ وَلَنْ يُخْلِفَ
                        اللَّهُ وَعْدَهُ ۚ وَإِنَّ يَوْمًا عِنْدَ رَبِّكَ
                        كَأَلْفِ سَنَةٍ مِمَّا تَعُدُّونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Scale
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Time Dilation
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      This verse suggests that time passes differently in
                      different reference frames, similar to what Einstein's
                      theory of general relativity would later demonstrate.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Maximize
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Cosmic Reference Frame
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The Quran's reference frame for creation is God's Throne,
                      not Earth. This explains how 6 divine "days" could
                      correspond to 13.8 billion Earth years.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  By expressing the relationship as a ratio (1/3), it remains
                  correct regardless of the reference frame used to measure
                  cosmic time.
                </p>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Cosmic Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The correlation between modern scientific findings and the
                  Quranic verses raises an intriguing question:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man in the 7th century have known the universe is
                    three times older than Earth?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The precise 1:3 ratio between Earth's age and the universe's
                    age—a scientific fact discovered only recently with advanced
                    technology—appears to be referenced in the Quran 1400 years
                    ago. This remarkable connection invites reflection on the
                    source of such knowledge in a pre-scientific era.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This cosmic timescale was completely unknown in the 7th
                      century. Most ancient cosmologies placed Earth's creation
                      at the same time as the heavens.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Unique Perspective</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The Quran's distinction—placing Earth's creation at
                      one-third the age of the universe—stands out as uniquely
                      aligned with modern scientific understanding.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  More remarkable still is the Quran's presentation of this as a
                  ratio rather than absolute timeframes. As we now understand
                  through Einstein's relativity, time is relative to the
                  observer. By expressing the relationship as a ratio (1/3), it
                  remains correct regardless of the reference frame used to
                  measure cosmic time.
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
                Reflecting on Creation
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring the universe's grand narrative through science and
              scripture.
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

export default UniverseAge;
