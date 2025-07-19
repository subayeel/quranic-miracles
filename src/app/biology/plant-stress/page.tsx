/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Leaf,
  Quote,
  HelpCircle,
  Wind,
  Droplet,
  ArrowUp,
  AlertTriangle,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PlantStress = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Leaf Yellowing",
        icon: Leaf,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "water",
        title: "Water Stress",
        icon: Droplet,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "wind",
        title: "Wind Stress",
        icon: Wind,
        color: "bg-sky-100 dark:bg-sky-900",
        iconColor: "text-sky-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-600 dark:to-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="text-green-200" size={32} />
            <h1 className="text-4xl font-bold">Plant Stress</h1>
          </div>
          <p className="text-xl max-w-2xl text-green-100">Biology - Extreme</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => scrollToSection("water")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-green-700 border-white hover:bg-green-600"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Explore plant stress factors
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium"
                            : ""
                        }`}
                      >
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {activeSection === id && (
                          <ChevronRight className="ml-auto" size={16} />
                        )}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="intro" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Leaf className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Leaf Yellowing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Plant leaves turning yellow is a common sign of stress.
                    Understanding what causes this phenomenon helps us better
                    care for our plants.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">
                      Ancient Knowledge, Modern Science
                    </h3>
                    <p>
                      1400 years ago, the Quran discussed water and wind in
                      relation to leaf yellowing. Today, scientists confirm that
                      both too much water and too little water, as well as wind
                      exposure, can turn leaves yellow—a fascinating connection
                      between ancient texts and modern botanical understanding.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Water Stress */}
            <section id="water" className="scroll-mt-20">
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Droplet className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Water Stress</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Both too much and too little water can cause plants to
                    stress, resulting in yellow leaves.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Evidence
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Leaf Yellowing - Environmental Stress
                      <br />
                      <br />
                      Leaf yellowing is often one of the first symptoms of plant
                      stress. If the stress causing condition is not alleviated,
                      yellow leaves may turn brown. A prolonged period of
                      environmental stress causes overall stunting and poor
                      growth. Noticing the pattern and progression of symptoms
                      will help to diagnose the cause of the problem...
                      <br />
                      <br />
                      <strong>Drought</strong>
                      <br />
                      Plants wilt and leaves curl when roots are unable to
                      supply sufficient moisture to the stems and leaves.
                      Wilting for short periods of time does not harm plants.
                      Sometimes a plant wilts on a hot day because moisture is
                      evaporating from the leaves faster than the roots can
                      supply it. If there is ample soil moisture, the plant will
                      absorb water in the evening to firm up the stems and
                      leaves. Over a prolonged period, however, drought will
                      cause serious damage, such as yellowing, leaf scorch,
                      browning, or leaf drop and stunted growth. Extended
                      periods of drought also inhibit flower formation. Severe
                      heat and water stress when a plant is in bloom may cause
                      scorching or browning of flower buds and blossoms. Plants
                      vary in their ability to tolerate drought and some may die
                      suddenly after extended periods of drought.
                      <br />
                      <br />
                      <strong>Excess Water</strong>
                      <br />
                      Problems with excess water can result from poorly drained
                      soil or overwatering. Excess water reduces oxygen in the
                      soil, which damages fine roots and renders the plant
                      unable to take up water. Plants exposed to excess moisture
                      show the same symptoms as plants under drought stress. The
                      primary symptom of excess moisture is wilting or yellowing
                      of lower and inner leaves. If excess water continues,
                      plants may show other drought symptoms, such as scorch,
                      leaf drop, and/ or plant death."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://extension.umd.edu/resource/leaf-yellowing-problems-flowers"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        University Of Maryland, Leaf Yellowing - Environmental
                        Stress, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-amber-500" />{" "}
                        Drought Stress
                      </h3>
                      <p>
                        When plants don't get enough water, the leaves turn
                        yellow as the plant struggles to conserve resources.
                        This is a common defense mechanism that helps plants
                        survive periods of drought.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplet size={16} className="text-blue-500" />{" "}
                        Overwatering
                      </h3>
                      <p>
                        Too much water depletes oxygen in the soil, damaging
                        roots and preventing proper water uptake. Ironically,
                        this can cause the same yellowing symptoms as drought.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Quranic Reference</h3>
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h4 className="mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/39/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/21"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 39:21
                        </a>
                      </h4>
                      <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="md:w-1/2">
                          <p className="italic mb-4">
                            "Have you not considered how Allah sends down water
                            from the sky, then He makes it flow into underground
                            wells, then He produces with it plants of various
                            colors, then they wither and you see them yellowing,
                            then He turns them into debris? Surely in this is a
                            reminder for those with understanding."
                          </p>
                        </div>
                        <div className="md:w-1/2 font-arabic text-right text-lg">
                          <p dir="rtl">
                            أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ
                            مَاءً فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ ثُمَّ
                            يُخْرِجُ بِهِ زَرْعًا مُخْتَلِفًا أَلْوَانُهُ ثُمَّ
                            يَهِيجُ فَتَرَاهُ مُصْفَرًّا ثُمَّ يَجْعَلُهُ
                            حُطَامًا ۚ إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِأُولِي
                            الْأَلْبَابِ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    Here water is clearly related to the yellowing of leaves.
                    This connection made 1400 years ago aligns perfectly with
                    our modern understanding of how water stress (both excess
                    and deficiency) affects plant health.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Wind Stress */}
            <section id="wind" className="scroll-mt-20">
              <Card className={`border-l-4 border-sky-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900">
                      <Wind className="text-sky-500" size={24} />
                    </div>
                    <CardTitle>Wind Stress</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Wind is another environmental factor that can cause plants
                    to experience stress and exhibit yellowing leaves.
                  </p>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="">
                      <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-lg border border-sky-100 dark:border-sky-800">
                        <h3 className="font-medium mb-2 flex items-center gap-2">
                          <Quote size={16} className="text-sky-500" /> Wind Burn
                        </h3>
                        <p className="italic text-gray-700 dark:text-gray-300">
                          "Wind-burned leaves are often curved under and form
                          "claws." They can look like they're droopy from
                          overwatering, underwatering, or possible a nitrogen
                          toxicity, but you know you've got wind-burn when the
                          leaves in front of the fan are clawing, and leaves
                          further away from the fan look fine."
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
                    </div>
                  </div>

                  <p>
                    "Wind-burn" occurs when wind accelerates the evaporation of
                    water from leaves, essentially mimicking drought conditions.
                    This increased water loss causes stress to the plant,
                    resulting in yellowing leaves similar to what happens during
                    water deficiency.
                  </p>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Quranic Reference</h3>
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h4 className="mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/30/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/51"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 30:51
                        </a>
                      </h4>
                      <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="md:w-1/2">
                          <p className="italic mb-4">
                            "But if We send a wind, and they see it turning
                            things yellow, they would continue thereafter to
                            disbelieve."
                          </p>
                        </div>
                        <div className="md:w-1/2 font-arabic text-right text-lg">
                          <p dir="rtl">
                            وَلَئِنْ أَرْسَلْنَا رِيحًا فَرَأَوْهُ مُصْفَرًّا
                            لَظَلُّوا مِنْ بَعْدِهِ يَكْفُرُونَ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    This verse explicitly connects wind to plant yellowing.
                    Today's plant science confirms this relationship, explaining
                    that wind increases water evaporation from leaves, creating
                    drought-like conditions that result in yellowing.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className={`border-l-4 border-purple-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between ancient texts and modern scientific
                    understanding invites deeper reflection:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      these plant stress factors?
                    </h3>
                    <p>
                      The Quranic descriptions of both water and wind causing
                      plant yellowing align with modern botanical science. While
                      basic observation might show that plants can yellow
                      naturally, the specific connections to both water cycles
                      and wind effects represent a remarkable correlation with
                      scientific understanding that wasn't fully documented
                      until much later.
                    </p>
                  </div>

                  <p>
                    Plants experience stress in ways similar to animals and
                    humans. When environmental conditions aren't optimal—whether
                    it's too much water, too little water, or harsh winds—they
                    show signs of distress. The ancient recognition of these
                    relationships in the Quran, particularly the specific
                    mention of both water and wind as factors in leaf yellowing,
                    presents an interesting convergence with modern scientific
                    understanding.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700">
              <Leaf size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
                  className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-gray-800 font-medium"
                      : ""
                  }`}
                >
                  <Icon className={iconColor} size={18} />
                  <span>{title}</span>
                  {activeSection === id && (
                    <ChevronRight className="ml-auto" size={16} />
                  )}
                </button>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Leaf className="text-green-600" size={18} />
            <h3 className="text-lg font-medium">Nature's Warning Signs</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Yellow leaves are a plant's way of communicating stress - learning
            to read these signals helps us better care for our green companions.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlantStress;
