/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles, // Using Sparkles for intro, representing sensation/miracle
  Activity, // Representing nerve activity
  BookOpen, // For the Quranic reference
  HelpCircle, // For reflection/questions
  ChevronRight,
  ArrowUp,
  Zap, // Another option for nerves/sensation
  Heart, // Could represent connection to body/feeling
} from "lucide-react"; // Using Zap for header icon as it relates to signals

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

const SkinNerves = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Skin & Pain Sensation",
        icon: Sparkles,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "science",
        title: "Nerves and Sensation",
        icon: Activity,
        color: "bg-purple-100 dark:bg-purple-900", // Using purple for science/anatomy
        iconColor: "text-purple-500",
      },
      {
        id: "quran",
        title: "Quranic Verse",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Thinking Point",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Using amber for reflection as in example
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
      <div className="bg-gradient-to-r from-red-500 to-pink-700 dark:from-red-700 dark:to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-pink-200" size={32} />{" "}
            {/* Zap for nerve signals */}
            <h1 className="text-4xl font-bold">Skin Nerves</h1>
          </div>
          <p className="text-xl max-w-2xl text-red-100">
            Exploring the Science of Sensation
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-red-700 hover:bg-red-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-red-700 border-red-700 hover:bg-red-50" // Added border for outline visibility
              onClick={() => scrollToSection("intro")}
            >
              Start Here
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
                    Understand skin's role in sensation
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
              <Card className="border-l-4 border-red-500">
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      {" "}
                      {/* Changed background */}
                      <Sparkles className="text-red-500" size={24} />{" "}
                      {/* Changed icon/color */}
                    </div>
                    <CardTitle>Skin and the Sense of Pain</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Our skin is an incredible organ, protecting us and
                    connecting us to the world through touch, pressure,
                    temperature, and importantly, pain. Have you ever wondered
                    how we feel that sharp pinch or the heat from a stove? It
                    all comes down to tiny helpers in our skin: the nerve
                    endings!
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-bold text-lg mb-3">Feeling the Heat</h3>
                    <p>
                      Pain, especially burning pain, is a crucial signal that
                      tells our body something is wrong. This sensation isn't
                      felt evenly throughout our tissues; it's primarily the job
                      of the specialized nerve endings located in our outer
                      layers of skin.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      {" "}
                      {/* Changed background */}
                      <Activity className="text-purple-500" size={24} />{" "}
                      {/* Changed icon/color */}
                    </div>
                    <CardTitle>Nerves: The Body's Alert System</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Our skin is packed with millions of nerve endings. Think of
                    them as tiny sensors connected to a vast network that sends
                    messages all the way to your brain! Different nerve endings
                    sense different things, and some are specifically designed
                    to detect painful stimuli like extreme heat or cold, sharp
                    objects, or intense pressure.
                  </p>
                  {/* Removed image section and integrated text */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Zap size={16} className="text-purple-500" /> Pain Signals
                      Need Nerves
                    </h3>
                    <p>
                      When you touch something hot, these nerve endings in your
                      outer skin get activated and send a rapid electrical
                      signal through your nerves up to your spinal cord and then
                      to your brain. Your brain processes this signal and
                      interprets it as pain, prompting you to pull away
                      instantly!
                    </p>
                    <p className="mt-3">
                      However, here's a key point: if the skin is severely
                      burned and the nerve endings are destroyed, the signal
                      pathway is broken. Without those functional nerve endings,
                      no message is sent to the brain, and surprisingly, the
                      intense pain sensation goes away, even though the tissue
                      damage is severe. This is why severe burns might initially
                      be less painful than moderate ones after the nerves are
                      destroyed.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Heart size={16} className="text-purple-500" /> Skin's
                        Crucial Role
                      </h3>
                      <p>
                        The ability to feel pain, particularly the burning
                        sensation, is highly concentrated in the skin due to the
                        density of pain receptors (nociceptors) located there.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <HelpCircle size={16} className="text-gray-500" /> Loss
                        of Sensation
                      </h3>
                      <p>
                        Damage to the skin and its nerves, such as from severe
                        burns, results in a loss of pain sensation because the
                        signals cannot be transmitted to the brain.
                      </p>
                    </div>
                  </div>

                  <p>
                    Understanding that pain from burning is felt *via* the
                    skin's nerve endings, and that destroying these nerves
                    removes the sensation, is a detail that modern medicine has
                    fully grasped.
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
                    <CardTitle>Mentioned in the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at a verse from the Quran, revealed in the
                    7th century, at a time when detailed knowledge of anatomy
                    and nerve function was simply not available to the general
                    populace, or even advanced scholars, in the way we
                    understand it today.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/4/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/56"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 4:56
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Indeed, those who disbelieve in Our verses - We will
                          drive them into a Fire. Every time their skins are
                          roasted, We will replace them with other skins so that
                          they may taste the punishment. Indeed, Allah is ever
                          Exalted in Might and Wise."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٥٦ إِنَّ الَّذِينَ كَفَرُوا بِآيَاتِنَا سَوْفَ
                          نُصْلِيهِمْ نَارًا كُلَّمَا نَضِجَتْ جُلُودُهُمْ
                          بَدَّلْنَاهُمْ جُلُودًا غَيْرَهَا لِيَذُوقُوا
                          الْعَذَابَ ۗ إِنَّ اللَّهَ كَانَ عَزِيزًا حَكِيمًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Point
                    </Badge>
                    <p className="mt-3">
                      The verse mentions replacing the skins "so that they may
                      taste the punishment." The emphasis is on the skin's role
                      in experiencing the pain of the fire.
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
                    <CardTitle>Putting it Together</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Consider the knowledge available in the 7th century. While
                    people knew that burns were painful, the intricate mechanism
                    of *why* and *how* pain is felt – specifically the
                    dependence on intact nerve endings in the outer skin layers
                    – was not understood.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone 1400 years ago know that pain sensation
                      from burning requires intact skin?
                    </h3>
                    <p>
                      The Quranic verse doesn't just say people will burn; it
                      specifically mentions replacing skins *so they can taste
                      the torture*. This strongly implies that without the
                      replacement skins, the pain sensation would be lost,
                      aligning with the modern scientific understanding that
                      severe burns destroying skin and nerves eliminate pain
                      sensitivity.
                    </p>
                  </div>

                  <p>
                    The level of detail linking pain sensation directly to the
                    skin and the implication that damaging the skin removes this
                    sensation is remarkable from the perspective of 7th-century
                    knowledge. It raises fascinating questions about the source
                    of such information in the Quran.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-red-600 hover:bg-red-700">
              {" "}
              {/* Changed colors */}
              <Zap size={24} /> {/* Changed icon */}
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
            <Sparkles className="text-red-500" size={18} />{" "}
            {/* Changed color */}
            <h3 className="text-lg font-medium">Exploring the Body & Beyond</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The complexities of the human body, understood through modern
            science, echo themes found in ancient scripture.
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

export default SkinNerves;
