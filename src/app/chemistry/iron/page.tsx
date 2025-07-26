/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Atom,
  ChevronRight,
  Star,
  BookOpen,
  HelpCircle,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const IronMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Iron: Sent Down",
        icon: Star,
      },
      {
        id: "science",
        title: "Scientific Discoveries",
        icon: Atom,
      },
      {
        id: "quran",
        title: "Quranic Connections",
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
              <Atom className="text-gray-600 dark:text-gray-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  The Miracle of Iron
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Chemistry • Advanced
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
                  Iron: Sent Down from Above?
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In the Quran, there's a fascinating mention of iron being
                  "sent down." This might seem like an unusual description,
                  especially considering the common understanding of iron in the
                  7th century.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    7th Century Perspective vs. Quranic Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, people knew iron as a metal found within
                    the Earth. They knew it could be mined, heated, and shaped.
                    They also knew its limitations – it rusts and can be bent.
                    The idea of it being "sent down" from above would have been,
                    to say the least, counter-intuitive.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Star
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Ancient Understanding
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      People in the 7th century understood iron as an earthly
                      metal that could be mined, heated, and shaped, but also
                      knew it rusted and could be bent.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Atom
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Modern Science
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Today we understand that iron originates from stars and
                      possesses unique nuclear properties that make it
                      incredibly stable and powerful.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Discoveries
                </h2>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 mb-8 bg-purple-50 dark:bg-purple-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Iron and most of the elements on Earth came from outer
                    space."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Learn more about stellar nucleosynthesis (General
                    Reference)
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Cosmic Origin</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Modern astrophysics confirms that iron is predominantly
                      forged in the hearts of massive stars and expelled during
                      supernova explosions.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Great Might</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Iron-56 has the most stable nucleus of all elements,
                      making it incredibly stable from a nuclear physics
                      perspective.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Deep Below</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Iron is incredibly abundant on Earth, with a vast amount
                      concentrated at its core, forming the planet's solid inner
                      structure.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This scientific understanding of iron's cosmic origin and
                  nuclear properties was only fully established in recent
                  decades, yet it was mentioned in the Quran 1400 years ago.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Connections
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/57/25"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 57:25
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "We have already sent Our messengers with clear
                        evidences and sent down with them the Scripture and the
                        balance that the people may maintain [their affairs] in
                        justice. And We sent down iron, wherein is great might
                        and for [its] benefits to the people, and that Allah may
                        make evident who supports Him and His messengers unseen.
                        Indeed, Allah is Powerful and Exalted in Might."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٢٥ لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ
                        وَأَنزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ لِيَقُومَ
                        النَّاسُ بِالْقِسْطِ ۖ وَأَنزَلْنَا الْحَدِيدَ فِيهِ
                        بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ وَلِيَعْلَمَ
                        اللَّهُ مَن يَنصُرُهُ وَرُسُلَهُ بِالْغَيْبِ ۚ إِنَّ
                        اللَّهُ قَوِيٌّ عَزِيزٌ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Notice the phrase translated as "And We sent down iron"
                    (وَأَنزَلْنَا الْحَدِيدَ - Wa anzalna al-hadeed). The word
                    "Anzalna" (أَنزَلْنَا) comes from the root "Nazala" (نزل),
                    which means "to send down" or "to cause to descend." This is
                    the same word used for sending down rain or scriptures from
                    the heavens.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Numerical Correspondences
                    </h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <li>
                        The chapter (Surah) where this verse appears is Chapter
                        57, titled "Al-Hadeed" (The Iron).
                      </li>
                      <li>
                        The gematrical value of the Arabic words for "Iron"
                        (حديد - Hadeed) is 26. Iron's atomic number is also 26.
                      </li>
                      <li>
                        The gematrical value of "Al-Hadeed" (الْحَدِيدَ) is 57,
                        matching the chapter number and Iron's stable isotope
                        ⁵⁷Fe.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Iron in the Earth's Core
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Some researchers point to a potential numerical link
                      between the Quran and the depth of iron within the Earth.
                      The verse about iron is approximately the 5100th verse
                      from the beginning of the Quran, and the solid iron core
                      of the Earth is found at a depth of approximately 5100
                      kilometers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the context of the 7th century:
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could these facts about iron—its cosmic origin, the
                    nuclear stability of its nucleus, and these numerical
                    correspondences—have been known?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The knowledge that iron originates from stars crashing down
                    into the universe, and that it possesses the strongest
                    nuclear binding energy—facts understood only through
                    advanced modern physics and astronomy—appears in a text from
                    a time when the common understanding of iron was limited to
                    its earthly properties.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of
                      astrophysics, nuclear physics, and the cosmic origin of
                      elements was completely unknown. The precise description
                      of iron's origin shows remarkable insight.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's scientific research confirms exactly what the
                      Quran described: that iron did indeed come from outer
                      space and possesses unique nuclear properties that give it
                      "great might."
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This remarkable alignment between ancient scripture and modern
                  science invites deep reflection on the nature of the Quran's
                  knowledge and its potential divine origin.
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
                className="text-gray-600 dark:text-gray-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Miracles in the Quran
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Connections between ancient text and modern scientific
              understanding continue to emerge, revealing the depth of knowledge
              contained within the Quran.
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
          className="bg-gray-600 dark:bg-gray-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default IronMiracle;
