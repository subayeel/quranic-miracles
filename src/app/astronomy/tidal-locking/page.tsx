/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Moon,
  ChevronRight,
  Clock,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const TidalLocking = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Tidal Locking Basics",
        icon: Moon,
      },
      {
        id: "science",
        title: "Scientific Explanation",
        icon: Clock,
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Moon className="text-indigo-600" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Tidal Locking
                </h1>
                <p className="text-sm text-gray-500">Astronomy • Extreme</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 text-sm">
                Share
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm">
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
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section id="intro" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tidal Locking Basics
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Tidal locking is a fascinating astronomical phenomenon where
                  one side of a celestial body always faces another body during
                  its orbit.
                </p>
                <div className="bg-gray-50 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Understanding Tidal Locking
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the case of tidal locking, the same side of a moon or
                    planet continuously faces its parent star or planet. A
                    perfect example is our own Moon, which always shows the same
                    face to Earth.
                  </p>
                </div>
              </section>

              {/* Scientific Explanation */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Scientific Explanation
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50">
                  <p className="text-lg italic text-gray-700 mb-4">
                    "Tidal locking between a pair of co-orbiting astronomical
                    bodies occurs when one of the objects reaches a state where
                    there is no longer any net change in its rotation rate over
                    the course of a complete orbit. In the case where a tidally
                    locked body possesses synchronous rotation, the object takes
                    just as long to rotate around its own axis as it does to
                    revolve around its partner. For example, the same side of
                    the Moon always faces Earth..."
                  </p>
                  <cite className="text-sm text-gray-600">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Tidal_locking"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Tidal locking, 2024
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles size={20} className="text-yellow-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Energy Transfer
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Tidal bulges transfer rotational kinetic energy between
                      celestial bodies. This process gradually synchronizes
                      their rotation and orbital periods.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Moon size={20} className="text-gray-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Eventual Synchronization
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Over time, Earth also transfers rotational energy to the
                      Sun, though this process is much slower due to the greater
                      distance.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The verse suggests that the shadow could stand still, which
                  scientifically aligns with the concept of tidal locking, where
                  the same side of a celestial body always faces its star.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Quranic Reference
                </h2>
                <div className="bg-green-50 border border-green-200 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <a
                      href="https://quran.com/en/25/45"
                      className="text-green-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 25:45
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "Do you not see how your Lord extends the shadow? Had He
                        willed, He could have made it still. And We made the sun
                        a pointer to it."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800">
                        ٤٥ أَلَمْ تَرَ إِلَىٰ رَبِّكَ كَيْفَ مَدَّ الظِّلَّ
                        وَلَوْ شَاءَ لَجَعَلَهُ سَاكِنًا ثُمَّ جَعَلْنَا
                        الشَّمْسَ عَلَيْهِ دَلِيلًا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The verse suggests that the shadow could stand still, which
                    scientifically aligns with the concept of tidal locking,
                    where the same side of a celestial body always faces its
                    star.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The Quranic reference to a potentially stationary shadow
                  provides an intriguing connection to our modern understanding
                  of tidal locking and celestial mechanics.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    tidal locking?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The subtle reference to a potential stillness of shadow
                    remarkably aligns with our contemporary scientific
                    understanding of tidal locking. This phenomenon, where one
                    side of a celestial body perpetually faces its parent body,
                    suggests a kind of "stillness" in rotation that seems to
                    echo the Quranic verse.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For many, this connection between ancient text and modern
                  science invites contemplation about knowledge, revelation, and
                  the intricate mechanisms of our universe. Whether approached
                  from a scientific or spiritual perspective, tidal locking
                  continues to inspire wonder and discovery.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>

      {/* Medium-style Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Sparkles className="text-indigo-600" size={20} />
              <h3 className="text-xl font-bold text-gray-900">
                Tidal Locking: The Stillness of the Moon
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              The universe reveals its secrets through the intricate dance of
              gravitational forces, connecting ancient wisdom with modern
              discovery.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-600 hover:text-gray-900 text-sm flex items-center space-x-1 mx-auto"
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
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TidalLocking;
