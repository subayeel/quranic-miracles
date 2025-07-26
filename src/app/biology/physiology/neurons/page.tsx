/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Brain, // Icon for Brain/Neurons
  ChevronRight,
  Microscope, // Icon for Science/Research
  BookOpen, // Icon for Quran
  HelpCircle, // Icon for Reflection
  ArrowUp, // For back to top
  Sparkles, // For footer
  Quote,
  GlassWater,
  Dna, // For quotes
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

const NeuronsComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Memory's Secrets",
        icon: Brain,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Discoveries",
        icon: Microscope,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Perspective",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900", // Using teal for a different green shade
        iconColor: "text-teal-500",
      },
      {
        id: "reflection",
        title: "Reflecting on Knowledge",
        icon: HelpCircle,
        color: "bg-violet-100 dark:bg-violet-900", // Using violet
        iconColor: "text-violet-500",
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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Neurons</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Exploring Memory Beyond the Brain
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-100 border-purple-100 hover:bg-white hover:text-purple-700"
              onClick={() => scrollToSection("intro")}
            >
              What's This About?
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
                    Journey into memory and the body
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
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Brain className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Memory's Secrets</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    When we think of memory, we instantly think of the brain!
                    It's where we store cherished moments, important facts, and
                    everything else we 'remember'. For a long time, science
                    agreed: memory lives in the brain, and only the brain.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Is the Brain the Only Place for Memory?
                    </h3>
                    <p>
                      The conventional understanding has always been that our
                      complex memories, from what we had for breakfast to
                      remembering a loved one's face, are exclusively processed
                      and stored within the intricate network of neurons in our
                      brain. This idea was deeply ingrained in scientific
                      thought.
                    </p>
                  </div>
                  <p>
                    However, what if other parts of the body held surprising
                    capabilities we're only just starting to understand? The
                    Quran contains verses that might make us ponder this
                    question from a completely different angle.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Microscope className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Recent Scientific Discoveries</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" />{" "}
                      Challenging the Norm
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Can skin and liver 'remember'? Does our body store
                      memories everywhere?
                      <br />
                      For a long time, memory was thought to be a specialized
                      function of the brain, with our neural circuits and brain
                      cells handling all our memories. But recent research from
                      New York University has turned this assumption on its
                      head. According to this study, even cells outside the
                      brains can store and retrieve memories, opening up a new
                      view of how our entire body participates in memory
                      process. This discovery doesn't just add to our
                      understanding of memory - it could just change how we
                      approach learning and treatment for memory-related
                      disorders."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/can-skin-and-liver-remember-does-our-body-store-memories-everywhere/articleshow/115217072.cms"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TOI, Can skin and liver "remember"? Does our body store
                        memories everywhere?, 2024
                      </a>
                    </div>
                  </div>

                  <p>
                    This groundbreaking research published in 2024 suggests that
                    memory might not be confined solely to the brain. Cells in
                    other parts of the body, including the skin, appear to have
                    the capability to store and access information, a concept
                    previously thought impossible.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Dna size={16} className="text-indigo-500" /> Cellular
                        Memory
                      </h3>
                      <p>
                        It seems that memory, at a fundamental cellular level,
                        might be a more widespread phenomenon throughout the
                        body than just within neural networks.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <GlassWater size={16} className="text-indigo-500" /> New
                        Frontiers
                      </h3>
                      <p>
                        This opens up exciting new avenues for research in
                        biology and medicine, potentially transforming our
                        understanding of learning, trauma, and even certain
                        diseases.
                      </p>
                    </div>
                  </div>
                  <p>
                    This idea – that memory isn't just in the brain – is a very
                    modern scientific concept, challenging decades of
                    established understanding.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>
                      Quranic Perspective: The Testifying Skin
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/en/41/19"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 41:19-21
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "The Day when Allah’s enemies are herded into the
                          Fire, forcibly. Until, when they have reached it,
                          their hearing, and their sight, and their skins will
                          testify against them regarding what they used to do.
                          And they will say to their skins, “Why did you testify
                          against us?” They will say, “Allah, Who made all
                          things speak, made us speak. It is He who created you
                          the first time, and to Him you are returned.”
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٩ وَيَوْمَ يُحْشَرُ أَعْدَاءُ اللَّهِ إِلَى النَّارِ
                          فَهُمْ يُوزَعُونَ
                          <br />
                          ٢٠ حَتَّىٰ إِذَا مَا جَاءُوهَا شَهِدَ عَلَيْهِمْ
                          سَمْعُهُمْ وَأَبْصَارُهُمْ وَجُلُودُهُمْ بِمَا كَانُوا
                          يَعْمَلُونَ
                          <br />
                          ٢١ وَقَالُوا لِجُلُودِهِمْ لِمَ شَهِدْتُمْ عَلَيْنَا ۖ
                          قَالُوا أَنْطَقَنَا اللَّهُ الَّذِي أَنْطَقَ كُلَّ
                          شَيْءٍ وَهُوَ خَلَقَكُمْ أَوَّلَ مَرَّةٍ وَإِلَيْهِ
                          تُرْجَعُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Key Point
                    </Badge>
                    <p className="mt-3">
                      These verses describe a scene on the Day of Judgment where
                      a person's own body parts – their hearing, sight, and
                      *skins* – will speak and testify against them about their
                      past actions. The people then question their skins, who
                      reply that Allah, who makes all things speak, made them
                      speak.
                    </p>
                    <p className="mt-3">
                      For the skin to "testify" about past deeds, it would
                      logically need to have some form of 'knowledge' or
                      'record' of those actions. In essence, it implies the skin
                      possesses a form of memory or the ability to recall
                      information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-violet-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900">
                      <HelpCircle className="text-violet-500" size={24} />
                    </div>
                    <CardTitle>Reflecting on This Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>This brings us to a fascinating point of reflection:</p>

                  <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border border-violet-100 dark:border-violet-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this idea – that memory might exist outside the
                      brain, specifically in the skin – be mentioned in a
                      7th-century text like the Quran?
                    </h3>
                    <p>
                      In the 7th century, human understanding of biology and the
                      nervous system was extremely limited. The concept of
                      memory was vaguely associated with the heart or the brain,
                      but the sophisticated understanding of neural networks we
                      have today, let alone the idea of cellular memory outside
                      the brain, was completely unknown and scientifically
                      impossible to detect or even conceive of with the tools
                      and knowledge available at the time.
                    </p>
                  </div>

                  <p>
                    The Quranic description of skins testifying implies they
                    retain some record of actions, a concept strikingly parallel
                    to the recent scientific findings that cells outside the
                    brain can store and retrieve memory. From the perspective of
                    someone in the 7th century, attributing the ability to
                    'testify' about past deeds to skin would have been
                    extraordinary, as all known understanding placed memory
                    firmly within the head.
                  </p>
                  <p>
                    This correlation between ancient scripture and modern
                    scientific discovery prompts us to think about the source of
                    such knowledge found in the Quran.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700">
              <Brain size={24} />
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
            <h3 className="text-lg font-medium">Exploring Body & Knowledge</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Scientific discovery continues to unveil complexities that resonate
            with ancient texts, inviting us to ponder deeper connections.
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

export default NeuronsComponent;
