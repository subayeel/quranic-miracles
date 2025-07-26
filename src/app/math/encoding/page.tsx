/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Code,
  BookOpen,
  HelpCircle,
  Binary,
  ArrowUp,
  Sparkles,
  Search,
} from "lucide-react";

const EncodingTopic = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "A Glimpse into Encoding",
        icon: Sparkles,
      },
      {
        id: "technical",
        title: "What is Character Encoding?",
        icon: Binary,
      },
      {
        id: "quranic",
        title: "An Intriguing Pattern",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Question from the 7th Century",
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
              <Code className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Character Encoding
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mathematics • Medium
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
                  A Glimpse into Encoding
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In the world of modern computing, a key concept rooted in
                  mathematical ideas like sets and relations is character
                  encoding. It's how we represent letters and symbols using
                  numbers, the language computers understand. Surprisingly, some
                  see echoes of this complex idea in a text revealed over 1400
                  years ago.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Modern Concept, Ancient Whisper?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Character encoding is fundamental to how we interact with
                    digital text today, a sophisticated system developed
                    relatively recently in human history. The idea that a text
                    from the 7th century might contain patterns resembling such
                    a system is truly thought-provoking.
                  </p>
                </div>
              </section>

              {/* Technical Context */}
              <section id="technical" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  What is Character Encoding?
                </h2>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In computing, data storage, and data transmission,
                    character encoding is used to represent a repertoire of
                    characters by some kind of encoding system that assigns a
                    number to each character for digital representation."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    <a
                      href="https://en.wikipedia.org/wiki/Character_encoding"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      — Wikipedia, Character Encoding
                    </a>
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Essentially, encoding allows us to map characters (like 'A',
                  'ب', '€', or '😊') to unique numbers, making it possible for
                  computers to store, process, and display text. Different
                  encoding systems (like ASCII, UTF-8) use different maps. This
                  concept of representing one set of symbols using another is
                  key.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Code
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Mapping Characters
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Encoding assigns a specific numerical value to each
                      character, creating a correspondence between symbols and
                      numbers that computers can handle.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Search size={20} className="text-gray-500" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Modern Development
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Sophisticated character encoding systems are products of
                      the modern age of computing and information technology.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quranic Example */}
              <section id="quranic" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  An Intriguing Pattern
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Some verses in the Quran begin with mysterious individual
                  letters or combinations of letters, known as the "Muqatta'at"
                  (disconnected letters). Their meaning is debated, but in
                  Chapter 27 (Surah An-Naml - The Ants), a fascinating numerical
                  pattern has been observed relating these letters to the
                  chapter itself.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    The Case of Chapter 27 (An-Naml)
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    This chapter begins with the letters "T ط" and "S س".
                    Interestingly, counts of these letters within this specific
                    chapter reveal:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-800 dark:text-green-200 mb-2">
                          27
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Times "T ط" appears in Chapter 27
                        </p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-800 dark:text-green-200 mb-2">
                          93
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Times "S س" appears in Chapter 27
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    What makes this pattern particularly striking is that
                    Chapter 27 is... well, chapter <strong>27</strong>, and it
                    contains <strong>93</strong> verses! It's as if the chapter
                    number (27) and the total number of verses (93) are
                    "encoded" within the frequency of these specific opening
                    letters in that chapter.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/27/93"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 27:93
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And say, 'Praise belongs to Allah;{" "}
                        <span className="font-bold">
                          He will show you His signs, and you will recognize
                          them
                        </span>
                        . Your Lord is not heedless of what you do.'"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٩٣ وَقُلِ الْحَمْدُ لِلَّهِ سَيُرِيكُمْ آيَاتِهِ
                        فَتَعْرِفُونَهَا ۚ وَمَا رَبُّكَ بِغَافِلٍ عَمَّا
                        تَعْمَلُونَ
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                    This verse, itself the <strong>93rd</strong> verse of the{" "}
                    <strong>27th</strong> chapter (the very numbers seemingly
                    encoded by the 'T' and 'S' counts), speaks of future signs
                    from God that people will recognize. Could this numerical
                    pattern be one such sign revealed in our modern era?
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Question from the 7th Century
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  This observed pattern in Chapter 27 of the Quran, linking the
                  frequency of specific letters to the chapter and verse counts,
                  presents a fascinating point for contemplation.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a text originating in the 7th century contain such
                    a subtle, mathematical pattern that seems to "encode"
                    information like chapter and verse numbers?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The arrangement of the Quran into its current chapters and
                    verses was finalized after the lifetime of the Prophet
                    Muhammad (peace be upon him), who received the revelation.
                    This means the specific numbering of Chapter 27 and its 93
                    verses would not have been known during the initial
                    revelation period.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Without modern counting methods, statistical analysis, or
                      the concept of digital encoding, discovering such a
                      pattern would have been impossible in the 7th century.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Discovery</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The presence of this numerical correlation within the text
                      itself, discovered through counting characters (akin to
                      modern data analysis), is remarkable.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Therefore, the presence of this numerical correlation within
                  the text itself, discovered through counting characters (a
                  concept akin to modern data analysis and encoding), is seen by
                  some as a remarkable sign. It's a pattern that aligns
                  intriguingly with the message of Quran 27:93 – that signs will
                  be shown and recognized.
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
              <Code className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Patterns and Meaning
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Discoveries in various fields continue to reveal intriguing
              connections that invite deeper reflection.
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

export default EncodingTopic;
