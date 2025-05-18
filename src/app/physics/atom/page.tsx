/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Atom, // Using Atom icon for particle theme
  ChevronRight,
  BookOpen,
  Quote,
  Sparkles, // For the reflection/miracle aspect
  ArrowUp,
  Microscope, // For science section
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

// Define types for the content structure
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icon components
  color: string; // Tailwind class for background color
  iconColor: string; // Tailwind class for icon color
}

const SubatomicInsight: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Smallest Parts",
        icon: Atom,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Beyond the Atom",
        icon: Microscope,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "Quranic Mentions",
        icon: BookOpen,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "reflection",
        title: "A Deeper Look",
        icon: Sparkles,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
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
    setActiveSection(id); // Update state immediately for better UX
    const element = document.getElementById(id);
    if (element) {
      // Use a slight delay or requestAnimationFrame if scrollIntoView is janky
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 dark:from-purple-800 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Atom className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Subatomic Insight</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Exploring Matter's Smallest Components
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
              className="text-purple-100 border-purple-200 hover:bg-purple-700/20"
              onClick={() => scrollToSection("intro")}
            >
              Introduction
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
                  <CardTitle className="text-lg">Topic Navigation</CardTitle>
                  <CardDescription>
                    Journey into the world of tiny particles
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
                      <Atom className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Quest for the Smallest</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For a long time in history, people wondered about the
                    smallest building blocks of everything around us. Many
                    philosophers and thinkers believed there was a point you
                    couldn't divide matter any further.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Ancient View: Indivisible Atoms
                    </h3>
                    <p>
                      In ancient times, including around the 7th century, the
                      concept of the "atom" (if discussed at all, often as a
                      philosophical idea of an ultimate, indivisible particle)
                      was considered the smallest possible component of matter.
                      It was thought that you simply couldn't break it down any
                      further.
                    </p>
                  </div>
                  <p>
                    However, the Quran, revealed in the 7th century, contained
                    descriptions that hinted at a reality potentially different
                    from this common understanding.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Context (Beyond the Atom) */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Microscope className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>
                      Modern Science: Dividing the "Smallest"
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fast forward to modern science, and we know that the atom is
                    definitely *not* the smallest indivisible particle!
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> The Layers
                      of Matter
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      Today, we understand that atoms are made up of even
                      smaller particles: electrons orbiting a central nucleus.
                      This nucleus is itself composed of protons and neutrons.
                      And protons and neutrons are further made of even tinier
                      things called quarks! The search for the absolute smallest
                      particle continues, with theories like String Theory
                      proposing fundamental vibrating strings.
                    </p>
                  </div>

                  <p>
                    This layered structure of matter – atom containing a
                    nucleus, nucleus containing protons/neutrons, etc. – is a
                    discovery of modern physics, requiring advanced technology
                    to explore. This detailed understanding was completely
                    unknown in the 7th century.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <BookOpen className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>What the Quran Says</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>Let's look at a couple of verses from the Quran:</p>

                  {/* Quran 6:95 */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/6/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/95"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 6:95
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Indeed, Allah is the cleaver of grain and date seeds.
                          He extracts the living from the dead and extracts the
                          dead from the living. That is Allah, so how are you
                          deluded?"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٩٥ إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَىٰ ۖ
                          يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَمُخْرِجُ
                          الْمَيِّتِ مِنَ الْحَيِّ ۚ ذَٰلِكُمُ اللَّهُ ۖ
                          فَأَنَّىٰ تُؤْفَكُونَ
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                        Key Phrase
                      </Badge>
                      <p className="mt-3">
                        The phrase translated as "cleaver of grain and date
                        seeds" uses the Arabic word "فَالِقُ" (faliq), meaning
                        "splitter" or "cleaver". The word used for "date seeds"
                        is "وَالنَّوَىٰ" (wan-nawa), which is the plural of
                        "نَوَاة" (nawat). While "nawat" literally refers to a
                        seed or stone (like a date pit), the term "nucleus" in
                        Arabic today is also نَوَاة (nawah). Given the context
                        of splitting and its use in biology (seed splitting) and
                        potentially physics (splitting cores), the
                        interpretation of "nawa" encompassing something like a
                        nucleus or core within a larger entity becomes
                        significant when viewed with modern knowledge. In the
                        7th century, "nawa" likely referred to a seed, but its
                        linguistic form allows for a broader meaning of a core
                        or nucleus.
                      </p>
                    </div>
                  </div>

                  {/* Quran 10:61 */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/10/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/61"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 10:61
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And you are not [engaged] in any matter, nor do you
                          recite any portion of the Quran, nor do you do any
                          deed, except that We are witnesses over you when you
                          are engaged in it. And not absent from your Lord is
                          any [particle] an atom's weight on Earth or in the
                          heaven or [is there] anything smaller than that or
                          greater, except that it is in a clear register."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦١ وَمَا تَكُونُ فِي شَأْنٍ وَمَا تَتْلُو مِنْهُ مِنْ
                          قُرْآنٍ وَلَا تَعْمَلُونَ مِنْ عَمَلٍ إِلَّا كُنَّا
                          عَلَيْكُمْ شُهُودًا إِذْ تُفِيضُونَ فِيهِ ۚ وَمَا
                          يَعْزُبُ عَنْ رَبِّكَ مِنْ مِثْقَالِ ذَرَّةٍ فِي
                          الْأَرْضِ وَلَا فِي السَّمَاءِ وَلَا أَصْغَرَ مِنْ
                          ذَٰلِكَ وَلَا أَكْبَرَ إِلَّا فِي كِتَابٍ مُبِينٍ
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                        Key Phrase
                      </Badge>
                      <p className="mt-3">
                        Here, the phrase "مِثْقَالِ ذَرَّةٍ" (mithqali
                        dharratin) is used, often translated as "the weight of
                        an atom" or "the weight of a dust mote" (as a "dharrah"
                        was the smallest visible particle of dust in sunlight in
                        ancient times). Crucially, the verse then states "وَلَا
                        أَصْغَرَ مِنْ ذَٰلِكَ وَلَا أَكْبَرَ" (wa la asghara min
                        dhalika wa la akbara), meaning "not less than that nor
                        more". This implies that even entities *smaller* than
                        the smallest perceivable particle (the "dharrah" or what
                        might be equated to the atom concept of the time) are
                        known to God and recorded.
                      </p>
                    </div>
                  </div>

                  <p>
                    In the 7th century, the idea that matter could be split
                    *within* its perceived smallest unit, or that things existed
                    that were *smaller* than the "atom" or "dust mote," was not
                    part of human scientific understanding.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <Sparkles className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>
                      Connecting Ancient Text and Modern Science
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the historical context of the 7th century – a
                    time when the prevalent idea was that the atom (or its
                    equivalent concept) was the smallest, unsplittable unit –
                    the Quranic verses present a fascinating point.
                  </p>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a text from the 7th century speak of splitting
                      the "nucleus" or refer to things "smaller than the weight
                      of an atom"?
                    </h3>
                    <p>
                      The verses seem to contradict the limited human
                      understanding of matter's composition at the time they
                      were revealed. While "nawa" also means seed (and the verse
                      speaks of splitting grains too), its application to a
                      'core' or 'nucleus' is consistent with modern science's
                      discovery that atoms have a nucleus that can be split.
                      Similarly, mentioning things "smaller than an atom's
                      weight" aligns with the existence of subatomic particles.
                      This apparent correspondence between a 7th-century text
                      and complex modern physics concepts invites contemplation
                      on the source of this knowledge.
                    </p>
                  </div>

                  <p>
                    This serves as a thought-provoking example of how verses in
                    the Quran appear to resonate with scientific discoveries
                    made centuries later, prompting reflection on its divine
                    origin.
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
              <Atom size={24} />
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
            <h3 className="text-lg font-medium">
              Exploring the Building Blocks of Reality
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The quest to understand the universe's smallest components reveals
            profound connections.
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

export default SubatomicInsight;
