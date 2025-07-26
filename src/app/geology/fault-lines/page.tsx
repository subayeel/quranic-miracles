/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  LandPlot,
  Bolt,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const FaultLines = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Earth's Cracks",
        icon: LandPlot,
      },
      {
        id: "science",
        title: "Geological Faults",
        icon: Bolt,
      },
      {
        id: "quran",
        title: "Quranic Mention",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Historical Context",
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
          const sectionId = entry.target.id;
          if (contents.some((item) => item.id === sectionId)) {
            setActiveSection(sectionId);
          }
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
              <LandPlot
                className="text-stone-600 dark:text-stone-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Earth's Fault Lines
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Geology • Medium
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
                  Earth's Cracks
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Did you know that the ground beneath our feet isn't a single,
                  solid shell? It's actually fractured with numerous cracks and
                  faults. In the past, some skeptics questioned this idea, but
                  modern geology has confirmed that Earth is indeed full of
                  these features.
                </p>
                <div className="bg-stone-50 dark:bg-stone-900/30 border-l-4 border-stone-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Understanding Faults
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    These fractures, known as faults, are crucial to
                    understanding how our planet works. They are where pieces of
                    Earth's crust move relative to each other, often leading to
                    significant geological events like earthquakes.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Geological Faults
                </h2>
                <blockquote className="border-l-4 border-gray-500 pl-6 py-4 mb-8 bg-gray-50 dark:bg-gray-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In geology, a fault is a planar fracture or discontinuity
                    in a volume of rock, across which there has been significant
                    displacement as a result of rock-mass movement. Large faults
                    within the Earth's crust result from the action of plate
                    tectonic forces, with the largest forming the boundaries
                    between the plates... Energy release associated with rapid
                    movement on active faults is the cause of most
                    earthquakes... A fault trace or fault line is a place where
                    the fault can be seen or mapped on the surface."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Fault (geology), 2019
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  As explained by modern geology, Earth's crust is indeed filled
                  with these fractures and fault lines. They represent areas
                  where rock masses have moved, driven by the immense forces of
                  plate tectonics. The significant earthquakes we experience are
                  a direct result of sudden movements along these faults.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Bolt
                        size={20}
                        className="text-gray-500 dark:text-gray-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Tectonic Activity
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Faults are often the boundaries or results of movement
                      within Earth's tectonic plates, the giant slabs that make
                      up the planet's outer shell.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <LandPlot
                        size={20}
                        className="text-stone-500 dark:text-stone-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Hidden Structures
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      While some faults are visible on the surface (fault
                      traces), many exist deep within the Earth's crust, hidden
                      from direct view and requiring geological study to map and
                      understand.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Understanding the extent and nature of these subsurface faults
                  is a relatively recent development in scientific history, made
                  possible by advancements in seismology, geophysics, and
                  geological mapping techniques.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Mention
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/86/12"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 86:12
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And the Earth that has faults."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٢ وَالْأَرْضِ ذَاتِ الصَّدْعِ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Arabic Term
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic word used in this verse is "Al-Sada'"
                    (الصَّدْعِ). Based on its root meaning and linguistic
                    analysis, "Sada'" (صدع) signifies a crack, split, or
                    fissure. In this context, referring to the Earth, it
                    directly points to the existence of internal cracks or
                    faults within the planet.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    The verse doesn't just describe the surface but implies the
                    Earth <em>itself</em> has these splits or fissures deep
                    within.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of Earth having internal faults or
                    cracks aligns remarkably with modern geological
                    understanding of fault systems throughout the Earth's crust.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Context
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering what was known about the Earth's structure in the
                  7th century, this Quranic verse presents a thought-provoking
                  point.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century have known about the
                    Earth's internal faults?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, geological understanding was extremely
                    limited. The idea that the solid Earth beneath our feet is
                    riddled with deep, internal fractures that cause earthquakes
                    and are driven by vast tectonic forces was completely
                    unknown. Knowledge was primarily based on surface
                    observations, and the sophisticated tools and techniques
                    needed to map and understand subsurface geology simply did
                    not exist. The mention of the Earth having "faults" or
                    "cracks" in the Quran, especially implying internal ones
                    through the use of the word "Sada'", aligns with modern
                    scientific understanding in a way that seems far beyond the
                    scientific knowledge available at that time.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Ancient understanding of Earth's structure was based on
                      surface observations only. The concept of internal
                      fractures and fault systems was unknown.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's geology confirms that Earth's crust is indeed
                      fractured with fault systems that drive tectonic activity
                      and earthquakes.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This congruence between ancient scripture and modern
                  geological discovery invites us to reflect on the source of
                  such information.
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
              <LandPlot
                className="text-stone-600 dark:text-stone-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Earth's Depths
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The intricate structure of our planet continues to reveal wonders,
              bridging ancient text with modern scientific understanding.
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
          className="bg-stone-600 dark:bg-stone-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FaultLines;
