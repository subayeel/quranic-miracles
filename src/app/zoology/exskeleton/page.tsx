/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bug,
  ChevronRight,
  GlassWater,
  BookOpen,
  Quote,
  HelpCircle,
  Microscope,
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

const ExoskeletonAnts = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Crystal Armor",
        icon: Bug,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
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
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-500",
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
      <div className="bg-gradient-to-r from-emerald-500 to-green-700 dark:from-emerald-700 dark:to-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bug className="text-emerald-200" size={32} />
            <h1 className="text-4xl font-bold">Exoskeleton</h1>
          </div>
          <p className="text-xl max-w-2xl text-emerald-100">
            Entomology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-emerald-700 hover:bg-emerald-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-emerald-50 border-emerald-200 hover:bg-emerald-700"
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
                    Explore leaf-cutter ants' armor
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
              <Card className="border-l-4 border-emerald-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <Bug className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>Crystal Armor Ants</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there is a reference to ants having something
                    that can break. Skeptics have claimed that whoever wrote the
                    Quran made a mistake, as ants were thought to be malleable
                    and not have breakable parts. However, recent scientific
                    discoveries have confirmed that leaf-cutter ants possess a
                    unique crystal coating on their exoskeletons.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-bold text-lg mb-3">
                      Natural Armor Discovery
                    </h3>
                    <p>
                      Many insects have exoskeletons, but leaf-cutter ants have
                      been found to possess a remarkable rocky crystal armor,
                      never before seen in other insects. This discovery has
                      changed our understanding of these impressive creatures
                      and provides context for ancient descriptions.
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
                      <Quote size={16} className="text-purple-500" /> Research
                      Findings
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Leaf-cutter ants have rocky crystal armor, never before
                      seen in insects. LEAF-CUTTER ANTS ARE named for their
                      Herculean feats: they chomp foliage and carry unwieldy
                      pieces, like green flags many times their size, long
                      distances to their colonies. Along the way, the insects
                      brave all manner of predators—and regularly engage in wars
                      with other ants. But these insects are even tougher than
                      previously thought.
                      <br />
                      <br />
                      A new study shows that one Central American leaf-cutter
                      ant species has natural armor that covers its exoskeleton.
                      This shield-like coating is made of calcite with high
                      levels of magnesium, a type found only in one other
                      biological structure: sea urchin teeth, which can grind
                      limestone.
                      <br />
                      <br />
                      In leaf-cutter ants, this coating is made of thousands of
                      tiny, plate-like crystals that harden their exoskeleton.
                      This 'armor' helps prevent the insects from losing limbs
                      in battles with other ants and staves off fungal
                      infections."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.nationalgeographic.com/animals/2020/11/leaf-cutter-ants-have-strong-mineral-armor/"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Geographic, 2020
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Microscope size={16} className="text-purple-500" />{" "}
                        Crystal Structure
                      </h3>
                      <p>
                        The layer is composed of euhedral rhombohedral crystals
                        with curved faces, 3–5 μm in size. This crystal coating
                        is extremely thin and invisible to the naked eye, yet
                        provides significant protection.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Bug size={16} className="text-gray-500" /> Unique
                        Properties
                      </h3>
                      <p>
                        Before this discovery, no type of calcite had been found
                        in any adult insect. The crystal coating breaks like
                        glass under pressure, unlike the typical malleable
                        exoskeleton of other insects.
                      </p>
                    </div>
                  </div>

                  <p>
                    These crystal structures give the ants a unique
                    characteristic - their armor can actually break like glass
                    under sufficient pressure, rather than simply bending or
                    deforming as was previously thought to be the case for all
                    insects.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <BookOpen className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/27/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/18"
                        className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 27:18
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Until, when they came upon the valley of the ants, an
                          ant said, 'O ants, enter your homes so that you do not
                          be crushed by Solomon and his soldiers while they do
                          not feel it.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٨ حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ
                          قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا
                          مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ
                          وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100">
                      Key Word
                    </Badge>
                    <p className="mt-3">
                      The Arabic term "Yahtimannakum يَحْطِمَنَّكُمْ" used in
                      this verse specifically means "break" or "shatter" rather
                      than simply "crush" or "squash." This specific choice of
                      wording is particularly noteworthy given our modern
                      understanding of the crystalline nature of leaf-cutter ant
                      exoskeletons.
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
                    The alignment between modern scientific discoveries about
                    leaf-cutter ants and the specific terminology used in the
                    Quranic verse raises an interesting point for consideration:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the breakable nature of ant exoskeletons?
                    </h3>
                    <p>
                      The discovery that leaf-cutter ants possess a brittle,
                      crystal-like coating on their exoskeletons is an extremely
                      recent scientific finding, confirmed only in 2020. This
                      property makes them uniquely vulnerable to breaking rather
                      than just being crushed—precisely matching the terminology
                      used in the Quranic description from the 7th century.
                    </p>
                  </div>

                  <p>
                    In the 7th century, knowledge about insect anatomy was
                    extremely limited. The microscopes needed to observe the
                    crystalline structure on ant exoskeletons would not be
                    invented for another thousand years. Yet the Quran used a
                    specific term referring to breaking, which aligns remarkably
                    well with what we now know about these specific ants having
                    a unique breakable crystal armor—something that would have
                    been impossible to observe or know through the scientific
                    means available at that time.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-emerald-600 hover:bg-emerald-700">
              <Bug size={24} />
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
            <Sparkles className="text-emerald-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Nature's Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The fascinating world of insects continues to reveal new
            discoveries, connecting ancient texts with modern scientific
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

export default ExoskeletonAnts;
