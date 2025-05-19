/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Atom,
  ChevronRight,
  Star,
  BookOpen,
  HelpCircle,
  Weight,
  Gem,
  Layers,
  Sparkles,
  ArrowUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define types for the content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind color class for background
  iconColor: string; // Tailwind color class for icon
}

const IronMiracle = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs if possible, otherwise HTMLElement is fine
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Iron: Sent Down",
        icon: Star, // Representing origin from space
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Discoveries",
        icon: Atom, // Representing atomic structure and strength
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "quran",
        title: "Quranic Connections",
        icon: BookOpen, // Representing the Quran
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle, // Representing reflection/question
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
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
  }, [contents]); // contents is stable due to useMemo, but listed for correctness

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
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-800 dark:to-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Atom className="text-gray-300" size={32} />
            <h1 className="text-4xl font-bold">The Miracle of Iron</h1>
          </div>
          <p className="text-xl max-w-2xl text-gray-300">
            Exploring a unique mention of Iron in the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-gray-700 hover:bg-gray-100"
              onClick={() => scrollToSection("science")}
            >
              Discover Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-gray-100 border-gray-400 hover:bg-gray-700"
              onClick={() => scrollToSection("quran")}
            >
              See Quranic Verse
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>Unpack the facts about Iron</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-700 font-medium"
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
              <Card className="border-l-4 border-blue-500 dark:border-blue-700 dark:bg-gray-800 dark:text-gray-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Star className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Iron: Sent Down from Above?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there's a fascinating mention of iron being
                    "sent down." This might seem like an unusual description,
                    especially considering the common understanding of iron in
                    the 7th century.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      7th Century Perspective vs. Quranic Description
                    </h3>
                    <p>
                      In the 7th century, people knew iron as a metal found
                      within the Earth. They knew it could be mined, heated, and
                      shaped. They also knew its limitations – it rusts and can
                      be bent. The idea of it being "sent down" from above would
                      have been, to say the least, counter-intuitive. Skeptics
                      might even see this as a mistake, perhaps thinking the
                      text misunderstands where iron comes from.
                    </p>
                  </div>
                  <p>
                    Yet, the Quran uses a specific phrase that modern science
                    now sheds remarkable light upon.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Discoveries */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500 dark:border-purple-700 dark:bg-gray-800 dark:text-gray-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Atom className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Modern Scientific Facts about Iron</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Star size={16} className="text-purple-500" /> Cosmic
                      Origin
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Iron and most of the elements on Earth came from outer
                      space."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Nucleosynthesis" // Link to nucleosynthesis or similar
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more about stellar nucleosynthesis (General
                        Reference)
                      </a>
                    </div>
                    <p className="mt-3">
                      Modern astrophysics confirms that iron is predominantly
                      forged in the hearts of massive stars. During supernova
                      explosions, these stars expel newly created elements,
                      including iron, into space. Our solar system, and
                      everything in it (including Earth and its iron), formed
                      from this cosmic dust – the remnants of ancient stars. So,
                      in a very real scientific sense, iron on Earth *did* come
                      from outer space.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Weight size={16} className="text-purple-500" /> Great
                        Might
                      </h3>
                      <p>
                        Beyond its use in tools and structures, science reveals
                        a deeper "might" in iron. Iron-56, a common isotope of
                        iron, has the most stable nucleus of all elements. This
                        means its atomic nucleus is bound together with the
                        greatest energy per nucleon, making it incredibly stable
                        from a nuclear physics perspective.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Layers size={16} className="text-purple-500" /> Deep
                        Below
                      </h3>
                      <p>
                        Iron is also incredibly abundant on Earth, with a vast
                        amount concentrated at its core.
                      </p>
                      <div className="mt-3 text-sm">
                        <a
                          href="https://www.britannica.com/science/Earth/The-interior"
                          className="text-purple-600 dark:text-purple-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Britannica, Earth The Interior
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Connections */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500 dark:border-teal-700 dark:bg-gray-800 dark:text-gray-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Exploring Quranic Mentions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/57/25" // Link directly to Surah Al-Hadeed, verse 25
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 57:25
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "We have already sent Our messengers with clear
                          evidences and sent down with them the Scripture and
                          the balance that the people may maintain [their
                          affairs] in justice. And We sent down iron, wherein is
                          great might and for [its] benefits to the people, and
                          that Allah may make evident who supports Him and His
                          messengers unseen. Indeed, Allah is Powerful and
                          Exalted in Might."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٥ لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ
                          وَأَنزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ
                          لِيَقُومَ النَّاسُ بِالْقِسْطِ ۖ وَأَنزَلْنَا
                          الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ
                          وَلِيَعْلَمَ اللَّهُ مَن يَنصُرُهُ وَرُسُلَهُ
                          بِالْغَيْبِ ۚ إِنَّ اللَّهَ قَوِيٌّ عَزِيزٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Notice the phrase translated as "And We sent down iron"
                    (وَأَنزَلْنَا الْحَدِيدَ - Wa anzalna al-hadeed). The word
                    "Anzalna" (أَنزَلْنَا) comes from the root "Nazala" (نزل),
                    which means "to send down" or "to cause to descend." This is
                    the same word used for sending down rain or scriptures from
                    the heavens.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Gem size={16} className="text-teal-500" /> Numerical
                        Correspondences?
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          The chapter (Surah) in the Quran where this verse
                          appears is Chapter 57, titled "Al-Hadeed" (The Iron).
                        </li>
                        <li>
                          Interestingly, the gematrical value (Abjad
                          calculation) of the Arabic words for "Iron" (حديد -
                          Hadeed) is 26. Iron's atomic number is also 26.
                        </li>
                        <li>
                          The gematrical value of the chapter name "Al-Hadeed"
                          (الْحَدِيدَ - Al-Hadeed) is 57. This matches the
                          chapter number. Furthermore, Iron has a stable
                          isotope, ⁵⁷Fe, which shares this number.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Layers size={16} className="text-teal-500" /> Iron in
                        the Earth's Core
                      </h3>
                      <p>
                        Some researchers also point to a potential numerical
                        link between the Quran and the depth of iron within the
                        Earth. The verse about iron is approximately the 5100th
                        verse from the beginning of the Quran (depending on
                        counting methodology). The solid iron core of the Earth
                        is found at a depth of approximately 5100 kilometers.
                      </p>
                      <div className="mt-3 text-sm">
                        <a
                          href="https://www.britannica.com/science/Earth/The-interior"
                          className="text-teal-600 dark:text-teal-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Britannica, Earth The Interior
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500 dark:border-orange-700 dark:bg-gray-800 dark:text-gray-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <HelpCircle className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>Considering the context of the 7th century:</p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could these facts about iron—its cosmic origin, the
                      nuclear stability of its nucleus, and these numerical
                      correspondences—have been known?
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The miracle is that the Quran said 'we sent down iron, in
                      it great might' at a time when they only knew that it
                      rusted, bent and definitely NOT from outer space. Today we
                      know that iron is formed in stars and that iron has the
                      strongest bound nucleus among all elements."
                    </p>
                  </div>

                  <p>
                    The knowledge that iron originates from stars crashing down
                    into the universe, and that it possesses the strongest
                    nuclear binding energy—facts understood only through
                    advanced modern physics and astronomy—appears in a text from
                    a time when the common understanding of iron was limited to
                    its earthly properties. This remarkable alignment between
                    ancient scripture and modern science invites deep reflection
                    on the nature of the Quran's knowledge.
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
            <Sparkles className="text-teal-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Miracles in the Quran
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connections between ancient text and modern scientific understanding
            continue to emerge.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IronMiracle;
