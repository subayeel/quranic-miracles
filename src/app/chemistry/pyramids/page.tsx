/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Building,
  ChevronRight,
  Microscope,
  BookOpen,
  HelpCircle,
  Quote,
  Sparkles,
  ArrowUp,
  Palette, // Icon for material/clay
  FlaskConical, // Icon for chemistry
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

// Define interface for content sections
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const PyramidsMiracle: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Ancient Wonders, Modern Science",
        icon: Building,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "science",
        title: "Scientific Discoveries",
        icon: Microscope,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "reflection",
        title: "Contemplating the Knowledge",
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
      <div className="bg-gradient-to-r from-yellow-600 to-amber-800 dark:from-yellow-800 dark:to-amber-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Building className="text-yellow-200" size={32} />
            <h1 className="text-4xl font-bold">The Pyramids</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">
            An Ancient Mystery Meets Modern Science
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-amber-800 hover:bg-yellow-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-amber-800"
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
                    Explore the construction of the Pyramids
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
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Building className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Ancient Wonders, Modern Science</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    For centuries, it was widely believed that the Great
                    Pyramids of Giza were constructed entirely from massive
                    limestone blocks, painstakingly quarried, transported, and
                    chiseled by hand. This feat of engineering was considered
                    one of the world's most astounding achievements.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Traditional View Challenged
                    </h3>
                    <p>
                      The traditional view held that immense blocks, some
                      weighing up to 70 tons, were cut from quarries using
                      chisels and then hauled up the pyramid structure using
                      complex ramp systems. This perspective emphasized the
                      sheer manual labor and organizational power of the ancient
                      Egyptians.
                    </p>
                  </div>
                  <p>
                    However, modern scientific analysis has begun to reveal a
                    more nuanced picture, particularly regarding the materials
                    used in the upper portions of these monumental structures.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Microscope className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Scientific Discoveries</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Recent scientific investigations utilizing advanced
                    technology have provided fascinating insights into the
                    composition of the pyramid blocks, especially those found in
                    the upper levels.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> Electron
                      Microscopy Reveals Secrets
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Professor Michel Barsoum, Distinguished Professor... at
                      Drexel University, and colleagues have found scientific
                      evidence that parts of the Great Pyramids of Giza were
                      built using an early form of concrete, debunking an age
                      old myth that they were built using only cut limestone
                      blocks."
                      <br />
                      <span className="text-sm block mt-2">
                        Drexel University College of Engineering, Engineering
                        the Pyramids Special Project, 2025
                      </span>
                    </p>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-4">
                      "They found that the tiniest structures within the inner
                      and outer casing stones were indeed consistent with a
                      reconstituted limestone. The cement binding the limestone
                      aggregate was either silicon dioxide... or a calcium and
                      magnesium-rich silicate mineral... The sample chemistries
                      the researchers found do not exist anywhere in nature.
                      'Therefore,' Barsoum said, 'it's very improbable that the
                      outer and inner casing stones that we examined were
                      chiseled from a natural limestone block.'"
                      <br />
                      <span className="text-sm block mt-2">
                        <a
                          href="https://www.livescience.com/5533-surprising-truth-great-pyramids-built.html"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Science, The Surprising Truth About How the Great
                          Pyramids Were Built, 2007
                        </a>
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <FlaskConical size={16} className="text-indigo-500" />{" "}
                        Unnatural Chemistry
                      </h3>
                      <p>
                        Electron microscopes revealed that the chemical
                        composition of blocks, particularly in the upper parts,
                        is inconsistent with natural limestone. They contain
                        elements and structures, like silicon dioxide nanoscale
                        spheres, not found in quarried rock from the Giza
                        plateau.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Palette size={16} className="text-indigo-500" /> Baked
                        and Cast Material
                      </h3>
                      <p>
                        This evidence strongly suggests that these specific
                        blocks, particularly those harder to lift higher up,
                        were created using a form of ancient concrete or
                        geopolymer – essentially baked clay or reconstituted
                        limestone that was cast into shape, much like modern
                        cement.
                      </p>
                    </div>
                  </div>

                  <p>
                    So, contrary to the age-old belief, it seems the Egyptians
                    utilized sophisticated techniques involving baked and cast
                    materials for certain sections of the pyramids, a fact only
                    confirmed relatively recently by advanced scientific
                    methods.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Quranic Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Interestingly, the Quran contains a verse referencing
                    Pharaoh's command to build a tall structure using baked
                    clay.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/28/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/38"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 28:38
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And Pharaoh said, 'O chiefs, I have not known for you
                          any deity other than Me, so ignite for me, O Haman, [a
                          fire] upon the clay that I might construct a tower
                          that I may look upon the deity of Moses. And indeed, I
                          think he is of the liars.'"
                          <br />
                          <span className="text-sm">
                            (Translation: Sahih International)
                          </span>
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٨ وَقَالَ فِرْعَوْنُ يَا أَيُّهَا الْمَلَأُ مَا
                          عَلِمْتُ لَكُمْ مِنْ إِلَٰهٍ غَيْرِي فَأَوْقِدْ لِي
                          يَا هَامَانُ عَلَى الطِّينِ فَاجْعَلْ لِي صَرْحًا
                          لَعَلِّي أَطَّلِعُ إِلَىٰ إِلَٰهِ مُوسَىٰ وَإِنِّي
                          لَأَظُنُّهُ مِنَ الْكَاذِبِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "فَأَوْقِدْ لِي يَا هَامَانُ عَلَى الطِّينِ"
                      (fa awqid lī yā Hāmān ʻala al-ṭīn) translates to "so
                      ignite for me, O Haman, [a fire] upon the clay". This
                      directly refers to the process of using fire to harden
                      clay, which is how materials like bricks or cement
                      (reconstituted stone) are made.
                    </p>
                  </div>
                  <p>
                    While this verse speaks of building a 'tower' (صَرْحًا -
                    sarḥan, which can mean a lofty structure, a palace, or a
                    tower), the reference to using fire on clay aligns
                    remarkably with the modern scientific finding that parts of
                    the pyramids, which are undoubtedly lofty structures from
                    Pharaoh's era, were constructed using baked clay material,
                    not just quarried stone.
                  </p>
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
                    <CardTitle>Contemplating the Knowledge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This confluence of ancient scripture and recent scientific
                    discovery presents a thought-provoking point for reflection:
                  </p>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could knowledge about the specific construction
                      techniques of the pyramids, particularly the use of baked
                      clay material in upper sections, be present in the Quran,
                      which was revealed in the 7th century?
                    </h3>
                    <p>
                      In the 7th century CE, the detailed methods and materials
                      used in the construction of the Great Pyramids were not
                      common knowledge, certainly not the intricate details
                      about the chemical composition of the blocks or the use of
                      early forms of concrete or geopolymers. The prevailing
                      understanding was based on the visible, massive stone
                      blocks.
                    </p>
                  </div>

                  <p>
                    The Quran's mention of Pharaoh instructing the use of "baked
                    clay" for building a high structure, a detail now supported
                    by electron microscopy revealing baked, cast materials in
                    the pyramids, is seen by many as a remarkable correlation
                    between a 7th-century text and 21st-century science. It
                    invites us to ponder the source of this knowledge.
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
            <Sparkles className="text-yellow-500" size={18} />
            <h3 className="text-lg font-medium">Echoes from Ancient Egypt</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the fascinating intersection of history, science, and
            scripture.
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

export default PyramidsMiracle;
