/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Gem, // Or other relevant icon like Fossil, HardHat
  ChevronRight,
  FlaskConical, // Or Microscope, Scientist
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles, // Keeping Sparkles for reflection/wonder
  SquareAsterisk, // Adding for the Quranic phrase emphasis
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

// Define TypeScript types for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind background color class for highlight
  iconColor: string; // Tailwind text color class for icon
}

const PyritizedFossils: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Using a type assertion for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // UseMemo to define content sections
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Fossils of Rock and Iron",
        icon: Gem,
        color: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-500",
      },
      {
        id: "science",
        title: "Scientific Discovery",
        icon: FlaskConical,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ];
  }, []); // Empty dependency array means this runs once on mount

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(() => {
        // Find the entry with the highest intersection ratio if multiple are visible
        // This helps determine the "most active" section
        const intersectingEntry = entries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );

        if (intersectingEntry.isIntersecting) {
          setActiveSection(intersectingEntry.target.id);
        }
      });
    }, options);

    // Store references and observe sections
    const currentRefs = sectionRefs.current; // Get a stable reference

    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element; // Store the element reference
        observer.observe(element);
      }
    });

    // Clean up observer on unmount
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Depend on contents array

  // Function to scroll to a section
  const scrollToSection = (id: string) => {
    // Optional: Update state immediately for faster UI response on click
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-600 to-yellow-800 dark:from-stone-800 dark:to-yellow-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Gem className="text-yellow-300" size={32} />{" "}
            {/* Icon for header */}
            <h1 className="text-4xl font-bold">Pyritized Fossils</h1>
          </div>
          <p className="text-xl max-w-2xl text-stone-200">
            Earth Sciences - Paleontology
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-stone-700 hover:bg-stone-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-stone-100 border-stone-300 hover:bg-stone-700 hover:text-white"
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
                    Discover fossils turned to stone and iron
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
              <Card className="border-l-4 border-stone-500 dark:border-stone-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[0].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine ancient creatures turning not just to stone, but
                    even to iron! This amazing process happens in nature.
                    Skeptics might think it's impossible for living things to
                    become rock or iron after death, but modern science has
                    shown us otherwise.
                  </p>
                  <div
                    className={`${contents[0].color
                      .replace("100", "50")
                      .replace(
                        "900",
                        "900/30"
                      )} p-6 rounded-lg border ${contents[0].color
                      .replace("100", "100")
                      .replace("900", "800")}`}
                  >
                    <h3 className="font-bold text-lg mb-3">
                      Life Transformed into Minerals
                    </h3>
                    <p>
                      Fossilization is the incredible process where organic
                      remains are replaced by minerals, preserving them over
                      vast periods. One fascinating type is pyritization, where
                      fossils are replaced by pyrite, a mineral composed of iron
                      and sulfur. This essentially turns the ancient life form
                      into a form of "rock and iron".
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500 dark:border-indigo-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[1].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`${contents[1].color
                      .replace("100", "50")
                      .replace(
                        "900",
                        "900/30"
                      )} p-6 rounded-lg border ${contents[1].color
                      .replace("100", "100")
                      .replace("900", "800")}`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className={contents[1].iconColor} />{" "}
                      Understanding Pyritization
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Pyrite, often called Fool's Gold, is an iron sulfide, and
                      a very common mineral... Pyrite replacement of fossils is
                      often caused by bacteria, in a process called
                      permineralization..."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.rockhoundtimes.com/articles_html/how_pyritized_fossils_form.html" // Assuming this is the source link based on text
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Rockhound Times, How Pyritized Fossils Form, 2021
                      </a>
                    </div>
                  </div>

                  <p>
                    This scientific explanation tells us that ancient life forms
                    can indeed turn into a mineral made of iron and sulfur –
                    which we commonly know as pyrite, or "Fool's Gold." So, a
                    creature's remains can literally become "iron" embedded
                    within rock through this natural process.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Gem size={16} className={contents[0].iconColor} />{" "}
                        Pyrite is Iron Sulfide
                      </h3>
                      <p>
                        Pyrite is a common mineral made of iron and sulfur
                        ($FeS_2$). This mineral can replace the organic material
                        in buried remains.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <FlaskConical
                          size={16}
                          className={contents[1].iconColor}
                        />{" "}
                        Permineralization Process
                      </h3>
                      <p>
                        Often driven by bacteria, minerals like pyrite from
                        groundwater fill the pores and replace the tissues of
                        dead organisms, preserving their form as fossils.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500 dark:border-green-700">
                <CardHeader className="pb-2">
                  <CardTitle>{contents[2].title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`${contents[2].color
                      .replace("100", "50")
                      .replace(
                        "900",
                        "900/30"
                      )} p-6 rounded-lg border ${contents[2].color
                      .replace("100", "100")
                      .replace("900", "800")}`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/17/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/49" // Link to 17:49-50
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 17:49-50
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And they say, 'When we have become bones and
                          fragments, shall we really be resurrected as a new
                          creation?' Say, 'Even if you become rocks or iron.'"
                        </p>
                        <p className="italic mt-4">
                          Indeed, it is a noble Quran.
                        </p>
                      </div>
                      <div
                        className="md:w-1/2 font-arabic text-right text-lg"
                        dir="rtl"
                      >
                        <p>
                          ٤٩ وَقَالُوا أَإِذَا كُنَّا عِظَامًا وَرُفَاتًا
                          أَإِنَّا لَمَبْعُوثُونَ خَلْقًا جَدِيدًا
                        </p>
                        <p>٥٠ قُلْ كُونُوا حِجَارَةً أَوْ حَدِيدًا</p>
                        <p className="mt-4">إِنَّهُ لَقُرْآنٌ كَرِيمٌ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge
                      className={`${contents[2].color} text-green-800 dark:text-green-100`}
                    >
                      Key Phrase
                    </Badge>
                    <p className="mt-3 flex items-start gap-2">
                      <SquareAsterisk
                        size={16}
                        className={contents[2].iconColor + " flex-shrink-0"}
                      />
                      The verse speaks of human remains potentially becoming
                      "rocks or iron" ($كُونُوا حِجَارَةً أَوْ حَدِيدًا$). This
                      phrasing remarkably aligns with the scientific description
                      of pyritized fossils, where organic matter is replaced by
                      pyrite, a mineral composed of iron and sulfur, essentially
                      turning into a form of rock containing iron.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500 dark:border-amber-700">
                <CardHeader className="pb-2">
                  <CardTitle>{contents[3].title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This connection between the ancient text and modern
                    paleontology offers something wonderful to think about:
                  </p>

                  <div
                    className={`${contents[3].color
                      .replace("100", "50")
                      .replace(
                        "900",
                        "900/30"
                      )} p-6 rounded-lg border ${contents[3].color
                      .replace("100", "100")
                      .replace("900", "800")}`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could anyone in the 7th century have known about
                      pyritized fossils?
                    </h3>
                    <p>
                      The intricate process of fossilization, especially
                      pyritization where organic remains are replaced by
                      minerals like iron sulfide (pyrite), was scientifically
                      understood much, much later. In the 7th century, this
                      knowledge was simply unavailable. The mention of remains
                      turning into "rocks or iron" in the Quran, therefore,
                      resonates deeply with modern scientific discoveries about
                      pyritized fossils.
                    </p>
                  </div>

                  <p>
                    This precise detail—that remains can become rocks and
                    iron—was beyond the scientific understanding of the time.
                    The alignment between the ancient Quranic description and
                    the modern scientific understanding of pyritized fossils
                    invites us to reflect on the source of such knowledge.
                  </p>
                  <div className="mt-6 flex items-center text-orange-600 dark:text-orange-400 font-medium">
                    <Sparkles size={20} className="mr-2" />
                    Exploring the wonders within the Quran.
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
            <Gem className="text-stone-500" size={18} />{" "}
            {/* Matching footer icon to topic */}
            <h3 className="text-lg font-medium">
              Exploring Earth's Ancient Secrets
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The natural world reveals fascinating processes, sometimes echoing
            descriptions found in ancient texts.
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

export default PyritizedFossils;
