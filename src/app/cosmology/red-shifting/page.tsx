/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Expand,
  ChevronRight,
  Rocket,
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUpRight,
  ArrowUp,
  Sparkles,
  PaintBucket,
  Telescope,
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

interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const AstronomyRedshift: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentSection[]>(() => {
    return [
      {
        id: "intro",
        title: "Redshifting Universe",
        icon: Expand,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Telescope,
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
      <div className="bg-gradient-to-r from-red-600 to-purple-700 dark:from-red-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Expand className="text-red-200" size={32} />
            <h1 className="text-4xl font-bold">Redshifting</h1>
          </div>
          <p className="text-xl max-w-2xl text-red-100">Astronomy - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-red-700 hover:bg-red-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white"
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
                    Explore the expanding universe
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
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Expand className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Redshifting Universe</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, the color of the sky shifts towards the red.
                    Skeptics claim that whoever wrote the Quran made a mistake;
                    the expansion of the universe doesn't affect the color of
                    light. Today scientists confirm that the expansion of the
                    universe causes redshifting.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-lg mb-3">
                      Universe Expansion Causes Light to Stretch
                    </h3>
                    <p>
                      The expansion of the universe stretches light waves from
                      distant galaxies, shifting their color toward the red end
                      of the spectrum. The farther away a galaxy is, the faster
                      it moves away from us, and the more its light is
                      redshifted.
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
                      <Telescope className="text-blue-500" size={24} />
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
                      "Redshift happens when light seen coming from an object
                      that is moving away is proportionally increased in
                      wavelength, or shifted to the red end of the visible
                      spectrum. In general, the faster the object is moving
                      away, the more extreme the redshift. The light from
                      distant galaxies is shifted towards the red end of the
                      spectrum because the Universe is expanding. This is known
                      as cosmological redshift."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Redshift"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Redshift, 2023
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Rocket size={16} className="text-blue-500" />{" "}
                        Proportional to Distance
                      </h3>
                      <p>
                        The redshift effect is proportional to distance - the
                        farther away galaxies are, the faster they are receding
                        from us, and the more their light shifts toward the red
                        end of the spectrum.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <PaintBucket size={16} className="text-red-500" /> Color
                        Gradient
                      </h3>
                      <p>
                        The redshifting creates a color gradient across the
                        observable universe - much like the varied intensity of
                        paint - with more distant objects appearing more red
                        than closer ones.
                      </p>
                    </div>
                  </div>

                  <p>
                    Edwin Hubble discovered this phenomenon in 1929 when he
                    observed that distant galaxies have their light shifted
                    toward the red end of the spectrum, with the degree of
                    redshift proportional to their distance from Earth. This
                    observation became one of the key pieces of evidence for the
                    expanding universe theory.
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
                        href="https://www.quranwow.com/#/ch/55/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/37"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 55:37
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "If the heaven ripped and it were a rose like paint."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٧ فَإِذَا انْشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَةً
                          كَالدِّهَانِ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "Wardatan kaddihan وَرْدَةً كَالدِّهَانِ" translates to "a
                      rose like paint". This refers to both the expanding
                      pattern (like a rose opening) and the varying intensity of
                      the red color (like paint), perfectly describing how the
                      universe appears redder at greater distances.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-4">
                    <h3 className="font-medium mb-2">Rose-like Expansion</h3>
                    <p>
                      The Quran uses the analogy of a rose opening to describe
                      how the universe expands, with outer parts moving faster
                      than inner parts. Just as the outer petals of a rose move
                      outward more than the inner petals, galaxies farther from
                      us move away faster, creating the rose-like expansion
                      pattern we observe today.
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
                    The correlation between modern scientific understanding of
                    redshift and the Quranic verse raises a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      redshifting?
                    </h3>
                    <p>
                      The redshift phenomenon—which requires advanced telescopes
                      and spectroscopic analysis to detect—appears to be
                      referenced in a text from the 7th century. This connection
                      between the Quranic description of the heavens as a "rose
                      like paint" and our modern understanding of the
                      redshifted, expanding universe invites deep contemplation
                      about the origins of this knowledge.
                    </p>
                  </div>

                  <p>
                    The concept that the universe is expanding with a color
                    shift proportional to distance was completely unknown in the
                    ancient world. It wasn't until 1929 when Edwin Hubble
                    discovered this phenomenon, almost 1300 years after the
                    Quran was revealed. The description in the Quran of the
                    heavens as "a rose like paint" remarkably aligns with two
                    key aspects of modern cosmology: the expansion pattern of
                    the universe and the redshifting of light from distant
                    galaxies.
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <ArrowUpRight size={16} className="text-amber-500" />{" "}
                      Historical Context
                    </h3>
                    <p>
                      In 7th century Arabia, there was no scientific
                      understanding of light spectra, the Doppler effect, or
                      cosmic expansion. The prevailing cosmological models of
                      neighboring civilizations viewed the heavens as fixed
                      celestial spheres. The Quranic description stands out as
                      remarkably prescient when compared to the scientific
                      consensus that emerged over a millennium later.
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
            <Sparkles className="text-red-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring the Expanding Cosmos
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Ancient texts and modern science converge in our understanding of
            the universe's expansion and the redshifting of light across cosmic
            distances.
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

export default AstronomyRedshift;
