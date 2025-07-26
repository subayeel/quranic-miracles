/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Droplets,
  History,
  Sun,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const WaterCycle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Understanding the Water Cycle",
        icon: Droplets,
      },
      {
        id: "historical",
        title: "Historical Misconceptions",
        icon: History,
      },
      {
        id: "science",
        title: "Modern Understanding",
        icon: Sun,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Remarkable Accuracy",
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
              <Droplets
                className="text-cyan-600 dark:text-cyan-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Water Cycle
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
                  Understanding the Water Cycle
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When verses of the Quran concerning the role of water in human
                  existence are read today, they appear to express obvious
                  ideas. The reason is simple: in our time, we all know about
                  the water cycle in nature to a greater or lesser extent.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Challenge of Ancient Understanding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    However, if we consider the various ancient concepts on this
                    subject, it becomes clear that the Quranic data does not
                    embody the mythical concepts prevalent at the time of
                    Revelation. These ancient ideas had developed more according
                    to philosophical speculation than observed phenomena.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Although it was empirically possible to acquire practical
                  knowledge necessary to improve irrigation, the concepts held
                  on the water cycle in general would hardly be acceptable
                  today. The Quranic Revelation occurred during a period when
                  humanity held completely inaccurate views on the water cycle.
                </p>
              </section>

              {/* Historical Misconceptions */}
              <section id="historical" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Misconceptions
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Two specialists, G. Gastany and B. Blavoux, provide an
                  enlightening history of water cycle misconceptions in the
                  Encyclopedia Universalis under 'Hydrogeology':
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold mb-3">
                      7th Century CE - Thales of Miletus
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Held the theory that ocean waters, under the effect of
                      winds, were thrust toward the interior of continents, fell
                      upon the earth, and penetrated into the soil.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold mb-3">Plato's Theory</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Shared Thales' views and thought that waters returned to
                      the oceans via a great abyss called 'Tartarus'. This
                      theory had supporters until the 18th century CE, including
                      Descartes.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold mb-3">
                      Aristotle's Misconception
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Imagined that water vapor from soil condensed in cool
                      mountain caverns and formed underground lakes that fed
                      springs. He was followed by Seneca (1st century CE) and
                      many others until 1877 CE, including O. Volger.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800 mb-8">
                  <h3 className="font-bold mb-3">
                    The First Correct Understanding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The first clear formulation of the water cycle must be
                    attributed to Bernard Palissy in 1580 CE. He claimed that
                    underground water came from rainwater infiltrating into the
                    soil. This theory was confirmed by E. Mariotte and P.
                    Perrault in the 17th century CE.
                  </p>
                </div>

                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  It's remarkable that in the numerous Quranic verses about
                  water, there is no trace of the mistaken ideas that were
                  current at the time of Prophet Muhammad ﷺ.
                </p>
              </section>

              {/* Modern Understanding */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Modern Understanding
                </h2>
                <blockquote className="border-l-4 border-amber-500 pl-6 py-4 mb-8 bg-amber-50 dark:bg-amber-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "It will never be possible to make rain fall from a cloud
                    that does not have the suitable characteristics of a
                    raincloud or one that has not yet reached the appropriate
                    stage of evolution (maturity)."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — M.A. Facy, French Meteorological Office
                  </cite>
                </blockquote>

                <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800 mb-8">
                  <h3 className="font-bold text-lg mb-3">
                    Complete Water Cycle Process
                  </h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    According to modern hydrology, the water cycle works as
                    follows:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Heat from the sun's rays causes water from seas and other
                      water surfaces to evaporate
                    </li>
                    <li>
                      Water vapor rises into the atmosphere and forms clouds by
                      condensation
                    </li>
                    <li>Winds move the clouds over varying distances</li>
                    <li>
                      Clouds either disperse, combine with others, or fragment
                      to produce rain
                    </li>
                    <li>
                      Rain reaching the sea (70% of Earth's surface) repeats the
                      cycle
                    </li>
                    <li>
                      Rain on land is absorbed by vegetation or infiltrates into
                      soil
                    </li>
                    <li>
                      Water returns through springs or channels back to the sea
                    </li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Renaissance Discovery</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      It wasn't until the Renaissance (1400-1600 CE) that
                      philosophical concepts gave way to objective observation.
                      Leonardo da Vinci rebelled against Aristotle's statements.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Modern Limitations</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Even today, humans cannot make rain from clouds that don't
                      have suitable characteristics. Man cannot willfully break
                      the established water cycle.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quranic Verses */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>

                <div className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      <a
                        href="https://quran.com/en/50/9"
                        className="text-green-700 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 50:9-11
                      </a>
                    </h3>
                    <p className="text-lg italic text-gray-700 dark:text-gray-300">
                      "We sent down water from the sky, blessed water whereby We
                      caused to grow gardens, grains for harvest, tall
                      palm-trees with their spathes, piled one above the other –
                      sustenance for (Our) servants. Therewith We gave (new)
                      life to a dead land. So will be the emergence (from the
                      tombs)."
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      <a
                        href="https://quran.com/en/39/21"
                        className="text-green-700 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 39:21
                      </a>
                    </h3>
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
                      "Hast thou not seen that Allah sent water down from the
                      sky and led it through sources into the ground? Then He
                      caused sown fields of different colors to grow."
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm font-medium px-3 py-1 rounded-full">
                        Springs Fed by Rainwater
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This verse perfectly describes how rainwater is conducted
                      into underground sources - exactly what Bernard Palissy
                      correctly interpreted in 1570 CE, contradicting centuries
                      of Aristotelian misconceptions.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      <a
                        href="https://quran.com/en/56/68"
                        className="text-green-700 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 56:68-70
                      </a>
                    </h3>
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
                      "Have you observed the water you drink? Do you bring it
                      down from the rainclouds? Or do We? If it were Our will,
                      We could make it salty. Then why are you not thankful?"
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This challenges humans to produce rainfall from clouds - a
                      reminder that even with modern technology, we cannot make
                      rain from unsuitable clouds, confirming Divine control
                      over the water cycle.
                    </p>
                  </div>
                </div>

                <div className="mb-8 mt-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic description includes crucial elements that
                    contradict ancient misconceptions: rainwater infiltrating
                    into ground, springs fed by rainwater, and the wind's role
                    in cloud formation—all confirmed by modern science.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Remarkable Accuracy
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When one compares modern hydrology data to the numerous
                  Quranic verses quoted above, there is a remarkable degree of
                  agreement between them. This is particularly striking when
                  considering the historical context.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in 7th century Arabia have known the
                    correct water cycle when the greatest philosophers and
                    scientists of the time were wrong?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    This question becomes even more compelling when we consider
                    that these misconceptions weren't corrected until nearly
                    1000 years later, and the complete scientific understanding
                    wasn't achieved until modern times.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Ancient civilizations held completely incorrect theories
                      about the water cycle
                    </li>
                    <li>
                      These misconceptions persisted for over 1000 years after
                      the Quranic revelation
                    </li>
                    <li>
                      The correct understanding wasn't formulated until 1580 CE
                      by Bernard Palissy
                    </li>
                    <li>
                      The Quran accurately described the process in the 7th
                      century CE
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">✓ Correct in Quran</h3>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Rainwater infiltrates into ground</li>
                      <li>• Springs fed by rainwater</li>
                      <li>• Wind's role in cloud formation</li>
                      <li>• Sun's role implied in the process</li>
                      <li>• Divine control over the cycle</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      ✗ Ancient Misconceptions
                    </h3>
                    <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Ocean waters thrust by winds</li>
                      <li>• Underground lakes in mountains</li>
                      <li>• Water returns via "Tartarus" abyss</li>
                      <li>• Springs from mountain caverns</li>
                      <li>• No understanding of evaporation</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The harmony between Quranic descriptions and modern scientific
                  understanding continues to inspire reflection on the sources
                  of ancient knowledge, demonstrating how traditional texts and
                  scientific discoveries can illuminate each other.
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
              <Droplets
                className="text-cyan-600 dark:text-cyan-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Ancient Wisdom, Modern Confirmation
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The harmony between Quranic descriptions and modern scientific
              understanding continues to inspire reflection on the sources of
              ancient knowledge.
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
          className="bg-cyan-600 dark:bg-cyan-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default WaterCycle;
