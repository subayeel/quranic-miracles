/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Ship,
  BookOpen,
  Droplets,
  Mountain,
  HelpCircle,
  ArrowUp,
  MapPin,
} from "lucide-react";

const NoahsHistory = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Flood Narrative",
        icon: BookOpen,
      },
      {
        id: "account",
        title: "Quranic Insights",
        icon: Ship,
      },
      {
        id: "details",
        title: "Further Details",
        icon: Droplets,
      },
      {
        id: "evidence",
        title: "Supporting Claims",
        icon: Mountain,
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
              <Ship className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Noah's History
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
                  The Flood Narrative
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The story of Prophet Noah (peace be upon him) and the great
                  flood is a significant narrative found in many religious and
                  cultural traditions. While many accounts depict a global event
                  that wiped out all life except those on the ark, the Quran
                  presents a perspective that differs in a key aspect – the
                  scale and scope of the flood.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Common vs. Quranic Perspective
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Many traditional accounts describe Noah's flood as a global
                    catastrophe. The Quran, however, provides details that
                    suggest the flood was a localized event primarily affecting
                    Noah's disbelieving people, while other communities and
                    nations on Earth survived.
                  </p>
                </div>
              </section>

              {/* The Quranic Account Section */}
              <section id="account" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Insights from the Quran
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Let's explore some verses from the Holy Quran that shed light
                  on the nature of Noah's flood.
                </p>

                {/* Quran 11:48 */}
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/11/48"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 11:48
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "It was said, 'O Noah, disembark with peace from Us; and
                        with blessings upon you, and upon communities from those
                        with you. And other communities We will grant prosperity
                        and later We will hand them painful torture.'"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٨ قِيلَ يَا نُوحُ اهْبِطْ بِسَلَامٍ مِنَّا وَبَرَكَاتٍ
                        عَلَيْكَ وَعَلَىٰ أُمَمٍ مِمَّنْ مَعَكَ ۚ وَأُمَمٌ
                        سَنُمَتِّعُهُمْ ثُمَّ يَمَسُّهُمْ مِنَّا عَذَابٌ أَلِيمٌ
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    This verse mentions "other communities We will grant
                    prosperity and later We will hand them painful torture."
                    This indicates that there were other communities outside of
                    Noah's people and outside the ark who survived the flood, as
                    God intends to punish them later.
                  </p>
                </div>

                {/* Quran 11:49 */}
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/11/49"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 11:49
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "These are some stories from the past that We reveal to
                        you. Neither you, nor your people knew them before this.
                        So be patient. The future belongs to the pious."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٩ تِلْكَ مِنْ أَنْبَاءِ الْغَيْبِ نُوحِيهَا إِلَيْكَ ۖ
                        مَا كُنْتَ تَعْلَمُهَا أَنْتَ وَلَا قَوْمُكَ مِنْ قَبْلِ
                        هَٰذَا ۖ فَاصْبِرْ ۖ إِنَّ الْعَاقِبَةَ لِلْمُتَّقِينَ
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    This verse highlights that this particular account of Noah's
                    history, including the details it contains (like the
                    survival of other communities), was not known to Prophet
                    Muhammad (PBUH) or his people before its revelation.
                  </p>
                </div>

                {/* Scope of Noah's Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Prophet Muhammad's Mission
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <a
                        href="https://quran.com/en/21/107"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 21:107
                      </a>{" "}
                      states, "We did not send you except as mercy to all
                      nations ('Al-alameen')." His message was universal.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Prophet Noah's Mission
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      In contrast,{" "}
                      <a
                        href="https://quran.com/en/7/59"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 7:59
                      </a>{" "}
                      says, "We sent Noah to his people." This indicates his
                      mission was specifically directed towards his own
                      community, not all of mankind globally.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Based on these verses, the Quran presents a flood that
                  specifically targeted Noah's disbelieving people, implying
                  that it was a localized event, unlike the widespread belief in
                  a global flood that annihilated all but the ark's passengers.
                </p>
              </section>

              {/* Further Details */}
              <section id="details" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Further Details
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Additional details in the Quran also support the idea of a
                  more localized event.
                </p>

                {/* Quran 11:40 - The Tannur */}
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/11/40"
                      className="text-purple-700 dark:text-purple-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 11:40
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Until, when Our command came, and the earth oven boiled
                        ('Tannur'), We said, 'Board into it a pair of every
                        kind, and your family—except those against whom the
                        sentence has already been passed—and those who have
                        believed.' But those who believed with him were only a
                        few."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٠ حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ
                        قُلْنَا احْمِلْ فِيهَا مِنْ كُلٍّ زَوْجَيْنِ اثْنَيْنِ
                        وَأَهْلَكَ إِلَّا مَنْ سَبَقَ عَلَيْهِ الْقَوْلُ وَمَنْ
                        آمَنَ ۚ وَمَا آمَنَ مَعَهُ إِلَّا قَلِيلٌ
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    The phrase "and the earth oven boiled" (وَفَارَ التَّنُّورُ)
                    uses the word "Tannur" (التَّنُّورُ) in the singular form. A
                    Tannur is traditionally an oven, often a hole in the ground.
                    The Quran mentioning *the* Tannur boiling, rather than all
                    ovens or sources globally, can be understood as the
                    localized starting point of the flood waters, perhaps
                    referring to a specific location known to Noah and his
                    people.
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-purple-100 dark:border-purple-800 mb-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <Ship
                      size={20}
                      className="text-purple-500 dark:text-purple-400"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Animals on the Ark
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The same verse (11:40) mentions taking "a pair of every
                    kind". Considering the context of Noah being sent only to
                    his people, and the practical limitations of a single ark,
                    this can be understood as taking pairs of animals necessary
                    for *them* – perhaps domesticated animals they owned or
                    needed for sustenance and continuation, rather than every
                    single species on the planet. This aligns better with a
                    local event where not all animal life globally was
                    destroyed.
                  </p>
                </div>
              </section>

              {/* Supporting Evidence Claim */}
              <section id="evidence" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Supporting Claims
                </h2>
                <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 p-8 rounded-lg mb-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin
                      size={20}
                      className="text-orange-500 dark:text-orange-400"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Location Claim
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    The source text mentions a claim of a fossilized wooden ark
                    found in Yemen on Mount Judi. It describes it as having
                    dimensions sufficient for around 80 people and their
                    personal animals, found on a mountain around 2500m altitude.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    (Note: Claims about the discovery and location of Noah's Ark
                    are widely debated and not universally accepted within
                    archaeological and scientific communities.)
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  While the scientific community does not currently support
                  evidence for a single global flood event of the scale
                  described in some traditions, the idea of localized, massive
                  floods occurring in various regions throughout history is
                  well-documented.
                </p>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection: Knowledge in the 7th Century
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the prevailing narratives at the time,
                  predominantly influenced by accounts depicting a global flood
                  with no survivors outside the ark, the details provided in the
                  Quran raise a fascinating question:
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could an unlettered man living in 7th-century Arabia
                    have presented details about Noah's flood that suggest a
                    localized event and the survival of other communities –
                    details that seem to align better with modern scientific
                    skepticism towards a global flood and contradict widely
                    known narratives of his time?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, the concept of a global flood was widely
                    accepted based on existing scriptures and stories. The idea
                    that the flood was limited to Noah's people, that other
                    nations survived, and specific details like the singular
                    "Tannur" or the practical scope of animals on the ark,
                    represent a unique perspective. The Quran explicitly states
                    (11:49) that this account was previously unknown. This
                    divergence from the common narrative and the provision of
                    specific details are presented as points for contemplation
                    regarding the source of this knowledge.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Quranic account, with its focus on the judgment of Noah's
                  specific people and the survival of others, offers a
                  perspective that was not commonly known or accepted in the 7th
                  century. This unique presentation is highlighted as a
                  potential sign for those who reflect.
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
              <Ship className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Reflecting on Ancient Narratives
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring the stories of the past provides unique insights and
              perspectives for today.
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

export default NoahsHistory;
