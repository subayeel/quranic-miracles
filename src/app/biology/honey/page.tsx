/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  FlaskRound,
  BookOpen,
  Quote,
  HelpCircle,
  Droplet,
  ArrowUp,
  Sparkles,
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
import { Badge } from "@/components/ui/badge";

const HoneyAntibiotics = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Natural Antibiotic",
        icon: FlaskRound,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Droplet,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
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
      <div className="bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-600 dark:to-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Honey</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">Biology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-amber-700 border-white hover:bg-amber-600"
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
                    Explore honey's healing properties
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
              <Card className={`border-l-4 border-amber-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <FlaskRound className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Natural Antibiotic</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Honey is more than just a sweet treat - it's a powerful
                    natural medicine with unique properties that have been used
                    for thousands of years.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-lg mb-3">
                      Ancient Wisdom, Modern Science
                    </h3>
                    <p>
                      1400 years ago nobody knew that honey is a natural
                      antibiotic, however it was portrayed in the Quran. Today,
                      we know that when honey is applied on wounds or burns it
                      hinders the growth of microbes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Droplet className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Medical
                      Research
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Honey: Its Medicinal Property And Antibacterial Activity
                      <br />
                      <br />
                      The healing property of honey is due to the fact that it
                      offers antibacterial activity, maintains a moist wound
                      condition, and its high viscosity helps to provide a
                      protective barrier to prevent infection. Its
                      immunomodulatory property is relevant to wound repair too.
                      The antimicrobial activity in most honeys is due to the
                      enzymatic production of hydrogen peroxide. However,
                      another kind of honey, called non-peroxide honey (viz.,
                      manuka honey), displays significant antibacterial effects
                      even when the hydrogen peroxide activity is blocked. Its
                      mechanism may be related to the low pH level of honey and
                      its high sugar content (high osmolarity) that is enough to
                      hinder the growth of microbes."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3609166/"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        US National Library of Medicine, Honey: Its Medicinal
                        Property And Antibacterial Activity, 2011
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-yellow-500" />{" "}
                        Antibacterial Properties
                      </h3>
                      <p>
                        Modern research has confirmed that honey contains
                        enzymes that produce hydrogen peroxide, which kills
                        bacteria. Some special types of honey, like Manuka
                        honey, have additional antibacterial compounds.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Star size={16} className="text-amber-500" /> Wound
                        Healing
                      </h3>
                      <p>
                        Honey creates a moist healing environment, provides a
                        protective barrier against infection, and its high sugar
                        content draws water from wounds, helping to clean them.
                      </p>
                    </div>
                  </div>

                  <p className="font-medium">
                    Honey hinders the growth of microbes, which leads to faster
                    healing of wounds. This scientific understanding was only
                    confirmed recently, yet it was mentioned in the Quran 1400
                    years ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/16/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/68"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 16:68-69
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And your Lord (Allah) revealed to the bees: Build
                          your hives in mountains, trees and in what they build.
                          Then eat from every fruit and follow your Lord's
                          enslaved paths, from its bellies exits drink of
                          different colors, in it healing for man. These are
                          signs for those who contemplate."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦٨ وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي
                          مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا
                          يَعْرِشُونَ
                          <br />
                          ٦٩ ثُمَّ كُلِي مِنْ كُلِّ الثَّمَرَاتِ فَاسْلُكِي
                          سُبُلَ رَبِّكِ ذُلُلًا ۚ يَخْرُجُ مِنْ بُطُونِهَا
                          شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ
                          ۗ إِنَّ فِي ذَٰلِكَ لَآيَةً لِقَوْمٍ يَتَفَكَّرُونَ
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Point
                    </Badge>
                    <p className="mt-3">
                      "Shefa شِفَاءٌ" means healing. Here the Quran is
                      specifically referring to the healing properties of honey
                      (not just the nutritious ones). Today we know that honey
                      is a natural antibiotic, confirming what was mentioned
                      1400 years ago.
                    </p>
                  </div>
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
                    The connection between ancient texts and modern scientific
                    discoveries invites us to reflect on knowledge across time:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      honey?
                    </h3>
                    <p>
                      The Quranic description of honey as having healing
                      properties aligns perfectly with our modern scientific
                      understanding of honey as a natural antibiotic. This
                      specific mention of honey's medicinal qualities, rather
                      than just its nutritional value, raises interesting
                      questions about the source of this knowledge.
                    </p>
                  </div>

                  <p>
                    While honey has been used in traditional medicine across
                    many cultures, the specific understanding of its
                    antibacterial properties is a relatively recent scientific
                    discovery. The alignment between ancient text and modern
                    science offers a fascinating perspective on knowledge,
                    revelation, and the natural world.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-amber-600 hover:bg-amber-700">
              <Droplet size={24} />
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
            <Sparkles className="text-amber-600" size={18} />
            <h3 className="text-lg font-medium">Nature's Healing Gift</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The sweet medicine of honey continues to reveal its secrets,
            connecting ancient wisdom with modern discovery.
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

export default HoneyAntibiotics;
