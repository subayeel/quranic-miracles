/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet, // Represents water/river
  MapPin, // Represents location/discovery
  BookOpen, // Represents Quran/text
  Lightbulb, // Represents reflection/insight
  ChevronRight,
  RotateCcw, // Represents ancient past/history
  ArrowUp,
  Sparkles,
  Compass, // Represents exploration/discovery
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

// Define TypeScript type for content sections
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const DriedRiver = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use useRef to store section DOM elements for the observer
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections using useMemo for stability
  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Pyramids & Rivers?",
        icon: Droplet,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500", // Ancient river color
      },
      {
        id: "science",
        title: "Modern Discovery",
        icon: Compass,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500", // Discovery color
      },
      {
        id: "quran",
        title: "Quranic Verse",
        icon: BookOpen,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500", // Quranic gold color
      },
      {
        id: "reflection",
        title: "Connecting the Dots",
        icon: Lightbulb,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500", // Insight color
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.3, // Trigger when 30% of the section is visible
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
        sectionRefs.current[id] = element; // Store reference (optional, but matches pattern)
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer on component unmount
      contents.forEach(({ id }) => {
        const element = sectionRefs.current[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Re-run if contents array changes (though useMemo prevents this usually)

  // Function to scroll to a specific section
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
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 dark:from-blue-800 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Using MapPin for pyramids and Droplet for ancient river */}
            <div className="flex items-center -space-x-2">
              <MapPin className="text-yellow-200 relative z-10" size={40} />
              <Droplet className="text-blue-300 relative z-0" size={36} />
            </div>
            <h1 className="text-4xl font-bold">Dried River</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Geography & Ancient Egypt
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn About It
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
                    Explore an ancient waterway near the pyramids
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
                      <Droplet className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Pyramids & Rivers?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    When we think of the pyramids of Giza, we often picture them
                    surrounded by vast stretches of desert. This is their
                    current reality, leading some to question any ancient text
                    that might suggest otherwise.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Common Perception
                    </h3>
                    <p>
                      For centuries, it's been widely assumed that the pyramids
                      stood in a desert environment, far from any significant
                      waterways, especially during their construction. This
                      makes references to rivers near them seem out of place.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-emerald-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <Compass className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>Modern Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fast forward to today, modern scientific techniques have
                    allowed archaeologists to peer beneath the desert sands and
                    uncover long-lost secrets.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <RotateCcw size={16} className="text-emerald-500" />{" "}
                      Finding the "Ahramat Branch"
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      Recent research, published in 2024, used satellite data
                      and geophysical surveys to find evidence of a major,
                      ancient branch of the Nile River that flowed right next to
                      where the pyramids were built.
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.nationalgeographic.com/history/article/scientists-find-evidence-of-ancient-waterway-beside-egypts-pyramids" // Example link, replace if needed
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Geographic, 2024
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplet size={16} className="text-blue-500" /> A Mighty
                        Waterway
                      </h3>
                      <p>
                        This wasn't a small stream! The "Ahramat Branch," as
                        it's called, was typically more than a quarter of a mile
                        wide, similar in size to the main Nile we see today.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <MapPin size={16} className="text-yellow-500" /> Right
                        Next Door
                      </h3>
                      <p>
                        In some places, the Ahramat branch ran only a few
                        hundred feet from the pyramids themselves. Imagine, a
                        major river within easy walking distance!
                      </p>
                    </div>
                  </div>

                  <p>
                    Scientists believe this river branch was crucial for the
                    ancient Egyptians to transport the colossal stones and
                    materials needed to build the pyramids. It served as their
                    "highway" from the quarry to the construction site.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <BookOpen className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>Now, let's look at a verse from the Quran:</p>
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/43/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/51" // Example link, replace if needed
                        className="text-amber-600 dark:text-amber-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 43:51
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And Pharaoh proclaimed among his people, saying, “O
                          my people, do I not own the Kingdom of Egypt, and
                          these rivers flow beneath me? Do you not see?"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٥١ وَنَادَىٰ فِرْعَوْنُ فِي قَوْمِهِ قَالَ يَا قَوْمِ
                          أَلَيْسَ لِي مُلْكُ مِصْرَ وَهَٰذِهِ الْأَنْهَارُ
                          تَجْرِي مِنْ تَحْتِي ۖ أَفَلَا تُبْصِرُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                      Meaning
                    </Badge>
                    <p className="mt-3">
                      Pharaoh, boasting of his dominion, mentions "these rivers
                      flow beneath me." Given that the pyramids were the seat of
                      Pharaonic power and were located near this newly
                      discovered dried river branch, the phrase "rivers flow
                      beneath me" aligns with the reality of the time the
                      pyramids were built, not the desert landscape known for
                      centuries since.
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
                      <Lightbulb className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Connecting the Dots</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here's where it gets really interesting. Consider the
                    knowledge available in the 7th century AD, when the Quran
                    was revealed:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have known about a
                      major, ancient river branch that dried up thousands of
                      years ago and was only just discovered in 2024?
                    </h3>
                    <p>
                      The vast desert landscape surrounding the pyramids was the
                      known reality for centuries. The existence of this
                      significant waterway, crucial during the time of the
                      pyramids' construction but long gone by the 7th century,
                      was lost to history. Its discovery required sophisticated
                      modern technology.
                    </p>
                  </div>

                  <p>
                    The Quran's description, put into the mouth of Pharaoh,
                    aligns with the geographical reality of Egypt thousands of
                    years ago, not the Egypt of the 7th century or indeed for
                    most of the time since the river dried up. This remarkable
                    alignment between an ancient text and a very recent
                    scientific discovery invites us to ponder the source of this
                    knowledge. It's a subtle but profound point that speaks to
                    the timeless nature of the information contained within the
                    Quran.
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
            <h3 className="text-lg font-medium">Rivers of the Past</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring how ancient texts echo modern discoveries about our
            planet's history.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DriedRiver;
