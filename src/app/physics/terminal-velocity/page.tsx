/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ArrowDown,
  ChevronRight,
  Gauge, // Using Gauge for speed/velocity concept
  BookOpen,
  HelpCircle,
  Feather, // Using Feather to represent freefall/birds
  Sparkles,
  ArrowUp,
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
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const TerminalVelocity = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Falling to Limit",
        icon: ArrowDown,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Facts",
        icon: Gauge,
        color: "bg-slate-100 dark:bg-slate-900",
        iconColor: "text-slate-500",
      },
      {
        id: "quran",
        title: "Quranic Hint",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Points to Ponder",
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
      <div className="bg-gradient-to-r from-blue-500 to-teal-700 dark:from-blue-700 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Feather className="text-blue-200" size={32} /> {/* Changed icon */}
            <h1 className="text-4xl font-bold">Terminal Velocity</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Physics - Easy {/* Updated subject */}
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700"
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
                    Understand speed limits in freefall
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
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      {" "}
                      {/* Changed bg color */}
                      <ArrowDown className="text-blue-500" size={24} />{" "}
                      {/* Changed icon and color */}
                    </div>
                    <CardTitle>Falling to Limit</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine falling from the sky. You speed up, right? But
                    there's a hidden speed limit! This limit is called Terminal
                    Velocity. Interestingly, a concept hinting at this limit,
                    involving birds catching a falling human, appears in the
                    Quran.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-bold text-lg mb-3">
                      The Ultimate Speed in Freefall
                    </h3>
                    <p>
                      Terminal velocity is the highest speed an object can reach
                      during a free-fall through a fluid (like air). As an
                      object falls, air resistance pushes against it, and this
                      resistance increases with speed. Eventually, the air
                      resistance balances the force of gravity, stopping the
                      acceleration. The object then falls at a constant, maximum
                      speed – its terminal velocity.
                    </p>
                  </div>
                  <p>
                    For a person falling through the air, this speed limit
                    depends on things like their body position and weight. In
                    the 7th century, the idea of a falling object reaching a
                    maximum speed, especially involving precise calculations or
                    the influence of air resistance, was not part of common
                    knowledge.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Understanding */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-slate-500">
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                      {" "}
                      {/* Changed bg color */}
                      <Gauge className="text-slate-500" size={24} />{" "}
                      {/* Changed icon and color */}
                    </div>
                    <CardTitle>Scientific Facts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-lg border border-slate-100 dark:border-slate-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Gauge size={16} className="text-slate-500" /> Skydiver's
                      Limit
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Based on wind resistance, for example, the terminal speed
                      of a skydiver in a belly-to-earth (i.e., face down) free
                      fall position is about 195 km/h (120 mph; 54 m/s)."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Terminal_velocity"
                        className="text-slate-600 dark:text-slate-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Terminal Velocity, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    So, a skydiver typically reaches a maximum speed of around
                    195 km/hr. Now, what about birds? Can any bird actually
                    catch a falling human?
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Feather size={16} className="text-blue-500" /> Fastest
                        Flyers
                      </h3>
                      <p>
                        While many birds are fast horizontally, some raptors
                        achieve incredible speeds during their hunting dives,
                        which are essentially controlled freefalls.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-amber-500" />{" "}
                        Peregrine Power
                      </h3>
                      <p>
                        The Peregrine Falcon is known to reach speeds of up to
                        389 km/hr in a dive! The Golden Eagle also reaches
                        impressive speeds of 240 - 320 km/hr.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-center">
                    <a
                      href="https://www.worldatlas.com/articles/the-fastest-birds-in-the-world.html"
                      className="text-slate-600 dark:text-slate-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      World Atlas, The Fastest Birds In The World, 2019
                    </a>
                  </div>

                  <p>
                    These speeds are significantly higher than the terminal
                    velocity of a human skydiver. This means these birds *can*
                    indeed overtake a falling person.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                {" "}
                {/* Consistent color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      {" "}
                      {/* Consistent color */}
                      <BookOpen className="text-green-500" size={24} />{" "}
                      {/* Consistent icon and color */}
                    </div>
                    <CardTitle>Quranic Hint</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    {" "}
                    {/* Consistent colors */}
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/31"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 22:31
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Being true to Allah, without associating anything
                          with Him. Whoever associates anything with Allah it is
                          as though he has fallen from the sky, and was snatched
                          by the birds, or was taken down by the wind to a deep
                          place."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣١ حُنَفَاءَ لِلَّهِ غَيْرَ مُشْرِكِينَ بِهِ ۚ وَمَنْ
                          يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ
                          فَتَخْطَفُهُ الطَّيْرُ أَوْ تَهْوِي بِهِ الرِّيحُ فِي
                          مَكَانٍ سَحِيقٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      {" "}
                      {/* Consistent colors */}
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "فَتَخْطَفُهُ الطَّيْرُ" (fatakhtaṭufuhu
                      l-ṭayru) translates to "and was snatched by the birds".
                      This imagery describes birds intercepting and seizing a
                      person who is falling from the sky. For a bird to 'snatch'
                      a falling object (especially something as large as a
                      human), it would need to reach or exceed the falling
                      object's speed.
                    </p>
                  </div>
                  <p>
                    In the 7th century, without knowledge of aerodynamics or
                    terminal velocity, understanding that certain birds could
                    exceed the speed of a falling human was likely not possible
                    through common observation alone. People could observe
                    things falling and birds flying, but accurately comparing
                    their maximum speeds in different scenarios (horizontal
                    flight vs. vertical dive vs. human freefall) would be pure
                    speculation.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                {" "}
                {/* Consistent color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      {" "}
                      {/* Consistent color */}
                      <HelpCircle className="text-amber-500" size={24} />{" "}
                      {/* Consistent icon and color */}
                    </div>
                    <CardTitle>Points to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific understanding of terminal
                    velocity and the remarkable diving speeds of raptors like
                    the Peregrine Falcon, the Quranic description poses a
                    thought-provoking question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    {" "}
                    {/* Consistent colors */}
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this specific detail about birds being able to
                      'snatch' a falling person have been known in the 7th
                      century?
                    </h3>
                    <p>
                      At a time when physics was not understood in the modern
                      sense, and the maximum speeds attainable by different
                      objects in freefall were unknown, the idea that birds
                      could move fast enough to intercept a falling human would
                      have seemed highly improbable, maybe even impossible,
                      based on everyday experience. Yet, modern science confirms
                      that certain raptors possess this capability due to their
                      incredible diving speeds, which exceed human terminal
                      velocity.
                    </p>
                  </div>

                  <p>
                    This correlation between an ancient text and a specific,
                    counter-intuitive fact only recently understood by science
                    invites contemplation about the source of this knowledge.
                    It's a fascinating point for reflection!
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              {" "}
              {/* Changed color */}
              <Feather size={24} /> {/* Changed icon */}
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
        {" "}
        {/* Consistent styling */}
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-blue-500" size={18} />{" "}
            {/* Changed color */}
            <h3 className="text-lg font-medium">Exploring Physics and Faith</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting scientific principles with ancient wisdom invites deeper
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

export default TerminalVelocity;
