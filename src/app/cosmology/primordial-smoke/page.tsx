/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  Cloud,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Atom,
} from "lucide-react";

const PrimordialSmokePage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Universe's Smoky Dawn",
        icon: Cloud,
      },
      {
        id: "science",
        title: "Scientific Perspective",
        icon: Atom,
      },
      {
        id: "quran",
        title: "Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Point of Wonder",
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
              <Cloud className="text-slate-600 dark:text-slate-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Primordial Smoke
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cosmology • Medium
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
                  The Universe's Smoky Dawn
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Imagine a time, over 1400 years ago, when our understanding of
                  the cosmos was vastly different. Yet, the Quran described the
                  early state of the universe as "smoke" (Dukhan). This
                  description is remarkably profound, especially considering the
                  scientific knowledge available in the 7th century.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Gaseous Beginning
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    While some ancient texts speak of light appearing at the
                    very dawn of creation, modern science reveals a different
                    picture. The early universe, shortly after the Big Bang, was
                    not transparent. It was a hot, dense, opaque soup of
                    particles, much like smoke, which would have scattered or
                    absorbed light, preventing it from traveling freely.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Cloud
                        size={20}
                        className="text-slate-500 dark:text-slate-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Opaque State
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      For roughly 380,000 years, the universe was too hot for
                      neutral atoms to form. Free electrons scattered photons,
                      making the universe opaque, much like smoke.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sparkles
                        size={20}
                        className="text-slate-500 dark:text-slate-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Era of Recombination
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Only when the universe cooled sufficiently did protons and
                      electrons combine to form neutral hydrogen atoms, allowing
                      light to travel freely.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Perspective: The Opaque Early Universe
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The first 380,000 years the universe was opaque to visible
                    light (non-transparent) and photons couldn't travel at all.
                    Few minutes after the Big Bang the universe was primarily
                    Hydrogen and Helium. But when a gas is too hot it becomes
                    ionized (loses the electrons) and becomes opaque (like
                    today's smoke). In the beginning the universe was opaque to
                    visible light."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Based on astrophysical research on the Cosmic Microwave
                    Background
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Initial Dense State</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The universe began in an incredibly hot, dense state where
                      matter and energy were concentrated in a small space.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Smoke-like Properties</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      As Science journal noted in 2010: "the universe was like a
                      smoke-filled chamber from which light could not escape."
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Gradual Clearing</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      It took 380,000 years for the universe to cool enough to
                      become transparent to visible light, allowing stars and
                      galaxies to become visible.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This scientific understanding of the universe's initial
                  opaque, smoke-like state was only established in the 20th
                  century, yet ancient texts described similar concepts.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Account: The Heaven as 'Dukhan' (Smoke)
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/41/11"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 41:11 (Surah Fussilat)
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Then He directed Himself to the heaven while it was
                        smoke and said to it and to the earth, 'Come [into
                        being], willingly or by compulsion.' They said, 'We have
                        come willingly.'"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ فَقَالَ
                        لَهَا وَلِلْأَرْضِ ائْتِيَا طَوْعًا أَوْ كَرْهًا
                        قَالَتَا أَتَيْنَا طَائِعِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Term: دُخَانٌ (Dukhan)
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic word "دُخَانٌ" (Dukhan) used in this verse
                    translates to "smoke." This description of the early heaven
                    (or sky, universe) as smoke aligns remarkably with the
                    scientific understanding of its hot, gaseous, and opaque
                    nature. At a time when such cosmic understanding was
                    non-existent, the Quran's choice of this specific word is
                    deeply significant.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This isn't a vague or ambiguous term, but a direct
                    description that resonates with the findings of modern
                    cosmology. The Quranic description of heavens and Earth
                    being created from this smoky state perfectly matches our
                    understanding of the early universe's opaque,
                    particle-filled nature.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point of Wonder: Divine Knowledge?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The alignment between the Quran's 1400-year-old description
                  and modern scientific discoveries about the early universe
                  naturally leads to a profound question:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could Prophet Muhammad (peace be upon him), living in
                    7th century Arabia, have known that the early universe was
                    like 'smoke'?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    This knowledge wasn't the result of scientific observation
                    or philosophical speculation of that era. The tools and
                    understanding required to deduce the opaque, smoky state of
                    the primordial universe only became available in the modern
                    age of astrophysics.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of cosmology
                      was limited. The precise description of cosmic origins as
                      a smoky state shows remarkable insight into the universe's
                      fundamental nature.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's cosmological research confirms exactly what the
                      Quran described: the universe began from a smoky, opaque
                      state that gradually became transparent.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  For believers, such instances are seen as signs of the divine
                  origin of the Quran, containing knowledge that transcends
                  human capabilities of the time. This is one of many examples
                  where the Quran touches upon aspects of the natural world with
                  an accuracy that continues to inspire awe and reflection as
                  scientific knowledge progresses.
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
              <Cloud className="text-slate-600 dark:text-slate-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Reflecting on Cosmic Origins
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The Quran's timeless verses offer insights that resonate deeply
              with our understanding of the universe, encouraging contemplation
              and faith.
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
          className="bg-slate-600 dark:bg-slate-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PrimordialSmokePage;
