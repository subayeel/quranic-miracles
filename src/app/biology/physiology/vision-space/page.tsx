/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Eye, // Using Eye icon for Vision
  ChevronRight,
  GlassWater,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles, // Keeping Sparkles for footer flair
  Microscope, // Another option for science icon
  Quote,
  Clock, // For quotes
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

const VisionInSpace = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the sections for the guide
  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Astronaut Vision",
        icon: Eye,
        color: "bg-purple-100 dark:bg-purple-900", // Purple color for vision
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Discovery",
        icon: GlassWater, // Using Flask icon
        color: "bg-indigo-100 dark:bg-indigo-900", // Indigo color for science
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Green for Quran section
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Moment of Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Amber for reflection section
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

    const currentRefs = sectionRefs.current;

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    // Clean up observer on component unmount
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Re-run effect if contents array changes (it won't in this case, but good practice)

  // Smoothly scroll to a section
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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-purple-300" size={32} /> {/* Header icon */}
            <h1 className="text-4xl font-bold">Vision in Space</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-200">
            Astronomy - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Discovery <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-100 border-purple-300 hover:bg-purple-700/30"
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
                    Understanding sight beyond Earth
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
                {" "}
                {/* Card border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      {" "}
                      {/* Icon background color */}
                      <Eye className="text-purple-500" size={24} />{" "}
                      {/* Icon color */}
                    </div>
                    <CardTitle>Astronauts and Blurred Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever wondered what happens to your body in space?
                    It turns out, one of the surprising effects astronauts
                    experience is blurred vision! Skeptics might initially think
                    the vacuum of space wouldn't directly affect sight, but
                    modern science confirms a different story.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    {" "}
                    {/* Highlight block colors */}
                    <h3 className="font-bold text-lg mb-3">
                      A Space Travel Challenge
                    </h3>
                    <p>
                      For astronauts spending time in orbit, changes in vision,
                      often resulting in nearsightedness, have become a
                      recognized issue. This isn't just a temporary effect for
                      many; it can linger for months even after returning to
                      Earth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Discovery */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                {" "}
                {/* Card border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      {" "}
                      {/* Icon background color */}
                      <GlassWater className="text-indigo-500" size={24} />{" "}
                      {/* Icon color */}
                    </div>
                    <CardTitle>Scientific Discovery: VIIP</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Scientists have extensively studied the effects of
                    microgravity on the human body. The visual changes
                    experienced by astronauts are part of a condition now known
                    as Visual Impairment Intracranial Pressure syndrome, or
                    VIIP.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    {" "}
                    {/* Quote block colors */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> What the
                      Experts Say
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "A mysterious syndrome has been impairing astronauts'
                      vision on the International Space Station, causing
                      untreatable nearsightedness that lingers for months even
                      after they've returned to Earth. The problem is so bad
                      that two-thirds of astronauts report having deteriorated
                      eyesight after spending time in orbit... NASA suspected
                      that the condition - called visual impairment inter
                      cranial pressure syndrome, or VIIP - was caused by the
                      lack of gravity in space."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.sciencealert.com/we-finally-know-why-astronauts-lose-their-vision-in-space-and-it-s-bad-news-for-mars-missions"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Science Alert, "Space Could Leave You Blind...", 2016
                      </a>
                    </div>
                  </div>

                  <p>
                    The current understanding points to the absence of gravity
                    causing a shift in bodily fluids towards the head. This
                    increased pressure within the skull (intracranial pressure)
                    is believed to affect the back of the eye, leading to
                    swelling and the observed vision changes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Microscope size={16} className="text-indigo-500" /> The
                        Cause
                      </h3>
                      <p>
                        Lack of gravity causes fluids to shift upwards,
                        increasing pressure inside the head (intracranial
                        pressure), which impacts the eyes.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Clock size={16} className="text-gray-500" /> Lasting
                        Effects
                      </h3>
                      <p>
                        For many astronauts, the blurred vision isn't just a
                        temporary symptom of space adaptation; it can persist
                        long after they return to Earth.
                      </p>
                    </div>
                  </div>

                  <p className="mt-4">
                    While initial space sickness often includes dizziness and
                    nausea, blurred vision is a distinct, sometimes long-term,
                    effect now linked to VIIP. This was a phenomenon unknown
                    before humans began traveling to space.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Insight */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                {" "}
                {/* Card border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      {" "}
                      {/* Icon background color */}
                      <BookOpen className="text-green-500" size={24} />{" "}
                      {/* Icon color */}
                    </div>
                    <CardTitle>Quranic Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    {" "}
                    {/* Quote block colors */}
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/15/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/14"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 15:14-15
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Even if We [Allah] opened upon them from the heaven a
                          door and they continued passing through it they would
                          say 'Our sights were intoxicated, rather we were
                          bewitched'."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٤ وَلَوْ فَتَحْنَا عَلَيْهِمْ بَابًا مِنَ السَّمَاءِ
                          فَظَلُّوا فِيهِ يَعْرُجُونَ
                        </p>
                        <p dir="rtl">
                          ١٥ لَقَالُوا إِنَّمَا سُكِّرَتْ أَبْصَارُنَا بَلْ
                          نَحْنُ قَوْمٌ مَسْحُورُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Word Highlight
                    </Badge>
                    <p className="mt-3">
                      The key Arabic word here is "Sukkirat" (سُكِّرَتْ), which
                      comes from the root meaning "to be drunk" or
                      "intoxicated." So, the phrase "sukkirat absaruna"
                      (سُكِّرَتْ أَبْصَارُنَا) translates to "our sights were
                      intoxicated" or "our vision was blurred/drunken."
                    </p>
                    <p className="mt-3">
                      Think about the symptoms of intoxication: dizziness,
                      nausea, and yes, blurred or distorted vision. These are
                      remarkably similar to the physical sensations and visual
                      issues reported by astronauts in space.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                {" "}
                {/* Card border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      {" "}
                      {/* Icon background color */}
                      <HelpCircle className="text-amber-500" size={24} />{" "}
                      {/* Icon color */}
                    </div>
                    <CardTitle>A Moment of Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This brings us to a truly thought-provoking point. Consider
                    the state of knowledge in the 7th century when the Quran was
                    revealed. Space travel was unimaginable. The concept of
                    venturing beyond Earth's atmosphere and experiencing the
                    physical effects of microgravity simply did not exist.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    {" "}
                    {/* Highlight block colors */}
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone 1400 years ago describe the specific
                      sensation of vision being "intoxicated" when passing
                      through a "door in the sky," a phenomenon so akin to the
                      blurred vision experienced by modern astronauts?
                    </h3>
                    <p>
                      The verse describes people entering the heavens and
                      attributing their distorted vision not to a physical cause
                      (like pressure changes) but to being "bewitched," as that
                      would be the only conceivable explanation within their
                      understanding. Yet, the description of vision as
                      "intoxicated" aligns strikingly with the dizziness,
                      nausea, and blurred vision known today to be symptoms of
                      space adaptation and VIIP.
                    </p>
                  </div>

                  <p>
                    At a time when the prevailing understanding was limited to
                    earthly experiences, and the idea of leaving the planet was
                    science fiction (or rather, pre-science fiction), this verse
                    seems to anticipate a specific physiological effect of space
                    travel that science would only confirm many centuries later.
                    It's a remarkable correlation that invites deep reflection
                    on the origin of such knowledge.
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
              {" "}
              {/* Mobile nav button color */}
              <Eye size={24} /> {/* Mobile nav button icon */}
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
            <Sparkles className="text-purple-500" size={18} />{" "}
            {/* Footer icon color */}
            <h3 className="text-lg font-medium">
              Exploring Vision and the Cosmos
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Scientific discovery meets ancient wisdom, offering fascinating
            perspectives on the wonders of creation.
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

export default VisionInSpace;
