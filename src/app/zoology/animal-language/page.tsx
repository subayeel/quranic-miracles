/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bird, // Using Bird icon for the theme
  ChevronRight,
  Mic, // Represents sound/communication
  BookOpen,
  HelpCircle,
  PawPrint, // Represents animals
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

const AnimalLanguage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Animal Communication",
        icon: PawPrint,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "science",
        title: "Scientific Insights",
        icon: Mic,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic References",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900", // Using teal for Quran section
        iconColor: "text-teal-500",
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
      <div className="bg-gradient-to-r from-green-600 to-teal-700 dark:from-green-800 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bird className="text-green-200" size={32} />
            <h1 className="text-4xl font-bold">Animal Language</h1>
          </div>
          <p className="text-xl max-w-2xl text-green-100">
            Exploring Communication Beyond Humans
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-green-700 border-white hover:bg-white/10"
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
                    Discover how animals communicate
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
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <PawPrint className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Animals Have Their Own Languages</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For a long time, it was commonly believed that only humans
                    possessed the complex ability of language. Skeptics might
                    have dismissed the idea of animals having their own forms of
                    communication that could be considered "language." However,
                    modern science has increasingly revealed the intricate ways
                    animals communicate, challenging older assumptions.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">
                      Beyond Simple Instincts
                    </h3>
                    <p>
                      Animal communication goes far beyond simple calls or
                      signals. Researchers are discovering complex systems of
                      vocalizations, gestures, and even chemical signals that
                      function in ways that can be described as language-like,
                      conveying detailed information about threats, food
                      sources, and social structures.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Mic className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Insights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Today, scientists are actively studying and, in some cases,
                    beginning to decode the communication systems of various
                    animal species. Birdsong, for example, is much more than
                    just singing; it's a complex form of communication.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Decoding
                      Bird Language
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "For centuries, Native Americans have relied on so-called
                      'bird language' to learn the whereabouts of people and
                      other animals... 'A lot of indigenous people have been
                      using bird language to know where mega-predators are,'
                      says Pinar Ateş Sinopoulos-Lloyd... 'They are able to
                      decipher how birds communicate and warn each other in the
                      forest.'"
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.popsci.com/learn-bird-language"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Popular Science, How to decode the secret language of
                        birds, 2018
                      </a>
                    </div>
                  </div>

                  <p>
                    This research highlights that animals, including birds,
                    possess sophisticated means of communication that serve
                    vital purposes, from warning others of danger to sharing
                    information about their environment. Scientists are
                    continuing to unravel the complexities of these natural
                    "languages."
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic References */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Quranic References</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-6">
                  {" "}
                  {/* Increased spacing */}
                  <p>
                    Interestingly, the concept of understanding animal
                    communication appears in the Quran, revealed over 1400 years
                    ago.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800 space-y-4">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/27/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/16"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 27:16
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And Solomon succeeded David. He said, 'O people, we
                          were taught the language of birds, and we were given
                          from everything. This is indeed a real blessing.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٦ وَوَرِثَ سُلَيْمَانُ دَاوُودَ ۖ وَقَالَ يَا
                          أَيُّهَا النَّاسُ عُلِّمْنَا مَنْطِقَ الطَّيْرِ
                          وَأُوتِينَا مِنْ كُلِّ شَيْءٍ ۖ إِنَّ هَٰذَا لَهُوَ
                          الْفَضْلُ الْمُبِينُ
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                        Key Phrase
                      </Badge>
                      <p className="mt-3">
                        The phrase "مَنْطِقَ الطَّيْرِ" (mantiq al-tayr)
                        directly translates to the "language of birds." This
                        verse speaks of Prophet Solomon being granted the
                        understanding of this language, indicating that birds
                        possess a form of communication that can be learned or
                        understood.
                      </p>
                    </div>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800 space-y-4">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/17/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/44"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 17:44
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "The seven heavens and the Earth and everyone in them
                          glorify Him [Allah]; and there is nothing that doesn't
                          glorify Him thankfully; but you (humans) do not
                          understand their glorification. He is Compassionate,
                          Merciful."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٤ تُسَبِّحُ لَهُ السَّمَاوَاتُ السَّبْعُ وَالْأَرْضُ
                          وَمَنْ فِيهِنَّ ۚ وَإِنْ مِنْ شَيْءٍ إِلَّا يُسَبِّحُ
                          بِحَمْدِهِ وَلَٰكِنْ لَا تَفْقَهُونَ تَسْبِيحَهُمْ ۗ
                          إِنَّهُ كَانَ حَلِيمًا غَفُورًا
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                        Key Point
                      </Badge>
                      <p className="mt-3">
                        This verse mentions that everything in creation
                        glorifies Allah, but humans "do not understand their
                        glorification." This implies a form of communication or
                        expression from animals (and all things) that is beyond
                        human comprehension, aligning with the idea that they
                        have their own 'languages' or ways of expressing
                        themselves that are generally not accessible to us.
                      </p>
                    </div>
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
                    Considering the scientific efforts today to understand
                    animal communication, the Quranic verses mentioning the
                    "language of birds" and the incomprehensible "glorification"
                    of all creation raise a fascinating question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this concept, now being explored by modern
                      science, be present in a text from the 7th century?
                    </h3>
                    <p>
                      In the 7th century, during the time of the Quran's
                      revelation, the prevalent understanding was that complex
                      language was uniquely human. The idea that animals
                      possessed distinct, potentially understandable, forms of
                      communication or expression was not part of the common
                      knowledge or scientific understanding of the era. The
                      Quran's reference to Prophet Solomon understanding the
                      language of birds and the broader concept of creation's
                      'glorification' being beyond human comprehension seems
                      remarkably aligned with the direction of modern biological
                      and communication research, prompting reflection on its
                      source.
                    </p>
                  </div>

                  <p>
                    This connection between ancient scripture and contemporary
                    scientific exploration invites us to ponder the depth of
                    knowledge contained within the Quran and its consistency
                    with discoveries made centuries later, using tools and
                    methods unavailable at the time of its revelation.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700">
              <Bird size={24} />
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
            <Sparkles className="text-green-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Nature's Voices</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intricate world of animal communication continues to fascinate
            and reveal connections across time and knowledge.
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

export default AnimalLanguage;
