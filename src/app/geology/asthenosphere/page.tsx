/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain, // Using Mountain icon for the topic
  ChevronRight,
  Layers, // Icon for structure/layers
  BookOpen,
  HelpCircle,
  Sparkles,
  ArrowUp,
  Ruler, // Icon for measurement/depth
  Quote, // Icon for quotes
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

// Define a type for the content structure
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind class for background color
  iconColor: string; // Tailwind class for icon color
}

const AsthenospherePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content structure using the defined type
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Earth's Floating Crust",
        icon: Layers,
        color: "bg-yellow-100 dark:bg-yellow-900", // Earthy/Molten theme
        iconColor: "text-yellow-600",
      },
      {
        id: "science",
        title: "Scientific Discovery",
        icon: Ruler,
        color: "bg-blue-100 dark:bg-blue-900", // Science/Analysis theme
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Quran theme
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Connecting Ancient & Modern",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Reflection theme
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

    // Get current refs for cleanup
    const currentRefs = sectionRefs.current;

    // Observe all section elements based on the contents array
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    // Clean up observer
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Depend on contents array

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
      <div className="bg-gradient-to-r from-yellow-600 to-amber-700 dark:from-yellow-800 dark:to-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">Asthenosphere</h1>
          </div>
          <p className="text-xl max-w-2xl text-yellow-100">
            Geology - Earth's Molten Layer
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-yellow-700 hover:bg-yellow-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
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
                    Explore Earth's deep structure
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
              <Card className="border-l-4 border-yellow-600">
                {" "}
                {/* Earthy color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Layers className="text-yellow-600" size={24} />
                    </div>
                    <CardTitle>Earth's Floating Crust</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Did you know that the solid ground we stand on, the Earth's
                    crust and upper mantle (the lithosphere), doesn't just sit
                    on something solid all the way down? It actually floats on a
                    partially molten, weaker layer deep inside our planet!
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Hidden Layer Beneath
                    </h3>
                    <p>
                      This incredible fact about Earth's internal structure was
                      completely unknown to humans until relatively modern
                      times, requiring advanced seismological studies to
                      discover. Understanding this layer helps explain
                      earthquakes, volcanoes, and the movement of continents.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                {" "}
                {/* Science theme color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Ruler className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>
                      Scientific Discovery: The Asthenosphere
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Modern
                      Geology explains:
                    </h3>
                    {/* Text directly from the provided reference */}
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The asthenosphere is the highly viscous, mechanically
                      weak and ductilely deforming region of the upper mantle of
                      the Earth. It lies below the lithosphere, at depths
                      between approximately 80 and 200 km (50 and 120 miles)
                      below the surface... The upper part of the asthenosphere
                      is believed to be the zone upon which the great rigid and
                      brittle lithospheric plates of the Earth's crust move
                      about. Due to the temperature and pressure conditions in
                      the asthenosphere, rock becomes ductile, moving at rates
                      of deformation measured in cm/yr over lineal distances
                      eventually measuring thousands of kilometers. In this way,
                      it flows like a convection current, radiating heat outward
                      from the Earth's interior. Above the asthenosphere, at the
                      same rate of deformation, rock behaves elastically and,
                      being brittle, can break, causing faults. The rigid
                      lithosphere is thought to "float" or move about on the
                      slowly flowing asthenosphere, allowing the movement of
                      tectonic plates."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Asthenosphere" // Using the provided source
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Asthenosphere, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Layers size={16} className="text-blue-500" /> A
                        Different Kind of Layer
                      </h3>
                      <p>
                        Unlike the rigid lithosphere above it, the asthenosphere
                        is ductile. Think of it less like solid rock and more
                        like very thick, slow-moving tar over geological
                        timescales.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain size={16} className="text-yellow-600" />{" "}
                        Mountains Have Roots
                      </h3>
                      <p>
                        The rigid lithosphere, which includes the continents and
                        ocean floors with their mountains, essentially "floats"
                        on this deformable asthenosphere. The deep "roots" of
                        mountains extend down into the lithosphere, connected to
                        this floating plate.
                      </p>
                    </div>
                  </div>

                  <p>
                    Understanding the asthenosphere was a breakthrough in
                    geology, explaining how tectonic plates move and why we have
                    features like mountains and ocean trenches. This knowledge
                    relies on sophisticated modern techniques like seismology.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                {" "}
                {/* Quran theme color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/79/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/32" // Link to the verse
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 79:32
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the mountains He anchored."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">٣٢ وَالْجِبَالَ أَرْسَاهَا</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Understanding "Arsaha"
                    </Badge>
                    <p className="mt-3">
                      The key Arabic word here is "Arsaha" (أَرْسَاهَا), which
                      comes from the root R-S-Y (ر س و). This word is often used
                      to describe *anchoring* a ship in water – essentially
                      fixing it in place by dropping an anchor into the water
                      below, while the ship itself *floats* on the surface.
                    </p>
                    <p className="mt-3">
                      Connecting this to mountains might seem unusual at first
                      glance, as mountains are typically thought of as rigid,
                      immovable structures on solid ground. However, considering
                      the modern geological understanding of the asthenosphere
                      and the lithosphere floating above it, the analogy of
                      "anchoring" starts to make remarkable sense. The rigid
                      tectonic plates, bearing the mountains, are indeed like
                      massive ships, and their "anchors" (the deep roots of
                      mountains/lithosphere) extend into the layer below (the
                      asthenosphere), which behaves fluidly over long periods,
                      allowing the plates to effectively "float" and move.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                {" "}
                {/* Reflection theme color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>
                      Connecting Ancient and Modern Knowledge
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This fascinating connection between the Quranic description
                    and modern geology leads us to ponder:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century know that mountains,
                      part of the rigid crust, are anchored on a deeper,
                      fluid-like layer, using an analogy (`Arsaha`) typically
                      applied to ships floating on water?
                    </h3>
                    <p>
                      In the 7th century, scientific understanding of Earth's
                      deep interior was non-existent. The idea that mountains
                      are not just static piles of rock but are connected to
                      massive plates that float and move on a semi-molten layer
                      deep below the surface was utterly beyond human capacity
                      to observe or deduce with the tools available at the time.
                    </p>
                    <p className="mt-3">
                      The Quran's description, using the word "anchored,"
                      provides a remarkably fitting analogy for how these
                      immense structures behave in relation to the
                      asthenosphere, a layer discovered only many centuries
                      later through advanced scientific methods. This
                      correspondence invites thoughtful consideration.
                    </p>
                  </div>
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
            <Sparkles className="text-yellow-600" size={18} />{" "}
            {/* Use earthy color for spark */}
            <h3 className="text-lg font-medium">Exploring Earth's Mysteries</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders within our planet continue to reveal profound
            connections across time and knowledge.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AsthenospherePage;
