/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet, // Using Droplet for Dew/Water
  ChevronRight,
  CloudDrizzle, // Using CloudDrizzle for Science/Meteorology
  BookOpen, // Same as AstronomyDay
  HelpCircle, // Same as AstronomyDay
  ArrowUp, // Same as AstronomyDay
  Sparkles,
  Quote, // Same as AstronomyDay
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

// Define types for clarity and safety
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for the Lucide icon component
  color: string; // Tailwind color classes for background
  iconColor: string; // Tailwind color classes for icon text
}

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

const DewFact: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  // Define the content structure with types
  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Dew Reaches Driest Lands",
        icon: Droplet,
        color: "bg-blue-100 dark:bg-blue-900", // Using a blue theme for water/dew
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Confirmation",
        icon: CloudDrizzle,
        color: "bg-cyan-100 dark:bg-cyan-900", // Using cyan for science/meteorology
        iconColor: "text-cyan-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Green for Quran/Islam
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Timeless Insight",
        icon: HelpCircle,
        color: "bg-indigo-100 dark:bg-indigo-900", // Indigo for reflection
        iconColor: "text-indigo-500",
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
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-700 dark:from-blue-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Dew</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            Meteorology - Simple
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700 dark:text-blue-200 border-white/50 hover:bg-white/10"
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
                    Explore how dew nurtures even the driest places
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
                      <Droplet className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Dew Reaches Driest Lands</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever wondered how life persists in the most arid
                    corners of the Earth? While rain is scarce or non-existent
                    in extreme deserts, another source of moisture quietly works
                    its magic: dew.
                  </p>
                  <p>
                    Traditionally, one might assume that regions without
                    rainfall are completely devoid of external water sources.
                    However, both modern science and a passage in the Quran
                    offer a fascinating perspective on how even the driest
                    places receive essential moisture.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">Beyond the Rain</h3>
                    <p>
                      Skeptics in the past, and perhaps some today, might argue
                      that without rain, a place receives no water from the sky.
                      Yet, dew formation is a subtle process that provides vital
                      hydration to plants and small creatures, even where rain
                      clouds rarely gather.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <CloudDrizzle className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>Scientific Confirmation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern meteorology and ecological studies have confirmed the
                    significant role of dew, especially in arid environments.
                    While dew amounts per night are small, they can accumulate
                    and provide critical moisture.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-cyan-500" /> Dew's Role
                      in Dry Climates
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Due to its dependence on radiation balance, dew amounts
                      can reach a theoretical maximum of about 0.8 mm per
                      night... In regions with considerable dry seasons, adapted
                      plants like lichen or pine seedlings benefit from dew...
                      In the Negev Desert in Israel, dew has been found to
                      account for almost half of the water found in three
                      dominant desert species..."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Dew"
                        className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Dew, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    Even the most extreme deserts, places where rain might not
                    fall for years, receive moisture from the atmosphere.
                  </p>

                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-cyan-500" /> The Driest
                      Place on Earth
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The Atacama Desert is commonly known as the driest place
                      in the world... some weather stations in the Atacama have
                      never received rain... However, some locations in the
                      Atacama receive a marine fog known locally as the
                      camanchaca, providing sufficient moisture for hypolithic
                      algae, lichens, and even some cacti..."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Atacama_Desert"
                        className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Atacama Desert, 2020
                      </a>
                    </div>
                  </div>

                  <p>
                    This "marine fog" in places like the Atacama Desert is
                    essentially a form of dew or condensation, providing the
                    necessary water for life in conditions where rainfall is
                    virtually absent. Scientists have only relatively recently
                    documented and understood the full extent of how fog and dew
                    contribute to the water balance in such arid regions.
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
                        href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/265"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:265
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the parable of those who spend their wealth
                          seeking Allah's approval, and to strengthen their
                          souls, is that of a garden on a high ground. If heavy
                          rain falls on it, its produce is doubled; and if no
                          rain falls then dew. Allah is seeing of everything you
                          do."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٦٥ وَمَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمُ
                          ابْتِغَاءَ مَرْضَاتِ اللَّهِ وَتَثْبِيتًا مِنْ
                          أَنْفُسِهِمْ كَمَثَلِ جَنَّةٍ بِرَبْوَةٍ أَصَابَهَا
                          وَابِلٌ فَآتَتْ أُكُلَهَا ضِعْفَيْنِ فَإِنْ لَمْ
                          يُصِبْهَا وَابِلٌ فَطَلٌّ ۗ وَاللَّهُ بِمَا
                          تَعْمَلُونَ بَصِيرٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      In this verse, the Arabic phrase "فَطَلٌّ" (fa ṭallun) is
                      used, which translates to "then dew" or "then a light
                      rain/dew." The verse presents a scenario where a garden
                      receives either heavy rain ("wābilun") or, if not, it
                      receives "ṭallun".
                    </p>
                    <p className="mt-2">
                      The remarkable point here, especially considering the
                      knowledge available in the 7th century, is the
                      acknowledgement that land which doesn't receive rainfall
                      can *still* receive moisture through dew. It implies that
                      water, in some form, is provided even in the absence of
                      rain.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <HelpCircle className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>A Timeless Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Reflecting on the connection between the scientific
                    understanding of dew in arid regions and the Quranic verse
                    leads to a thought-provoking question:
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have known that land
                      without rain would still receive water from the sky
                      through dew?
                    </h3>
                    <p>
                      In an era without modern meteorological instruments or
                      detailed studies of desert ecosystems, the idea that dew
                      could be a significant water source, mentioned alongside
                      rainfall, seems quite advanced.
                    </p>
                  </div>

                  <p>
                    The Quranic description in verse 2:265 highlights the
                    provision of "ṭallun" (dew/light rain) when heavy rain is
                    absent, resonating with the modern scientific discovery that
                    condensation (like dew and fog drip) provides essential
                    moisture in the driest parts of the world, sustaining life
                    where rainfall alone cannot. This subtle detail, known today
                    through scientific research in extreme environments like the
                    Atacama Desert, is presented in the Quran from the 7th
                    century.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700">
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Meteorology and Scripture
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of the natural world, including the subtle gift of dew,
            invite us to reflect on ancient wisdom and modern discovery.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DewFact;
