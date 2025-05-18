/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  MapPin,
  ChevronRight,
  BookOpen,
  Sparkles,
  History,
  Globe,
  ArrowUp,
  GlassWater,
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

// Define types for the content structure
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind background color class for card border/icon bg
  iconColor: string; // Tailwind text color class for the icon
}

const DeadSeaFact: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a Map for sectionRefs for better type safety with dynamic keys
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Unique Dead Sea",
        icon: GlassWater,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-500",
      },
      {
        id: "history",
        title: "Historical Context",
        icon: History,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Mention",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "geography",
        title: "Modern Geography",
        icon: Globe,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: Sparkles,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ];
  }, []); // Empty dependency array means this runs once on mount

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

    // Observe all section elements listed in 'contents'
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current.set(id, element); // Store element in Map
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      sectionRefs.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
      sectionRefs.current.clear(); // Clear the map on unmount
    };
  }, [contents]); // Re-run if contents change (though useMemo makes it stable)

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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-800 dark:from-cyan-800 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">The Dead Sea</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            A Geographical & Historical Wonder
          </p>
          <div className="flex gap-4 mt-8">
            {/* Link to the first main content section */}
            <Button
              className="bg-white text-cyan-700 hover:bg-cyan-50"
              onClick={() => scrollToSection("history")}
            >
              Explore its Story <ChevronRight size={16} />
            </Button>
            {/* Link back to the introduction */}
            <Button
              variant="outline"
              className="text-cyan-700"
              onClick={() => scrollToSection("intro")}
            >
              What is the Dead Sea?
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
                    Navigate the facts about the Dead Sea
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
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <GlassWater className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>The Unique Dead Sea</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Dead Sea, nestled between Jordan and Israel, is one of
                    the world's most fascinating natural wonders. Known for its
                    exceptionally high salt concentration (making it easy to
                    float!) and mineral-rich mud, it's a place of unique beauty
                    and significant historical context.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3">
                      More Than Just Salty Water
                    </h3>
                    <p>
                      Beyond its famous buoyancy, the Dead Sea region holds deep
                      historical and geographical importance, linked to ancient
                      events and locations. It's a landscape that has witnessed
                      centuries of history unfold.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Context */}
            <section id="history" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <History className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Historical Context: A Battleground</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    History tells us of significant conflicts that took place in
                    the region surrounding the Dead Sea. One notable event was
                    the defeat of the Byzantine Roman Empire by the Sasanian
                    Persian Empire in the early 7th century CE.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      <History
                        size={20}
                        className="inline mr-2 text-blue-600"
                      />{" "}
                      Roman Defeat Near the Sea
                    </h3>
                    <p>
                      The Roman forces suffered a significant loss to the
                      Persians in a battle that occurred in the vicinity of the
                      Dead Sea. At the time, this was a major turning point in
                      the geopolitical landscape of the region.
                    </p>
                  </div>
                  <p>
                    Interestingly, even during this time of Roman defeat, there
                    was a prophecy shared. The Quran, revealed in the 7th
                    century, spoke not only of this recent defeat but also
                    predicted a future victory for the Romans.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Mention */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>The Quranic Verses</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran mentions this historical event and makes a
                    striking statement about the location of the Roman defeat.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/30/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/2"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 30:2-3
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "The Romans have been defeated
                          <br />
                          In the nearest land, and they will be, after their
                          defeat, victorious"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">٢ غُلِبَتِ الرُّومُ</p>
                        <p dir="rtl">
                          ٣ فِي أَدْنَى الْأَرْضِ وَهُمْ مِنْ بَعْدِ غَلَبِهِمْ
                          سَيَغْلِبُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Understanding "Adna Al-Ard"
                    </Badge>
                    <p>
                      The key phrase here is "فِي أَدْنَى الْأَرْضِ" (fi adna
                      al-ard), often translated as "in the nearest land". The
                      Arabic word "أَدْنَى" (Adna) is fascinating because it has
                      two meanings:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>The nearest/closest</li>
                      <li>The lowest</li>
                    </ul>
                    <p>
                      At the time of the Quran's revelation, the battle was
                      indeed in the "nearest land" from the perspective of
                      Mecca. However, centuries later, another meaning of "Adna"
                      gains remarkable significance in light of modern
                      geographical findings.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Modern Geography */}
            <section id="geography" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Globe className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Modern Geographical Fact</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fast forward to the modern era with our advanced surveying
                    and mapping technologies. We can now precisely measure
                    elevations across the globe.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Globe size={16} className="text-indigo-500" /> Confirmed
                      by Science
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "As of 2019, the lake's surface is 430.5 metres (1,412 ft)
                      below sea level, making its shores the lowest land-based
                      elevation on Earth."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Dead_Sea"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Dead Sea, 2019
                      </a>
                    </div>
                  </div>
                  <p>
                    This modern fact reveals something astonishing: the area
                    around the Dead Sea is, in fact, the *lowest* land-based
                    elevation on the entire Earth!
                  </p>
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
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Connecting the dots between the historical event, the
                    Quranic verse, and the modern geographical discovery leads
                    us to a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this specific geographical detail—that the site
                      of the Roman defeat was the lowest point on Earth—be
                      mentioned in a text from the 7th century?
                    </h3>
                    <p>
                      In the 7th century, there were no satellites, no precise
                      surveying equipment, and certainly no global maps
                      detailing exact elevations relative to sea level.
                      Knowledge of the Earth's lowest point would have been
                      impossible to acquire through human means available at the
                      time.
                    </p>
                  </div>

                  <p>
                    The Quranic phrase "Adna Al-Ard," understood with both its
                    meaning of "nearest" (historically true for the battle) and
                    "lowest" (geographically confirmed much later), presents a
                    remarkable alignment between scripture and science. It
                    invites us to reflect on the source of such knowledge
                    conveyed 1400 years ago.
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
            <MapPin className="text-cyan-600" size={18} />
            <h3 className="text-lg font-medium">
              Reflecting on Geography and History
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The Earth holds many secrets, sometimes echoed in unexpected places.
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

export default DeadSeaFact;
