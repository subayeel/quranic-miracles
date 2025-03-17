"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  Book,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Waves,
  Fish,
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

const BioluminescenceComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Lights in the Deep",
        icon: Waves,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Fish,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
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

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-800 dark:from-blue-700 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Fish className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Bioluminescence</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">Biology - Extreme</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700"
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
                    Explore the phenomenon of bioluminescence
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
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Waves className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Lights in the Deep</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the darkest depths of the ocean, where sunlight cannot
                    reach, a remarkable phenomenon occurs: living organisms
                    create their own light.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Light Beyond Sunlight
                    </h3>
                    <p>
                      In the Quran, there's a fascinating reference to deep
                      waters where a person cannot see their own hand, yet Allah
                      can still provide light. Skeptics once claimed this was
                      impossible—sunlight can only penetrate about 200 meters
                      into the ocean. Below this depth, there is no sunlight or
                      traditional fire source, so how could there be light?
                    </p>
                    <p className="mt-3">
                      Modern science has discovered the answer:
                      bioluminescence—the ability of living organisms to produce
                      their own light, even thousands of meters below the
                      surface.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Fish className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-green-500" />{" "}
                      Distribution of Bioluminescent Life
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Bioluminescence occurs widely among animals, especially
                      in the open sea, including fish, jellyfish, comb jellies,
                      crustaceans, and cephalopod molluscs; in some fungi and
                      bacteria; and in various terrestrial invertebrates
                      including insects. In marine coastal habitats, about 2.5%
                      of organisms are estimated to be bioluminescent, whereas
                      in pelagic habitats in the eastern Pacific, about 76% of
                      the main taxa of deep-sea animals have been found to be
                      capable of producing light. More than 700 animal genera
                      have been recorded with light-producing species. Most
                      marine light-emission is in the blue and green light
                      spectrum. However, some loose-jawed fish emit red and
                      infrared light, and the genus Tomopteris emits yellow
                      light."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Bioluminescence"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Bioluminescence, 2023
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-yellow-500" /> Ocean
                        Depths
                      </h3>
                      <p>
                        While sunlight typically can only penetrate to about 200
                        meters in the clearest ocean waters, bioluminescent
                        organisms create their own light through chemical
                        reactions in their bodies, illuminating the ocean
                        depths.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Fish size={16} className="text-blue-500" /> Deep Sea
                        Prevalence
                      </h3>
                      <p>
                        In the deep sea, where sunlight cannot reach, an
                        astonishing 76% of animals can produce their own light—a
                        natural adaptation to the perpetual darkness.
                      </p>
                    </div>
                  </div>

                  <p className="mt-4">
                    Animals can produce their own light through bioluminescence.
                    This scientific understanding was only recently discovered,
                    yet it appears to be referenced in the Quran 1400 years ago.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className={`border-l-4 border-purple-500`}>
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
                        href="https://www.quranwow.com/#/ch/24/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/40"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 24:40
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Or like the depths of darkness in a vast deep ocean,
                          overwhelmed with waves topped by waves, topped by
                          clouds: depths of darkness, one above another: if a
                          man stretches out his hand, he will not see it! If
                          Allah does not give light to a person he will not have
                          light!"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٠ أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُجِّيٍّ يَغْشَاهُ
                          مَوْجٌ مِنْ فَوْقِهِ مَوْجٌ مِنْ فَوْقِهِ سَحَابٌ ۚ
                          ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ إِذَا أَخْرَجَ
                          يَدَهُ لَمْ يَكَدْ يَرَاهَا ۗ وَمَنْ لَمْ يَجْعَلِ
                          اللَّهُ لَهُ نُورًا فَمَا لَهُ مِنْ نُورٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Key Insight
                    </Badge>
                    <p className="mt-3">
                      The verse specifically mentions that in deep waters, where
                      a person cannot see their own hand, Allah can still
                      provide light. This implies that in the depths of the
                      ocean, where sunlight cannot penetrate, there is still a
                      source of light—but not from the sun. Modern science has
                      confirmed this through the discovery of bioluminescent
                      organisms that produce their own light through chemical
                      reactions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className={`border-l-4 border-amber-500`}>
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
                    The connection between the Quranic verse and modern
                    scientific discoveries about bioluminescence raises
                    interesting questions about ancient knowledge:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about bioluminescence?
                    </h3>
                    <p>
                      The Quranic verse describes a phenomenon that science only
                      recently confirmed—that in the deepest parts of the ocean
                      where no sunlight can reach and a person cannot see their
                      own hand, there can still be light. This light comes not
                      from the sun or fire, but from living organisms that
                      produce their own illumination through biochemical
                      processes.
                    </p>
                    <p className="mt-3">
                      This precise description of deep-sea conditions and the
                      possibility of light in these extreme environments
                      predates scientific discovery by over a millennium. The
                      verse specifically mentions that "if Allah does not give
                      light to a person he will not have light," suggesting an
                      alternative source of light distinct from what humans
                      typically create or harness.
                    </p>
                  </div>

                  <p>
                    For many, this alignment between ancient text and modern
                    scientific understanding invites reflection on the nature of
                    knowledge, revelation, and the complex biological
                    adaptations that allow life to thrive even in the most
                    extreme environments on our planet.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              <Fish size={24} />
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
            <Sparkles className="text-blue-600" size={18} />
            <h3 className="text-lg font-medium">Marvels of the Deep</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The ocean's depths continue to reveal their secrets, bridging
            ancient wisdom with modern scientific discovery. May we always look
            upon nature with wonder and curiosity.
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

export default BioluminescenceComponent;
