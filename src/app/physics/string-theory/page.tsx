/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles, // Using Sparkles for a cosmic/theoretical feel
  ChevronRight,
  Clock,
  Quote,
  HelpCircle,
  Atom, // Atom icon for fundamental particles
  Layers, // Layers for dimensions/heavens
  ArrowUp,
  Infinity, // Maybe use Infinity for theoretical physics/dimensions
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

// Define TypeScript interface for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Background color class
  iconColor: string; // Icon color class
}

const StringTheoryDay: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for the ref
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Cosmic Strings",
        icon: Sparkles,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "dimensions",
        title: "Dimensions & Heavens",
        icon: Layers,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "smallest-particle",
        title: "The Cosmic Thread",
        icon: Atom,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "reflection",
        title: "Contemplation",
        icon: HelpCircle,
        color: "bg-fuchsia-100 dark:bg-fuchsia-900",
        iconColor: "text-fuchsia-500",
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
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 dark:from-purple-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Infinity className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">String Theory</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Exploring the Fabric of Reality
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("dimensions")}
            >
              Unravel the Mystery <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-700 border-white hover:bg-white/20"
              onClick={() => scrollToSection("intro")}
            >
              What is it?
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
                    Navigate the concepts of String Theory
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
                      <Sparkles className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Cosmic Strings: A New View of Reality</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine the tiny building blocks of our universe aren't
                    points, but tiny, vibrating strings! That's the exciting
                    idea behind String Theory, a complex scientific framework
                    that tries to explain everything about the cosmos. It
                    suggests a reality far richer and perhaps stranger than we
                    usually think.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      More Than Just Points
                    </h3>
                    <p>
                      Instead of fundamental particles being zero-dimensional
                      points, String Theory proposes they are one-dimensional
                      "strings". Like the strings on a musical instrument, how
                      they vibrate determines the particle's properties,
                      including its mass and energy. It's a fascinating concept
                      that could unify the laws of physics!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Dimensions and Heavens */}
            <section id="dimensions" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Layers className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Many Dimensions, Many 'Heavens'?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    One of the most mind-bending aspects of String Theory is the
                    idea of extra dimensions. While we experience four
                    dimensions (three of space and one of time), String Theory
                    suggests there are many more!
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Infinity size={16} className="text-indigo-500" /> The 10
                      Dimensions
                    </h3>
                    <p>
                      In most versions of String Theory, the universe exists in
                      10 dimensions: the familiar 4 dimensions we experience
                      (time and three spatial dimensions) and 6 additional
                      spatial dimensions.
                    </p>
                  </div>

                  <p>
                    These 6 extra dimensions are thought to be "compactified" or
                    curled up at incredibly small scales, making them
                    undetectable to us in everyday life. Interestingly, String
                    Theory proposes that mass resides within these extra
                    dimensions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Clock size={16} className="text-indigo-500" /> Our
                        Observable Universe
                      </h3>
                      <p>
                        The 4 dimensions we can see and move through are often
                        referred to as our "brane" or universe. In the context
                        of relating this to ancient texts, one might consider
                        this as the "first heaven".
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Layers size={16} className="text-indigo-500" /> Six
                        More "Heavens"?
                      </h3>
                      <p>
                        The idea that mass exists within each of the 6 extra
                        dimensions has led some to draw parallels to the concept
                        of superimposed "heavens." If each extra dimension
                        holding mass constitutes a 'heaven,' this aligns
                        remarkably with the concept of seven heavens found in
                        religious texts.
                      </p>
                    </div>
                  </div>

                  <p>
                    Even renowned scientists like Steven Hawking explored String
                    Theory for his final work, suggesting its potential to
                    describe the fundamental nature of the cosmos.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> A Nod from
                      Hawking
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Here's Stephen Hawking's final theory about the Big
                      Bang... The theory, which was submitted for publication
                      before Hawking's death earlier this year, is based on
                      string theory and predicts the universe is finite and far
                      simpler than many current theories about the big bang
                      say."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.universetoday.com/139167/heres-stephen-hawkings-final-theory-about-the-big-bang/"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Universe Today, 2018
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* The Smallest Particle */}
            <section id="smallest-particle" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Atom className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>From Cosmic Strings to a "Wick"?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    In String Theory, the properties of a particle, particularly
                    its mass, are determined by how its tiny string vibrates.
                    This concept of a fundamental, vibrating entity giving rise
                    to everything we see is central to the theory.
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> What is
                      String Theory?
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In physics, string theory is a theoretical framework in
                      which the point-like particles of particle physics are
                      replaced by one-dimensional objects called strings. It
                      describes how these strings propagate through space and
                      interact with each other. On distance scales larger than
                      the string scale, a string looks just like an ordinary
                      particle, with its mass, charge, and other properties
                      determined by the vibrational state of the string."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/String_theory"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, String Theory, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    Surprisingly, when we look at the Quran, revealed over 1400
                    years ago, we find a verse that speaks about the smallest
                    unit in a remarkable way.
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/4/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/49"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 4:49
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Have you not considered those who claim purity for
                          themselves? Rather, Allah purifies whom He wills, and
                          they will not be wronged by a wick."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٩ أَلَمْ تَرَ إِلَى الَّذِينَ يُزَكُّونَ أَنْفُسَهُمْ
                          ۚ بَلِ اللَّهُ يُزَكِّي مَنْ يَشَاءُ وَلَا يُظْلَمُونَ
                          فَتِيلًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Key Word
                    </Badge>
                    <p className="mt-3">
                      The Arabic word used here is "Fateel" (فَتِيلًا), which
                      literally means "wick" or the thread inside a date stone.
                      It refers to something incredibly small and seemingly
                      insignificant. The verse implies that even by the measure
                      of this smallest thing (a wick), no one will be wronged.
                    </p>
                  </div>

                  <p>
                    The Quranic reference to the smallest unit being akin to a
                    "wick" – a fibrous, thread-like structure – presents a
                    striking, albeit conceptual, parallel to the "string" in
                    String Theory being the most fundamental entity whose
                    vibrations determine mass and reality.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-fuchsia-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900">
                      <HelpCircle className="text-fuchsia-500" size={24} />
                    </div>
                    <CardTitle>A Glimpse Beyond the Horizon?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific understanding available in the
                    7th century, ideas like multiple spatial dimensions or
                    fundamental particles being vibrating strings were simply
                    unimaginable. The concept of mass being associated with
                    extra dimensions was also far beyond the knowledge of the
                    time.
                  </p>

                  <div className="bg-fuchsia-50 dark:bg-fuchsia-900/30 p-6 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a text from 1400 years ago allude to concepts
                      resembling String Theory's dimensions, heavens, and the
                      fundamental particle?
                    </h3>
                    <p>
                      The Quran's mention of seven heavens and the specific term
                      "Fateel" (wick) for the smallest measurable entity, viewed
                      alongside modern String Theory's postulates of 10
                      dimensions (potentially seven 'layers' or heavens) and
                      fundamental vibrating strings, offers a fascinating point
                      of reflection. This apparent consonance between ancient
                      scripture and cutting-edge physics invites contemplation
                      about the source of such profound knowledge.
                    </p>
                  </div>

                  <p>
                    This correlation serves as an invitation to ponder the depth
                    of the Quran's message, which seems to contain insights that
                    resonate with scientific discoveries made centuries later,
                    particularly concerning the fundamental nature and structure
                    of the universe.
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
            <Infinity className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring the Cosmos and Beyond
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Contemplating the universe's fundamental structure through the lens
            of both modern science and ancient scripture.
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

export default StringTheoryDay;
