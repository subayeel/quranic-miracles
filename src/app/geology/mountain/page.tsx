/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain,
  ChevronRight,
  Layers,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowDown,
  ArrowUp,
  Sparkles,
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

type SectionContent = {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  iconColor: string;
};

const Mountains = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Mountains Have Roots",
        icon: Mountain,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Layers,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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
      <div className="bg-gradient-to-r from-emerald-600 to-teal-800 dark:from-emerald-800 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="text-emerald-200" size={32} />
            <h1 className="text-4xl font-bold">Mountains</h1>
          </div>
          <p className="text-xl max-w-2xl text-emerald-100">
            Geology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-emerald-700 hover:bg-emerald-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-emerald-100 border-emerald-100 hover:bg-emerald-700"
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
                    Explore Earth's mountain structures
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
              <Card className="border-l-4 border-emerald-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <Mountain className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>Mountains Have Roots</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran mountains have roots. Skeptics claim that
                    whoever wrote the Quran made a mistake; mountains have no
                    roots. Today geologists confirm that mountains have roots.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-bold text-lg mb-3">
                      Mountains Extend Deep Into the Earth
                    </h3>
                    <p>
                      Modern geological research has confirmed that mountains
                      are not simply surface formations - they extend deep below
                      the Earth's crust, much like icebergs in water. What we
                      see above ground is only a small portion of their total
                      structure.
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
                      <Layers className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Confirmation
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
                      <a
                        href="https://www.livescience.com/6579-depth-himalayan-mountain-roots-revealed.html"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Science, Depth of Himalayan Mountain Roots
                        Revealed, 2010
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <ArrowDown size={16} className="text-blue-500" /> Deep
                        Roots
                      </h3>
                      <p>
                        Mount Everest, standing at 8.8 km above sea level, has
                        roots extending approximately 250 km deep into the
                        Earth's mantle. This subterranean structure helps
                        stabilize the mountain above.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Layers size={16} className="text-gray-500" /> Isostatic
                        Balance
                      </h3>
                      <p>
                        The principle of isostasy explains that mountains
                        "float" on denser mantle material, requiring deep roots
                        to maintain equilibrium - like icebergs in water with
                        much of their mass below the surface.
                      </p>
                    </div>
                  </div>

                  <p>
                    The concept of mountain roots was a relatively recent
                    discovery in geological science. The greatest depths were
                    only confirmed in recent decades with advanced seismic
                    imaging technology. However, the Quran referred to this
                    phenomenon 1400 years ago.
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
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/78/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/7"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 78:7
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the mountains as pegs"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">٧ وَالْجِبَالَ أَوْتَادًا</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Key Metaphor
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "awtādan" (أَوْتَادًا) translates to
                      "pegs" or "stakes" - the type used to anchor tents. This
                      is a remarkably apt metaphor, as pegs have a visible
                      portion above ground and a longer portion below ground
                      that provides stability and anchorage.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 mt-4 rounded-lg">
                      <h4 className="font-medium">The Peg Analogy</h4>
                      <p>
                        Just as a tent peg's function depends on having
                        substantial parts embedded in the earth, mountains
                        stabilize the Earth's crust because they extend deeply
                        into the mantle below. This description accurately
                        reflects what modern geology has discovered about
                        mountain formation and structure.
                      </p>
                    </div>
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
                    The correlation between modern geological findings and the
                    Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about mountain roots?
                    </h3>
                    <p>
                      In 7th century Arabia, there was no possibility of
                      understanding the deep structures of mountains. The
                      technology to discover and verify the existence of
                      mountain roots - which extend far deeper than their
                      visible height - only became available in the 20th century
                      with advanced seismic imaging and geological research.
                    </p>
                  </div>

                  <p>
                    The Quranic description of mountains as pegs, with parts
                    visible above ground and parts extending below, aligns
                    precisely with modern geological understanding. This
                    knowledge would have been inaccessible to anyone in the 7th
                    century desert environment of Arabia, regardless of
                    education or travel experience.
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
            <Sparkles className="text-emerald-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Earth's Magnificent Structures
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The hidden architecture of our planet continues to reveal its
            secrets, connecting ancient texts with modern scientific
            discoveries.
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

export default Mountains;
