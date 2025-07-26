/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Globe,
  HelpCircle,
  ArrowUp,
  Circle,
  Compass,
  Orbit,
} from "lucide-react";

const ShapeOfUniverse = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Cosmic Shape",
        icon: Globe,
      },
      {
        id: "observable",
        title: "The Observable Sphere",
        icon: Circle,
      },
      {
        id: "principle",
        title: "Viewed Equally",
        icon: Compass,
      },
      {
        id: "curvature",
        title: "Returning Journey",
        icon: Orbit,
      },
      {
        id: "reflection",
        title: "Contemplation",
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
              <Globe
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Shape of the Universe
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cosmology • Medium
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
                  The Enigma of Cosmic Shape
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Imagine living 1400 years ago, with no telescopes or space
                  probes. The shape and scale of the universe were beyond human
                  comprehension. Yet, the Quran, revealed in the 7th century,
                  contains verses that astonishingly align with our modern
                  understanding of the cosmos.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Look Back at Ancient Knowledge
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, cosmological views were vastly different
                    from today. Many cultures believed in a flat Earth with a
                    solid dome-like sky. The idea of a vast, expanding universe
                    with a discernible shape was simply not part of human
                    knowledge or scientific capability.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Circle
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Observable Sphere
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Modern astronomy reveals that every observer sees the
                      observable universe as a giant sphere, about 93 billion
                      light-years in diameter.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Orbit
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Curved Possibility
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Recent studies suggest the universe might be curved, where
                      traveling in a straight line could eventually return you
                      to your starting point.
                    </p>
                  </div>
                </div>
              </section>

              {/* Observable Universe */}
              <section id="observable" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Our Observable Universe: A Sphere
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Assuming the universe is isotropic, the distance to the
                    edge of the observable universe is roughly the same in every
                    direction. That is, the observable universe has a spherical
                    volume (a ball) centered on the observer. Every location in
                    the universe has its own observable universe... The radius
                    of the observable universe is therefore estimated to be
                    about 46.5 billion light-years and its diameter about 28.5
                    gigaparsecs (93 billion light-years)."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Observable Universe, 2020
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Spherical Shape</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Modern astronomy reveals that every observer in the
                      universe sees the observable universe around them as a
                      giant sphere.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Universal Property</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This spherical observation is true for any observer, no
                      matter where they are located in the universe.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Vast Scale</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The observable universe is estimated to be about 93
                      billion light-years in diameter - a scale beyond ancient
                      comprehension.
                    </p>
                  </div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/55/33"
                      className="text-indigo-700 dark:text-indigo-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 55:33
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "O society of jinn and humans! If you can escape the
                        diameters of the heavens and the earth, go ahead and
                        escape. But you will not escape except with
                        authorization."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٣٣ يَا مَعْشَرَ الْجِنِّ وَالْإِنْسِ إِنِ اسْتَطَعْتُمْ
                        أَنْ تَنْفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ
                        فَانْفُذُوا ۚ لَا تَنْفُذُونَ إِلَّا بِسُلْطَانٍ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Meaning of "Aktar"
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The key Arabic word here is "أَقْطَارِ" (Aktar). This word
                    literally means 'diameters'. Diameters are a property
                    specifically associated with circles or spheres. The verse
                    speaks of the "diameters of the heavens and the earth",
                    aligning remarkably with the modern scientific understanding
                    that the observable universe has a spherical shape.
                  </p>
                </div>
              </section>

              {/* Cosmological Principle */}
              <section id="principle" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Universe Appears the Same to All
                </h2>
                <blockquote className="border-l-4 border-teal-500 pl-6 py-4 mb-8 bg-teal-50 dark:bg-teal-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The cosmological principle is usually stated formally as
                    'Viewed on a sufficiently large scale, the properties of the
                    universe are the same for all observers.' This amounts to
                    the strongly philosophical statement that the part of the
                    universe which we can see is a fair sample, and that the
                    same physical laws apply throughout."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Cosmological Principle, 2020
                  </cite>
                </blockquote>
                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/79/27"
                      className="text-teal-700 dark:text-teal-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 79:27-28
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Are you more difficult to create, or the heaven? He
                        constructed it. He raised its thickness, and equalized
                        it."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٢٧ أَأَنْتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ ۚ بَنَاهَا
                        <br />
                        ٢٨ رَفَعَ سَمْكَهَا فَسَوَّاهَا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrases
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    "رَفَعَ سَمْكَهَا" (Raafa'a Samkaha) means "He raised its
                    thickness." Today, we know the universe is expanding,
                    meaning the radius of the observable universe is increasing
                    over time. "فَسَوَّاهَا" (Fasawwaha) means "and equalized
                    it," aligning with the cosmological principle that the
                    "thickness" or radius appears equal for all observers.
                  </p>
                </div>
              </section>

              {/* Curved Universe */}
              <section id="curvature" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Is the Universe Curved? A Returning Path
                </h2>
                <blockquote className="border-l-4 border-pink-500 pl-6 py-4 mb-8 bg-pink-50 dark:bg-pink-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Now our new paper, published in Nature Astronomy, has come
                    to a conclusion that may unleash a crisis in cosmology - if
                    confirmed. We show that the shape of the universe may
                    actually be curved rather than flat, as previously thought -
                    with a probability larger than 99%. In a curved universe, no
                    matter which direction you travel in, you will end up at the
                    starting point - just like on a sphere."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Phys.org, Shape of the universe..., 2019
                  </cite>
                </blockquote>
                <div className="bg-pink-50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/86/11"
                      className="text-pink-700 dark:text-pink-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 86:11
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And the sky that returns."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١١ وَالسَّمَاءِ ذَاتِ الرَّجْعِ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Meaning of "Al-rajeh"
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic word "الرَّجْعِ" (Al-rajeh) means 'returns' or
                    'the return'. While we are familiar with planetary orbits,
                    applying "returning" to the vast "sky" or universe points
                    towards a property where a path ultimately returns to its
                    origin - aligning with the concept of a closed, curved
                    universe.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Coupled with verse 55:33 which speaks of not being able to
                    escape the "diameters," these verses together portray a
                    universe that is closed, finite, and where travel in a
                    straight line would eventually bring one back – concepts
                    being explored in modern cosmology.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point for Contemplation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The alignment between these Quranic descriptions and concepts
                  from modern cosmology presents a profound question:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a text from the 7th century, revealed to an
                    illiterate man, contain ideas about the universe's shape and
                    properties that science is only confirming today?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The detailed properties discussed – the spherical nature of
                    the observable universe, the idea that it appears the same
                    from all viewpoints, and the possibility of a curved
                    structure where paths return – were entirely beyond the
                    scientific grasp of the 7th century.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of cosmology
                      was limited. The precise description of cosmic properties
                      shows remarkable insight into the universe's fundamental
                      nature.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's cosmological research confirms concepts described
                      in the Quran: the spherical observable universe, equal
                      appearance from all points, and possible curved structure.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This remarkable congruence between ancient revelation and
                  modern scientific discovery invites us to reflect deeply on
                  the origin and nature of the Quranic text. The universe's
                  shape and properties continue to amaze, revealing layers of
                  complexity hinted at in ancient scripture.
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
              <Globe
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Cosmic Wonders
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The universe's shape and properties continue to amaze, revealing
              layers of complexity hinted at in ancient scripture.
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

export default ShapeOfUniverse;
