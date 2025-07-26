/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Wind,
  ChevronRight,
  FlaskRound,
  BookOpen,
  HelpCircle,
  Flower,
  ArrowUp,
  Leaf,
  CloudRain,
} from "lucide-react";

const Pollination = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Wind & Pollination",
        icon: Wind,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: FlaskRound,
      },
      {
        id: "quran",
        title: "Quranic References",
        icon: BookOpen,
      },
      {
        id: "strong-winds",
        title: "Strong Winds Effect",
        icon: CloudRain,
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
              <Wind className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Pollination
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Biology • Intermediate
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
                  Wind & Pollination
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Pollination is the transfer of pollen from the male part of a
                  plant to the female part. While many people think of insects
                  as the primary pollinators, wind actually plays a crucial role
                  in plant reproduction.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Divine System of Fertilization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quran describes a sophisticated system where Allah sends
                    winds that serve multiple purposes: fertilizing clouds to
                    produce rain, and fertilizing trees to open their leaves and
                    blossoms. This comprehensive understanding of wind's role in
                    nature's reproductive cycle was revealed 1400 years ago.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Leaf
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Pollinating Agents
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Nature uses various methods for pollination: insects,
                      animals, water, and wind. Each method is perfectly suited
                      to different plant species and environments.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Wind
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Wind-Only Plants
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Some plant species rely exclusively on wind for
                      pollination, showing how essential this natural force is
                      for plant reproduction and biodiversity.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Evidence
                </h2>
                <blockquote className="border-l-4 border-green-500 pl-6 py-4 mb-8 bg-green-50 dark:bg-green-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Anemophily or wind pollination is a form of pollination
                    whereby pollen is distributed by wind. Almost all
                    gymnosperms are anemophilous, as are many plants in the
                    order Poales, including grasses, sedges and rushes. Other
                    common anemophilous plants are oaks, sweet chestnuts, alders
                    and members of the family Juglandaceae (hickory or walnut
                    family)."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Anemophily"
                      className="text-green-600 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Anemophily, 2020
                    </a>
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Wind plays a major role in pollination for countless plant
                  species. This scientific understanding was only fully
                  appreciated in recent times, yet it was mentioned in the Quran
                  1400 years ago.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Gymnosperms</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Nearly all cone-bearing plants like pines, firs, and
                      spruces rely entirely on wind for pollination.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Grasses</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Most grasses, sedges, and rushes use wind pollination,
                      making it essential for grassland ecosystems.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Trees</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Many large trees like oaks, sweet chestnuts, and alders
                      depend on wind to carry their pollen.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quranic References */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Reference - Seeding Winds
                </h2>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/15/22"
                      className="text-purple-700 dark:text-purple-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 15:22
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And We sent the winds fertilizing, then cause the rain
                        to descend from the sky, and gave you water to drink,
                        though you are not the guardians of its stores."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٢٢ وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا مِنَ
                        السَّمَاءِ مَاءً فَأَسْقَيْنَاكُمُوهُ وَمَا أَنْتُمْ
                        لَهُ بِخَازِنِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Tafsir Explanation
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    According to classical tafsir, "الرِّيَاحَ لَوَاقِحَ" (the
                    winds fertilizing) refers to winds that serve two main
                    purposes: (1) fertilizing clouds to produce rain, and (2)
                    fertilizing trees to open their leaves and blossoms. The
                    scholars explain that these winds are mentioned in plural
                    form because they produce results, unlike the barren wind
                    (Ar-Rih Al-'Aqim) which is mentioned in singular form.
                  </p>
                </div>
              </section>

              {/* Strong Winds Effect */}
              <section id="strong-winds" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  When Wind Becomes Destructive
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  While moderate winds help with pollination, scientists have
                  recently discovered that strong winds actually hinder the
                  pollination process.
                </p>
                <blockquote className="border-l-4 border-orange-500 pl-6 py-4 mb-8 bg-orange-50 dark:bg-orange-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Honeybees do not forage in rain or in wind stronger than 12
                    mph... Strong winds may injure flowers and cause loss of
                    pollen. High temperatures, wind, and low humidity may cause
                    desiccation of the style and reduce the receptive period of
                    the blossom for pollination... For fruit with more delicate
                    flowers, such as prunes, a few days of dry winds can destroy
                    crop potential. Winds reduce cross-pollination in prunes,
                    and in some cases apricot, when the desiccated pollen clumps
                    on the dehisced anthers make it more difficult for bees to
                    collect."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://energycentral.com/news/effects-wind-speed-foraging-behavior-insect-pollinators"
                      className="text-orange-600 dark:text-orange-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Energy Central. Effects of wind speed on foraging behavior
                      of insect pollinators, 2020
                    </a>
                  </cite>
                </blockquote>
                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800 mb-8">
                  <h3 className="font-medium mb-3">
                    <a
                      href="https://quran.com/en/51/41"
                      className="text-red-600 dark:text-red-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 51:41 - The Barren Wind
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And in Aad. We unleashed against them the barren wind."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤١ وَفِي عَادٍ إِذْ أَرْسَلْنَا عَلَيْهِمُ الرِّيحَ
                        الْعَقِيمَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Tafsir Explanation
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The tafsir explains that "الرِّيحَ الْعَقِيمَ" (the barren
                    wind) is mentioned in singular form because it does not
                    produce any results. Unlike the fertilizing winds (plural)
                    that bring rain and help plants reproduce, this barren wind
                    was sent as a punishment to the people of Aad, destroying
                    their crops and making the land infertile.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quranic description of wind's role in pollination
                  demonstrates a sophisticated understanding of natural
                  processes:
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    The Divine Wisdom in Wind's Dual Role
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The Quran reveals Allah's perfect system where winds serve
                      multiple purposes in nature's cycle:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                      <li>
                        <strong>Fertilizing Winds (Plural):</strong> Bring rain
                        and help plants reproduce through pollination
                      </li>
                      <li>
                        <strong>Barren Wind (Singular):</strong> Destructive
                        force that prevents plant reproduction and makes land
                        infertile
                      </li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The tafsir explains that the plural form indicates winds
                      that produce results, while the singular barren wind
                      produces nothing. This linguistic precision reflects
                      Allah's perfect knowledge of natural processes.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Quran's description of wind's role in fertilization
                  demonstrates Allah's perfect knowledge of natural processes.
                  The distinction between fertilizing winds (plural) and barren
                  wind (singular) shows divine wisdom in understanding how
                  nature's systems work. This knowledge, revealed 1400 years
                  ago, continues to amaze scholars and believers with its
                  scientific accuracy and linguistic precision.
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
              <Flower className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Nature's Reproductive Dance
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              From fertilizing winds that bring rain and life to barren winds
              that bring destruction, the Quran reveals Allah's perfect system
              of natural processes and divine wisdom.
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

export default Pollination;
