/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Scroll,
  HistoryIcon,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const MourningPharaoh = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Mourning of Pharaoh",
        icon: Scroll,
      },
      {
        id: "hieroglyphs",
        title: "Egyptian Hieroglyphs",
        icon: HistoryIcon,
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
              <Scroll
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Mourning of Pharaoh
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
                  Mourning of Pharaoh
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In the Quran, there's a peculiar mention that the skies didn't
                  weep for Pharaoh. Skeptics claim that whoever wrote the Quran
                  made a mistake; no one claimed that the sky wept for Pharaohs.
                  Today, Egyptologists have found hieroglyphs revealing that
                  ancient Egyptians indeed believed the sky wept for their
                  deceased Pharaohs.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Egyptian Funerary Beliefs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Ancient Egyptians had complex beliefs regarding the death of
                    their Pharaohs. These beliefs were recorded in hieroglyphic
                    texts that remained undeciphered for centuries after the
                    Quran was revealed. Only after the decipherment of
                    hieroglyphs in the 1820s did scholars discover that
                    Egyptians believed the sky mourned when a Pharaoh died.
                  </p>
                </div>
              </section>

              {/* Egyptian Hieroglyphs */}
              <section id="hieroglyphs" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Egyptian Hieroglyphs
                </h2>
                <blockquote className="border-l-4 border-amber-500 pl-6 py-4 mb-8 bg-amber-50 dark:bg-amber-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Egyptian Hieroglyphs: With the final closing of pagan
                    temples in the 5th century, knowledge of hieroglyphic
                    writing was lost. Although attempts were made, the script
                    remained undeciphered throughout the Middle Ages and the
                    early modern period. The decipherment of hieroglyphic
                    writing was finally accomplished in the 1820s by
                    Jean-Francois Champollion, with the help of the Rosetta
                    Stone."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Egyptian hieroglyphs, 2020
                  </cite>
                </blockquote>
                <blockquote className="border-l-4 border-amber-500 pl-6 py-4 mb-8 bg-amber-50 dark:bg-amber-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "When hieroglyphs were finally deciphered they found out how
                    Egyptians mourned their Pharaoh. A pyramid text describing
                    the dead Pharaoh's fight for supremacy in heaven, says: The
                    sky weeps, the stars shake, the keepers of the gods tremble
                    and their servants flee when they behold the King rising up
                    as spirit, as a god who lives on his fathers and possesses
                    his mothers."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Symbols of Transformation, C.G. Jung, Volume 5 page 1757
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Scroll
                        size={20}
                        className="text-amber-500 dark:text-amber-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Lost Knowledge
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The ability to read Egyptian hieroglyphs was completely
                      lost for over 1,000 years. During the time of Prophet
                      Muhammad (7th century CE), no one in the world could
                      decipher these ancient writings.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <HistoryIcon
                        size={20}
                        className="text-gray-500 dark:text-gray-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Modern Discovery
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      It wasn't until the 19th century that Champollion's
                      breakthrough with the Rosetta Stone allowed scholars to
                      learn that ancient Egyptians believed the sky wept when a
                      Pharaoh died.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The historical timeline is crucial: knowledge of hieroglyphic
                  writing was lost in the 5th century CE, the Quran was revealed
                  in the 7th century CE, and hieroglyphs weren't deciphered
                  until the 19th century. Only after decipherment did scholars
                  discover texts stating "the sky weeps" for dead Pharaohs.
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
                      href="https://quran.com/en/44/29"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 44:29
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Neither heaven nor earth wept over them, nor were they
                        reprieved."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ وَمَا
                        كَانُوا مُنْظَرِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    "فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ" (Neither
                    heaven nor earth wept over them) directly addresses the
                    ancient Egyptian belief that the sky would weep for their
                    deceased Pharaoh. The Quran specifically contradicts this
                    belief, stating that when the Pharaoh and his people were
                    drowned, the sky did not weep for them.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Historical Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This verse appears to be responding to an ancient Egyptian
                    belief that was documented in hieroglyphic texts - that the
                    sky would weep when a Pharaoh died. The Quran is negating
                    this belief, stating that for this particular Pharaoh
                    (associated with Moses in Islamic tradition), the sky did
                    not weep.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The connection between the Quranic verse and Egyptian
                  hieroglyphic texts that remained undeciphered for over a
                  millennium after the Quran's revelation raises an intriguing
                  question:
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man who lived 1400 years ago have known about the
                    mourning of Pharaoh?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The reference to heavens not weeping for the Pharaoh appears
                    to address a belief that was recorded in Egyptian
                    hieroglyphs - texts that were completely unreadable to
                    anyone in the world during the 7th century CE when the Quran
                    was revealed. The understanding of hieroglyphic writing had
                    been lost centuries earlier and wouldn't be recovered until
                    the 1820s.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  This historical context is significant because:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                  <li>
                    Knowledge of hieroglyphic writing was lost in the 5th
                    century CE
                  </li>
                  <li>The Quran was revealed in the 7th century CE</li>
                  <li>Hieroglyphs weren't deciphered until the 19th century</li>
                  <li>
                    Only after decipherment did scholars discover texts stating
                    "the sky weeps" for dead Pharaohs
                  </li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Quranic reference to heaven not weeping for the Pharaoh
                  appears to be addressing a belief that would have been unknown
                  to people living in 7th century Arabia. This connection
                  between ancient Egyptian beliefs and the Quranic text invites
                  contemplation about the origins of knowledge contained within
                  the Quran.
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
              <Scroll
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Ancient Knowledge
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Discovering connections between ancient beliefs, sacred texts, and
              modern archaeological findings.
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

export default MourningPharaoh;
