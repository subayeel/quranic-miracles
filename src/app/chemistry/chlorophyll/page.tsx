/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Leaf, // Main icon for Chlorophyll/Green
  ChevronRight,
  FlaskConical, // Science icon
  BookOpen, // Quran icon
  HelpCircle, // Reflection/Question icon
  Droplet, // Water/Transpiration icon
  Sun, // Photosynthesis/Light icon
  ArrowUp,
  Sparkles, // Footer icon
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

// Define types for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icon components
  color: string; // Tailwind background color class for card border & nav item background
  iconColor: string; // Tailwind text color class for icons
}

const ChlorophyllComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define content sections using useMemo for stability
  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Water, Plants, and an Ancient View",
        icon: Leaf,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600",
      },
      {
        id: "science",
        title: "Modern Science Unveils the Process",
        icon: FlaskConical,
        color: "bg-teal-100 dark:bg-teal-900", // Using teal for science
        iconColor: "text-teal-600",
      },
      {
        id: "quran",
        title: "The Quranic Description",
        icon: BookOpen,
        color: "bg-emerald-100 dark:bg-emerald-900", // Using emerald for Quran
        iconColor: "text-emerald-600",
      },
      {
        id: "reflection",
        title: "A Point for Reflection",
        icon: HelpCircle,
        color: "bg-lime-100 dark:bg-lime-900", // Using lime for reflection
        iconColor: "text-lime-600",
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

    // Cleanup function
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Re-run if contents structure changes (though useMemo prevents this)

  // Scroll smoothly to a section
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
      <div className="bg-gradient-to-r from-green-600 to-teal-800 dark:from-green-800 dark:to-teal-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="text-lime-300" size={32} />
            <h1 className="text-4xl font-bold">Chlorophyll</h1>
          </div>
          <p className="text-xl max-w-2xl text-green-100">
            Life's Green Engine
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-green-700 border-white/50 hover:bg-white/10 hover:text-white"
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
                    Exploring water, plants, and the green color
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors ${
                          activeSection === id
                            ? `${colorMap[id]} font-medium` // Use specific color for active item background
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
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
              <Card className="border-l-4 border-green-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${getColorClass(
                        "intro",
                        "bg"
                      )}`}
                    >
                      <Leaf
                        className={getColorClass("intro", "text")}
                        size={24}
                      />
                    </div>
                    <CardTitle>Water, Plants, and an Ancient Puzzle</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the 7th century CE, the common understanding of how
                    plants used water was quite simple: water was absorbed by
                    the roots, helped the plant grow, and then mostly evaporated
                    away. It was not widely conceived that a significant portion
                    of the water could actually *become* part of the plant
                    matter itself.
                  </p>
                  <div
                    className={`${getColorClass(
                      "intro",
                      "bg",
                      "light"
                    )} p-6 rounded-lg border ${getColorClass(
                      "intro",
                      "border",
                      "light"
                    )}`}
                  >
                    <h3 className="font-bold text-lg mb-3">
                      The Conventional 7th-Century View
                    </h3>
                    <p>
                      The prevalent idea was that water served primarily as a
                      transporter for nutrients from the soil and as a means for
                      the plant to stay hydrated before the water evaporated
                      back into the atmosphere. The notion of water being a
                      fundamental building block of the plant's physical
                      structure, beyond its initial absorption, was not part of
                      the general knowledge of the time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${getColorClass("science", "border")}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${getColorClass(
                        "science",
                        "bg"
                      )}`}
                    >
                      <FlaskConical
                        className={getColorClass("science", "text")}
                        size={24}
                      />
                    </div>
                    <CardTitle>Modern Science Unveils the Process</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Today, through centuries of scientific inquiry, we
                    understand the sophisticated process of how plants interact
                    with water and light, a process primarily driven by
                    photosynthesis and transpiration.
                  </p>

                  <div
                    className={`${getColorClass(
                      "science",
                      "bg",
                      "light"
                    )} p-6 rounded-lg border ${getColorClass(
                      "science",
                      "border",
                      "light"
                    )}`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Droplet
                        size={18}
                        className={getColorClass("science", "text")}
                      />{" "}
                      Transpiration: Water Loss
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Transpiration is the process of water movement through a
                      plant and its evaporation from aerial parts... only a
                      small amount of water taken up by the roots is used for
                      growth and metabolism. The remaining 97-99.5% is lost by
                      transpiration and guttation."
                      <br />
                      <span className="mt-2 block text-sm not-italic">
                        <a
                          href="https://en.wikipedia.org/wiki/Transpiration"
                          className={`${getColorClass(
                            "science",
                            "text"
                          )} hover:underline`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Wikipedia, Transpiration, 2022
                        </a>
                      </span>
                    </p>
                    <p className="mt-3">
                      This explains that the vast majority of water absorbed by
                      a plant does indeed evaporate back into the atmosphere.
                    </p>
                  </div>

                  <div
                    className={`${getColorClass(
                      "science",
                      "bg",
                      "light"
                    )} p-6 rounded-lg border ${getColorClass(
                      "science",
                      "border",
                      "light"
                    )}`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sun
                        size={18}
                        className={getColorClass("science", "text")}
                      />{" "}
                      Photosynthesis: Turning Water into Plant Matter
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Photosynthesis is a process used by plants and other
                      organisms to convert light energy into chemical energy...
                      Some of this chemical energy is stored in carbohydrate
                      molecules, such as sugars and starches, which are
                      synthesized from carbon dioxide and water..."
                      <br />
                      "...the process always begins when energy from light is
                      absorbed by proteins called reaction centers that contain
                      green chlorophyll..."
                      <br />
                      <span className="mt-2 block text-sm not-italic">
                        <a
                          href="https://en.wikipedia.org/wiki/Photosynthesis"
                          className={`${getColorClass(
                            "science",
                            "text"
                          )} hover:underline`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Wikipedia, Photosynthesis, 2022
                        </a>
                      </span>
                    </p>
                    <p className="mt-3">
                      Crucially, a small but vital portion of the absorbed
                      water, along with carbon dioxide and light energy captured
                      by chlorophyll, is converted into sugars and other organic
                      compounds. This is the process by which plants build their
                      physical structure – they literally turn water (H₂O) and
                      carbon dioxide (CO₂) into plant matter. Most of the oxygen
                      from the water molecule ($H_2O$) is released back into the
                      atmosphere.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Leaf
                        size={16}
                        className={getColorClass("science", "text")}
                      />{" "}
                      The Green Connection (Chlorophyll)
                    </h3>
                    <p>
                      The green color in plants comes from chlorophyll, the
                      pigment essential for photosynthesis. The chemical formula
                      for chlorophyll (like C₅₅H₇₂O₅N₄Mg) shows it's made of
                      carbon, oxygen, hydrogen, nitrogen, and magnesium.
                      Notably, the hydrogen and oxygen atoms in chlorophyll (and
                      the resulting sugars) are largely derived from the water
                      ($H_2O$) absorbed by the plant. This direct link between
                      water intake and the plant's green substance (chlorophyll)
                      and structure (sugar) is a fundamental aspect of plant
                      biology, unknown in the 7th century.
                    </p>
                  </div>

                  <p>
                    So, modern science confirms two main fates for water
                    absorbed by plants: most evaporates through transpiration,
                    and a small but critical amount is chemically transformed
                    into the plant's organic matter via photosynthesis, a
                    process initiated by the green pigment, chlorophyll.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${getColorClass("quran", "border")}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${getColorClass(
                        "quran",
                        "bg"
                      )}`}
                    >
                      <BookOpen
                        className={getColorClass("quran", "text")}
                        size={24}
                      />
                    </div>
                    <CardTitle>The Quranic Description</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's look at how the Quran describes the interaction of
                    water and plants.
                  </p>
                  <div
                    className={`${getColorClass(
                      "quran",
                      "bg",
                      "light"
                    )} p-6 rounded-lg border ${getColorClass(
                      "quran",
                      "border",
                      "light"
                    )}`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/18/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/45" // Link to Quran 18:45
                        className={`${getColorClass(
                          "quran",
                          "text"
                        )} hover:underline`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 18:45
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And cite for them the parable of the present life: it
                          is like water that We send down from the sky; the
                          plants of the earth absorb it; but then it becomes old
                          plant, scattered by the wind. Allah has absolute power
                          over everything."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٥ وَاضْرِبْ لَهُمْ مَثَلَ الْحَيَاةِ الدُّنْيَا
                          كَمَاءٍ أَنْزَلْنَاهُ مِنَ السَّمَاءِ فَاخْتَلَطَ بِهِ
                          نَبَاتُ الْأَرْضِ فَأَصْبَحَ هَشِيمًا تَذْرُوهُ
                          الرِّيَاحُ ۗ وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ
                          مُقْتَدِرًا
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge
                        className={`${getColorClass(
                          "quran",
                          "bg"
                        )} ${getColorClass(
                          "quran",
                          "text",
                          "dark"
                        )} dark:${getColorClass(
                          "quran",
                          "bg",
                          "dark"
                        )} dark:${getColorClass("quran", "text")}`}
                      >
                        Key Phrase
                      </Badge>
                      <p className="mt-3">
                        The phrase "فَأَصْبَحَ هَشِيمًا" (fa asbaha hasheeman)
                        means "but then it becomes old plant" or "dry broken
                        pieces". Following the description of plants absorbing
                        water, the verse states the water (or the result of the
                        water's interaction with the plant) becomes "old plant"
                        (Hasheem) and is then "scattered by the wind" (تَذْرُوهُ
                        الرِّيَاحُ - tadhroohu ar-riyah).
                      </p>
                      <p className="mt-2">
                        This description aligns intriguingly with the modern
                        scientific understanding: most of the water is
                        "scattered by the wind" (evaporates/transpires), while a
                        portion "becomes old plant" (is transformed into plant
                        matter via photosynthesis). The verse mentions both
                        outcomes in sequence.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`${getColorClass(
                      "quran",
                      "bg",
                      "light"
                    )} p-6 rounded-lg border ${getColorClass(
                      "quran",
                      "border",
                      "light"
                    )}`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/63" // Link to Quran 22:63
                        className={`${getColorClass(
                          "quran",
                          "text"
                        )} hover:underline`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 22:63
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Do you not see that Allah sends down water from the
                          sky, and the land becomes green? Allah is Kind and
                          Aware."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦٣ أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ
                          مَاءً فَتُصْبِحُ الْأَرْضُ مُخْضَرَّةً ۗ إِنَّ اللَّهَ
                          لَطِيفٌ خَبِيرٌ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      This verse directly links the sending down of water with
                      the land becoming green ("مُخْضَرَّةً" - mukhḍarratan). As
                      modern science has shown, the green color is primarily due
                      to chlorophyll, and its components (hydrogen and oxygen)
                      are sourced from water.
                    </p>
                  </div>

                  <p>
                    These verses present descriptions of water's interaction
                    with plants that resonate with modern scientific discoveries
                    regarding transpiration, photosynthesis, and the composition
                    of chlorophyll.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${getColorClass(
                  "reflection",
                  "border"
                )}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${getColorClass(
                        "reflection",
                        "bg"
                      )}`}
                    >
                      <HelpCircle
                        className={getColorClass("reflection", "text")}
                        size={24}
                      />
                    </div>
                    <CardTitle>A Point for Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific facts we've discussed about how
                    plants use water and the verses from the Quran, a
                    thought-provoking question arises:
                  </p>

                  <div
                    className={`${getColorClass(
                      "reflection",
                      "bg",
                      "light"
                    )} p-6 rounded-lg border ${getColorClass(
                      "reflection",
                      "border",
                      "light"
                    )}`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could knowledge about water becoming part of the
                      plant's substance and the direct link between water and
                      greenness have been mentioned in the 7th century?
                    </h3>
                    <p>
                      Details like the vast majority of water evaporating
                      (scattered by wind) while a portion becomes plant matter
                      ("old plant"), and the compositional link between water
                      and the green pigment (chlorophyll), were far beyond the
                      scientific understanding and observational capabilities of
                      the time. Such knowledge relies on complex biological and
                      chemical understanding developed centuries later.
                    </p>
                  </div>

                  <p>
                    For a text originating in the 7th century to describe these
                    aspects of plant physiology, which align with modern
                    discoveries, is indeed remarkable and invites deep
                    reflection on the source of this information. It highlights
                    a harmony between these ancient descriptions and
                    contemporary science, a point of wonder for many.
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
            <Sparkles className={getColorClass("intro", "text")} size={18} />{" "}
            {/* Using intro color for sparkle */}
            <h3 className="text-lg font-medium">
              Reflecting on Nature's Design
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the intricate ways life uses water and light, as described
            in ancient texts and confirmed by modern science.
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

// Helper function to get color classes based on section id
// This maps the color defined in the contents array to the relevant Tailwind classes
const colorMap: { [key: string]: string } = {
  intro:
    "bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 border-green-600",
  science:
    "bg-teal-100 dark:bg-teal-800 text-teal-600 dark:text-teal-300 border-teal-600",
  quran:
    "bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300 border-emerald-600",
  reflection:
    "bg-lime-100 dark:bg-lime-800 text-lime-600 dark:text-lime-300 border-lime-600",
};

const getColorClass = (
  id: string,
  type: "bg" | "text" | "border",
  shade?: "light" | "dark"
) => {
  const classes = colorMap[id]?.split(" ") || [];
  if (type === "bg") {
    if (shade === "light")
      return classes
        .filter((cls) => cls.startsWith("bg-") && !cls.includes("dark:"))
        .join(" ");
    if (shade === "dark")
      return classes.filter((cls) => cls.startsWith("dark:bg-")).join(" ");
    // For nav item background, use a slightly darker hover state as in original
    if (id === "intro")
      return "bg-green-100 dark:bg-green-800 hover:bg-gray-100 dark:hover:bg-gray-800";
    if (id === "science")
      return "bg-teal-100 dark:bg-teal-800 hover:bg-gray-100 dark:hover:bg-gray-800";
    if (id === "quran")
      return "bg-emerald-100 dark:bg-emerald-800 hover:bg-gray-100 dark:hover:bg-gray-800";
    if (id === "reflection")
      return "bg-lime-100 dark:bg-lime-800 hover:bg-gray-100 dark:hover:bg-gray-800";
    return ""; // Default for main section background color
  }
  if (type === "text") {
    if (shade === "dark")
      return classes
        .filter((cls) => cls.startsWith("text-") && !cls.includes("dark:"))
        .join(" "); // Get regular text color for dark badge text
    return classes
      .filter((cls) => cls.startsWith("text-") || cls.startsWith("dark:text-"))
      .join(" "); // Get both light and dark text colors
  }
  if (type === "border") {
    if (shade === "light")
      return classes
        .filter((cls) => cls.startsWith("border-") && !cls.includes("dark:"))
        .join(" "); // Get light border color
    return classes.filter((cls) => cls.startsWith("border-")).join(" "); // Get the main border color
  }
  return "";
};

export default ChlorophyllComponent;
