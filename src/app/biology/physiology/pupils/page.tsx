/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Eye, // Using Eye icon for pupils
  ChevronRight,
  FlaskConical, // Icon for science/autonomic system
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
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

const PupilsComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Eyes That Tell Tales",
        icon: Eye,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "science",
        title: "Behind the Dilation",
        icon: FlaskConical,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "reflection",
        title: "A Timeless Connection?",
        icon: HelpCircle,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
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
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 dark:from-teal-800 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-teal-200" size={32} />
            <h1 className="text-4xl font-bold">Pupils</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            The Science of Honesty and the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              onClick={() => scrollToSection("intro")}
            >
              Learn About Pupils
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
                    Uncover the secrets eyes can reveal
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
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Eye className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Eyes That Tell Tales</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Did you know your eyes can sometimes reveal secrets even
                    when you try to hide them? Specifically, your pupils!
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3">
                      Pupils and Involuntary Reactions
                    </h3>
                    <p>
                      The size of your pupils isn't usually something you can
                      control consciously. It's managed by your body's automatic
                      systems, reacting to things like light and even your
                      emotional or mental state. Modern science has found
                      fascinating links between pupil size and psychological
                      states, including when someone might not be telling the
                      whole truth!
                    </p>
                  </div>
                  <p>
                    It's quite remarkable to think that a tiny part of your eye,
                    beyond your conscious control, could potentially signal
                    inner thoughts or tensions.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <FlaskConical className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Behind the Dilation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> Scientific
                      Understanding
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      Based on the provided text:
                      <br />
                      "Why do pupils dilate when someone says a lie? The
                      autonomic nervous system (ANS) regulates bodily functions
                      that occur without conscious control... The sympathetic
                      system is more active in a 'fight or flight' situations...
                      lying usually involves some level of tension or anxiety...
                      This tension subconsciously triggers the sympathetic
                      nervous system... Sympathetic stimulation to the eye will
                      cause contraction of the radially oriented pupillary
                      dilator muscle fibers in the iris and will result in
                      mydriasis (dilation of the pupil)."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://medicalsciences.stackexchange.com/questions/9798/why-do-pupils-dilate-when-someone-says-a-lie-other-physicial-symptoms-when-some"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Medical Science, 2016
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <FlaskConical size={16} className="text-indigo-500" />{" "}
                        The Autonomic System
                      </h3>
                      <p>
                        Our autonomic nervous system (ANS) controls automatic
                        body functions like breathing and heart rate. It also
                        influences pupil size without us thinking about it.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Eye size={16} className="text-indigo-500" /> Tension
                        and Dilation
                      </h3>
                      <p>
                        When we experience tension or anxiety, like when telling
                        a lie, the sympathetic part of the ANS activates, which
                        can cause pupils to dilate.
                      </p>
                    </div>
                  </div>

                  <p>
                    So, while someone might try to control their words or body
                    language, their pupils can involuntarily expand, acting as
                    tiny, silent indicators of inner tension related to
                    deception. This scientific understanding is relatively
                    recent.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <BookOpen className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Quranic Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Interestingly, the Quran contains a verse that speaks about
                    the eyes in a way that resonates with this idea of hidden
                    things being revealed through them.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/en/40/19"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 40:19
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "He knows the betrayal of the eyes, and what the
                          hearts conceal."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٩ يَعْلَمُ خَائِنَةَ الْأَعْيُنِ وَمَا تُخْفِي
                          الصُّدُورُ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Deep Meaning
                    </Badge>
                    <p className="mt-3">
                      The phrase "خَائِنَةَ الْأَعْيُنِ" (kha'inatal a'yun)
                      translates to "betrayal of the eyes". In the context of
                      knowledge available in the 7th century, this phrase is
                      incredibly thought-provoking. At a time when there was no
                      scientific understanding of how involuntary physiological
                      responses, like pupil dilation due to internal states
                      (such as the tension from lying), could manifest through
                      the eyes, this verse highlights a subtle yet revealing
                      aspect of human behavior and inner states that can be
                      perceived or "known". It suggests that even our eyes can
                      give away something we wish to conceal, a concept that
                      modern science now explores through areas like
                      pupillometry and its links to cognitive and emotional
                      states.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <HelpCircle className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>A Timeless Connection?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific understanding of pupil dilation
                    linked to lying developed only relatively recently, the
                    Quranic verse from the 7th century prompts a fascinating
                    question:
                  </p>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a text revealed 1400 years ago speak of the
                      "betrayal of the eyes" in a way that resonates with modern
                      scientific findings about involuntary eye movements and
                      inner states?
                    </h3>
                    <p>
                      In the 7th century world, physiological links between
                      subtle eye movements (like pupil changes) and complex
                      internal states such as deception were completely unknown
                      and undetectable by the available means. The mention of
                      the "betrayal of the eyes" in the Quran invites
                      contemplation on its source of knowledge, seemingly
                      pointing to a level of insight beyond the human
                      understanding of that era. It highlights the profound
                      nature of the Quran's descriptions, which sometimes appear
                      to align with discoveries made centuries later.
                    </p>
                  </div>

                  <p>
                    Exploring these connections can deepen our appreciation for
                    both scientific discovery and ancient texts.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-teal-600 hover:bg-teal-700">
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
            <Sparkles className="text-teal-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Insights from Eyes
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting the subtleties of human physiology with timeless wisdom.
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

export default PupilsComponent;
