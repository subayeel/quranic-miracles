/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Dna,
  Microscope,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Users,
} from "lucide-react";

const GenderDeterminationQuran = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Mystery of Gender",
        icon: Dna,
      },
      {
        id: "science",
        title: "The Scientific Understanding",
        icon: Microscope,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A 7th Century Insight",
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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Dna className="text-sky-600 dark:text-sky-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Gender Determination
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Genetics • Medium
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
                  The Mystery of Gender
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  What determines whether a baby will be born male or female?
                  For centuries, this fundamental question remained a mystery.
                  Modern genetics has revealed the answer lies in the father's
                  contribution, but remarkably, this insight was pointed to in
                  the Quran over 1400 years ago.
                </p>
                <div className="bg-sky-50 dark:bg-sky-900/30 border-l-4 border-sky-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Question of Origin
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Throughout history, different cultures had various theories
                    about what determined a baby's gender. Some blamed the
                    mother, others believed it was purely random. The scientific
                    truth about chromosomal determination would not be
                    discovered until the 20th century.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Users
                        size={20}
                        className="text-sky-500 dark:text-sky-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Historical Beliefs
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Ancient civilizations had various incorrect theories about
                      gender determination, often attributing it to factors like
                      diet, moon phases, or maternal behavior.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Dna
                        size={20}
                        className="text-sky-500 dark:text-sky-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Modern Discovery
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Only in the 20th century did science discover that the
                      father's sperm determines gender through X and Y
                      chromosomes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Understanding */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Scientific Understanding
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In humans, gender is determined by sex chromosomes. Females
                    typically have two X chromosomes (XX) and can only pass on
                    an X chromosome to their offspring. Males have one X and one
                    Y chromosome (XY), and can pass on either an X or a Y
                    chromosome through their sperm."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Basic Human Genetics
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Mother's Contribution</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Females have XX chromosomes and can only contribute an X
                      chromosome to their offspring, regardless of the child's
                      gender.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Father's Contribution</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Males have XY chromosomes and their sperm carries either
                      an X or Y chromosome, which determines the baby's gender.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Final Determination</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      XX combination results in a female child, while XY
                      combination results in a male child.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This fundamental understanding of chromosomal inheritance and
                  gender determination is a relatively recent scientific
                  discovery, established long after the Quran was revealed.
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
                      href="https://quran.com/53/45-46"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 53:45-46
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And He (Allah) creates the two spouses, the male and
                        the female, from a Nutfah (drop of sperm) when it is
                        emitted."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p
                        dir="rtl"
                        className="text-gray-800 dark:text-gray-100 mb-4"
                      >
                        ٤٥ وَأَنَّهُ خَلَقَ الزَّوْجَيْنِ الذَّكَرَ
                        وَالْأُنْثَىٰ
                      </p>
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٦ مِنْ نُطْفَةٍ إِذَا تُمْنَىٰ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Arabic Term
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic word "Nutfah" (نُطْفَةٍ) specifically refers to a
                    small quantity of fluid, interpreted as sperm or the male
                    gamete. The verse states that gender (male or female) is
                    determined from this "Nutfah" when it is emitted. Since
                    sperm originates exclusively from the male, this implies
                    that the male's contribution determines the baby's sex.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">A Remarkable Detail</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Interestingly, this statement concludes at verse 46, which
                    corresponds to the total number of chromosomes in a human
                    somatic cell—a numerical coincidence that many find
                    significant.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A 7th Century Insight
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the scientific evidence that the male's sperm
                  determines gender through chromosomal inheritance, the Quranic
                  statement presents a remarkable point for reflection:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could it be known 1400 years ago that the male's
                    contribution determines gender?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The scientific understanding that the male's sperm (carrying
                    either an X or Y chromosome) determines a baby's sex is a
                    modern discovery, established long after the Quran was
                    revealed. At a time when there were no microscopes, no
                    genetic science, and no understanding of chromosomes, the
                    Quran pointed to the "Nutfah" (sperm) as the source from
                    which male and female are created.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Various ancient cultures held different, often incorrect
                      beliefs about gender determination. Some blamed the
                      mother, others attributed it to environmental factors or
                      divine whim.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Contemporary genetics confirms exactly what the Quran
                      indicated: the male gamete (sperm) contains the
                      determining factor for offspring gender through X and Y
                      chromosomes.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This alignment between a 1400-year-old text and fundamental
                  concepts in modern biology encourages contemplation on the
                  source of such precise knowledge, demonstrating how ancient
                  wisdom can remarkably anticipate scientific discoveries.
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
              <Dna className="text-sky-600 dark:text-sky-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Contemplating Creation's Blueprint
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The intricate details of life, from genetics to human development,
              continue to reveal remarkable connections between ancient wisdom
              and modern science.
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
          className="bg-sky-600 dark:bg-sky-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default GenderDeterminationQuran;
