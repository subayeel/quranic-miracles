/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Brain,
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
  MoonStar,
  Cross,
} from "lucide-react";

const BrainStem = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Sleep and Death Linked",
        icon: MoonStar,
      },
      {
        id: "science",
        title: "Scientific Understanding",
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
              <Brain
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  The Brainstem
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Physiology • Medium
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
                  Sleep and Death Linked
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Have you ever thought about the connection between sleep and
                  death? Interestingly, the Quran mentions a link between these
                  two states. In the past, this idea might have seemed strange
                  to some, but modern science, particularly our understanding of
                  the brain, has uncovered a remarkable connection.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Brainstem's Crucial Role
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Scientists now understand that the brainstem, a vital part
                    of your brain connecting it to the spinal cord, plays a key
                    role in regulating fundamental bodily functions. This
                    includes controlling your sleep cycle and, importantly,
                    being linked to what happens at the end of life.
                  </p>
                </div>
              </section>

              {/* Scientific Understanding */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Understanding
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern neuroscience has delved deep into the functions of the
                  brainstem. It's recognized as the control center for essential
                  processes like breathing, heart rate, consciousness, and
                  critically, the sleep-wake cycle.
                </p>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The brainstem contains several critical areas involved in
                    control of behavioral arousal, wake-sleep cycle,
                    cardiovascular function, and respiration... These neurons
                    primarily utilize the excitatory amino-acid L-glutamate or
                    the inhibitory amino acid γ-aminobutyric acid (GABA) and
                    their activity is modulated in a state-dependent manner by
                    cholinergic, monoaminergic, and peptidergic neurons in the
                    brainstem and hypothalamus."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Neurology, Brainstem integration of arousal, sleep,
                    cardiovascular, and respiratory control, 2018
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Beyond sleep, the brainstem's status is also fundamentally
                  linked to the concept of death in modern medicine.
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Brainstem Death
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    "Brainstem death is a clinical syndrome defined by the
                    absence of reflexes with pathways through the brainstem...
                    Identification of this state carries a very grave prognosis
                    for survival; cessation of heartbeat often occurs within a
                    few days... In the United Kingdom, death can be certified on
                    the basis of a formal diagnosis of brainstem death..."
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Sleep Regulation</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The brainstem is crucial for regulating our state of
                      consciousness like sleep through its control of arousal
                      and wake-sleep cycles.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Definition of Death</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Its permanent loss of function is medically understood as
                      death itself in many places, showing the deep connection
                      between these states.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This shows that the brainstem is not only crucial for
                  regulating our state of consciousness like sleep but its
                  permanent loss of function is medically understood as death
                  itself in many places. This detailed understanding is a
                  relatively recent scientific development.
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
                      href="https://quran.com/en/39/42"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 39:42
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Allah takes the souls at the time of their death, and
                        those that have not died during their sleep. He retains
                        those for which He has decreed death, and He releases
                        the others until a predetermined time. In that are signs
                        for people who reflect."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٢ اللَّهُ يَتَوَفَّى الْأَنْفُسَ حِينَ مَوْتِهَا
                        وَالَّتِي لَمْ تَمُتْ فِي مَنَامِهَا ۖ فَيُمْسِكُ
                        الَّتِي قَضَىٰ عَلَيْهَا الْمَوْتَ وَيُرْسِلُ
                        الْأُخْرَىٰ إِلَىٰ أَجَلٍ مُسَمًّى ۚ إِنَّ فِي ذَٰلِكَ
                        لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Connection
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    This verse from the Quran, revealed in the 7th century,
                    explicitly draws a connection between death ("takes the
                    souls at the time of their death") and sleep ("and those
                    that have not died during their sleep"). It speaks of a
                    process involving the soul being taken during both states,
                    though with different outcomes (retention in death, release
                    until a later time in sleep).
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    Ancient Insight, Modern Understanding
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    In the 7th century, the intricate biological mechanisms of
                    sleep and death and the brainstem's role in both were
                    completely unknown. Yet, the Quran connects sleep and death
                    at a level implying a shared underlying process involving
                    the soul.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific knowledge available in the 7th
                  century, the explicit link made in the Quran between sleep and
                  death is quite thought-provoking:
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a text from 1400 years ago accurately point to a
                    connection between sleep and death, a link that modern
                    science has found is intricately tied to the brainstem?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The scientific finding that the brainstem is central to both
                    regulating sleep and is the key determinant in the medical
                    definition of death reveals a profound, underlying
                    biological link between these two states. This level of
                    detail about internal biological processes was far beyond
                    the reach of 7th-century knowledge. The Quran's mention of
                    taking souls during both sleep and death aligns remarkably
                    with this modern scientific understanding of the brainstem's
                    dual critical role. This connection invites us to reflect on
                    the source of such knowledge in the Quran.
                  </p>
                </div>
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
                Exploring the Body and Soul
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The wonders within us, from sleep's embrace to life's departure,
              connect ancient wisdom with modern discovery.
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

export default BrainStem;
