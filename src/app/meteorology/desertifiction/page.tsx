/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  CloudSun, // Icon for the header, represents meteorology/climate
  ChevronRight,
  Map, // Icon for Intro (Geography/Landscape)
  Satellite, // Icon for Science (Remote Sensing/NASA)
  BookOpen, // Icon for Quran (same as AstronomyDay)
  HelpCircle, // Icon for Reflection (same as AstronomyDay)
  ArrowUp,
  Sparkles,
  Quote, // For blockquotes/citations
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

// Define a type for the content items
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType; // Type for the Lucide icon component
  color: string; // Background color class
  iconColor: string; // Icon color class
}

const DesertificationTopic = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs if needed, or keep as any for flexibility
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Rivers Turn into Deserts",
        icon: Map,
        color: "bg-green-100 dark:bg-green-900", // Green for past fertility
        iconColor: "text-green-500",
      },
      {
        id: "science",
        title: "Scientific Discovery",
        icon: Satellite, // Represents remote sensing used by NASA
        color: "bg-blue-100 dark:bg-blue-900", // Blue for technology/discovery
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-purple-100 dark:bg-purple-900", // Distinct color for Quran section
        iconColor: "text-purple-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Amber for reflection/question
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
  }, [contents]); // Dependency array includes contents

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update state immediately for quicker UI feedback
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-700 to-amber-900 dark:from-yellow-900 dark:to-amber-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <CloudSun className="text-yellow-300" size={32} />{" "}
            {/* Header icon */}
            <h1 className="text-4xl font-bold">Desertification</h1>
          </div>
          <p className="text-xl max-w-2xl text-amber-100">
            Meteorology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-yellow-800 hover:bg-yellow-100"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-yellow-800"
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
              {/* Added sticky */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Explore how fertile lands become deserts
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
              <Card className="border-l-4 border-green-500">
                {" "}
                {/* Green border for past fertility */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Map className="text-green-500" size={24} />{" "}
                      {/* Intro icon */}
                    </div>
                    <CardTitle>Rivers Turn into Deserts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    It might seem counterintuitive, but places that were once
                    lush with water and greenery can indeed transform into vast,
                    arid deserts. For a long time, it was commonly thought that
                    a desert region was *always* a desert.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Lost City of Ubar
                    </h3>
                    <p>
                      Consider the legend of the lost city of Ubar in southern
                      Oman. For centuries, stories placed it deep within the
                      desolate desert. However, modern exploration has revealed
                      a different story!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                {" "}
                {/* Blue border for science/tech */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Satellite className="text-blue-500" size={24} />{" "}
                      {/* Science icon */}
                    </div>
                    <CardTitle>Scientific Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    In 1992, scientists using advanced remote sensing
                    technology, specifically space radar, made an incredible
                    discovery about the area thought to contain the lost city of
                    Ubar.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Radar Image
                      of Ubar
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "This is a radar image of the region around the site of
                      the lost city of Ubar in southern Oman, on the Arabian
                      Peninsula. The ancient city was discovered in 1992 with
                      the aid of remote sensing data. Archeologists believe Ubar
                      existed from about 2800 B.C. to about 300 A.D. and was a
                      remote desert outpost where caravans were assembled for
                      the transport of frankincense across the desert."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.jpl.nasa.gov/images/space-radar-image-of-the-lost-city-of-ubar"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NASA JPL, Space Radar Image of the Lost City of Ubar,
                        1999
                      </a>
                    </div>
                  </div>

                  <p>
                    Even more fascinating, the radar imaging revealed evidence
                    of ancient riverbeds underneath the sand, converging at
                    Ubar. This suggests that the area around Ubar wasn't always
                    a dry desert; it was once situated beside a flowing river!
                    The river eventually dried up, and the landscape became the
                    desert we see today.
                  </p>

                  {/* Image Section */}
                  <div className="image-wrapper my-8">
                    <img
                      className="w-full h-auto rounded-lg shadow-lg"
                      src="https://www.jpl.nasa.gov/images/space-radar-image-of-the-lost-city-of-ubar" // Using the direct NASA image URL
                      alt="NASA Space Radar Image of the region around the lost city of Ubar showing ancient riverbeds."
                    />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                {" "}
                {/* Purple border for Quran */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <BookOpen className="text-purple-500" size={24} />{" "}
                      {/* Quran icon */}
                    </div>
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      Addressing the People of Aad
                    </h3>
                    <p className="mb-4">
                      The Quran speaks about the people of Aad, who are
                      historically associated with this region of Arabia. When
                      the prophet Hud (peace be upon him) addressed his people
                      (Aad), he reminded them of the blessings God had given
                      them.
                    </p>
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/26/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/132"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 26:132-134
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And reverence Him, who supplied you with what you
                          know. He supplied you with livestock and children.{" "}
                          <span className="font-bold">
                            And gardens and springs.
                          </span>
                          "
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٣٢ وَاتَّقُوا الَّذِي أَمَدَّكُمْ بِمَا تَعْلَمُونَ
                          <br />
                          ١٣٣ أَمَدَّكُمْ بِأَنْعَامٍ وَبَنِينَ
                          <br />
                          ١٣٤ وَجَنَّاتٍ وَعُيُونٍ
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Key Phrases
                    </Badge>
                    <p className="mt-3">
                      The verses mention that God supplied the people of Aad
                      with "
                      <span className="font-bold">gardens and springs</span>" ($
                      وَجَنَّاتٍ وَعُيُونٍ $). This description points to a land
                      rich in vegetation and water sources, completely different
                      from the arid desert that defines the region today.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                {" "}
                {/* Amber border for reflection */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />{" "}
                      {/* Reflection icon */}
                    </div>
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's pause and consider the knowledge available in the 7th
                    century CE when the Quran was revealed.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living in the 7th century know that an
                      area deep in the Arabian desert, later associated with the
                      lost city of Ubar, was once a place of gardens and
                      springs?
                    </h3>
                    <p>
                      In that era, without satellite technology, radar imaging,
                      or modern geological methods, there was no way for people
                      to scientifically determine the past climate or landscape
                      features hidden beneath centuries of desert sand. The
                      common perception would have been that the desert was
                      simply... well, a desert.
                    </p>
                  </div>

                  <p>
                    Yet, the Quran describes the land of Aad—believed to be in
                    this very region—as having "gardens and springs," a
                    description precisely matching the scientific discovery of
                    Ubar's location on ancient riverbeds that supported
                    vegetation. This correlation, between an ancient text and
                    modern scientific findings about past environmental changes,
                    is quite remarkable and invites us to ponder the source of
                    such knowledge.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-yellow-700 hover:bg-yellow-800 dark:bg-amber-800 dark:hover:bg-amber-900">
              <CloudSun size={24} /> {/* Mobile nav trigger icon */}
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
            <Sparkles
              className="text-yellow-700 dark:text-amber-500"
              size={18}
            />{" "}
            {/* Footer icon */}
            <h3 className="text-lg font-medium">
              Exploring Earth's Changing Landscapes
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The Earth's history holds many secrets, sometimes echoed in ancient
            texts, revealed by modern science.
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

export default DesertificationTopic;
