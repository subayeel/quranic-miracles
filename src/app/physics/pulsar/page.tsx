/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  Radio,
  BookOpen,
  Quote,
  HelpCircle,
  RotateCcw,
  ArrowUp,
  Volume2,
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
import Image from "next/image";

type ContentSection = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const PulsarsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "What Are Pulsars",
        icon: Star,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Radio,
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

  const playPulsarSound = (type: "slow" | "fast") => {
    const audioUrl =
      type === "slow"
        ? "https://www.miracles-of-quran.com/assets/wav/pulsar_slow.au"
        : "https://www.miracles-of-quran.com/assets/wav/pulsar_fast.au";

    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 dark:from-purple-800 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Pulsars</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Physics - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-purple-700"
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
                    Explore rotating neutron stars
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

          <div className="lg:col-span-3 space-y-12">
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Star className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>What Are Pulsars</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Pulsars are rotating neutron stars that emit beams of
                    electromagnetic radiation. Most neutron stars discovered
                    today are in the form of radio pulsars, named for their
                    pulsed radio emissions.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Listen to a Pulsar
                    </h3>
                    <p className="mb-4">
                      We can connect a radio telescope to a speaker and
                      literally hear a pulsar's unique knocking sound. This
                      distinctive audio signature is what makes pulsars so
                      fascinating.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <Button
                        onClick={() => playPulsarSound("slow")}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Volume2 size={16} className="mr-2" /> Slow Knocking
                        Pulsar
                      </Button>
                      <Button
                        onClick={() => playPulsarSound("fast")}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Volume2 size={16} className="mr-2" /> Fast Knocking
                        Pulsar
                      </Button>
                    </div>
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
                      <Radio className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Neutron
                      Stars & Black Holes
                    </h3>
                    <p>
                      Pulsars are rotating neutron stars. As more matter falls
                      into a neutron star, its mass increases, and consequently,
                      its gravity increases. At a certain point, the
                      gravitational distortion becomes so immense that it can
                      create a hole in spacetime, potentially forming a black
                      hole.
                    </p>
                  </div>

                  <div className="flex justify-center my-6">
                    <div className="relative w-full max-w-md h-64">
                      <Image
                        src="/api/placeholder/400/300"
                        alt="Pulsar and spacetime distortion visualization"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-blue-500" /> Radio
                        Emissions
                      </h3>
                      <p>
                        Pulsars emit radio waves that can be detected on Earth.
                        When connected to a speaker, these emissions produce a
                        distinctive knocking sound due to the pulsar's rapid
                        rotation.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Star size={16} className="text-yellow-500" />{" "}
                        Gravitational Effects
                      </h3>
                      <p>
                        The extreme gravity of neutron stars can distort
                        spacetime. As their mass increases, they can reach a
                        point where this distortion creates a hole in spacetime,
                        forming a black hole.
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
                        href="https://www.quranwow.com/#/ch/86/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/1"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 86:1-3
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the heaven and the 'Knocker' How could you know
                          about the 'Knocker'? The piercing star."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١ وَالسَّمَاءِ وَالطَّارِقِ
                          <br />
                          ٢ وَمَا أَدْرَاكَ مَا الطَّارِقُ
                          <br />٣ النَّجْمُ الثَّاقِبُ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Terminology
                    </Badge>
                    <p className="mt-3">
                      "Tarek الطَّارِقُ" in Arabic means "the one who knocks."
                      This perfectly describes the audio signature of pulsars
                      when converted to sound.
                    </p>
                    <p className="mt-3">
                      "Thukb ثقب" means a hole, and "Thakeb ثَّاقِبُ" means "the
                      one who makes a hole." This describes how the extreme
                      gravity of massive neutron stars can distort spacetime,
                      potentially creating black holes.
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
                    The connection between modern astronomy and the Quranic
                    verse about "the knocker" raises a thought-provoking
                    question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about pulsars?
                    </h3>
                    <p>
                      Pulsars were only discovered in 1967 by Jocelyn Bell
                      Burnell and Antony Hewish, using radio telescopes
                      unavailable in the 7th century. Yet the Quran appears to
                      describe both the distinctive "knocking" sound of pulsars
                      and their connection to spatial distortions that we now
                      associate with black holes.
                    </p>
                  </div>

                  <p>
                    In the 7th century, astronomical knowledge was limited to
                    what could be observed with the naked eye. The concepts of
                    neutron stars, radio waves, and the distortion of spacetime
                    were entirely unknown. The knocking sound of pulsars
                    couldn't be detected without modern radio telescopes and
                    electronic equipment.
                  </p>

                  <p>
                    The reference in the Quran to "the knocker" (Al-Tariq) that
                    is also described as "the piercing star" (Al-Najm Al-Thaqib)
                    presents a remarkable correlation with our modern
                    understanding of pulsars and their potential connection to
                    black hole formation.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700">
              <Star size={24} />
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

      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Cosmic Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of our universe continue to unfold, connecting ancient
            texts with modern astronomical discoveries.
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

export default PulsarsPage;
