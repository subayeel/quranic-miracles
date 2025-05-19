/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Shield, // Using Shield for armor
  Flame, // Using Flame for fire/explosion
  BookOpen, // Using BookOpen for Quranic reference
  HelpCircle, // Using HelpCircle for reflection/question
  ChevronRight,
  ArrowUp,
  Sparkles, // Keeping Sparkles for general wonder
  Crosshair, // Added Crosshair for targeting/projectiles
  Droplets,
  Quote, // Added Droplets to represent the "jet" or projection
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

// Define types for the content sections
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icon components
  color: string; // Tailwind background color class for card border/icon background
  iconColor: string; // Tailwind text color class for the icon
}

const ArmorPiercing: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content structure and themes
  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Armor-Piercing Technology",
        icon: Shield,
        color: "bg-gray-100 dark:bg-gray-800",
        iconColor: "text-gray-500",
      },
      {
        id: "science",
        title: "How HEAT Warheads Work",
        icon: Flame, // Represents the explosion driving the jet
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-emerald-100 dark:bg-emerald-900", // Using emerald for a different green
        iconColor: "text-emerald-500",
      },
      {
        id: "reflection",
        title: "Contemplation",
        icon: HelpCircle,
        color: "bg-yellow-100 dark:bg-yellow-900", // Using yellow for reflection/question
        iconColor: "text-yellow-500",
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
          // Find the section with the highest visibility or simply the first one intersecting
          // For simplicity with this structure, we'll just take the last one intersecting.
          // A more complex approach might calculate visibility percentages.
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current; // Capture current value for cleanup

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element; // Store ref
        observer.observe(element);
      }
    });

    // Cleanup function
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect(); // Disconnect the observer
    };
  }, [contents]); // Depend on contents array

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Optimistically set active section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 to-slate-800 dark:from-gray-800 dark:to-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-slate-300" size={32} />
            <h1 className="text-4xl font-bold">Armor-Piercing</h1>
          </div>
          <p className="text-xl max-w-2xl text-gray-300">Physics - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-gray-700 hover:bg-gray-100"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-gray-200 border-gray-200 hover:bg-gray-700 hover:text-white"
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
                    Explore the science of piercing armor
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
              <Card className="border-l-4 border-gray-500 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <Shield className="text-gray-500" size={24} />
                    </div>
                    <CardTitle>Armor-Piercing Technology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Delving into the physics of warfare reveals fascinating
                    applications of material science and energy transfer. Modern
                    armor-piercing technology, especially using shaped charges,
                    is incredibly sophisticated. What's truly remarkable is
                    finding descriptions that echo these principles in a text
                    from 1400 years ago, a time when such knowledge was
                    unfathomable.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/30 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                    <h3 className="font-bold text-lg mb-3">
                      Beyond Simple Penetration
                    </h3>
                    <p>
                      Armor-piercing isn't just about a hard object hitting a
                      hard surface. Modern techniques like High-Explosive
                      Anti-Tank (HEAT) warheads use carefully shaped explosives
                      and specific materials to defeat advanced armor in
                      surprising ways.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500 dark:border-red-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Flame className="text-red-500" size={24} />
                    </div>
                    <CardTitle>How HEAT Warheads Work</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    High-Explosive Anti-Tank (HEAT) warheads are a prime example
                    of advanced armor penetration. They use the Munroe effect,
                    where an explosive charge with a shaped cavity collapses a
                    metal liner into a high-velocity jet.
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Crosshair size={16} className="text-red-500" /> The
                      Shaped Charge Principle
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "A high-explosive anti-tank (HEAT) warhead is a type of
                      shaped charge explosive that uses the Munroe effect to
                      penetrate thick tank armor. The warhead functions by
                      having the explosive charge collapse a metal liner inside
                      the warhead into a high-velocity superplastic jet. This
                      superplastic jet is capable of penetrating armor steel to
                      a depth of seven or more times the diameter of the
                      charge..."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/High-explosive_anti-tank_warhead"
                        className="text-red-600 dark:text-red-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, High-explosive anti-tank warhead, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-blue-500" /> The
                        Metal Jet
                      </h3>
                      <p>
                        Crucially, it's not heat melting the armor, but the
                        sheer force of the explosion creating a concentrated jet
                        of metal from the liner that punches through the target.
                        Copper is a common material for this liner due to its
                        properties.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Shield size={16} className="text-gray-500" />{" "}
                        Penetration Mechanism
                      </h3>
                      <p>
                        The jet is in a superplastic state, flowing and
                        penetrating the armor as a result of intense pressure,
                        not high temperature as is sometimes mistakenly
                        believed.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900/30 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-red-500" /> Copper, Not
                      Heat, Does the Job
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Contrary to popular belief, HEAT rarely reaches above
                      600°C and is incapable of melting treated steels, which
                      can easily withstand temperatures of 1400°C. It is the
                      sheer pressure from the explosion that pushes through the
                      armour, projecting inside the tank a blast of copper
                      fragments from the liner that was holding the charge
                      together."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://worldoftanks.eu/en/news/challenger/anti-tank-rounds/"
                        className="text-red-600 dark:text-red-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        World of Tanks, Anti-Tank Rounds, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    So, modern science explains that a shaped explosive charge
                    uses pressure to project a metal (often copper) jet capable
                    of defeating thick armor.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-emerald-500 dark:border-emerald-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <BookOpen className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/55/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/35"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 55:35
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "[It will be said], 'Projectiles of fire and copper
                          will be sent upon you, and you will not be
                          victorious.'"
                          <br />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            (Translation may vary slightly across versions)
                          </span>
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٥ يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِنْ نَارٍ وَنُحَاسٌ
                          فَلَا تَنْتَصِرَانِ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The verse mentions being bombarded with "شُوَاظٌ مِنْ
                      نَارٍ وَنُحَاسٌ" which translates to "projectiles of fire
                      and copper" in a context where victory (تَنْتَصِرَانِ) is
                      denied.
                    </p>
                    <p className="mt-2">
                      Consider the knowledge available in the 7th century CE.
                      Warfare primarily involved swords, spears, arrows, and
                      basic siege engines. The concept of creating a
                      *projectile* specifically *from copper* propelled by
                      something akin to 'fire' or explosive force, designed to
                      defeat defenses, was non-existent. Copper was known, but
                      its use as a high-velocity penetrator via explosive
                      shaping was far beyond the technological grasp and
                      theoretical understanding of the time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500 dark:border-yellow-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <HelpCircle className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Contemplation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here lies an intriguing parallel between a 7th-century
                    scripture and modern military physics:
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone 1400 years ago describe a weapon concept
                      involving 'projectiles of fire and copper' in a combat
                      context?
                    </h3>
                    <p>
                      In the 7th century, copper was used for tools, ornaments,
                      and some basic weaponry, but the sophisticated use of a
                      copper projectile formed by an explosive charge to defeat
                      armor was scientifically unknown. The verse's description
                      seems to align remarkably well with the operational
                      principles of modern HEAT warheads, which use a shaped
                      explosive (fire) to form and propel a copper jet
                      (projectile of copper) capable of penetrating armor,
                      rendering conventional defenses ineffective ("you shall
                      not be victorious").
                    </p>
                  </div>

                  <p>
                    This specific detail – the mention of *copper* as a
                    *projectile* driven by *fire* (explosion) in a scenario
                    about overcoming defenses – points to a level of technical
                    understanding far beyond the 7th-century world. It invites
                    us to ponder the source of such specific knowledge contained
                    within the Quran.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-gray-600 hover:bg-gray-700">
              <Shield size={24} />
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
            <Sparkles className="text-gray-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Physics and Scripture
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intricate details of the universe and its workings continue to
            resonate across time and knowledge domains.
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

export default ArmorPiercing;
