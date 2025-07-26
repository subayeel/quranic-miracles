/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  Layers,
  Telescope,
  BookOpen,
  Brain,
  ArrowUp,
  AlertTriangle,
  Orbit,
} from "lucide-react";

const BigCrunchUniverse = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Universe's Grand Finale",
        icon: Layers,
      },
      {
        id: "science",
        title: "Scientific Perspectives",
        icon: Telescope,
      },
      {
        id: "quran",
        title: "Quranic Foresight",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Cosmic Contemplation",
        icon: Brain,
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
              <Orbit
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  The Big Crunch
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
                  The Universe's Grand Finale: Big Crunch
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  How will our vast universe end? Among scientists, there are a
                  few main theories: the Big Rip, the Big Chill, or the Big
                  Crunch. Recent discoveries are pointing towards a fascinating,
                  fiery end – the Big Crunch, a scenario where gravity
                  eventually reverses cosmic expansion.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Gravity's Ultimate Victory
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Big Crunch theory suggests that the universe's expansion
                    will not continue forever. Instead, the force of gravity,
                    ever-present and patient, will eventually overcome the
                    expansion, pulling all matter and energy back together into
                    an incredibly hot, dense state, reminiscent of the
                    universe's very beginning.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Layers
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Cosmic Collapse
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The universe will contract, eventually collapsing back
                      into a super-dense, super-hot state, similar to the
                      conditions just after the Big Bang.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Orbit
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Cyclic Universe
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      This idea suggests a cyclic universe, where the cosmos
                      might collapse back in on itself, painting a picture of a
                      definitive, singular end.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Perspectives
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Cosmologists have long debated the ultimate fate of the
                  universe. While concepts like the "Big Rip" (spacetime tearing
                  apart) or the "Big Chill" (a cold, empty void) were
                  considered, recent data offers a new perspective.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Scientists studied the data from DESI (Dark Energy
                    Spectroscopic Instrument)...and found that the acceleration
                    of the universe is actually decreasing (not constant as
                    previously thought). This means in the end gravity will
                    dominate everywhere and will cause the universe to collapse
                    into a Big Crunch."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Space, "Dark energy could be getting weaker, suggesting
                    the universe will end in a 'Big Crunch'", 2024
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <AlertTriangle
                        size={20}
                        className="text-orange-500 dark:text-orange-400"
                      />
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        Weakening Dark Energy
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The mysterious "Dark Energy," responsible for the
                      universe's accelerated expansion, appears to be weakening.
                      If this trend continues, gravity will become the dominant
                      force on a cosmic scale.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Orbit
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        Return to Singularity
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A Big Crunch scenario implies the universe will contract,
                      eventually collapsing back into a super-dense, super-hot
                      state, similar to the conditions just after the Big Bang.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  These findings are still being analyzed, but they open up the
                  fascinating possibility that our universe is not destined to
                  expand forever but might instead be on a path towards a grand
                  cosmic collapse.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Foresight
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  SubhanAllah! It is truly remarkable to find passages in the
                  Quran, revealed in the 7th century, that seem to resonate with
                  such complex cosmological ideas. Let's explore a couple of
                  verses:
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/7/187"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 7:187 - The Weight of the Hour
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "They ask you about the Hour, 'When will it come?' Say,
                        'Knowledge of it rests with my Lord. None can reveal its
                        coming except He. It **weighs heavily (ثَقُلَتْ -
                        thaqulat)** on the heavens and the earth. It will not
                        come upon you except suddenly.' They ask you as if you
                        are responsible for it. Say, 'Knowledge of it rests with
                        Allah,' but most people do not know."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا ۖ قُلْ
                        إِنَّمَا عِلْمُهَا عِندَ رَبِّي ۖ لَا يُجَلِّيهَا
                        لِوَقْتِهَا إِلَّا هُوَ ۚ ثَقُلَتْ فِي السَّمَاوَاتِ
                        وَالْأَرْضِ ۚ لَا تَأْتِيكُمْ إِلَّا بَغْتَةً ۗ
                        يَسْأَلُونَكَ كَأَنَّكَ حَفِيٌّ عَنْهَا ۖ قُلْ إِنَّمَا
                        عِلْمُهَا عِندَ اللَّهِ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا
                        يَعْلَمُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/21/104"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 21:104 - Folding the Heavens
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "On the day when We will **fold the heaven (نَطْوِي
                        السَّمَاءَ - natwi as-samaa)**, like the folder compacts
                        the books, and as We originated the first creation We
                        shall return it; a promise (binding on Us); surely We
                        will deliver."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        يَوْمَ نَطْوِي السَّمَاءَ كَطَيِّ السِّجِلِّ لِلْكُتُبِ
                        ۚ كَمَا بَدَأْنَا أَوَّلَ خَلْقٍ نُعِيدُهُ ۚ وَعْدًا
                        عَلَيْنَا ۚ إِنَّا كُنَّا فَاعِلِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Connecting the Verses
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Isn't it fascinating? One verse points to the immense
                    "weight" or gravitational pull (7:187), and another
                    describes the "folding" or contracting of spacetime
                    (21:104). Modern physics, particularly Einstein's General
                    Relativity, describes gravity not as a simple force, but as
                    the curvature of spacetime. So, the Quran seems to allude to
                    both the cause (gravity/weight) and the effect (spacetime
                    contraction/folding) of an event like the Big Crunch. Allahu
                    Akbar (God is Greatest)!
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Cosmic Contemplation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The descriptions in the Quran, revealed over 1400 years ago,
                  present us with a point of deep reflection.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could Prophet Muhammad (peace be upon him), an
                    unlettered man in 7th century Arabia, describe concepts that
                    align so closely with modern cosmological theories about the
                    universe's end, like the Big Crunch and the nature of
                    gravity as spacetime curvature?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    At that time, humanity lacked the scientific instruments and
                    theoretical frameworks to even conceive of such cosmic
                    events. The prevailing understanding of the cosmos was
                    vastly different. The idea that the universe's expansion
                    might halt and reverse, or that gravity is intertwined with
                    the fabric of spacetime, are insights gained through
                    centuries of scientific advancement.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">
                      Historical Context
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of cosmology
                      was limited. The precise description of cosmic endings
                      shows remarkable insight into the universe's fundamental
                      nature.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">
                      Modern Validation
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's cosmological research suggests exactly what the
                      Quran described: the universe may not expand forever but
                      could contract back to a singular state.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center font-medium">
                  Indeed, in the creation of the heavens and the earth, and the
                  alternation of night and day, are signs for people of
                  understanding. (Quran 3:190)
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
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Reflecting on Cosmic Beginnings and Endings
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The universe holds profound mysteries, and exploring them can
              deepen our appreciation for both scientific discovery and ancient
              wisdom.
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

export default BigCrunchUniverse;
