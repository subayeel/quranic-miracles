/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  FlaskRound,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Award,
  Clock,
} from "lucide-react";

const FastingBenefits = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Medical Benefits",
        icon: FlaskRound,
      },
      {
        id: "science",
        title: "Nobel Prize Research",
        icon: Award,
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
              <Clock className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Fasting Benefits
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
                  Medical Benefits
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Fasting is more than just a spiritual practice - it has
                  profound health benefits that have recently been validated by
                  modern science. What was once dismissed by skeptics has now
                  earned scientific recognition at the highest level.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Wisdom Confirmed by Science
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the Quran, fasting is described as beneficial for health.
                    Skeptics once claimed that whoever wrote the Quran made a
                    mistake, as fasting was thought to have no benefits. Today,
                    the doctor who discovered the benefits of fasting was
                    awarded the Nobel Prize in Medicine.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Nobel Prize Research
                </h2>
                <blockquote className="border-l-4 border-amber-500 pl-6 py-4 mb-8 bg-amber-50 dark:bg-amber-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The 2016 Nobel Prize for Physiology or Medicine was awarded
                    to Japan's Dr. Yoshinori Ohsumi for his discoveries of the
                    underlying mechanisms of a physiological process called
                    autophagy."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — LifeSpa, 2018
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Award
                        size={20}
                        className="text-amber-500 dark:text-amber-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        What is Autophagy?
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Autophagy is a natural process by which the body degrades
                      and recycles damaged cells, proteins and toxins. It
                      happens during starvation, calorie restriction, and
                      fasting.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <FlaskRound
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Health Benefits
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Intermittent fasting delivers numerous health benefits
                      including decreased diabetes risk, improved longevity, and
                      protection against cancer.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Today, we are learning that intermittent fasting can deliver
                  numerous health benefits:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>Decreased diabetes risk</li>
                  <li>Decreased cardiovascular risk</li>
                  <li>Improved longevity</li>
                  <li>Protection against cancer</li>
                  <li>Reduced risk of neurological concerns</li>
                  <li>Decreased inflammation</li>
                  <li>Balanced lipid levels</li>
                  <li>Reduced blood pressure</li>
                  <li>Reduced oxidative stress</li>
                  <li>Balanced weight</li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  These medical benefits of fasting were only recently confirmed
                  by modern science, yet they were mentioned in the Quran 1400
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
                      href="https://quran.com/en/2/184"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 2:183-184
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "O you who believe! Fasting is prescribed for you, as it
                        was prescribed for those before you, that you may become
                        righteous. For a specified number of days. But whoever
                        among you is sick, or on a journey, then a number of
                        other days. For those who are able: a ransom of feeding
                        a needy person. But whoever volunteers goodness, it is
                        better for him. But to fast is best for you, if you only
                        knew."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٨٣ يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ
                        الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ
                        لَعَلَّكُمْ تَتَّقُونَ
                        <br />
                        ١٨٤ أَيَّامًا مَعْدُودَاتٍ ۚ فَمَنْ كَانَ مِنْكُمْ
                        مَرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِنْ أَيَّامٍ
                        أُخَرَ ۚ وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ
                        مِسْكِينٍ ۖ فَمَنْ تَطَوَّعَ خَيْرًا فَهُوَ خَيْرٌ لَهُ
                        ۚ وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ ۖ إِنْ كُنْتُمْ
                        تَعْلَمُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>
                      "But to fast is best for you, if you only knew."
                    </strong>{" "}
                    This key phrase from the Quran indicates that fasting has
                    benefits beyond just spiritual rewards. This was stated 1400
                    years before someone won the Nobel Prize for Medicine for
                    discovering the health benefits of fasting.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic statement that fasting is "best for you" aligns
                    remarkably with our modern scientific understanding of
                    fasting's numerous health benefits through processes like
                    autophagy.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The connection between ancient religious texts and modern
                  scientific discoveries invites us to reflect on the nature of
                  knowledge across time:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone 1400 years ago have known about fasting's
                    health benefits?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic statement that fasting is "best for you" aligns
                    remarkably with our modern scientific understanding of
                    fasting's numerous health benefits. This specific mention of
                    fasting's positive effects, rather than just its spiritual
                    aspects, raises interesting questions about the source of
                    this knowledge.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      While fasting has been practiced in many cultures
                      throughout history, the specific understanding of its
                      profound health benefits through processes like autophagy
                      is a very recent scientific discovery.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The alignment between this ancient text and modern Nobel
                      Prize-winning research offers a fascinating perspective on
                      knowledge, revelation, and human health.
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
              <Clock className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Ancient Wisdom, Modern Science
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The healing practice of fasting continues to reveal its secrets,
              connecting ancient wisdom with Nobel Prize-winning discoveries.
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

export default FastingBenefits;
