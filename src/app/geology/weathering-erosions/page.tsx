/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  CloudRain,
  ChevronRight,
  Mountain,
  BookOpen,
  Quote,
  HelpCircle,
  Waves,
  ArrowUp,
  Sparkles,
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

// Define TypeScript interfaces for the component
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

const WeatheringErosion: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Smoothing Rocks",
        icon: CloudRain,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Mountain,
        color: "bg-slate-100 dark:bg-slate-900",
        iconColor: "text-slate-500",
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
      <div className="bg-gradient-to-r from-blue-500 to-teal-700 dark:from-blue-700 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <CloudRain className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Weathering & Erosion</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">Geology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-600"
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
                    Explore Earth's sculpting processes
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
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <CloudRain className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Smoothing Rocks</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there is a reference to rain smoothing rocks.
                    Skeptics might claim that whoever wrote the Quran simply
                    observed common natural phenomena, but the scientific
                    understanding of weathering and erosion processes was not
                    established until much later in history.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Water's Transformative Power
                    </h3>
                    <p>
                      The process of water gradually smoothing and polishing
                      rough rock surfaces is a fundamental aspect of weathering
                      and erosion. This occurs through the friction between
                      moving water, sometimes carrying sand particles, and
                      stationary rock surfaces over extended periods.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-slate-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                      <Mountain className="text-slate-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-lg border border-slate-100 dark:border-slate-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-slate-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Erosion and Weathering: Weathering and erosion slowly
                      chisel, polish, and buff Earth's rock into ever evolving
                      works of art-and then wash the remains into the sea. The
                      processes are definitively independent, but not exclusive.
                      Weathering is the mechanical and chemical hammer that
                      breaks down and sculpts the rocks. Erosion transports the
                      fragments away. Working together they create and reveal
                      marvels of nature from tumbling boulders high in the
                      mountains to sandstone arches in the parched desert to
                      polished cliffs braced against violent seas."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.nationalgeographic.com/environment/article/weathering-and-erosion"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Geographic, Erosion and Weathering, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Waves size={16} className="text-blue-500" /> Water's
                        Effect
                      </h3>
                      <p>
                        When water flows over rock surfaces, it creates
                        friction. This friction, especially when the water
                        carries sand particles, gradually smooths and polishes
                        the rock surface through a process of abrasion.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain size={16} className="text-gray-500" /> Surface
                        Transformation
                      </h3>
                      <p>
                        The process of weathering and erosion transforms rough,
                        angular rock surfaces into smooth, polished ones over
                        time. This scientific understanding was only fully
                        developed in modern geology.
                      </p>
                    </div>
                  </div>

                  <p>
                    The detailed understanding of how water smooths rock
                    surfaces through friction and abrasion is a relatively
                    recent scientific development. While people throughout
                    history may have observed smooth rocks in riverbeds, the
                    complete scientific understanding of these processes was not
                    established in the 7th century CE.
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
                        href="https://quran.com/2/264"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:264
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "O you who believe! Do not nullify your charitable
                          deeds with reminders and hurtful words, like him who
                          spends his wealth to be seen by the people, and does
                          not believe in Allah and the Last Day. His likeness is
                          that of a rock covered with sand, a downpour strikes
                          it, and leaves it smooth. They gain nothing from their
                          efforts. Allah does not guide the disbelieving
                          people."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٦٤ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُبْطِلُوا
                          صَدَقَاتِكُمْ بِالْمَنِّ وَالْأَذَىٰ كَالَّذِي
                          يُنْفِقُ مَالَهُ رِئَاءَ النَّاسِ وَلَا يُؤْمِنُ
                          بِاللَّهِ وَالْيَوْمِ الْآخِرِ ۖ فَمَثَلُهُ كَمَثَلِ
                          صَفْوَانٍ عَلَيْهِ تُرَابٌ فَأَصَابَهُ وَابِلٌ
                          فَتَرَكَهُ صَلْدًا ۖ لَا يَقْدِرُونَ عَلَىٰ شَيْءٍ
                          مِمَّا كَسَبُوا ۗ وَاللَّهُ لَا يَهْدِي الْقَوْمَ
                          الْكَافِرِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Terminology
                    </Badge>
                    <p className="mt-3">
                      In this verse, "Safwan صَفْوَانٍ" refers to a type of
                      rock, and "Saldan صَلْدًا" means smooth. The verse
                      describes how rainwater hitting a rock covered with sand
                      leaves it smooth. This precisely describes the weathering
                      and erosion process where the friction between water
                      (sometimes carrying sand) and stationary rock surfaces
                      gradually smooths the rock.
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
                    The correlation between modern scientific understanding of
                    weathering and erosion and the Quranic verse raises an
                    intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about weathering and erosion?
                    </h3>
                    <p>
                      While people throughout history have observed smooth rocks
                      in nature, the specific understanding that rain and sand
                      work together to smooth rock surfaces through friction—a
                      process now known as weathering and erosion—was not
                      scientifically established until much later. The accurate
                      description in the Quran of this natural process invites
                      contemplation about the origins of such knowledge in the
                      7th century CE.
                    </p>
                  </div>

                  <p>
                    The detailed scientific understanding of weathering and
                    erosion processes has only been fully developed in modern
                    times. The Quranic verse's reference to rain striking a rock
                    covered with sand and leaving it smooth aligns remarkably
                    well with our current understanding of these geological
                    processes. This raises fascinating questions about how such
                    knowledge could be present in a text from 1400 years ago.
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Earth's Processes</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intricate processes that shape our planet continue to reveal
            connections between ancient texts and modern scientific
            understanding.
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

export default WeatheringErosion;
