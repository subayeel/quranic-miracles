/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bone, // Using Bone icon for fossils
  ChevronRight,
  FlaskConical, // Represents science/discovery
  BookOpen, // For Quranic reference
  ArrowUp,
  Sparkles, // For footer
  CircleHelp,
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

const FossilsDiscovery = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Nature's Time Capsules",
        icon: Bone,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-600",
      },
      {
        id: "science",
        title: "Preservation Secrets",
        icon: FlaskConical,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-600",
      },
      {
        id: "quran",
        title: "A Quranic Narrative",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600",
      },
      {
        id: "reflection",
        title: "Considering the Past",
        icon: CircleHelp,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-600",
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
      <div className="bg-gradient-to-r from-amber-600 to-yellow-700 dark:from-amber-800 dark:to-yellow-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bone className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Fossils</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">Zoology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-amber-700 dark:text-amber-200 border-white hover:bg-white hover:text-amber-700 dark:hover:bg-gray-800 dark:hover:text-amber-100"
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
                    Uncover the secrets of fossilization
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
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Bone className="text-amber-600" size={24} />
                    </div>
                    <CardTitle>Nature's Time Capsules</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine a time long ago, around 1400 years! Most people
                    thought that when animals or plants died, they would just
                    decay and disappear forever. The idea that remains could be
                    preserved naturally for vast stretches of time wasn't
                    commonly understood.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-lg mb-3">
                      What We Know Today
                    </h3>
                    <p>
                      Today, thanks to science, we know this isn't always the
                      case! Under the right conditions, organic remains can turn
                      into fossils, offering us incredible glimpses into life
                      from millions of years ago. These fossils are like natural
                      time capsules!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <FlaskConical className="text-teal-600" size={24} />
                    </div>
                    <CardTitle>Preservation Secrets</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fossilization is a complex natural process. While the hard
                    parts like bones and shells are more likely to fossilize,
                    the preservation of soft tissues or stomach contents is
                    incredibly rare!
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-teal-500" /> A Rare
                      Discovery
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "
                      <strong>
                        13-foot marine predator found inside another's belly in
                        shocking fossil 'turducken'
                      </strong>
                      <br />
                      <br />
                      ABOUT 240 MILLION years ago, a massive marine reptile
                      swallowed another, slightly less massive reptile and died
                      shortly thereafter. The larger creature—a dolphin-like
                      reptile known as an ichthyosaur—then fossilized with the
                      smaller animal in its belly...
                      <br />
                      <br />
                      Fossilized stomach contents are extremely rare, says
                      Jessica Lawrence Wujek, a geologist and paleontologist...
                      "It's just not very often you get stomach contents
                      preserved, especially big things in the stomach like
                      this," Lawrence Wujek says. "It's an awesome fossil."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.nationalgeographic.com/science/2020/08/ancient-marine-reptile-ichthyosaur-preyed-on-large-sea-creature-thalattosaur/"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Geographic, August 2020
                      </a>
                    </div>
                  </div>

                  <p>
                    As the National Geographic article highlights, finding
                    fossilized stomach contents is something scientists consider
                    "extremely rare." It requires a very specific set of
                    circumstances for digestion and decay to be halted long
                    enough for fossilization to occur within the digestive
                    tract.
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
                      <BookOpen className="text-green-600" size={24} />
                    </div>
                    <CardTitle>A Quranic Narrative</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran contains the story of Prophet Yunus (Jonah), who
                    was swallowed by a large fish (often translated as whale).
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/37/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/142"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 37:142-144
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then the whale swallowed him, and he was to blame.
                          Had he not been one of those who praised, he would
                          have stayed in its belly until the Day they are
                          raised."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٤٢ فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ
                        </p>
                        <p dir="rtl">
                          ١٤٣ فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ
                        </p>
                        <p dir="rtl">
                          ١٤٤ لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Point
                    </Badge>
                    <p className="mt-3">
                      The phrase, "he would have stayed in its belly until the
                      Day they are raised," suggests a state of preservation
                      that would last for an immensely long period, effectively
                      until the end of time as understood within the narrative.
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
                      <CircleHelp className="text-purple-600" size={24} />
                    </div>
                    <CardTitle>Considering the Past</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's think from the perspective of someone living in the
                    7th century CE. Based on common knowledge at that time,
                    decay was the expected outcome for dead organic matter. The
                    concept of long-term natural preservation, like
                    fossilization or something akin to it occurring inside an
                    animal, was likely outside the general understanding.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could knowledge of such rare preservation
                      possibilities be present in a 7th-century text?
                    </h3>
                    <p>
                      The Quranic narrative, describing Jonah's potential
                      long-term preservation within the belly of the fish,
                      touches upon a phenomenon—the rare natural preservation of
                      organic material within another organism—that science has
                      only recently been able to understand and confirm as
                      extremely rare (like fossilized stomach contents). From a
                      7th-century viewpoint, this detailed aspect of the story
                      seems quite remarkable.
                    </p>
                  </div>

                  <p>
                    This unexpected link between a specific detail in an ancient
                    religious text and a scientifically confirmed, albeit rare,
                    natural process invites us to ponder the source of the
                    knowledge contained within the Quran.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-amber-600 hover:bg-amber-700">
              <Bone size={24} />
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
              Exploring Life's Ancient Records
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting timeless narratives with the wonders of the natural world
            discovered through science.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FossilsDiscovery;
