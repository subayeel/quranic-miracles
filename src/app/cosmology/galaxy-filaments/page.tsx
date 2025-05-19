/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Network, // Icon for structure/connection
  ChevronRight,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Maximize, // Icon for large scale
  Atom,
  Quote, // Could represent fundamental structure
} from "lucide-react"; // Using icons from lucide-react

import { Button } from "@/components/ui/button"; // Assuming Shadcn UI components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define TypeScript interface for content sections
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind color class for background
  iconColor: string; // Tailwind color class for icon color
}

const GalaxyFilaments: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Cosmic Web",
        icon: Sparkles,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Modern Discovery",
        icon: Maximize,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "reflection",
        title: "Contemplation",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Using amber for reflection as before
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
  }, [contents]); // Depend on contents

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update state immediately for faster visual feedback
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Network className="text-purple-300" size={32} />
            <h1 className="text-4xl font-bold">Galaxy Filaments</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Cosmic Structures - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-100 hover:bg-indigo-800 hover:text-white"
              onClick={() => scrollToSection("intro")}
            >
              What Are They?
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
                    Explore the universe's largest structures
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
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Sparkles className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Cosmic Web</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For most of human history, the universe beyond what the
                    naked eye could see was a mystery. In the 7th century, the
                    concept of structures vastly larger than our own galaxy was
                    unimaginable. People generally perceived the sky as a kind
                    of dome or ceiling.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Universe: Then vs. Now
                    </h3>
                    <p>
                      In the 7th century, understanding of the cosmos was
                      limited. The idea that countless other galaxies existed,
                      let alone that they organized themselves into colossal
                      structures spanning hundreds of millions of light-years,
                      was far beyond the scientific or observational
                      capabilities of the time. Our modern view, however, is
                      dramatically different.
                    </p>
                  </div>
                  <p>
                    Today, advanced telescopes and cosmological studies reveal a
                    universe on a truly grand scale. We now know that billions
                    of galaxies exist, and they aren't scattered randomly.
                    Instead, they form an intricate, vast structure known as the
                    "cosmic web."
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Maximize className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Modern Discovery: Galaxy Filaments</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Through sophisticated astronomical observations and
                    simulations, scientists have mapped the large-scale
                    structure of the universe. This map reveals a fascinating
                    pattern: galaxies are concentrated in dense clusters and
                    walls, interconnected by long, thin structures.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> Scientific
                      Definition
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In physical cosmology, galaxy filaments (subtypes:
                      supercluster complexes, galaxy walls, and galaxy sheets)
                      are the largest known structures in the universe. They are
                      massive, thread-like formations, with a typical length of
                      50 to 80 megaparsecs h−1 (or of the order of 200 to 500
                      million light-years) that form the boundaries between
                      large voids in the universe. Filaments consist of
                      gravitationally bound galaxies."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Galaxy_filament"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Galaxy Filament, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Network size={16} className="text-teal-500" />{" "}
                        Interconnected Structure
                      </h3>
                      <p>
                        These filaments are not random collections but vast,
                        organized structures that connect superclusters of
                        galaxies, forming a network across the universe.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Atom size={16} className="text-gray-500" /> Gravity's
                        Role
                      </h3>
                      <p>
                        Gravity is the architect of these colossal formations,
                        pulling galaxies together into these filamentary and
                        web-like arrangements.
                      </p>
                    </div>
                  </div>

                  <p>
                    These galaxy filaments, along with clusters, walls, and the
                    vast empty regions known as voids, make up what is called
                    the "cosmic web"—the large-scale structure of the universe.
                    Discovering and mapping this structure is a triumph of
                    modern astronomy, relying on sophisticated technology
                    developed in recent times.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <BookOpen className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>The Quranic Perspective</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the limited understanding of the universe in the
                    7th century, it's remarkable to find descriptions in the
                    Quran that resonate with modern cosmological discoveries.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/22" // Example link, verify if needed
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:22
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "He who made the earth a habitat for you, and the sky
                          a structure, and sends water down from the sky, and
                          brings out fruits thereby, as a sustenance for you.
                          Therefore, do not assign rivals to Allah while you
                          know."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٢ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا
                          وَالسَّمَاءَ بِنَاءً وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً
                          فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَكُمْ ۖ
                          فَلَا تَجْعَلُوا لِلَّهِ أَنْدَادًا وَأَنْتُمْ
                          تَعْلَمُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                      Key Term
                    </Badge>
                    <p className="mt-3">
                      The word used for "sky" in this verse is "السَّمَاءَ"
                      (al-sama), and the word translated as "structure" is
                      "بِنَاءً" (Bina-e). The term "Bina" in Arabic implies a
                      built structure, something constructed and organized, not
                      just an empty expanse.
                    </p>
                    <p className="mt-3">
                      While historically, "sky" might have been interpreted as
                      the visible atmosphere or celestial sphere, applying the
                      term "structure" (`Bina-e`) to the vastness above takes on
                      a profound new meaning in light of modern cosmology's
                      discovery of the universe's intricate, structured cosmic
                      web of galaxy filaments and superclusters.
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
                    <CardTitle>Reflecting on the Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This convergence between ancient scripture and contemporary
                    scientific findings presents a compelling point for
                    contemplation:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this understanding of the sky/universe as a
                      complex "structure" be present in a text revealed 1400
                      years ago?
                    </h3>
                    <p>
                      The knowledge that the universe is not merely empty space
                      with scattered stars, but a vast, organized "structure"
                      ("Bina-e") comprised of billions of galaxies forming
                      immense filaments and walls – a fact only recently
                      confirmed through sophisticated technology – raises
                      questions about the origin of such information in the 7th
                      century. It invites us to ponder whether these alignments
                      point to a source of knowledge beyond human observation at
                      that time.
                    </p>
                  </div>

                  <p>
                    The Quranic description, in its simplicity, uses a term that
                    remarkably aligns with the large-scale structural
                    organization of the cosmos discovered by modern science.
                    This unexpected correlation serves as a reminder of the
                    vastness of the universe and the potential depth of meaning
                    found within ancient texts when viewed through the lens of
                    new knowledge.
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
              Exploring the Cosmic Structure
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting ancient insights with modern discoveries about the
            universe's grand design.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GalaxyFilaments;
