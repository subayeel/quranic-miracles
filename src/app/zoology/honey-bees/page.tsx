/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  RotateCcw,
  ArrowUp,
  Sparkles,
  Bug,
  FlaskConical,
  Venus,
  Mountain,
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

const HoneyBees = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Worker Bees Are Females",
        icon: Venus,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: FlaskConical,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
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
      <div className="bg-gradient-to-r from-amber-500 to-yellow-700 dark:from-amber-700 dark:to-yellow-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bug className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Honey Bees</h1>
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
              className="text-amber-700"
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
                    Explore the wonders of honey bees
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
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <Venus className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>Worker Bees Are Females</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, worker bees are described as females with
                    special abilities. Skeptics claimed this was incorrect, but
                    modern science confirms these remarkable details about honey
                    bees.
                  </p>
                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-lg mb-3">
                      Amazing Bee Facts
                    </h3>
                    <p>
                      Worker bees are all females, have an extra stomach for
                      honey, and some species can even drill nests in solid
                      rock. These facts were unknown in the 7th century but are
                      clearly described in the Quran.
                    </p>
                  </div>
                  <p>
                    It turns out bees have something odd in their chromosomes:
                    Female bees have 16 pairs of chromosomes (32 total) while
                    males have only 16 chromosomes. Interestingly, chapter 16 of
                    the Quran is called "The Bees" (An-Nahl).
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <FlaskConical className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Worker bees are all female and are the only bees with
                      stingers. They have specialized anatomy including a honey
                      stomach (crop) for transporting nectar. Certain species
                      like carpenter bees can drill into wood, and some solitary
                      bees can even excavate nests in solid rock."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Honey_bee"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Honey Bee, 2023
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Venus size={16} className="text-pink-500" /> All Female
                        Workers
                      </h3>
                      <p>
                        Worker bees are exclusively female. Males (drones) don't
                        gather pollen or make honey. This fact was only
                        discovered recently with modern microscopy.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-blue-500" />{" "}
                        Special Anatomy
                      </h3>
                      <p>
                        Bees have an extra stomach (crop) specifically for
                        transporting nectar. This was unknown before modern
                        entomology.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain size={16} className="text-amber-500" />{" "}
                        Rock-Drilling Bees
                      </h3>
                      <p>
                        Some bee species can excavate nests in solid rock, a
                        behavior only documented by scientists in recent
                        decades.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Bug size={16} className="text-green-500" /> Chromosome
                        Count
                      </h3>
                      <p>
                        Female bees have 32 chromosomes (16 pairs) while males
                        have only 16. This genetic peculiarity was unknown
                        before modern science.
                      </p>
                    </div>
                  </div>
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
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/16/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/68"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 16:68-69 (An-Nahl - The Bees)
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And your Lord inspired the bee: 'Make your homes in
                          the mountains, in the trees, and in what people
                          construct. Then eat from all the fruits and follow the
                          ways your Lord has made easy for you.' From their
                          bellies comes a drink of different colors in which
                          there is healing for people. Surely in this is a sign
                          for those who reflect."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦٨ وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي
                          مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا
                          يَعْرِشُونَ
                          <br />
                          ٦٩ ثُمَّ كُلِي مِنْ كُلِّ الثَّمَرَاتِ فَاسْلُكِي
                          سُبُلَ رَبِّكِ ذُلُلًا ۚ يَخْرُجُ مِنْ بُطُونِهَا
                          شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ
                          ۗ إِنَّ فِي ذَٰلِكَ لَآيَةً لِقَوْمٍ يَتَفَكَّرُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 mb-2">
                        Female Grammar
                      </Badge>
                      <p>
                        The Quran uses exclusively feminine grammar when
                        referring to worker bees:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>"Kuli" (eat) - feminine form</li>
                        <li>"Usluki" (follow paths) - feminine form</li>
                        <li>"Butuniha" (their bellies) - feminine singular</li>
                      </ul>
                    </div>

                    <div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 mb-2">
                        Multiple Stomachs
                      </Badge>
                      <p>
                        "Butuniha" refers to multiple stomachs of a single
                        female bee. We now know bees have a special honey
                        stomach (crop) in addition to their digestive stomach.
                      </p>
                    </div>

                    <div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 mb-2">
                        Rock-Drilling Bees
                      </Badge>
                      <p>
                        The Quran mentions bees making homes in mountains (solid
                        rock), trees (wood), and man-made structures - exactly
                        matching recently discovered bee behaviors.
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
                    The precise scientific information about bees in the Quran
                    raises profound questions:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man in the 7th century have known:
                    </h3>
                    <ul className="space-y-3">
                      <li>• That worker bees are all females?</li>
                      <li>• That bees have an extra stomach for honey?</li>
                      <li>• That some bees can drill nests in solid rock?</li>
                    </ul>
                  </div>

                  <p>
                    These specific details about bee biology and behavior were
                    completely unknown in the ancient world. The female worker
                    bees, their specialized anatomy, and their ability to
                    excavate rock were only discovered centuries later with
                    advanced scientific tools.
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Contrast with Other Scriptures
                    </h3>
                    <p>
                      Unlike the Quran's accurate scientific information, other
                      ancient texts contain biological inaccuracies. For
                      example, the Bible claims there are four-legged insects
                      (Leviticus 11:20) and describes mythical fire-breathing
                      creatures (Job 41:19-21).
                    </p>
                  </div>

                  <p>
                    The Quran's precise description of honey bees - matching
                    modern scientific discoveries while being impossible to know
                    in the 7th century - serves as a powerful sign for those who
                    reflect on the origins of this knowledge.
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
            <Sparkles className="text-amber-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Nature's Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intricate design of honey bees continues to amaze scientists,
            while their precise description in the Quran invites reflection.
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

export default HoneyBees;
