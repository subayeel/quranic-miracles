/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Zap,
  ChevronRight,
  Ruler,
  BookOpen,
  Quote,
  HelpCircle,
  MoonIcon,
  ArrowUp,
  Sparkles,
  Calculator,
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

const SpeedOfLight = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Speed of Light",
        icon: Zap,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "science",
        title: "Scientific Measurement",
        icon: Ruler,
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
        id: "calculation",
        title: "Calculation",
        icon: Calculator,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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
      <div className="bg-gradient-to-r from-yellow-500 to-amber-700 dark:from-yellow-700 dark:to-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Speed of Light</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">
            Astronomy - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-amber-50 border-amber-50 hover:bg-amber-700/30"
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
                    Explore the speed of light in scripture and science
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
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Zap className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Speed of Light</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there appears to be a description that
                    correlates with the speed of light. Skeptics argue this is
                    merely coincidental interpretation, but a deeper analysis
                    reveals a fascinating connection between ancient text and
                    modern physics.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-lg mb-3">
                      Light: The Universal Speed Limit
                    </h3>
                    <p>
                      The speed of light is approximately 299,792,458 meters per
                      second in a vacuum. This fundamental constant of nature
                      wasn't accurately measured until the 17th century, and its
                      precise value wasn't established until modern times. Yet,
                      the Quran contains a verse that appears to describe this
                      cosmic speed limit.
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
                      <Ruler className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Measurement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Historical
                      Perspective
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The speed of light in vacuum, commonly denoted as c, is a
                      universal physical constant that is exactly equal to
                      299,792,458 metres per second. The speed of light was
                      first measured in 1676 by Ole Rømer, who looked at the
                      apparent changes in the period of Jupiter's moon Io when
                      Earth was moving towards or away from Jupiter. The first
                      reasonably accurate measurement of the speed of light was
                      made by Hippolyte Fizeau in 1849."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        Scientific consensus on the speed of light
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Zap size={16} className="text-blue-500" /> Speed
                        Measurement
                      </h3>
                      <p>
                        Light travels at approximately 300,000 kilometers per
                        second (186,000 miles per second), making it the fastest
                        known entity in our universe. This speed is so
                        fundamental to physics that it serves as the basis for
                        Einstein's theories of relativity.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Calculator size={16} className="text-gray-500" />{" "}
                        Cosmic Constant
                      </h3>
                      <p>
                        The speed of light is the same for all observers,
                        regardless of their relative motion or the motion of the
                        light source. This constancy is one of the foundational
                        principles of modern physics.
                      </p>
                    </div>
                  </div>

                  <p>
                    The precise measurement of light's speed required advanced
                    technology and scientific methods developed centuries after
                    the Quran was revealed. It wasn't until the late 19th and
                    early 20th centuries that scientists could accurately
                    determine this cosmic constant.
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
                        href="https://www.quranwow.com/#/ch/32/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/5"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 32:5
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "(Allah) Rules the cosmic affair from the heavens to
                          the Earth. Then this affair travels to Him a distance
                          in one day, at a measure of one thousand years of what
                          you count."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٥ يُدَبِّرُ الْأَمْرَ مِنَ السَّمَاءِ إِلَى الْأَرْضِ
                          ثُمَّ يَعْرُجُ إِلَيْهِ فِي يَوْمٍ كَانَ مِقْدَارُهُ
                          أَلْفَ سَنَةٍ مِمَّا تَعُدُّونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Concept
                    </Badge>
                    <p className="mt-3">
                      The verse speaks of a distance traveled in one day that
                      would take 1,000 years to count. According to Islamic
                      tradition, angels carry out God's commands and travel at
                      speeds up to the speed of light. The people at the time
                      used lunar calendars and counted in lunar months, making
                      "1,000 years of what you count" equivalent to 12,000 lunar
                      orbits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Calculation */}
            <section id="calculation" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Calculator className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Calculation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The calculation relates the Quranic description to the
                    modern understanding of the speed of light through orbital
                    mechanics:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <MoonIcon size={18} className="text-purple-500" /> Lunar
                      Calendar Perspective
                    </h3>
                    <p>
                      In the 7th century, people measured time by the lunar
                      calendar, counting 12 lunar months per year. When the
                      Quran mentions "1,000 years of what you count," it refers
                      to 12,000 lunar orbits (12 months × 1,000 years).
                    </p>

                    <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <h4 className="font-medium mb-2">
                        The Calculation Connection:
                      </h4>
                      <p>
                        In an inertial geocentric frame of reference, the
                        calculation of 12,000 lunar orbits per Earth day yields
                        a value remarkably close to the speed of light. This
                        relationship between the lunar orbit count and the speed
                        of light reveals an extraordinary coincidence—or perhaps
                        knowledge—that would have been impossible to discover
                        without modern scientific instruments.
                      </p>
                    </div>
                  </div>

                  <p>
                    This mathematical correlation between the Quranic
                    description and the actual speed of light is particularly
                    striking when considering that people in the 7th century had
                    no means to measure or even conceptualize light's velocity.
                    The speed of light wasn't accurately measured until the 17th
                    century, and its precise value wasn't established until
                    modern times.
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
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between the Quranic verse and the speed of
                    light raises a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the speed of light?
                    </h3>
                    <p>
                      The speed of light—a fundamental physical constant that
                      required sophisticated instruments and advanced
                      mathematics to measure—appears to be referenced in a text
                      from the 7th century. This connection between ancient
                      scripture and modern scientific discovery invites
                      contemplation about the sources of knowledge available to
                      Muhammad, who was known to be unable to read or write.
                    </p>
                  </div>

                  <p>
                    This phenomenon—the mathematical correlation between 12,000
                    lunar orbits per Earth day and the speed of light—was
                    completely unknown in the ancient world and would have been
                    impossible to calculate without modern scientific knowledge.
                    The reference in the Quran to a cosmic journey that takes
                    "one day" but measures "a thousand years of what you count"
                    aligns remarkably with what science has only recently
                    confirmed about light's velocity.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-yellow-600 hover:bg-yellow-700">
              <Zap size={24} />
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
            <Sparkles className="text-yellow-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Cosmic Constants</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of our universe continue to unfold, connecting ancient
            texts with modern scientific discoveries.
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

export default SpeedOfLight;
