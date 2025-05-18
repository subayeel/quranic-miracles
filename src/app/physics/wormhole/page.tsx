/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  DoorClosed,
  ChevronRight,
  Atom, // Represents physics/science
  BookOpen, // For the Quranic reference
  Sparkles, // For reflection/miracles
  Quote, // For quotes or key points
  ArrowUp, // Back to top
  Infinity, // Could represent space/time
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

// Define types for the content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Background color class
  iconColor: string; // Text color class for icon
}

const WormholeDay: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Although we use getElementById in useEffect, sectionRefs is kept for
  // structural similarity to the original component, although less critical here.

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Exploring Wormholes",
        icon: DoorClosed,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "The Science of Shortcuts",
        icon: Atom,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Wormholes in the Quran",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Deeper Look",
        icon: Sparkles,
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
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all section elements dynamically
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        // sectionRefs.current[id] = element; // Keep if needed later, but not used by observer logic
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = document.getElementById(id); // Re-fetch or use refs if stored
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Depend on contents to re-setup observer if sections change (unlikely here)

  const scrollToSection = (id: string) => {
    // setActiveSection(id); // Intersection observer will handle setting active section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <DoorClosed className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Wormholes</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">Physics - Extreme</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            {/* Optional: Add another button like "What are Wormholes?" linking to intro */}
            <Button
              variant="outline"
              className="text-purple-100 border-purple-300 hover:bg-purple-700"
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
                    Navigate the cosmic shortcut
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
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <DoorClosed className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Exploring Wormholes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine looking up at a distant star and wishing you could
                    reach it in just a few steps. This might sound like science
                    fiction, but theoretical physics explores concepts that
                    could make such cosmic shortcuts possible: wormholes.
                  </p>
                  <p>
                    Remarkably, centuries before modern physics conceived of
                    such ideas, a concept resembling these cosmic bridges was
                    mentioned in the Quran. How could a text from the 7th
                    century touch upon something so advanced? Let's explore!
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Shortcut Through Space-Time
                    </h3>
                    <p>
                      Wormholes, also known as Einstein-Rosen bridges, are
                      hypothetical tunnels through space-time. If they exist,
                      they could connect two very distant points in the
                      universe, allowing for much faster travel than traversing
                      normal space.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence / Explanation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Atom className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Science of Shortcuts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    In 1935, Albert Einstein and Nathan Rosen, using the theory
                    of General Relativity, described theoretical "bridges"
                    through space-time. These hypothetical structures were later
                    popularized as "wormholes" and are envisioned as tunnels
                    connecting two different points in space-time.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> How They
                      Might Work (Theoretically!)
                    </h3>
                    <p>
                      Think of a wormhole like an incredibly efficient,
                      frictionless roller coaster for cosmic travel. You
                      wouldn't necessarily need continuous rocket power to move
                      through it. Gravity would theoretically pull you in, guide
                      you through, and expel you out the other side.
                    </p>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-3">
                      During transit through a wormhole, relativistic effects
                      from intense gravity could cause interesting phenomena:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>
                        Your clock might slow down relative to an observer
                        outside (time dilation).
                      </li>
                      <li>
                        Your size might appear to shrink (length contraction).
                      </li>
                      <li>
                        From an outside perspective, your energy and mass would
                        appear to increase dramatically as you approach
                        relativistic speeds.
                      </li>
                    </ul>
                    <p className="mt-3">
                      However, upon exiting the wormhole, everything would
                      return to normal for the traveler.
                    </p>
                  </div>

                  <p>
                    While mathematically possible within General Relativity,
                    wormholes remain theoretical. We have never observed one,
                    and the energy requirements to create and keep one stable
                    for travel are immense, possibly requiring exotic matter.
                    Physicists understand the *concept*, but actual human use is
                    firmly in the realm of speculation for now.
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
                    <CardTitle>Wormholes in the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Interestingly, the Quran mentions a concept that some modern
                    Muslims interpret as wormholes. The Arabic word used is
                    'Ma'arej' (معارج), which translates to 'ascending ways' or
                    'ladders'.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/70/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/3"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 70:3-4
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "(a penalty) from Allah (who owns) the ascending ways
                          [Ma'arej in Arabic],
                          <br />
                          The angels and the Spirit ascend to Him in a Day, the
                          measure of which is fifty thousand years."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣ مِنَ اللَّهِ ذِي الْمَعَارِجِ
                          <br />٤ تَعْرُجُ الْمَلَائِكَةُ وَالرُّوحُ إِلَيْهِ
                          فِي يَوْمٍ كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Interpretation
                    </Badge>
                    <p className="mt-3">
                      The reference to 'Ma'arej' as "ascending ways" owned by
                      Allah, which angels and the Spirit use to ascend over a
                      period described as fifty thousand years, is seen by some
                      as pointing to a means of traversing vast cosmic distances
                      efficiently. The "fifty thousand years" could be
                      interpreted in various ways, but within the context of
                      rapid travel through these 'Ma'arej', it is sometimes
                      linked to relativistic time dilation – where a short
                      journey through the 'Ma'arej' corresponds to an enormous
                      passage of time outside.
                    </p>
                    <p className="mt-3">
                      Muslims also believe that these "ascending ways" are not
                      exclusive to angels. The miraculous night journey and
                      ascension of Prophet Muhammad (known as the Israa and
                      Mi'raj) is understood by many to have involved traversing
                      the cosmos instantaneously, using such a method. 'Mi'raj'
                      (معراج) is the singular form of 'Ma'arej'.
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
                    <CardTitle>A Deeper Look</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The striking correlation between a theoretical concept in
                    modern physics (wormholes) and a term used in a 7th-century
                    text (Ma'arej) invites profound contemplation:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a man in the 7th century possibly describe a
                      concept so aligned with Einstein's General Relativity,
                      centuries before its formulation?
                    </h3>
                    <p>
                      In the 7th century, understanding of the cosmos was
                      limited. The idea of shortcuts through vast interstellar
                      distances, or the relativistic effects like time dilation
                      associated with extreme gravity or speed, were far beyond
                      the scientific grasp of the time.
                    </p>
                  </div>

                  <p>
                    The Quran also describes hypothetical "doors in the heaven"
                    that contract interstellar distances into mere walking
                    distances, leading to distant structures. The text suggests
                    that even if such a clear sign were shown to non-believers,
                    they would dismiss it as mere illusion ("Our eyes have been
                    intoxicated; rather, we are a people affected by magic").
                    This narrative aligns with the bizarre, almost magical,
                    effect a wormhole travel might appear to have.
                  </p>
                  <p>
                    This alignment between an ancient text and a complex
                    theoretical physics concept, one that requires advanced
                    mathematics and understanding of space-time, is seen by
                    believers as a compelling sign.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700">
              <DoorClosed size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <Card className="p-0">
              {" "}
              {/* Wrap content in a card for consistent styling */}
              <CardHeader className="pb-2 px-3 pt-3">
                <CardTitle className="text-lg">Topic Guide</CardTitle>
                <CardDescription>Navigate the cosmic shortcut</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
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
              </CardContent>
            </Card>
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Infinity className="text-purple-500" size={18} />{" "}
            {/* Using Infinity for footer */}
            <h3 className="text-lg font-medium">
              Exploring Space-Time Mysteries
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting ancient texts and modern concepts about the cosmos.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WormholeDay;
