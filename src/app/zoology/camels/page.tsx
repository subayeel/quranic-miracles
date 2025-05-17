/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet, // Represents water/drinking
  ChevronRight,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles, // Represents amazement/wonder
  ThermometerSun, // Represents heat/desert
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

const CamelsMiracleComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Amazing Camels",
        icon: Droplet,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-700 dark:text-yellow-400",
        borderColor: "border-yellow-500",
      },
      {
        id: "science",
        title: "Scientific Insight",
        icon: ThermometerSun, // Or Droplet again, or a different icon like Syringe if available/appropriate
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-700 dark:text-blue-400",
        borderColor: "border-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Connection",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-700 dark:text-green-400",
        borderColor: "border-green-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-700 dark:text-amber-400",
        borderColor: "border-amber-500",
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
      <div className="bg-gradient-to-r from-yellow-600 to-amber-800 dark:from-yellow-800 dark:to-amber-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="text-blue-200" size={32} />{" "}
            {/* Water droplet icon for header */}
            <h1 className="text-4xl font-bold">Camels</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">
            Nature's Wonders & Ancient Wisdom
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/20"
              onClick={() => scrollToSection("intro")}
            >
              Learn About Camels
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
                  <CardTitle className="text-lg">Explore Camels</CardTitle>
                  <CardDescription>
                    Journey through camel facts and a surprising connection
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
              <Card
                className={`border-l-4 ${
                  contents.find((c) => c.id === "intro")?.borderColor
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "intro")?.color
                      }`}
                    >
                      <Droplet
                        className={
                          contents.find((c) => c.id === "intro")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Amazing Camels: Masters of the Desert</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Camels are incredible creatures, perfectly adapted to
                    survive in harsh desert environments. They can endure
                    extreme heat and go for long periods without water. But did
                    you know they hold a surprising record?
                  </p>
                  <div
                    className={`bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border ${contents
                      .find((c) => c.id === "intro")
                      ?.borderColor.replace(
                        "border-",
                        "border-"
                      )} dark:${contents
                      .find((c) => c.id === "intro")
                      ?.borderColor.replace("border-", "border-")}`}
                  >
                    <h3 className="font-bold text-lg mb-3">
                      Nature's Efficient Drinkers
                    </h3>
                    <p>
                      While commonly known for storing water (which isn't quite
                      accurate - they store fat in their humps!), camels have
                      truly unique abilities when it comes to rehydrating after
                      long periods of dehydration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Insight */}
            <section id="science" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${
                  contents.find((c) => c.id === "science")?.borderColor
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "science")?.color
                      }`}
                    >
                      <ThermometerSun
                        className={
                          contents.find((c) => c.id === "science")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>A Closer Look: Scientific Facts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern science has revealed astonishing details about camel
                    physiology and behavior, especially concerning how they
                    handle water loss and replenishment.
                  </p>

                  <div
                    className={`bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border ${contents
                      .find((c) => c.id === "science")
                      ?.borderColor.replace(
                        "border-",
                        "border-"
                      )} dark:${contents
                      .find((c) => c.id === "science")
                      ?.borderColor.replace("border-", "border-")}`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-blue-700 dark:text-blue-400">
                      Scientific Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Camels have a series of physiological adaptations that
                      allow them to withstand long periods of time without any
                      external source of water... Unlike other mammals, camels'
                      red blood cells are oval rather than circular in shape.
                      This facilitates the flow of red blood cells during
                      dehydration and makes them better at withstanding high
                      osmotic variation without rupturing when drinking large
                      amounts of water: a 600 kg (1,300 lb) camel can drink 200
                      L (53 US gal) of water in three minutes."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Camel"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Camel, 2021 (information aligns with earlier
                        sources)
                      </a>
                    </div>
                  </div>

                  <p>
                    Isn't that incredible? 200 liters in just three minutes when
                    they are really thirsty! This remarkable speed is aided by
                    their unique oval-shaped red blood cells, which can handle
                    the rapid change in blood volume without bursting, unlike
                    the round cells of most mammals.
                  </p>
                  <p>
                    This makes thirsty camels arguably the fastest *rate*
                    drinkers in the animal kingdom for their size – a fact that
                    wasn't common scientific knowledge until relatively
                    recently.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Connection */}
            <section id="quran" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${
                  contents.find((c) => c.id === "quran")?.borderColor
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "quran")?.color
                      }`}
                    >
                      <BookOpen
                        className={
                          contents.find((c) => c.id === "quran")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>The Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border ${contents
                      .find((c) => c.id === "quran")
                      ?.borderColor.replace(
                        "border-",
                        "border-"
                      )} dark:${contents
                      .find((c) => c.id === "quran")
                      ?.borderColor.replace("border-", "border-")}`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/56/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/54"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 56:54-55
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Will be drinking on top of it boiling water.
                          <br />
                          Drinking like thirsty camels drink."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٥٤ فَشَارِبُونَ عَلَيْهِ مِنَ الْحَمِيمِ
                          <br />
                          ٥٥ فَشَارِبُونَ شُرْبَ الْهِيمِ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge
                      className={`bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 ${contents
                        .find((c) => c.id === "quran")
                        ?.borderColor.replace("border-", "border-")}`}
                    >
                      Arabic Terminology
                    </Badge>
                    <p className="mt-3">
                      The phrase "shurb al-heem" (شُرْبَ الْهِيمِ) translates to
                      "drinking like al-Heem". In classical Arabic, "al-Heem"
                      refers to severely thirsty camels. So the verse describes
                      a state of intense, rapid drinking, comparing it
                      specifically to how thirsty camels drink.
                    </p>
                    <p className="mt-3">
                      At the time of the Quran's revelation in the 7th century,
                      people living in Arabia were very familiar with camels.
                      They knew camels could go without water for long periods
                      and, when they finally reached water, they would drink a
                      large amount quickly. This observation of camels intensely
                      rehydrating was part of everyday knowledge. However, the
                      scientific understanding of *why* they could do this so
                      efficiently, or whether they were the *fastest* among
                      *all* animals globally, was completely unknown.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${
                  contents.find((c) => c.id === "reflection")?.borderColor
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "reflection")?.color
                      }`}
                    >
                      <HelpCircle
                        className={
                          contents.find((c) => c.id === "reflection")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Connecting the ancient Quranic description to modern
                    scientific findings presents a remarkable point for
                    reflection:
                  </p>

                  <div
                    className={`bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border ${contents
                      .find((c) => c.id === "reflection")
                      ?.borderColor.replace(
                        "border-",
                        "border-"
                      )} dark:${contents
                      .find((c) => c.id === "reflection")
                      ?.borderColor.replace("border-", "border-")}`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone 1400 years ago, who couldn't read or
                      write, have known to use the *most physiologically capable
                      and fastest drinking animal known today* as the specific
                      example for intense thirst?
                    </h3>
                    <p>
                      In the 7th century, while people observed camels drinking
                      heartily, they lacked the scientific tools to compare
                      their drinking efficiency to that of countless other
                      animal species across the world, let alone understand the
                      unique biological adaptations like oval red blood cells
                      that facilitate this.
                    </p>
                    <p>
                      The Quran's precise comparison to "thirsty camels"
                      (al-Heem) aligns perfectly with the modern scientific
                      discovery that camels are exceptionally fast and efficient
                      drinkers when dehydrated. This correlation between an
                      ancient text and contemporary scientific knowledge invites
                      us to consider the source of this wisdom.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-amber-600 hover:bg-amber-700">
              <Droplet size={24} />{" "}
              {/* Water droplet icon for mobile trigger */}
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
            <Sparkles className="text-amber-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Nature & Scripture
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discovering harmony between the natural world and ancient revealed
            texts.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CamelsMiracleComponent;
