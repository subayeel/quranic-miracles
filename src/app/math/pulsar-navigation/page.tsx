/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Compass,
  Star,
  Satellite,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const PulsarNavigation = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Guiding By Stars",
        icon: Compass,
      },
      {
        id: "science",
        title: "Pulsar Science",
        icon: Star,
      },
      {
        id: "quran",
        title: "Quranic Guidance",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Historical Context",
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
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Pulsar Navigation
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
                  Guiding By The Stars
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran mentions that humans are guided by stars. Some have
                  questioned how this could be true, as visible stars appear to
                  move in the night sky, seemingly not pointing consistently in
                  a single direction for navigation.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Modern Discovery
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    However, modern science has revealed a fascinating new way
                    stars can indeed serve as reliable navigational beacons:
                    through pulsars. These cosmic lighthouses offer precision
                    that rivals and even exceeds our current GPS technology.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Satellite
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        From GPS to Pulsars
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Today, we heavily rely on GPS, which uses artificial
                      satellites. While effective, these satellites are
                      vulnerable to interference and failure.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Star
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Natural Navigation
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Scientists have discovered that natural, highly
                      predictable signals from pulsars can provide a secure and
                      free method for determining precise location.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Science of Pulsar Navigation
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "X-ray pulsar-based navigation and timing (XNAV) or simply
                    pulsar navigation is a navigation technique whereby the
                    periodic X-ray signals emitted from pulsars are used to
                    determine the location of a vehicle, such as a spacecraft in
                    deep space. A vehicle using XNAV would compare received
                    X-ray signals with a database of known pulsar frequencies
                    and locations. Similar to GPS, this comparison would allow
                    the vehicle to calculate its position accurately (±5 km)."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Pulsar-Based Navigation, 2022
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">What is a Pulsar?</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A highly magnetized, rotating neutron star that emits
                      beams of electromagnetic radiation, appearing as regular
                      pulses like a cosmic lighthouse.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">How XNAV Works</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      By measuring arrival times of X-ray pulses from multiple
                      known pulsars, a craft can triangulate its position
                      without ground stations or satellites.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Precision & Reliability
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Pulsars are among the most precise timekeepers in the
                      universe, more stable than atomic clocks over long
                      periods.
                    </p>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Recent Discovery
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    This sophisticated method of using specific types of stars
                    (pulsars) for navigation is a very recent technological and
                    scientific achievement, confirmed experimentally only in the
                    late 2010s. The advantage of using X-ray signals over radio
                    waves is that X-ray telescopes can be made smaller and
                    lighter.
                  </p>
                </div>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Guidance in The Quran
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/16/16"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 16:16
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And landmarks. And by the stars they guide themselves."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٦ وَعَلَامَاتٍ ۚ وَبِالنَّجْمِ هُمْ يَهْتَدُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Linguistic Analysis
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The phrase "وَالنجْمِ هُمْ يَهْتَدُونَ" (wa bin-najmi hum
                    yahtadoon) translates to "and by the star/stars they guide
                    themselves." While traditionally interpreted in the context
                    of using constellations for navigation, the modern discovery
                    of pulsar navigation offers a fascinating new dimension to
                    this verse.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">The Precision Connection</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of stellar guidance aligns
                    remarkably with pulsar navigation - using stars not just for
                    general direction, but for precise positioning. This method
                    provides accuracy comparable to modern GPS systems while
                    being completely natural and inexhaustible.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point to Ponder
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific understanding available in the 7th
                  century, the concept of using stars for precise, reliable
                  navigation beyond simple constellation tracking would have
                  been unknown.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could this possibility of using stars for advanced
                    navigation have been mentioned in the Quran over 1400 years
                    ago?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    In the 7th century CE, human understanding of stellar
                    mechanics was vastly different. There were no telescopes
                    capable of detecting X-ray emissions, no knowledge of
                    neutron stars, and no understanding of the precise timing
                    mechanisms that make pulsars such reliable navigational
                    beacons.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The alignment between this ancient text and the cutting-edge
                    discovery of pulsar-based navigation in modern times is a
                    remarkable point for reflection on the source of such
                    knowledge.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Limited 7th Century Knowledge
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Navigation in the 7th century relied on basic
                      constellation patterns and landmark recognition. The
                      concept of precision stellar navigation was beyond
                      contemporary understanding.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's space exploration confirms that stars can indeed
                      provide the most precise navigation possible, exactly as
                      the Quran described centuries ago.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This example demonstrates how ancient wisdom and modern space
                  science can illuminate each other, encouraging us to approach
                  both traditional texts and scientific discoveries with
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
              <Star
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Cosmic Guidance
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The universe holds wonders that connect ancient wisdom with modern
              exploration.
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

export default PulsarNavigation;
