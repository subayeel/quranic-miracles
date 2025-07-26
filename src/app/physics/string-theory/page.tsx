/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  Atom,
  Layers,
  HelpCircle,
  ArrowUp,
  Infinity,
} from "lucide-react";

const StringTheoryDay = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Cosmic Strings",
        icon: Sparkles,
      },
      {
        id: "dimensions",
        title: "Dimensions & Heavens",
        icon: Layers,
      },
      {
        id: "smallest-particle",
        title: "The Cosmic Thread",
        icon: Atom,
      },
      {
        id: "reflection",
        title: "Contemplation",
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
              <Infinity
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  String Theory
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Physics • Medium
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
                  Cosmic Strings: A New View of Reality
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Imagine the tiny building blocks of our universe aren't
                  points, but tiny, vibrating strings! That's the exciting idea
                  behind String Theory, a complex scientific framework that
                  tries to explain everything about the cosmos. It suggests a
                  reality far richer and perhaps stranger than we usually think.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    More Than Just Points
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Instead of fundamental particles being zero-dimensional
                    points, String Theory proposes they are one-dimensional
                    "strings". Like the strings on a musical instrument, how
                    they vibrate determines the particle's properties, including
                    its mass and energy. It's a fascinating concept that could
                    unify the laws of physics!
                  </p>
                </div>
              </section>

              {/* Dimensions and Heavens */}
              <section id="dimensions" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Many Dimensions, Many 'Heavens'?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  One of the most mind-bending aspects of String Theory is the
                  idea of extra dimensions. While we experience four dimensions
                  (three of space and one of time), String Theory suggests there
                  are many more!
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In most versions of String Theory, the universe exists in
                    10 dimensions: the familiar 4 dimensions we experience (time
                    and three spatial dimensions) and 6 additional spatial
                    dimensions."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Modern Physics
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  These 6 extra dimensions are thought to be "compactified" or
                  curled up at incredibly small scales, making them undetectable
                  to us in everyday life. Interestingly, String Theory proposes
                  that mass resides within these extra dimensions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Layers
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Our Observable Universe
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The 4 dimensions we can see and move through are often
                      referred to as our "brane" or universe. In the context of
                      relating this to ancient texts, one might consider this as
                      the "first heaven".
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Infinity
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Six More "Heavens"?
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The idea that mass exists within each of the 6 extra
                      dimensions has led some to draw parallels to the concept
                      of superimposed "heavens." If each extra dimension holding
                      mass constitutes a 'heaven,' this aligns remarkably with
                      the concept of seven heavens found in religious texts.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mb-8">
                  <h4 className="font-medium mb-2">A Nod from Hawking</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Here's Stephen Hawking's final theory about the Big Bang...
                    The theory, which was submitted for publication before
                    Hawking's death earlier this year, is based on string theory
                    and predicts the universe is finite and far simpler than
                    many current theories about the big bang say." —{" "}
                    <a
                      href="https://www.universetoday.com/139167/heres-stephen-hawkings-final-theory-about-the-big-bang/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Universe Today, 2018
                    </a>
                  </p>
                </div>
              </section>

              {/* The Smallest Particle */}
              <section id="smallest-particle" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  From Cosmic Strings to a "Wick"?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In String Theory, the properties of a particle, particularly
                  its mass, are determined by how its tiny string vibrates. This
                  concept of a fundamental, vibrating entity giving rise to
                  everything we see is central to the theory.
                </p>
                <blockquote className="border-l-4 border-green-500 pl-6 py-4 mb-8 bg-green-50 dark:bg-green-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In physics, string theory is a theoretical framework in
                    which the point-like particles of particle physics are
                    replaced by one-dimensional objects called strings. On
                    distance scales larger than the string scale, a string looks
                    just like an ordinary particle, with its mass, charge, and
                    other properties determined by the vibrational state of the
                    string."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/String_theory"
                      className="text-green-600 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, String Theory, 2019
                    </a>
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Surprisingly, when we look at the Quran, revealed over 1400
                  years ago, we find a verse that speaks about the smallest unit
                  in a remarkable way.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/4/49"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 4:49
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Have you not considered those who claim purity for
                        themselves? Rather, Allah purifies whom He wills, and
                        they will not be wronged by a wick."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٩ أَلَمْ تَرَ إِلَى الَّذِينَ يُزَكُّونَ أَنْفُسَهُمْ ۚ
                        بَلِ اللَّهُ يُزَكِّي مَنْ يَشَاءُ وَلَا يُظْلَمُونَ
                        فَتِيلًا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Word
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic word used here is "Fateel" (فَتِيلًا), which
                    literally means "wick" or the thread inside a date stone. It
                    refers to something incredibly small and seemingly
                    insignificant. The verse implies that even by the measure of
                    this smallest thing (a wick), no one will be wronged.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    The Quranic reference to the smallest unit being akin to a
                    "wick" – a fibrous, thread-like structure – presents a
                    striking, albeit conceptual, parallel to the "string" in
                    String Theory being the most fundamental entity whose
                    vibrations determine mass and reality.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Glimpse Beyond the Horizon?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific understanding available in the 7th
                  century, ideas like multiple spatial dimensions or fundamental
                  particles being vibrating strings were simply unimaginable.
                  The concept of mass being associated with extra dimensions was
                  also far beyond the knowledge of the time.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a text from 1400 years ago allude to concepts
                    resembling String Theory's dimensions, heavens, and the
                    fundamental particle?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quran's mention of seven heavens and the specific term
                    "Fateel" (wick) for the smallest measurable entity, viewed
                    alongside modern String Theory's postulates of 10 dimensions
                    (potentially seven 'layers' or heavens) and fundamental
                    vibrating strings, offers a fascinating point of reflection.
                    This apparent consonance between ancient scripture and
                    cutting-edge physics invites contemplation about the source
                    of such profound knowledge.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This correlation serves as an invitation to ponder the depth
                  of the Quran's message, which seems to contain insights that
                  resonate with scientific discoveries made centuries later,
                  particularly concerning the fundamental nature and structure
                  of the universe.
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
              <Infinity
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring the Cosmos and Beyond
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Contemplating the universe's fundamental structure through the
              lens of both modern science and ancient scripture.
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

export default StringTheoryDay;
