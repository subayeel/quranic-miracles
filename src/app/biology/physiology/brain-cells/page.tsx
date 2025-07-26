/* eslint-disable react/no-unescaped-entities */
"use client"; // This makes the component a client component in Next.js 13+

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Heart, // Using Heart icon for the topic
  ChevronRight,
  Brain, // Using Brain icon for science/neurons
  BookOpen, // Consistent for Quran
  Lightbulb, // For reflection/insight
  ArrowUp, // Consistent for back to top
  Sparkles, // Consistent for footer
  Atom, // Could represent fundamental units like cells
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

const BrainCellsComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Thinking Heart?",
        icon: Heart,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Modern Discovery",
        icon: Brain,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-500",
      },
      {
        id: "quran",
        title: "A Quranic Verse",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Keep green for Quran
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Question of Knowledge",
        icon: Lightbulb,
        color: "bg-amber-100 dark:bg-amber-900", // Keep amber for reflection
        iconColor: "text-amber-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-pink-200" size={32} />
            <h1 className="text-4xl font-bold">Brain Cells</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Discovering the Mind-Heart Connection
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Findings <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-100 hover:bg-indigo-50/20"
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
                    Explore the heart's hidden depths
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
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Heart className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>The Thinking Heart?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For a long time, it was commonly believed that only the
                    brain is responsible for thinking and cognition. The heart
                    was seen primarily as a pump. However, ancient texts like
                    the Quran contain verses that seem to attribute some form of
                    reasoning or understanding to the heart itself. Skeptics
                    often pointed to this as a contradiction with established
                    understanding of the human body.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Traditional View vs. Quranic Hint
                    </h3>
                    <p>
                      While the dominant view held that thought resides solely
                      in the brain, the Quran suggests a deeper role for the
                      heart beyond just circulating blood. This difference
                      sparked questions and discussions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Modern Discovery */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <Brain className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>Modern Scientific Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    In recent decades, an exciting field called neurocardiology
                    has emerged, revealing surprising connections between the
                    heart and the brain. Scientists have made discoveries that
                    challenge the old assumption that the brain is the *only*
                    thinking organ.
                  </p>

                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Atom size={16} className="text-cyan-500" /> A "Little
                      Brain" in the Heart
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Dr. Armour, in 1991, discovered that the heart has its
                      'little brain' or 'intrinsic cardiac nervous system.' This
                      'heart brain' is composed of approximately 40,000 neurons
                      that are alike neurons in the brain, meaning that the
                      heart has its own nervous system. In addition, the heart
                      communicates with the brain in many methods:
                      neurologically, biochemically, biophysically, and
                      energetically. The vagus nerve, which is 80% afferent,
                      carries information from the heart and other internal
                      organs to the brain. Signals from the 'heart brain'
                      redirect to the medulla, hypothalamus, thalamus, and
                      amygdala and the cerebral cortex. Thus, the heart sends
                      more signals to the brain than vice versa."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/31728781/"
                        className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pubmed, Pain: Is It All in the Brain or the Heart?,
                        2019.
                      </a>
                    </div>
                  </div>

                  <p>
                    That's right, the heart isn't just a pump! It has its own
                    complex network of about 40,000 neurons – nerve cells just
                    like those in your brain. This "heart brain" allows the
                    heart to process information and even make decisions
                    independently.
                  </p>

                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-cyan-500" /> A Rich
                      Dialogue
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The heart is in a constant two-way dialogue with the
                      brain. But, McCraty explains, the heart and cardiovascular
                      system are sending far more signals to the brain than the
                      brain is sending to the heart... Recent work in the
                      relatively new field of neurocardiology has firmly
                      established that the heart is a sensory organ and an
                      information encoding and processing center, with an
                      extensive intrinsic nervous system that’s sufficiently
                      sophisticated to qualify as a heart brain. Its circuitry
                      enables it to learn, remember, and make functional
                      decisions independent of the cranial brain. To everyone’s
                      surprise, the findings have demonstrated that the heart’s
                      intrinsic nervous system is a complex, self-organized
                      system; its neuroplasticity, or ability to reorganize
                      itself by forming new neural connections over both the
                      short and long term, has been well demonstrated."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://noeticsi.com/thinking-from-the-heart-heart-brain-science/"
                        className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Noetic Systems, Thinking From The Heart – Heart Brain
                        Science, 2022
                      </a>
                    </div>
                  </div>

                  <p>
                    While the brain has vastly more neurons (around 86
                    billion!), the heart's 40,000 neurons are actively
                    communicating. Scientists have found that the heart actually
                    sends *more* signals to the brain than the brain sends to
                    the heart! These signals influence areas of the brain
                    involved in perception, cognition, and emotion.
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
                    <CardTitle>A Relevant Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Consider this verse from the Quran, revealed over 1400 years
                    ago:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/en/22/46"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 22:46
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Have they not journeyed in the land, and had hearts
                          to reason with, or ears to listen with? It is not the
                          eyes that go blind, but it is the hearts, within the
                          chests, that go blind."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٦ أَفَلَمْ يَسِيرُوا فِي الْأَرْضِ فَتَكُونَ لَهُمْ
                          قُلُوبٌ يَعْقِلُونَ بِهَا أَوْ آذَانٌ يَسْمَعُونَ
                          بِهَا ۖ فَإِنَّهَا لَا تَعْمَى الْأَبْصَارُ وَلَٰكِنْ
                          تَعْمَى الْقُلُوبُ الَّتِي فِي الصُّدُورِ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Points to Ponder
                    </Badge>
                    <p className="mt-3">
                      The verse uses the word "
                      <span className="font-arabic">قُلُوبٌ</span>" (Kuloob),
                      meaning "hearts." It speaks of hearts having the capacity
                      "to reason with" (
                      <span className="font-arabic">يَعْقِلُونَ بِهَا</span> -
                      ya'qiluna biha), implying a function beyond mere pumping.
                      This aligns intriguingly with the modern discovery of
                      neurons and complex neural processing happening within the
                      heart itself.
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
                      <Lightbulb className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>A Question of Knowledge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific facts we just discussed – the
                    heart having its own neurons, forming a "little brain," and
                    engaging in complex communication with the cranial brain – a
                    thought-provoking question arises:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century know about brain
                      cells in the heart?
                    </h3>
                    <p>
                      In the 7th century CE, understanding of human anatomy and
                      physiology was vastly different from today. The concept of
                      neurons and the intricate neural network within the heart
                      was completely unknown and impossible to detect with the
                      available tools and knowledge. The prevailing view was
                      based on outward observation and philosophical ideas, not
                      cellular biology or neurocardiology.
                    </p>
                    <p>
                      The correlation between the Quranic verse mentioning
                      hearts that can reason and the modern scientific discovery
                      of a complex nervous system in the heart is remarkable. It
                      invites us to reflect on the source of such information in
                      a text revealed fourteen centuries ago, long before
                      science uncovered these facts.
                    </p>
                  </div>

                  <p>
                    This fascinating link between ancient scripture and
                    cutting-edge science encourages us to look deeper into the
                    wonders of the human body and the sources of knowledge.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-indigo-600 hover:bg-indigo-700">
              <Heart size={24} />
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Body and Scripture
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Delving into the intricate connections between the human body,
            consciousness, and ancient wisdom.
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

export default BrainCellsComponent;
