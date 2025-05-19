/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet, // Water droplet icon
  Mountain, // Mountain icon
  BookOpen,
  Quote,
  HelpCircle,
  RotateCcw, // Reusing for concepts like water cycle
  ArrowUp,
  Sparkles,
  ChevronRight,
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

// Define TypeScript interface for content sections
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind background color class for card border and icons container
  iconColor: string; // Tailwind text color class for icons
}

const FreshwaterDay: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Type the sectionRefs to map string IDs to potentially null HTMLElement references
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Freshwater on Mountains",
        icon: Mountain,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "science",
        title: "Scientific Perspective",
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
        title: "A Point to Ponder",
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
      threshold: 0.3, // Adjust threshold as needed
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
    setActiveSection(id); // Update state immediately for responsive UI
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-700 dark:from-teal-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Freshwater</h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            Exploring Earth's Vital Resource
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-teal-700 border-white hover:bg-white/10 hover:text-white"
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
                    Discover the source of freshwater
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
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Mountain className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Freshwater on Mountains</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever wondered where the purest freshwater comes
                    from? Often, it starts high up, in the form of snow and ice
                    on mountains.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3">
                      Knowledge from Long Ago
                    </h3>
                    <p>
                      Fascinatingly, 1400 years ago, a time without modern
                      scientific tools to understand the water cycle completely,
                      there was a unique mention of freshwater being associated
                      with high mountains in the Quran. At that time, the
                      precise mechanism of how saltwater from the seas becomes
                      the freshwater found on mountaintops wasn't scientifically
                      understood.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Information */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Droplet className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Perspective</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Earth's
                      Water Distribution
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Out of all the water on Earth, saline water in oceans,
                      seas and saline groundwater make up about 97% of it. Only
                      2.5-2.75% is fresh water, including 1.75-2% frozen in
                      glaciers, ice and snow, 0.5-0.75% as fresh groundwater and
                      soil moisture, and less than 0.01% of it as surface water
                      in lakes, swamps and rivers."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Fresh_water#Water_distribution"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Fresh Water, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-blue-500" /> The
                        Water Cycle & Salts
                      </h3>
                      <p>
                        Through evaporation, water turns into vapor, leaving
                        salts and impurities behind. This pure water vapor forms
                        clouds, which are then carried by winds.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain size={16} className="text-gray-500" />{" "}
                        Precipitation on Mountains
                      </h3>
                      <p>
                        When these clouds reach high altitudes, often around
                        mountains, the water vapor condenses and falls as
                        precipitation – rain or snow. The snow that accumulates
                        on high mountains is essentially frozen freshwater, free
                        from the salts of the sea.
                      </p>
                    </div>
                  </div>

                  <p>
                    Modern science clearly explains how water evaporates from
                    the seas, leaving salts behind, and returns to Earth as
                    freshwater precipitation, often accumulating as snow or ice
                    on mountains, forming vital sources of freshwater. This
                    detailed understanding is a product of centuries of
                    scientific observation and discovery.
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
                        href="https://www.quranwow.com/#/ch/77/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/27"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 77:27
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And set on it lofty mountains, and given you
                          freshwater to drink?"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٧ وَجَعَلْنَا فِيهَا رَوَاسِيَ شَامِخَاتٍ
                          وَأَسْقَيْنَاكُمْ مَاءً فُرَاتًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Meaning
                    </Badge>
                    <p className="mt-3">
                      This verse mentions the creation of "lofty mountains"
                      (رَوَاسِيَ شَامِخَاتٍ) and providing "freshwater to drink"
                      (مَاءً فُرَاتًا). While not explicitly stating the
                      *source* of freshwater *on* the mountains in detail, the
                      juxtaposition of mountains and freshwater is noted. At a
                      time when the full understanding of the water cycle and
                      the desalinating process of evaporation was unknown,
                      linking freshwater supply with mountains is significant.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific facts about freshwater and the
                    historical context of 7th-century knowledge:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this be known 1400 years ago?
                    </h3>
                    <p>
                      The fact that immense stores of freshwater exist atop high
                      mountains, derived from the oceans yet free of salt, is a
                      fundamental aspect of the water cycle that modern science
                      has elucidated. In the 7th century, without the scientific
                      understanding of evaporation, condensation, and
                      atmospheric transport, knowing that high mountains are
                      significant sources of freshwater, separated from the vast
                      saltwater oceans, presents a thought-provoking correlation
                      with the Quranic verse. It invites us to reflect on the
                      source of this knowledge.
                    </p>
                  </div>

                  <p>
                    This connection between ancient text and modern scientific
                    understanding of freshwater's journey to the mountains
                    encourages deeper contemplation about the nature of the
                    Quran's message.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-teal-600 hover:bg-teal-700">
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
            <Sparkles className="text-teal-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Water's Journey</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discovering the sources of freshwater and reflecting on ancient
            insights.
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

export default FreshwaterDay;
