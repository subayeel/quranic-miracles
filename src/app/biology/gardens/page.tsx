/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Leaf,
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Heart,
  Sparkles,
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

const Gardens = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Natural Antidepressant",
        icon: Heart,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Leaf,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
      },
      {
        id: "reflection",
        title: "Reflection",
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
      <div className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="text-green-200" size={32} />
            <h1 className="text-4xl font-bold">Gardens</h1>
          </div>
          <p className="text-xl max-w-2xl text-green-100">Biology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-green-700 border-white hover:bg-green-600"
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
                    Explore gardens' healing effects
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
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Heart className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Natural Antidepressant</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran gardens bring joy. Skeptics claim that whoever
                    wrote the Quran made a mistake; gardens have no effect on
                    us. Today gardens are used as a natural antidepressant.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">
                      Ancient Wisdom, Modern Discovery
                    </h3>
                    <p>
                      Gardens have been part of human culture for thousands of
                      years, but only recently has science confirmed what the
                      Quran mentioned 1400 years ago - that gardens have a
                      profound positive effect on our mental wellbeing and can
                      help alleviate depression.
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
                      <Leaf className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Medical
                      Research
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Gardening is beneficial for health: A meta-analysis
                      <br />
                      <br />
                      There is increasing awareness among researchers and health
                      practitioners of the potential health benefits derived
                      from gardening activities. Indeed, previous studies have
                      shown that gardening increases individual's life
                      satisfaction, vigor, psychological wellbeing, positive
                      affects, sense of community, and cognitive function.
                      Reductions in stress, anger, fatigue, and depression and
                      anxiety symptoms have also been documented. In
                      consequence, engagement with gardening has increasingly
                      been recognized as not only a cost-effective health
                      intervention but also a treatment or occupational therapy
                      for those with psychological health issues, so-called
                      "horticultural therapy"."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5153451/"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Center for Biotechnology Information, Gardening
                        is beneficial for health: A meta-analysis, 2016
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Heart size={16} className="text-pink-500" /> Mental
                        Health Benefits
                      </h3>
                      <p>
                        Modern research confirms that spending time in gardens
                        reduces symptoms of depression and anxiety, improves
                        mood, and enhances overall psychological wellbeing.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-blue-500" />{" "}
                        Horticultural Therapy
                      </h3>
                      <p>
                        Gardens are now prescribed as therapy for mental health
                        conditions, with "horticultural therapy" becoming
                        recognized as an effective treatment approach for
                        depression and other psychological issues.
                      </p>
                    </div>
                  </div>

                  <p className="font-medium mt-4">
                    Gardens are being prescribed as a natural antidepressant.
                    However this was portrayed in the Quran 1400 years before it
                    was discovered.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className={`border-l-4 border-emerald-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <BookOpen className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/27/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/60"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 27:60
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Or, who created the heavens and the earth, and rains
                          down water from the sky for you? With it We produce
                          joyful gardens, whose trees you could not have
                          produced. Is there another god with Allah? But they
                          are a people who equate."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦٠ أَمَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَأَنْزَلَ
                          لَكُمْ مِنَ السَّمَاءِ مَاءً فَأَنْبَتْنَا بِهِ
                          حَدَائِقَ ذَاتَ بَهْجَةٍ مَا كَانَ لَكُمْ أَنْ
                          تُنْبِتُوا شَجَرَهَا ۗ أَإِلَٰهٌ مَعَ اللَّهِ ۚ بَلْ
                          هُمْ قَوْمٌ يَعْدِلُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
                      Key Point
                    </Badge>
                    <p className="mt-3">
                      "Bahjat بَهْجَةٍ" means joy or delight. In this verse
                      gardens bring joy or delight. Today gardens are being
                      prescribed as a natural antidepressant.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className={`border-l-4 border-purple-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The connection between ancient texts and modern scientific
                    discoveries invites us to reflect on knowledge across time:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      the psychological effects of gardens?
                    </h3>
                    <p>
                      The Quranic description of gardens as bringing "joy"
                      (bahjah) aligns with modern scientific understanding of
                      gardens as natural antidepressants. This specific mention
                      of gardens' positive psychological effects, rather than
                      just their beauty or practical uses, raises interesting
                      questions about the source of this knowledge.
                    </p>
                  </div>

                  <p>
                    While people have appreciated gardens throughout history,
                    the specific understanding of their mental health benefits
                    and antidepressant properties is a relatively recent
                    scientific discovery. The alignment between this ancient
                    text and modern psychological science offers a fascinating
                    perspective on knowledge, revelation, and our connection to
                    nature.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700">
              <Leaf size={24} />
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
            <Leaf className="text-green-600" size={18} />
            <h3 className="text-lg font-medium">Nature's Healing Spaces</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Gardens continue to reveal their healing gifts, connecting ancient
            wisdom with modern scientific discovery.
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

export default Gardens;
