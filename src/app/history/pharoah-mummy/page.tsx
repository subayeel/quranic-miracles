/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bone, // Using Bone icon for the mummy/body theme
  Shield, // Using Shield for armor
  BookOpen, // Keeping BookOpen for Quran
  HelpCircle, // Keeping HelpCircle for reflection/sign
  ChevronRight,
  Sparkles, // Keeping Sparkles for miracle/sign feel
  ArrowUp,
  Quote,
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
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind background color class for highlight
  iconColor: string; // Tailwind text color class for icon
}

const PharaohMummy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs if possible, though { [key: string]: HTMLElement | null } is functional
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the structure and content for the navigation and sections
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Introduction",
        icon: Bone,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "armor",
        title: "Heavy Armor",
        icon: Shield,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "discovery",
        title: "Mummy Discovery",
        icon: Bone,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "Quranic Revelation",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Sign for Humankind",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
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

    const currentRefs = sectionRefs.current; // Use a local variable to avoid lint warnings

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
  }, [contents]); // Depend on contents

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
      <div className="bg-gradient-to-r from-teal-600 to-cyan-800 dark:from-teal-800 dark:to-cyan-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bone className="text-cyan-200" size={32} />
            <h1 className="text-4xl font-bold">Pharaoh's Body</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            Miracles of the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("armor")}
            >
              Explore Findings <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-teal-700 dark:text-teal-200 dark:border-teal-400 dark:hover:bg-teal-900"
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
                  <CardDescription>Explore the Pharaoh's story</CardDescription>
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
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Bone className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Introduction</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The story of Prophet Moses and the Pharaoh is well-known.
                    Interestingly, there's a point of discussion regarding the
                    Pharaoh's fate and body that highlights a fascinating aspect
                    when comparing historical accounts and modern discoveries
                    with a specific verse in the Quran.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Question of Survival
                    </h3>
                    <p>
                      A common narrative suggests the Pharaoh drowned in the Red
                      Sea. This raises a question: what happened to his body?
                      Could it have survived and been found later?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Heavy Armor */}
            <section id="armor" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Shield className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Heavy Armor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Historical records tell us about the military equipment used
                    in ancient Egypt. While common soldiers often wore minimal
                    armor due to the climate, the Pharaohs were an exception.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> Pharaohs
                      Wore Scale Armor
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Defensive Equipment of the Egyptian Army:
                      <br />
                      ...the pharaohs were, not surprisingly, the exception."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.touregypt.net/featurestories/armoreq.htm"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tour Egypt, Defensive Equipment of the Egyptian Army,
                        2019
                      </a>
                    </div>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-4">
                      "Military of ancient Egypt:
                      <br />
                      The pharaohs often wore scale armour with inlaid
                      semi-precious stones, which offered better protection, the
                      stones being harder than the metal used for arrow tips."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Military_of_ancient_Egypt"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Military of ancient Egypt, 2018
                      </a>
                    </div>
                  </div>

                  <p>
                    This scale armor, made of materials like copper and iron
                    scales sewn onto leather and fabric, often decorated with
                    heavy semi-precious stones, would have been quite dense.
                    Someone wearing such heavy armor would likely sink if
                    submerged in water, rather than float.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Mummy Discovery */}
            <section id="discovery" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Bone className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Mummy Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Archaeological discoveries over the centuries have unearthed
                    the mummified remains of many Egyptian Pharaohs.
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3">
                      Where Are the Mummies Found?
                    </h3>
                    <p>
                      Significantly, all known mummies of the Pharaohs from the
                      era traditionally associated with Moses have been found
                      inland, typically in tombs or burial sites along the Nile.
                      There is no record or discovery of a Pharaoh's mummy found
                      at the bottom of the Red Sea.
                    </p>
                    <p className="mt-3">
                      Given the heavy armor, if the Pharaoh drowned at sea, his
                      body would likely have sunk, and retrieving it from the
                      sea floor 1400 years ago would have been technologically
                      impossible. This raises the question: if he drowned and
                      sank, how was his body later preserved and found inland?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Revelation */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Revelation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's look at what the Quran says about the Pharaoh's fate.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/10/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/92"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 10:92
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "So this day We shall save you in your body, so that
                          you may be a sign to those who come after you. And
                          verily, many among mankind are heedless of Our Signs."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٩٢ فَالْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ
                          خَلْفَكَ آيَةً ۚ وَإِنَّ كَثِيرًا مِنَ النَّاسِ عَنْ
                          آيَاتِنَا لَغَافِلُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Point
                    </Badge>
                    <p className="mt-3">
                      This verse states that Allah would "save you in your body"
                      (نُنَجِّيكَ بِبَدَنِكَ - 'Nunajjika bibadanik'),
                      specifically so the body would be a sign for future
                      generations.
                    </p>
                    <p className="mt-3">
                      Considering the heavy armor the Pharaoh wore, which would
                      cause him to sink, the "saving" mentioned in the Quran
                      points towards a preservation of the body that allowed it
                      to be found later, contrary to the expectation of it being
                      lost at sea. The Quran doesn't claim the body would be
                      found at the sea bottom, but rather that it would be
                      *preserved* as a sign.
                    </p>
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
                    <CardTitle>A Sign for Humankind</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The connection between the Quranic verse, historical facts
                    about Pharaoh's armor, and modern archaeological discoveries
                    presents a thought-provoking perspective.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Considering the Knowledge Available in the 7th Century...
                    </h3>
                    <p>
                      In the 7th century CE, at the time of the Quran's
                      revelation, detailed knowledge about the specific types of
                      heavy armor worn by ancient Egyptian Pharaohs, the physics
                      of how such armor would affect a body in water, and the
                      future discovery of *all* mummies inland through
                      systematic archaeology was simply unavailable. There was
                      no scientific or historical consensus on the Pharaoh's
                      ultimate fate or the state of his body.
                    </p>
                    <p className="mt-3">
                      The Quranic statement in verse 10:92, emphasizing the
                      preservation of the body as a "sign," aligns remarkably
                      with the later discoveries of Pharaohs' mummies inland,
                      contradicting the natural expectation that a heavily
                      armored body drowned at sea would be lost forever.
                    </p>
                  </div>

                  <p>
                    This convergence between an ancient scripture and subsequent
                    historical and scientific findings invites contemplation. It
                    highlights the Quran's mention of a specific outcome – the
                    body being saved as a sign – at a time when such a detail,
                    particularly in contrast to common assumptions, would have
                    been unknown. It is presented as one of the many signs for
                    those who reflect.
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
            <Sparkles className="text-teal-500" size={18} />
            <h3 className="text-lg font-medium">Reflecting on Signs</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring how historical accounts, archaeological discoveries, and
            ancient texts intersect.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-teal-200 dark:border-teal-400 dark:hover:bg-teal-900"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PharaohMummy;
