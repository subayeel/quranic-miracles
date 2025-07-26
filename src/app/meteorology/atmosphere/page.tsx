/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Cloud,
  Shield,
  Zap,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const AtmosphereComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Protective Shield",
        icon: Cloud,
      },
      {
        id: "science-meteorites",
        title: "Meteorite Protection",
        icon: Shield,
      },
      {
        id: "science-radiation",
        title: "Radiation Shield",
        icon: Zap,
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
              <Cloud className="text-teal-600 dark:text-teal-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Atmosphere
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
                  The Protective Shield
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Have you ever thought about what protects us from all the
                  dangers lurking in space? Besides its role in giving us air to
                  breathe, the Earth's atmosphere acts like an incredible
                  shield!
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    More Than Just Air
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the past, some might have thought of air as just... air.
                    But modern science reveals its vital protective functions.
                    It turns out the atmosphere constantly defends our planet
                    from harmful radiation and debris from space.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Shield
                        size={20}
                        className="text-teal-500 dark:text-teal-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Meteorite Defense
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The atmosphere burns up countless meteoroids before they
                      can reach Earth's surface, protecting us from constant
                      bombardment.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Zap
                        size={20}
                        className="text-teal-500 dark:text-teal-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Radiation Shield
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Multiple atmospheric layers absorb harmful cosmic
                      radiation and solar energy that would otherwise be deadly
                      to life.
                    </p>
                  </div>
                </div>
              </section>

              {/* Meteorite Protection */}
              <section id="science-meteorites" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Meteorite Protection
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Meteors burn up when they hit the Earth's atmosphere. When
                    the meteor hits the atmosphere, the air in front of it
                    compresses incredibly quickly. When a gas is compressed, its
                    temperature rises. This causes the meteor to heat up so much
                    that it glows. The air burns the meteor until there is
                    nothing left."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — How Stuff Works, 2019
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dust Particles</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Tiny space dust burns up completely, creating the shooting
                      stars we see at night.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Larger Objects</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The atmosphere slows down and erodes larger meteoroids,
                      reducing their impact.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Constant Protection</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This shield operates 24/7, preventing countless objects
                      from bombarding Earth's surface.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  One of the most dramatic ways the atmosphere protects us is by
                  dealing with incoming space rocks! Most meteoroids heading for
                  Earth never reach the ground, instead burning up in our
                  protective atmospheric shield.
                </p>
              </section>

              {/* Radiation Shield */}
              <section id="science-radiation" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Radiation Shield
                </h2>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 mb-8 bg-purple-50 dark:bg-purple-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The atmosphere helps to protect living organisms from
                    genetic damage by solar ultraviolet radiation, solar wind
                    and cosmic rays."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Atmosphere, 2019
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Ozone Layer</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Particularly effective at absorbing most harmful UV
                      radiation from the sun.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Multiple Layers</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Different atmospheric layers help scatter or absorb
                      various types of dangerous cosmic energy.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Life Protection</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Without this shield, life as we know it would not be
                      possible on Earth.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Space isn't just full of rocks; it's also bombarded by
                  dangerous energy waves and particles, like intense ultraviolet
                  radiation from the sun, solar wind, and cosmic rays. Our
                  atmosphere provides crucial protection from these invisible
                  threats.
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
                      href="https://quran.com/en/21/32"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 21:32
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And We made the sky a protective shield and they turn
                        away from its sign."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٣٢ وَجَعَلْنَا السَّمَاءَ سَقْفًا مَحْفُوظًا ۖ وَهُمْ
                        عَنْ آيَاتِهَا مُعْرِضُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic phrase "سَقْفًا مَحْفُوظًا" (saqfan mahfuzan)
                    translates to "a protective roof" or "a preserved shield."
                    This verse describes the sky – which includes the atmosphere
                    – having a protective quality, precisely matching the modern
                    scientific understanding of atmospheric protection.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of the sky as a "protective shield"
                    aligns remarkably with the protective functions that science
                    has discovered. This alignment between ancient wisdom and
                    contemporary atmospheric science is remarkable.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point to Ponder
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the modern scientific understanding of the
                  atmosphere's role in shielding the Earth from cosmic threats,
                  the verse from the Quran presents a fascinating point for
                  reflection:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century know the atmosphere
                    acts as a protective shield?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, scientific understanding of the Earth's
                    atmosphere was rudimentary. There were no instruments to
                    detect or measure radiation, and while people saw meteors,
                    the knowledge that these objects were primarily burned up by
                    friction with the air was not understood. The idea that the
                    vast, invisible layer above Earth was a deliberate
                    "protective shield" against unseen dangers from space was
                    beyond the scope of their empirical observation.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of atmospheric
                      protection was limited. The precise description shows
                      remarkable insight into the atmosphere's fundamental
                      protective nature.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's atmospheric research confirms exactly what the
                      Quran described: the sky functions as a protective shield
                      against multiple cosmic threats.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This example demonstrates how ancient wisdom and modern
                  atmospheric science can illuminate each other, encouraging us
                  to approach both traditional texts and scientific discoveries
                  with curiosity and respect.
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
              <Cloud className="text-teal-600 dark:text-teal-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Earth's Protective Shield
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring the atmosphere's vital role in protecting life on Earth.
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
          className="bg-teal-600 dark:bg-teal-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AtmosphereComponent;
