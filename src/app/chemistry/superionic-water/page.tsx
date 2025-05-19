/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet, // Represents water
  ChevronRight,
  GlassWater, // Represents science/experimentation
  BookOpen, // Represents the Quran
  Sparkles, // Represents wonder/miracle
  ArrowUp,
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

// Define the structure for section content
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind background color class for icon container/border
  iconColor: string; // Tailwind text color class for icon
}

const SuperionicWater: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  // Using a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections using useMemo for stability
  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Water's Hidden Nature",
        icon: Droplet,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Discovering Superionic Water",
        icon: GlassWater,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-500",
      },
      {
        id: "quran",
        title: "A Striking Description",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Point of Wonder",
        icon: Sparkles,
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
      threshold: 0.3, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all section elements specified in contents
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = sectionRefs.current[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Re-run effect if contents change (though useMemo prevents this)

  // Function to scroll to a specific section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update active section immediately on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-700 dark:from-blue-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="text-cyan-200" size={32} />
            <h1 className="text-4xl font-bold">Superionic Water</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Exploring Water's Extreme States
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700 border-white hover:bg-blue-50"
              onClick={() => scrollToSection("intro")}
            >
              Introduction
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
                    Explore water's surprising forms
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
                      <Droplet className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Water's Hidden Nature</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    We usually think of water as the clear, life-giving liquid
                    that flows in rivers and oceans. For much of history, people
                    believed water was simply transparent. However, modern
                    science has revealed that under extreme conditions, water
                    can take on surprising forms and characteristics, including
                    a very different appearance.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Beyond the Ordinary
                    </h3>
                    <p>
                      While liquid water and ice are familiar, the water
                      molecule (H₂O) can behave in extraordinary ways under
                      conditions far removed from Earth's surface, such as
                      immense pressures and temperatures found deep within
                      planets.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <GlassWater className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>Discovering Superionic Water</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      Scientific Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Superionic water, also called superionic ice or ice XVIII
                      is a phase of water that exists at extremely high
                      temperatures and pressures. In superionic water, water
                      molecules break apart and the oxygen ions crystallize into
                      an evenly spaced lattice while the hydrogen ions float
                      around freely within the oxygen lattice. The freely mobile
                      hydrogen ions make superionic water almost as conductive
                      as typical metals... In May 2019, scientists at the
                      Laboratory for Laser Energetics were able to create
                      superionic ice in a laboratory, confirming it to be almost
                      four times as dense as normal ice and{" "}
                      <span className="font-bold text-cyan-800 dark:text-cyan-200">
                        black in color
                      </span>
                      . Superionic water is theorized to be present in the
                      mantles of giant planets such as Uranus and Neptune."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Superionic_water" // Updated link
                        className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Superionic Water, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    This remarkable state of water, known as superionic water or
                    ice XVIII, was only definitively confirmed in laboratory
                    experiments relatively recently (experimental evidence from
                    the 1990s, crystal structure confirmation in 2019). It forms
                    under immense temperatures and pressures far exceeding those
                    on Earth's surface.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <GlassWater size={16} className="text-cyan-500" />{" "}
                        Extreme Conditions
                      </h3>
                      <p>
                        Superionic water exists at extremely high temperatures
                        and pressures, conditions found deep within giant
                        planets like Uranus and Neptune, not on Earth's surface.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplet size={16} className="text-cyan-500" />{" "}
                        Surprising Properties
                      </h3>
                      <p>
                        Unlike normal water or ice, superionic water is almost
                        four times denser than regular ice and, perhaps most
                        surprisingly, is{" "}
                        <span className="font-bold">black in color</span>.
                      </p>
                    </div>
                  </div>
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
                    <CardTitle>A Striking Description</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, consider a description found in the Quran, a book
                    revealed in the 7th century CE, over 1400 years ago.
                    Describing a scene from the Hereafter (specifically, the
                    state of the unjust in the Fire), it mentions the drink they
                    will be given:
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/18/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/29" // Updated link
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 18:29
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "...We have prepared for the unjust a Fire, whose
                          curtains will hem them in. And when they cry for
                          relief, they will be relieved with water{" "}
                          <span className="font-bold">like tar</span>, which
                          scalds the faces. What a miserable drink, and what a
                          terrible place."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٩ وَقُلِ الْحَقُّ مِنْ رَبِّكُمْ ۖ فَمَنْ شَاءَ
                          فَلْيُؤْمِنْ وَمَنْ شَاءَ فَلْيَكْفُرْ ۚ إِنَّا
                          أَعْتَدْنَا لِلظَّالِمِينَ نَارًا أَحَاطَ بِهِمْ
                          سُرَادِقُهَا ۚ وَإِنْ يَسْتَغِيثُوا يُغَاثُوا بِمَاءٍ
                          كَالْمُهْلِ يَشْوِي الْوُجُوهَ ۚ بِئْسَ الشَّرَابُ
                          وَسَاءَتْ مُرْتَفَقًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Word
                    </Badge>
                    <p className="mt-3">
                      The Arabic phrase "كَالْمُهْلِ" (kal-muhl) is used to
                      describe the water. The word "مُهْلِ" (muhl) is commonly
                      translated as "tar" or "molten metal." Tar is known to be
                      a black, viscous substance.
                    </p>
                  </div>

                  <p>
                    Connecting this description to the scientific discovery: at
                    extremely high temperatures and pressures, water becomes
                    superionic water, a state that is described by scientists as
                    being <span className="font-bold">black in color</span> and
                    notably different in viscosity from regular water. The
                    Quranic description of water in a condition of intense heat
                    ("Fire") as being "like tar" strikingly aligns with the
                    properties of superionic water under extreme heat and
                    pressure.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Sparkles className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>A Point of Wonder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This juxtaposition of a 7th-century description and a
                    21st-century scientific discovery leads us to a profound
                    question:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living over 1400 years ago have known
                      that water, under conditions of immense heat and pressure,
                      could turn black and viscous, resembling tar?
                    </h3>
                    <p>
                      The properties of superionic water were unknown and
                      undetectable with the technology available in the 7th
                      century. Yet, the Quran seems to describe a characteristic
                      of water in an extreme state that aligns remarkably with
                      modern scientific findings. This correlation is seen by
                      many as a testament to the divine origin of the Quran,
                      containing knowledge far beyond human understanding at the
                      time of its revelation.
                    </p>
                  </div>

                  <p>
                    It invites us to reflect on how such specific and accurate
                    information about the fundamental nature of a common
                    substance like water, under conditions unimaginable to the
                    people of that era, could be present in an ancient
                    scripture.
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
            <Droplet className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Water's Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The universe holds many secrets, and sometimes ancient texts seem to
            contain glimpses of truths science would only uncover millennia
            later.
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

export default SuperionicWater;
