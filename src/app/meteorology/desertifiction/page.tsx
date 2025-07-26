/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  CloudSun,
  Map,
  Satellite,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const DesertificationTopic = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Lost Rivers and Gardens",
        icon: Map,
      },
      {
        id: "science",
        title: "The Scientific Discovery",
        icon: Satellite,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Historical Marvel",
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
              <CloudSun
                className="text-amber-600 dark:text-amber-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Desertification
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
                  Lost Rivers and Gardens
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  It might seem counterintuitive, but places that were once lush
                  with water and greenery can indeed transform into vast, arid
                  deserts. For a long time, it was commonly thought that a
                  desert region was always a desert.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Lost City of Ubar
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Consider the legend of the lost city of Ubar in southern
                    Oman. For centuries, stories placed it deep within the
                    desolate desert. However, modern exploration has revealed a
                    completely different story—one that challenges our
                    assumptions about the permanence of landscapes.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Map
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Ancient Landscapes
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      What we see as permanent desert may have once been
                      thriving landscapes with rivers and vegetation.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Satellite
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Modern Detection
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Advanced radar technology can now peer beneath desert
                      sands to reveal hidden ancient waterways.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Discovery */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Scientific Discovery
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "This is a radar image of the region around the site of the
                    lost city of Ubar in southern Oman, on the Arabian
                    Peninsula. The ancient city was discovered in 1992 with the
                    aid of remote sensing data. Archeologists believe Ubar
                    existed from about 2800 B.C. to about 300 A.D. and was a
                    remote desert outpost where caravans were assembled for the
                    transport of frankincense across the desert."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — NASA JPL, Space Radar Image of the Lost City of Ubar, 1999
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">1992 Discovery</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Scientists using advanced remote sensing technology
                      located the lost city through space radar imaging.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Ancient Riverbeds</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Radar revealed evidence of ancient riverbeds converging at
                      Ubar, hidden beneath centuries of sand.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Climate Change</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The area wasn't always desert—it was once situated beside
                      flowing rivers that supported vegetation.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  In 1992, scientists using advanced remote sensing technology
                  made an incredible discovery. The radar imaging revealed
                  evidence of ancient riverbeds underneath the sand, converging
                  at Ubar. This suggests that the area around Ubar wasn't always
                  a dry desert; it was once situated beside flowing rivers that
                  eventually dried up, transforming the landscape into the
                  desert we see today.
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
                      href="https://quran.com/en/26/132"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 26:132-134
                    </a>
                  </h3>
                  <div className="mb-4">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The Quran speaks about the people of Aad, who are
                      historically associated with this region of Arabia. When
                      the prophet Hud (peace be upon him) addressed his people,
                      he reminded them of the blessings God had given them:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And reverence Him, who supplied you with what you know.
                        He supplied you with livestock and children. And gardens
                        and springs."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٣٢ وَاتَّقُوا الَّذِي أَمَدَّكُمْ بِمَا تَعْلَمُونَ
                        <br />
                        ١٣٣ أَمَدَّكُمْ بِأَنْعَامٍ وَبَنِينَ
                        <br />
                        ١٣٤ وَجَنَّاتٍ وَعُيُونٍ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The verses mention that God supplied the people of Aad with
                    "gardens and springs" (وَجَنَّاتٍ وَعُيُونٍ). This
                    description points to a land rich in vegetation and water
                    sources, completely different from the arid desert that
                    defines the region today.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Archaeological Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of Aad's land having gardens and
                    springs precisely matches the scientific discovery of
                    ancient riverbeds beneath the desert sand at Ubar's
                    location.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Historical Marvel
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Let's pause and consider the knowledge available in the 7th
                  century CE when the Quran was revealed. The correlation
                  between ancient text and modern scientific findings about past
                  environmental changes is quite remarkable.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone living in the 7th century know that an
                    area deep in the Arabian desert was once a place of gardens
                    and springs?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In that era, without satellite technology, radar imaging, or
                    modern geological methods, there was no way for people to
                    scientifically determine the past climate or landscape
                    features hidden beneath centuries of desert sand. The common
                    perception would have been that the desert was simply... a
                    desert.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Limitation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      7th-century knowledge lacked the tools to detect buried
                      riverbeds or understand past climate changes in desert
                      regions.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Confirmation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      NASA's 1992 discovery confirmed exactly what the Quran
                      described: the region once had water sources and
                      vegetation.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  Yet, the Quran describes the land of Aad—believed to be in
                  this very region—as having "gardens and springs," precisely
                  matching the scientific discovery of ancient riverbeds that
                  supported vegetation. This invites us to ponder the source of
                  such knowledge and appreciate how modern science can sometimes
                  illuminate ancient wisdom.
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
              <CloudSun
                className="text-amber-600 dark:text-amber-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Earth's Changing Landscapes
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The Earth's history holds many secrets, sometimes echoed in
              ancient texts, revealed by modern science.
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
          className="bg-amber-600 dark:bg-amber-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default DesertificationTopic;
