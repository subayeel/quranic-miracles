/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Bone,
  Shield,
  BookOpen,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const PharaohMummy = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Introduction",
        icon: Bone,
      },
      {
        id: "armor",
        title: "Heavy Armor",
        icon: Shield,
      },
      {
        id: "discovery",
        title: "Mummy Discovery",
        icon: Bone,
      },
      {
        id: "quran",
        title: "Quranic Revelation",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Sign for Humankind",
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
              <Bone className="text-teal-600 dark:text-teal-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Pharaoh's Body
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
                  Introduction
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The story of Prophet Moses and the Pharaoh is well-known.
                  Interestingly, there's a point of discussion regarding the
                  Pharaoh's fate and body that highlights a fascinating aspect
                  when comparing historical accounts and modern discoveries with
                  a specific verse in the Quran.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Question of Survival
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    A common narrative suggests the Pharaoh drowned in the Red
                    Sea. This raises a question: what happened to his body?
                    Could it have survived and been found later?
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Let's explore what historical records tell us about ancient
                  Egyptian military equipment and modern archaeological
                  discoveries.
                </p>
              </section>

              {/* Heavy Armor */}
              <section id="armor" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Heavy Armor
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Historical records tell us about the military equipment used
                  in ancient Egypt. While common soldiers often wore minimal
                  armor due to the climate, the Pharaohs were an exception.
                </p>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Defensive Equipment of the Egyptian Army: ...the pharaohs
                    were, not surprisingly, the exception."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Tour Egypt, Defensive Equipment of the Egyptian Army, 2019
                  </cite>
                </blockquote>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Military of ancient Egypt: The pharaohs often wore scale
                    armour with inlaid semi-precious stones, which offered
                    better protection, the stones being harder than the metal
                    used for arrow tips."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Military of ancient Egypt, 2018
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This scale armor, made of materials like copper and iron
                  scales sewn onto leather and fabric, often decorated with
                  heavy semi-precious stones, would have been quite dense.
                  Someone wearing such heavy armor would likely sink if
                  submerged in water, rather than float.
                </p>
              </section>

              {/* Mummy Discovery */}
              <section id="discovery" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Mummy Discovery
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Archaeological discoveries over the centuries have unearthed
                  the mummified remains of many Egyptian Pharaohs.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Where Are the Mummies Found?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Significantly, all known mummies of the Pharaohs from the
                    era traditionally associated with Moses have been found
                    inland, typically in tombs or burial sites along the Nile.
                    There is no record or discovery of a Pharaoh's mummy found
                    at the bottom of the Red Sea.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Given the heavy armor, if the Pharaoh drowned at sea, his
                    body would likely have sunk, and retrieving it from the sea
                    floor 1400 years ago would have been technologically
                    impossible. This raises the question: if he drowned and
                    sank, how was his body later preserved and found inland?
                  </p>
                </div>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Revelation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Let's look at what the Quran says about the Pharaoh's fate.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/10/92"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 10:92
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "So this day We shall save you in your body, so that you
                        may be a sign to those who come after you. And verily,
                        many among mankind are heedless of Our Signs."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٩٢ فَالْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ
                        خَلْفَكَ آيَةً ۚ وَإِنَّ كَثِيرًا مِنَ النَّاسِ عَنْ
                        آيَاتِنَا لَغَافِلُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    This verse states that Allah would "save you in your body"
                    (نُنَجِّيكَ بِبَدَنِكَ - 'Nunajjika bibadanik'),
                    specifically so the body would be a sign for future
                    generations. Considering the heavy armor the Pharaoh wore,
                    which would cause him to sink, the "saving" mentioned in the
                    Quran points towards a preservation of the body that allowed
                    it to be found later, contrary to the expectation of it
                    being lost at sea.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Sign for Humankind
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The connection between the Quranic verse, historical facts
                  about Pharaoh's armor, and modern archaeological discoveries
                  presents a thought-provoking perspective.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    Considering the Knowledge Available in the 7th Century...
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century CE, at the time of the Quran's
                    revelation, detailed knowledge about the specific types of
                    heavy armor worn by ancient Egyptian Pharaohs, the physics
                    of how such armor would affect a body in water, and the
                    future discovery of all mummies inland through systematic
                    archaeology was simply unavailable. There was no scientific
                    or historical consensus on the Pharaoh's ultimate fate or
                    the state of his body.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    The Quranic statement in verse 10:92, emphasizing the
                    preservation of the body as a "sign," aligns remarkably with
                    the later discoveries of Pharaohs' mummies inland,
                    contradicting the natural expectation that a heavily armored
                    body drowned at sea would be lost forever.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This convergence between an ancient scripture and subsequent
                  historical and scientific findings invites contemplation. It
                  highlights the Quran's mention of a specific outcome – the
                  body being saved as a sign – at a time when such a detail,
                  particularly in contrast to common assumptions, would have
                  been unknown. It is presented as one of the many signs for
                  those who reflect.
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
                className="text-teal-600 dark:text-teal-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Reflecting on Signs
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring how historical accounts, archaeological discoveries, and
              ancient texts intersect.
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
          className="bg-teal-600 dark:bg-teal-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PharaohMummy;
