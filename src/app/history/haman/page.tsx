/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Scroll,
  ChevronRight,
  Building,
  BookOpen,
  Quote,
  HelpCircle,
  MapPin,
  ArrowUp,
  Sparkles,
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

// Define types for the section content
type ContentSection = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const HistoricalHaman = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Haman in History",
        icon: Scroll,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "misconception",
        title: "Historical Misconception",
        icon: Building,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "discovery",
        title: "Archaeological Evidence",
        icon: MapPin,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
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
      <div className="bg-gradient-to-r from-amber-600 to-yellow-700 dark:from-amber-800 dark:to-yellow-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Scroll className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Haman</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">
            Historical Archaeology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("misconception")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-amber-100 border-amber-100 hover:bg-amber-700"
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
                    Explore the ancient Egyptian figure
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
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Scroll className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Haman in History</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The name Haman appears in both Biblical and Quranic texts,
                    but in strikingly different historical contexts. This
                    difference has been a point of critique against the Quran's
                    historical accuracy. Modern archaeological discoveries,
                    however, have shed new light on this ancient figure.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-lg mb-3">
                      Haman Across Ancient Texts
                    </h3>
                    <p>
                      The name Haman appears in the Quran as a high official in
                      ancient Egypt during the time of Moses and Pharaoh,
                      involved in construction projects. This placement differed
                      significantly from the Biblical Haman, who was portrayed
                      as a Persian official many centuries after Moses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Misconception */}
            <section id="misconception" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Building className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Historical Misconception</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-red-500" /> The Biblical
                      Account
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      In the Bible's Book of Esther, Haman appears as an
                      assistant to the King of Persia, Xerxes I (Ahasuerus),
                      living approximately 1,000 years after the time of Moses.
                      He is portrayed as an enemy of the Jewish people who
                      plotted their destruction.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <BookOpen size={16} className="text-red-500" /> Biblical
                        Timeline
                      </h3>
                      <p>
                        The Biblical Haman lived during the Persian Empire
                        (circa 5th century BCE), while Moses is traditionally
                        placed in Egypt around the 13th century BCE—nearly 800
                        years earlier.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Quote size={16} className="text-gray-500" /> Critique
                        of the Quran
                      </h3>
                      <p>
                        Critics argued that the Quran erroneously placed Haman
                        in Egypt during Moses' time, suggesting this was a
                        chronological error and evidence of historical
                        inaccuracy.
                      </p>
                    </div>
                  </div>

                  <p>
                    For centuries, this apparent discrepancy was cited as
                    evidence that the Quran contained historical errors. During
                    the 7th century when the Quran was revealed, there was no
                    way to verify ancient Egyptian names and titles, as the
                    ability to read hieroglyphs had been lost for over a
                    thousand years.
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
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/28/38"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 28:38
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And Pharaoh said to his people: 'I have not known a
                          god for you other than myself; so Haman, light me a
                          fire to bake clay so that I could build a rise high
                          enough, maybe I see Moses' god whom I think is a
                          liar.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَقَالَ فِرْعَوْنُ يَا أَيُّهَا الْمَلَأُ مَا عَلِمْتُ
                          لَكُمْ مِنْ إِلَٰهٍ غَيْرِي فَأَوْقِدْ لِي يَا
                          هَامَانُ عَلَى الطِّينِ فَاجْعَلْ لِي صَرْحًا لَعَلِّي
                          أَطَّلِعُ إِلَىٰ إِلَٰهِ مُوسَىٰ وَإِنِّي لَأَظُنُّهُ
                          مِنَ الْكَاذِبِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Details
                    </Badge>
                    <p className="mt-3">According to the Quran, Haman was:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        An official in ancient Egypt during Pharaoh's time
                      </li>
                      <li>
                        Specifically tasked with construction work using baked
                        clay (bricks)
                      </li>
                      <li>
                        Ordered to build a tall structure for Pharaoh to
                        "ascend" to see Moses' God
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Archaeological Evidence */}
            <section id="discovery" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <MapPin className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Archaeological Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Hieroglyphic Discovery
                    </h3>
                    <p>
                      Modern Egyptologists made a remarkable discovery when
                      translating ancient Egyptian hieroglyphs. They found the
                      name "Haman" mentioned as a high official who worked in
                      construction during the New Kingdom period of ancient
                      Egypt—exactly as described in the Quran.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Quote size={16} className="text-purple-500" />{" "}
                        Archaeological Record
                      </h3>
                      <p>
                        The hieroglyphic inscription "overseer of the stone
                        masons of Amun Haman" provides compelling evidence that
                        a person named Haman did exist in ancient Egypt with a
                        title closely matching his role as described in the
                        Quran.
                      </p>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        Source: Die aegyptischen Denkmaeler in Miramar, Leo
                        Rienisch, S. Rienisch
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Building size={16} className="text-purple-500" />{" "}
                        Construction Role
                      </h3>
                      <p>
                        Egyptologists translated prayers asking for blessings
                        for "the overseer of the stone masons of Amun Haman"—a
                        title confirming his role in construction of stone
                        monuments, precisely aligning with the Quranic account
                        of Haman's responsibilities.
                      </p>
                    </div>
                  </div>

                  <p>
                    These archaeological findings are particularly significant
                    because the ability to read Egyptian hieroglyphs was lost
                    shortly after the fall of ancient Egypt and was not
                    recovered until the 19th century, over 1,000 years after the
                    Quran was revealed. During the 7th century CE when the Quran
                    was recorded, there was no way for anyone to know these
                    details about ancient Egyptian officials and their titles.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <HelpCircle className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The archaeological confirmation of Haman's existence in
                    ancient Egypt as a construction official raises an
                    intriguing historical question:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about Haman?
                    </h3>
                    <p>
                      In 7th century Arabia, no one could read Egyptian
                      hieroglyphs—this ability had been lost for over a
                      millennium. The Rosetta Stone that eventually enabled
                      their translation wasn't discovered until 1799, and the
                      decipherment wasn't completed until the 1820s.
                    </p>
                    <p className="mt-3">
                      The accurate placement of Haman in ancient Egypt with a
                      specific construction role presents a historical puzzle
                      that defies simple explanation. This connection between
                      ancient scripture and modern archaeological discovery
                      invites thoughtful consideration about the origins of this
                      knowledge.
                    </p>
                  </div>

                  <p>
                    What was once considered a historical error in the Quran has
                    been transformed by modern archaeology into evidence of
                    historical accuracy. The correct mention of Haman's name,
                    location, and professional role—details that were unknowable
                    in the 7th century—presents a remarkable historical
                    correspondence that continues to intrigue scholars today.
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
            <Sparkles className="text-amber-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Ancient History</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Where ancient texts and modern archaeology converge to reveal
            historical insights that bridge millennia.
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

export default HistoricalHaman;
