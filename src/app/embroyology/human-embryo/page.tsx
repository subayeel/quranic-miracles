/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Microscope,
  Dna,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Heart,
  CircleDot,
} from "lucide-react";

const HumanEmbryology: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Embryonic Development",
        icon: Microscope,
      },
      {
        id: "science",
        title: "The Scientific Evidence",
        icon: Dna,
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
              <Microscope
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Human Embryology
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Biology • Medium
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
                  Embryonic Development
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  How could a 7th century text accurately describe the
                  appearance and behavior of a human embryo in its earliest
                  stages? The Quran's descriptions of embryonic development
                  align remarkably with what modern microscopy has revealed
                  about this hidden world.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Leech-like Stage
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In its early development, the human embryo not only
                    resembles a leech in appearance but also behaves like
                    one—attaching to the uterine wall and drawing nourishment
                    from the mother, just as a leech attaches to its host for
                    sustenance.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Heart
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Attachment Behavior
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The embryo develops specialized structures that allow it
                      to implant into the uterine lining and establish a blood
                      supply connection, similar to how a leech attaches to
                      extract nutrients.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <CircleDot
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Physical Resemblance
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      During weeks 3-4, the embryo's elongated, curved shape
                      with a distinctive bulge at one end strikingly resembles a
                      leech in both form and proportions.
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
                    "The embryo is now nearly 1/5 inch long. The embryo's form
                    resembles that of a leech or bloodworm... and has a
                    primitive heart tube, blood vessels, and primordial blood
                    cells circulating throughout its tiny body. It obtains
                    nourishment and oxygen directly from the endometrium...
                    resembling the way a leech obtains blood from its host."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Modern embryology textbooks, describing weeks 3-4 of
                    development
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Weeks 3-4</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The embryo develops a distinctive leech-like appearance
                      with an elongated, curved form that is clearly visible
                      under microscopic examination.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Weeks 5-6</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Somites (segments) begin to appear along the developing
                      spine, creating a "chewed" appearance that matches the
                      Quranic description of "mudgha."
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Nutrient Extraction</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The embryo establishes a direct connection to the mother's
                      blood supply, extracting nutrients in a manner remarkably
                      similar to a leech.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  These precise descriptions of embryonic appearance and
                  behavior were only observable through advanced microscopy
                  developed centuries after the Quran was revealed. The detailed
                  stages of development described were completely unknown to
                  7th-century knowledge.
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
                      href="https://quran.com/en/23/14"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 23:14
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Then We developed the semen into a leech. Then We
                        developed the leech into a lump. Then We developed the
                        lump into bones. Then We clothed the bones with flesh.
                        Then We produced it into another creature. Most Blessed
                        is Allah, the Best of Creators."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ثُمَّ خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا
                        الْعَلَقَةَ مُضْغَةً فَخَلَقْنَا الْمُضْغَةَ عِظَامًا
                        فَكَسَوْنَا الْعِظَامَ لَحْمًا ثُمَّ أَنْشَأْنَاهُ
                        خَلْقًا آخَرَ ۚ فَتَبَارَكَ اللَّهُ أَحْسَنُ
                        الْخَالِقِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Arabic Terms
                  </span>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-lg">Alaqa (عَلَقَةً)</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Meaning "leech" or "something that clings," this term
                        accurately describes both the physical appearance and
                        the attachment behavior of the embryo during weeks 3-4
                        of development.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Mudgha (مُضْغَةً)</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Meaning "chewed substance," this perfectly describes the
                        appearance of the developing vertebral column with its
                        distinctive somites (segments) that look like teeth
                        marks around week 6.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic descriptions of embryonic stages—from leech-like
                    appearance to chewed-like vertebral development—align
                    perfectly with modern embryological observations made
                    possible only through advanced microscopy.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A 7th Century Insight
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific evidence for the precise stages of
                  embryonic development, the descriptions in the Quran present a
                  remarkable point for reflection:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could anyone 1400 years ago have known about human
                    embryonic development stages?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The accurate descriptions of embryonic development—visible
                    only with microscopes invented centuries later—appear in a
                    text from the 7th century. The leech-like appearance, the
                    chewed-like vertebral column, and the precise sequence of
                    development were all unknown until the advent of modern
                    embryological research.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, understanding of human development was
                      based on Ancient Greek theories that were largely
                      inaccurate. Detailed embryonic stages were completely
                      unknown.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Contemporary embryology confirms the exact stages
                      described in the Quran: the leech-like appearance,
                      attachment behavior, and subsequent development phases.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This remarkable correspondence between ancient texts and
                  modern scientific discoveries continues to inspire wonder
                  about the sources of knowledge available to humanity across
                  different eras.
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
              <Microscope
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Life's Origins
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The mysteries of human development continue to unfold, connecting
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

export default HumanEmbryology;
