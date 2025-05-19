/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  Scale,
  BookOpen,
  Quote,
  HelpCircle,
  RotateCcw,
  ArrowUp,
  Sparkles,
  Expand,
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

type ContentItem = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const DarkEnergy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentItem[]>(() => {
    return [
      {
        id: "intro",
        title: "Universal Expansion",
        icon: Expand,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Scale,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-800 dark:from-indigo-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Dark Energy</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Cosmology - Advanced
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
              className="text-white border-white hover:bg-indigo-700"
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
                    Explore the mysteries of dark energy
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
                      <Expand className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Universal Expansion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran there are references to the heavens being
                    raised "without pillars that you can see." Skeptics have
                    dismissed this as meaningless poetry, but modern
                    cosmologists have discovered a mysterious force that holds
                    the universe apart and prevents it from collapsing: Dark
                    Energy.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Force Behind Universal Expansion
                    </h3>
                    <p>
                      Dark energy is the name given to the mysterious force that
                      is causing the universe to expand at an accelerating rate.
                      Unlike gravity, which pulls matter together, dark energy
                      pushes everything apart—the greater the distance, the
                      stronger the repulsive force becomes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Scale className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-purple-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Dark energy is an unknown form of energy that affects the
                      universe on the largest scales. The first observational
                      evidence for its existence came from measurements of
                      supernovae, which showed that the universe does not expand
                      at a constant rate; rather, the expansion of the universe
                      is accelerating. Understanding the nature of this dark
                      energy is one of the most challenging problems in modern
                      physics."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Dark_energy"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Dark Energy, 2023
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-purple-500" />{" "}
                        Counteracting Gravity
                      </h3>
                      <p>
                        Dark energy performs the function that would be expected
                        of cosmic "pillars"—it counteracts the inward pull of
                        gravity, preventing the universe from collapsing upon
                        itself.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Expand size={16} className="text-gray-500" /> Invisible
                        Force
                      </h3>
                      <p>
                        Despite making up approximately 68% of the universe's
                        total energy, dark energy remains completely invisible
                        and can only be detected through its effects on cosmic
                        expansion.
                      </p>
                    </div>
                  </div>

                  <p>
                    Dark energy was only discovered by scientists in 1998 when
                    observations of distant supernovae revealed that the
                    universe's expansion is accelerating. Without this
                    mysterious force, the gravitational attraction between
                    galaxies would have caused the universe to collapse long
                    ago.
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
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/13/2"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 13:2
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Allah is the one who raised the heavens without
                          pillars that you can see, and then settled on the
                          Throne. And He regulated the sun and the moon, each
                          running for a specified period. He manages all
                          affairs, and He explains the signs, that you may be
                          certain of the meeting with your Lord."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          اللَّهُ الَّذِي رَفَعَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ
                          تَرَوْنَهَا ۖ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۖ
                          وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ ۖ كُلٌّ يَجْرِي
                          لِأَجَلٍ مُسَمًّى ۚ يُدَبِّرُ الْأَمْرَ يُفَصِّلُ
                          الْآيَاتِ لَعَلَّكُمْ بِلِقَاءِ رَبِّكُمْ تُوقِنُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "He raised the heavens without pillars that you can see"
                      (بِغَيْرِ عَمَدٍ تَرَوْنَهَا) is particularly notable. The
                      function of pillars is to support and prevent
                      collapse—precisely what dark energy does for the universe,
                      acting in opposition to gravity.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-6">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/35/41"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 35:41
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Allah holds the heavens and the earth, lest they
                          vanish. And they would have vanished if someone else
                          tried to hold them after Him. He is Most Clement, Most
                          Forgiving."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَنْ
                          تَزُولَا ۚ وَلَئِنْ زَالَتَا إِنْ أَمْسَكَهُمَا مِنْ
                          أَحَدٍ مِنْ بَعْدِهِ ۚ إِنَّهُ كَانَ حَلِيمًا غَفُورًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Connection
                    </Badge>
                    <p className="mt-3">
                      This verse describes a force that prevents the heavens and
                      earth from "vanishing" or collapsing. Modern cosmology
                      confirms that without dark energy, the universe would
                      indeed have collapsed under the force of gravity long ago.
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
                    The correlation between modern cosmological discoveries and
                    the Quranic verses raises a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about Dark Energy?
                    </h3>
                    <p>
                      Dark energy—a mysterious force that counteracts gravity
                      and causes the universe to expand—was only discovered by
                      scientists in 1998 with advanced telescopes and
                      mathematical models. Yet the Quran appears to describe the
                      function of this force: invisible pillars holding up the
                      heavens, preventing the cosmos from collapse.
                    </p>
                  </div>

                  <p>
                    The concept of an invisible force that holds the universe
                    apart would have been completely foreign to 7th-century
                    understanding of cosmology. At that time, the prevailing
                    view was that the heavens were solid domes or spheres. The
                    description of unseen pillars supporting the heavens
                    presents a striking parallel to our modern understanding of
                    dark energy's role in cosmic architecture.
                  </p>

                  <p>
                    This connection between ancient scripture and cutting-edge
                    astrophysics invites contemplation about the origins of
                    knowledge and the depth contained in texts that preceded
                    modern scientific methods by more than a millennium.
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
            <h3 className="text-lg font-medium">Exploring Cosmic Mysteries</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of our universe continue to unfold, connecting ancient
            wisdom with modern scientific discoveries.
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

export default DarkEnergy;
