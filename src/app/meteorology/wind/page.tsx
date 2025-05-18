/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Wind, // Use Wind icon
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  Gauge, // Maybe use Gauge for scale
  ArrowUp,
  Sparkles,
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

// Define the type for the content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Background color class for icon container
  iconColor: string; // Text color class for icon
}

const WindMiracle: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Power of Wind",
        icon: Wind,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Measuring Nature's Fury",
        icon: Gauge,
        color: "bg-gray-100 dark:bg-gray-800", // Using gray for a neutral "measurement" feel
        iconColor: "text-gray-500",
      },
      {
        id: "quran",
        title: "A Quranic Description",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Connecting Ancient & Modern",
        icon: HelpCircle,
        color: "bg-purple-100 dark:bg-purple-900", // A different color for reflection
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

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element; // Store ref
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
  }, [contents]); // Depend on contents to re-run if sections change (though they are memoized)

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
      <div className="bg-gradient-to-r from-blue-600 to-teal-700 dark:from-blue-800 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Wind className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Wind</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">Meteorology - Easy</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Facts <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-100 border-blue-100 hover:bg-blue-700 hover:text-white"
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
                    Understanding the force of wind
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
                      <Wind className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Power of Wind</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    We all feel the wind and know it can be a gentle breeze or a
                    powerful gust. For a long time, people understood wind
                    primarily as a force that could push things around – maybe
                    knock you off balance or sail a boat.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      More Than Just a Push
                    </h3>
                    <p>
                      However, the true, devastating power of wind – the kind
                      that can utterly destroy structures and even snap sturdy
                      trees – wasn't fully comprehended or measured until
                      relatively recently in human history. The idea that wind
                      could *snap* the trunk of a large tree was likely beyond
                      the common understanding or experience for many people
                      1400 years ago.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-gray-500 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <Gauge className="text-gray-500" size={24} />
                    </div>
                    <CardTitle>Measuring Nature's Fury</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Today, we have scientific scales to measure the intensity of
                    storms and wind speed. The Saffir-Simpson Hurricane Wind
                    Scale is one such tool that helps us understand the
                    potential damage.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-gray-500" /> Category 5
                      Hurricanes
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Category 5 is the highest category of the Saffir-Simpson
                      scale. These storms cause complete roof failure on many
                      residences and industrial buildings, and some complete
                      building failures with small utility buildings blown over
                      or away...{" "}
                      <strong>
                        Virtually all trees are uprooted or snapped and some may
                        be debarked
                      </strong>
                      , isolating most affected communities."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Saffir-Simpson_scale"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Saffir-Simpson scale, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    This modern scientific understanding confirms that winds in
                    the most severe storms are powerful enough to uproot or snap
                    even large, strong trees. This level of detailed knowledge
                    about wind's destructive capacity is a result of centuries
                    of observation, measurement, and scientific study, something
                    not available in the 7th century.
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
                    <CardTitle>A Quranic Description</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/69/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/6"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 69:6-7
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And as for Aad; they were annihilated by a furious,
                          roaring wind.
                          <br />
                          He unleashed it upon them for seven nights and eight
                          days, in succession. You could see the people tossed
                          around, as though they were empty stumps of palm
                          trees."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦ وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ
                          عَاتِيَةٍ
                          <br />٧ سَخَّرَهَا عَلَيْهِمْ سَبْعَ لَيَالٍ
                          وَثَمَانِيَةَ أَيَّامٍ حُسُومًا فَتَرَى الْقَوْمَ
                          فِيهَا صَرْعَىٰ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ خَاوِيَةٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Description
                    </Badge>
                    <p className="mt-3">
                      The verses describe the devastating effect of the wind on
                      the people of Aad, likening them to "empty stumps of palm
                      trees" (أَعْجَازُ نَخْلٍ خَاوِيَةٍ). This imagery strongly
                      suggests that the wind was so powerful it broke the palm
                      trees, leaving only their trunks behind, similar to how a
                      strong tree trunk would look after being snapped.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500 dark:border-purple-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Connecting Ancient & Modern</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here's where we find something truly remarkable. The Quran,
                    revealed in the 7th century, describes a wind so powerful it
                    snaps tree trunks, reducing them to mere stumps.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Considering the Knowledge of the 7th Century...
                    </h3>
                    <p>
                      In the 7th century, without modern meteorology, wind speed
                      measurements, or the concept of hurricane categories, the
                      detailed understanding that wind could possess enough
                      force to *snap* large trees like palm trunks was likely
                      not common knowledge. While strong winds were known, this
                      specific outcome – trees being broken at the trunk rather
                      than just bent or uprooted – aligns precisely with the
                      effects we now understand are caused by the most extreme
                      wind forces, like those in a Category 5 hurricane.
                    </p>
                  </div>

                  <p>
                    The vivid depiction in the Quran of people resembling "empty
                    stumps of palm trees" suggests a level of wind power that
                    science has only recently classified and confirmed. This
                    connection between an ancient description and modern
                    scientific findings invites us to ponder: How could this
                    specific, detailed consequence of extreme wind power have
                    been described so accurately in a text from 1400 years ago?
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
              <Wind size={24} />
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Nature's Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The forces of nature reveal truths that bridge the gap between
            ancient wisdom and modern discovery.
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

export default WindMiracle;
