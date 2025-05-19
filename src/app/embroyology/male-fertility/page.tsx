/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bone, // Icon for bones/anatomy
  GlassWater, // Icon for science/research
  BookOpen, // Icon for Quran
  HelpCircle, // Icon for reflection/question
  ChevronRight, // Navigation icon
  ArrowUp, // Back to Top icon
  Sparkles, // Miracle icon
  Quote, // Quote icon
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

// Define types for content items
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icon components
  color: string; // Tailwind class for background color
  iconColor: string; // Tailwind class for icon color
}

const MaleFertility: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Ancient Understanding",
        icon: Bone,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-600",
      },
      {
        id: "science",
        title: "Modern Science Confirms",
        icon: GlassWater,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "reflection",
        title: "Reflecting on the Miracle",
        icon: HelpCircle,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Depend on contents to re-observe if structure changes

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
      <div className="bg-gradient-to-r from-green-600 to-emerald-800 dark:from-green-800 dark:to-emerald-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bone className="text-green-200" size={32} />
            <h1 className="text-4xl font-bold">Male Fertility</h1>
          </div>
          <p className="text-xl max-w-2xl text-green-100">
            The surprising link between bones and life's beginnings.
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => scrollToSection("science")}
            >
              Explore the Connection <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-green-100 border-green-300 hover:bg-green-700"
              onClick={() => scrollToSection("quran")}
            >
              See the Quranic Verse
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
                    Explore the bone-fertility link
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
            {/* Introduction: Ancient Understanding */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-emerald-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[0].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine living 1400 years ago. Our understanding of the
                    human body, especially the complex processes of
                    reproduction, was vastly different from today. While people
                    understood the basic external aspects, the intricate
                    cellular and hormonal mechanisms were completely unknown.
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
                    <h3 className="font-bold text-lg mb-3">
                      Knowledge in the 7th Century
                    </h3>
                    <p>
                      In the 7th century, medical knowledge was based on
                      observation and classical texts, lacking the tools (like
                      advanced microscopy or biochemical analysis) to understand
                      the subtle roles of hormones or the non-mechanical
                      functions of organs like bones. There was certainly no
                      known connection between the skeleton and male fertility.
                    </p>
                  </div>
                  <p>
                    It was simply not conceivable with the knowledge available
                    at that time that something as seemingly structural as bone
                    could play a direct role in male reproduction.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Modern Science Confirms */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[1].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fast forward to modern times! With advanced scientific
                    research, we've made incredible discoveries about the human
                    body's interconnected systems. One such recent discovery is
                    truly astonishing: the skeleton is not just for support;
                    it's an endocrine organ that influences male fertility!
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
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className={contents[1].iconColor} /> The
                      Role of Bones
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Researchers at Columbia University Medical Center have
                      discovered that the skeleton acts as a regulator of
                      fertility in male mice through a hormone released by bone,
                      known as osteocalcin... Skeleton Regulates Male Fertility,
                      But Not Female."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.nlm.nih.gov/news/news_releases/2011/bones_fertility_08_15_11.html"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Library of Medicine, 2011
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Bone size={16} className={contents[1].iconColor} />{" "}
                        Bone as Endocrine Organ
                      </h3>
                      <p>
                        Beyond support, bones secrete hormones! One key hormone
                        is osteocalcin, produced by bone cells.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <GlassWater
                          size={16}
                          className={contents[1].iconColor}
                        />{" "}
                        Osteocalcin and Fertility
                      </h3>
                      <p>
                        Osteocalcin travels through the bloodstream and directly
                        affects Leydig cells in the testes, stimulating
                        testosterone production, which is essential for male
                        fertility.
                      </p>
                    </div>
                  </div>
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
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className={contents[1].iconColor} />{" "}
                      Further Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Traditionally, bone has been viewed as a relatively
                      static tissue only fulfilling mechanical and scaffolding
                      function... It is now clear that the skeleton is not only
                      a recipient for hormonal input but it is also an endocrine
                      organ itself. Through the secretion of an
                      osteoblast-derived molecule, osteocalcin, the skeleton
                      regulates glucose homeostasis and male reproductive
                      functions... on Leydig cells of the testis to favor
                      testosterone biosynthesis."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/24065144/"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Library of Medicine, 2013
                      </a>
                    </div>
                  </div>
                  <p>
                    This ground-breaking research, particularly from the early
                    2010s, established a scientific link between bones and male
                    reproductive function through hormonal signaling. This was
                    knowledge simply unavailable 1400 years ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${contents[2].color}`}
                    ></div>
                    <CardTitle>{contents[2].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at a passage from the Quran, revealed in the
                    7th century, when this scientific fact was utterly unknown.
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
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/86/6-7" // Example link, replace with preferred Quran site if needed
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 86:6-7
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "He was created from gushing water, issuing from
                          between the backbone and the ribs."
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          (Translation may vary slightly depending on the
                          version)
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦ خُلِقَ مِنْ مَاءٍ دَافِقٍ
                          <br />٧ يَخْرُجُ مِنْ بَيْنِ الصُّلْبِ وَالتَّرَائِبِ
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
                      )} dark:${contents[2].color.replace(
                        "900",
                        "100"
                      )} dark:${contents[2].iconColor.replace("500", "100")}`}
                    >
                      Key Terms
                    </Badge>
                    <p className="mt-3">
                      The verse mentions creation from fluid issuing "from
                      between the backbone ($al-sulb$) and the ribs/breastbones
                      ($al-tara'ib$)." These terms refer to areas of the body
                      directly associated with the skeleton. While the verse
                      describes the *location* from which the fluid originates,
                      it places this origin point in intimate relation with
                      bones (backbone and the bones of the chest/ribcage area).
                    </p>
                    <p className="mt-3">
                      Considering the context of reproduction and the origin of
                      life described in the verse, the mention of areas defined
                      by bones ($al-sulb$ and $al-tara'ib$) is profoundly
                      interesting in light of modern discoveries showing bones
                      *themselves* play a direct role in regulating male
                      fertility.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[3].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's pause and think about this remarkable correlation:
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
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living in the 7th century, without
                      microscopes, biochemical analysis, or knowledge of
                      hormones, know that bones are connected to male fertility?
                    </h3>
                    <p>
                      The Quran, revealed 1400 years ago, mentions the origin of
                      reproductive fluid in close proximity to areas defined by
                      the skeleton (backbone and ribs/breastbones). Modern
                      science has only recently confirmed that bones, through
                      hormones like osteocalcin, are direct regulators of male
                      fertility.
                    </p>
                  </div>

                  <p>
                    This isn't just a vague statement; it's a specific
                    anatomical association made in a text from an era when such
                    a biological link was completely unknown to human science.
                    The fact that this ancient scripture connects the process of
                    creation/fertility with a location tied to bones, and modern
                    science discovers that bones are crucial endocrine
                    regulators of male fertility, is truly thought-provoking.
                  </p>
                  <p>
                    For believers, this serves as a profound sign, suggesting
                    that the knowledge contained within the Quran transcends the
                    limited scientific understanding of its time, pointing
                    towards a divine origin. It's one of the many miracles of
                    the Quran that resonate with discoveries made centuries
                    later.
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
            <Sparkles className="text-green-600" size={18} />
            <h3 className="text-lg font-medium">
              Reflecting on Creation and Science
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the harmony between ancient wisdom and modern scientific
            discovery.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MaleFertility;
