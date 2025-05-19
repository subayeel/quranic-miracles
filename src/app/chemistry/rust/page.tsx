/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet, // Represents moisture/water
  FlaskConical, // Represents science/experimentation
  BookOpen, // Represents the Quran
  HelpCircle, // Represents reflection/question
  ChevronRight,
  RotateCcw, // Reusing for process/change
  ArrowUp,
  Sparkles,
  Shield, // Represents protection/coating
  Soup,
  Quote, // Represents tar (fluid)
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
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const RustQuranMiracle: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  // Type assertion for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Problem of Rust",
        icon: Droplet,
        color: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-500", // Stone/Gray for rust
      },
      {
        id: "rustScience",
        title: "Understanding Rust",
        icon: FlaskConical,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-500", // Cyan for science
      },
      {
        id: "quranReference",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500", // Green for Quran
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500", // Yellow for reflection
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

    // Observe all section elements
    // Use a timeout to ensure elements are rendered before observing
    const timer = setTimeout(() => {
      contents.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          sectionRefs.current[id] = element;
          observer.observe(element);
        }
      });
    }, 100); // Small delay

    return () => {
      // Clean up observer
      clearTimeout(timer);
      contents.forEach(({ id }) => {
        const element = sectionRefs.current[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Dependency array includes contents

  const scrollToSection = (id: string) => {
    // Optional: Set active section immediately on click for better UX
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-600 to-gray-800 dark:from-stone-800 dark:to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Soup className="text-stone-300" size={32} />
            <h1 className="text-4xl font-bold">Iron & Rust</h1>
          </div>
          <p className="text-xl max-w-2xl text-stone-200">
            Exploring a remarkable insight from the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-gray-800 hover:bg-gray-100"
              onClick={() => scrollToSection("rustScience")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-800"
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
                    Understand rust and a Quranic solution
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
            {/* Introduction: The Problem of Rust */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-stone-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900">
                      <Droplet className="text-stone-500" size={24} />
                    </div>
                    <CardTitle>The Challenge of Rust</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Rust, the familiar reddish-brown decay on iron, has been a
                    challenge for humanity for centuries. It weakens and
                    destroys iron structures. For most of history, people
                    observed rust but lacked a deep understanding of why it
                    happened or how to effectively stop it.
                  </p>
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Puzzling Phenomenon
                    </h3>
                    <p>
                      In the 7th century, the process of iron turning into rust
                      was a natural occurrence that was difficult to explain or
                      prevent with the limited scientific knowledge available.
                      The idea of chemically protecting iron by blocking
                      elements like oxygen and water was far beyond the
                      understanding of the time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Rust Science: Understanding Rust */}
            <section id="rustScience" className="scroll-mt-20">
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <FlaskConical className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>Understanding Rust Scientifically</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern science has revealed exactly what rust is and how it
                    forms. It's a chemical process involving iron, oxygen, and
                    water.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-cyan-500" /> What is
                      Rust?
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Rust is an iron oxide, a usually red oxide formed by the
                      redox reaction of iron and oxygen in the presence of water
                      or air moisture... Rust consists of hydrated iron(III)
                      oxides Fe₂O₃·nH₂O and iron(III) oxide-hydroxide (FeO(OH),
                      Fe(OH)₃)."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Rust"
                        className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Rust, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-cyan-500" /> The
                        Reaction
                      </h3>
                      <p>
                        Rust forms when iron reacts with oxygen and water. This
                        process is called oxidation.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Shield size={16} className="text-green-500" />{" "}
                        Prevention
                      </h3>
                      <p>
                        To prevent rust, you must stop oxygen and water from
                        reaching the iron surface. Common methods include using
                        protective coatings.
                      </p>
                    </div>
                  </div>

                  <p>
                    Understanding the need to isolate iron from its environment
                    to prevent rust is a key principle in modern material
                    science and engineering. This knowledge allows us to protect
                    iron and steel structures from decay.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference: Quranic Insight */}
            <section id="quranReference" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>An Insight from the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran, revealed in the 7th century, narrates the story
                    of Thu-Al-Karnain (often associated with a great historical
                    figure) and his encounter with a people who needed
                    protection from an aggressive tribe. Thu-Al-Karnain agreed
                    to build a barrier for them using iron.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/18/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/96"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 18:96
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "[Thu-Al-Karnain said], 'Bring me blocks of iron.' So
                          that, when he split it equally between the two
                          barriers, he said, 'Blow [with bellows].' And having
                          turned it into a fire, he said, 'Bring me tar to pour
                          over it.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٩٦ آتُونِي زُبَرَ الْحَدِيدِ ۖ حَتَّىٰ إِذَا سَاوَىٰ
                          بَيْنَ الصَّدَفَيْنِ قَالَ انْفُخُوا ۖ حَتَّىٰ إِذَا
                          جَعَلَهُ نَارًا قَالَ آتُونِي أُفْرِغْ عَلَيْهِ
                          قِطْرًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      The Action
                    </Badge>
                    <p className="mt-3">
                      After heating the iron to build the barrier, the verse
                      describes the command: "Bring me tar to pour over it"
                      (آتُونِي أُفْرِغْ عَلَيْهِ قِطْرًا - aatuni ufrigh 'alayhi
                      qitran). Here, "qitran" refers to molten copper or tar.
                      While the context could also imply molten copper for
                      strengthening, the mention of pouring 'tar' (a common
                      interpretation of 'qitran' in the context of a coating)
                      over the iron is particularly interesting when considering
                      rust prevention.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection: A Point to Ponder */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <HelpCircle className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific understanding of rust and its
                    prevention, the action described in the Quran raises a
                    fascinating question:
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century know that coating
                      iron with a substance like tar could help protect it?
                    </h3>
                    <p>
                      Applying a coating like tar creates a barrier that
                      prevents oxygen and water from reaching the iron surface,
                      which we now know is essential for rust formation. While
                      ancient civilizations used tar for various purposes,
                      specifically applying it to iron in the context of a
                      durable structure, potentially as a protective layer, is
                      noteworthy. This alignment between a description in a
                      7th-century text and modern scientific principles of rust
                      prevention invites us to reflect on the source of such
                      knowledge.
                    </p>
                  </div>

                  <p>
                    This example is often cited as a potential indication of
                    knowledge in the Quran that goes beyond what was commonly
                    known or measurable during the time of its revelation. It
                    serves as a reminder that exploring the natural world and
                    ancient texts can sometimes reveal surprising connections.
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
            <Sparkles className="text-yellow-500" size={18} />
            <h3 className="text-lg font-medium">
              Reflecting on Ancient Wisdom and Science
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the connections between revealed texts and the discoveries
            of the natural world continues to inspire contemplation.
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

export default RustQuranMiracle;
