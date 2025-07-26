/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sun,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const RedGiant = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Red Giant Overview",
        icon: Sun,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Sun,
      },
      {
        id: "quran",
        title: "Quranic Perspective",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Key Insight",
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
              <Sun className="text-orange-600" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Red Giant</h1>
                <p className="text-sm text-gray-500">
                  Astronomy • Intermediate
                </p>
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
                  Red Giant Overview
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A red giant is a fascinating stage in a star's life cycle,
                  representing the final dramatic transformation of stars like
                  our Sun.
                </p>
                <div className="bg-gray-50 border-l-4 border-orange-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    What is a Red Giant?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    As stars age, they undergo remarkable transformations. Our
                    Sun is destined to become a red giant, dramatically
                    expanding and potentially engulfing the inner planets,
                    including Earth and the moon.
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
                    "A red giant is a dying star in the final stages of stellar
                    evolution. In about five billion years, our own sun will
                    turn into a red giant, expand and engulf the inner planets —
                    including Earth."
                  </p>
                  <cite className="text-sm text-gray-600">
                    —{" "}
                    <a
                      href="https://www.space.com/22471-red-giant-stars.html"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Space.com, Red Giant Stars: Facts, Definition & The Future
                      of the Sun, 2023
                    </a>
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern science confirms that the sun will eventually expand
                  and engulf the inner planets, including Earth and the moon.
                  This was unknown 1400 years ago, yet referenced in ancient
                  text with remarkable precision.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Quranic Perspective
                </h2>
                <div className="bg-green-50 border border-green-200 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <a
                      href="https://quran.com/en/75/9"
                      className="text-green-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 75:9
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "And the sun and the moon are joined together."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800">
                        ٩ وَجُمِعَ الشَّمْسُ وَالْقَمَرُ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The verse describes the sun and moon being joined together,
                    which aligns with the scientific prediction that the sun
                    will expand and engulf the moon. This was unknown at the
                    time the Quran was revealed.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Insight
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The alignment between ancient text and modern scientific
                  understanding continues to inspire wonder about our universe
                  and the nature of knowledge.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    How could man who lived 1400 years ago have known the sun
                    will merge with the moon?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Modern science confirms that the sun will eventually expand
                    and engulf the inner planets, including Earth and the moon.
                    This was unknown 1400 years ago, yet referenced in ancient
                    text with remarkable precision.
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
              <Sparkles className="text-orange-600" size={20} />
              <h3 className="text-xl font-bold text-gray-900">
                Red Giant: The Sun's Final Act
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              The story of stars continues to unfold, connecting ancient wisdom
              with modern scientific discovery.
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
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default RedGiant;
