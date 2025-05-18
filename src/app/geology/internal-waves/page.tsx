/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Waves, // Using Waves icon for internal waves
  ChevronRight,
  FlaskConical, // Using FlaskConical for science
  BookOpen,
  Lightbulb, // Using Lightbulb for reflection/insight
  ArrowUp,
  Sparkles,
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

// Define a type for the content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Use React.ElementType for component types like icons
  color: string; // Background color class
  iconColor: string; // Icon color class
}

const InternalWavesComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a more specific type for sectionRefs if possible, but basic object is okay too
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Hidden Ocean Waves",
        icon: Waves,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-600",
      },
      {
        id: "science",
        title: "Scientific Discovery",
        icon: FlaskConical,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-600",
      },
      {
        id: "quran",
        title: "A Quranic Insight",
        icon: BookOpen,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-600",
      },
      {
        id: "reflection",
        title: "Considering the Knowledge",
        icon: Lightbulb,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-600",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
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
        sectionRefs.current[id] = element; // Store reference
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
  }, [contents]); // Depend on contents

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
            <Waves className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Internal Ocean Waves</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Hydrology - Advanced
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
              className="text-white border-white hover:bg-blue-800"
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
                    Explore hidden ocean phenomena
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
                      <Waves className="text-cyan-600" size={24} />
                    </div>
                    <CardTitle>Hidden Ocean Waves</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    When we think of ocean waves, we usually picture the ones
                    crashing on the shore. But beneath the surface, in the vast
                    depths, another type of wave exists – internal waves.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3">
                      Waves Beneath the Surface
                    </h3>
                    <p>
                      For a long time, the idea of waves existing deep within
                      the ocean, hidden from view, wasn't widely known or
                      understood. Some skeptics might have questioned their very
                      existence, assuming only surface waves were possible.
                      However, modern oceanography has confirmed the reality and
                      importance of these fascinating internal waves.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Discovery */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <FlaskConical className="text-teal-600" size={24} />
                    </div>
                    <CardTitle>Scientific Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Scientific research has revealed the nature of internal
                    ocean waves. They are gravity waves that occur *within* the
                    water column, not just on the surface.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      Scientific Understanding
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Internal waves are gravity waves that oscillate within a
                      fluid medium, rather than on its surface. To exist, the
                      fluid must be stratified: the density must decrease
                      continuously or discontinuously with depth/height due to
                      changes, for example, in temperature and/or salinity."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Internal_wave" // Assuming this is the source page
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Internal Wave, 2018
                      </a>
                    </div>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-4">
                      "The internal waves travel more slowly than surface waves
                      of similar amplitude... The internal waves typically have
                      wavelengths from hundreds of meters to tens of kilometers
                      and have periods from several minutes to several hours.
                      Internal waves are trapped in the pycnocline of stratified
                      oceans."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.jstor.org/stable/23010931" // Assuming this is the source URL or similar
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Journal of Coastal Research, Remote sensing of ocean
                        internal waves: an overview, 2012
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Waves size={16} className="text-teal-600" /> Hidden
                        Layers
                      </h3>
                      <p>
                        These waves exist within layers of the ocean where water
                        density changes, often due to temperature or salinity
                        differences.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <FlaskConical size={16} className="text-teal-600" />{" "}
                        Below the Light
                      </h3>
                      <p>
                        In deep oceans, these density layers (the pycnocline)
                        are far below the surface where sunlight penetrates (the
                        photic zone).
                      </p>
                    </div>
                  </div>
                  <p>
                    Crucially, this means that internal waves in the vast, deep
                    parts of the ocean travel in complete darkness, a fact
                    understood through modern scientific methods and
                    observations.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="text-blue-600" size={24} />
                    </div>
                    <CardTitle>A Quranic Insight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    It is remarkable to find a description in the Quran that
                    seems to touch upon this very phenomenon.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/24/40" // Using a standard Quran site URL
                        className="text-blue-600 dark:text-blue-400 hover:underline"
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
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Noteworthy Description
                    </Badge>
                    <p className="mt-3">
                      The verse describes "depths of darkness in a vast deep
                      ocean," followed by "waves topped by waves, topped by
                      clouds." Considering the layers of the ocean, this
                      sequence "waves (deep) topped by waves (surface) topped by
                      clouds (atmosphere)" aligns surprisingly well with the
                      concept of internal waves existing in the dark depths,
                      beneath the surface waves, and below the clouds. The
                      description of the darkness being so intense that "if a
                      man stretches out his hand, he will not see it" perfectly
                      matches the environment of deep internal waves, far below
                      where light can reach.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Lightbulb className="text-indigo-600" size={24} />
                    </div>
                    <CardTitle>Considering the Knowledge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Thinking about the knowledge available in the 7th century
                    raises a fascinating question:
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living 1400 years ago have known about
                      internal ocean waves, especially their existence in the
                      total darkness of the deep sea?
                    </h3>
                    <p>
                      At that time, understanding of oceanography was limited
                      primarily to the surface. There were no submarines, sonar,
                      or sophisticated sensors to probe the deep ocean and
                      detect these hidden waves and the distinct layers of
                      darkness and density. The correlation between the Quran's
                      description and modern scientific discovery is truly
                      thought-provoking.
                    </p>
                  </div>

                  <p>
                    This precise depiction of layers of darkness and waves deep
                    within the ocean seems to point to knowledge that was far
                    beyond the reach of people in the 7th century. It invites us
                    to reflect on the source of such detailed and accurate
                    descriptions found in the Quran.
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
            <Sparkles className="text-blue-600" size={18} />
            <h3 className="text-lg font-medium">Exploring Ocean Mysteries</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The wonders of our oceans continue to reveal insights, bridging
            ancient texts with modern scientific exploration.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InternalWavesComponent;
