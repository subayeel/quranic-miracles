/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Brain, // Using Brain icon for the topic
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
  MoonStar, // Icon for sleep
  Cross, // Icon related to death/end state (or consider a different icon if preferred)
} from "lucide-react"; // Added MoonStar and Cross icons
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

const BrainStem = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Sleep and Death Linked",
        icon: MoonStar, // Icon for sleep
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Understanding",
        icon: Brain, // Icon for brain/science
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900", // Changed color
        iconColor: "text-teal-500", // Changed color
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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        {" "}
        {/* Changed gradient colors */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-indigo-200" size={32} />{" "}
            {/* Changed icon color */}
            <h1 className="text-4xl font-bold">The Brainstem</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            {" "}
            {/* Changed text color */}
            Connecting Sleep and Life's End
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50" // Changed button colors
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-700" // Changed button colors
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
                    Explore the link between sleep and death
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
              <Card className="border-l-4 border-purple-600">
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      {" "}
                      {/* Changed background color */}
                      <MoonStar className="text-purple-600" size={24} />{" "}
                      {/* Changed icon color */}
                    </div>
                    <CardTitle>Sleep and Death Linked</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever thought about the connection between sleep and
                    death? Interestingly, the Quran mentions a link between
                    these two states. In the past, this idea might have seemed
                    strange to some, but modern science, particularly our
                    understanding of the brain, has uncovered a remarkable
                    connection.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-bold text-lg mb-3">
                      The Brainstem's Crucial Role
                    </h3>
                    <p>
                      Scientists now understand that the brainstem, a vital part
                      of your brain connecting it to the spinal cord, plays a
                      key role in regulating fundamental bodily functions. This
                      includes controlling your sleep cycle and, importantly,
                      being linked to what happens at the end of life.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Understanding */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-600">
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      {" "}
                      {/* Changed background color */}
                      <Brain className="text-indigo-600" size={24} />{" "}
                      {/* Changed icon color */}
                    </div>
                    <CardTitle>Scientific Understanding</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern neuroscience has delved deep into the functions of
                    the brainstem. It's recognized as the control center for
                    essential processes like breathing, heart rate,
                    consciousness, and critically, the sleep-wake cycle.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> Regulating
                      Sleep
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The brainstem contains several critical areas involved in
                      control of behavioral arousal,{" "}
                      <strong>wake-sleep cycle</strong>, cardiovascular
                      function, and respiration... These neurons primarily
                      utilize the excitatory amino-acid L-glutamate or the
                      inhibitory amino acid γ-aminobutyric acid (GABA) and their
                      activity is modulated in a state-dependent manner by
                      cholinergic, monoaminergic, and peptidergic neurons in the
                      brainstem and hypothalamus."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://n.neurology.org/content/91/21/958"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline" // Changed link color
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Neurology, Brainstem integration of arousal, sleep,
                        cardiovascular, and respiratory control, 2018
                      </a>
                    </div>
                  </div>

                  <p>
                    Beyond sleep, the brainstem's status is also fundamentally
                    linked to the concept of death in modern medicine.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Cross size={16} className="text-red-500" /> Brainstem
                      Death
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Brainstem death is a clinical syndrome defined by the
                      absence of reflexes with pathways through the brainstem...
                      Identification of this state carries a very grave
                      prognosis for survival; cessation of heartbeat often
                      occurs within a few days... In the United Kingdom, death
                      can be certified on the basis of a formal diagnosis of
                      brainstem death..."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Brainstem_death"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline" // Changed link color
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Brainstem Death, 2022
                      </a>
                    </div>
                  </div>

                  <p>
                    This shows that the brainstem is not only crucial for
                    regulating our state of consciousness like sleep but its
                    permanent loss of function is medically understood as death
                    itself in many places. This detailed understanding is a
                    relatively recent scientific development.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-600">
                {" "}
                {/* Changed border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      {" "}
                      {/* Changed background color */}
                      <BookOpen className="text-teal-600" size={24} />{" "}
                      {/* Changed icon color */}
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    {" "}
                    {/* Changed colors */}
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/39/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/42"
                        className="text-teal-700 dark:text-teal-400 hover:underline" // Changed link color
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 39:42
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Allah takes the souls at the time of their death, and
                          those that have not died during their sleep. He
                          retains those for which He has decreed death, and He
                          releases the others until a predetermined time. In
                          that are signs for people who reflect."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٢ اللَّهُ يَتَوَفَّى الْأَنْفُسَ حِينَ مَوْتِهَا
                          وَالَّتِي لَمْ تَمُتْ فِي مَنَامِهَا ۖ فَيُمْسِكُ
                          الَّتِي قَضَىٰ عَلَيْهَا الْمَوْتَ وَيُرْسِلُ
                          الْأُخْرَىٰ إِلَىٰ أَجَلٍ مُسَمًّى ۚ إِنَّ فِي ذَٰلِكَ
                          لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      {" "}
                      {/* Changed colors */}
                      Key Connection
                    </Badge>
                    <p className="mt-3">
                      This verse from the Quran, revealed in the 7th century,
                      explicitly draws a connection between death ("takes the
                      souls at the time of their death") and sleep ("and those
                      that have not died during their sleep"). It speaks of a
                      process involving the soul being taken during both states,
                      though with different outcomes (retention in death,
                      release until a later time in sleep).
                    </p>
                    <p className="mt-3">
                      In the 7th century, the intricate biological mechanisms of
                      sleep and death and the brainstem's role in both were
                      completely unknown. The common understanding would have
                      been based on observable states – waking, sleeping, and
                      the irreversible state of death. Yet, the Quran connects
                      sleep and death at a level implying a shared underlying
                      process involving the soul.
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
                    Considering the scientific knowledge available in the 7th
                    century, the explicit link made in the Quran between sleep
                    and death is quite thought-provoking:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a text from 1400 years ago accurately point to a
                      connection between sleep and death, a link that modern
                      science has found is intricately tied to the brainstem?
                    </h3>
                    <p>
                      The scientific finding that the brainstem is central to
                      both regulating sleep and is the key determinant in the
                      medical definition of death reveals a profound, underlying
                      biological link between these two states. This level of
                      detail about internal biological processes was far beyond
                      the reach of 7th-century knowledge. The Quran's mention of
                      taking souls during both sleep and death aligns remarkably
                      with this modern scientific understanding of the
                      brainstem's dual critical role. This connection invites us
                      to reflect on the source of such knowledge in the Quran.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-indigo-600 hover:bg-indigo-700">
              {" "}
              {/* Changed button colors */}
              <Brain size={24} /> {/* Changed icon */}
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
            <Sparkles className="text-indigo-500" size={18} />{" "}
            {/* Changed icon color */}
            <h3 className="text-lg font-medium">Exploring the Body and Soul</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders within us, from sleep's embrace to life's departure,
            connect ancient wisdom with modern discovery.
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

export default BrainStem;
