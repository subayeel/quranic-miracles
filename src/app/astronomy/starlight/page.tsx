/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  Clock,
  BookOpen,
  HelpCircle,
  Moon,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const Starlight = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Stellar Evolution",
        icon: Star,
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
        id: "comparison",
        title: "Comparative Texts",
        icon: Moon,
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
              <Star className="text-indigo-600" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Starlight</h1>
                <p className="text-sm text-gray-500">Astronomy • Advanced</p>
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
                  Stellar Evolution
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Stars undergo fascinating changes throughout their lifespans.
                  Their brightness and appearance evolve dramatically over
                  billions of years, ultimately reaching an end state where they
                  may become invisible to the naked eye.
                </p>
                <div className="bg-gray-50 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Luminosity Varies With Stage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stars can end their lives in one of three forms: white/black
                    dwarfs, neutron stars, or black holes. In each case, their
                    luminosity (brightness) varies dramatically with their
                    evolutionary stage. The study of these changes is a key part
                    of modern astronomy.
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
                    "Stellar Evolution. Stellar Remnants: After a star has
                    burned out its fuel supply, its remnants can take one of
                    three forms, depending on the mass during its lifetime.
                    -White and black dwarfs -Neutron stars -Black holes"
                  </p>
                  <cite className="text-sm text-gray-600">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Stellar_evolution#Stellar_remnants"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Stellar Evolution, 2019
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles size={20} className="text-yellow-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Stellar Lifecycle
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Stars begin as giant clouds of gas and dust, undergo
                      fusion for billions of years, and eventually exhaust their
                      fuel. What's remarkable is that regardless of their final
                      form, these remnants ultimately become invisible to the
                      naked eye.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Moon size={20} className="text-gray-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Dimming Stars
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      All stars eventually lose their visible light. White
                      dwarfs fade and cool, neutron stars are too small to see
                      without powerful telescopes, and black holes emit no light
                      at all. This dimming is a fundamental aspect of stellar
                      evolution.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Until recently in human history, it wasn't known that stars
                  would eventually dim and become invisible. This relatively new
                  scientific understanding aligns with references found in
                  ancient texts.
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
                      href="https://quran.com/en/77/8"
                      className="text-green-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 77:8
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "If the stars dimmed."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800">
                        فَإِذَا النُّجُومُ طُمِسَتْ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Arabic word "Tumisat" (طُمِسَتْ) refers to the loss of
                    light. The verse indicates that stars will lose their light,
                    which aligns with our modern understanding that all stars
                    eventually become invisible to the naked eye in their final
                    stages.
                  </p>
                </div>
              </section>

              {/* Comparative Texts */}
              <section id="comparison" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Comparative Texts
                </h2>
                <div className="bg-gray-50 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Biblical References to Stars
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In Mark 13:24-30, there is a description of stars falling to
                    Earth. This presents an interesting contrast to what we now
                    know about stellar size and physics. Our sun is a very small
                    star, and many stars are even larger than our entire solar
                    system. Modern astronomy shows that stars cannot physically
                    fall to Earth, as Earth would vaporize upon approaching a
                    star's immense heat and size.
                  </p>
                  <div className="mt-3 text-sm">
                    <a
                      href="http://www.biblegateway.com/passage/?search=mark%2013:24-30&version=NIV"
                      className="text-indigo-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mark 13:24-30, Bible Gateway
                    </a>
                  </div>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The study of stars and their evolution continues to inspire
                  wonder and curiosity. The alignment between ancient texts and
                  modern astronomical discoveries raises intriguing questions
                  about knowledge transmission throughout history.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    starlight?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This question invites contemplation on the sources of
                    knowledge in ancient texts. The Quranic reference to stars
                    losing their light (dimming) appears to align with what
                    modern astronomy has only recently confirmed about stellar
                    evolution. This connection between ancient text and modern
                    science offers an opportunity for both scientific and
                    philosophical reflection.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether approached from a scientific or spiritual perspective,
                  the cosmic phenomena of stellar evolution and the ultimate
                  fate of stars continue to captivate humanity's imagination and
                  drive our quest for understanding the universe.
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
                Starlight: The Story of the Stars
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              From brilliant celestial bodies to dimmed remnants, stars tell the
              story of cosmic time. The universe continues to reveal its
              secrets, connecting ancient wisdom with modern discovery.
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

export default Starlight;
