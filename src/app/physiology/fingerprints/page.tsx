/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Fingerprint,
  ChevronRight,
  Microscope,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const FingerprintsPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Unique Fingerprints",
        icon: Fingerprint,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Microscope,
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
              <Fingerprint
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Fingerprints
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
                  Unique Fingerprints
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  1400 years ago, nobody knew that each person has unique
                  fingerprints. However, this fact appears to be referenced in
                  the Quran. Today, fingerprint uniqueness is a cornerstone of
                  modern identification systems.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Individual Identity Markers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Even identical twins with identical DNA have different
                    fingerprints. These unique patterns develop in the womb and
                    remain largely unchanged throughout a person's lifetime,
                    making them one of nature's most reliable forms of
                    identification.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Evidence
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Human fingerprints are detailed, unique, difficult to
                    alter, and durable over the life of an individual, making
                    them suitable as long-term markers of human identity. They
                    may be employed by police or other authorities to identify
                    individuals who wish to conceal their identity, or to
                    identify people who are incapacitated or dead and thus
                    unable to identify themselves, as in the aftermath of a
                    natural disaster."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Fingerprint, 2025
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Historical Discovery</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The scientific understanding of fingerprint uniqueness
                      developed primarily in the late 19th century. Systematic
                      fingerprint identification systems weren't implemented
                      until the 1890s, more than 1200 years after the Quran was
                      revealed.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Modern Applications</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today, fingerprints are used globally for identification
                      in law enforcement, border control, and even to unlock
                      smartphones. Their uniqueness and permanence make them
                      ideal biometric identifiers.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The scientific discovery of fingerprint uniqueness was made
                  centuries after the Quranic revelation. In 7th century Arabia,
                  there was no widespread knowledge or technology to determine
                  that fingerprints were unique to each individual, yet the
                  Quran appears to reference this feature of human anatomy.
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
                      href="https://quran.com/en/75/4"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 75:4
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Yes indeed; We are Able to reconstruct his fingertips."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤ بَلَىٰ قَادِرِينَ عَلَىٰ أَنْ نُسَوِّيَ بَنَانَهُ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    The verse specifically mentions "banānahu بَنَانَهُ"
                    (fingertips) rather than using a general term for the hand
                    or fingers. This attention to the specific detail of
                    fingertips is noteworthy, as it highlights a feature that
                    would later be discovered to contain unique identification
                    markers for each person.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    Context of Perfect Reconstruction
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The verse appears in the context of discussing resurrection,
                    indicating that Allah has the power to reconstruct humans
                    completely, down to the finest details of their fingertips.
                    This specific mention of fingertips draws attention to their
                    importance, which scientific discovery would later confirm.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The specific mention of fingertips in the Quran raises an
                  intriguing question:
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man who lived 1400 years ago have known about the
                    significance of fingertips?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In 7th century Arabia, there was no technology to detect or
                    understand that fingerprints are unique to each individual.
                    The specific mention of fingertips, rather than just general
                    human features, suggests a knowledge that would not become
                    scientifically established until more than a millennium
                    later.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The connection between this ancient text and modern scientific
                  discovery invites contemplation about the origins of
                  knowledge. The Quran's specific mention of fingertips in the
                  context of perfect reconstruction draws attention to a feature
                  that would later be recognized as one of the most distinctive
                  and unique aspects of human identity.
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
                Exploring Human Identity
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The wonders of human creation continue to unfold, connecting
              ancient revelations with modern scientific discoveries.
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

export default FingerprintsPage;
