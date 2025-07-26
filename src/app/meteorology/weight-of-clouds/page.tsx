/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Cloud,
  Droplets,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const WeightOfClouds = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Paradox of Floating Weight",
        icon: Cloud,
      },
      {
        id: "science",
        title: "Scientific Confirmation",
        icon: Droplets,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
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
              <Cloud className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Weight Of Clouds
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Meteorology • Medium
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
                  The Paradox of Floating Weight
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When we look up, clouds seem to float effortlessly in the sky,
                  like giant, fluffy balloons. This might lead us to think they
                  are light, perhaps even weightless. It might surprise you to
                  learn that clouds are actually incredibly heavy!
                </p>
                <div className="bg-cyan-50 dark:bg-cyan-900/30 border-l-4 border-cyan-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Seeming Paradox
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    For a long time, it wasn't understood how clouds, if they
                    contained large amounts of water, could stay suspended in
                    the air. To someone living centuries ago, without modern
                    scientific tools, the idea of a cloud being heavy might seem
                    impossible – surely, it would just fall to the ground!
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Cloud
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Deceptive Appearance
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Clouds appear light and weightless as they drift across
                      the sky, creating an illusion that contradicts their
                      actual mass.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Droplets
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Water Content
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Clouds are composed of countless tiny water droplets or
                      ice crystals that collectively add up to substantial
                      weight.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Confirmation */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Confirmation
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "How much does a cloud weigh? Do you think clouds have any
                    weight? How can they, if they are floating in the air like a
                    balloon filled with helium? Doing the math: 1,000,000,000 x
                    0.5 = 500,000,000 grams of water droplets in our cloud. That
                    is about 500,000 kilograms or 1.1 million pounds (about 551
                    tons)."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — US Geological Survey, The Atmosphere and the Water Cycle,
                    2019
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Massive Weight</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      An average cumulus cloud can weigh around 1.1 million
                      pounds - equivalent to about 100 elephants!
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Suspension Mechanism</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Clouds stay suspended due to tiny individual particles and
                      updrafts of warmer air within the cloud.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Modern Discovery</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This astonishing fact about cloud weight was only
                      confirmed with modern scientific measurement capabilities.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, science has provided a clear answer. Clouds are not
                  weightless; they are composed of countless tiny water droplets
                  or ice crystals, and together, these add up to a substantial
                  weight. They stay suspended because these particles are so
                  small and light individually, and they are supported by
                  updrafts and the buoyancy of the warmer air within the cloud.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/13/12"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 13:12
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "It is He who shows you the lightening, causing fear and
                        hope. And He produces the heavy clouds."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        وَهُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا
                        وَيُنْشِئُ السَّحَابَ الثِّقَالَ
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        (Portion of the verse: وَيُنْشِئُ السَّحَابَ الثِّقَالَ)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In this verse, the Arabic word used for clouds is
                    "السَّحَابَ" (al-sahab), and it's qualified by the word
                    "الثِّقَالَ" (al-thiqaal). The word "الثِّقَالَ" comes from
                    the root ث ق ل (tha-qa-la), which means "heavy," "weighty,"
                    or "burdensome." So, the phrase "السَّحَابَ الثِّقَالَ"
                    directly translates to "the heavy clouds."
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This verse mentions God producing the "heavy clouds." At a
                    time when the common perception might have been that clouds
                    were light because they floated, the Quran describes them
                    using a word that means heavy—perfectly aligning with modern
                    scientific discoveries.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point to Ponder
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  This brings us to a fascinating question that invites
                  reflection on the sources of ancient knowledge and the
                  relationship between traditional texts and scientific
                  discovery.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could anyone in the 7th century have known that clouds
                    are genuinely heavy?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century CE, during the time of the revelation of
                    the Quran, there were no scientific instruments capable of
                    measuring the mass of a cloud. Meteorology as we know it did
                    not exist. The prevailing understanding of objects floating
                    in the air would likely have led people to assume clouds
                    were light. Yet, the Quran refers to them as "heavy clouds."
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, there were no means to measure cloud
                      mass or understand the physics of atmospheric suspension.
                      The intuitive observation suggested lightness.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's meteorological science confirms the remarkable
                      weight of clouds, validating the ancient description with
                      precise measurements.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This description aligns remarkably with what modern science
                  has discovered centuries later. The fact that an ancient text
                  describes clouds using a term like "heavy," which contradicts
                  the intuitive observation of them floating effortlessly,
                  invites us to reflect on the source of this knowledge. It's a
                  reminder that the world around us holds many wonders, and
                  sometimes, ancient wisdom seems to echo truths that science
                  only later unveils.
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
              <Cloud className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring the Wonders of the Sky
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The natural world is full of surprises, connecting ancient wisdom
              with modern discoveries.
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
          className="bg-blue-600 dark:bg-blue-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default WeightOfClouds;
