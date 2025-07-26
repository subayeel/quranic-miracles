/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Scale,
  ChevronRight,
  BookOpen,
  FileText,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const Crucifixion = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Ancient Punishment",
        icon: Scale,
      },
      {
        id: "history",
        title: "Historical Methods",
        icon: Scale,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "evidence",
        title: "Archaeological Evidence",
        icon: FileText,
      },
      {
        id: "reflection",
        title: "Historical Inquiry",
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
              <Scale
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Crucifixion in Ancient Times
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  History • Medium
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
                  Ancient Punishment Methods
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The term "crucifixion" immediately evokes images of the Roman
                  cross. However, this form of punishment has a much older and
                  more varied history. When the Quran mentions similar
                  punishment in the time of Prophet Joseph, some critics have
                  questioned its historical accuracy, assuming crucifixion was a
                  purely Roman innovation.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Before the Roman Cross
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Archaeological evidence reveals that forms of
                    crucifixion—tying or fixing victims to upright posts or
                    stakes—existed long before the Romans standardized the
                    cross-shaped crucifixion we commonly associate with the
                    term.
                  </p>
                </div>
              </section>

              {/* Historical Methods */}
              <section id="history" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Evolution
                </h2>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 mb-8 bg-purple-50 dark:bg-purple-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Crucifixion probably originated with the Assyrians and
                    Babylonians, and was systematically used by the Persians
                    before the Romans adopted it. In its earliest forms, the
                    victim was often tied to a tree or post, or even impaled on
                    an upright post."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — National Library of Medicine
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Assyrians & Babylonians
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The earliest known practitioners, using stakes and posts
                      for execution.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Persian Empire</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Systematically employed impalement and post-based
                      executions.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Roman Innovation</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Later standardized the T-shaped cross we recognize today.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This historical timeline shows that the concept of fixing
                  someone to an upright structure for execution was
                  well-established in ancient civilizations, particularly in the
                  regions where biblical events took place.
                </p>
              </section>

              {/* Quranic References */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/12/41"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 12:41
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "O my fellow inmates! As for one of you, he will pour
                        wine for his master, and as for the other, he will be
                        crucified, and the birds will eat from his head. The
                        matter about which you inquire has been decreed."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤١ يَا صَاحِبَيِ السِّجْنِ أَمَّا أَحَدُكُمَا فَيَسْقِي
                        رَبَّهُ خَمْرًا ۖ وَأَمَّا الْآخَرُ فَيُصْلَبُ
                        فَتَأْكُلُ الطَّيْرُ مِنْ رَأْسِهِ ۚ قُضِيَ الْأَمْرُ
                        الَّذِي فِيهِ تَسْتَفْتِيَانِ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Additional Context
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    The Quran also mentions Pharaoh as "owner of the stakes"
                    (ذِي الْأَوْتَادِ) and threatening to crucify people "on the
                    trunks of palm trees" (عَلَى جُذُوعِ النَّخْلِ), indicating
                    the use of posts and stakes rather than crosses.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">Linguistic Accuracy</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Arabic terminology used in the Quran aligns perfectly
                    with ancient methods of execution using stakes and posts,
                    not the later Roman cross design.
                  </p>
                </div>
              </section>

              {/* Archaeological Evidence */}
              <section id="evidence" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Archaeological Evidence
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern Egyptology has uncovered fascinating evidence about
                  punishment methods in ancient Egypt, providing context for the
                  Quranic account of events during Prophet Joseph's time.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    Papyrus Boulaq 18: Ancient Egyptian Evidence
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    This ancient document, dating to the 13th Dynasty (before
                    Joseph's time), contains a passage describing someone being
                    "put on the stake." The hieroglyphic writing system included
                    specific symbols for "rdj hr" meaning "to put on the stake
                    for punishment."
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Archaeological Timeline
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Evidence shows stake-based executions were practiced in
                      Egypt before and during the period traditionally
                      associated with Prophet Joseph.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Discovery</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      These specific details about ancient Egyptian punishment
                      methods were only discovered through modern Egyptological
                      research.
                    </p>
                  </div>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Inquiry
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the archaeological evidence and historical
                  timeline, the Quranic account presents a remarkable point for
                  reflection:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century have known about
                    ancient Egyptian execution methods?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The precise details about pre-Roman crucifixion methods,
                    specifically the use of stakes and posts by ancient
                    civilizations, were not common knowledge in the 7th century
                    CE. The archaeological evidence confirming these practices
                    in ancient Egypt is a product of modern Egyptological
                    research, made possible only after hieroglyphs were
                    deciphered in the 19th century.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">7th Century Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      When the Quran was revealed, detailed knowledge of ancient
                      Egyptian punishment methods was lost to history.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Archaeological discoveries have confirmed the accuracy of
                      the Quranic description of ancient execution methods.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This correlation between ancient texts and modern
                  archaeological findings demonstrates how historical accuracy
                  can be verified across millennia, inviting us to consider the
                  remarkable preservation of historical detail in ancient
                  sources.
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
              <Scale
                className="text-indigo-600 dark:text-indigo-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Ancient Justice & Modern Discovery
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring how archaeological evidence illuminates ancient texts
              and historical accuracy.
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

export default Crucifixion;
