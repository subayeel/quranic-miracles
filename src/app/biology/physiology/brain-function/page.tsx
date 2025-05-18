/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles, // Changed icon
  ChevronRight,
  BookOpen, // Reused icon
  HelpCircle, // Reused icon
  Activity, // New icon for science/brain activity
  Cpu, // New icon for brain/processing
  ArrowUp,
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

const BrainFunctions = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Your Amazing Brain",
        icon: Sparkles, // Icon related to wonder/amazing
        color: "bg-cyan-100 dark:bg-cyan-900", // Adjusted color
        iconColor: "text-cyan-600", // Adjusted icon color
      },
      {
        id: "science",
        title: "Science & The Frontal Lobe",
        icon: Activity, // Icon related to brain activity/science
        color: "bg-blue-100 dark:bg-blue-900", // Adjusted color
        iconColor: "text-blue-600", // Adjusted icon color
      },
      {
        id: "quran",
        title: "A Quranic Verse",
        icon: BookOpen, // Reused icon
        color: "bg-green-100 dark:bg-green-900", // Reused color for consistency with Quran sections
        iconColor: "text-green-600", // Reused icon color
      },
      {
        id: "reflection",
        title: "An Intriguing Connection",
        icon: HelpCircle, // Reused icon for questioning/reflection
        color: "bg-purple-100 dark:bg-purple-900", // Adjusted color
        iconColor: "text-purple-600", // Adjusted icon color
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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-800 dark:from-cyan-800 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-blue-300" size={32} />{" "}
            {/* Adjusted icon and color */}
            <h1 className="text-4xl font-bold">Brain Functions</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-200">
            {" "}
            {/* Adjusted color */}
            Exploring the mind & ancient texts
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-800 hover:bg-blue-50" // Adjusted colors
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-cyan-100 border-cyan-100 hover:bg-cyan-700/30" // Adjusted colors
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
                    Discover secrets of the brain
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
              <Card className="border-l-4 border-cyan-600">
                {" "}
                {/* Adjusted border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      {" "}
                      {/* Adjusted color */}
                      <Sparkles className="text-cyan-600" size={24} />{" "}
                      {/* Adjusted color */}
                    </div>
                    <CardTitle>Your Amazing Brain</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Hey there! Let's talk about one of the most incredible
                    things in the universe – your brain! It's a super complex
                    organ, and different parts handle different jobs, from
                    helping you see to deciding what you want for dinner.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    {" "}
                    {/* Adjusted colors */}
                    <h3 className="font-bold text-lg mb-3">Mapping the Mind</h3>
                    <p>
                      For a long time, understanding exactly which part of the
                      brain does what was a big mystery. Scientists and thinkers
                      made educated guesses, but pinpointing the specific
                      function of each region took centuries of study and
                      advancements in technology.
                    </p>
                  </div>
                  <p>
                    Today, thanks to amazing tools and research, we know so much
                    more. We've discovered that a certain area right behind your
                    forehead plays a crucial role in complex thinking,
                    decision-making, and... well, let's just say, being creative
                    with the truth sometimes! 😉
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Understanding */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-600">
                {" "}
                {/* Adjusted border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      {" "}
                      {/* Adjusted color */}
                      <Activity className="text-blue-600" size={24} />{" "}
                      {/* Adjusted color */}
                    </div>
                    <CardTitle>Science & The Frontal Lobe</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's zoom in on the front part of your brain, the frontal
                    lobe, specifically the prefrontal cortex. For ages, some
                    thought this area might handle vision, simply because it's
                    located near the eyes. But science has shown us the real
                    picture!
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    {" "}
                    {/* Adjusted colors */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Activity size={16} className="text-blue-600" /> The
                      Prefrontal Cortex
                    </h3>
                    <p>
                      The prefrontal cortex is like the brain's command center
                      for higher-level thinking. It's involved in planning,
                      personality, decision-making, and social behavior. And
                      yes, studies have linked it to the complex process of
                      constructing and telling lies.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Cpu size={16} className="text-blue-600" /> White Matter &
                      Lying
                    </h3>
                    <p>
                      Interestingly, research has found physical differences in
                      the brains of people who lie compulsively. One study
                      showed that pathological liars tend to have more white
                      matter in their prefrontal cortex compared to others.
                      White matter helps different parts of the brain
                      communicate, suggesting increased connections in this area
                      might play a role in habitual lying.
                    </p>
                    <div className="mt-3 text-sm">
                      <h5 className="italic text-gray-700 dark:text-gray-300 mb-1">
                        "Liars showed a relatively widespread increase in white
                        matter (23-36%) in orbitofrontal, middle and inferior,
                        but not superior, frontal gyri compared with antisocial
                        and normal controls. This white matter increase may
                        predispose some individuals to pathological lying."
                      </h5>
                      <a
                        href="https://www.ncbi.nlm.nih.gov/pubmed/17267937"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Yang et al., Br J Psychiatry. 2007
                      </a>
                    </div>
                  </div>

                  <p>
                    So, modern science points to the prefrontal area, located in
                    the forehead region, as being significantly involved in
                    lying. This is a relatively recent discovery in the grand
                    scheme of human history!
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-600">
                {" "}
                {/* Adjusted border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      {" "}
                      {/* Reused color */}
                      <BookOpen className="text-green-600" size={24} />{" "}
                      {/* Reused color */}
                    </div>
                    <CardTitle>A Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at a verse from the Quran, a text revealed
                    in the 7th century. It speaks about the consequence of
                    rejecting truth and describes a specific part of the body.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    {" "}
                    {/* Reused colors */}
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/96/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/16"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 96:16
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "[He was told] - a lying, sinful forehead (nasiyah)."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">١٦ نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "nasiyah" (نَاصِيَةٍ) refers to the front
                      part of the head, specifically the forehead or forelock
                      area. The verse describes this forehead as "lying" and
                      "sinful" ("kādhibatin khāṭi’ah" كَاذِبَةٍ خَاطِئَةٍ).
                    </p>
                  </div>
                  <p>
                    The verse directly associates lying and sinfulness with this
                    specific region of the head.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-600">
                {" "}
                {/* Adjusted border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      {" "}
                      {/* Adjusted color */}
                      <HelpCircle className="text-purple-600" size={24} />{" "}
                      {/* Adjusted color */}
                    </div>
                    <CardTitle>An Intriguing Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here's where things get really interesting! We've seen that
                    modern science, with its advanced tools and studies, has
                    pinpointed the prefrontal cortex (located in the forehead
                    area) as being central to the process of lying.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    {" "}
                    {/* Adjusted colors */}
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a text from the 7th century refer to a "lying,
                      sinful forehead"?
                    </h3>
                    <p>
                      In the 7th century, understanding of brain anatomy and
                      function was extremely limited. The idea that a specific
                      behavior like lying could be linked to a particular,
                      subtle part of the forehead area was completely unknown.
                      This knowledge was simply not available to people at that
                      time.
                    </p>
                  </div>

                  <p>
                    The fact that the Quran connects lying and sinfulness to the
                    "nasiyah" (forehead/forelock) aligns remarkably with what
                    modern neuroscience has only recently confirmed about the
                    prefrontal cortex's role in lying. This correlation between
                    an ancient religious text and contemporary scientific
                    discovery invites us to pause and reflect on the source of
                    such knowledge.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              {" "}
              {/* Adjusted colors */}
              <Cpu size={24} /> {/* Adjusted icon */}
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
            <Sparkles className="text-blue-600" size={18} />{" "}
            {/* Adjusted color */}
            <h3 className="text-lg font-medium">Exploring the Mind</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connections between ancient wisdom and modern discoveries continue
            to inspire wonder.
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

export default BrainFunctions;
