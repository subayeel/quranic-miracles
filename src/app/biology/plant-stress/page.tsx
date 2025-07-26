/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Leaf,
  HelpCircle,
  Wind,
  Droplet,
  ArrowUp,
  AlertTriangle,
} from "lucide-react";

const PlantStress = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Leaf Yellowing",
        icon: Leaf,
      },
      {
        id: "water",
        title: "Water Stress",
        icon: Droplet,
      },
      {
        id: "wind",
        title: "Wind Stress",
        icon: Wind,
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
              <Leaf className="text-green-600 dark:text-green-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Plant Stress
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Biology • Extreme
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
                  Leaf Yellowing
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Plant leaves turning yellow is a common sign of stress.
                  Understanding what causes this phenomenon helps us better care
                  for our plants.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Knowledge, Modern Science
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    1400 years ago, the Quran discussed water and wind in
                    relation to leaf yellowing. Today, scientists confirm that
                    both too much water and too little water, as well as wind
                    exposure, can turn leaves yellow—a fascinating connection
                    between ancient texts and modern botanical understanding.
                  </p>
                </div>
              </section>

              {/* Water Stress */}
              <section id="water" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Water Stress
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Both too much and too little water can cause plants to stress,
                  resulting in yellow leaves.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Leaf yellowing is often one of the first symptoms of plant
                    stress. If the stress causing condition is not alleviated,
                    yellow leaves may turn brown. A prolonged period of
                    environmental stress causes overall stunting and poor
                    growth. Noticing the pattern and progression of symptoms
                    will help to diagnose the cause of the problem... Drought:
                    Plants wilt and leaves curl when roots are unable to supply
                    sufficient moisture to the stems and leaves. Wilting for
                    short periods of time does not harm plants. Sometimes a
                    plant wilts on a hot day because moisture is evaporating
                    from the leaves faster than the roots can supply it. If
                    there is ample soil moisture, the plant will absorb water in
                    the evening to firm up the stems and leaves. Over a
                    prolonged period, however, drought will cause serious
                    damage, such as yellowing, leaf scorch, browning, or leaf
                    drop and stunted growth. Extended periods of drought also
                    inhibit flower formation. Severe heat and water stress when
                    a plant is in bloom may cause scorching or browning of
                    flower buds and blossoms. Plants vary in their ability to
                    tolerate drought and some may die suddenly after extended
                    periods of drought. Excess Water: Problems with excess water
                    can result from poorly drained soil or overwatering. Excess
                    water reduces oxygen in the soil, which damages fine roots
                    and renders the plant unable to take up water. Plants
                    exposed to excess moisture show the same symptoms as plants
                    under drought stress. The primary symptom of excess moisture
                    is wilting or yellowing of lower and inner leaves. If excess
                    water continues, plants may show other drought symptoms,
                    such as scorch, leaf drop, and/ or plant death."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://extension.umd.edu/resource/leaf-yellowing-problems-flowers"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      University Of Maryland, Leaf Yellowing - Environmental
                      Stress, 2019
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <AlertTriangle size={20} className="text-amber-500" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Drought Stress
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      When plants don't get enough water, the leaves turn yellow
                      as the plant struggles to conserve resources. This is a
                      common defense mechanism that helps plants survive periods
                      of drought.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Droplet
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Overwatering
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Too much water depletes oxygen in the soil, damaging roots
                      and preventing proper water uptake. Ironically, this can
                      cause the same yellowing symptoms as drought.
                    </p>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="font-medium mb-3">Quranic Reference</h3>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h4 className="mb-3">
                      <a
                        href="https://quran.com/en/39/21"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 39:21
                      </a>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                          "Have you not considered how Allah sends down water
                          from the sky, then He makes it flow into underground
                          wells, then He produces with it plants of various
                          colors, then they wither and you see them yellowing,
                          then He turns them into debris? Surely in this is a
                          reminder for those with understanding."
                        </p>
                      </div>
                      <div className="font-arabic text-right text-xl leading-relaxed">
                        <p
                          dir="rtl"
                          className="text-gray-800 dark:text-gray-100"
                        >
                          أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ
                          مَاءً فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ ثُمَّ
                          يُخْرِجُ بِهِ زَرْعًا مُخْتَلِفًا أَلْوَانُهُ ثُمَّ
                          يَهِيجُ فَتَرَاهُ مُصْفَرًّا ثُمَّ يَجْعَلُهُ حُطَامًا
                          ۚ إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِأُولِي الْأَلْبَابِ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Here water is clearly related to the yellowing of leaves. This
                  connection made 1400 years ago aligns perfectly with our
                  modern understanding of how water stress (both excess and
                  deficiency) affects plant health.
                </p>
              </section>

              {/* Wind Stress */}
              <section id="wind" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Wind Stress
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Wind is another environmental factor that can cause plants to
                  experience stress and exhibit yellowing leaves.
                </p>
                <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-lg border border-sky-100 dark:border-sky-800 mb-8">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Wind size={16} className="text-sky-500" /> Wind Burn
                  </h3>
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "Wind-burned leaves are often curved under and form "claws."
                    They can look like they're droopy from overwatering,
                    underwatering, or possible a nitrogen toxicity, but you know
                    you've got wind-burn when the leaves in front of the fan are
                    clawing, and leaves further away from the fan look fine."
                  </p>
                  <div className="mt-3 text-sm">
                    <a
                      href="https://www.growweedeasy.com/cannabis-plant-problems/wind-burn"
                      className="text-sky-600 dark:text-sky-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GrowWeedEasy, Wind Burn, 2019
                    </a>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  "Wind-burn" occurs when wind accelerates the evaporation of
                  water from leaves, essentially mimicking drought conditions.
                  This increased water loss causes stress to the plant,
                  resulting in yellowing leaves similar to what happens during
                  water deficiency.
                </p>
                <div className="mb-8">
                  <h3 className="font-medium mb-3">Quranic Reference</h3>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h4 className="mb-3">
                      <a
                        href="https://quran.com/en/30/51"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 30:51
                      </a>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                          "But if We send a wind, and they see it turning things
                          yellow, they would continue thereafter to disbelieve."
                        </p>
                      </div>
                      <div className="font-arabic text-right text-xl leading-relaxed">
                        <p
                          dir="rtl"
                          className="text-gray-800 dark:text-gray-100"
                        >
                          وَلَئِنْ أَرْسَلْنَا رِيحًا فَرَأَوْهُ مُصْفَرًّا
                          لَظَلُّوا مِنْ بَعْدِهِ يَكْفُرُونَ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This verse explicitly connects wind to plant yellowing.
                  Today's plant science confirms this relationship, explaining
                  that wind increases water evaporation from leaves, creating
                  drought-like conditions that result in yellowing.
                </p>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The correlation between ancient texts and modern scientific
                  understanding invites deeper reflection:
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    these plant stress factors?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic descriptions of both water and wind causing
                    plant yellowing align with modern botanical science. While
                    basic observation might show that plants can yellow
                    naturally, the specific connections to both water cycles and
                    wind effects represent a remarkable correlation with
                    scientific understanding that wasn't fully documented until
                    much later.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Plants experience stress in ways similar to animals and
                  humans. When environmental conditions aren't optimal—whether
                  it's too much water, too little water, or harsh winds—they
                  show signs of distress. The ancient recognition of these
                  relationships in the Quran, particularly the specific mention
                  of both water and wind as factors in leaf yellowing, presents
                  an interesting convergence with modern scientific
                  understanding.
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
              <Leaf className="text-green-600 dark:text-green-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Nature's Warning Signs
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Yellow leaves are a plant's way of communicating stress - learning
              to read these signals helps us better care for our green
              companions.
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
          className="bg-green-600 dark:bg-green-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PlantStress;
