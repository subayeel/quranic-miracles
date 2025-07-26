/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  MapPin,
  BookOpen,
  Compass,
  Sparkles,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

const QuranMiles = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "A Distance Measured",
        icon: MapPin,
      },
      {
        id: "quran",
        title: "The Quranic Verses",
        icon: BookOpen,
      },
      {
        id: "distance",
        title: "Calculating the Distance",
        icon: Compass,
      },
      {
        id: "reflection",
        title: "A Remarkable Correlation",
        icon: Sparkles,
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
              <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Miles
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
                  A Distance Measured
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Did you know there's a fascinating connection being explored
                  between specific verses in the Quran and the geographical
                  distance between two holy sites? It's a point that has led
                  many to ponder the depth of the scripture!
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Connection: Verses and Miles
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The idea revolves around the number of verses separating two
                    specific mentions of holy mosques in the Quran, and how this
                    number remarkably correlates with the distance in miles
                    between these mosques on Earth.
                  </p>
                </div>
              </section>

              {/* Quranic Verses */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Verses
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The correlation focuses on the first verse mentioning the
                  Sacred Mosque (Al-Masjid al-Haram in Mecca, where the Kaaba is
                  located) and the verse mentioning Al-Aqsa Mosque (in
                  Jerusalem) in the context of the Prophet Muhammad's night
                  journey (Al-Isra').
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/9/28"
                      className="text-indigo-700 dark:text-indigo-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 9:28
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "O you who believe! The polytheists are polluted, so let
                        them not approach the Sacred Mosque after this year of
                        theirs..."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٢٨ يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا
                        الْمُشْرِكُونَ نَجَسٌ فَلَا يَقْرَبُوا الْمَسْجِدَ
                        الْحَرَامَ بَعْدَ عَامِهِمْ هَٰذَا...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/17/1"
                      className="text-indigo-700 dark:text-indigo-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 17:1
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Glory to Him who journeyed His servant by night, from
                        the Sacred Mosque, to the Al-Aqsa Mosque, whose
                        precincts We have blessed..."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١ سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِنَ
                        الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى...
                      </p>
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 text-sm font-medium px-3 py-1 rounded-full mb-2">
                      Verse Count
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    According to some counts, using one counting method (e.g.,
                    starting verse count from the beginning of the Quran), Quran
                    9:28 is the 1263rd verse, and Quran 17:1 is the 2030th
                    verse.
                  </p>
                  <p className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                    The difference is: 2030 - 1263 = 767 verses.
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400 mt-4 block">
                    —{" "}
                    <a
                      href="https://www.kaheel7.com/ar/index.php/1/2087--2019"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source: Quran Characters Counter (Kaheel7.com)
                    </a>
                  </cite>
                </blockquote>
              </section>

              {/* Calculating Distance */}
              <section id="distance" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Calculating the Distance
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now, let's look at the geographical distance between the
                  Sacred Mosque (Kaaba in Mecca) and Al-Aqsa Mosque in
                  Jerusalem.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Geographic Coordinates
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Using modern tools like Google Maps, we can find the
                    coordinates of these locations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Kaaba (Mecca): 21.4225° N, 39.8262° E</li>
                    <li>Al-Aqsa Mosque (Jerusalem): 31.7761° N, 35.2358° E</li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Compass
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Distance Calculation
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      By entering these coordinates into a geographical distance
                      calculator, we can find the approximate straight-line
                      (great-circle) distance between the two mosques.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        The Result
                      </h3>
                    </div>
                    <p className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                      767 miles
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <a
                        href="http://boulter.com/gps/distance/?from=21.4225%C2%B0+N%2C+39.8262%C2%B0+E&to=31.7761%C2%B0+N%2C+35.2358%C2%B0+E&units=m"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify calculation
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Remarkable Correlation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Here's where the correlation becomes truly thought-provoking:
                </p>
                <div className="bg-pink-50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    The number of verses separating the mentions of the Sacred
                    Mosque and Al-Aqsa Mosque is 767.
                    <br />
                    The geographical distance between these two mosques is
                    approximately 767 miles.
                  </h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now, consider the context of the 7th century CE, when the
                  Quran was revealed.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could this specific numerical correspondence exist in a
                    text from that era?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, precise geographic measurement over long
                    distances was incredibly difficult. While people certainly
                    traveled and had estimations of distances, accurate,
                    large-scale surveys were not available. Furthermore, the
                    unit of "miles" was not a standard unit of measurement in
                    the Arabian Peninsula or the wider Middle East at that time.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-pink-500" />
                      Knowledge in the 7th Century
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Calculating the straight-line distance between two points
                      thousands of miles apart with the precision to match a
                      count within a text would require advanced geodesy and
                      mathematics far beyond the tools available then.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Divine Precision</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The correlation between the count of verses and the
                      geographical distance in miles—a unit unfamiliar locally
                      and requiring sophisticated methods to measure accurately—
                      is seen by many as a remarkable sign.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  It's a point that invites deep contemplation about the origin
                  and nature of the Quran, suggesting knowledge that transcends
                  the limitations of 7th-century human understanding.
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
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Connections in the Quran
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Points of correlation between scripture and the world around us
              invite us to reflect on the divine wisdom.
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

export default QuranMiles;
