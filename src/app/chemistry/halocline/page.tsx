/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet,
  ChevronRight,
  Layers,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const HaloclinePhenomenon = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Barrier Between Seas",
        icon: Droplet,
      },
      {
        id: "science",
        title: "Scientific Explanation",
        icon: Layers,
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
              <Droplet className="text-cyan-600 dark:text-cyan-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Halocline
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
                  Barrier Between Seas
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran describes a remarkable phenomenon: a barrier between
                  two seas with different salinities. At first glance, one might
                  think that two bodies of water would simply mix. However,
                  modern science reveals a fascinating reality that echoes this
                  ancient description.
                </p>
                <div className="bg-cyan-50 dark:bg-cyan-900/30 border-l-4 border-cyan-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Skepticism vs. Scientific Discovery
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Skeptics have questioned the Quran's claim, assuming such
                    seas must inevitably mix. Yet, oceanographers have
                    discovered specific conditions where distinct bodies of
                    water, even meeting, maintain their separation due to
                    differences in their properties.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Layers
                        size={20}
                        className="text-cyan-500 dark:text-cyan-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Water Stratification
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The ocean is not uniform! Differences in density,
                      temperature, salinity, and even CO2 concentrations cause
                      water bodies to separate into distinct layers.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Droplet
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        The Halocline
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      A particularly strong vertical salinity gradient can
                      create a distinct layer called a halocline, acting as a
                      significant barrier between waters of different
                      salinities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Explanation
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Halocline - In oceanography, a halocline is a subtype of
                    chemocline, caused by a strong vertical salinity gradient
                    within a body of water. Because salinity (in concert with
                    temperature) affects the density of seawater, it can play a
                    role in its vertical stratification."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Halocline"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Halocline, 2018
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Density Differences</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Waters with different salinities have different densities,
                      preventing them from easily mixing and creating distinct
                      layers.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Temperature Effects</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Temperature variations also contribute to water
                      stratification, working together with salinity to create
                      stable layers.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Natural Barriers</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      These natural barriers can persist for extended periods,
                      maintaining separation between different water masses.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  A halocline provides a scientific explanation for how two
                  bodies of water with different salinities can meet but remain
                  significantly separated, behaving as if there is an invisible
                  barrier between them. This phenomenon, while understood today,
                  was unknown to people in the 7th century.
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
                      href="https://quran.com/25/53"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 25:53
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And it is He who merged the two seas; this one fresh
                        and pure, and that one salty and bitter; and He placed
                        between them a barrier and a boundary."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٥٣ وَهُوَ الَّذِي مَرَجَ الْبَحْرَيْنِ هَٰذَا عَذْبٌ
                        فُرَاتٌ وَهَٰذَا مِلْحٌ أُجَاجٌ وَجَعَلَ بَيْنَهُمَا
                        بَرْزَخًا وَحِجْرًا مَحْجُورًا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Words
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The verse speaks of two different types of water meeting
                    ("merged the two seas") – one fresh and pure, the other
                    salty and bitter – and mentions that Allah "placed between
                    them a barrier and a boundary (بَرْزَخًا وَحِجْرًا
                    مَحْجُورًا)". This description aligns remarkably with the
                    scientific phenomenon of a halocline, which acts as a
                    barrier between water bodies of differing salinities.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of a barrier between seas with
                    different properties perfectly matches what modern
                    oceanography has discovered about haloclines and water
                    stratification. This alignment between ancient wisdom and
                    contemporary scientific understanding demonstrates the
                    Quran's accurate description of natural phenomena.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific understanding of haloclines and
                  water stratification, a profound question arises when looking
                  at the Quranic verse:
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone living in the 7th century, with no access
                    to modern oceanographic tools or knowledge, describe the
                    barrier effect between bodies of water with different
                    salinities?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The existence of haloclines, particularly the way they
                    maintain separation between waters of varying salt content,
                    is a detail confirmed by modern oceanography. This intricate
                    understanding of how seas "merge" yet remain distinct was
                    beyond the scientific grasp of the 7th century. The Quran's
                    description, written at a time when such phenomena were
                    entirely unknown, is seen by believers as one of the many
                    signs pointing to a divine source of knowledge.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of oceanography
                      and water stratification was limited. The precise
                      description of barriers between seas shows remarkable
                      insight into natural phenomena.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's oceanographic research confirms exactly what the
                      Quran described: that distinct bodies of water can meet
                      while maintaining their separation through natural
                      barriers.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This connection between ancient scripture and modern discovery
                  invites us to reflect on the depth and potential origins of
                  the knowledge contained within the Quran. It presents a
                  compelling harmony between faith and the findings of science,
                  centuries apart.
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
                className="text-cyan-600 dark:text-cyan-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring the Miracles in the Seas
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The wonders of our oceans continue to reveal harmony between
              ancient texts and modern scientific understanding.
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
          className="bg-cyan-600 dark:bg-cyan-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HaloclinePhenomenon;
