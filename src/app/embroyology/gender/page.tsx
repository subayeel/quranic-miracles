/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Baby, // Changed from Sun
  ChevronRight,
  Microscope, // Changed from Clock
  BookOpen,
  Quote,
  Sparkles, // Changed from HelpCircle for Reflection, kept for Footer
  ArrowUp,
  Dna, // New icon for header
  Users, // Alternative icon if needed
} from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming these paths are correct
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react"; // Import LucideIcon type

// Define TypeScript type for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string; // Tailwind class for background in sidebar/card accents
  iconColor: string; // Tailwind class for icon color
  borderColor: string; // Tailwind class for card border
}

const GenderDeterminationQuran = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Mystery of Gender",
        icon: Baby,
        color: "bg-sky-100 dark:bg-sky-900",
        iconColor: "text-sky-500",
        borderColor: "border-sky-500",
      },
      {
        id: "science",
        title: "Scientific Understanding",
        icon: Microscope,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
        borderColor: "border-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Perspective",
        icon: BookOpen,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
        borderColor: "border-emerald-500",
      },
      {
        id: "reflection",
        title: "A 7th Century Insight",
        icon: Sparkles,
        color: "bg-rose-100 dark:bg-rose-900",
        iconColor: "text-rose-500",
        borderColor: "border-rose-500",
      },
    ];
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // When 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-800 dark:from-sky-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Dna className="text-sky-200" size={32} />
            <h1 className="text-4xl font-bold">Gender</h1>
          </div>
          <p className="text-xl max-w-2xl text-sky-100">
            Genetics & The Quran - Unveiling Ancient Wisdom
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-sky-700 hover:bg-sky-50 dark:bg-gray-100 dark:text-sky-800 dark:hover:bg-sky-100"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-sky-200 text-sky-100 hover:bg-sky-700 hover:text-white dark:border-sky-300 dark:text-sky-200 dark:hover:bg-sky-800"
              onClick={() => scrollToSection("intro")}
            >
              Discover More
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
                    Understanding Gender Determination
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
              <Card className={`border-l-4 ${contents[0].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[0].color}`}>
                      <Baby className={contents[0].iconColor} size={24} />
                    </div>
                    <CardTitle>{contents[0].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The determination of a baby's gender is a fundamental aspect
                    of life. For centuries, its mechanisms were a mystery. It
                    was only recently in human history that science unveiled the
                    role of chromosomes.
                  </p>
                  <div
                    className={`${contents[0].color}/30 p-6 rounded-lg border ${contents[0].borderColor} border-opacity-30`}
                  >
                    <h3 className="font-bold text-lg mb-3">
                      A Question of Origin
                    </h3>
                    <p>
                      Remarkably, insights pointing to the male's role in gender
                      determination were present in the Quran over 1400 years
                      ago, a time when such biological knowledge was not
                      available. This exploration delves into both modern
                      scientific understanding and these ancient Quranic
                      references.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Understanding */}
            <section id="science" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[1].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[1].color}`}>
                      <Microscope className={contents[1].iconColor} size={24} />
                    </div>
                    <CardTitle>{contents[1].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`${contents[1].color}/30 p-6 rounded-lg border ${contents[1].borderColor} border-opacity-30`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className={contents[1].iconColor} /> The
                      Genetic Basis of Gender
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In humans, gender is determined by sex chromosomes.
                      Females typically have two X chromosomes (XX) and can only
                      pass on an X chromosome to their offspring. Males have one
                      X and one Y chromosome (XY), and can pass on either an X
                      or a Y chromosome through their sperm."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        Basic Human Genetics
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Users size={16} className={contents[1].iconColor} />{" "}
                        Parental Contributions
                      </h3>
                      <p>
                        The mother always contributes an X chromosome. The
                        father's sperm, carrying either an X or a Y chromosome,
                        determines the baby's gender. An XX combination results
                        in a female, and an XY combination results in a male.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Dna size={16} className="text-gray-500" /> Chromosomal
                        Count
                      </h3>
                      <p>
                        Humans have a total of 46 chromosomes, arranged in 23
                        pairs. Each parent contributes 23 chromosomes to their
                        child, carrying the genetic blueprint for life.
                      </p>
                    </div>
                  </div>

                  <p>
                    Therefore, modern science confirms that it is the genetic
                    contribution from the male (the sperm) that determines the
                    sex of the baby. This understanding is relatively recent in
                    the timeline of human knowledge.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Perspective */}
            <section id="quran" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[2].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[2].color}`}>
                      <BookOpen className={contents[2].iconColor} size={24} />
                    </div>
                    <CardTitle>{contents[2].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`${contents[2].color}/30 p-6 rounded-lg border ${contents[2].borderColor} border-opacity-30`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/53/45-46" // Example link, verify for accuracy
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 53:45-46
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "And He (Allah) creates the two spouses, the male and
                          the female, from a Nutfah (drop of sperm) when it is
                          emitted."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg md:text-xl text-gray-800 dark:text-gray-200">
                        {/* Ensure you have a font that supports Arabic characters well, e.g., via Tailwind config or global CSS */}
                        <p dir="rtl">
                          ٤٥ وَأَنَّهُ خَلَقَ الزَّوْجَيْنِ الذَّكَرَ
                          وَالْأُنْثَىٰ
                        </p>
                        <p dir="rtl">٤٦ مِنْ نُطْفَةٍ إِذَا تُمْنَىٰ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge
                      className={`bg-emerald-100 text-emerald-800 dark:bg-emerald-700 dark:text-emerald-100`}
                    >
                      Key Term: Nutfah (نُطْفَةٍ)
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "Nutfah" (نُطْفَةٍ) specifically refers to
                      a small quantity of fluid, interpreted in this context as
                      sperm or the male gamete. The Quran states that gender
                      (male or female) is determined from this "Nutfah" when it
                      is emitted. Since sperm originates exclusively from the
                      male, this implies that the male's contribution is what
                      determines the baby's sex.
                    </p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Interestingly, the verse number concluding this statement
                      is 46, which is the total number of chromosomes in a human
                      somatic cell. This observation is considered significant
                      by many.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[3].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[3].color}`}>
                      <Sparkles className={contents[3].iconColor} size={24} />
                    </div>
                    <CardTitle>{contents[3].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quranic statement regarding gender determination, when
                    viewed against the backdrop of 7th-century knowledge,
                    presents a compelling point for reflection.
                  </p>

                  <div
                    className={`${contents[3].color}/30 p-6 rounded-lg border ${contents[3].borderColor} border-opacity-30`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center text-rose-700 dark:text-rose-300">
                      How could it be known 1400 years ago that the male's
                      contribution determines gender?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The scientific understanding that the male's sperm
                      (carrying either an X or Y chromosome) is the determinant
                      factor for a baby's sex is a relatively modern discovery,
                      established long after the Quran was revealed. At a time
                      when there were no microscopes, genetic science, or
                      understanding of chromosomes, the Quran pointed to the
                      "Nutfah" (sperm) as the source from which male and female
                      are created.
                    </p>
                  </div>

                  <p>
                    This alignment between a statement in a 1400-year-old text
                    and a fundamental concept in modern biology encourages
                    contemplation on the source of this knowledge. For
                    believers, such instances are seen as affirmations of the
                    Quran's divine origin, containing wisdom that predates human
                    scientific discovery.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    It's noteworthy that various historical beliefs and even
                    some other ancient texts held different, often incorrect,
                    notions about reproduction and inheritance. The precision of
                    the Quranic statement in this regard stands out.
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
            <Sparkles className="text-sky-500" size={18} />
            <h3 className="text-lg font-medium">
              Contemplating Creation's Blueprint
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The intricate details of life, from genetics to the cosmos, often
            echo wisdom found in ancient revelations, inviting us to explore and
            reflect.
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

export default GenderDeterminationQuran;
