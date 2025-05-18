/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Compass, // Using Compass icon for direction
  ChevronRight,
  Globe, // Using Globe for historical maps
  MapPin, // Using MapPin for modern standard
  BookOpen, // Keeping BookOpen for Quran
  HelpCircle, // Keeping HelpCircle for reflection
  ArrowUp,
  Sparkles, // Keeping Sparkles for wonder/miracle
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

// Define type for section content
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const NorthStandardComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Standard of North",
        icon: Compass,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "history",
        title: "Historical Conventions",
        icon: Globe,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "modern",
        title: "Today's Standard",
        icon: MapPin,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Insights",
        icon: BookOpen,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
      {
        id: "reflection",
        title: "A Timeless Perspective",
        icon: HelpCircle,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
      },
    ];
  }, []);

  // Set up Intersection Observer
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
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-800 dark:from-teal-800 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Direction Standard</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            Exploring the unique significance of North
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("modern")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-teal-700"
              onClick={() => scrollToSection("history")}
            >
              Historical View
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
                    Navigate the direction of North
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
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Compass className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>The Standard of North</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Think about looking at a map today – North is always at the
                    top! It seems like the most natural thing in the world. But
                    was this always the case? It turns out, the idea of North
                    being the standard direction for maps is a convention that
                    developed over time.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3">
                      Directions Haven't Always Been 'Up'
                    </h3>
                    <p>
                      While compasses pointed North (or magnetic North),
                      aligning maps with North wasn't always the preferred
                      method. Different cultures and periods used different
                      conventions for orienting their maps.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Conventions */}
            <section id="history" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Globe className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Historical Map Conventions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Throughout history, cartographers and cultures adopted
                    various ways to orient their maps. There was no single,
                    universal rule.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Globe size={16} className="text-purple-500" /> Different
                      Directions Took Precedence
                    </h3>
                    <p>
                      Some maps were oriented with East at the top, often due to
                      the rising sun's significance or religious importance
                      (like towards Jerusalem). Others might have placed South
                      at the top, common in some Islamic traditions (oriented
                      towards Mecca). Even local landmarks or dominant winds
                      could influence map orientation.
                    </p>
                  </div>

                  <p>
                    The familiar "North is Up" standard we use today wasn't
                    always the default. It gained prominence gradually,
                    particularly with the spread of magnetic compasses in
                    navigation and the development of latitude/longitude grids.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Modern Standard */}
            <section id="modern" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <MapPin className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Today's Universal Standard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Today, virtually every map and navigational tool uses North
                    as the primary orientation – North is at the top. This
                    provides a consistent framework for understanding geography
                    globally.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Facing North and the Sun's Path
                    </h3>
                    <p>
                      With North established as "up", think about your own
                      orientation:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>
                        If you face North, the sun rises to your **right**
                        (East).
                      </li>
                      <li>
                        If you face North, the sun sets to your **left** (West).
                      </li>
                    </ul>
                    <p className="mt-3">
                      This simple observation of the sun's path relative to your
                      position is a key indicator that you are facing North.
                    </p>
                  </div>

                  <p>
                    This modern standard, while seemingly obvious to us, wasn't
                    a given throughout much of human history.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <BookOpen className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>Quranic Insights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at a verse from the Quran, revealed in the
                    7th century CE, a time when various map orientations
                    existed, and the modern "North is Up" standard was unknown.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quran.com/18/17" // Link to a common Quran source
                        className="text-orange-600 dark:text-orange-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 18:17
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "You would have seen the sun, when it rose, veering
                          away from their cave towards the right, and when it
                          sets, it lends them from the left, as they lay in the
                          midst of the cave. That was one of Allah’s wonders. He
                          whom Allah guides is truly guided; but he whom He
                          misguides, for him you will find no directing friend."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg text-gray-800 dark:text-gray-200">
                        <p dir="rtl">
                          ۞ وَتَرَى الشَّمْسَ إِذَا طَلَعَت تَّزَاوَرُ عَن
                          كَهْفِهِمْ ذَاتَ الْيَمِينِ وَإِذَا غَرَبَت
                          تَّقْرِضُهُمْ ذَاتَ الشِّمَالِ وَهُمْ فِي فَجْوَةٍ
                          مِّنْهُ ۚ ذَٰلِكَ مِنْ آيَاتِ اللَّهِ ۗ مَن يَهْدِ
                          اللَّهُ فَهُوَ الْمُهْتَدِ ۖ وَمَن يُضْلِلْ فَلَن
                          تَجِدَ لَهُ وَلِيًّا مُّرْشِدًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
                      Understanding the Description
                    </Badge>
                    <p className="mt-3">
                      The verse describes the sun's path relative to a cave
                      where some people were sleeping. When the sun rises, it
                      "veers away... towards the right" of the cave entrance.
                      When it sets, it "lends them from the left". The people
                      are described as being "in the midst" or "fajwah"
                      (opening) of the cave.
                    </p>
                    <p className="mt-3">
                      Consider the sun's movement in the sky. For the rising sun
                      to veer right relative to an opening, and the setting sun
                      to approach from the left relative to that same opening,
                      the opening itself must be facing **North**.
                    </p>
                    <p className="mt-3 font-medium">
                      If you stand facing North, the sun indeed rises to your
                      right (East) and sets to your left (West). The description
                      in the verse precisely matches the perspective of someone,
                      or an opening, oriented towards North.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <HelpCircle className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>A Timeless Perspective</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>Here lies the point of contemplation:</p>
                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this specific orientation – facing North, which
                      aligns with today's universal map standard – be described
                      in the Quran in the 7th century CE?
                    </h3>
                    <p>
                      In the 7th century, standardized maps weren't commonplace,
                      and the idea of universally putting North at the top was
                      far from established. Determining precise directions
                      without modern instruments was challenging, relying mostly
                      on celestial observations, but standardizing this globally
                      was another matter.
                    </p>
                    <p className="mt-3">
                      The Quranic verse, however, uses a description of the
                      sun's path that inherently points to a North-facing
                      orientation, matching the convention that would much later
                      become the global standard for maps.
                    </p>
                  </div>
                  <p>
                    This connection between an ancient scripture's description
                    and a modern geographical standard is seen as a remarkable
                    aspect, suggesting a source of knowledge beyond the typical
                    understanding of the time.
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
            <h3 className="text-lg font-medium">Directions and Divine Signs</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring how ancient texts intersect with our understanding of the
            world and its fundamental orientations.
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

export default NorthStandardComponent;
