/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Flame, // Using Flame icon for fire
  ChevronRight,
  Tornado, // Using Tornado icon for science/definition
  BookOpen, // Using BookOpen for Quranic reference
  Sparkles, // Using Sparkles for reflection/miracle
  ArrowUp,
  Quote, // For quoting scientific definition
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

// Define a type for the content sections for better type safety
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Background color class for icons/borders
  iconColor: string; // Text color class for icons
}

const FireWhirl = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections using the ContentSection type
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Tornado with Fire",
        icon: Flame,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "science",
        title: "Scientific Definition",
        icon: Tornado,
        color: "bg-gray-100 dark:bg-gray-700",
        iconColor: "text-gray-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
      {
        id: "reflection",
        title: "A Remarkable Insight",
        icon: Sparkles,
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
  }, [contents]); // Dependency array ensures effect runs if contents change

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Use window.scrollTo for smooth scrolling relative to the viewport top
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust offset to account for sticky header/nav if any
        behavior: "smooth",
      });
      // Or use element.scrollIntoView if it's sufficient
      // element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-800 dark:from-red-800 dark:to-orange-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="text-yellow-300" size={32} />
            <h1 className="text-4xl font-bold">Fire Whirl</h1>
          </div>
          <p className="text-xl max-w-2xl text-red-100">
            Meteorology - Extreme
          </p>
          <div className="flex gap-4 mt-8">
            {/* Adjusted button links based on section IDs */}
            <Button
              className="bg-white text-red-700 hover:bg-red-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-red-700"
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
              {" "}
              {/* Adjusted top offset */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Explore the phenomenon of fire whirls
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
              {" "}
              {/* Adjusted scroll margin */}
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Flame className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Tornado with Fire</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there is a mention of a tornado containing
                    fire. At the time of its revelation, in the 7th century, the
                    common understanding of tornadoes involved only rain and
                    hail, making the idea of a fiery tornado seem extraordinary.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-bold text-lg mb-3">
                      Understanding Fire Whirls Today
                    </h3>
                    <p>
                      Today, scientists have confirmed the existence of what are
                      known as fire whirls – vortexes of fire that can form
                      under specific conditions during wildfires or firestorms.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Definition */}
            <section id="science" className="scroll-mt-20">
              {" "}
              {/* Adjusted scroll margin */}
              <Card className="border-l-4 border-gray-500 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                      <Tornado className="text-gray-500" size={24} />
                    </div>
                    <CardTitle>Scientific Definition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-gray-500" /> What is a
                      Fire Whirl?
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "A fire whirl, fire devil or <strong>fire tornado</strong>{" "}
                      is a whirlwind induced by a fire and often (at least
                      partially) composed of flame or ash. These start with a
                      whirl of wind, often made visible by smoke, and may occur
                      when intense rising heat and turbulent wind conditions
                      combine to form whirling eddies of air. These eddies can
                      contract to a tornado-like vortex that sucks in debris and
                      combustible gases."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Fire_whirl"
                        className="text-gray-600 dark:text-gray-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Fire Whirl, as accessed in 2025
                      </a>
                    </div>
                  </div>

                  {/* Adding the image */}
                  <div className="image-wrapper my-6">
                    {/* Replace with your actual image component or tag */}
                    {/* Assuming you have a way to handle static assets like in the reference HTML */}
                    <img
                      src="/assets/images/fire-whirl.gif" // Update path if needed
                      alt="A fire whirl or fire tornado in action"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>

                  <p>
                    Fire whirls are relatively rare and require specific
                    atmospheric conditions combined with an intense heat source.
                    They are essentially a vortex of fire, confirming that
                    tornadoes can indeed contain fire, a phenomenon not commonly
                    known or understood outside of direct observation of such
                    extreme events, especially in the 7th century.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              {" "}
              {/* Adjusted scroll margin */}
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <BookOpen className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/266"
                        className="text-orange-600 dark:text-orange-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:266
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Would anyone of you like to have a garden of palms
                          and vines, under which rivers flow, with all kinds of
                          fruit in it for him, and old age has stricken him, and
                          he has weak children, then a{" "}
                          <strong>tornado containing fire</strong> burns it?
                          Thus Allah makes clear the signs for you, so that you
                          may reflect."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٦٦ أَيَوَدُّ أَحَدُكُمْ أَنْ تَكُونَ لَهُ جَنَّةٌ
                          مِنْ نَخِيلٍ وَأَعْنَابٍ تَجْرِي مِنْ تَحْتِهَا
                          الْأَنْهَارُ لَهُ فِيهَا مِنْ كُلِّ الثَّمَرَاتِ
                          وَأَصَابَهُ الْكِبَرُ وَلَهُ ذُرِّيَّةٌ ضُعَفَاءُ
                          فَأَصَابَهَا إِعْصَارٌ فِيهِ نَارٌ فَاحْتَرَقَتْ ۗ
                          كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمُ الْآيَاتِ
                          لَعَلَّكُمْ تَتَفَكَّرُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
                      Key Description
                    </Badge>
                    <p className="mt-3">
                      The phrase فَأَصَابَهَا إِعْصَارٌ فِيهِ نَارٌ (fa-aṣābahā
                      i'ṣārun fīhi nār) translates to "then a tornado containing
                      fire burns it". The Arabic word إِعْصَارٌ (i'ṣār) is
                      understood to mean a whirlwind or tornado. The description
                      "fīhi nār" (in it, fire) explicitly mentions the presence
                      of fire within this vortex.
                    </p>
                    <p className="mt-3">
                      This specific depiction aligns remarkably with the modern
                      scientific understanding and observation of a fire whirl –
                      a tornado-like phenomenon that does indeed contain fire.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              {" "}
              {/* Adjusted scroll margin */}
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Sparkles className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>A Remarkable Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quranic description of a "tornado containing fire"
                    presents a fascinating point for reflection:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this specific meteorological phenomenon, a
                      tornado with fire, have been described in a text from the
                      7th century, when scientific knowledge of such extreme
                      weather events was limited and fire whirls were not
                      scientifically classified?
                    </h3>
                    <p>
                      At that time, people were familiar with tornadoes that
                      brought wind, rain, or hail. The concept of a vortex of
                      fire would have been beyond the typical understanding of
                      weather. The precise mention of "fire" within the tornado
                      aligns perfectly with the modern scientific definition of
                      a fire whirl, a detail that wasn't widely known or
                      understood 1400 years ago. This correspondence invites
                      contemplation on the source of the knowledge contained
                      within the Quran.
                    </p>
                  </div>
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-red-600 hover:bg-red-700">
              <Flame size={24} />
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
            <Sparkles className="text-orange-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Meteorology and Scripture
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting insights from ancient texts with modern scientific
            understanding of extreme weather phenomena.
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

export default FireWhirl;
