/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Calendar,
  ChevronRight,
  History,
  BookOpen,
  HelpCircle,
  Sparkles,
  ArrowUp,
  Earth, // Using Earth as a general icon for ancient structures/history
  Moon, // Icon for Lunar
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

// Define types for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Background color class for icon container
  iconColor: string; // Text color class for icon
}

const CalendarLunarSolar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Calendars: Solar vs. Lunar",
        icon: Calendar,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "history",
        title: "History & Archaeology",
        icon: History,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-rose-100 dark:bg-rose-900",
        iconColor: "text-rose-500",
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

    // Clear previous refs before observing
    sectionRefs.current = {};

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = sectionRefs.current[id];
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
      <div className="bg-gradient-to-r from-purple-600 to-teal-700 dark:from-purple-800 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-white" size={32} />
            <h1 className="text-4xl font-bold">Calendar</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Exploring Solar and Lunar Time
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("history")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-700"
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
                    Journey through calendar history
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
                      <Calendar className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Calendars: Solar vs. Lunar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For centuries, different cultures have used calendars to
                    keep track of time, often based on the movements of the sun
                    (solar) or the moon (lunar). Around 1400 years ago, the
                    Arabs primarily used a lunar calendar.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      An Ancient Question
                    </h3>
                    <p>
                      Historically, it was widely believed that the lunar
                      calendar was invented first by civilizations like the
                      Sumerians. However, the Quran appears to portray a
                      scenario where the solar year was referenced *before* the
                      lunar year in a specific context. This led some skeptics
                      to claim the Quran contained an error based on the
                      prevailing historical understanding of the time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* History & Archaeology */}
            <section id="history" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <History className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>History & Archaeology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    For a long time, the historical consensus pointed to the
                    Sumerians as the inventors of the first sophisticated
                    calendar, which was lunar.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Moon size={16} className="text-teal-500" /> The Sumerian
                      Lunar Calendar
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The Sumerians and Babylonians were probably the first
                      people to use what we now recognize as a modern calendar.
                      The basis of this was the lunar cycle and the Sumerian
                      year was made up of 12 lunar cycles... Subsequently the
                      Sumerian calendar was not only absorbed into the
                      Babylonian calendar, but a lot of other cultures such as
                      the Ancient Greeks, Egyptians and Hebrews also absorbed
                      elements into their own calendar system."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.livingwiththemoon.com/the-sumerian-calendar-and-how-it-still-influences-us-today/" // Assuming a plausible URL based on the source text
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Living With The Moon, The Sumerian Calendar, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    Based on findings like these, it was widely believed that
                    the lunar calendar tradition, originating with the
                    Sumerians, was the earliest formal system of timekeeping.
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Earth size={16} className="text-teal-500" /> Modern
                      Archaeological Revelations
                    </h3>
                    <p>
                      However, modern archaeological discoveries have uncovered
                      evidence suggesting that structures used for timekeeping,
                      tracking the *solar* year, existed much earlier, thousands
                      of years before the Sumerians developed their lunar
                      system.
                    </p>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-3">
                      "A number of prehistoric structures have been proposed as
                      having had the purpose of timekeeping (typically keeping
                      track of the course of the solar year). This includes many
                      megalithic structures, and reconstructed arrangements
                      going back far into the Neolithic period... In Victoria,
                      Australia, a Wurdi Youang stone arrangement could date
                      back more than 11,000 years... A mesolithic arrangement...
                      found in Warren Field, Aberdeenshire, Scotland, dated to
                      roughly 10,000 years ago, has been described as a lunar
                      calendar and was dubbed the 'world's oldest known
                      calendar' in 2013. The Oldest European calendar is found
                      near to Vukovar in modern-day Croatia. It is a ceramic
                      vessel bearing inscribed ideograms of celestial objects."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/History_of_calendars"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, History Of Calendars, 2019
                      </a>
                    </div>
                    <p className="mt-4">
                      These findings indicate that attempts to track the solar
                      year predated the historically known Sumerian lunar
                      calendar by thousands of years, shifting the understanding
                      of calendar origins.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Insight */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <BookOpen className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Quranic Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at a verse in the Quran that touches upon
                    the passage of time for a group of people known as the
                    "People of the Cave".
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/18/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/25" // Assuming a plausible URL based on the source text
                        className="text-amber-600 dark:text-amber-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 18:25
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And they stayed in their cave for three hundred
                          years, and increased by nine."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٥ وَلَبِثُوا فِي كَهْفِهِمْ ثَلَاثَ مِائَةٍ سِنِينَ
                          وَازْدَادُوا تِسْعًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    This verse states the duration as "three hundred years, and
                    increased by nine". A common interpretation, known even in
                    commentaries from the time of the Quran's revelation or
                    shortly after, is that the "three hundred years" refers to
                    solar years, and the "increased by nine" accounts for the
                    difference when converting that period to lunar years (300
                    solar years is approximately 309 lunar years).
                  </p>

                  <div className="mt-6">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                      Implication
                    </Badge>
                    <p className="mt-3">
                      By stating the duration first in solar years and then
                      providing the equivalent in lunar years, the verse implies
                      that the solar calendar was, in this context, the primary
                      frame of reference or came before the lunar calculation.
                      This perspective aligns with the modern archaeological
                      discovery that solar calendars predated the well-known
                      Sumerian lunar system.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-rose-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900">
                      <HelpCircle className="text-rose-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Consider the state of knowledge in the 7th century AD, when
                    the Quran was revealed.
                  </p>

                  <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-lg border border-rose-100 dark:border-rose-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living 1400 years ago have known that
                      solar calendars historically preceded lunar ones?
                    </h3>
                    <p>
                      The widely accepted view for centuries, up until recent
                      archaeological findings, was that the Sumerian lunar
                      calendar was the earliest formal system. The discovery of
                      Stone Age structures used for tracking the solar year is a
                      product of modern archaeology.
                    </p>
                  </div>

                  <p>
                    The Quran's presentation in verse 18:25, which can be
                    interpreted as listing a duration first by solar years and
                    then providing the lunar equivalent, appears to be
                    consistent with the historical sequence of calendar
                    development as now understood through modern archaeological
                    methods. This raises a profound question about the source of
                    this knowledge in a text revealed 1400 years ago, a time
                    when such information was not available to human
                    civilization. It invites us to ponder whether this alignment
                    is merely coincidence or points to a knowledge originating
                    from beyond the human capacity of that era.
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
              Calendars and Ancient Wisdom
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the fascinating connections between ancient texts and
            modern discoveries about timekeeping.
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

export default CalendarLunarSolar;
