/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Clock,
  ChevronRight,
  Scale,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Orbit,
  Hourglass,
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

type SectionContent = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const TimeDilation = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Time Dilation",
        icon: Clock,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Scale,
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
        id: "wormholes",
        title: "Wormholes & Time",
        icon: Orbit,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
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
      <div className="bg-gradient-to-r from-purple-500 to-blue-700 dark:from-purple-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Hourglass className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Time Dilation</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Relativity - Advanced
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
              className="text-purple-100 border-purple-300 hover:bg-purple-800/30"
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
                    Explore time's relative nature
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
                      <Clock className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Time Dilation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there are references to time dilation—the
                    phenomenon where time passes at different rates depending on
                    gravitational fields or relative velocity. Skeptics once
                    claimed these references were simply metaphorical, but
                    Einstein's theories of relativity have since confirmed that
                    time is indeed relative.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Time Slows Down in Gravity
                    </h3>
                    <p>
                      According to Einstein's theory of relativity, time isn't
                      constant—it flows at different rates depending on gravity
                      and velocity. When under strong gravitational influence or
                      at high speeds, time passes more slowly than in regions
                      with weaker gravity or at rest.
                    </p>
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
                      <Scale className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Einstein's
                      Theory of Relativity
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Time dilation is a difference in the elapsed time as
                      measured by two clocks due to a relative velocity between
                      them or due to a difference in gravitational potential
                      between their locations. After compensating for varying
                      signal propagation times, the observer finds the clock in
                      motion ticks more slowly. Similarly, the clock deeper in
                      the gravitational field runs more slowly. These
                      predictions of the theory of relativity have been
                      repeatedly confirmed by experiment and have significant
                      practical applications, such as in satellite-based
                      navigation systems that use GPS."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Time_dilation"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Time Dilation, 2023
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Hourglass size={16} className="text-blue-500" />{" "}
                        Gravitational Time Dilation
                      </h3>
                      <p>
                        Time passes more slowly in stronger gravitational
                        fields. For example, a clock on Earth's surface runs
                        slightly slower than one in orbit due to Earth's
                        gravitational field.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Orbit size={16} className="text-blue-500" />{" "}
                        Relativistic Time Dilation
                      </h3>
                      <p>
                        Time also slows down at high velocities. GPS satellites
                        must account for both types of time dilation to maintain
                        accuracy—they experience less gravity but move at high
                        speeds.
                      </p>
                    </div>
                  </div>

                  <p>
                    These principles of relativity were completely unknown in
                    the 7th century when the Quran was revealed. The concept
                    that time could flow at different rates depending on
                    conditions would have been revolutionary and
                    counterintuitive to human experience.
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
                        href="https://www.quranwow.com/#/ch/70/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/4"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 70:4
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "The angels and the Spirit ascend to Him in a day, the
                          measure of which is fifty thousand years."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          تَعْرُجُ الْمَلَائِكَةُ وَالرُّوحُ إِلَيْهِ فِي يَوْمٍ
                          كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Insight
                    </Badge>
                    <p className="mt-3">
                      This verse specifically mentions a comparison of time: one
                      day versus fifty thousand years. It's not describing
                      distance but rather the relativity of time—what is
                      experienced as one day by the angels would be measured as
                      fifty thousand years by humans.
                    </p>

                    <div className="mt-4 bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/47"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 22:47
                        </a>
                      </h3>
                      <p className="italic">
                        "And they urge you to hasten the punishment. But Allah
                        will never fail in His promise. And indeed, a day with
                        your Lord is like a thousand years of those which you
                        count."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Wormholes Section */}
            <section id="wormholes" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Orbit className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Wormholes & Time</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    One interpretation of the time dilation described in the
                    Quran is that it refers to what modern physics calls
                    "wormholes"—theoretical passages through spacetime that
                    could create shortcuts across the universe.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2">
                      Wormholes and Extreme Time Dilation
                    </h3>
                    <p>
                      In the Quranic context, angels traveling through what
                      might be described as wormholes would experience extreme
                      time dilation. The verse suggests that angels' journey of
                      one day would correspond to 50,000 years from the human
                      perspective.
                    </p>
                    <p className="mt-3">
                      This aligns with modern understanding of theoretical
                      wormholes, where an observer outside strong gravitational
                      fields would see objects passing through a wormhole moving
                      at relativistic speeds—approaching the speed of light—with
                      dramatic time dilation effects.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Light and Time</h3>
                      <p>
                        As objects approach the speed of light, time dilation
                        becomes more pronounced. Near the event horizon of a
                        black hole or in a wormhole, time could slow
                        dramatically compared to observers in "normal" space.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Miaaraj (معراج)</h3>
                      <p>
                        In Islamic tradition, the term "Miaaraj" refers to
                        ascension or the vehicle of ascension. The Quranic
                        description of angels' travel could be interpreted as
                        describing passage through space-time distortions
                        similar to theoretical wormholes.
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
                    The correlation between modern physics and these Quranic
                    verses raises a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about time dilation?
                    </h3>
                    <p>
                      The concept of time dilation—that time flows at different
                      rates depending on gravity and velocity—was unknown to
                      science until Einstein's theories in the early 20th
                      century. Advanced physics calculations and precision
                      atomic clocks were needed to confirm these effects
                      experimentally. Yet the Quran appears to describe varying
                      time scales in contexts that align with modern
                      understanding of relativistic physics.
                    </p>
                  </div>

                  <p>
                    These references to time's relativity in the Quran predate
                    scientific understanding by more than 13 centuries. Concepts
                    like time dilation would have been counterintuitive to human
                    experience in the 7th century, as they still are to many
                    today without scientific education. The specific time ratios
                    mentioned (1:1,000 and 1:50,000) are particularly notable
                    when compared to the measurable time dilation effects
                    scientists have confirmed in various gravitational and
                    velocity scenarios.
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
            <h3 className="text-lg font-medium">Exploring Time and Space</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The connection between ancient texts and modern physics continues to
            inspire curiosity about the universe and our understanding of it.
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

export default TimeDilation;
