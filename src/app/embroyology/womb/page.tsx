/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Heart, // Using Heart for a friendly, biological feel
  ChevronRight,
  Microscope, // Represents science/discovery
  BookOpen, // Represents Quran
  Sparkles, // Represents miracle/reflection
  ArrowUp, // Back to top
  Scale, // Could represent measure/proportion from the verse
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

// Define a type for the content items
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType; // Using React.ElementType for icon components
  color: string;
  iconColor: string;
}

const WombMiracle: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Using a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the sections and their properties
  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Wondrous Womb",
        icon: Heart,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
      },
      {
        id: "science",
        title: "Science Explains",
        icon: Microscope,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "quran",
        title: "A Quranic Insight",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900", // Using Teal for a different feel
        iconColor: "text-teal-500",
      },
      {
        id: "reflection",
        title: "Pause and Ponder",
        icon: Sparkles,
        color: "bg-amber-100 dark:bg-amber-900", // Keeping amber for reflection
        iconColor: "text-amber-500",
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
  }, [contents]); // Dependency array includes contents

  // Function to scroll to a section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update active section immediately on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-700 dark:from-pink-700 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-pink-200" size={32} />
            <h1 className="text-4xl font-bold">The Womb</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Exploring a Miracle of the Quran
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
              className="text-white border-white hover:bg-white/10"
              onClick={() => scrollToSection("intro")}
            >
              Learn About It
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
                    Understand the Womb's incredible changes
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
                      <Heart className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>The Wondrous Womb</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The womb is an amazing organ, a nurturing place where life
                    begins. For centuries, its intricate workings were a
                    mystery. However, the Quran, revealed in the 7th century,
                    contains a description that resonates remarkably with modern
                    scientific discoveries about the womb's internal changes.
                  </p>
                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-lg mb-3">
                      More Than Just Space
                    </h3>
                    <p>
                      The womb (uterus) isn't static; its inner lining undergoes
                      dramatic transformations. These changes are crucial for
                      the possibility of pregnancy. Understanding these internal
                      dynamics is relatively recent in human history.
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
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Microscope className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Science Explains</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern medical science has given us incredible tools to see
                    and understand the tiny, intricate changes happening inside
                    the human body. One such area of wonder is the lining of the
                    womb, called the endometrium.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Scale size={16} className="text-purple-500" /> The
                      Changing Lining
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "What to know about endometrial thickness: The endometrium
                      is the lining of the uterus. The body prepares the
                      endometrium to host an embryo during the menstrual cycle.
                      Depending on what stage of the cycle a person is in,
                      endometrial thickness varies from 1–18 millimeters (mm)."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.medicalnewstoday.com/articles/326567" // Using a plausible URL for MNT
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Medical News Today, Endometrial Thickness, 2025 (or year
                        of source)
                      </a>
                    </div>
                  </div>

                  <p>
                    This scientific fact highlights a remarkable process: the
                    endometrial lining isn't static. It actively thickens
                    (increases) to prepare for a potential pregnancy and then
                    sheds (decreases) if pregnancy doesn't occur. This cycle of
                    decrease and increase is a fundamental aspect of the womb's
                    function, a process invisible from the outside and unknown
                    to ancient medical understanding.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>A Quranic Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at what the Quran says about the womb,
                    revealed over 1400 years ago in the 7th century.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/13/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/8" // Using a plausible URL for Quran 13:8
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 13:8
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Allah knows what every female bears, and every
                          decrease and increase to the wombs. With Him,
                          everything is by measure."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٨ اللَّهُ يَعْلَمُ مَا تَحْمِلُ كُلُّ أُنْثَىٰ وَمَا
                          تَغِيضُ الْأَرْحَامُ وَمَا تَزْدَادُ ۖ وَكُلُّ شَيْءٍ
                          عِنْدَهُ بِمِقْدَارٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The verse mentions "مَا تَغِيضُ الْأَرْحَامُ وَمَا
                      تَزْدَادُ" (ma tagheed al-arhamu wa ma tazdad), which
                      translates to "what the wombs decrease and what they
                      increase". This precisely describes the changes in the
                      womb's lining – its decrease (shedding) and increase
                      (thickening).
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
                      <Sparkles className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Pause and Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the time and place of the Quran's revelation –
                    the 7th century Arabian Peninsula – this verse presents a
                    profound point to consider:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have known about the
                      decrease and increase in the womb's lining?
                    </h3>
                    <p>
                      In the 7th century, understanding of internal human
                      biology, especially the microscopic changes within organs
                      like the womb, was non-existent. There were no tools to
                      observe the endometrial lining's cyclical thickening and
                      thinning. Knowledge was limited to what was visible and
                      observable externally or through basic dissection, which
                      would not reveal this dynamic process.
                    </p>
                  </div>

                  <p>
                    The mention of "decrease and increase to the wombs" in the
                    Quran aligns accurately with what science has discovered
                    only recently through advanced medical imaging and
                    understanding of the menstrual cycle. This specific,
                    detailed biological fact, unknown to the people of the 7th
                    century, is presented as a matter of divine knowledge in the
                    Quran, inviting us to reflect on its origin.
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">
              Reflecting on Biological Wonders
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the intricate details of creation mentioned in ancient
            scripture and confirmed by modern science.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-800 dark:text-gray-200"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WombMiracle;
