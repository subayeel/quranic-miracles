/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Gem,
  ChevronRight,
  FlaskConical,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const PyritizedFossils = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Fossils of Rock and Iron",
        icon: Gem,
      },
      {
        id: "science",
        title: "Scientific Discovery",
        icon: FlaskConical,
      },
      {
        id: "quran",
        title: "Quranic Insight",
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
              <Gem className="text-amber-600 dark:text-amber-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Pyritized Fossils
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
                  Fossils of Rock and Iron
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Imagine ancient creatures turning not just to stone, but even
                  to iron! This amazing process happens in nature. Skeptics
                  might think it's impossible for living things to become rock
                  or iron after death, but modern science has shown us
                  otherwise.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Life Transformed into Minerals
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Fossilization is the incredible process where organic
                    remains are replaced by minerals, preserving them over vast
                    periods. One fascinating type is pyritization, where fossils
                    are replaced by pyrite, a mineral composed of iron and
                    sulfur. This essentially turns the ancient life form into a
                    form of "rock and iron".
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Gem
                        size={20}
                        className="text-amber-500 dark:text-amber-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Natural Process
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Fossilization occurs naturally when organic material is
                      replaced by minerals over millions of years, preserving
                      the original structure in stone-like form.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <FlaskConical
                        size={20}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Pyritization
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      A specific type of fossilization where organic remains are
                      replaced by pyrite (iron sulfide), essentially turning
                      ancient life into iron-containing rock.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Discovery
                </h2>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Pyrite, often called Fool's Gold, is an iron sulfide, and a
                    very common mineral... Pyrite replacement of fossils is
                    often caused by bacteria, in a process called
                    permineralization..."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://www.rockhoundtimes.com/articles_html/how_pyritized_fossils_form.html"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rockhound Times, How Pyritized Fossils Form, 2021
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Pyrite is Iron Sulfide</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Pyrite is a common mineral made of iron and sulfur (FeS₂).
                      This mineral can replace the organic material in buried
                      remains.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Permineralization Process
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Often driven by bacteria, minerals like pyrite from
                      groundwater fill the pores and replace the tissues of dead
                      organisms, preserving their form as fossils.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Scientific Validation</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This scientific explanation tells us that ancient life
                      forms can indeed turn into a mineral made of iron and
                      sulfur – which we commonly know as pyrite, or "Fool's
                      Gold."
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  So, a creature's remains can literally become "iron" embedded
                  within rock through this natural process. This phenomenon,
                  while understood today, was unknown to people in the 7th
                  century.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Insight
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/17/49"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 17:49-50
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And they say, 'When we have become bones and fragments,
                        shall we really be resurrected as a new creation?' Say,
                        'Even if you become rocks or iron.'"
                      </p>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300">
                        Indeed, it is a noble Quran.
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٩ وَقَالُوا أَإِذَا كُنَّا عِظَامًا وَرُفَاتًا أَإِنَّا
                        لَمَبْعُوثُونَ خَلْقًا جَدِيدًا
                      </p>
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٥٠ قُلْ كُونُوا حِجَارَةً أَوْ حَدِيدًا
                      </p>
                      <p
                        dir="rtl"
                        className="text-gray-800 dark:text-gray-100 mt-4"
                      >
                        إِنَّهُ لَقُرْآنٌ كَرِيمٌ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The verse speaks of human remains potentially becoming
                    "rocks or iron" (كُونُوا حِجَارَةً أَوْ حَدِيدًا). This
                    phrasing remarkably aligns with the scientific description
                    of pyritized fossils, where organic matter is replaced by
                    pyrite, a mineral composed of iron and sulfur, essentially
                    turning into a form of rock containing iron.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of remains becoming "rocks or iron"
                    perfectly matches what modern paleontology has discovered
                    about pyritized fossils. This alignment between ancient
                    wisdom and contemporary scientific understanding
                    demonstrates the Quran's accurate description of natural
                    processes.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  This connection between the ancient text and modern
                  paleontology offers something wonderful to think about:
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could anyone in the 7th century have known about
                    pyritized fossils?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The intricate process of fossilization, especially
                    pyritization where organic remains are replaced by minerals
                    like iron sulfide (pyrite), was scientifically understood
                    much, much later. In the 7th century, this knowledge was
                    simply unavailable. The mention of remains turning into
                    "rocks or iron" in the Quran, therefore, resonates deeply
                    with modern scientific discoveries about pyritized fossils.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of
                      fossilization processes and mineral replacement was
                      limited. The precise description of remains becoming rocks
                      and iron shows remarkable insight.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's paleontological research confirms exactly what the
                      Quran described: that organic remains can indeed become
                      rocks containing iron through natural fossilization
                      processes.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This precise detail—that remains can become rocks and iron—was
                  beyond the scientific understanding of the time. The alignment
                  between the ancient Quranic description and the modern
                  scientific understanding of pyritized fossils invites us to
                  reflect on the source of such knowledge.
                </p>
                <div className="mt-6 flex items-center text-amber-600 dark:text-amber-400 font-medium">
                  <Sparkles size={20} className="mr-2" />
                  Exploring the wonders within the Quran.
                </div>
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
                className="text-amber-600 dark:text-amber-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Earth's Ancient Secrets
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The natural world reveals fascinating processes, sometimes echoing
              descriptions found in ancient texts.
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
          className="bg-amber-600 dark:bg-amber-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PyritizedFossils;
