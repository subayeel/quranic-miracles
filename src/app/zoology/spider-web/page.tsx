/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  GitBranch,
  ChevronRight,
  BookOpen,
  HelpCircle,
  RotateCcw,
  ArrowUp,
} from "lucide-react";

const SpiderWebMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Built by Females",
        icon: GitBranch,
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: BookOpen,
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
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
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

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
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

  const getNextSectionId = () => {
    const currentIndex = contents.findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex < contents.length - 1) {
      return contents[currentIndex + 1].id;
    }
    return contents[0].id; // Loop back to first section
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <GitBranch
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Spider's Web
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {/* Introduction */}
          <section id="intro" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Built by Females
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              In the Quran, spider webs are described as being built by females.
              Skeptics claim this is a mistake, arguing that both males and
              females build webs. Today, science confirms that only female
              spiders build webs.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Spider Web Construction
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Adult male spiders do not build webs. They use their silk
                primarily for mating purposes. It's the female spiders that
                construct the intricate webs we commonly see in nature.
              </p>
            </div>
          </section>

          {/* Scientific Evidence */}
          <section id="science" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              The Scientific Model
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Scientific Confirmation
              </h3>
              <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                "Do only female spiders build webs? Females are the ones who
                usually build webs. It is generally accepted in the
                arachnological literature that adult female spiders build
                typical webs, while adult males do no web-building other than
                that required for courtship and sperm induction."
              </blockquote>
              <div className="text-sm">
                <a
                  href="http://www.speeli.com/articles/view/Do-only-Female-Spiders-build-webs"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Speeli, Do only female spiders build webs?, 2019
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <RotateCcw size={18} className="text-purple-500" />
                  Female Construction
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Female spiders build webs to catch prey, while males focus on
                  finding mates. This division of labor is consistent across
                  most spider species.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-purple-500" />
                  Fragile Homes
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Spider webs are among the most fragile structures in nature,
                  often needing to be rebuilt daily due to damage from prey,
                  wind, and dust.
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This scientific understanding of spider behavior was completely
              unknown in the 7th century. The Quran's precise description of
              female spiders building fragile homes aligns perfectly with modern
              arachnology.
            </p>
          </section>

          {/* Quranic Reference */}
          <section id="quran" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              The Quranic Account
            </h2>
            <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 pl-6 py-4 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                <a
                  href="https://quran.com/en/29/41"
                  className="text-green-600 dark:text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quran 29:41
                </a>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "The likeness of those who take to themselves protectors
                    other than Allah is that of the spider. It builds a house.
                    But the most fragile of houses is the spider's house. If
                    they only knew."
                  </blockquote>
                </div>
                <div className="font-arabic text-right text-lg">
                  <p dir="rtl" className="text-gray-700 dark:text-gray-300">
                    ٤١ مَثَلُ الَّذِينَ اتَّخَذُوا مِن دُونِ اللَّهِ أَوْلِيَاءَ
                    كَمَثَلِ الْعَنكَبُوتِ اتَّخَذَتْ بَيْتًا ۖ وَإِنَّ أَوْهَنَ
                    الْبُيُوتِ لَبَيْتُ الْعَنكَبُوتِ ۖ لَوْ كَانُوا يَعْلَمُونَ
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                Linguistic Precision
              </span>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                The Quran uses the feminine form "it-takhathat" (اتَّخَذَتْ)
                when referring to the spider building its house. This
                grammatical detail correctly identifies the spider as female,
                matching modern scientific understanding.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                Additional Insight
              </span>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                The verse also accurately describes spider webs as "the most
                fragile of houses," which aligns with the scientific observation
                that webs are delicate structures often destroyed by captured
                prey and needing frequent rebuilding.
              </p>
            </div>
          </section>

          {/* Reflection */}
          <section id="reflection" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              A Fascinating Question
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              The Quran's accurate description of spider behavior raises
              profound questions about its origin:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                How could man in the 7th century have known that only female
                spiders build webs?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This precise biological detail—that female spiders are the web
                builders—was completely unknown in ancient times and only
                confirmed by modern science. The Quran's accuracy in this
                matter, along with its observation about the fragility of spider
                webs, suggests knowledge beyond what was available to 7th
                century humans.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In the 7th century, people didn't have microscopes or detailed
              biological studies. The distinction between male and female spider
              behavior would have been impossible to observe without modern
              scientific tools. Yet the Quran correctly identifies the female
              spider as the web builder and describes the fragile nature of its
              construction—facts that align perfectly with contemporary
              arachnology.
            </p>
          </section>
        </div>
      </main>

      {/* Medium-style Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => scrollToSection(getNextSectionId())}
          className="bg-purple-600 dark:bg-purple-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Medium-style Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <GitBranch
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Nature's Marvels
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The Quran's precise descriptions of natural phenomena continue to
              align with modern scientific discoveries.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm flex items-center space-x-1 mx-auto transition-colors"
            >
              <ArrowUp size={16} />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpiderWebMiracle;
