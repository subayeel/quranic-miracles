/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  Ruler,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const Sirius = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Brightest Star",
        icon: Star,
      },
      {
        id: "distance",
        title: "Distance to Sirius",
        icon: Ruler,
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
              <Star className="text-blue-600" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sirius</h1>
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
                  The Brightest Star
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Sirius, also known as the "Dog Star," is the brightest star in
                  Earth's night sky. Located in the constellation Canis Major,
                  it has captivated observers throughout human history.
                </p>
                <div className="bg-gray-50 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Historical Significance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For thousands of years, civilizations have observed and
                    tracked Sirius. Its heliacal rising (first appearance in the
                    dawn sky) was particularly important in ancient Egypt, where
                    it coincided with the annual flooding of the Nile River.
                  </p>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    1400 years ago, people recognized Sirius as the brightest
                    star in the night sky, but they lacked the scientific tools
                    to determine its distance from Earth or its physical
                    properties. Today, we know both its exact distance and size.
                  </p>
                </div>
              </section>

              {/* Distance Section */}
              <section id="distance" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Distance to Sirius
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50">
                  <p className="text-lg italic text-gray-700 mb-4">
                    According to modern astronomical measurements, Sirius is
                    8.61 light-years away from Earth. This means that the light
                    we see from Sirius today began its journey to Earth 8.61
                    years ago. When converted to centi light-years (a unit where
                    1 light-year equals 100 centi light-years), the distance to
                    Sirius is 861 centi light-years.
                  </p>
                  <cite className="text-sm text-gray-600">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Sirius"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Sirius
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles size={20} className="text-yellow-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Physical Properties
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Sirius is actually a binary star system consisting of
                      Sirius A (the star visible to the naked eye) and Sirius B
                      (a white dwarf companion). Sirius A is approximately twice
                      the mass of our Sun and 25 times more luminous.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Ruler size={20} className="text-blue-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Star Size
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Sirius A has a radius of 1.711 times that of our Sun. This
                      precise measurement helps astronomers understand the
                      physical properties of this prominent star.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Some researchers have identified interesting numerical
                  relationships between the Quranic text and astronomical
                  measurements. For example, they note that between the word
                  "Star" in verse 1 and the word "Earth" in verse 32 of this
                  chapter, there are exactly 861 letters—matching the distance
                  to Sirius in centi light-years. Additionally, they observe
                  that the ratio of chapter numbers "The Sun" (91) to "The Star"
                  (53) is approximately 1.717, which closely corresponds to the
                  ratio of Sirius's radius to our Sun's radius (1.711).
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
                      href="https://quran.com/en/53/49"
                      className="text-green-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 53:49
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "And that it is He who is the Lord of Sirius."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800">
                        ٤٩ وَأَنَّهُ هُوَ رَبُّ الشِّعْرَىٰ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The mention of Sirius by name in the Quran is notable, as
                    detailed astronomical knowledge was limited in 7th century
                    Arabia. The apparent numerical relationships between the
                    text and modern astronomical measurements of Sirius's
                    distance and size have led some to consider this as evidence
                    of divine inspiration.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The specific mention of Sirius in the Quran and the numerical
                  correlations some researchers have found raise interesting
                  questions about ancient knowledge and texts:
                </p>
                <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    Sirius?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The mention of Sirius by name in the Quran is notable, as
                    detailed astronomical knowledge was limited in 7th century
                    Arabia. The apparent numerical relationships between the
                    text and modern astronomical measurements of Sirius's
                    distance and size have led some to consider this as evidence
                    of divine inspiration.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether approached from a scientific perspective, a
                  faith-based one, or simply as a fascinating historical
                  coincidence, the connection between ancient texts and modern
                  astronomical discoveries continues to inspire wonder and
                  reflection about our universe and the development of human
                  knowledge.
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
                Sirius: The Brightest Star
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              From ancient observations to modern measurements, our
              understanding of Sirius continues to evolve, connecting past
              wisdom with present discovery.
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

export default Sirius;
