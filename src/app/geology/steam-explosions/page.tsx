/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplets,
  ChevronRight,
  GlassWater,
  BookOpen,
  Quote,
  HelpCircle,
  CloudLightning,
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

type SectionRef = {
  [key: string]: HTMLElement | null;
};

type ContentItem = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const SteamExplosion: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRef>({});

  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Water Can Explode",
        icon: Droplets,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: GlassWater,
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

  const scrollToSection = (id: string): void => {
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
            <CloudLightning className="text-cyan-200" size={32} />
            <h1 className="text-4xl font-bold">Steam Explosion</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">Geology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-cyan-100 border-cyan-300 hover:bg-blue-700"
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
                    Explore water's explosive potential
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
                      <Droplets className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Water Can Explode</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, sea water can explode. Skeptics claim that
                    whoever wrote the Quran made a mistake; water puts out fire,
                    it doesn't explode. Today scientists confirm that under
                    extreme conditions, water can indeed trigger powerful steam
                    explosions.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Superheated Water's Explosive Power
                    </h3>
                    <p>
                      When water meets extremely hot substances like molten
                      lava, it rapidly converts to steam with dramatic
                      expansion—creating explosive force. This phenomenon, known
                      as a steam explosion, contradicts the common perception
                      that water only extinguishes fire.
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
                      <GlassWater className="text-purple-500" size={24} />
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
                      "Steam Explosions:
                      <br />
                      Steam explosions are often encountered where hot lava
                      meets sea water. Such an occurrence is also called a
                      littoral explosion. A dangerous steam explosion can also
                      be created when liquid water encounters hot, molten metal.
                      As the water explodes into steam, it splashes the burning
                      hot liquid metal along with it, causing an extreme risk of
                      severe burns to anyone located nearby and creating a fire
                      hazard."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Steam Explosions, 2018
                      </a>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800 mt-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-purple-500" /> Real-World
                      Incident
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Nearly Two Dozen People Injured After Lava Bomb Hits
                      Hawaii Tour Boat:
                      <br />
                      Earlier today, a basketball-sized chunk of molten rock
                      slammed into a tour boat off the coast of Hawaii, injuring
                      23 people and sending at least four to the hospital. The
                      incident happened near the Kilauea volcano, which has been
                      erupting since early May. As USA Today reports, the Lava
                      Ocean Tours boat was hit by falling lava caused by a
                      littoral explosion near the Kapoho volcanic ocean entry,
                      where molten rock from the Kilauea volcano is pouring into
                      the sea."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gizmodo, Nearly Two Dozen People Injured After Lava Bomb
                        Hits Hawaii Tour Boat, 2018
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <CloudLightning size={16} className="text-purple-500" />{" "}
                        Littoral Explosions
                      </h3>
                      <p>
                        When molten lava at temperatures exceeding 1,000°C flows
                        into the sea, the water instantly superheats and expands
                        1,700 times in volume, creating powerful steam
                        explosions capable of launching volcanic debris at high
                        velocity.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-blue-500" /> Modern
                        Understanding
                      </h3>
                      <p>
                        This phenomenon has only been comprehensively documented
                        and understood within the last century as scientists
                        have studied volcanic activity and industrial accidents
                        involving water-molten material interactions.
                      </p>
                    </div>
                  </div>

                  <p>
                    Where hot lava meets sea water, it creates steam explosions.
                    This scientific knowledge is relatively recent, yet
                    remarkably, this phenomenon appears to be referenced in the
                    Quran 1400 years ago.
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
                        href="https://www.quranwow.com/#/ch/82/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/3"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 82:3
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "If the seas were exploded."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">وَإِذَا الْبِحَارُ فُجِّرَتْ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "Fujjirat فُجِّرَتْ" means exploded or burst forth. The
                      verse describes seas exploding—a concept that would have
                      seemed contradictory in the 7th century when water was
                      primarily known for extinguishing fire, not causing
                      explosions.
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
                    steam explosions and the Quranic verse raises an intriguing
                    question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      steam explosions?
                    </h3>
                    <p>
                      In 7th century Arabia, the concept of water exploding
                      would have contradicted common experience. Water was known
                      as an element that extinguishes fire, not one that
                      explodes. The understanding that water could cause violent
                      explosions upon contact with molten materials is
                      scientific knowledge that has only been documented and
                      studied in modern times.
                    </p>
                  </div>

                  <p>
                    In the context of 7th century knowledge, describing seas as
                    capable of exploding would have seemed counterintuitive.
                    Water's primary known property was to extinguish fires, not
                    create explosions. Yet, today we understand that under
                    specific conditions—such as contact with molten lava—water
                    can indeed cause powerful steam explosions, precisely as the
                    Quranic verse suggests.
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
            <h3 className="text-lg font-medium">Exploring Earth's Elements</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of natural phenomena continue to unfold, connecting
            ancient wisdom with modern scientific discoveries.
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

export default SteamExplosion;
