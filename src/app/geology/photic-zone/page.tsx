/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Waves,
  ChevronRight,
  FlaskConical,
  BookOpen,
  Quote,
  HelpCircle,
  Lightbulb,
  ArrowUp,
  Sparkles,
  GlassWater,
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

type ContentItem = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const PhoticZone = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo<ContentItem[]>(() => {
    return [
      {
        id: "intro",
        title: "Ocean Depths & Light",
        icon: Waves,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: FlaskConical,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
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
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-800 dark:to-teal-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <GlassWater className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Photic Zone</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Oceanography - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-700"
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
                    Explore ocean depths and light penetration
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
                      <Waves className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Ocean Depths & Light</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran describes darkness in deep ocean waters where a
                    person cannot see their own hand. Skeptics questioned how
                    this could be accurate knowledge from the 7th century.
                    Today, modern oceanography confirms that light cannot
                    penetrate to the deep ocean - a fact impossible to know 1400
                    years ago.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Light Penetration in Water
                    </h3>
                    <p>
                      Sunlight quickly diminishes as it travels through water.
                      Even in the clearest ocean water, visible light is reduced
                      to about 1% of its surface value by 200 meters depth,
                      creating a boundary known as the photic zone - beyond
                      which human vision cannot function without artificial
                      light.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <FlaskConical className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Photic Zone: It extends from the surface down to a depth
                      where light intensity falls to one percent of that at the
                      surface, called the euphotic depth. Accordingly, its
                      thickness depends on the extent of light attenuation in
                      the water column. Typical euphotic depths vary from only a
                      few centimetres, in highly turbid eutrophic lakes, to
                      around 200 meters in the open ocean. It also varies with
                      seasonal changes in turbidity."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Photic_zone"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Photic Zone, 2018
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Lightbulb size={16} className="text-yellow-500" />{" "}
                        Light Absorption
                      </h3>
                      <p>
                        Water molecules absorb light, particularly red and
                        infrared wavelengths. The deeper light travels through
                        water, the more it's absorbed, creating darkness at
                        depths beyond the photic zone.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <GlassWater size={16} className="text-blue-500" /> Ocean
                        Layers
                      </h3>
                      <p>
                        Oceanographers divide the ocean into zones based on
                        light penetration. The euphotic zone (0-200m) receives
                        enough light for photosynthesis, while the aphotic zone
                        below exists in perpetual darkness.
                      </p>
                    </div>
                  </div>

                  <p>
                    The scientific understanding that human vision is limited to
                    the uppermost layer of the ocean is a relatively recent
                    discovery. Without modern submersibles, specialized
                    equipment, and scientific understanding of light absorption,
                    this knowledge would have been inaccessible to ancient
                    civilizations.
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
                        href="https://quran.com/24:40"
                        className="text-green-600 dark:text-green-400 hover:underline"
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
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "If a man stretches out his hand, he will not see it"
                      (إِذَا أَخْرَجَ يَدَهُ لَمْ يَكَدْ يَرَاهَا) describes
                      precisely what happens in deep ocean water beyond the
                      photic zone - complete darkness where human vision cannot
                      function.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Layered Darkness
                    </Badge>
                    <p className="mt-3">
                      The verse also mentions "depths of darkness, one above
                      another" (ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ), accurately
                      describing how light diminishes in stages as it penetrates
                      deeper into water, creating distinct layers of increasing
                      darkness.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern oceanographic understanding
                    and the Quranic verse raises an intriguing question:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known that
                      light cannot reach deep waters?
                    </h3>
                    <p>
                      In 7th century Arabia, a desert region far from major
                      bodies of water, detailed knowledge about deep ocean
                      darkness would have been inaccessible. The technology to
                      explore ocean depths didn't exist, and the understanding
                      of light absorption in water wasn't established until
                      modern scientific investigation centuries later.
                    </p>
                  </div>

                  <p>
                    The accuracy of this description is particularly noteworthy
                    considering:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      The Arabian Peninsula is primarily desert, with limited
                      access to deep ocean environments
                    </li>
                    <li>
                      Ancient diving capabilities were extremely limited,
                      typically to shallow depths for pearl diving
                    </li>
                    <li>
                      The scientific understanding of light absorption in water
                      and the concept of the photic zone were established only
                      in the modern era
                    </li>
                    <li>
                      The description includes not just darkness but the
                      specific detail that one cannot see one's own hand -
                      precisely what happens beyond the photic zone
                    </li>
                  </ul>

                  <p>
                    This remarkable alignment between a 7th-century text and
                    modern oceanographic knowledge invites contemplation about
                    the source of such information in an era without scientific
                    instruments or deep-water exploration capabilities.
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Ocean Mysteries</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of our planet's waters continue to reveal connections
            between ancient texts and modern scientific discoveries.
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

export default PhoticZone;
