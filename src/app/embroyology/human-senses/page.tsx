/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Ear,
  Eye,
  BookOpen,
  HelpCircle,
  Brain,
  ArrowUp,
} from "lucide-react";

const HumanSenses = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Senses Development",
        icon: Brain,
      },
      {
        id: "science",
        title: "The Scientific Evidence",
        icon: Ear,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A 7th Century Insight",
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
                  Human Senses
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Human Development • Medium
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
                  Senses Development
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When the Quran mentions the senses of hearing and seeing
                  together, there's a consistent pattern: hearing is always
                  mentioned first. This might seem like a simple linguistic
                  choice, but modern embryology reveals something remarkable
                  about this sequence.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Order of Development
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Modern science has discovered that hearing indeed develops
                    before vision in human embryonic development. The auditory
                    system becomes functional weeks before the visual system,
                    aligning perfectly with the Quranic order of mention.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Ear
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Hearing First
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The auditory system becomes functional around 16 weeks of
                      gestation, allowing the fetus to hear sounds from both
                      inside and outside the womb.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Eye
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Vision Later
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Visual responses to light only begin after 28 weeks of
                      gestation, and visual acuity continues developing
                      significantly after birth.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Scientific Evidence
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The development of the ear and the onset of hearing occurs
                    earlier than the development of the eye and vision. The
                    first acoustic responses have been recorded at 16 weeks of
                    gestation, whereas the first responses to light have only
                    been observed in the third trimester, after 28 weeks. By
                    birth, the hearing system is well developed, whereas visual
                    acuity is poor and visual cortical function is immature."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Journal of Perinatal Medicine, "Fetal Sensory
                    Development", 2010
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Week 16</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      First acoustic responses are recorded. The fetus can now
                      hear the mother's heartbeat, voice, and external sounds.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Week 28</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      First responses to light are observed. Visual development
                      is still in early stages compared to hearing.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">At Birth</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Hearing system is well-developed, while visual acuity
                      remains poor and continues developing after birth.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This developmental sequence—hearing before vision—was
                  established through modern embryological research and advanced
                  imaging techniques that were unavailable until the 20th
                  century. The precise timing and order of sensory development
                  was completely unknown to ancient civilizations.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Consistent Pattern Across Verses
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Quran 76:2</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p className="italic text-gray-700 dark:text-gray-300">
                          "We created man from a fertilizing sperm, to test him;
                          and We made him hearing and seeing."
                        </p>
                        <p
                          dir="rtl"
                          className="font-arabic text-right text-lg text-gray-800 dark:text-gray-100"
                        >
                          إِنَّا خَلَقْنَا الْإِنْسَانَ مِنْ نُطْفَةٍ أَمْشَاجٍ
                          نَبْتَلِيهِ فَجَعَلْنَاهُ سَمِيعًا بَصِيرًا
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Quran 23:78</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p className="italic text-gray-700 dark:text-gray-300">
                          "It is He who produced for you the hearing, and the
                          eyesight, and the feelings. But little gratitude you
                          show."
                        </p>
                        <p
                          dir="rtl"
                          className="font-arabic text-right text-lg text-gray-800 dark:text-gray-100"
                        >
                          وَهُوَ الَّذِي أَنْشَأَ لَكُمُ السَّمْعَ
                          وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۚ قَلِيلًا مَا
                          تَشْكُرُونَ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Observation
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Throughout the Quran, whenever hearing and seeing are
                    mentioned together, hearing (سَمِيعًا / السَّمْعَ)
                    consistently precedes vision (بَصِيرًا / الْأَبْصَارَ). This
                    pattern appears in multiple verses, maintaining the exact
                    order that mirrors the actual developmental sequence in
                    human embryos.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The consistent Quranic order of hearing before vision
                    perfectly matches what modern embryology has discovered
                    about the timeline of sensory development. This precision in
                    ancient text aligns remarkably with contemporary scientific
                    knowledge.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A 7th Century Insight
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific evidence for the sequence of
                  sensory development, the consistent Quranic pattern presents a
                  remarkable point for reflection:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could anyone 1400 years ago have known about the
                    sequence of human sensory development?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The consistent mention of hearing before vision in the Quran
                    aligns perfectly with what modern embryology has confirmed
                    about human development. This knowledge would have been
                    impossible to acquire through observation in the 7th
                    century, as it requires sophisticated imaging technologies
                    developed only in recent decades.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Ancient understanding of sensory development was limited
                      and often inaccurate. The precise timing of hearing versus
                      vision development was unknown until modern medical
                      research.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Contemporary embryology confirms the exact sequence
                      consistently presented in the Quran: hearing develops and
                      becomes functional before vision in human development.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This remarkable consistency between ancient text and modern
                  scientific understanding demonstrates how traditional wisdom
                  can contain insights that anticipate scientific discoveries by
                  many centuries.
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
              <Ear className="text-purple-600 dark:text-purple-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Human Development
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The wonders of human development continue to unfold, connecting
              ancient texts with modern scientific discoveries.
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

export default HumanSenses;
