/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  User, // Changed icon
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
  LayoutPanelLeft, // Changed icon
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

// Define TypeScript type for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide React icons
  color: string; // Background color class
  iconColor: string; // Icon color class
}

const MosesName: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Mystery of a Name",
        icon: HelpCircle, // Changed icon
        color: "bg-indigo-100 dark:bg-indigo-900", // Changed color
        iconColor: "text-indigo-500", // Changed color
      },
      {
        id: "egyptian",
        title: "Ancient Egyptian Meaning",
        icon: LayoutPanelLeft, // Changed icon
        color: "bg-teal-100 dark:bg-teal-900", // Changed color
        iconColor: "text-teal-500", // Changed color
      },
      {
        id: "quran",
        title: "Quranic Verse",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: Sparkles, // Changed icon
        color: "bg-purple-100 dark:bg-purple-900", // Changed color
        iconColor: "text-purple-500", // Changed color
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

    // Ensure we are observing current elements
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
      // Disconnect the observer completely on unmount
      observer.disconnect();
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
      <div className="bg-gradient-to-r from-indigo-600 to-blue-800 dark:from-indigo-800 dark:to-blue-950 text-white py-12">
        {" "}
        {/* Changed gradient colors */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-blue-200" size={32} />{" "}
            {/* Changed icon/color */}
            <h1 className="text-4xl font-bold">Prophet Moses (Musa)</h1>{" "}
            {/* Changed title */}
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            {" "}
            {/* Changed color */}
            Exploring the Meaning of His Name
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50" // Changed colors
              onClick={() => scrollToSection("egyptian")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-700 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700 hover:bg-indigo-100/20" // Changed colors
              onClick={() => scrollToSection("intro")}
            >
              Start from the Beginning
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
                    Journey through the name of Moses
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
              <Card className="border-l-4 border-indigo-500 dark:border-indigo-700">
                {" "}
                {/* Changed color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      {" "}
                      {/* Changed color */}
                      <HelpCircle className="text-indigo-500" size={24} />{" "}
                      {/* Changed icon/color */}
                    </div>
                    <CardTitle>The Mystery of a Name</CardTitle>{" "}
                    {/* Changed title */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Prophet Moses (peace be upon him), known as Musa in Arabic,
                    is a central figure in Abrahamic faiths. His name, "Moses"
                    or "Moshe" in Hebrew, is often associated with a meaning
                    like "to draw out" or "to pull out" from water, relating to
                    the story of his rescue from the Nile.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-bold text-lg mb-3">
                      Hebrew vs. Egyptian Origins
                    </h3>
                    <p>
                      Interestingly, the Bible suggests his name was given by
                      Pharaoh's daughter, who was Egyptian, not Hebrew. This
                      raises a question: what might his name have meant in the
                      Egyptian language of that time? For centuries, the primary
                      understanding came from the Hebrew interpretation.
                    </p>
                  </div>
                  <p>
                    Let's delve into what modern discoveries tell us about
                    ancient Egyptian names and how they might connect to the
                    name given to Moses by Pharaoh's household.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Ancient Egyptian Meaning */}
            <section id="egyptian" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500 dark:border-teal-700">
                {" "}
                {/* Changed color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      {" "}
                      {/* Changed color */}
                      <LayoutPanelLeft
                        className="text-teal-500"
                        size={24}
                      />{" "}
                      {/* Changed icon/color */}
                    </div>
                    <CardTitle>Ancient Egyptian Meaning</CardTitle>{" "}
                    {/* Changed title */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern Egyptology has shed fascinating light on the language
                    of ancient Egypt, helping us understand the meaning of names
                    from that era.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> Insights
                      from Egyptologists
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Ms was used as a name or as part of a name for very many
                      people in the New Kingdom period of ancient Egyptian
                      history... Ms means 'to give birth'... Used alone, this
                      could mean 'the one who has been born' or more
                      specifically 'newborn'."
                      <br />
                      <span className="not-italic font-normal">
                        - Stephen Quirke, British Egyptologist
                      </span>
                    </p>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-2">
                      "The American Egyptologist James Hoffmeier... seems to
                      support these two meanings 'the one who has been born' and
                      '(newborn) child.'"
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://treesparks.org/2017/08/26/what-does-the-name-moses-musa-or-moshe-actually-mean/"
                        className="text-teal-600 dark:text-teal-400 hover:underline" // Changed color
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TreeSparks, What Does The Name Moses (Musa or Moshe)
                        Actually Mean?, 2017
                      </a>
                    </div>
                  </div>

                  <p>
                    This modern research indicates that the root "Ms" in ancient
                    Egyptian means "to give birth," and when used as a name like
                    "Moses," it means "the one who has been born" or simply
                    "newborn." This aligns perfectly with the context of a baby
                    found and adopted.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500 dark:border-green-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at a verse from the Quran where Pharaoh
                    speaks to Moses.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/26/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/18"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 26:18
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          [Pharaoh] said, "Did we not raise you among us as a
                          newborn? and you stayed among us for many of your
                          years?"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٨ قَالَ أَلَمْ نُرَبِّكَ فِينَا وَلِيدًا وَلَبِثْتَ
                          فِينَا مِنْ عُمُرِكَ سِنِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Word
                    </Badge>
                    <p className="mt-3">
                      In this verse, Pharaoh refers to Moses using the Arabic
                      word "Waleed (وَلِيدًا)". This word specifically means
                      "newborn" or "a young infant."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500 dark:border-purple-700">
                {" "}
                {/* Changed color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      {" "}
                      {/* Changed color */}
                      <Sparkles className="text-purple-500" size={24} />{" "}
                      {/* Changed icon/color */}
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>{" "}
                    {/* Changed title */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here's where it gets truly thought-provoking. Modern
                    Egyptology has revealed that the name "Moses" likely meant
                    "newborn" in ancient Egyptian, fitting the narrative of his
                    life.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Connecting Ancient Knowledge and Scripture
                    </h3>
                    <p>
                      The Quran, revealed in the 7th century CE, refers to Moses
                      using the term "Waleed," meaning "newborn," in the context
                      of Pharaoh's statement about raising him. At that time
                      (the 7th century), the specific meaning of the name
                      "Moses" in ancient Egyptian was unknown to the wider world
                      and certainly not common knowledge. Egyptology as a field
                      developed much later, and the decipherment of hieroglyphs
                      that allowed for understanding ancient Egyptian names is a
                      relatively modern achievement.
                    </p>
                  </div>

                  <p>
                    The Quran's use of the term "Waleed" aligns remarkably with
                    the meaning of Moses' name in the language of the very
                    household that named him, a fact that wasn't rediscovered
                    until centuries later. This connection between a word used
                    in the 7th-century text and a meaning derived from modern
                    linguistic and archaeological work on ancient Egyptian
                    language is a point many find compelling and worthy of
                    reflection.
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
            <Sparkles className="text-purple-500" size={18} />{" "}
            {/* Changed color */}
            <h3 className="text-lg font-medium">
              Exploring History and Scripture
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discovering fascinating connections across time and knowledge.
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

export default MosesName;
