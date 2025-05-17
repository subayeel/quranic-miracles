/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Compass, // Used for direction/guidance
  ChevronRight,
  Magnet, // Represents magnetic field
  BookOpen, // For Quranic reference
  Sparkles, // For the marvel/miracle aspect
  ArrowUp,
  Feather, // Maybe for birds, which use magnetoreception
  MessageCircleQuestion, // Another option for reflection question
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

const MagnetoreceptionComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Sense of Direction",
        icon: Compass,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Scientific Discovery",
        icon: Magnet,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
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
        icon: MessageCircleQuestion,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-800 dark:from-indigo-800 dark:to-purple-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Magnetoreception</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Nature's Navigators
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Explore the Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-100 hover:bg-indigo-700"
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
                    Unveiling Earth's magnetic sense
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
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Compass className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>A Natural Sense of Direction</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Think about how we find our way around. For centuries,
                    humans relied on the stars and landmarks for navigation. But
                    what about animals? Do they have hidden ways of finding
                    their path?
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Guidance in Nature
                    </h3>
                    <p>
                      The Quran mentions that God created everything and then
                      gave it guidance. In the 7th century, during a time when
                      human navigation was primarily based on visible celestial
                      bodies, the idea that *all* created things possess an
                      innate guidance might have seemed curious, perhaps even
                      misunderstood by some.
                    </p>
                  </div>
                  <p>
                    Skeptics at the time might have questioned this idea,
                    focusing only on what was observable and understood in the
                    7th century knowledge framework – how could things without
                    obvious guidance mechanisms be guided? However, science
                    today reveals a hidden world of orientation abilities far
                    beyond what was conceivable back then.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Discovery */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Magnet className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>
                      Magnetoreception: Earth's Magnetic Sense
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fast forward to today, and science has uncovered an
                    incredible ability in the natural world: magnetoreception.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-teal-500" /> What is
                      Magnetoreception?
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Magnetoreception (also magnetoception) is a sense which
                      allows an organism to detect a magnetic field to perceive
                      direction, altitude or location. This sensory modality is
                      used by a range of animals for orientation and navigation,
                      and as a method for animals to develop regional maps. In
                      navigation, magnetoreception deals with the detection of
                      the Earth's magnetic field.
                      <br />
                      <br />
                      Magnetoreception is present in bacteria, arthropods,
                      molluscs, and members of all major taxonomic groups of
                      vertebrates. Humans are not thought to have a magnetic
                      sense, but there is a protein (a cryptochrome) in the eye
                      which could serve this function."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Magnetoreception"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Magnetoreception 2021
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Feather size={16} className="text-teal-500" />{" "}
                        Widespread Sense
                      </h3>
                      <p>
                        This amazing sense isn't just in complex animals! It's
                        found in a vast range of life forms, from simple
                        bacteria to insects, fish, birds, and mammals.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Compass size={16} className="text-gray-500" /> Natural
                        Navigation
                      </h3>
                      <p>
                        Just like we use sight or hearing, these organisms use
                        Earth's magnetic field like an invisible compass to
                        navigate, migrate, and orient themselves.
                      </p>
                    </div>
                  </div>

                  <p>
                    Essentially, many creatures can "sense" the Earth's magnetic
                    field in ways we are only just beginning to understand. It's
                    like having a built-in GPS! This incredible natural ability
                    was completely unknown to humans 1400 years ago.
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
                    <CardTitle>The Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/20/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/50"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 20:50
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "[Moses] said, 'Our Lord is He who gave everything its
                          creation, then guided it.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          قَالَ رَبُّنَا الَّذِي أَعْطَىٰ كُلَّ شَيْءٍ خَلْقَهُ
                          ثُمَّ هَدَىٰ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrases
                    </Badge>
                    <p className="mt-3 space-y-2">
                      <span className="font-bold">
                        "Kul shaye كُلَّ شَيْءٍ"
                      </span>{" "}
                      means <span className="font-medium">"everything."</span>{" "}
                      This phrase is crucial. It doesn't say He guided *some*
                      things, or *humans*, but *everything*.
                      <br />
                      <span className="font-bold">
                        "Thumma hada ثُمَّ هَدَىٰ"
                      </span>{" "}
                      means{" "}
                      <span className="font-medium">"then guided it."</span>{" "}
                      This refers to giving everything its specific guidance or
                      direction after its creation.
                    </p>
                    <p className="mt-3">
                      Putting these together, the verse tells us that God gave
                      *every single thing* its existence and then provided it
                      with its unique form of guidance.
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
                      <MessageCircleQuestion
                        className="text-purple-500"
                        size={24}
                      />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's connect the dots: Modern science confirms that
                    countless living organisms, from the simplest bacteria to
                    complex animals like birds, possess an inherent sense –
                    magnetoreception – that allows them to navigate using
                    Earth's magnetic field. This is a form of "guidance" that is
                    built into their very creation.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800 text-center">
                    <h3 className="font-bold text-xl mb-3">
                      How could a text from the 7th century accurately state
                      that <span className="italic">everything</span> is given a
                      form of guidance after creation, a concept strikingly
                      aligned with the scientific discovery of magnetoreception
                      across diverse life forms, which was unknown at the time?
                    </h3>
                    <p>
                      In an era where navigation relied on visible cues, the
                      idea that invisible forces like magnetic fields provide
                      guidance to living things was beyond human comprehension.
                      The Quran's assertion that{" "}
                      <span className="italic">everything</span> is guided
                      points to a knowledge source that transcends the
                      scientific understanding of the 7th century.
                    </p>
                  </div>

                  <p>
                    This correlation between the ancient verse and modern
                    biological discovery is truly thought-provoking! It invites
                    us to consider the depth of the Quran's message and its
                    remarkable consistency with the natural world as revealed by
                    science over a millennium later.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-indigo-600 hover:bg-indigo-700">
              <Compass size={24} />
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">Guided by Creation</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the fascinating ways life navigates, a wonder mentioned in
            ancient scripture and confirmed by modern science.
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

export default MagnetoreceptionComponent;
