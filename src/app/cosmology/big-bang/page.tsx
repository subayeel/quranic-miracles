/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles, // Represents cosmic origin/beginning
  ChevronRight,
  Atom, // Represents fundamental particles/science
  BookOpen, // Represents the Quran
  HelpCircle, // Represents reflection/question
  ArrowUp,
  Maximize, // Represents expansion
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

// Define a type for the content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for the Lucide icon component
  color: string; // Tailwind background color class for badge/icon container
  iconColor: string; // Tailwind text color class for the icon
}

const BigBang: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Cosmic Origins",
        icon: Sparkles,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: Atom,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Cosmic Inquiry",
        icon: HelpCircle,
        color: "bg-yellow-100 dark:bg-yellow-900", // Using yellow/amber for reflection again
        iconColor: "text-yellow-500",
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

    const currentRefs = sectionRefs.current; // Create a stable reference for cleanup

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
      <div className="bg-gradient-to-r from-purple-700 to-blue-900 dark:from-purple-900 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-purple-300" size={32} />
            <h1 className="text-4xl font-bold">The Big Bang</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-200">
            Exploring the Universe's Beginning
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Discover Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-200 border-purple-300 hover:bg-purple-800"
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
                    Navigate the story of creation
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
            {/* Introduction: Cosmic Origins */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[0].color}`}>
                      <Sparkles className={contents[0].iconColor} size={24} />
                    </div>
                    <CardTitle>Cosmic Origins</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever wondered how our amazing universe began? For
                    centuries, humanity pondered the origins of everything
                    around us. Today, science offers a compelling picture, and
                    it's fascinating to see how ancient texts touch upon similar
                    ideas.
                  </p>
                  <div
                    className={`${contents[0].color
                      .replace("100", "50")
                      .replace(
                        "900",
                        "900/30"
                      )} p-6 rounded-lg border ${contents[0].color
                      .replace("100", "100")
                      .replace("900", "800")}`}
                  >
                    <h3 className="font-bold text-lg mb-3 text-purple-800 dark:text-purple-200">
                      A Momentous Beginning
                    </h3>
                    <p>
                      Modern cosmology suggests that the universe didn't always
                      exist in the vast, spread-out form we see today. Instead,
                      it is believed to have originated from an incredibly hot,
                      dense state in an event known as the Big Bang.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Model: The Big Bang Theory */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[1].color}`}>
                      <Atom className={contents[1].iconColor} size={24} />
                    </div>
                    <CardTitle>The Scientific Model</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Big Bang theory is the prevailing cosmological model for
                    the universe from the earliest known periods through its
                    subsequent large-scale evolution.
                  </p>

                  <div
                    className={`${contents[1].color
                      .replace("100", "50")
                      .replace(
                        "900",
                        "900/30"
                      )} p-6 rounded-lg border ${contents[1].color
                      .replace("100", "100")
                      .replace("900", "800")}`}
                  >
                    <h3 className="font-medium mb-3 flex items-center gap-2 text-blue-800 dark:text-blue-200">
                      <Maximize size={16} className={contents[1].iconColor} />{" "}
                      From Singularity to Expansion
                    </h3>
                    <p>
                      According to the theory, the universe began as a tiny,
                      infinitely hot, and infinitely dense singularity.
                      Suddenly, it began to expand rapidly. This expansion
                      continues today, carrying galaxies further and further
                      apart. The energy from this initial state cooled as it
                      expanded, eventually forming the fundamental particles,
                      atoms, stars, and galaxies we observe.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Atom size={16} className="text-blue-500" /> Initial
                        State
                      </h3>
                      <p>
                        Science suggests the universe started from an extremely
                        hot, dense point.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Maximize size={16} className="text-blue-500" /> Ongoing
                        Expansion
                      </h3>
                      <p>
                        Since that beginning, the universe has been continuously
                        expanding.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Account: The Quranic Vision */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[2].color}`}>
                      <BookOpen className={contents[2].iconColor} size={24} />
                    </div>
                    <CardTitle>The Quranic Account</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran, revealed in the 7th century, also describes the
                    initial state and creation of the heavens and the Earth in a
                    way that resonates intriguingly with the modern scientific
                    understanding of the Big Bang.
                  </p>

                  <div
                    className={`${contents[2].color
                      .replace("100", "50")
                      .replace(
                        "900",
                        "900/30"
                      )} p-6 rounded-lg border ${contents[2].color
                      .replace("100", "100")
                      .replace("900", "800")}`}
                  >
                    <h3 className="font-medium mb-3 text-green-800 dark:text-green-200">
                      <a
                        href="https://www.quranwow.com/#/ch/21/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/30" // Updated link for 21:30
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 21:30
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "Do not those who disbelieve see that the heavens and
                          the Earth were meshed together then We ripped them
                          apart? And then We made of water everything living?
                          Would they still not believe?"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٠ أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ
                          السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا
                          فَفَتَقْنَاهُمَا ۖ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ
                          شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge
                      className={`${
                        contents[2].color
                      } ${contents[2].iconColor.replace(
                        "500",
                        "800"
                      )} dark:text-green-100`}
                    >
                      Key Phrases
                    </Badge>
                    <p className="mt-3 space-y-3">
                      The Arabic terms used are highly significant:
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>
                          <span className="font-medium text-green-700 dark:text-green-300">
                            "Ratqan رَتْقًا":
                          </span>{" "}
                          This word implies being tightly bound, fused, or
                          meshed together into a single entity. This description
                          of the heavens and the Earth starting as a single,
                          combined unit aligns with the concept of the initial
                          singularity in the Big Bang theory where all matter
                          and energy were in one place.
                        </li>
                        <li>
                          <span className="font-medium text-green-700 dark:text-green-300">
                            "Fataqnahuma فَتَقْنَاهُمَا":
                          </span>{" "}
                          This means "We ripped them apart" or "We clove them
                          asunder." The root word suggests tearing, bursting, or
                          separating something that was joined. The provided
                          reference highlights that it can mean "tore clothes by
                          force, by pulling the fabric in opposite directions,"
                          which is a powerful analogy for expansion from a
                          single point. Modern cosmology speaks of the expansion
                          of spacetime itself, often visualized as stretching
                          fabric.
                        </li>
                      </ul>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection: A Cosmic Inquiry */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[3].color}`}>
                      <HelpCircle className={contents[3].iconColor} size={24} />
                    </div>
                    <CardTitle>A Cosmic Inquiry</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific evidence for the Big Bang and the
                    ongoing expansion of the universe, the description in Quran
                    21:30 presents a remarkable point for reflection:
                  </p>

                  <div
                    className={`${contents[3].color
                      .replace("100", "50")
                      .replace(
                        "900",
                        "900/30"
                      )} p-6 rounded-lg border ${contents[3].color
                      .replace("100", "100")
                      .replace("900", "800")}`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center text-yellow-800 dark:text-yellow-200">
                      How could anyone 1400 years ago have known about the
                      universe's initial state and subsequent expansion?
                    </h3>
                    <p>
                      In the 7th century CE, human understanding of the cosmos
                      was vastly different. There were no telescopes capable of
                      observing distant galaxies or instruments to detect cosmic
                      background radiation—key evidence for the Big Bang. The
                      idea that the entire universe originated from a single
                      point and then actively expanded was beyond the scientific
                      knowledge of the time.
                    </p>
                  </div>

                  <p>
                    The Quranic verse, with its vivid imagery of a "meshed
                    together" origin that was then "ripped apart," describes a
                    cosmic event that aligns strikingly with the core concepts
                    of the Big Bang and the universe's expansion, including the
                    notion that this separation was forceful and directional,
                    similar to the pulling fabric analogy for spacetime
                    expansion. For those who view the Quran as divine
                    revelation, this congruence with modern cosmology is
                    considered a sign, a "miracle," testifying to its origin
                    beyond human knowledge of that era. It invites us to ponder
                    the source of such profound insights.
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
            <h3 className="text-lg font-medium">Reflecting on Creation</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the universe's grand narrative through science and
            scripture.
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

export default BigBang;
