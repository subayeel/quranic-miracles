/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Moon,
  ChevronRight,
  Sun,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const Moonlight = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Moon Reflects Sunlight",
        icon: Moon,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Sun,
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
              <Moon className="text-blue-600" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Moonlight</h1>
                <p className="text-sm text-gray-500">Astronomy • Easy</p>
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
                  Moon Reflects Sunlight
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Many ancient texts described the moon as a light-giving body,
                  similar to the sun. Today, we know this is incorrect—the moon
                  doesn't generate its own light but reflects sunlight.
                </p>
                <div className="bg-gray-50 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    A Historical Misconception
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Christian Bible says that the moon shines like the sun
                    (Genesis 1:16-18). Today we know that this is false; the
                    moon doesn't shine. Visible light from the moon is actually
                    reflected sunlight. However, the Quran didn't make this
                    mistake.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Scientific Evidence
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50">
                  <p className="text-lg italic text-gray-700 mb-4">
                    "The Moon shines because its surface reflects light from the
                    Sun. But the Moon doesn't just reflect light like a mirror.
                    Instead, it absorbs some light and reflects the rest in all
                    directions. The type of surface and presence of elements
                    like titanium affect how much light is reflected. As the
                    Moon orbits Earth, different amounts of its sunlit surface
                    are visible from our planet. This creates the lunar phases
                    we observe throughout the month."
                  </p>
                  <cite className="text-sm text-gray-600">
                    —{" "}
                    <a
                      href="https://moon.nasa.gov/moon-in-motion/moon-phases/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NASA, Moon Phases
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sun size={20} className="text-yellow-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        The Sun: Light Source
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      The sun generates its own light through nuclear fusion,
                      producing electromagnetic radiation across the spectrum,
                      including visible light.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Moon size={20} className="text-blue-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        The Moon: Reflector
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Unlike the sun, the moon has no internal energy source to
                      produce light. It merely reflects approximately 12% of the
                      sunlight that hits its surface.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This scientific understanding confirms that only the sun
                  generates light, while the moon reflects it—exactly as the
                  Quranic reference suggests.
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
                      href="https://quran.com/en/10/5"
                      className="text-green-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 10:5
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "It is He who made the sun radiant, and the moon a
                        light, and determined phases for it—that you may know
                        the number of years and the calculation. Allah did not
                        create all this except with truth. He details the
                        revelations for a people who know."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800">
                        ٥ هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ
                        نُورًا وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ
                        السِّنِينَ وَالْحِسَابَ ۚ مَا خَلَقَ اللَّهُ ذَٰلِكَ
                        إِلَّا بِالْحَقِّ ۚ يُفَصِّلُ الْآيَاتِ لِقَوْمٍ
                        يَعْلَمُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Note that the verse uses different words to describe the sun
                    (ضياء) and the moon (نور). The word used for the sun refers
                    to something that generates its own light, while the word
                    used for the moon refers to borrowed or reflected light.
                    Only the sun shines. No mistakes in the Quran.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The accurate distinction between sunlight and moonlight in the
                  Quran raises intriguing questions about ancient knowledge:
                </p>
                <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    moonlight?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The precise distinction between the sun as a
                    light-generating body and the moon as a light-reflecting
                    body seems remarkably prescient given our modern
                    understanding of astronomy. At a time when many believed the
                    moon generated its own light, the Quran made a distinction
                    that science would only confirm centuries later.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For many, this connection between ancient text and modern
                  science invites contemplation about knowledge, revelation, and
                  the universe we inhabit. Whether approached from a scientific
                  or spiritual perspective, the celestial bodies continue to
                  inspire wonder and discovery.
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
              <Sparkles className="text-blue-600" size={20} />
              <h3 className="text-xl font-bold text-gray-900">
                Moonlight: Reflected Wonder
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              The moon continues to reflect the sun's light, connecting ancient
              wisdom with modern scientific discovery.
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
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Moonlight;
