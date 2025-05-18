/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Atom, // Represents fundamental physics
  ChevronRight,
  BookOpen,
  Sparkles, // For the "miracle" or profound concept
  ArrowUp,
  GitMerge, // Could represent collapsing/merging spacetime
  Flame, // Represents extreme conditions
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

// Define the type for the content sections
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind color class for background
  iconColor: string; // Tailwind color class for icon text
}

const Singularity = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "What is Singularity?",
        icon: Atom,
        color: "bg-violet-100 dark:bg-violet-900",
        iconColor: "text-violet-500",
      },
      {
        id: "science",
        title: "Spacetime Distortion",
        icon: GitMerge, // Represents merging/collapsing spacetime
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
        id: "connection",
        title: "The Connection & Miracle",
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
      <div className="bg-gradient-to-r from-purple-800 to-violet-900 dark:from-purple-900 dark:to-violet-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-purple-300" size={32} />
            <h1 className="text-4xl font-bold">Singularity</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-200">Physics - Extreme</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-800 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-800"
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
                    Explore the extreme physics of singularities
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
              <Card className="border-l-4 border-violet-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900">
                      <Atom className="text-violet-500" size={24} />
                    </div>
                    <CardTitle>What is Singularity?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Singularities represent one of the most extreme concepts in
                    physics, typically associated with phenomena like the
                    centers of black holes or the very beginning of the
                    universe.
                  </p>
                  <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border border-violet-100 dark:border-violet-800">
                    <h3 className="font-bold text-lg mb-3">
                      An Unknown Concept 1400 Years Ago
                    </h3>
                    <p>
                      In the 7th century, during the time of the revelation of
                      the Quran, the scientific understanding of the cosmos was
                      vastly different from today. Concepts like spacetime,
                      black holes, and singularities were completely unknown.
                      Yet, the Quran appears to touch upon ideas that resonate
                      with modern physics discoveries.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Understanding */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <GitMerge className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Spacetime Distortion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    According to Einstein's theory of General Relativity, mass
                    and energy warp the fabric of spacetime. The more massive
                    and dense an object is, the greater the distortion it
                    creates.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Flame size={16} className="text-blue-500" /> Gravity's
                      Extreme Pull
                    </h3>
                    <p>
                      As matter collapses into a star, its mass and density
                      increase significantly. This increasing density leads to
                      greater distortion of spacetime. For very massive stars
                      that collapse under their own gravity, this process can
                      lead to the formation of a black hole, at the center of
                      which lies a singularity.
                    </p>
                    {/* Placeholder for the first image mentioned in the ref */}
                    <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                      {/* Image Placeholder: singularity-gravity-5.webp */}
                      <img
                        src="/assets/images/singularity-gravity-5.webp"
                        alt="Illustration of spacetime distortion by mass"
                        className="w-full max-w-sm mx-auto rounded-lg"
                      />
                      <p className="mt-2">
                        Mass distorts spacetime, directing towards the
                        singularity.
                      </p>
                    </div>
                  </div>

                  <p>
                    The singularity is not just a point in space, but a location
                    in the *future* of the collapsing star, where gravity
                    becomes infinitely strong and our current understanding of
                    physics breaks down. From the perspective of a distant
                    observer, time near a black hole appears to slow down
                    dramatically due to this extreme gravitational distortion. A
                    beam of light shone into a black hole, while appearing to
                    slow from the observer's viewpoint, would still never reach
                    the singularity within a finite time as observed from afar.
                  </p>
                  {/* Placeholder for the second image mentioned in the ref */}
                  <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    {/* Image Placeholder: singularity.webp */}
                    <img
                      src="/assets/images/singularity.webp"
                      alt="Illustration of a singularity at the center of a black hole"
                      className="w-full max-w-xs mx-auto rounded-lg"
                    />
                    <p className="mt-2">
                      The singularity is the extreme point within a black hole.
                    </p>
                  </div>
                  <p>
                    General Relativity predicts this point where the structure
                    of spacetime becomes 'singular'. It's a boundary beyond
                    which the known laws of physics, as we currently understand
                    them, cease to apply.
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
                  <p>
                    Interestingly, the concept of something being "singular" or
                    "unique" is deeply connected to the divine in Islamic
                    tradition. One of the 99 names of God in Arabic is "Al-Ahad"
                    (الأحد), meaning "The One" or "The Singular."
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/56/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/75"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 56:75-77
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "Nay! I swear by the Mawaqi` (setting places or
                          locations) of the stars.
                          <br />
                          And verily, that is indeed a great oath, if you but
                          know.
                          <br />
                          That is indeed a noble recitation (the Quran)."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧٥ فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ
                          <br />
                          ٧٦ وَإِنَّهُ لَقَسَمٌ لَوْ تَعْلَمُونَ عَظِيمٌ
                          <br />
                          ٧٧ إِنَّهُ لَقُرْآنٌ كَرِيمٌ
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The verse uses the phrase "Mawaqi` al-Nujum" (مَوَاقِعِ
                      النُّجُومِ), which translates to "locations of the stars"
                      or "setting places of the stars." It's significant that
                      the oath is by their *locations*, not the stars
                      themselves, and it's described as a "great oath."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* The Connection & Miracle */}
            <section id="connection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Sparkles className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>The Connection & Miracle</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Bringing the scientific understanding and the Quranic verse
                    together reveals a fascinating point for reflection.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have possibly known
                      about the singularity?
                    </h3>
                    <p>
                      Modern physics describes the singularity as a location in
                      spacetime where gravity becomes infinite and our laws
                      break down – a truly "singular" point. This singularity is
                      the ultimate destination or "location" towards which
                      massive stars warp spacetime.
                    </p>
                    <p className="mt-3 italic text-gray-700 dark:text-gray-300">
                      The fact that this extreme, singular location towards
                      which the "locations of the stars" are directed in
                      spacetime carries the name "Ahad" (The Singular) – one of
                      God's names – is seen by believers as a profound sign.
                    </p>
                  </div>

                  <p>
                    The knowledge that stars distort spacetime, creating paths
                    that lead towards a singularity where physics becomes
                    "singular," and that the Quran takes a great oath by these
                    very "locations of the stars," seems remarkably consistent
                    with modern discoveries. This was information completely
                    unavailable through observation or known science in the 7th
                    century.
                  </p>
                  <p>
                    This convergence of ancient scripture and cutting-edge
                    physics invites us to ponder the source of such knowledge.
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
              <Sparkles size={24} />
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Extreme Physics</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of the cosmos continue to reveal connections between
            ancient wisdom and modern science.
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

export default Singularity;
