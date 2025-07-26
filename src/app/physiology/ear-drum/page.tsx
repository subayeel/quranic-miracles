/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Ear,
  ChevronRight,
  Activity,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const EardrumComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Eardrum & Hearing Loss",
        icon: Ear,
      },
      {
        id: "science",
        title: "Medical Evidence",
        icon: Activity,
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
              <Ear className="text-purple-600 dark:text-purple-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Eardrum
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
                  Eardrum & Hearing Loss
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran mentions a phenomenon where a tear or rupture in the
                  ear prevents hearing. In the 7th century, this anatomical
                  knowledge was unknown, yet modern medicine confirms that a
                  ruptured eardrum causes hearing loss.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Marvel of the Eardrum
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The eardrum is a delicate membrane that vibrates in response
                    to sound waves, transmitting these vibrations to the inner
                    ear. When this membrane is ruptured or torn, it disrupts
                    this process, leading to hearing impairment - a fact only
                    discovered in modern medicine.
                  </p>
                </div>
              </section>

              {/* Medical Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Medical Evidence
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "A ruptured eardrum (tympanic membrane perforation) is a
                    hole or tear in the thin tissue that separates your ear
                    canal from your middle ear (eardrum). A ruptured eardrum can
                    result in hearing loss. It can also make your middle ear
                    vulnerable to infections. A ruptured eardrum usually heals
                    within a few weeks without treatment. But sometimes it
                    requires a patch or surgical repair to heal."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Mayo Clinic, Ruptured Eardrum, 2020
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Eardrum Function</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The eardrum vibrates in response to sound waves,
                      transmitting these vibrations to the bones of the middle
                      ear. A rupture disrupts this delicate mechanism, impairing
                      hearing.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Historical Understanding
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, the detailed anatomy and function of
                      the eardrum were completely unknown. The concept that a
                      tear could cause hearing loss would have been impossible
                      to determine without modern medical instruments.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The connection between eardrum rupture and hearing loss was
                  only established with modern otology (the study of the ear).
                  Yet the Quran accurately describes this phenomenon using the
                  Arabic word "Waqr" (وَقْرًا) which means both a tear and
                  hearing impairment.
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
                      href="https://quran.com/en/6/25"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 6:25
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Among them are those who listen to you; but We place
                        covers over their hearts, to prevent them from
                        understanding it, and tear in their ears. Even if they
                        see every sign, they will not believe in it. Until, when
                        they come to you, to argue with you, those who
                        disbelieve will say, these are nothing but myths of the
                        ancients."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٢٥ وَمِنْهُمْ مَنْ يَسْتَمِعُ إِلَيْكَ ۖ وَجَعَلْنَا
                        عَلَىٰ قُلُوبِهِمْ أَكِنَّةً أَنْ يَفْقَهُوهُ وَفِي
                        آذَانِهِمْ وَقْرًا ۚ وَإِنْ يَرَوْا كُلَّ آيَةٍ لَا
                        يُؤْمِنُوا بِهَا ۚ حَتَّىٰ إِذَا جَاءُوكَ يُجَادِلُونَكَ
                        يَقُولُ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا أَسَاطِيرُ
                        الْأَوَّلِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The word "Waqr" (وَقْرًا) is remarkably precise - it means
                    both a physical tear/rupture and the resulting hearing
                    impairment. This dual meaning perfectly describes what
                    modern medicine has discovered about eardrum ruptures
                    causing hearing loss.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    Precise Medical Knowledge
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The verse directly connects the physical tear in the ear
                    with the inability to hear, demonstrating knowledge of the
                    eardrum's crucial role in hearing that wouldn't be medically
                    understood for centuries.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The correlation between the Quranic description and modern
                  medical knowledge presents a profound question:
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a 7th century text accurately describe a medical
                    phenomenon that would only be discovered centuries later?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The detailed understanding of the eardrum's function and the
                    effects of its rupture required microscopic examination and
                    specialized medical knowledge that simply didn't exist in
                    the ancient world. The Quran's precise description of this
                    phenomenon, using a word that captures both the physical
                    rupture and its auditory consequences, suggests knowledge
                    beyond what was humanly possible at the time.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This isn't just about anatomical accuracy - it's about the
                  Quran using language that precisely describes a medical
                  reality that would remain undiscovered for over a thousand
                  years. The word "Waqr" perfectly encapsulates both the
                  physical tear in the eardrum and the resulting hearing
                  impairment, a connection that modern medicine has only
                  recently established.
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
                Exploring Medical Miracles in the Quran
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The Quran's precise descriptions of natural phenomena continue to
              align with modern scientific discoveries, inviting reflection on
              its divine origin.
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

export default EardrumComponent;
