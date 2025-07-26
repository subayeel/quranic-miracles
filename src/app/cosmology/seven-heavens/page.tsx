/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Layers,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  FileStack,
  Telescope,
  BrainCircuit,
} from "lucide-react";

const SevenHeavens = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Dimensions Beyond",
        icon: Layers,
      },
      {
        id: "darkMatter",
        title: "Dark Matter Evidence",
        icon: Telescope,
      },
      {
        id: "quran",
        title: "Quranic References",
        icon: BookOpen,
      },
      {
        id: "strings",
        title: "String Theory",
        icon: BrainCircuit,
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FileStack
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Seven Heavens
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cosmology • Advanced
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
                  Dimensions Beyond
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran describes the universe as having seven superimposed
                  heavens. Skeptics historically claimed this was an outdated
                  cosmological model, but remarkably, modern physics now points
                  to extra dimensions and parallel universes that align with
                  this ancient description.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Beyond Our Observable Universe
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    According to string theory, our reality consists of more
                    than the four dimensions we perceive (time plus three
                    spatial dimensions). Instead, physicists propose the
                    existence of ten dimensions—with six additional spatial
                    dimensions that are imperceptible to our senses but
                    mathematically necessary to explain fundamental physics.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Layers
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Extra Dimensions
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      String theory requires a total of 10 dimensions: time, our
                      three observable spatial dimensions (x, y, z), and six
                      additional spatial dimensions. These extra dimensions are
                      thought to be "compactified"—curled up at each point in
                      space, too small for direct observation but essential for
                      the mathematics of the universe to work.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Telescope
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Dark Matter
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Dark matter may be normal matter existing in dimensions
                      beyond our perceptible reality, detectable only through
                      its gravitational effects.
                    </p>
                  </div>
                </div>
              </section>

              {/* Dark Matter Evidence */}
              <section id="darkMatter" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Dark Matter Evidence
                </h2>
                <blockquote className="border-l-4 border-violet-500 pl-6 py-4 mb-8 bg-violet-50 dark:bg-violet-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Astronomers have just confirmed the existence of Dark
                    Matter. This mysterious Dark Matter is invisible however it
                    provides the bulk of gravity that holds galaxies (not the
                    regular matter that forms stars and planets). This invisible
                    Dark Matter has weird collision properties (collisionless).
                    Simply put: we cannot see Dark Matter nor collide with it
                    but we can detect its gravity."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Modern Cosmology
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Unusual Properties</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      When massive clusters of dark matter collide, they pass
                      through each other without interacting—except through
                      gravity. This suggests dark matter exists in a different
                      dimensional framework than ordinary matter.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Gravitational Lensing</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      We can detect dark matter through gravitational
                      lensing—the bending of light around massive objects. This
                      evidence reveals invisible mass throughout the universe
                      that influences visible matter.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Strings in Extra Dimensions
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      To explain dark matter's behavior, scientists are
                      developing theories involving extra dimensions—proposing
                      that dark matter may be normal matter existing in
                      dimensions beyond our perceptible reality.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  These particles might be "strings" vibrating in dimensions we
                  cannot see.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic References
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      <a
                        href="https://quran.com/en/41/12"
                        className="text-green-700 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 41:12
                      </a>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                          "So [Allah] decreed them as seven heavens (one above
                          the other) in two days and revealed to each heaven its
                          orders. And We [Allah] adorned the lowest heaven with
                          lights, and protection. Such is the decree of the
                          Exalted; the Knowledgeable."
                        </p>
                      </div>
                      <div className="font-arabic text-right text-xl leading-relaxed">
                        <p
                          dir="rtl"
                          className="text-gray-800 dark:text-gray-100"
                        >
                          فَقَضَاهُنَّ سَبْعَ سَمَاوَاتٍ فِي يَوْمَيْنِ
                          وَأَوْحَىٰ فِي كُلِّ سَمَاءٍ أَمْرَهَا ۚ وَزَيَّنَّا
                          السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَحِفْظًا ۚ ذَٰلِكَ
                          تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      <a
                        href="https://quran.com/en/65/12"
                        className="text-green-700 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 65:12
                      </a>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                          "Allah is the one who created seven Heavens and from
                          Earth like them (of corresponding type); [Allah's]
                          command descends among them so that you may know that
                          Allah is capable of anything and that Allah knows
                          everything."
                        </p>
                      </div>
                      <div className="font-arabic text-right text-xl leading-relaxed">
                        <p
                          dir="rtl"
                          className="text-gray-800 dark:text-gray-100"
                        >
                          اللَّهُ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ وَمِنَ
                          الْأَرْضِ مِثْلَهُنَّ يَتَنَزَّلُ الْأَمْرُ
                          بَيْنَهُنَّ لِتَعْلَمُوا أَنَّ اللَّهَ عَلَىٰ كُلِّ
                          شَيْءٍ قَدِيرٌ وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ
                          شَيْءٍ عِلْمًا
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      <a
                        href="https://quran.com/en/81/15"
                        className="text-green-700 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 81:15-16
                      </a>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                          "I swear by those that are invisible, that move, that
                          sweep."
                        </p>
                      </div>
                      <div className="font-arabic text-right text-xl leading-relaxed">
                        <p
                          dir="rtl"
                          className="text-gray-800 dark:text-gray-100"
                        >
                          فَلَا أُقْسِمُ بِالْخُنَّسِ
                          <br />
                          الْجَوَارِ الْكُنَّسِ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insights
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quran describes seven superimposed heavens with our
                    observable universe ("the lowest heaven") being the only one
                    adorned with visible light. It further states that there are
                    corresponding worlds or "earths" in these other
                    heavens—suggesting parallel universes with their own
                    physical laws.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Arabic term "Hubuk" refers to knots or weaves—strikingly
                    similar to how modern physicists visualize the complex
                    structure of extra dimensions, which are often depicted as
                    intricately woven or knotted spaces.
                  </p>
                </div>
              </section>

              {/* String Theory */}
              <section id="strings" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  String Theory Connection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern string theory proposes that the fundamental building
                  blocks of the universe are not point-like particles but tiny
                  vibrating strings of energy. These strings require additional
                  dimensions beyond our observable four dimensions to function
                  mathematically.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Extra Dimensions in Physics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    String theory requires a total of 10 dimensions: time, our
                    three observable spatial dimensions (x, y, z), and six
                    additional spatial dimensions. These extra dimensions are
                    thought to be "compactified"—curled up at each point in
                    space, too small for direct observation but essential for
                    the mathematics of the universe to work.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">The Multiverse</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Physicists now suggest we may live in a "multiverse"
                      rather than a "universe." These parallel realities would
                      be separated by dimensions we cannot directly perceive,
                      with gravity being the only force shared between them.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dimensions as Heavens</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The concept of seven heavens in the Quran could be
                      interpreted as referring to these extra dimensions—realms
                      that exist but remain invisible to us, interacting
                      primarily through gravitational effects.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mt-6">
                  <h3 className="font-medium mb-3">
                    <a
                      href="https://quran.com/en/51/7"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 51:7
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And the heaven that has weaves."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        وَالسَّمَاءِ ذَاتِ الْحُبُكِ
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The convergence between modern theoretical physics and the
                  1400-year-old descriptions in the Quran raises a profound
                  question:
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man who lived 1400 years ago have known about the
                    multiverse?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The concept of seven superimposed heavens—with only our
                    observable universe containing visible light, while other
                    realms remain detectable only through gravitational
                    effects—appears to parallel modern scientific theories that
                    were developed only in the late 20th century.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, the prevailing view was that the
                      heavens were solid domes or spheres. The concept of extra
                      dimensions or parallel universes was completely foreign.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's physics and cosmology confirm the possibility of
                      extra dimensions and parallel universes, as described in
                      the Quran.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This connection between ancient scripture and modern physics
                  invites contemplation about the origins of knowledge and the
                  remarkable alignment between spiritual texts and scientific
                  discovery—separated by 14 centuries of human history.
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
                className="text-indigo-600 dark:text-indigo-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Cosmic Dimensions
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Ancient wisdom meets modern science in our understanding of the
              universe's multidimensional nature.
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
          className="bg-indigo-600 dark:bg-indigo-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SevenHeavens;
