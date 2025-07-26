/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  User,
  ChevronRight,
  ClipboardList, // Using ClipboardList for medical/science
  BookOpen, // Using BookOpen for Quran
  Quote,
  Sparkles, // Using Sparkles for the intriguing aspect/miracle
  ArrowUp,
  HeartPulse, // Added HeartPulse for a medical feel in details
  RotateCcw, // Added RotateCcw for turning
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

const BedsoresMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections
  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Understanding Bedsores",
        icon: User,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-500",
      },
      {
        id: "science",
        title: "Modern Medical View",
        icon: ClipboardList,
        color: "bg-blue-100 dark:bg-blue-900", // Can reuse blue, or pick another related color
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "A Quranic Verse",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Can reuse green
        iconColor: "text-green-500",
      },
      {
        id: "connection", // Changed from reflection to connection
        title: "An Intriguing Observation",
        icon: Sparkles, // Using sparkles for the miracle/intriguing aspect
        color: "bg-purple-100 dark:bg-purple-900", // Using purple for reflection/connection
        iconColor: "text-purple-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  // (This logic is directly copied from AstronomyDay and works the same)
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

  // Function to scroll to a section
  // (This logic is directly copied from AstronomyDay)
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
      <div className="bg-gradient-to-r from-cyan-600 to-teal-800 dark:from-cyan-800 dark:to-teal-950 text-white py-12">
        {" "}
        {/* Updated gradient colors */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-cyan-200" size={32} />{" "}
            {/* Updated icon and color */}
            <h1 className="text-4xl font-bold">Bedsores</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            {" "}
            {/* Updated text and color */}
            An Insight from the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-cyan-700 hover:bg-cyan-50" // Updated button colors
              onClick={() => scrollToSection("science")}
            >
              Explore Medical View <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-cyan-700 border-white hover:bg-white/10" // Updated button colors
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
                    Exploring Bedsores and a Quranic hint
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
                {" "}
                {/* Updated border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      {" "}
                      {/* Updated bg color */}
                      <User className="text-cyan-500" size={24} />{" "}
                      {/* Updated icon color */}
                    </div>
                    <CardTitle>Understanding Bedsores</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Bedsores, medically known as pressure ulcers, are a serious
                    concern for individuals who are immobile or spend long
                    periods in bed or a wheelchair. They are caused by
                    continuous pressure on specific areas of the skin, leading
                    to tissue damage.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    {" "}
                    {/* Updated colors */}
                    <h3 className="font-bold text-lg mb-3">Silent Issue</h3>
                    <p>
                      These sores often develop over bony areas like the hips,
                      heels, or tailbone. Without proper care, they can become
                      painful and lead to significant health complications.
                      Preventing them is crucial!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                {" "}
                {/* Using blue */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      {" "}
                      {/* Using blue */}
                      <ClipboardList className="text-blue-500" size={24} />{" "}
                      {/* Using blue */}
                    </div>
                    <CardTitle>Modern Medical View</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Today, medical science provides a clear understanding of how
                    bedsores form and, more importantly, the best ways to
                    prevent them. A primary method involves simply changing the
                    position of an immobile person regularly.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    {" "}
                    {/* Using blue */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> What Medical
                      Sources Say
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Pressure ulcers, also known as bedsores, are localized
                      damage to the skin and/or underlying tissue that usually
                      occur over a bony prominence as a result of usually
                      long-term pressure... Primary prevention is to
                      redistribute pressure by regularly turning the person. The
                      benefit of turning to avoid further sores is well
                      documented since at least the 19th century."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Pressure_ulcer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Pressure Ulcer, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <HeartPulse size={16} className="text-blue-500" /> The
                        Cause
                      </h3>
                      <p>
                        Sustained pressure on skin, especially over bones,
                        limits blood flow. This lack of oxygen and nutrients
                        damages tissue, leading to sores.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-blue-500" /> Simple
                        Prevention
                      </h3>
                      <p>
                        Regularly changing the person's position is the most
                        effective way to relieve pressure and prevent bedsores.
                        This has been a documented medical practice since at
                        least the 19th century.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                {" "}
                {/* Using green */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      {" "}
                      {/* Using green */}
                      <BookOpen className="text-green-500" size={24} />{" "}
                      {/* Using green */}
                    </div>
                    <CardTitle>A Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran tells the story of a group of young men, known as
                    the People of the Cave, who slept for a very long period. In
                    describing their state during this long slumber, a
                    particular detail is mentioned:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    {" "}
                    {/* Using green */}
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/en/18/18"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 18:18
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "You would think them awake, although they were
                          asleep. And We turned them over to the right, and to
                          the left, with their dog stretching its paws across
                          the threshold. Had you looked at them, you would have
                          turned away from them in flight, and been filled with
                          fear of them."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَتَحْسَبُهُمْ أَيْقَاظًا وَهُمْ رُقُودٌ ۚ
                          وَنُقَلِّبُهُمْ ذَاتَ الْيَمِينِ وَذَاتَ الشِّمَالِ ۖ
                          وَكَلْبُهُمْ بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ ۚ لَوِ
                          اطَّلَعْتَ عَلَيْهِمْ لَوَلَّيْتَ مِنْهُمْ فِرَارًا
                          وَلَمُلِئْتَ مِنْهُمْ رُعْبًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      {" "}
                      {/* Using green */}
                      Key Detail
                    </Badge>
                    <p className="mt-3">
                      The verse explicitly states, "And We turned them over to
                      the right, and to the left." This describes a deliberate
                      and repeated action of changing their position during
                      their prolonged state of rest.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Connection */}
            <section id="connection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                {" "}
                {/* Using purple */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      {" "}
                      {/* Using purple */}
                      <Sparkles className="text-purple-500" size={24} />{" "}
                      {/* Using purple */}
                    </div>
                    <CardTitle>An Intriguing Observation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Bringing together the modern medical understanding of
                    bedsore prevention and the detail mentioned in the Quran
                    about the People of the Cave presents a fascinating point
                    for contemplation:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    {" "}
                    {/* Using purple */}
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Could someone in the 7th century have known about the
                      necessity of regularly turning immobile people to preserve
                      their health?
                    </h3>
                    <p>
                      Detailed medical knowledge about preventing conditions
                      like bedsores through systematic positional changes was
                      not part of the general understanding or documented
                      medical practice in the 7th century. While basic
                      observations about skin health might have existed, the
                      specific link between prolonged pressure, tissue damage,
                      and the preventative measure of regular turning, as
                      understood by modern medicine (documented since at least
                      the 19th century), was unknown. The Quranic verse,
                      describing the turning of the sleepers, touches upon a
                      principle that modern science confirms is vital for
                      prolonged immobility. This correlation, from a text
                      revealed 1400 years ago, is indeed thought-provoking for
                      many.
                    </p>
                  </div>

                  <p>
                    It's a subtle detail in the verse that resonates remarkably
                    with a crucial aspect of modern healthcare for the immobile.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* (This logic is directly copied from AstronomyDay and works the same) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-cyan-600 hover:bg-cyan-700">
              {/* Updated button color */}
              <User size={24} /> {/* Updated icon */}
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
            {/* Updated icon color */}
            <h3 className="text-lg font-medium">
              Exploring Quranic Insights
            </h3>{" "}
            {/* Updated text */}
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting ancient text with points relevant to modern knowledge.
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

export default BedsoresMiracle;
