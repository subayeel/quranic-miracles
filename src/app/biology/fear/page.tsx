/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Brain,
  ChevronRight,
  HeartPulse,
  BookOpen,
  Quote,
  HelpCircle,
  Clock,
  ArrowUp,
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

const Fear = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Science of Fear",
        icon: Brain,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: HeartPulse,
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
      <div className="bg-gradient-to-r from-red-500 to-red-700 dark:from-red-600 dark:to-red-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <HeartPulse className="text-red-200" size={32} />
            <h1 className="text-4xl font-bold">Fear</h1>
          </div>
          <p className="text-xl max-w-2xl text-red-100">
            Biology - Extreme
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-red-700 hover:bg-red-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-red-700 border-white hover:bg-red-600"
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
                    Explore fear's connection to the heart
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
              <Card className={`border-l-4 border-red-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Brain className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Linked to the Heart</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For centuries, we've known that fear is processed in the brain, but recent research reveals the heart also plays a crucial role in our fear response.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-lg mb-3">
                      Ancient Wisdom, Modern Science
                    </h3>
                    <p>
                      In the Quran, fear is linked to the heart. Skeptics have claimed that this was a mistake, as fear is traditionally associated with the brain. However, modern science now confirms that fear is indeed linked to both the brain and the heart, validating this ancient understanding.
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
                      <HeartPulse className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Medical Research
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Fear from the Heart
                      <br /><br />
                      Cognitions and emotions can be influenced by bodily physiology. Here, we investigated whether the processing of brief fear stimuli is selectively gated by their timing in relation to individual heartbeats. Emotional and neutral faces were presented to human volunteers at cardiac systole, when ejection of blood from the heart causes arterial baroreceptors to signal centrally the strength and timing of each heartbeat, and at diastole, the period between heartbeats when baroreceptors are quiescent. Participants performed behavioral and neuroimaging tasks to determine whether these interoceptive signals influence the detection of emotional stimuli at the threshold of conscious awareness and alter judgments of emotionality of fearful and neutral faces. Our results show that fearful faces were detected more easily and were rated as more intense at systole than at diastole. Correspondingly, amygdala responses were greater to fearful faces presented at systole relative to diastole. These novel findings highlight a major channel by which short-term interoceptive fluctuations enhance perceptual and evaluative processes specifically related to the processing of fear and threat and counter the view that baroreceptor afferent signaling is always inhibitory to sensory perception."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4012313/"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        US National Library of Medicine, Fear from the Heart: Sensitivity to Fear Stimuli Depends on Individual Heartbeats, 2014
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Brain size={16} className="text-red-500" /> Brain-Heart Connection
                      </h3>
                      <p>
                        Modern research has confirmed that the heart and brain work together in processing fear. The heart's rhythm influences how the brain detects and responds to fearful stimuli.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Clock size={16} className="text-blue-500" /> Cardiac Cycle Timing
                      </h3>
                      <p>
                        The study shows that fear detection is enhanced during systole (when the heart contracts) compared to diastole (the resting phase between heartbeats).
                      </p>
                    </div>
                  </div>

                  <p className="font-medium">
                    Fear is felt in the heart just as in the brain. This was discovered relatively recently, yet it was portrayed in the Quran 1400 years ago, well before modern scientific understanding.
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
                        href="https://www.quranwow.com/#/ch/3/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/151"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 3:151
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "We will throw fear into the hearts of those who disbelieve, because they attribute to Allah partners for which He revealed no sanction. Their lodging is the Fire. Miserable is the lodging of the evildoers."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٥١ سَنُلْقِي فِي قُلُوبِ الَّذِينَ كَفَرُوا الرُّعْبَ بِمَا أَشْرَكُوا بِاللَّهِ مَا لَمْ يُنَزِّلْ بِهِ سُلْطَانًا ۖ وَمَأْوَاهُمُ النَّارُ ۚ وَبِئْسَ مَثْوَى الظَّالِمِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Point
                    </Badge>
                    <p className="mt-3">
                      The phrase "We will throw fear into the hearts of those who disbelieve" specifically associates fear with the heart. This connection between fear and the heart was made in the Quran 1400 years ago, long before scientific confirmation.
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
                    The connection between ancient texts and modern scientific discoveries invites us to reflect on knowledge across time:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have known about fear?
                    </h3>
                    <p>
                      The Quranic description of fear being linked to the heart aligns with modern scientific research that has only recently confirmed this connection. This specific mention raises interesting questions about the source of this knowledge in a time when such physiological understanding was unavailable.
                    </p>
                  </div>

                  <p>
                    For centuries, fear was primarily associated with the brain, and the heart's role in processing fear has only been scientifically confirmed in recent decades. The alignment between this ancient text and modern science offers a fascinating perspective on knowledge, revelation, and our understanding of human physiology.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-red-600 hover:bg-red-700">
              <HeartPulse size={24} />
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
            <HeartPulse className="text-red-600" size={18} />
            <h3 className="text-lg font-medium">Mind & Heart: Understanding Fear</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The complex nature of fear continues to reveal itself through science, connecting ancient wisdom with modern discoveries.
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

export default Fear;