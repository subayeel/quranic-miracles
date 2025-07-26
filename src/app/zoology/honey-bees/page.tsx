/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Venus,
  FlaskConical,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const HoneyBees = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Worker Bees Are Females",
        icon: Venus,
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: FlaskConical,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Fascinating Question",
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
              <Venus className="text-pink-600 dark:text-pink-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Honey Bees
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Zoology • Medium
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
                  Worker Bees Are Females
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In the fascinating world of honey bees, one of the most
                  remarkable aspects of their society is that all the worker
                  bees - those responsible for foraging, building the hive, and
                  maintaining the colony - are female. This biological fact has
                  profound implications for understanding bee society and its
                  organization.
                </p>
                <div className="bg-pink-50 dark:bg-pink-900/30 border-l-4 border-pink-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    A Female-Dominated Society
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In bee colonies, the vast majority of individuals are female
                    workers. Male bees (drones) exist primarily for reproduction
                    and make up only a small fraction of the colony. This
                    creates a society where females perform all the essential
                    tasks of survival and maintenance.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Scientific Model
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In a typical honey bee colony during the active season,
                    there are approximately 20,000 to 80,000 worker bees, all of
                    which are female. These workers perform all the colony's
                    tasks: foraging, nursing, building comb, defending the hive,
                    and maintaining colony homeostasis. Male drones, numbering
                    only in the hundreds, exist solely for reproductive
                    purposes."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Apiculture Research
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Scientific research has thoroughly documented the gender
                  dynamics of bee colonies, revealing the sophisticated division
                  of labor among female workers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Venus
                        size={20}
                        className="text-pink-500 dark:text-pink-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Female Workers
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      All worker bees are female and perform the essential tasks
                      of the colony: foraging for nectar and pollen, building
                      honeycomb, caring for larvae, and defending the hive.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <FlaskConical
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Division of Labor
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Female workers have different roles throughout their
                      lives: house bees maintain the hive while forager bees
                      collect resources, all coordinated through sophisticated
                      communication.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This understanding of bee society as fundamentally
                  female-driven has revolutionized our knowledge of social
                  insects and provided insights into the evolution of
                  cooperation and division of labor.
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
                        "And your Lord inspired the bee: Take you habitations in
                        the mountains and in the trees and in what they build.
                        Then eat of all fruits and follow the ways of your Lord,
                        made smooth. There comes forth from their bellies a
                        drink diverse of hues, wherein is healing for mankind."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٦٨ وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي
                        مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا
                        يَعْرِشُونَ ٦٩ ثُمَّ كُلِي مِنْ كُلِّ الثَّمَرَاتِ
                        فَاسْلُكِي سُبُلَ رَبِّكِ ذُلُلًا ۚ يَخْرُجُ مِنْ
                        بُطُونِهَا شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ
                        لِلنَّاسِ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic text uses feminine verb forms when addressing the
                    bee: "اتَّخِذِي" (take/build - feminine), "كُلِي" (eat -
                    feminine), and "فَاسْلُكِي" (follow - feminine). This
                    linguistic precision accurately reflects that the worker
                    bees performing these tasks are indeed female, a biological
                    fact only confirmed scientifically in modern times.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">Linguistic Precision</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The consistent use of feminine verb forms in the Quranic
                    description of bee behavior accurately represents the
                    biological reality that worker bees - those who build,
                    forage, and produce honey - are all female.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Fascinating Question
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The precise use of feminine language in the Quranic
                  description of bee behavior raises an intriguing question:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a 7th-century text accurately identify the gender
                    of worker bees through its linguistic choices?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, the biological understanding of bee
                    colonies was limited to basic observations of honey
                    production. The detailed knowledge that worker bees are
                    exclusively female, and that they perform all the colony's
                    essential tasks, required modern scientific methods and
                    microscopic examination to confirm.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The gender composition and social structure of bee
                      colonies was not scientifically understood until modern
                      entomology developed the tools and methods to study insect
                      societies in detail.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Linguistic Accuracy</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The consistent use of feminine grammatical forms in Arabic
                      when describing bee activities precisely matches the
                      biological reality of female-dominated bee societies.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This example demonstrates the remarkable precision found in
                  ancient texts, where linguistic choices align perfectly with
                  scientific discoveries made centuries later, inviting
                  reflection on the sources of such accurate knowledge.
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
              <Venus className="text-pink-600 dark:text-pink-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Bee Societies
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The fascinating world of honey bees continues to reveal the
              precision of ancient knowledge and modern science.
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
          className="bg-pink-600 dark:bg-pink-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HoneyBees;
