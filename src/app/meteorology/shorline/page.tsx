/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Waves, // Using Waves icon for shorelines
  ChevronRight,
  Thermometer, // Using Thermometer for global warming/science
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles, // Using Sparkles for reflection/wonder
  MapPin, // Could use MapPin for location/shore
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
import { LucideIcon } from "lucide-react"; // Import LucideIcon type

// Define a type for the content sections
interface ContentSection {
  id: string;
  title: string;
  icon: LucideIcon; // Use the imported type
  color: string;
  iconColor: string;
}

const Shorelines = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Receding Shorelines",
        icon: Waves,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-600",
      },
      {
        id: "science",
        title: "Scientific Understanding",
        icon: Thermometer, // Or Waves again? Let's use Thermometer for the cause.
        color: "bg-blue-100 dark:bg-blue-900", // Using blue as in AstronomyDay for science
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Using green as in AstronomyDay for Quran
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Using amber as in AstronomyDay for reflection
        iconColor: "text-amber-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the section is visible
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
  }, [contents]); // Dependency array includes contents

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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-800 dark:from-cyan-800 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Shorelines</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">Meteorology - Easy</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-cyan-700 hover:bg-cyan-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-cyan-700 border-white hover:bg-white/10"
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
                    Explore the changing edges of land
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
              <Card className="border-l-4 border-cyan-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <Waves className="text-cyan-600" size={24} />
                    </div>
                    <CardTitle>Receding Shorelines</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there's a verse that speaks about the land
                    diminishing at its edges. For a long time, some might have
                    wondered about this, thinking shorelines only change with
                    the tides, gaining back what they lose. However, modern
                    science confirms that shorelines across the globe are indeed
                    receding.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3">
                      Global Warming and Sea Level Rise
                    </h3>
                    <p>
                      Today, we understand that the primary cause for this
                      recession is global warming. As the planet heats up, ice
                      at the poles and glaciers melt, significantly increasing
                      the volume of water in the world's oceans. This rise in
                      sea level causes the ocean to creep further inland,
                      leading to the recession of coastlines.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Understanding */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Thermometer className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Understanding</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Scientific data from recent decades has provided clear
                    evidence of rising global sea levels and their impact on
                    coastlines. The melting of large ice sheets, particularly in
                    Greenland and Antarctica, is a major contributor.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Evidence
                      from Greenland
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Greenland is melting even faster than experts thought...
                      Climate change is eliminating giant chunks of ice from
                      Greenland at such a speed that the melt has already made a
                      significant contribution to sea level rise... The
                      researchers found that the rate of ice loss has increased
                      sixf old since then -- even faster than scientists
                      thought."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://edition.cnn.com/2019/04/22/world/greenland-sea-level-rise-scn/index.html"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CNN, April 22, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Waves size={16} className="text-cyan-500" /> Sea Level
                        Rise
                      </h3>
                      <p>
                        As global temperatures increase, thermal expansion of
                        seawater and the influx of meltwater from glaciers and
                        ice sheets cause the average sea level to rise globally.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <MapPin size={16} className="text-gray-500" /> Coastal
                        Impact
                      </h3>
                      <p>
                        This persistent rise in sea level encroaches upon
                        low-lying coastal areas, leading to erosion and the
                        permanent loss of land along shorelines worldwide.
                      </p>
                    </div>
                  </div>

                  <p>
                    The scientific consensus today is clear: global warming is
                    causing sea levels to rise, resulting in the measurable
                    recession of shorelines.
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
                        href="https://www.quranwow.com/#/ch/13/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/41"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 13:41
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Do they not see how We deal with the land,
                          diminishing it at its edges? Allah judges; and nothing
                          can hold back His judgment. And He is quick to settle
                          accounts."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤١ أَوَلَمْ يَرَوْا أَنَّا نَأْتِي الْأَرْضَ
                          نَنْقُصُهَا مِنْ أَطْرَافِهَا ۚ وَاللَّهُ يَحْكُمُ لَا
                          مُعَقِّبَ لِحُكْمِهِ ۚ وَهُوَ سَرِيعُ الْحِسَابِ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "نَنْقُصُهَا مِنْ أَطْرَافِهَا" (nanqusuha min
                      atrafiha) translates to "diminishing it at its edges." The
                      word "الْأَرْضَ" (al-ard) can mean both 'Earth' and
                      'land.' Given the context of 'edges,' this verse speaks to
                      the land mass being reduced specifically at its perimeters
                      or boundaries—precisely where shorelines are located.
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
                    Connecting the Quranic verse with our modern scientific
                    understanding presents a thought-provoking question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this knowledge about shorelines receding have
                      been known in the 7th century?
                    </h3>
                    <p>
                      In the 7th century, understanding the dynamics of
                      shorelines would primarily involve observing tidal changes
                      and perhaps coastal erosion due to storms. The idea that
                      land itself was *diminishing* at its edges due to a
                      large-scale, persistent phenomenon like rising sea levels
                      caused by melting polar ice caps was entirely beyond the
                      scope of human knowledge and observational capabilities at
                      the time. This understanding relies on sophisticated
                      global measurements and the scientific comprehension of
                      climate change, which are very recent developments. The
                      mention of the land diminishing at its edges in the Quran,
                      therefore, stands out as a point of contemplation
                      regarding its source.
                    </p>
                  </div>

                  <p>
                    This alignment between ancient scripture and modern
                    scientific discovery encourages reflection on the nature of
                    the Quran's knowledge.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-cyan-700 hover:bg-cyan-800">
              <Waves size={24} />
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
            <Sparkles className="text-cyan-600" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Earth's Changing Edges
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Our understanding of the planet continues to evolve, revealing
            fascinating connections between ancient texts and modern science.
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

export default Shorelines;
