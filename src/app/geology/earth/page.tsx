/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Globe, // Changed icon for Earth
  ChevronRight,
  Move, // New icon for movement
  Maximize, // New icon for dimensions/diameter
  PlusSquare, // New icon for formation/spreading
  HelpCircle,
  ArrowUp,
  Sparkles,
  BookOpen,
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

// Define the structure for content sections using TypeScript
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icon components
  color: string; // Tailwind classes for background color
  iconColor: string; // Tailwind classes for icon color
}

const EarthComponent = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections using useMemo for performance
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Earth: Our Home",
        icon: Globe,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "shape",
        title: "Spherical Shape",
        icon: Globe, // Using Globe again for shape
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "movement",
        title: "Earth's Motion",
        icon: Move,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "dimensions",
        title: "Diameter & Surface",
        icon: Maximize,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "formation",
        title: "Spreading Out",
        icon: PlusSquare,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "reflection",
        title: "Historical Context",
        icon: HelpCircle,
        color: "bg-red-100 dark:bg-red-900", // Using a different color for reflection
        iconColor: "text-red-500",
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

    // Observe all section elements dynamically based on contents
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    const currentRefs = sectionRefs.current; // Capture current value for cleanup

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Dependency array includes contents

  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update active section state immediately
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header - Using a more Earth-toned gradient */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-800 dark:from-teal-800 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Earth</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Cosmology - Earth's Form & History
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("shape")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-teal-700"
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
                    Explore Earth's characteristics
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
                      <Globe className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Earth: Our Home Planet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For much of history, prevailing views on the Earth's shape
                    and motion were quite different from what we know today. In
                    the 7th century, widespread beliefs often depicted Earth as
                    flat and stationary.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">
                      Ancient Views vs. Modern Science
                    </h3>
                    <p>
                      While ancient Greek philosophers had proposed a spherical
                      Earth centuries earlier, this knowledge wasn't universally
                      accepted or widely known, especially in the Arabian
                      Peninsula at the time the Quran was revealed. The common
                      cosmology was often geocentric and viewed Earth as a flat
                      disk or solid foundation.
                    </p>
                  </div>
                  <p>
                    Let's explore how certain verses in the Quran describe the
                    Earth's form and behavior in ways that remarkably align with
                    modern scientific understanding, posing intriguing questions
                    about their origin in the 7th century.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Spherical Shape */}
            <section id="shape" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Globe className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Describing a Sphere</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Consider how the Quran describes the transition between day
                    and night.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-blue-500" /> Quran
                      39:5
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "He created the heavens and the earth in truth. He
                          overlaps the night over the day and overlaps the day
                          over the night, and enslaved the sun and the moon. ALL
                          MOVE to a prerecorded destiny. Is He not the Exalted,
                          the Forgiver?"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٥ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۖ
                          يُكَوِّرُ اللَّيْلَ عَلَى النَّهَارِ وَيُكَوِّرُ
                          النَّهَارَ عَلَى اللَّيْلِ ۖ وَسَخَّرَ الشَّمْسَ
                          وَالْقَمَرَ ۖ كُلٌّ يَجْرِي لِأَجَلٍ مُسَمًّى ۗ أَلَا
                          هُوَ الْعَزِيزُ الْغَفَّارُ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Key Word
                    </Badge>
                    <p className="mt-3">
                      The Arabic word used here is "Yukawer يُكَوِّرُ". It comes
                      from the root "Kura كرة", which means "ball". Therefore,
                      "Yukawer" means to make something into a ball or to wrap
                      or coil something around like a turban, forming a rounded
                      shape.
                    </p>
                  </div>

                  <p>
                    Describing the night and day *overlapping* or *coiling*
                    around each other vividly portrays how this phenomenon
                    happens on a spherical body. On a flat Earth, night and day
                    would simply meet at a line, not overlap in a way that
                    "makes a ball." This description aligns perfectly with the
                    continuous transition from day to night experienced on a
                    rotating sphere.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Earth's Motion */}
            <section id="movement" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Move className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Is Earth Moving?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Look at the same verse again, specifically the phrase about
                    celestial bodies:
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-indigo-500" /> Quran
                      39:5 (Part)
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "...and enslaved the sun and the moon. ALL MOVE to a
                          prerecorded destiny..."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ...وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ ۖ كُلٌّ يَجْرِي
                          لِأَجَلٍ مُسَمًّى...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "Kullon Yajree كُلٌّ يَجْرِي" means "ALL MOVE".
                      In Arabic grammar, different forms are used for singular,
                      binary (two), and plural (three or more). If only the sun
                      and moon were being referred to, the binary form "Kulahuma
                      Yajreean كلاهما يجريان" would typically be used.
                    </p>
                  </div>
                  <p>
                    Since the Quran uses the plural form "Kullon Yajree",
                    meaning "all" (referring to three or more things mentioned),
                    and the context mentions the sun, moon, *and* the Earth
                    (implied by the description of day/night overlapping *on*
                    Earth), this suggests that all three are in motion. At a
                    time when Earth was widely considered static, this verse
                    points to Earth's own movement, aligning with modern
                    understanding of planetary motion.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Diameter & Surface */}
            <section id="dimensions" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Maximize className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Mentioning Diameter?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Another interesting verse seems to refer to Earth's size
                    using a term associated with spheres.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-purple-500" /> Quran
                      55:33
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "O company of Jinn and man, escape the diameters of
                          the Heavens and the Earth if you can, You won't escape
                          without authority."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٣ يَا مَعْشَرَ الْجِنِّ وَالْإِنْسِ إِنِ
                          اسْتَطَعْتُمْ أَنْ تَنْفُذُوا مِنْ أَقْطَارِ
                          السَّمَاوَاتِ وَالْأَرْضِ فَانْفُذُوا ۚ لَا
                          تَنْفُذُونَ إِلَّا بِسُلْطَانٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Key Word
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "Aqtar اقطار" used here is the plural of
                      "Kutr قطر". "Kutr" specifically means diameter. Radii and
                      diameters are geometric properties associated with circles
                      or, in three dimensions, spheres.
                    </p>
                  </div>
                  <p>
                    Mentioning "diameters" of the Earth is highly consistent
                    with the idea of Earth being a spherical body, as suggested
                    by the term "Yukawer" in the previous verse. This concept of
                    Earth having a measurable diameter would have been foreign
                    within a flat-Earth cosmology.
                  </p>

                  <div className="mt-6">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Surface vs. Flat
                    </Badge>
                    <p className="mt-3">
                      It's worth noting the Arabic word "Sateh سطح", which means
                      "surface". While this word *can* describe a flat surface,
                      it's a general term for a surface of *any* shape (like the
                      surface of the moon - "Sateh Al-Kamar سطح القمر"). The
                      word for specifically "flat" is "Musattah مسطح", which is
                      <span className="font-medium text-purple-700 dark:text-purple-300">
                        not
                      </span>{" "}
                      used in the entire Quran to describe the Earth.
                      Historically, some translations used "flat" for "Sateh",
                      leading to misunderstandings.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Formation - Spreading Out */}
            <section id="formation" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <PlusSquare className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Earth's Early Growth</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    How did the Earth come into being? Science tells us it grew
                    over time through accretion.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-yellow-500" /> Quran
                      50:7
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the Earth We have spread it out, and set thereon
                          mountains standing firm, and have produced therein
                          every kind of lovely pairs (of plants)."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧ وَالْأَرْضَ مَدَدْنَاهَا وَأَلْقَيْنَا فِيهَا
                          رَوَاسِيَ وَأَنْبَتْنَا فِيهَا مِنْ كُلِّ زَوْجٍ
                          بَهِيجٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                      Key Word
                    </Badge>
                    <p className="mt-3">
                      The phrase "Wal Arda Madadnaha وَالْأَرْضَ مَدَدْنَاهَا"
                      means "And the Earth We have spread it out". The verb
                      "Madda" means to spread out, extend, or increase.
                    </p>
                  </div>
                  <p>
                    Modern science explains that Earth formed through accretion,
                    starting as small particles and gradually growing by
                    colliding with and accumulating other material. As its
                    radius increased over millions of years, its surface area
                    (which is a function of the radius, $A = 4\pi R^2$ for a
                    sphere) also increased significantly.
                  </p>
                  <p>
                    The description of Earth being "spread out" during its
                    formation aligns well with this scientific understanding of
                    gradual growth and increasing surface area, in contrast to
                    ideas of instantaneous creation.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <HelpCircle className="text-red-500" size={24} />
                    </div>
                    <CardTitle>
                      Connecting Ancient Text and Modern Science
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's pause and reflect on these descriptions. In the 7th
                    century, the dominant view in many parts of the world,
                    including the Arabian Peninsula, depicted Earth as flat and
                    immobile. The idea of Earth being a rotating sphere with a
                    measurable diameter, or that it gradually increased in size
                    during its formation, were concepts far beyond the common
                    understanding.
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could these precise descriptions of Earth's spherical
                      nature, its movement, its dimensions, and its formation
                      process be present in a text from 1400 years ago?
                    </h3>
                    <p>
                      These are details that science has only been able to
                      confirm accurately with advanced tools, telescopes, and
                      space exploration centuries later. The alignment between
                      these Quranic verses and modern scientific knowledge about
                      Earth's fundamental properties invites profound
                      contemplation about the source of this information in the
                      7th century.
                    </p>
                  </div>

                  <p>
                    For instance, ancient texts like certain interpretations of
                    the Bible described Earth as a flat disk under a solid dome
                    of the sky (Isaiah 40:22), implying one could see the whole
                    Earth from a high mountain (Matthew 4:8) – concepts that
                    conflict sharply with a spherical Earth. The Quran's
                    descriptions stand in remarkable contrast to these widely
                    held ancient views, presenting details that resonate
                    strongly with our current scientific understanding.
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
            <Sparkles className="text-teal-600" size={18} />
            <h3 className="text-lg font-medium">
              Exploring the Wonders of Earth
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Our planet holds many secrets, and its ancient descriptions continue
            to spark curiosity and connection with modern discoveries.
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

export default EarthComponent;
