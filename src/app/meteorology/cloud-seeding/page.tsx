/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  CloudRainWind, // Icon for Meteorology/Cloud Seeding
  ChevronRight,
  Droplets, // Icon for water/rain
  BookOpen,
  Quote,
  HelpCircle,
  Wind, // Icon for wind
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

// Define types for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind color class for background
  iconColor: string; // Tailwind color class for icon text
}

const CloudSeeding: React.FC = () => {
  // State to track the currently active section in the viewport
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Ref to store references to section elements
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Memoized array defining the sections and their properties
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Wind Triggers Rain",
        icon: CloudRainWind,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-600",
      },
      {
        id: "science",
        title: "Scientific Explanation",
        icon: Droplets,
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
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set active section based on the intersecting element's ID
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements defined in `contents`
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element; // Store reference
        observer.observe(element); // Start observing
      }
    });

    // Cleanup function: Disconnect observer and clear refs
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element); // Stop observing
        }
      });
      sectionRefs.current = {}; // Clear refs on unmount
    };
  }, [contents]); // Re-run effect if contents change (should not happen here)

  // Function to scroll to a specific section by ID
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Optimistically set active section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      {/* Using colors similar to 'info' from reference 2 */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-800 dark:from-cyan-800 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <CloudRainWind className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Cloud Seeding</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Meteorology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            {/* Buttons use colors derived from the header gradient */}
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-blue-50 dark:text-blue-900 dark:hover:bg-blue-100"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-100 border-blue-200 hover:bg-blue-700/20 dark:border-blue-300 dark:hover:bg-blue-900"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar (Desktop) */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Explore how wind aids rainfall
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
                            ? "bg-gray-100 dark:bg-gray-800 font-medium text-blue-700 dark:text-blue-300" // Highlight active link
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

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-cyan-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <CloudRainWind className="text-cyan-600" size={24} />
                    </div>
                    <CardTitle>Wind Triggers Rain</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, the wind is described as having a role in
                    triggering rain. Historically, skeptics questioned this,
                    believing wind's primary atmospheric role was pollination.
                    However, modern science has revealed a fascinating process
                    where wind plays a crucial part in initiating precipitation
                    through a mechanism we now call cloud seeding.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3">
                      Beyond Pollination: Wind's Atmospheric Role
                    </h3>
                    <p>
                      While wind is essential for plant pollination, it also has
                      a vital, less obvious function in the atmosphere related
                      to rain formation, a fact not widely understood until
                      recent times.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation Section */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Droplets className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Explanation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Water in clouds can exist as tiny liquid droplets even below
                    freezing point – a state known as supercooled water. This
                    state is unstable and requires tiny particles, or 'nuclei',
                    to initiate freezing or condensation, leading to the
                    formation of raindrops or snowflakes. This process is the
                    basis of cloud seeding.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> What is
                      Cloud Seeding?
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Cloud seeding is a type of weather modification that aims
                      to change the amount or type of precipitation that falls
                      from clouds by dispersing substances into the air that
                      serve as cloud condensation or ice nuclei, which alter the
                      microphysical processes within the cloud. The usual intent
                      is to increase precipitation (rain or snow), but hail and
                      fog suppression are also widely practised in airports,
                      where harsh weather conditions are experienced."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Cloud_seeding"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Cloud Seeding, 2018
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Wind size={16} className="text-blue-500" /> Nature's
                      Cloud Seeding Agents
                    </h3>
                    <p>
                      While humans use substances like silver iodide, nature has
                      its own method. Wind plays a key role by lifting tiny
                      particles, such as sea salt from ocean spray and dust from
                      land, high into the atmosphere. These particles act as the
                      natural "seeds" or nuclei around which water vapor can
                      condense or supercooled water can freeze, forming droplets
                      or ice crystals large enough to fall as rain or snow.
                      Thus, wind is crucial for transporting these necessary
                      seeding agents to the clouds.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference Section */}
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
                        href="https://www.quranwow.com/#/ch/15/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/22"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 15:22
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And We sent the seeding winds, then cause the rain to
                          descend from the sky, and gave you water to drink,
                          though you are not the guardians of its stores."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٢ وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا
                          مِنَ السَّمَاءِ مَاءً فَأَسْقَيْنَاكُمُوهُ وَمَا
                          أَنْتُمْ لَهُ بِخَازِنِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ" (Wa
                      arsalna al-riyaha lawaqiha) is often translated as "And We
                      sent the fertilizing winds" or, as here, "the seeding
                      winds". In the context of the verse which immediately
                      follows with sending down rain ("فَأَنْزَلْنَا مِنَ
                      السَّمَاءِ مَاءً"), this phrase is understood by many to
                      refer to the wind's role not just in pollinating plants,
                      but also in a process that leads to rain. This aligns with
                      the modern understanding of wind transporting particles
                      necessary for cloud seeding.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection Section */}
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
                    Considering the level of scientific knowledge available in
                    the 7th century:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a text from 1400 years ago describe wind in a
                      way that suggests a role in rain formation beyond just
                      moving clouds?
                    </h3>
                    <p>
                      People in the 7th century understood that clouds brought
                      rain and that wind moved clouds. They also knew wind's
                      role in pollinating plants. However, the intricate
                      microphysical process within clouds, involving tiny
                      airborne particles carried by wind acting as nuclei for
                      raindrops, was completely unknown. The phrase "seeding
                      winds" or "fertilizing winds" in the Quran, linked
                      directly to the descent of rain, presents a description
                      that resonates remarkably with the modern scientific
                      understanding of natural cloud seeding via
                      wind-transported particles.
                    </p>
                  </div>

                  <p>
                    This specific detail—that wind isn't just a force moving
                    weather systems but actively contributes to the very
                    formation of precipitation through "seeding"—is a nuanced
                    scientific point. Its appearance in a 7th-century text
                    invites contemplation about the source of such knowledge at
                    a time when the scientific instruments and understanding
                    required to grasp this concept didn't exist.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Floating Button) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            {/* Button uses colors derived from the header gradient */}
            <Button className="rounded-full h-14 w-14 shadow-lg bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-800 dark:hover:bg-cyan-900">
              <CloudRainWind size={24} />
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
                      ? "bg-gray-100 dark:bg-gray-800 font-medium text-blue-700 dark:text-blue-300" // Highlight active link
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

      {/* Footer Section */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-cyan-600" size={18} />{" "}
            {/* Footer icon color */}
            <h3 className="text-lg font-medium">Exploring Weather Phenomena</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intricate processes of Earth's atmosphere reveal connections
            across time and knowledge.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloudSeeding;
