/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Cloud, // Using Cloud icon for this topic
  ChevronRight,
  Droplets, // Good for water/clouds
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { LucideIcon } from "lucide-react"; // Import type for icons
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

// Define a type for the content sections
interface SectionContent {
  id: string;
  title: string;
  icon: LucideIcon; // Use the imported LucideIcon type
  color: string; // Tailwind background color class for icon background
  iconColor: string; // Tailwind text color class for icon
}

const WeightOfClouds: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Heavy Clouds",
        icon: Cloud,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-600",
      },
      {
        id: "science",
        title: "Scientific Confirmation",
        icon: Droplets, // Using Droplets for the science details
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-600",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600",
      },
      {
        id: "reflection",
        title: "Point to Ponder",
        icon: HelpCircle,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-600",
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
      <div className="bg-gradient-to-r from-blue-500 to-cyan-700 dark:from-blue-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Weight Of Clouds</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">Meteorology - Easy</p>
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
                    Explore the surprising weight of clouds
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
              <Card className="border-l-4 border-cyan-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <Cloud className="text-cyan-600" size={24} />
                    </div>
                    <CardTitle>Do Clouds Have Weight?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    When we look up, clouds seem to float effortlessly in the
                    sky, like giant, fluffy balloons. This might lead us to
                    think they are light, perhaps even weightless. It might
                    surprise you to learn that clouds are actually incredibly
                    heavy!
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Seeming Paradox
                    </h3>
                    <p>
                      For a long time, it wasn't understood how clouds, if they
                      contained large amounts of water, could stay suspended in
                      the air. To someone living centuries ago, without modern
                      scientific tools, the idea of a cloud being heavy might
                      seem impossible – surely, it would just fall to the
                      ground!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Confirmation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Droplets className="text-blue-600" size={24} />
                    </div>
                    <CardTitle>Modern Science Confirms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Today, science has provided a clear answer. Clouds are not
                    weightless; they are composed of countless tiny water
                    droplets or ice crystals, and together, these add up to a
                    substantial weight. They stay suspended because these
                    particles are so small and light individually, and they are
                    supported by updrafts and the buoyancy of the warmer air
                    within the cloud compared to the surrounding air.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-600" /> The Weight
                      is Real!
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "How much does a cloud weigh?
                      <br />
                      Do you think clouds have any weight? How can they, if they
                      are floating in the air like a balloon filled with helium?
                      If you tie a helium balloon to a kitchen scale it won't
                      register any weight, so why should a cloud?... Doing the
                      math: 1,000,000,000 x 0.5 = 500,000,000 grams of water
                      droplets in our cloud. That is about 500,000 kilograms or
                      1.1 million pounds (about 551 tons)."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.usgs.gov/special-topic/water-science-school/science/atmosphere-and-water-cycle?qt-science_center_objects=0#qt-science_center_objects"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        US Geological Survey, The Atmosphere and the Water
                        Cycle, 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    Yes, you read that right! An average cumulus cloud, a
                    medium-sized puffy cloud, can weigh around 1.1 million
                    pounds. That's equivalent to the weight of about 100
                    elephants! This astonishing fact is something we've only
                    been able to confirm with modern scientific understanding
                    and measurement.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-600" size={24} />
                    </div>
                    <CardTitle>A Mention in the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/13/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/12"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 13:12
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "It is He who shows you the lightening, causing fear
                          and hope. And He produces the heavy clouds."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          وَهُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا
                          وَيُنْشِئُ السَّحَابَ الثِّقَالَ
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          (Portion of the verse: وَيُنْشِئُ السَّحَابَ
                          الثِّقَالَ)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Word Meaning
                    </Badge>
                    <p className="mt-3">
                      In this verse, the Arabic word used for clouds is
                      "السَّحَابَ" (al-sahab), and it's qualified by the word
                      "الثِّقَالَ" (al-thiqaal). The word "الثِّقَالَ" comes
                      from the root ث ق ل (tha-qa-la), which means "heavy,"
                      "weighty," or "burdensome." So, the phrase "السَّحَابَ
                      الثِّقَالَ" directly translates to "the heavy clouds."
                    </p>
                  </div>
                  <p>
                    This verse mentions God producing the "heavy clouds." At a
                    time when the common perception might have been that clouds
                    were light or insubstantial because they floated, the Quran
                    describes them using a word that means heavy.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Point to Ponder */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-600" size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>This brings us to a fascinating question:</p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could anyone in the 7th century have known that clouds
                      are genuinely heavy?
                    </h3>
                    <p>
                      In the 7th century CE, during the time of the revelation
                      of the Quran, there were no scientific instruments capable
                      of measuring the mass of a cloud. Meteorology as we know
                      it did not exist. The prevailing understanding of objects
                      floating in the air would likely have led people to assume
                      clouds were light. Yet, the Quran refers to them as "heavy
                      clouds."
                    </p>
                  </div>

                  <p>
                    This description aligns remarkably with what modern science
                    has discovered centuries later. The fact that an ancient
                    text describes clouds using a term like "heavy," which
                    contradicts the intuitive observation of them floating
                    effortlessly, invites us to reflect on the source of this
                    knowledge. It's a reminder that the world around us holds
                    many wonders, and sometimes, ancient wisdom seems to echo
                    truths that science only later unveils.
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
              <Cloud size={24} />
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
            <h3 className="text-lg font-medium">
              Exploring the Wonders of the Sky
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The natural world is full of surprises, connecting ancient wisdom
            with modern discoveries.
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

export default WeightOfClouds;
