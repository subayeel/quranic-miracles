/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Stethoscope,
  ChevronRight,
  FlaskRound,
  BookOpen,
  HelpCircle,
  Brain,
  ArrowUp,
  Sparkles,
  Eye,
  Footprints,
} from "lucide-react";

const Hypoxia = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Lack of Oxygen",
        icon: Stethoscope,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: FlaskRound,
      },
      {
        id: "symptoms",
        title: "Symptoms of Hypoxia",
        icon: Brain,
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Stethoscope
                className="text-blue-600 dark:text-blue-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Hypoxia
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Biology • Extreme
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
                  Lack of Oxygen
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Hypoxia is a serious condition that occurs when body tissues
                  don't receive enough oxygen to function properly. It can
                  affect the entire body or specific regions and organs.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Understanding Hypoxia
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    1400 years ago nobody knew about hypoxia or its effects on
                    the body, however it was accurately portrayed in the Quran.
                    Today, we understand that at high altitudes, the oxygen
                    concentration in the atmosphere decreases, causing blood
                    vessels in the lungs to constrict as the body experiences
                    oxygen deprivation.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Evidence
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Hypoxic pulmonary vasoconstriction (HPV), also known as the
                    Euler-Liljestrand mechanism, is a physiological phenomenon
                    in which small pulmonary arteries constrict in the presence
                    of alveolar hypoxia (low oxygen levels)."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Hypoxic_pulmonary_vasoconstriction"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Hypoxic Pulmonary Vasoconstriction, 2019
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Stethoscope
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Pulmonary Effects
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Modern science has confirmed that when oxygen levels drop,
                      blood vessels in the lungs constrict. This is the body's
                      attempt to optimize ventilation-perfusion matching,
                      directing blood to areas with better oxygen supply.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Physiological Response
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      This constriction creates a feeling of chest tightness and
                      difficulty breathing, especially noticeable at high
                      altitudes where oxygen concentration is naturally lower.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The blood vessels in the lungs constrict when oxygen levels
                  drop, making breathing difficult. This physiological response
                  was only scientifically understood in recent times, yet
                  appears to be referenced in ancient texts.
                </p>
              </section>

              {/* Symptoms of Hypoxia */}
              <section id="symptoms" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Symptoms of Hypoxia
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Hypoxia manifests through several distinct symptoms as the
                  body struggles with insufficient oxygen:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-100 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                        <Brain className="text-red-500" size={16} />
                      </div>
                      <h3 className="font-medium">Cyanosis</h3>
                    </div>
                    <p>
                      The bluish or purplish discoloration of skin when tissues
                      near the surface have low oxygen saturation. The term
                      comes from "cyanos" (κυανός), the Greek word for blue.
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-100 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                        <Footprints className="text-red-500" size={16} />
                      </div>
                      <h3 className="font-medium">Motor Dysfunction</h3>
                    </div>
                    <p>
                      Problems with motor functions and movement coordination
                      are common with brain hypoxia, affecting a person's
                      ability to walk normally or coordinate limb movements.
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-100 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                        <Eye className="text-red-500" size={16} />
                      </div>
                      <h3 className="font-medium">Visual Impairment</h3>
                    </div>
                    <p>
                      Cortical blindness, the loss of vision due to oxygen
                      deprivation in the brain's occipital cortex, can occur
                      temporarily during severe hypoxic episodes.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800 mt-6">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Brain size={16} className="text-red-500" /> Brain Hypoxia
                    Research
                  </h3>
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "Brain hypoxia is a form of hypoxia or oxygen deficiency
                    affecting the brain. It occurs when the brain does not
                    receive enough oxygen even though blood is still flowing.
                    When oxygen supply is totally cut off, it is called brain
                    anoxia. Brain hypoxia is a medical emergency because the
                    brain needs a constant supply of oxygen and nutrients to
                    function properly. There are several causes of brain
                    hypoxia. They include drowning, suffocating, cardiac arrest,
                    and stroke. Mild symptoms include memory loss and problems
                    with motor function, such as movement. Severe cases can
                    result in seizures and brain death."
                  </p>
                </div>
                <p className="font-medium mt-4">
                  These symptoms—skin discoloration, motor problems, dizziness,
                  and visual impairment—are all now recognized as classic signs
                  of oxygen deprivation, but this understanding is relatively
                  recent in medical science.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Reference
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/6/125"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 6:125
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Those whom Allah wants to guide, He opens their chests
                        to Islam; And those whom He wants to leave astray, He
                        makes their chests tight and constricted, as if they are
                        ascending to the sky: Such is the penalty of Allah on
                        those who refuse to believe."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٢٥ فَمَنْ يُرِدِ اللَّهُ أَنْ يَهْدِيَهُ يَشْرَحْ
                        صَدْرَهُ لِلْإِسْلَامِ وَمَنْ يُرِدْ أَنْ يُضِلَّهُ
                        يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ
                        فِي السَّمَاءِ كَذَٰلِكَ يَجْعَلُ اللَّهُ الرِّجْسَ
                        عَلَى الَّذِينَ لَا يُؤْمِنُونَ
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                      Key Point
                    </span>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      "He makes their chests tight and constricted, as if they
                      are ascending to the sky" appears to describe the chest
                      tightness experienced during hypoxia at high altitudes.
                    </p>
                  </div>
                </div>
                {/* Additional Quranic references and explanations can be added here as needed */}
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The apparent connections between ancient texts and modern
                  scientific understanding of hypoxia invite thoughtful
                  reflection:
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    hypoxia?
                  </h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>The constriction of airways at high altitudes</li>
                    <li>The bluish discoloration of skin (cyanosis)</li>
                    <li>Problems with motor functions and coordination</li>
                    <li>Dizziness similar to intoxication</li>
                    <li>Temporary blindness due to oxygen deprivation</li>
                  </ul>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  While these verses are presented in a religious and
                  metaphorical context, the alignment between the described
                  symptoms and modern medical understanding of hypoxia presents
                  an interesting perspective on the intersection of ancient
                  texts and scientific knowledge.
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
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Scientific Miracles in the Quran
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring the connection between modern scientific discoveries
              about hypoxia and ancient revelations in religious texts.
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
          className="bg-blue-600 dark:bg-blue-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hypoxia;
