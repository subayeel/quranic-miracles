/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet, // Represents water/salinity
  ChevronRight,
  Layers, // Represents stratification
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming these are available via shadcn/ui
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming these are available via shadcn/ui
import { Badge } from "@/components/ui/badge"; // Assuming these are available via shadcn/ui

// Define TypeScript interface for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const HaloclinePhenomenon: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Barrier Between Seas",
        icon: Droplet,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-500",
      },
      {
        id: "science",
        title: "Scientific Explanation",
        icon: Layers,
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
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-800 dark:from-cyan-800 dark:to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Halocline</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            Oceanography - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-cyan-700 hover:bg-cyan-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-cyan-700 border-white hover:bg-white/10"
              onClick={() => scrollToSection("intro")}
            >
              Learn About It
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
                    Explore the layers of the sea
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
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <Droplet className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>Barrier Between Seas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran describes a remarkable phenomenon: a barrier
                    between two seas with different salinities. At first glance,
                    one might think that two bodies of water would simply mix.
                    However, modern science reveals a fascinating reality that
                    echoes this ancient description.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3">
                      Skepticism vs. Scientific Discovery
                    </h3>
                    <p>
                      Skeptics have questioned the Quran's claim, assuming such
                      seas must inevitably mix. Yet, oceanographers have
                      discovered specific conditions where distinct bodies of
                      water, even meeting, maintain their separation due to
                      differences in their properties.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Layers className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Explanation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Layers size={16} className="text-blue-500" /> Water
                      Stratification
                    </h3>
                    <p>
                      The ocean is not uniform! Differences in density,
                      temperature, salinity, and even CO2 concentrations cause
                      water bodies to separate into distinct layers. This
                      layering is known as water stratification.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Droplet size={16} className="text-blue-500" /> The
                      Halocline
                    </h3>
                    <p>
                      Within this stratification, a particularly strong vertical
                      salinity gradient can create a distinct layer called a
                      halocline. This layer acts as a significant barrier,
                      preventing the waters above and below it, which have
                      different salinities (and thus different densities), from
                      easily mixing.
                    </p>
                    <p className="mt-3 italic text-gray-700 dark:text-gray-300">
                      Oceanographers have observed this phenomenon in various
                      places, including the Arctic Ocean, where a thick
                      halocline layer effectively separates freshwater from
                      saltier water below.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Definition
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Halocline
                      <br />
                      In oceanography, a halocline is a subtype of chemocline,
                      caused by a strong vertical salinity gradient within a
                      body of water. Because salinity (in concert with
                      temperature) affects the density of seawater, it can play
                      a role in its vertical stratification."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Halocline" // Placeholder link, verify actual source if needed
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Halocline, 2018
                      </a>
                    </div>
                  </div>

                  <p>
                    A halocline provides a scientific explanation for how two
                    bodies of water with different salinities can meet but
                    remain significantly separated, behaving as if there is an
                    invisible barrier between them. This phenomenon, while
                    understood today, was unknown to people in the 7th century.
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
                        href="https://quran.com/25/53" // Link to Quran 25:53
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 25:53
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "And it is He who merged the two seas; this one fresh
                          and pure, and that one salty and bitter; and He placed
                          between them a barrier and a boundary."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg leading-relaxed">
                        <p dir="rtl">
                          ٥٣ وَهُوَ الَّذِي مَرَجَ الْبَحْرَيْنِ هَٰذَا عَذْبٌ
                          فُرَاتٌ وَهَٰذَا مِلْحٌ أُجَاجٌ وَجَعَلَ بَيْنَهُمَا
                          بَرْزَخًا وَحِجْرًا مَحْجُورًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Words
                    </Badge>
                    <p className="mt-3">
                      The verse speaks of two different types of water meeting
                      ("merged the two seas") – one fresh and pure, the other
                      salty and bitter – and mentions that Allah "placed between
                      them a barrier and a boundary (بَرْزَخًا وَحِجْرًا
                      مَحْجُورًا)". This description aligns remarkably with the
                      scientific phenomenon of a halocline, which acts as a
                      barrier between water bodies of differing salinities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <HelpCircle className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific understanding of haloclines and
                    water stratification, a profound question arises when
                    looking at the Quranic verse:
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living in the 7th century, with no
                      access to modern oceanographic tools or knowledge,
                      describe the barrier effect between bodies of water with
                      different salinities?
                    </h3>
                    <p>
                      The existence of haloclines, particularly the way they
                      maintain separation between waters of varying salt
                      content, is a detail confirmed by modern oceanography.
                      This intricate understanding of how seas "merge" yet
                      remain distinct was beyond the scientific grasp of the 7th
                      century. The Quran's description, written at a time when
                      such phenomena were entirely unknown, is seen by believers
                      as one of the many signs pointing to a divine source of
                      knowledge.
                    </p>
                  </div>

                  <p>
                    This connection between ancient scripture and modern
                    discovery invites us to reflect on the depth and potential
                    origins of the knowledge contained within the Quran. It
                    presents a compelling harmony between faith and the findings
                    of science, centuries apart.
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
            <Sparkles className="text-cyan-600 dark:text-cyan-400" size={18} />
            <h3 className="text-lg font-medium">
              Exploring the Miracles in the Seas
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of our oceans continue to reveal harmony between ancient
            texts and modern scientific understanding.
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

export default HaloclinePhenomenon;
