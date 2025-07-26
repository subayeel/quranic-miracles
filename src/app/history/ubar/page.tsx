/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Home,
  Mouse,
  Layers,
  BookOpen,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const UbarDam = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Legend vs. Reality",
        icon: Home,
      },
      {
        id: "legend",
        title: "The 7th Century Legend",
        icon: Mouse,
      },
      {
        id: "archaeology",
        title: "Modern Archaeology",
        icon: Layers,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: Sparkles,
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
              <Home className="text-stone-600 dark:text-stone-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  The Flooded City
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  History • Medium
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
                  Legend vs. Reality
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The ancient city or civilization associated with the Marib Dam
                  in Yemen has long been shrouded in mystery, particularly
                  regarding the cause of its decline and the catastrophic
                  collapse of the Great Dam that sustained it. For centuries,
                  legends circulated about what happened.
                </p>
                <div className="bg-stone-50 dark:bg-stone-900/30 border-l-4 border-stone-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Unraveling Ancient Accounts
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Different accounts existed about the demise of this once
                    flourishing civilization. One popular story from the past
                    attributed the destruction of their vital dam to a rather
                    unusual cause – an army of giant rats.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  But what does modern investigation tell us? Let's compare the
                  ancient belief with what we know today.
                </p>
              </section>

              {/* The 7th Century Legend */}
              <section id="legend" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The 7th Century Legend
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Around 1400 years ago, in the 7th century, when the Quran was
                  revealed, a common explanation for the destruction that befell
                  the people of Sheba and the collapse of their dam was a rather
                  fanciful tale.
                </p>
                <blockquote className="border-l-4 border-orange-500 pl-6 py-4 mb-8 bg-orange-50 dark:bg-orange-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "According to legend, the breach was caused by large rats
                    gnawing at it with their teeth and scratching it with their
                    nails."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Amusing Planet, The Collapse of Marib Dam And The Fall of
                    an Empire, 2018
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This story of giant rats causing the destruction was prevalent
                  at the time, a seemingly plausible (though fantastical)
                  explanation for the failure of such a massive and important
                  structure.
                </p>
              </section>

              {/* Modern Archaeology */}
              <section id="archaeology" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Modern Archaeology
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Today, thanks to archaeological research and geological
                  analysis, we have a much clearer understanding of what likely
                  caused the final collapse of the Marib Dam. Modern science has
                  dispelled the ancient legend.
                </p>
                <blockquote className="border-l-4 border-green-500 pl-6 py-4 mb-8 bg-green-50 dark:bg-green-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "There is much debate what caused the dam to collapse. Some
                    scholars say it was heavy rains, while other believe an
                    earthquake undid the stonework. According to legend, the
                    breach was caused by large rats gnawing at it with their
                    teeth and scratching it with their nails."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Amusing Planet, The Collapse of Marib Dam And The Fall of
                    an Empire, 2018
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Heavy Rains</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Excessive rainfall could have overwhelmed the dam's
                      capacity, causing structural failure.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Earthquake</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Seismic activity could have weakened the stonework and
                      caused the dam to collapse.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Not Rats</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Modern science has definitively ruled out the legend of
                      giant rats as the cause.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Modern archaeologists are certain that the "giant rats" story
                  was merely a legend. The real causes point to natural
                  disasters: either excessive, heavy rains overwhelming the
                  structure, or an earthquake weakening its foundations.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When the Quran was revealed in the 7th century, amidst the
                  legends and stories circulating at the time, it presented a
                  different account of the destruction that befell the people of
                  Sheba.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/34/15"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 34:15-16
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "In Sheba's homeland there used to be a wonder: two
                        gardens, on the right, and on the left. 'Eat of your
                        Lord's provision, and give thanks to Him.' A good land,
                        and a forgiving Lord. But they turned away, so We
                        unleashed against them the flood of the dam; and We
                        substituted their two gardens with two gardens of bitter
                        fruits, thorny shrubs, and meager harvest."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٥ لَقَدْ كَانَ لِسَبَإٍ فِي مَسْكَنِهِمْ آيَةٌ ۖ
                        جَنَّتَانِ عَنْ يَمِينٍ وَشِمَالٍ ۖ كُلُوا مِنْ رِزْقِ
                        رَبِّكُمْ وَاشْكُرُوا لَهُ ۚ بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ
                        غَفُورٌ
                      </p>
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٦ فَأَعْرَضُوا فَأَرْسَلْنَا عَلَيْهِمْ سَيْلَ
                        الْعَرِمِ وَبَدَّلْنَاهُمْ بِجَنَّتَيْهِمْ جَنَّتَيْنِ
                        ذَوَاتَيْ أُكُلٍ خَمْطٍ وَأَثْلٍ وَشَيْءٍ مِنْ سِدْرٍ
                        قَلِيلٍ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic phrase{" "}
                    <span className="font-arabic">سَيْلَ الْعَرِمِ</span> (sayl
                    al-'arim) is key here, translating to "flood of the dam".
                    The Quran explicitly states that their punishment came in
                    the form of a flood overwhelming the dam.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This is notably different from the popular legend of
                  destruction by rats circulating at the time. The Quran points
                  to the dam's failure due to an overwhelming amount of water.
                </p>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Point to Ponder
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the context of the 7th century, where the
                  destruction of the Marib Dam was commonly attributed to giant
                  rats, we are presented with a thought-provoking contrast.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone who lived 1400 years ago have known that
                    the Marib Dam collapsed due to a flood, contradicting the
                    popular legend of his time?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quran's account aligns with modern archaeological
                    findings which dismiss the legend of destruction by rats and
                    point to natural forces like excessive water (flood) or
                    earthquakes as the cause. The fact that a text from the 7th
                    century presents a cause consistent with modern scientific
                    understanding, while differing from the prevalent belief of
                    that era, is indeed remarkable and invites reflection.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This detail, seemingly minor in the grand narrative,
                  highlights a remarkable correlation between a historical
                  account in the Quran and the conclusions of modern scientific
                  investigation, raising questions about the source of this
                  knowledge 14 centuries ago.
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
                className="text-stone-600 dark:text-stone-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Ancient History and Revelation
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Connecting historical accounts, ancient legends, and modern
              discoveries to understand the past.
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

export default UbarDam;
