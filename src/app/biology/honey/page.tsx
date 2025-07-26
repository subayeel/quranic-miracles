/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  FlaskRound,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Droplet,
} from "lucide-react";

const HoneyAntibiotics = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Natural Antibiotic",
        icon: FlaskRound,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Droplet,
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
              <Droplet
                className="text-amber-600 dark:text-amber-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Honey's Healing Properties
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Biology • Medium
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
                  Natural Antibiotic
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Honey is more than just a sweet treat - it's a powerful
                  natural medicine with unique properties that have been used
                  for thousands of years. What ancient texts described as
                  healing has now been validated by modern medical science.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Wisdom, Modern Science
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    1400 years ago nobody knew that honey is a natural
                    antibiotic, however it was portrayed in the Quran. Today, we
                    know that when honey is applied on wounds or burns it
                    hinders the growth of microbes and accelerates healing.
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
                    "The healing property of honey is due to the fact that it
                    offers antibacterial activity, maintains a moist wound
                    condition, and its high viscosity helps to provide a
                    protective barrier to prevent infection."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — US National Library of Medicine, 2011
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Droplet
                        size={20}
                        className="text-amber-500 dark:text-amber-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Antibacterial Properties
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Honey contains enzymes that produce hydrogen peroxide,
                      which kills bacteria. Some special types of honey, like
                      Manuka honey, have additional antibacterial compounds.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <FlaskRound
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Wound Healing
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Honey creates a moist healing environment, provides a
                      protective barrier against infection, and its high sugar
                      content draws water from wounds, helping to clean them.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The antimicrobial activity in most honeys is due to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>Enzymatic production of hydrogen peroxide</li>
                  <li>Low pH level (acidic environment)</li>
                  <li>High sugar content (high osmolarity)</li>
                  <li>Immunomodulatory properties</li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Honey hinders the growth of microbes, which leads to faster
                  healing of wounds. This scientific understanding was only
                  confirmed recently, yet it was mentioned in the Quran 1400
                  years ago.
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
                      href="https://quran.com/en/16/68"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 16:68-69
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And your Lord (Allah) revealed to the bees: Build your
                        hives in mountains, trees and in what they build. Then
                        eat from every fruit and follow your Lord's enslaved
                        paths, from its bellies exits drink of different colors,
                        in it healing for man. These are signs for those who
                        contemplate."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٦٨ وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي
                        مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا
                        يَعْرِشُونَ
                        <br />
                        ٦٩ ثُمَّ كُلِي مِنْ كُلِّ الثَّمَرَاتِ فَاسْلُكِي سُبُلَ
                        رَبِّكِ ذُلُلًا ۚ يَخْرُجُ مِنْ بُطُونِهَا شَرَابٌ
                        مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ ۗ إِنَّ
                        فِي ذَٰلِكَ لَآيَةً لِقَوْمٍ يَتَفَكَّرُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>"Shefa شِفَاءٌ"</strong> means healing. Here the
                    Quran is specifically referring to the healing properties of
                    honey (not just the nutritious ones). Today we know that
                    honey is a natural antibiotic, confirming what was mentioned
                    1400 years ago about honey's medicinal qualities.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of honey as having healing
                    properties aligns perfectly with our modern scientific
                    understanding of honey as a natural antibiotic with
                    antimicrobial and wound-healing properties.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The connection between ancient texts and modern scientific
                  discoveries invites us to reflect on knowledge across time:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone 1400 years ago have known about honey's
                    antibacterial properties?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic description of honey as having healing
                    properties aligns perfectly with our modern scientific
                    understanding of honey as a natural antibiotic. This
                    specific mention of honey's medicinal qualities, rather than
                    just its nutritional value, raises interesting questions
                    about the source of this knowledge.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      While honey has been used in traditional medicine across
                      many cultures, the specific understanding of its
                      antibacterial properties is a relatively recent scientific
                      discovery.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The alignment between ancient text and modern science
                      offers a fascinating perspective on knowledge, revelation,
                      and the natural world's hidden properties.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This example demonstrates how ancient wisdom and modern
                  science can illuminate each other, encouraging us to approach
                  both traditional texts and scientific discoveries with
                  curiosity and respect.
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
              <Droplet
                className="text-amber-600 dark:text-amber-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Nature's Healing Gift
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The sweet medicine of honey continues to reveal its secrets,
              connecting ancient wisdom with modern discovery.
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

export default HoneyAntibiotics;
