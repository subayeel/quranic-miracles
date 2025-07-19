/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Eye,
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  Brain,
  ArrowUp,
  Sparkles,
  HeartPulse,
  FileText,
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

const CataractsHealth = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Cataracts & Depression",
        icon: Eye,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Medical Evidence",
        icon: HeartPulse,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
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
      <div className="bg-gradient-to-r from-blue-500 to-purple-700 dark:from-blue-700 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Cataracts</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Health - Medical Science
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-200 border-blue-200 hover:bg-blue-800/20"
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
                    Exploring the connection between cataracts and depression
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
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Eye className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Cataracts & Depression</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there's a remarkable connection made between
                    clouding of the eyes and depression. Modern skeptics might
                    dismiss ancient texts as lacking medical knowledge, but
                    today's science confirms a link between cataracts and
                    depression that was described in the Quran 1400 years ago.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Connection Between Eye Health and Mental Health
                    </h3>
                    <p>
                      Cataracts—the clouding of the eye's lens—have been
                      scientifically linked to increased rates of depression,
                      particularly in older adults. This medical connection,
                      discovered only in recent decades, appears to be
                      referenced in a text from the 7th century.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <HeartPulse className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Medical Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-red-500" /> Cataracts
                      Defined
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "A cataract is a clouding of the lens in the eye which
                      leads to a decrease in vision. Cataracts often develop
                      slowly and can affect one or both eyes. Symptoms may
                      include faded colors, blurry or double vision, halos
                      around light, trouble with bright lights, and trouble
                      seeing at night. This may result in trouble driving,
                      reading, or recognizing faces. Poor vision caused by
                      cataracts may also result in an increased risk of falling
                      and depression."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Cataract"
                        className="text-red-600 dark:text-red-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Cataract, 2019
                      </a>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800 mt-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <FileText size={16} className="text-red-500" /> Research
                      Findings
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Cataracts In Older Adults Linked To Depression
                      <br />
                      <br />
                      Cataracts in older adults may be linked to symptoms of
                      depression, according to a new study published in a
                      journal by Optometry and Vision Science. Worldwide,
                      cataract is the number one cause of vision loss...
                      According to the Mayo Clinic, almost half of all Americans
                      in their 60s have some degree of cataracts. Depression,
                      though it can be experienced by people of all ages, is
                      becoming more prevalent in older adults..."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11020056/"
                        className="text-red-600 dark:text-red-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PubMed, Cataracts In Older Adults Linked To Depression,
                        2024
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Eye size={16} className="text-red-500" /> Physical
                        Impact
                      </h3>
                      <p>
                        Cataracts physically manifest as a clouding or whitening
                        of the eye's lens, leading to vision impairment that
                        worsens over time and significantly impacts quality of
                        life.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Brain size={16} className="text-purple-500" />{" "}
                        Psychological Link
                      </h3>
                      <p>
                        Modern research confirms that vision impairment from
                        cataracts contributes to increased rates of depression
                        in the elderly, creating a clear connection between eye
                        health and mental wellbeing.
                      </p>
                    </div>
                  </div>

                  <p>
                    The link between cataracts and depression, particularly in
                    older adults, is a relatively recent discovery in medical
                    science. Yet remarkably, this connection appears to be
                    portrayed in the Quran, written 1400 years ago.
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
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/12/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/84"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 12:84
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then he turned away from them, and said, 'My
                          bitterness for Joseph.' And his eyes turned white from
                          sorrow, and he became depressed."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَتَوَلَّىٰ عَنْهُمْ وَقَالَ يَا أَسَفَىٰ عَلَىٰ
                          يُوسُفَ وَابْيَضَّتْ عَيْنَاهُ مِنَ الْحُزْنِ فَهُوَ
                          كَظِيمٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Observation
                    </Badge>
                    <p className="mt-3">
                      This verse describes Jacob (the father of Joseph) in his
                      old age, experiencing both physical and emotional
                      symptoms—his eyes "turned white from sorrow" while he
                      "became depressed." The Arabic term "وَابْيَضَّتْ
                      عَيْنَاهُ" (wabyaddat 'aynahu) literally means "his eyes
                      became white," describing what we now recognize as
                      cataracts.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-6">
                    <h3 className="font-medium mb-2">Historical Context</h3>
                    <p>
                      In 7th century Arabia, there was no scientific
                      understanding of the connection between eye conditions and
                      mental health. The sophisticated medical knowledge needed
                      to link cataracts with depression simply didn't exist at
                      that time. Yet the Quran presents these two conditions
                      together in the story of Jacob, portraying both the
                      physical symptom (whitening of the eyes) and the
                      psychological state (depression) as connected phenomena.
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
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between the Quranic description and modern
                    medical findings raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      cataracts and their connection to depression?
                    </h3>
                    <p>
                      The Quran's accurate portrayal of the relationship between
                      cataracts and depression—a connection only scientifically
                      confirmed in recent decades—appears in a text from the 7th
                      century. This presents a remarkable alignment between
                      ancient scripture and modern medical discovery.
                    </p>
                  </div>

                  <p>
                    In the story of Jacob and Joseph, the Quran describes an
                    elderly man whose eyes "turned white" (a physical
                    description of cataracts) while simultaneously experiencing
                    depression. The medical link between these two conditions
                    was completely unknown in the ancient world and would have
                    been impossible to establish without modern clinical
                    research methods and statistical analysis.
                  </p>

                  <p>
                    For a text originating in 7th century Arabia to accurately
                    connect these phenomena invites contemplation about the
                    source of such knowledge at a time when medical
                    understanding was primarily based on observable symptoms
                    rather than underlying physiological and psychological
                    connections.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              <Eye size={24} />
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Health & Ancient Wisdom
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The fascinating connections between modern medical research and
            ancient texts continue to inspire wonder and exploration.
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

export default CataractsHealth;
