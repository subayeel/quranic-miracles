/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Globe,
  ChevronRight,
  Clock,
  BookOpen,
  Quote,
  HelpCircle,
  Scale,
  ArrowUp,
  Sparkles,
  Compass,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define section type for better TypeScript support
type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const UniverseAge: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<Section[]>(() => {
    return [
      {
        id: "intro",
        title: "Universe vs Earth Age",
        icon: Globe,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Clock,
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
        id: "relativity",
        title: "Time Relativity",
        icon: Scale,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Age of the Universe</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Astronomy - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-100 hover:bg-indigo-700"
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
                    Explore the relationship between Earth and Universe age
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
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Globe className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Universe vs Earth Age</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran states that the universe is three times the age of
                    Earth. Skeptics have claimed this was a copying mistake, but
                    modern cosmology confirms this ratio is accurate.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      The 1:3 Ratio in Modern Science
                    </h3>
                    <p>
                      According to modern cosmology, the universe is
                      approximately 13.8 billion years old, while Earth formed
                      about 4.6 billion years ago. This places the age of Earth
                      at roughly one-third the age of the universe (4.6/13.8 ≈
                      1/3).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Clock className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Measurements
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The age of the universe is approximately 13.77 billion
                      years, based on measurements of cosmic microwave
                      background radiation and other cosmological parameters.
                      The Earth is estimated to be about 4.54 billion years old,
                      based on radiometric dating of meteorite material."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Modern Cosmology & Astrophysics
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Clock size={16} className="text-blue-500" /> Universe
                        Age
                      </h3>
                      <p>
                        The universe began with the Big Bang approximately 13.8
                        billion years ago. This age is determined through
                        measurements of cosmic microwave background radiation
                        and the expansion rate of the universe.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Compass size={16} className="text-green-500" /> Earth
                        Formation
                      </h3>
                      <p>
                        Earth began forming around 4.6 billion years ago, along
                        with our solar system. This age is determined through
                        radiometric dating of the oldest rocks and meteorites
                        found on Earth.
                      </p>
                    </div>
                  </div>

                  <p>
                    These scientific discoveries about the age of the universe
                    relative to Earth were made only in the 20th century with
                    advanced technology and mathematical models. Yet remarkably,
                    the Quran mentioned this 1:3 ratio over 1400 years ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
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
                    <h3 className="font-medium mb-3">Key Verses</h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="mb-2 font-semibold">Quran 41:9</p>
                        <p className="italic mb-4">
                          "Say: 'Is it that you deny Him [Allah] who created the
                          Earth in two days? And you claim others to be equal to
                          Him? He is the Lord of (all) the Worlds.'"
                        </p>
                        <p className="mb-2 font-semibold">Quran 50:38</p>
                        <p className="italic mb-4">
                          "And we have created the Heavens and Earth and
                          EVERYTHING IN BETWEEN in six days and We were not
                          touched by fatigue."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl" className="mb-2">
                          ٩ قُلْ أَئِنَّكُمْ لَتَكْفُرُونَ بِالَّذِي خَلَقَ
                          الْأَرْضَ فِي يَوْمَيْنِ وَتَجْعَلُونَ لَهُ أَنْدَادًا
                          ۚ ذَٰلِكَ رَبُّ الْعَالَمِينَ
                        </p>
                        <p dir="rtl">
                          ٣٨ وَلَقَدْ خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا
                          بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ وَمَا مَسَّنَا مِنْ
                          لُغُوبٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Insight
                    </Badge>
                    <p className="mt-3">
                      According to these verses, Earth was created in two days,
                      while the entire universe (the Heavens, Earth, and
                      everything in between) was created in six days. This
                      places Earth's creation at one-third of the total creation
                      period (2/6 = 1/3).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Time Relativity */}
            <section id="relativity" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Scale className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Time Relativity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran also acknowledges the concept of time relativity,
                    which wasn't scientifically understood until Einstein's
                    theories in the early 20th century:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2">Quran 22:47</h3>
                    <p className="italic mb-4">
                      "They challenge you to bring forth that torture [in Hell]
                      and Allah will not break His promise; a day of your Lord
                      [Paradise/Hell] is like a thousand years of what you
                      count."
                    </p>
                    <p dir="rtl" className="font-arabic text-right text-lg">
                      ٤٧ وَيَسْتَعْجِلُونَكَ بِالْعَذَابِ وَلَنْ يُخْلِفَ
                      اللَّهُ وَعْدَهُ ۚ وَإِنَّ يَوْمًا عِنْدَ رَبِّكَ كَأَلْفِ
                      سَنَةٍ مِمَّا تَعُدُّونَ
                    </p>
                  </div>

                  <div className="mt-4">
                    <p>
                      This verse suggests that time passes differently in
                      different reference frames, similar to what Einstein's
                      theory of general relativity would later demonstrate -
                      that time is affected by gravity and moves at different
                      rates depending on gravitational fields.
                    </p>
                    <p className="mt-2">
                      The Quran's reference frame for creation is God's Throne,
                      not Earth. Using this cosmic reference frame explains how
                      6 divine "days" could correspond to 13.8 billion Earth
                      years, while maintaining the 1:3 ratio between Earth's age
                      and the universe's age.
                    </p>
                  </div>
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
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern scientific findings and the
                    Quranic verses raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man in the 7th century have known the universe
                      is three times older than Earth?
                    </h3>
                    <p>
                      The precise 1:3 ratio between Earth's age and the
                      universe's age—a scientific fact discovered only recently
                      with advanced technology—appears to be referenced in the
                      Quran 1400 years ago. This remarkable connection invites
                      reflection on the source of such knowledge in a
                      pre-scientific era.
                    </p>
                  </div>

                  <p>
                    This cosmic timescale was completely unknown in the 7th
                    century. In fact, most ancient cosmologies placed Earth's
                    creation at the same time as the heavens. The Bible
                    similarly suggests Earth was created on day one, making it
                    equal in age to the universe. The Quran's
                    distinction—placing Earth's creation at one-third the age of
                    the universe—stands out as uniquely aligned with modern
                    scientific understanding.
                  </p>

                  <p>
                    More remarkable still is the Quran's presentation of this as
                    a ratio rather than absolute timeframes. As we now
                    understand through Einstein's relativity, time is relative
                    to the observer. By expressing the relationship as a ratio
                    (1/3), it remains correct regardless of the reference frame
                    used to measure cosmic time.
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
            <Sparkles className="text-indigo-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Cosmic Origins</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of our universe continue to unfold, connecting ancient
            texts with modern scientific discoveries.
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

export default UniverseAge;
