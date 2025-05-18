/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  CloudRain, // Icon for rain/acid rain
  ChevronRight,
  FlaskConical, // Icon for science/chemistry
  BookOpen,
  Lightbulb, // Icon for reflection/insight
  ArrowUp,
  Sparkles,
  Quote, // Used in AstronomyDay, relevant here for quotes
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

// Define TypeScript interface for content sections
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind background color class for card border and background
  iconColor: string; // Tailwind text color class for icons
}

const AcidRain = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Acid Rain's Impact",
        icon: CloudRain,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Understanding",
        icon: FlaskConical,
        color: "bg-gray-100 dark:bg-gray-800",
        iconColor: "text-gray-500",
      },
      {
        id: "quran",
        title: "Quranic Mention",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "Connecting the Dots",
        icon: Lightbulb,
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
      threshold: 0.3, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Get current refs object to avoid issues with effect closure
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
    // Use document.getElementById for reliable scrolling
    const element = document.getElementById(id);
    if (element) {
      // Set active section immediately for better UX on click
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-900 dark:from-blue-900 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <CloudRain className="text-blue-300" size={32} />
            <h1 className="text-4xl font-bold">Acid Rain</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-200">
            Meteorology - Extreme Events
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-200 border-blue-200 hover:bg-blue-800/30"
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
                  <CardDescription>Understanding Acid Rain</CardDescription>
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
              <Card
                className={`border-l-4 ${contents[0].iconColor.replace(
                  "text-",
                  "border-"
                )}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[0].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    When we think of mass extinctions, we often picture a giant
                    asteroid hitting Earth. While that impact was the trigger
                    for the dinosaur extinction (the K-T event), the real
                    devastation came from the catastrophic chain reaction that
                    followed, including something truly extreme: acid rain.
                  </p>
                  <div
                    className={`${contents[0].color.replace(
                      "bg-",
                      "bg-"
                    )}/30 p-6 rounded-lg border ${contents[0].iconColor.replace(
                      "text-",
                      "border-"
                    )}/50`}
                  >
                    <h3 className="font-bold text-lg mb-3">
                      More Than Just an Impact
                    </h3>
                    <p>
                      The impact released immense amounts of smoke, dust, and
                      particularly sulfur from vaporized rocks into the
                      atmosphere. This atmospheric chaos blocked sunlight,
                      plunging the Earth into a period of intense cold and
                      darkness. But another, equally deadly consequence was the
                      formation of incredibly strong acid rain.
                    </p>
                  </div>
                  <div className="image-wrapper mb-4">
                    {/* Using direct img tag for static assets, adjust path as needed */}
                    <img
                      className="w-full rounded-lg"
                      src="/assets/images/acid-rain-impact.gif"
                      alt="Artist's depiction of an asteroid impact causing atmospheric disruption."
                    />
                  </div>
                  <p>
                    This wasn't just slightly acidic rain; scientific models
                    suggest it could have been as strong as battery acid! Such
                    extreme conditions had devastating effects on plant life,
                    aquatic ecosystems, and countless organisms, contributing
                    significantly to the mass extinction.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Understanding */}
            <section id="science" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${contents[1].iconColor.replace(
                  "text-",
                  "border-"
                )}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[1].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`${contents[1].color.replace(
                      "bg-",
                      "bg-"
                    )}/30 p-6 rounded-lg border ${contents[1].iconColor.replace(
                      "text-",
                      "border-"
                    )}/50`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className={contents[1].iconColor} /> The
                      Scientific Consensus on K-T Acid Rain
                    </h3>
                    {/* Using blockquote for semantic correctness */}
                    <blockquote className="italic text-gray-700 dark:text-gray-300 border-l-4 border-current pl-4">
                      <p className="mb-2">
                        "An impact at Chicxulub, where the target rocks contain
                        high quantities of sulfur, produces enormous amounts of
                        sulfate aerosols in the atmosphere that act as
                        nucleation sites for acid rains much more intense and
                        devastating than anything we have generated from
                        industrial pollution. One model suggests rain with the
                        strength of battery acid! The direct effect is enough to
                        suffocate some air breathers, to destroy plant foliage,
                        and to dissolve the shells of marine creatures living
                        along shores and in the surface waters of the ocean."
                      </p>
                    </blockquote>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://ucmp.berkeley.edu/education/events/cowen2b.html"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        University of California at Berkeley, The K-T
                        Extinction, 1999
                      </a>
                    </div>
                  </div>

                  <p>
                    This quote highlights a crucial detail: it wasn't *just* the
                    dust and smoke blocking the sun that caused the die-off.
                    While those led to freezing temperatures, the *acid rain*,
                    fueled by sulfur released during the impact, played a
                    distinct and devastating role by directly harming life and
                    ecosystems. This level of understanding, differentiating the
                    effects of dust/smoke from the effects of extreme acid rain,
                    is relatively recent science.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Mention */}
            <section id="quran" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${contents[2].iconColor.replace(
                  "text-",
                  "border-"
                )}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[2].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`${contents[2].color.replace(
                      "bg-",
                      "bg-"
                    )}/30 p-6 rounded-lg border ${contents[2].iconColor.replace(
                      "text-",
                      "border-"
                    )}/50`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/24/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/43"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 24:43
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Can't you see that Allah makes the clouds move
                          gently, then joins them together, then makes them into
                          a pile? Then you see rain come out from within? And He
                          sends down from heaven mountains with ice inside them;
                          that strike whomever He wishes or miss whoever He
                          wishes; Its flash almost blinds you."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٣ أَلَمْ تَرَ أَنَّ اللَّهَ يُزْجِي سَحَابًا ثُمَّ
                          يُؤَلِّفُ بَيْنَهُ ثُمَّ يَجْعَلُهُ رُكَامًا فَتَرَى
                          الْوَدْقَ يَخْرُجُ مِنْ خِلَالِهِ وَيُنَزِّلُ مِنَ
                          السَّمَاءِ مِنْ جِبَالٍ فِيهَا مِنْ بَرَدٍ فَيُصِيبُ
                          بِهِ مَنْ يَشَاءُ وَيَصْرِفُهُ عَنْ مَنْ يَشَاءُ ۖ
                          يَكَادُ سَنَا بَرْقِهِ يَذْهَبُ بِالْأَبْصَارِ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="image-wrapper mb-4">
                    {/* Using direct img tag for static assets, adjust path as needed */}
                    <img
                      className="w-full rounded-lg"
                      src="/assets/images/acid-rain-2.gif"
                      alt="Illustration showing acid rain falling on a landscape."
                    />
                  </div>

                  <p>
                    This verse describes the formation of clouds and rain, a
                    common phenomenon. However, it then mentions something quite
                    distinct: sending down "mountains with ice inside them" from
                    the heaven (sky), accompanied by a blinding flash. These
                    "mountains" strike selectively ("whomever He wishes or miss
                    whoever He wishes"), and rain comes "from within" this
                    process.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${contents[3].iconColor.replace(
                  "text-",
                  "border-"
                )}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[3].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's bring these threads together and consider the
                    knowledge available in the 7th century.
                  </p>

                  <div
                    className={`${contents[3].color.replace(
                      "bg-",
                      "bg-"
                    )}/30 p-6 rounded-lg border ${contents[3].iconColor.replace(
                      "text-",
                      "border-"
                    )}/50`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Connecting Ancient Description to Modern Science
                    </h3>
                    <p className="mb-3">
                      In the 7th century, the concept of massive meteorites or
                      comets ("mountains with ice") falling from the sky causing
                      cataclysmic events, the precise mechanism of an impact
                      generating devastating *acid rain* (as opposed to regular
                      rain), and the idea of such a rain being selective in its
                      reach ("strike whomever He wishes or miss whoever He
                      wishes") were far beyond the understanding of the time.
                    </p>
                    <p>
                      While people witnessed meteors (flashes), they did not
                      know they were icy 'mountains' from space capable of
                      causing global extinctions through subsequent
                      environmental effects like extreme acid rain. The Quranic
                      verse seems to describe elements remarkably aligned with
                      the scientific understanding of impact events causing
                      selective, destructive rainfall originating "from within"
                      the atmospheric disturbance created by these "mountains
                      from the sky."
                    </p>
                  </div>

                  <p>
                    Considering the limited scientific knowledge of atmospheric
                    chemistry and meteorology in the 7th century, the detailed
                    description in the Quran referencing icy 'mountains' from
                    the sky, a blinding flash, and a rain that strikes
                    selectively, presents a thought-provoking correlation with
                    the scientific understanding of impact-induced acid rain
                    events that caused mass extinctions like that of the
                    dinosaurs.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
              <CloudRain size={24} />
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
              Exploring Earth's Extreme Past
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Delving into how ancient events like acid rain shaped our planet's
            history, and the unique perspectives found in scripture.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AcidRain;
