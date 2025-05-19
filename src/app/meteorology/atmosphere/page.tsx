/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Cloud, // Using Cloud for atmosphere
  ChevronRight,
  Shield, // For protection science
  Zap, // For radiation
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Quote,
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

// Define a type for the content sections
interface AtmosphereSection {
  id: string;
  title: string;
  icon: React.ElementType; // Use React.ElementType for component types
  color: string; // Tailwind CSS class for background color (e.g., bg-teal-100)
  iconColor: string; // Tailwind CSS class for text color (e.g., text-teal-500)
}

const AtmosphereComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: AtmosphereSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Atmosphere as a Shield",
        icon: Cloud,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-600",
      },
      {
        id: "science-meteorites",
        title: "Shielding from Meteorites",
        icon: Shield, // Using Shield icon
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-600",
      },
      {
        id: "science-radiation",
        title: "Shielding from Radiation",
        icon: Zap, // Using Zap icon for energy/radiation
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-600",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-600",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      options
    );

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
      <div className="bg-gradient-to-r from-teal-600 to-blue-800 dark:from-teal-800 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="text-teal-200" size={32} />
            <h1 className="text-4xl font-bold">Atmosphere</h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            Meteorology - Intermediate
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("intro")} // Start with intro section
            >
              Explore <ChevronRight size={16} />
            </Button>
            {/* Option to link directly to Quran or Science */}
            {/* <Button
                            variant="outline"
                            className="text-teal-100 border-teal-100 hover:bg-teal-700/20"
                            onClick={() => scrollToSection("quran")}
                        >
                            See Quranic Link
                        </Button> */}
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
                    Explore Earth's protective layer
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
              <Card className="border-l-4 border-teal-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Cloud className="text-teal-600" size={24} />
                    </div>
                    <CardTitle>The Atmosphere as a Shield</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever thought about what protects us from all the
                    dangers lurking in space? Besides its role in giving us air
                    to breathe, the Earth's atmosphere acts like an incredible
                    shield!
                  </p>
                  <p>
                    In the past, some might have thought of air as just... air.
                    But modern science reveals its vital protective functions.
                    It turns out the atmosphere constantly defends our planet
                    from harmful radiation and debris from space.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3">
                      More Than Just Air!
                    </h3>
                    <p>
                      Beyond providing oxygen, the layers of our atmosphere
                      absorb dangerous rays from the sun and other cosmic
                      sources, and they act as a formidable barrier against
                      objects falling towards Earth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence - Meteorites */}
            <section id="science-meteorites" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Shield className="text-blue-600" size={24} />
                    </div>
                    <CardTitle>Shielding from Meteorites</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    One of the most dramatic ways the atmosphere protects us is
                    by dealing with incoming space rocks! Most meteoroids
                    heading for Earth never reach the ground.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-600" /> Burning Up
                      the Debris
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Meteors burn up when they hit the Earth's atmosphere. Why
                      doesn't the space shuttle?... When the meteor hits the
                      atmosphere, the air in front of it compresses incredibly
                      quickly. When a gas is compressed, its temperature rises.
                      This causes the meteor to heat up so much that it glows.
                      The air burns the meteor until there is nothing left."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://science.howstuffworks.com/question308.htm"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        How Stuff Works, 2019
                      </a>
                    </div>
                  </div>
                  <p>
                    Tiny dust particles burn up completely, creating shooting
                    stars we see at night. Larger pieces might survive
                    partially, but the atmosphere significantly slows them down
                    and erodes them, reducing the impact they would otherwise
                    have. This constant protection prevents countless objects
                    from bombarding the surface.
                  </p>
                  {/* Optional image section if you add one like in the reference */}
                  {/* <div className="image-wrapper my-6">
                                        <img src="/assets/images/atmosphere.gif" alt="Meteor burning up in atmosphere" className="w-full rounded-lg" />
                                    </div> */}
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence - Radiation */}
            <section id="science-radiation" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Zap className="text-purple-600" size={24} />
                    </div>
                    <CardTitle>Shielding from Radiation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Space isn't just full of rocks; it's also bombarded by
                    dangerous energy waves and particles, like intense
                    ultraviolet (UV) radiation from the sun, solar wind, and
                    cosmic rays.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-purple-600" /> Protection
                      from Harmful Rays
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The atmosphere helps to protect living organisms from
                      genetic damage by solar ultraviolet radiation, solar wind
                      and cosmic rays."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Atmosphere"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Atmosphere, 2019
                      </a>
                    </div>
                  </div>
                  <p>
                    The ozone layer, a part of the atmosphere, is particularly
                    effective at absorbing most of the harmful UV radiation.
                    Other layers help scatter or absorb different types of
                    dangerous cosmic energy. Without this shield, life as we
                    know it would not be possible on Earth.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-600" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/21/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/32"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 21:32
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And We made the sky a protective shield and they turn
                          away from its sign."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٢ وَجَعَلْنَا السَّمَاءَ سَقْفًا مَحْفُوظًا ۖ وَهُمْ
                          عَنْ آيَاتِهَا مُعْرِضُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The Arabic phrase "
                      <span className="font-arabic">سَقْفًا مَحْفُوظًا</span>"
                      (saqfan mahfuzan) translates to "a protective roof" or "a
                      preserved shield." This verse describes the sky – which
                      includes the atmosphere – having a protective quality.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-600" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the modern scientific understanding of the
                    atmosphere's role in shielding the Earth from cosmic
                    threats, the verse from the Quran presents a fascinating
                    point for reflection:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century know the atmosphere
                      acts as a protective shield?
                    </h3>
                    <p>
                      In the 7th century, scientific understanding of the
                      Earth's atmosphere was rudimentary. There were no
                      instruments to detect or measure radiation, and while
                      people saw meteors, the knowledge that these objects were
                      primarily burned up by friction with the *air* was not
                      understood. The idea that the vast, invisible layer above
                      Earth was a deliberate "protective shield" against unseen
                      dangers from space was beyond the scope of their empirical
                      observation and scientific tools.
                    </p>
                    <p className="mt-3">
                      The Quran's description of the sky as a "protective
                      shield" aligns remarkably with the protective functions
                      that science has discovered relatively recently. This
                      correspondence is seen by believers as a sign, prompting
                      contemplation on the source of the Quranic knowledge.
                    </p>
                  </div>
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
              <Cloud size={24} />
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
            <Sparkles className="text-teal-600" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Earth's Protective Layer
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of the atmosphere reveal protection designed with
            incredible precision.
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

export default AtmosphereComponent;
