/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Layers,
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  RotateCcw,
  ArrowUp,
  Sparkles,
  FileStack,
  Telescope,
  BrainCircuit,
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

// TypeScript interfaces
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

const SevenHeavens: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Dimensions Beyond",
        icon: Layers,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "darkMatter",
        title: "Dark Matter Evidence",
        icon: Telescope,
        color: "bg-violet-100 dark:bg-violet-900",
        iconColor: "text-violet-500",
      },
      {
        id: "quran",
        title: "Quranic References",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "strings",
        title: "String Theory",
        icon: BrainCircuit,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
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
      <div className="bg-gradient-to-r from-indigo-600 to-violet-800 dark:from-indigo-800 dark:to-violet-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <FileStack className="text-indigo-200" size={32} />
            <h1 className="text-4xl font-bold">Seven Heavens</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Cosmology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("darkMatter")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-200 hover:bg-indigo-700"
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
                    Explore dimensions and the multiverse
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
                    <CardTitle>Dimensions Beyond</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran describes the universe as having seven
                    superimposed heavens. Skeptics historically claimed this was
                    an outdated cosmological model, but remarkably, modern
                    physics now points to extra dimensions and parallel
                    universes that align with this ancient description.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Beyond Our Observable Universe
                    </h3>
                    <p>
                      According to string theory, our reality consists of more
                      than the four dimensions we perceive (time plus three
                      spatial dimensions). Instead, physicists propose the
                      existence of ten dimensions—with six additional spatial
                      dimensions that are imperceptible to our senses but
                      mathematically necessary to explain fundamental physics.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Dark Matter Evidence */}
            <section id="darkMatter" className="scroll-mt-20">
              <Card className="border-l-4 border-violet-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900">
                      <Telescope className="text-violet-500" size={24} />
                    </div>
                    <CardTitle>Dark Matter Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border border-violet-100 dark:border-violet-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-violet-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Astronomers have just confirmed the existence of Dark
                      Matter. This mysterious Dark Matter is invisible however
                      it provides the bulk of gravity that holds galaxies (not
                      the regular matter that forms stars and planets). This
                      invisible Dark Matter has weird collision properties
                      (collisionless). Simply put: we cannot see Dark Matter nor
                      collide with it but we can detect its gravity."
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <RotateCcw size={16} className="text-violet-500" />{" "}
                        Unusual Properties
                      </h3>
                      <p>
                        When massive clusters of dark matter collide, they pass
                        through each other without interacting—except through
                        gravity. This suggests dark matter exists in a different
                        dimensional framework than ordinary matter.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Telescope size={16} className="text-gray-500" />{" "}
                        Gravitational Lensing
                      </h3>
                      <p>
                        We can detect dark matter through gravitational
                        lensing—the bending of light around massive objects.
                        This evidence reveals invisible mass throughout the
                        universe that influences visible matter.
                      </p>
                    </div>
                  </div>

                  <p>
                    To explain dark matter's behavior, scientists are developing
                    theories involving extra dimensions—proposing that dark
                    matter may be normal matter existing in dimensions beyond
                    our perceptible reality. These particles might be "strings"
                    vibrating in dimensions we cannot see.
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
                    <CardTitle>Quranic References</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/41/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/12"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 41:12
                        </a>
                      </h3>
                      <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="md:w-1/2">
                          <p className="italic mb-4">
                            "So [Allah] decreed them as seven heavens (one above
                            the other) in two days and revealed to each heaven
                            its orders. And We [Allah] adorned the lowest heaven
                            with lights, and protection. Such is the decree of
                            the Exalted; the Knowledgeable."
                          </p>
                        </div>
                        <div className="md:w-1/2 font-arabic text-right text-lg">
                          <p dir="rtl">
                            فَقَضَاهُنَّ سَبْعَ سَمَاوَاتٍ فِي يَوْمَيْنِ
                            وَأَوْحَىٰ فِي كُلِّ سَمَاءٍ أَمْرَهَا ۚ وَزَيَّنَّا
                            السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَحِفْظًا ۚ
                            ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/65/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/12"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 65:12
                        </a>
                      </h3>
                      <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="md:w-1/2">
                          <p className="italic mb-4">
                            "Allah is the one who created seven Heavens and from
                            Earth like them (of corresponding type); [Allah's]
                            command descends among them so that you may know
                            that Allah is capable of anything and that Allah
                            knows everything."
                          </p>
                        </div>
                        <div className="md:w-1/2 font-arabic text-right text-lg">
                          <p dir="rtl">
                            اللَّهُ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ وَمِنَ
                            الْأَرْضِ مِثْلَهُنَّ يَتَنَزَّلُ الْأَمْرُ
                            بَيْنَهُنَّ لِتَعْلَمُوا أَنَّ اللَّهَ عَلَىٰ كُلِّ
                            شَيْءٍ قَدِيرٌ وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ
                            شَيْءٍ عِلْمًا
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Insights
                    </Badge>
                    <p className="mt-3">
                      The Quran describes seven superimposed heavens with our
                      observable universe ("the lowest heaven") being the only
                      one adorned with visible light. It further states that
                      there are corresponding worlds or "earths" in these other
                      heavens—suggesting parallel universes with their own
                      physical laws.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-4">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/81/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/15"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 81:15-16
                      </a>
                    </h3>

                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "I swear by those that are invisible, that move, that
                          sweep."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          فَلَا أُقْسِمُ بِالْخُنَّسِ
                          <br />
                          الْجَوَارِ الْكُنَّسِ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      This description remarkably mirrors the modern
                      understanding of dark matter—invisible entities that move
                      and influence ordinary matter through gravitational
                      effects.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* String Theory */}
            <section id="strings" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BrainCircuit className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>String Theory Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern string theory proposes that the fundamental building
                    blocks of the universe are not point-like particles but tiny
                    vibrating strings of energy. These strings require
                    additional dimensions beyond our observable four dimensions
                    to function mathematically.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Extra Dimensions in Physics
                    </h3>
                    <p>
                      String theory requires a total of 10 dimensions: time, our
                      three observable spatial dimensions (x, y, z), and six
                      additional spatial dimensions. These extra dimensions are
                      thought to be "compactified"—curled up at each point in
                      space, too small for direct observation but essential for
                      the mathematics of the universe to work.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">The Multiverse</h3>
                      <p>
                        Physicists now suggest we may live in a "multiverse"
                        rather than a "universe." These parallel realities would
                        be separated by dimensions we cannot directly perceive,
                        with gravity being the only force shared between them.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">
                        Dimensions as Heavens
                      </h3>
                      <p>
                        The concept of seven heavens in the Quran could be
                        interpreted as referring to these extra
                        dimensions—realms that exist but remain invisible to us,
                        interacting primarily through gravitational effects.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800 mt-6">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/51/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/7"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 51:7
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the heaven that has weaves."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">وَالسَّمَاءِ ذَاتِ الْحُبُكِ</p>
                      </div>
                    </div>
                    <p className="mt-4">
                      The Arabic term "Hubuk" refers to knots or
                      weaves—strikingly similar to how modern physicists
                      visualize the complex structure of extra dimensions, which
                      are often depicted as intricately woven or knotted spaces.
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
                    The convergence between modern theoretical physics and the
                    1400-year-old descriptions in the Quran raises a profound
                    question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about the multiverse?
                    </h3>
                    <p>
                      The concept of seven superimposed heavens—with only our
                      observable universe containing visible light, while other
                      realms remain detectable only through gravitational
                      effects—appears to parallel modern scientific theories
                      that were developed only in the late 20th century.
                    </p>
                  </div>

                  <p>
                    String theory and its requirement of extra dimensions
                    represents cutting-edge physics, developed through complex
                    mathematics and advanced technology. Yet the Quran appears
                    to describe a cosmological framework with elements
                    remarkably similar to these modern concepts, including
                    dimensions beyond our perception and entities that exist in
                    those dimensions but influence our world through gravity
                    alone.
                  </p>

                  <p>
                    This connection between ancient scripture and modern physics
                    invites contemplation about the origins of knowledge and the
                    remarkable alignment between spiritual texts and scientific
                    discovery—separated by 14 centuries of human history.
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
            <h3 className="text-lg font-medium">Exploring Cosmic Dimensions</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Ancient wisdom meets modern science in our understanding of the
            universe's multidimensional nature.
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

export default SevenHeavens;
