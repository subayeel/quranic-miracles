/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet,
  MapPin,
  BookOpen,
  Lightbulb,
  ChevronRight,
  Compass,
  ArrowUp,
} from "lucide-react";

const DriedRiver = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Desert Pyramids",
        icon: Droplet,
      },
      {
        id: "science",
        title: "Modern Discovery",
        icon: Compass,
      },
      {
        id: "quran",
        title: "The Quranic Verse",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Ancient Knowledge",
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
              <Droplet className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  The Ancient River
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Geography • Medium
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
                  Pyramids in the Desert
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When we think of the pyramids of Giza, we picture them
                  surrounded by vast stretches of desert. This is their current
                  reality, leading some to question any ancient text that might
                  suggest otherwise. But what if this desert landscape wasn't
                  always the case?
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Common Perception
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    For centuries, it's been widely assumed that the pyramids
                    stood in a desert environment, far from any significant
                    waterways, especially during their construction. This makes
                    references to rivers near them seem out of place to modern
                    observers.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Current Landscape
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Today's pyramids stand in arid desert, creating the
                      impression they were always in this environment.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Droplet
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Ancient Reality
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Modern science reveals a dramatically different ancient
                      landscape with major waterways.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Discovery */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Modern Discovery
                </h2>
                <blockquote className="border-l-4 border-emerald-500 pl-6 py-4 mb-8 bg-emerald-50 dark:bg-emerald-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Recent research, published in 2024, used satellite data and
                    geophysical surveys to find evidence of a major, ancient
                    branch of the Nile River that flowed right next to where the
                    pyramids were built."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — National Geographic, 2024
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">The Ahramat Branch</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A major river branch over a quarter mile wide, similar in
                      size to today's main Nile.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Proximity to Pyramids</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In some places, this river ran only a few hundred feet
                      from the pyramids themselves.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Construction Highway</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Scientists believe this river was crucial for transporting
                      massive stones to build the pyramids.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This discovery revolutionized our understanding of ancient
                  Egypt's geography. The pyramids weren't built in a desert—they
                  were constructed alongside a mighty river that served as
                  ancient Egypt's construction highway.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Verse
                </h2>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/43/51"
                      className="text-amber-700 dark:text-amber-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 43:51
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And Pharaoh proclaimed among his people, saying, 'O my
                        people, do I not own the Kingdom of Egypt, and these
                        rivers flow beneath me? Do you not see?'"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٥١ وَنَادَىٰ فِرْعَوْنُ فِي قَوْمِهِ قَالَ يَا قَوْمِ
                        أَلَيْسَ لِي مُلْكُ مِصْرَ وَهَٰذِهِ الْأَنْهَارُ
                        تَجْرِي مِنْ تَحْتِي ۖ أَفَلَا تُبْصِرُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Pharaoh, boasting of his dominion, mentions "these rivers
                    flow beneath me." Given that the pyramids were the seat of
                    Pharaonic power and were located near this newly discovered
                    dried river branch, the phrase aligns with the ancient
                    reality, not the desert landscape known for centuries since.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">Geographic Precision</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description matches the geographical reality of
                    ancient Egypt during pyramid construction, not the dry
                    landscape of later periods.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Ancient Knowledge
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Here's where it gets truly remarkable. Consider the knowledge
                  available in the 7th century AD, when the Quran was revealed:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century have known about a
                    major river that dried up thousands of years ago?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The vast desert landscape surrounding the pyramids was the
                    known reality for centuries. The existence of this
                    significant waterway, crucial during the time of the
                    pyramids' construction but long gone by the 7th century, was
                    lost to history. Its discovery required sophisticated modern
                    technology and satellite imaging.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, the pyramids had been surrounded by
                      desert for over a millennium. No visible trace of ancient
                      rivers remained.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Technology</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The ancient river's discovery in 2024 required satellite
                      data and advanced geophysical surveys—technology
                      unavailable for centuries.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  The Quran's description aligns with the geographical reality
                  of Egypt thousands of years ago, not the Egypt of the 7th
                  century. This remarkable alignment between an ancient text and
                  very recent scientific discovery invites us to ponder the
                  source of this knowledge and its timeless accuracy.
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
              <Droplet className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Rivers of the Past
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring how ancient texts echo modern discoveries about our
              planet's history.
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

export default DriedRiver;
