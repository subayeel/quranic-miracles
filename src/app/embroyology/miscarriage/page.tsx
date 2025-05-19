/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  HeartPulse, // Icon for stress/health connection
  ChevronRight,
  Clock, // Could represent timing/historical context
  BookOpen, // For Quranic reference
  HelpCircle, // For reflection/question
  ArrowUp, // Scroll to top
  Sparkles,
  Quote, // For the 'miracle' aspect
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

// Define the structure for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for the Lucide icon component
  color: string; // Tailwind classes for background/border color
  iconColor: string; // Tailwind class for icon color
}

const MiscarriageTopic = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections using useMemo
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Understanding Miscarriage",
        icon: HelpCircle, // Changed icon
        color: "bg-purple-100 dark:bg-purple-900", // Changed color scheme
        iconColor: "text-purple-500", // Changed icon color
      },
      {
        id: "stress-connection",
        title: "The Stress Connection",
        icon: HeartPulse, // New icon for health/stress
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "A Quranic Sign",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "context",
        title: "Considering the Context",
        icon: Clock, // Using clock for historical context
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
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current; // Use currentRefs to avoid closure issues

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
  }, [contents]); // Depend on contents array

  // Function to scroll to a section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update active section immediately on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-700 dark:from-blue-700 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-purple-200" size={32} />{" "}
            {/* Changed icon/color */}
            <h1 className="text-4xl font-bold">Miracles of the Quran</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Exploring Scientific Insights from Scripture: The Stress-Miscarriage
            Link
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("stress-connection")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700"
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
                    Navigate this insightful topic
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
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      {" "}
                      {/* Changed color */}
                      <HelpCircle className="text-purple-500" size={24} />{" "}
                      {/* Changed icon/color */}
                    </div>
                    <CardTitle>Understanding Miscarriage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Miscarriage is a challenging experience, often discussed in
                    medical and emotional contexts. While modern science sheds
                    light on its various causes, an interesting observation
                    arises when we look at ancient texts, particularly the
                    Quran, in light of recent scientific understanding.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    {" "}
                    {/* Changed color */}
                    <h3 className="font-bold text-lg mb-3">
                      A Delicate Process
                    </h3>
                    <p>
                      Pregnancy is a marvel of biological complexity. Many
                      factors can influence its outcome, and for centuries, the
                      precise reasons behind events like miscarriage were not
                      fully understood.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="stress-connection" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      {" "}
                      {/* Changed color */}
                      <HeartPulse className="text-blue-500" size={24} />{" "}
                      {/* Changed icon/color */}
                    </div>
                    <CardTitle>The Stress Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    In recent times, scientific research has uncovered a
                    fascinating link between severe stress and the risk of
                    miscarriage. It's a complex interaction involving hormones
                    that were not known to people 1400 years ago.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    {" "}
                    {/* Changed color */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Modern
                      Understanding
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Researchers have long known that during times of stress,
                      the brain releases several hormones -- including one
                      called corticotropin-releasing hormone (CRH)... this new
                      research suggests that CRH and other stress hormones may
                      also be released elsewhere in the body, where it
                      specifically targets localized mast cells... Mast cells
                      are abundant in the uterus. During stress, the local
                      release of CRH causes these mast cells to secrete
                      substances that can cause miscarriages."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.webmd.com/baby/news/20030226/how-stress-causes-miscarriage"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WebMD, How Stress Causes Miscarriage, 2003
                      </a>
                    </div>
                  </div>

                  <p>
                    This research highlights that severe emotional or physical
                    stress can trigger a hormonal response that directly affects
                    the uterus, potentially leading to miscarriage. This level
                    of biological understanding is a product of modern medical
                    science.
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
                    <CardTitle>A Quranic Sign</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at a description in the Quran regarding the
                    events of the Final Hour. This verse paints a picture of
                    overwhelming fear and terror.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/2" // Link to Quran 22:2
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 22:2
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "On the Day you see it, every nursing mother will be
                          distracted from that [child] she was nursing, and
                          every pregnant woman will abort her pregnancy, and you
                          will see the people intoxicated, yet they are not
                          intoxicated; but the punishment of Allah is severe."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢ يَوْمَ تَرَوْنَهَا تَذْهَلُ كُلُّ مُرْضِعَةٍ عَمَّا
                          أَرْضَعَتْ وَتَضَعُ كُلُّ ذَاتِ حَمْلٍ حَمْلَهَا
                          وَتَرَى النَّاسَ سُكَارَىٰ وَمَا هُمْ بِسُكَارَىٰ
                          وَلَٰكِنَّ عَذَابَ اللَّهِ شَدِيدٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Observation
                    </Badge>
                    <p className="mt-3">
                      This verse describes a scene of intense, unimaginable
                      terror during the Final Hour. One of the physical
                      consequences mentioned is that "every pregnant woman will
                      abort her pregnancy."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="context" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      {" "}
                      {/* Changed color */}
                      <Clock className="text-amber-500" size={24} />{" "}
                      {/* Changed icon/color */}
                    </div>
                    <CardTitle>
                      Considering the Context of the 7th Century
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Connecting the modern scientific understanding of
                    stress-induced miscarriage with the description in Quran
                    22:2 raises a thought-provoking question.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    {" "}
                    {/* Changed color */}
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could knowledge of such a specific physiological
                      reaction – severe stress causing miscarriage – be present
                      in a text from the 7th century?
                    </h3>
                    <p>
                      In the 7th century, medical knowledge was fundamentally
                      different from today. The intricate pathways involving
                      hormones like CRH and their specific impact on the uterus
                      during stress were entirely unknown. People understood the
                      *concept* of stress and its impact on well-being, but the
                      detailed biological mechanism leading from severe terror
                      to miscarriage was far beyond the scientific understanding
                      of the time.
                    </p>
                  </div>

                  <p>
                    The Quranic verse describes a scene of extreme stress and
                    includes miscarriage as a direct physical consequence. Given
                    the limited biological and medical knowledge available 1400
                    years ago, the specific mention of pregnant women
                    miscarrying under such conditions is seen by many as a
                    remarkable alignment with modern scientific discovery,
                    pointing towards a source of knowledge beyond human
                    experience at that time.
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
              Reflecting on Knowledge and Wisdom
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the connections between ancient texts and modern science
            can offer unique perspectives on the wisdom embedded in scripture.
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

export default MiscarriageTopic;
