/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Droplet,
  ThermometerSun,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const CamelsMiracleComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Amazing Camels",
        icon: Droplet,
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: ThermometerSun,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Fascinating Question",
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
              <Droplet
                className="text-yellow-600 dark:text-yellow-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Camels
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Zoology • Medium
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
                  Amazing Camels
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Camels are incredible creatures, perfectly adapted to survive
                  in harsh desert environments. They can endure extreme heat and
                  go for long periods without water. But did you know they hold
                  a surprising record?
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Nature's Efficient Drinkers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    While commonly known for storing water (which isn't quite
                    accurate - they store fat in their humps!), camels have
                    truly unique abilities when it comes to rehydrating after
                    long periods of dehydration.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Scientific Model
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Camels have a series of physiological adaptations that
                    allow them to withstand long periods of time without any
                    external source of water... Unlike other mammals, camels'
                    red blood cells are oval rather than circular in shape. This
                    facilitates the flow of red blood cells during dehydration
                    and makes them better at withstanding high osmotic variation
                    without rupturing when drinking large amounts of water: a
                    600 kg (1,300 lb) camel can drink 200 L (53 US gal) of water
                    in three minutes."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Camel, 2021
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern science has revealed astonishing details about camel
                  physiology and behavior, especially concerning how they handle
                  water loss and replenishment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Droplet
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Incredible Speed
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      A 600 kg camel can drink 200 liters of water in just three
                      minutes when really thirsty - making them arguably the
                      fastest rate drinkers in the animal kingdom for their
                      size.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <ThermometerSun
                        size={20}
                        className="text-orange-500 dark:text-orange-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Unique Adaptation
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Their oval-shaped red blood cells can handle rapid changes
                      in blood volume without bursting, unlike the round cells
                      of most mammals.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This remarkable speed is aided by their unique oval-shaped red
                  blood cells, which can handle the rapid change in blood volume
                  without bursting. This makes thirsty camels arguably the
                  fastest rate drinkers in the animal kingdom for their size – a
                  fact that wasn't common scientific knowledge until relatively
                  recently.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/56/54"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 56:54-55
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Will be drinking on top of it boiling water. Drinking
                        like thirsty camels drink."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٥٤ فَشَارِبُونَ عَلَيْهِ مِنَ الْحَمِيمِ
                        <br />
                        ٥٥ فَشَارِبُونَ شُرْبَ الْهِيمِ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The phrase "shurb al-heem" (شُرْبَ الْهِيمِ) translates to
                    "drinking like al-Heem". In classical Arabic, "al-Heem"
                    refers to severely thirsty camels. So the verse describes a
                    state of intense, rapid drinking, comparing it specifically
                    to how thirsty camels drink.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    At the time of the Quran's revelation in the 7th century,
                    people living in Arabia were very familiar with camels. They
                    knew camels could go without water for long periods and,
                    when they finally reached water, they would drink a large
                    amount quickly. However, the scientific understanding of why
                    they could do this so efficiently, or whether they were the
                    fastest among all animals globally, was completely unknown.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">The Perfect Comparison</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quran's specific comparison to "thirsty camels" aligns
                    perfectly with modern scientific discovery that camels are
                    exceptionally fast and efficient drinkers when dehydrated.
                    This precise analogy demonstrates remarkable knowledge of
                    animal physiology.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Fascinating Question
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Connecting the ancient Quranic description to modern
                  scientific findings presents a remarkable point for
                  reflection:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone 1400 years ago have known to use the most
                    physiologically capable and fastest drinking animal as the
                    specific example for intense thirst?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, while people observed camels drinking
                    heartily, they lacked the scientific tools to compare their
                    drinking efficiency to that of countless other animal
                    species across the world, let alone understand the unique
                    biological adaptations like oval red blood cells that
                    facilitate this.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      While 7th-century Arabs observed camels drinking,
                      understanding their physiological superiority among all
                      animals required modern scientific tools and global
                      comparative studies.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Contemporary science confirms camels as the most efficient
                      rapid drinkers, validating the Quranic comparison made
                      1400 years ago.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  The Quran's precise comparison to "thirsty camels" (al-Heem)
                  aligns perfectly with the modern scientific discovery that
                  camels are exceptionally fast and efficient drinkers when
                  dehydrated. This correlation between an ancient text and
                  contemporary scientific knowledge invites us to consider the
                  source of this wisdom.
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
              <Droplet
                className="text-yellow-600 dark:text-yellow-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Nature & Scripture
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Discovering harmony between the natural world and ancient revealed
              texts.
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
          className="bg-yellow-600 dark:bg-yellow-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CamelsMiracleComponent;
