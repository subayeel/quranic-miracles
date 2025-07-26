/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Mountain,
  LayoutPanelLeft,
  BookOpen,
  Sparkles,
  ArrowUp,
  Spade,
} from "lucide-react";

const PetraComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "The Lost City",
        icon: Mountain,
      },
      {
        id: "history",
        title: "Ancient Petra",
        icon: Spade,
      },
      {
        id: "quran",
        title: "Quranic Account",
        icon: BookOpen,
      },
      {
        id: "findings",
        title: "Archaeological Evidence",
        icon: LayoutPanelLeft,
      },
      {
        id: "reflection",
        title: "A Remarkable Connection",
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
              <Mountain className="text-red-600 dark:text-red-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Petra: The Lost City
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
                  The Lost City
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Imagine a city carved directly into rose-red cliffs – a place
                  of incredible beauty and ancient mystery. This is Petra, a
                  "lost" city that lay hidden from the Western world for
                  centuries, nestled in the desert canyons of Jordan.
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Carved Wonders
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Petra is famous for its elaborate rock-cut architecture,
                    particularly structures like the Treasury (Al-Khazneh).
                    These impressive facades were carved directly into the
                    sandstone cliffs, showcasing the incredible skill of its
                    ancient inhabitants, the Nabataeans.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Let's delve into what makes this ancient city so remarkable
                  and how it connects to ancient texts.
                </p>
              </section>

              {/* Ancient Petra */}
              <section id="history" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Ancient Petra
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Petra was the thriving capital of the Nabataean empire, a
                  dominant trading power between 400 B.C. and A.D. 106. They
                  controlled vital trade routes, accumulating wealth that
                  allowed them to build their magnificent city.
                </p>
                <blockquote className="border-l-4 border-stone-500 pl-6 py-4 mb-8 bg-stone-50 dark:bg-stone-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Carved into vibrant red, white, pink, and sandstone cliff
                    faces, the prehistoric Jordanian city of Petra was 'lost' to
                    the Western world for hundreds of years... Only in the early
                    1800s did a European traveler disguise himself in Bedouin
                    costume and infiltrate the mysterious locale."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — National Geographic, Petra, 2021
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Spade
                        size={20}
                        className="text-stone-500 dark:text-stone-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Nabataean Legacy
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The Nabataeans were masters of hydraulics and stone
                      carving. While the famous structures like the Treasury
                      were later additions, the tradition of carving homes and
                      tombs into the rock goes back much further.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Mountain
                        size={20}
                        className="text-stone-500 dark:text-stone-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Homes in the Cliffs
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Beyond the grand facades, many inhabitants lived in
                      simpler dwellings also carved directly into the natural
                      rock faces. These older, humbler rock-cut homes are a key
                      feature of the Petra landscape.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  After its decline, Petra became largely uninhabited and its
                  location remained unknown to the wider world until the early
                  19th century. It was effectively "lost" to Europe and beyond
                  for over a thousand years.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Account
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran mentions a people who lived in the mountains and
                  carved their homes into rock. These people were warned by
                  messengers but ultimately rejected the message and faced a
                  divine consequence. Could this be the people of Petra?
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/15/80-83"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 15:80-83
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And verily, the dwellers of Al-Hijr (the rocky tract)
                        denied the Messengers. And We gave them Our Signs, but
                        they turned away from them. And they used to carve out
                        dwellings from the mountains, feeling secure. But the
                        Sayhah (torment — shout) overtook them in the morning."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٨٠ وَلَقَدْ كَذَّبَ أَصْحَابُ الْحِجْرِ الْمُرْسَلِينَ
                      </p>
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٨١ وَآتَيْنَاهُمْ آيَاتِنَا فَكَانُوا عَنْهَا
                        مُعْرِضِينَ
                      </p>
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٨٢ وَكَانُوا يَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا
                        آمِنِينَ
                      </p>
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٨٣ فَأَخَذَتْهُمُ الصَّيْحَةُ مُصْبِحِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    "أَصْحَابُ الْحِجْرِ (Ashab al-Hijr)" translates to "the
                    people of the Rock" or "the dwellers of the rocky tract."
                    This description strongly aligns with the environment of
                    Petra, where people literally carved their homes into the
                    rocky mountains.
                  </p>
                </div>
              </section>

              {/* Archaeological Evidence */}
              <section id="findings" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Archaeological Evidence
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Archaeological explorations in Petra have uncovered
                  fascinating details about the Nabataeans that connect them to
                  the Quranic description of the "people of the Rock."
                </p>
                <blockquote className="border-l-4 border-yellow-500 pl-6 py-4 mb-8 bg-yellow-50 dark:bg-yellow-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "The Nabataeans worshipped Arab gods and goddesses during
                    the pre-Islamic era... Nabatean inscriptions in Sinai and
                    other places display widespread references to names
                    including Allah, El and Allat (god and goddess)... A stele
                    dedicated to Qos-Allah 'Qos is Allah' or 'Qos the god', by
                    Qosmilk (melech - king) is found at Petra."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Petra (Religion section), 2019
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Spade
                        size={20}
                        className="text-yellow-500 dark:text-yellow-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Homes Match Description
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Archaeological findings confirm that, alongside their
                      grand tombs, the Nabataeans carved their actual homes into
                      the rock cliffs of Petra, fitting the Quranic description
                      of "carving out dwellings from the mountains."
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Mountain
                        size={20}
                        className="text-yellow-500 dark:text-yellow-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        City Remains Intact
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The physical rock-cut structures of Petra remain largely
                      preserved, while there is archaeological evidence of the
                      sudden demise of its inhabitants, aligning with the
                      Quran's mention of the "Shout" as a torment that struck
                      the people.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The discovery of inscriptions containing the name "Allah"
                  among the Nabataean ruins is highly significant. It indicates
                  that the name "Allah" was known and used by these people in
                  the pre-Islamic era, suggesting they were indeed exposed to
                  the concept of the monotheistic God.
                </p>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Remarkable Connection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Considering the historical context of the 7th century when the
                  Quran was revealed, the details provided about the "people of
                  the Rock" are quite remarkable.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could these specific, interconnected details about Petra
                    have been known in the 7th century?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, Petra was not a prominent, widely-known
                    city. It had been largely abandoned for centuries and was
                    essentially "lost" to the world beyond the local Bedouin
                    tribes. The detailed knowledge that a people in a specific
                    rocky region carved their homes into the mountains, that
                    they were warned by divine messengers, and crucially, that
                    they knew and used the name "Allah" was not readily
                    available public information.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The convergence of these details – a people in a rocky
                  mountain region, carving their homes into the rock, who knew
                  the name "Allah" and were warned, and whose city structures
                  remained after their disappearance – points strongly to Petra
                  being the "people of the Rock" mentioned in the Quran. This
                  connection between ancient scripture and modern archaeological
                  discoveries invites deep reflection on the sources of
                  knowledge across time.
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
              <Sparkles className="text-red-600 dark:text-red-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring History and Scripture
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The ancient city of Petra holds secrets that resonate with
              accounts found in the Quran, inviting us to reflect on history and
              faith.
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
          className="bg-red-600 dark:bg-red-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PetraComponent;
