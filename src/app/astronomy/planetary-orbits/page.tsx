/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  RotateCw,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

// Custom PlanetIcon since it's not available in lucide-react
const PlanetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"24"}
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
  </svg>
);

// Custom Orbit icon since it's not available in lucide-react
const Orbit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <ellipse cx="12" cy="12" rx="10" ry="6" />
    <ellipse cx="12" cy="12" rx="10" ry="6" transform="rotate(90 12 12)" />
  </svg>
);

const PlanetaryOrbits = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "History of Orbits",
        icon: PlanetIcon,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: RotateCw,
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
              <Orbit className="text-blue-600" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Planetary Orbits
                </h1>
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
                  History of Orbits
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  For centuries, people believed that Earth was fixed in place
                  while the sun, moon, and planets moved around it. This
                  geocentric view dominated astronomy until relatively recently
                  in human history.
                </p>
                <div className="bg-gray-50 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Evolution of Our Understanding
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The idea that Earth remains stationary while everything else
                    revolves around it was the prevailing view for most of human
                    history. It wasn't until the 16th century that Copernicus
                    formally proposed a heliocentric model, and it took even
                    longer for this understanding to become widely accepted.
                  </p>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    Today, we understand that all celestial bodies, including
                    Earth, follow their own orbital paths. This knowledge has
                    transformed our understanding of astronomy and our place in
                    the universe.
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
                    All stars and planets in our universe follow orbital paths.
                    Earth orbits the sun, completing one revolution every 365.25
                    days, while simultaneously rotating on its axis once every
                    24 hours, creating the cycle of day and night. The planets
                    in our solar system orbit the sun, while the moon orbits
                    Earth. Our entire solar system orbits the center of the
                    Milky Way galaxy, which itself moves through space relative
                    to other galaxies.
                  </p>
                  <cite className="text-sm text-gray-600">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Orbit"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Orbit
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles size={20} className="text-yellow-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Orbital Paths
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Celestial bodies follow elliptical (oval-shaped) orbits
                      rather than perfect circles. These paths are determined by
                      the gravitational pull between objects, following
                      principles first described by Johannes Kepler and later
                      explained by Isaac Newton's laws of motion.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Orbit className="text-blue-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Returning Motion
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      One of the defining characteristics of an orbit is that
                      bodies return to the same positions in their paths after
                      completing one revolution. This cyclical, returning nature
                      is a fundamental aspect of planetary motion.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Quran makes references to celestial movement that align
                  with our modern understanding of planetary orbits.
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
                      href="https://quran.com/en/39/5"
                      className="text-green-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 39:5
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "[Allah] Created the heavens and the Earth in truth. He
                        overlaps the night over the day and overlaps the day
                        over the night, and enslaved the sun and the moon, ALL
                        MOVE to a prerecorded destiny. Is He not the Exalted,
                        the Forgiver?"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800">
                        خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۖ يُكَوِّرُ
                        اللَّيْلَ عَلَى النَّهَارِ وَيُكَوِّرُ النَّهَارَ عَلَى
                        اللَّيْلِ ۖ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ ۖ كُلٌّ
                        يَجْرِي لِأَجَلٍ مُّسَمًّى ۗ أَلَا هُوَ الْعَزِيزُ
                        الْغَفَّارُ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In Arabic grammar, there's a distinction between singular
                    (one), binary (two), and plural (three or more). The phrase
                    "كُلٌّ يَجْرِي" (kullon yajree) refers to the plural form,
                    indicating that all the mentioned bodies—including Earth—are
                    in motion. This suggests that the Quran was referring not
                    just to the movement of the sun and moon, but also to
                    Earth's movement.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <a
                      href="https://quran.com/en/86/11"
                      className="text-green-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 86:11
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "And the sky that returns."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800">
                        وَالسَّمَاءِ ذَاتِ الرَّجْعِ
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    The term "Al-rajeh الرَّجْعِ" refers to something that
                    returns to the same location. This aligns with our
                    understanding that celestial bodies, including planets,
                    return to the same positions in their orbits.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The alignment between these 1400-year-old Quranic references
                  and our modern scientific understanding invites reflection:
                </p>
                <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    planetary orbits?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At a time when the prevailing view held Earth to be
                    stationary and at the center of the universe, these verses
                    appear to describe a different understanding—one that aligns
                    with modern astronomy's knowledge that Earth moves along
                    with other celestial bodies, and that planets follow orbital
                    paths that return them to their starting positions.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Quranic passages referring to the movement of celestial
                  bodies, including Earth, and the returning nature of their
                  paths present an intriguing historical perspective. These
                  references, made long before telescopes or modern astronomical
                  tools were available, raise questions about the origin of such
                  knowledge in ancient texts.
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
                Orbits: The Dance of the Cosmos
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              The universe continues to move in perfect harmony, connecting
              ancient wisdom with modern scientific discovery.
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

export default PlanetaryOrbits;
