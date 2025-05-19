/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Brain,
  BookOpen,
  Quote,
  HelpCircle,
  Clock,
  ArrowUp,
  Sparkles,
  Users,
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

const AlzheimerComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Memory & Aging",
        icon: Brain,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Understanding",
        icon: Clock,
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
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
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
      threshold: 0.3,
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
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-700 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Alzheimer's Disease</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Biology - Extreme
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-700 border-white hover:bg-purple-600"
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
                    Explore memory loss and aging
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
              <Card className={`border-l-4 border-purple-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Brain className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Linked to Old Age</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Alzheimer's disease is a progressive brain disorder that affects memory, thinking, and behavior. While it's not a normal part of aging, age is the greatest known risk factor.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Ancient Knowledge, Modern Discovery
                    </h3>
                    <p className="font-medium">
                      In the Quran, old age causes memory loss. Skeptics claim that whoever wrote the Quran made a mistake; memory loss is not related to old age. Today scientists confirm that Alzheimer's memory loss is linked to old age.
                    </p>
                    <p className="mt-3">
                      The most obvious symptom of Alzheimer's is loss of memory, and this memory loss becomes more common as people age, particularly after 65 years old.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Clock className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Understanding</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Understanding Alzheimer's and Dementia
                    </h3>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        Alzheimer's is the most common cause of dementia, a general term for memory loss and other cognitive abilities serious enough to interfere with daily life. Alzheimer's disease accounts for 60-80% of dementia cases.
                      </p>
                      <p>
                        Alzheimer's is not a normal part of aging. <strong>The greatest known risk factor is increasing age, and the majority of people with Alzheimer's are 65 and older...</strong>
                      </p>
                      <p>
                        Alzheimer's worsens over time. Alzheimer's is a progressive disease, where dementia symptoms gradually worsen over a number of years. In its early stages, memory loss is mild, but with late-stage Alzheimer's, individuals lose the ability to carry on a conversation and respond to their environment.
                      </p>
                      <p>
                        Alzheimer's is the sixth-leading cause of death in the United States. On average, a person with Alzheimer's lives 4 to 8 years after diagnosis but can live as long as 20 years, depending on other factors.
                      </p>
                    </div>
                    <div className="mt-4 text-sm">
                      <a
                        href="https://www.alz.org/alzheimers-dementia/what-is-alzheimers"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alzheimer's Association, Understanding Alzheimer's and dementia, 2021.
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Users size={16} className="text-purple-500" /> Age Factor
                      </h3>
                      <p>
                        While Alzheimer's can occur earlier, the vast majority of cases (about 95%) occur in people aged 65 and older. The risk roughly doubles every five years after age 65.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Brain size={16} className="text-blue-500" /> Memory Loss
                      </h3>
                      <p>
                        The primary symptom is progressive memory loss, starting with recent events and eventually affecting long-term memories and basic cognitive functions.
                      </p>
                    </div>
                  </div>

                  <p className="font-medium">
                    Alzheimer's loss of memory is clearly linked to old age. This connection was only scientifically established in recent decades, yet it was described in the Quran 1400 years before modern research confirmed it.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/16/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/70"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 16:70
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Allah created you; then He takes you away. Some of you will be brought back to the worst age, so that he will no longer know anything, after having acquired knowledge. Allah is Omniscient and Omnipotent."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧٠ وَاللَّهُ خَلَقَكُمْ ثُمَّ يَتَوَفَّاكُمْ ۚ وَمِنْكُمْ مَنْ يُرَدُّ إِلَىٰ أَرْذَلِ الْعُمُرِ لِكَيْ لَا يَعْلَمَ بَعْدَ عِلْمٍ شَيْئًا ۚ إِنَّ اللَّهَ عَلِيمٌ قَدِيرٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Insight
                    </Badge>
                    <p className="mt-3">
                      In this verse, old age specifically causes loss of memory - "so that he will no longer know anything, after having acquired knowledge." This directly describes how advanced age can lead to the loss of previously acquired knowledge and memories, which perfectly aligns with what we now understand about Alzheimer's disease and age-related memory loss.
                    </p>
                  </div>

                  <div className="bg-green-100 dark:bg-green-800/30 p-4 rounded-lg mt-4">
                    <h4 className="font-medium mb-2">Understanding the Text</h4>
                    <p className="text-sm">
                      The phrase "worst age" (أَرْذَلِ الْعُمُرِ) refers to the most difficult period of old age, when physical and mental faculties decline. The verse specifically mentions forgetting "after having acquired knowledge," which describes exactly what happens in Alzheimer's - the gradual loss of memories and knowledge that were once well-established.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className={`border-l-4 border-amber-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The remarkable alignment between this ancient text and modern medical understanding raises profound questions about knowledge and time:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have known about Alzheimer's?
                    </h3>
                    <p>
                      The Quranic verse doesn't just mention old age and memory loss as separate concepts - it specifically links them together, describing how advancing age can cause someone to "no longer know anything, after having acquired knowledge." This precise description matches our modern understanding of Alzheimer's disease and age-related dementia.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p>
                      What makes this particularly striking is the specificity of the description. The verse doesn't just say people become forgetful - it explains that they lose knowledge they previously had, which is exactly how Alzheimer's progresses.
                    </p>
                    <p>
                      While aging has always been observable, the scientific understanding that memory loss increases dramatically with age, particularly after 65, and that this represents a specific medical condition, is a relatively recent development in human knowledge.
                    </p>
                    <p>
                      This connection between ancient text and modern medical science invites us to consider the relationship between revelation, observation, and scientific discovery across the centuries.
                    </p>
                  </div>
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
              <Brain size={24} />
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
            <Sparkles className="text-purple-600" size={18} />
            <h3 className="text-lg font-medium">Memory Across Time</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The connection between aging and memory loss, described centuries ago and confirmed by modern science.
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

export default AlzheimerComponent;