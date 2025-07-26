/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  User,
  LayoutPanelLeft,
  BookOpen,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const MosesName = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Mystery of a Name",
        icon: User,
      },
      {
        id: "egyptian",
        title: "Ancient Egyptian Meaning",
        icon: LayoutPanelLeft,
      },
      {
        id: "quran",
        title: "Quranic Verse",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: Sparkles,
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
              <User
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Prophet Moses (Musa)
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
                  The Mystery of a Name
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Prophet Moses (peace be upon him), known as Musa in Arabic, is
                  a central figure in Abrahamic faiths. His name, "Moses" or
                  "Moshe" in Hebrew, is often associated with a meaning like "to
                  draw out" or "to pull out" from water, relating to the story
                  of his rescue from the Nile.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Hebrew vs. Egyptian Origins
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Interestingly, the Bible suggests his name was given by
                    Pharaoh's daughter, who was Egyptian, not Hebrew. This
                    raises a question: what might his name have meant in the
                    Egyptian language of that time? For centuries, the primary
                    understanding came from the Hebrew interpretation.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Let's delve into what modern discoveries tell us about ancient
                  Egyptian names and how they might connect to the name given to
                  Moses by Pharaoh's household.
                </p>
              </section>

              {/* Ancient Egyptian Meaning */}
              <section id="egyptian" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Ancient Egyptian Meaning
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern Egyptology has shed fascinating light on the language
                  of ancient Egypt, helping us understand the meaning of names
                  from that era.
                </p>
                <blockquote className="border-l-4 border-teal-500 pl-6 py-4 mb-8 bg-teal-50 dark:bg-teal-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Ms was used as a name or as part of a name for very many
                    people in the New Kingdom period of ancient Egyptian
                    history... Ms means 'to give birth'... Used alone, this
                    could mean 'the one who has been born' or more specifically
                    'newborn'."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Stephen Quirke, British Egyptologist
                  </cite>
                </blockquote>
                <blockquote className="border-l-4 border-teal-500 pl-6 py-4 mb-8 bg-teal-50 dark:bg-teal-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The American Egyptologist James Hoffmeier... seems to
                    support these two meanings 'the one who has been born' and
                    '(newborn) child.'"
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — TreeSparks, What Does The Name Moses (Musa or Moshe)
                    Actually Mean?, 2017
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This modern research indicates that the root "Ms" in ancient
                  Egyptian means "to give birth," and when used as a name like
                  "Moses," it means "the one who has been born" or simply
                  "newborn." This aligns perfectly with the context of a baby
                  found and adopted.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Verse
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now, let's look at a verse from the Quran where Pharaoh speaks
                  to Moses.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/26/18"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 26:18
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        [Pharaoh] said, "Did we not raise you among us as a
                        newborn? and you stayed among us for many of your
                        years?"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٨ قَالَ أَلَمْ نُرَبِّكَ فِينَا وَلِيدًا وَلَبِثْتَ
                        فِينَا مِنْ عُمُرِكَ سِنِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Word
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In this verse, Pharaoh refers to Moses using the Arabic word
                    "Waleed (وَلِيدًا)". This word specifically means "newborn"
                    or "a young infant."
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point to Ponder
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Here's where it gets truly thought-provoking. Modern
                  Egyptology has revealed that the name "Moses" likely meant
                  "newborn" in ancient Egyptian, fitting the narrative of his
                  life.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    Connecting Ancient Knowledge and Scripture
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quran, revealed in the 7th century CE, refers to Moses
                    using the term "Waleed," meaning "newborn," in the context
                    of Pharaoh's statement about raising him. At that time (the
                    7th century), the specific meaning of the name "Moses" in
                    ancient Egyptian was unknown to the wider world and
                    certainly not common knowledge. Egyptology as a field
                    developed much later, and the decipherment of hieroglyphs
                    that allowed for understanding ancient Egyptian names is a
                    relatively modern achievement.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Quran's use of the term "Waleed" aligns remarkably with
                  the meaning of Moses' name in the language of the very
                  household that named him, a fact that wasn't rediscovered
                  until centuries later. This connection between a word used in
                  the 7th-century text and a meaning derived from modern
                  linguistic and archaeological work on ancient Egyptian
                  language is a point many find compelling and worthy of
                  reflection.
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
                Exploring History and Scripture
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Discovering fascinating connections across time and knowledge.
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

export default MosesName;
