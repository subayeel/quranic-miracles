/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Waves, // Suitable icon for sound waves
  ChevronRight,
  BookOpen,
  HelpCircle,
  Activity, // Represents scientific measurement/activity
  Sparkles,
  ArrowUp,
  Quote,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Background color for the icon circle
  iconColor: string; // Text color for the icon
}

const SoundWavesComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Early Universe Sound",
        icon: Waves,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Confirmation",
        icon: Activity,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "quran",
        title: "Quranic Revelation",
        icon: BookOpen,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "reflection",
        title: "Contemplating the Knowledge",
        icon: HelpCircle,
        color: "bg-violet-100 dark:bg-violet-900",
        iconColor: "text-violet-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
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
      <div className="bg-gradient-to-r from-blue-700 to-purple-900 dark:from-blue-900 dark:to-purple-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="text-blue-300" size={32} />
            <h1 className="text-4xl font-bold">Sound Waves</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Cosmology - Advanced: Echoes from Creation
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Evidence <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-700"
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
                    Journey into the sounds of the early cosmos
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
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={contents[0].color + " p-2 rounded-lg"}>
                      <Waves className={contents[0].iconColor} size={24} />
                    </div>
                    <CardTitle>{contents[0].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Skeptics once claimed that outer space is a complete vacuum,
                    incapable of carrying sound waves. However, modern cosmology
                    has revealed a stunning truth about the very early universe
                    — it was not a vacuum, and it was filled with actual sound
                    waves!
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Primordial Cosmic Symphony
                    </h3>
                    <p>
                      In its earliest moments, the universe was incredibly hot
                      and dense, unlike the empty space we perceive today. This
                      dense plasma allowed sound waves to propagate, creating
                      vibrations that left their imprint on the fabric of the
                      cosmos.
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
                    <div className={contents[1].color + " p-2 rounded-lg"}>
                      <Activity className={contents[1].iconColor} size={24} />
                    </div>
                    <CardTitle>{contents[1].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Cosmologists have confirmed the existence of these sound
                    waves from the very early universe. Data from missions like
                    the Planck satellite have allowed scientists to study the
                    Cosmic Microwave Background (CMB) radiation, which holds the
                    fossilized echoes of these ancient vibrations.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-purple-500" /> University
                      of Washington Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The original sound waves were not temperature variations,
                      though, but were real sound waves propagating around the
                      universe... As the universe cooled and expanded, it
                      stretched the wavelengths to create 'more of a bass
                      instrument'... The sound was, in fact, so 'bass' that he
                      had to boost the frequency 100 septillion times (that's a
                      100 followed by 24 more zeroes) just to get the recordings
                      into a range where they can be heard by humans."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.washington.edu/news/2013/09/20/listening-to-the-big-bang-in-high-fidelity-audio/"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        University of Washington, Listening to the Big Bang- in
                        high fidelity (audio), 2013
                      </a>
                    </div>
                  </div>

                  <p>
                    Remarkably, physicists have even created an audio recording
                    based on this data, allowing us to "listen" to the early
                    universe. This recording compresses about 380,000 years of
                    cosmic evolution into just 100 seconds. Due to the vast
                    stretching of wavelengths as the universe expanded, the
                    original sounds were extremely low frequency (like a deep
                    bass) and required immense frequency boosting to be audible
                    to humans.
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Waves size={16} className="text-blue-500" /> Real Sound
                      Waves
                    </h3>
                    <p>
                      Contrary to the idea of a silent vacuum, the early cosmos
                      was a vibrant place with real sound waves propagating
                      through its dense plasma. This is a confirmed scientific
                      fact today.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={contents[2].color + " p-2 rounded-lg"}>
                      <BookOpen className={contents[2].iconColor} size={24} />
                    </div>
                    <CardTitle>{contents[2].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/41/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/11"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 41:11
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then He directed himself to the Heaven when it was
                          smoke and then said to it and to Earth: 'Come
                          willingly or by force' they said 'We do come
                          willingly'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١١ ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ
                          فَقَالَ لَهَا وَلِلْأَرْضِ ائْتِيَا طَوْعًا أَوْ
                          كَرْهًا قَالَتَا أَتَيْنَا طَائِعِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The verse describes Allah turning to the heaven (which was
                      smoke/gas, consistent with the early universe plasma) and
                      the Earth, issuing a command. The response is crucial:
                      "قالتا أَتَيْنَا طَائِعِينَ" (Qalata ateena ta'i'een),
                      which translates to "they said 'We do come willingly'".
                    </p>
                    <p className="mt-2">
                      The use of the word "قالتا" (Qalata), meaning "they said",
                      is particularly striking. Saying implies having a voice,
                      and having a voice implies emitting sound waves. The Quran
                      thus portrays the heavens and the Earth, in their very
                      early state, as having the capacity to 'speak' or generate
                      sound.
                    </p>
                    <p className="mt-2">
                      This aligns remarkably with the modern scientific
                      discovery that the early universe, which would encompass
                      the primordial heavens and Earth, was indeed filled with
                      propagating sound waves.
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
                    <div className={contents[3].color + " p-2 rounded-lg"}>
                      <HelpCircle className={contents[3].iconColor} size={24} />
                    </div>
                    <CardTitle>{contents[3].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific knowledge available in the 7th
                    century, the idea that the vast expanse of the heavens could
                    "say" something, implying the existence of sound waves in
                    the cosmos, was simply not conceivable. Space was considered
                    an empty, silent void.
                  </p>

                  <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border border-violet-100 dark:border-violet-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a text revealed 1400 years ago hint at sound
                      waves in the early universe?
                    </h3>
                    <p>
                      The Quranic description of the heavens and Earth "saying"
                      or responding, in a state when the heavens were still like
                      "smoke" (plasma), seems to resonate with the modern
                      cosmological finding that the primordial universe was a
                      dense medium where sound waves actively propagated.
                    </p>
                  </div>

                  <p>
                    This connection invites us to ponder the source of such
                    knowledge in an era when the scientific tools and
                    understanding required to detect and confirm cosmic sound
                    waves were millennia away. The alignment between this
                    ancient text and recent scientific discoveries is truly
                    thought-provoking.
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Cosmic Echoes</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The universe continues to unveil its secrets, often echoing truths
            found in ancient wisdom.
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

export default SoundWavesComponent;
