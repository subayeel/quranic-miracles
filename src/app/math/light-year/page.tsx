/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  Globe,
  BookOpen,
  Sparkles,
  HelpCircle,
  ArrowUp,
  Sigma, // Using Sigma for calculation/correlation
  Scaling, // Using Scaling for distance/measurement
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define TypeScript interface for content sections
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const LightYears = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Using a more direct ref approach mapping IDs to elements or null
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Journey to the Stars",
        icon: Star,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Cosmic Distances: Light-Years",
        icon: Scaling,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "The Star & The Earth in Quran",
        icon: BookOpen,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "correlation",
        title: "A Curious Correspondence",
        icon: Sigma,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "reflection",
        title: "Contemplating The Connection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ];
  }, []); // contents array is static, so useMemo dependency is empty

  // Set up Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element; // Store ref to element
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = sectionRefs.current[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Dependency on contents ensures re-observation if contents ever changed

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = sectionRefs.current[id]; // Use stored ref
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-900 dark:from-indigo-900 dark:to-purple-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-yellow-300" size={32} />
            <h1 className="text-4xl font-bold">Light-Years</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-200">
            Exploring Distances to the Stars
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-100 border-purple-300 hover:bg-purple-800 hover:text-white"
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
                  <CardDescription>Navigate cosmic distances</CardDescription>
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
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Star className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Journey to the Stars</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The universe is vast, with stars scattered across immense
                    distances. To measure these incredible cosmic stretches,
                    astronomers use special units. One such unit is the
                    light-year.
                  </p>
                  <p>
                    Among the myriad of stars, one shines brightest in our night
                    sky: Sirius. Known as "the Dog Star," it has fascinated
                    civilizations for millennia and holds a special mention in
                    the Quran.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      What is a Light-Year?
                    </h3>
                    <p>
                      A light-year is the distance light travels in one Earth
                      year. Since light travels at an astonishing speed (about
                      186,282 miles per second), a light-year represents a truly
                      enormous distance – about 5.88 trillion miles (9.46
                      trillion kilometers)!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence (Cosmic Distances) */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Scaling className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Cosmic Distances: Light-Years</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern astronomy allows us to measure the distances to stars
                    with remarkable accuracy using methods like stellar
                    parallax. When we turn our instruments towards Sirius, we
                    find its distance:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800 text-center">
                    <Globe
                      className="text-blue-600 dark:text-blue-400 inline-block mb-3"
                      size={36}
                    />
                    <h3 className="font-bold text-xl mb-2">
                      Distance to Sirius
                    </h3>
                    <p className="text-2xl font-semibold text-blue-700 dark:text-blue-300">
                      8.61 light-years
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      (Approximately 81.5 trillion kilometers!)
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.google.com/search?q=distance+to+sirius" // Example search link
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source: Google Search (Modern Astronomy)
                      </a>
                    </div>
                  </div>

                  <p>
                    While 8.61 light-years is the standard measure, this can be
                    expressed in smaller units. Converting to "centi
                    light-years" (hundredths of a light-year):
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3">
                    <Sigma size={20} className="text-blue-500" />
                    <div>
                      <h3 className="font-medium mb-1">Unit Conversion</h3>
                      <p>
                        8.61 light-years = 861 centi light-years (since 1
                        light-year = 100 centi light-years)
                      </p>
                    </div>
                  </div>

                  <p>
                    So, the distance to Sirius is approximately 861 centi
                    light-years. This unit, while not commonly used for stellar
                    distances, is mathematically valid.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <BookOpen className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Star & The Earth in Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran, revealed in the 7th century, contains verses that
                    mention both the star Sirius and the Earth.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/53/v/49?m=64" // Example link to 53:49
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 53:49
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "And that it is He who is the Lord of Sirius
                          (الشِّعْرَىٰ)."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">٤٩ وَأَنَّهُ هُوَ رَبُّ الشِّعْرَىٰ</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/7/v/54?m=64" // Example link to 7:54
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 7:54
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "Indeed, your Lord is Allah, who created the heavens
                          and the earth in six days and then established Himself
                          above the Throne. He causes the night to cover the
                          day, pursuing it relentlessly, and [created] the sun,
                          the moon, and the stars, subjected by His command.
                          Unquestionably, His is the creation and the command;
                          blessed is Allah, Lord of the worlds."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٥٤ إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ
                          السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ
                          اسْتَوَىٰ عَلَى الْعَرْشِ يُغْشِي اللَّيْلَ النَّهَارَ
                          يَطْلُبُهُ حَثِيثًا وَالشَّمْسَ وَالْقَمَرَ
                          وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ ۗ أَلَا لَهُ
                          الْخَلْقُ وَالْأَمْرُ ۗ تَبَارَكَ اللَّهُ رَبُّ
                          الْعَالَمِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Here we see direct mentions of Sirius (الشِّعْرَىٰ) and
                    Earth (الْأَرْضَ) in the Quran.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Correlation */}
            <section id="correlation" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Sigma className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>A Curious Correspondence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    A fascinating claim is made regarding the number of letters
                    in the Quran between the specific instance of the word
                    "الشِّعْرَىٰ" (Sirius) in Surah 53, verse 49, and the
                    specific instance of the word "الْأَرْضِ" (Earth) in Surah
                    7, verse 54.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Sparkles size={20} className="text-teal-600" /> The
                      Claimed Count
                    </h3>
                    <p>
                      According to a specific methodology of counting letters
                      within a particular standard text of the Quran, the number
                      of letters between these two specific words is calculated.
                    </p>
                    <p className="mt-3 font-mono text-center text-lg">
                      Letter Index of "الأرض" (7:54) - Letter Index of
                      "الشِّعْرَىٰ" (53:49)
                      <br />
                      286099 - 285238 ={" "}
                      <span className="font-bold text-teal-700 dark:text-teal-300">
                        861
                      </span>
                    </p>
                    <p className="mt-3">
                      This calculation suggests a count of exactly 861 letters.
                    </p>
                  </div>

                  <p>
                    Comparing this letter count (861) with the modern scientific
                    measurement of the distance to Sirius expressed in centi
                    light-years (861), we find a striking correspondence:
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3">
                    <Sparkles size={20} className="text-teal-500" />
                    <div>
                      <h3 className="font-medium mb-1">The Correspondence</h3>
                      <p>
                        Number of letters between "الشِّعْرَىٰ" (53:49) and
                        "الْأَرْضِ" (7:54) ={" "}
                        <span className="font-bold">861</span>
                      </p>
                      <p>Distance to Sirius = 861 centi light-years</p>
                    </div>
                  </div>

                  <p>
                    The number 861 appears in both a specific structural count
                    within the Quran and in a modern scientific measurement of
                    cosmic distance.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Contemplating The Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This alleged correlation between a letter count in a
                    7th-century text and a modern scientific measurement of
                    stellar distance prompts deep reflection.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800 text-center">
                    <h3 className="font-bold text-xl mb-3">
                      Considering the 7th Century
                    </h3>
                    <p>
                      In the 7th century, human knowledge of the cosmos was
                      limited to observations made with the naked eye. The
                      concept of light-years didn't exist. There were no
                      telescopes capable of measuring the tiny angles needed for
                      stellar parallax, let alone the precise distance to a star
                      like Sirius.
                    </p>
                    <p className="mt-4 font-bold">
                      How could someone living at that time possibly know about
                      the distance to Sirius, and how could a text revealed then
                      contain a numerical structure that allegedly corresponds
                      to this distance measured in a specific modern unit (centi
                      light-years)?
                    </p>
                  </div>

                  <p>
                    This specific correspondence, if found to be accurate
                    according to the counting methodology, is presented as a
                    sign pointing towards a source of knowledge beyond
                    7th-century human capacity, suggesting a divine origin for
                    the Quranic text.
                  </p>
                  <p>
                    It invites us to ponder the depths of the universe and the
                    messages found within ancient scriptures in light of modern
                    scientific discoveries.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Cosmic Miracles</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The universe holds wonders, and sometimes, science and scripture
            seem to whisper the same secrets across time.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LightYears;
