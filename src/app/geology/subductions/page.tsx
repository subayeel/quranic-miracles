/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain,
  ChevronRight,
  ArrowDown,
  BookOpen,
  Quote,
  HelpCircle,
  Droplets,
  ArrowUp,
  Sparkles,
  Layers,
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

// Define TypeScript interfaces for our component
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

const SubductionPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Sinking Plates",
        icon: Layers,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Mountain,
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

  const scrollToSection = (id: string): void => {
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
            <Layers className="text-indigo-200" size={32} />
            <h1 className="text-4xl font-bold">Subduction</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Geology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-300 hover:bg-indigo-700"
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
                    Explore Earth's tectonic processes
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
                      <Layers className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Sinking Plates</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there is a reference to rocks that sink
                    beneath Earth's surface. Skeptics claim that whoever wrote
                    the Quran made a mistake; 1400 years ago, people thought
                    rocks could only fall to the ground and nothing more. Today,
                    geologists confirm that rocks can sink hundreds of
                    kilometers below the surface through a process called
                    subduction.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Tectonic Plates Can Sink Deep Underground
                    </h3>
                    <p>
                      Modern geology has discovered that Earth's crust consists
                      of plates that can sink (subduct) beneath one another,
                      carrying surface rocks and water hundreds of kilometers
                      into the mantle. This process, completely unknown in the
                      7th century, reshapes our planet's surface over millions
                      of years.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Mountain className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Himalayan
                      Mountain Roots
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Depth of Himalayan Mountain Roots Revealed: The larger
                      Asian plate forced the Indian plate deep into the mantle -
                      a process called subduction - sinking it at least 155
                      miles (250 kilometers) down under the surface, a new study
                      in the May edition of the journal Geology suggests. This
                      plunge is double the depth of previous estimates."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        Live Science, Depth of Himalayan Mountain Roots
                        Revealed, 2010
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800 mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Water in
                      Earth's Mantle
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "There's as much water in Earth's mantle as in all the
                      oceans. The deep Earth holds about the same amount of
                      water as our oceans. That's the conclusion from
                      experiments on rocks typical of those in the mantle
                      transition zone, a global buffer layer 410 to 660
                      kilometers beneath us that separates the upper from the
                      lower mantle. 'If our estimation is correct, it means
                      there's a large amount of water in the deep Earth,' says
                      Hongzhan Fei at the University of Bayreuth in Germany.
                      'The total amount of water in the deep Earth is nearly the
                      same as the mass of all the world's ocean water.'
                      <br />
                      <br />
                      The results add to mounting evidence that there is much
                      more water than expected beneath us, mostly locked up
                      within the crystals of minerals as ions rather than liquid
                      water."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        New Scientist, There's as much water in Earth's mantle
                        as in all the oceans, 2017
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <ArrowDown size={16} className="text-blue-500" />{" "}
                        Subduction Process
                      </h3>
                      <p>
                        Subduction occurs when one tectonic plate moves under
                        another and sinks into the mantle. This process can
                        carry rocks from the surface down to depths of 400+
                        kilometers below Earth's surface.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-blue-500" /> Water
                        Transport
                      </h3>
                      <p>
                        Water is carried deep into Earth's mantle within
                        subducting rocks. At extreme depths and pressures, this
                        water exists not as liquid but as ions within mineral
                        structures.
                      </p>
                    </div>
                  </div>

                  <p>
                    The high pressure at these depths transforms both rocks and
                    water. Recent discoveries have shown that rocks from the
                    surface can sink more than 400 km beneath Earth's surface,
                    carrying water with them—knowledge that was completely
                    unavailable in the 7th century.
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
                        href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/74"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:74
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then after that your hearts hardened like rocks, or
                          even harder. For there are some rocks from which
                          rivers gush out, and from them that crack and water
                          comes out from them, and from them that descend in awe
                          of Allah. Allah is not unaware of what you do."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧٤ ثُمَّ قَسَتْ قُلُوبُكُمْ مِنْ بَعْدِ ذَٰلِكَ فَهِيَ
                          كَالْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةً ۚ وَإِنَّ مِنَ
                          الْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ الْأَنْهَارُ ۚ
                          وَإِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ
                          الْمَاءُ ۚ وَإِنَّ مِنْهَا لَمَا يَهْبِطُ مِنْ
                          خَشْيَةِ اللَّهِ ۗ وَمَا اللَّهُ بِغَافِلٍ عَمَّا
                          تَعْمَلُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "And from them that descend in awe of Allah" (وَإِنَّ
                      مِنْهَا لَمَا يَهْبِطُ مِنْ خَشْيَةِ اللَّهِ). Here the
                      rocks are described as "descending" or "going down" below
                      the surface.
                    </p>
                    <p className="mt-3">
                      Notably, the Quran doesn't specifically mention "rocks" or
                      "water" in this part of the verse, which aligns with
                      modern understanding that at such depths, rocks break down
                      and water exists not as liquid but as ions within
                      minerals. If the Quran had stated that rocks remain intact
                      during this descent, it would have contradicted what we
                      now know about subduction.
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
                    The correlation between modern geological discoveries and
                    the Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      subduction?
                    </h3>
                    <p>
                      The process of subduction—where rocks sink hundreds of
                      kilometers beneath Earth's surface—is a concept that
                      requires advanced scientific knowledge and technology to
                      discover and understand. This geological phenomenon was
                      completely unknown in the 7th century, when people
                      believed rocks simply fell to the ground and remained
                      there.
                    </p>
                  </div>

                  <p>
                    The Quranic description of rocks "descending" appears to
                    align with what we know today about tectonic plate
                    subduction. Not only does it describe rocks sinking below
                    the surface, but it also does so without claiming these
                    rocks remain intact at depth—consistent with our
                    understanding that extreme pressures transform both rocks
                    and water at these depths. This correlation between an
                    ancient text and modern geological discoveries invites
                    reflection on the origins of such knowledge.
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
            <Sparkles className="text-indigo-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Earth's Dynamic Systems
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The secrets of our planet continue to emerge, creating fascinating
            connections between ancient texts and modern scientific discoveries.
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

export default SubductionPage;
