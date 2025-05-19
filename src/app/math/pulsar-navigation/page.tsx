/* eslint-disable react/no-unescaped-entities */
"use client"; // This is needed for client-side interactivity like scrolling

import React from "react"; // Explicitly import React
import {
  Compass, // Using Compass for navigation theme
  Star, // For stars/pulsars
  Satellite, // For GPS contrast
  BookOpen, // For Quran reference
  HelpCircle, // For reflection/question
  ArrowUp, // For back to top
  Sparkles,
  ChevronRight,
  Quote, // For general highlight
} from "lucide-react"; // Icon library

import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn/ui card
import { Badge } from "@/components/ui/badge"; // Assuming shadcn/ui badge

// Define the component with explicit React.FC type
const PulsarNavigation: React.FC = () => {
  // Type the id parameter as string
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with smooth behavior
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-blue-300" size={32} /> {/* Use a Star icon */}
            <h1 className="text-4xl font-bold">Navigation</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Pulsars - A Cosmic Compass
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-600">
                {" "}
                {/* Blue border */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Compass className="text-blue-600" size={24} />{" "}
                      {/* Compass icon */}
                    </div>
                    <CardTitle>Guiding By The Stars</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran mentions that humans are guided by stars. Some
                    have questioned how this could be true, as visible stars
                    appear to move in the night sky, seemingly not pointing
                    consistently in a single direction for navigation. However,
                    modern science has revealed a fascinating new way stars can
                    indeed serve as reliable navigational beacons: through
                    pulsars.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      From GPS to Pulsar Navigation
                    </h3>
                    <p>
                      Today, we heavily rely on GPS, which uses artificial
                      satellites to pinpoint location. While effective, these
                      satellites are vulnerable. Scientists have recently
                      discovered that natural, highly predictable signals from
                      pulsars can be used instead, offering a secure and free
                      method for determining precise location, much like a
                      natural, cosmic GPS.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-600">
                {" "}
                {/* Purple border */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Satellite className="text-purple-600" size={24} />{" "}
                      {/* Satellite icon */}
                    </div>
                    <CardTitle>The Science of Pulsar Navigation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-purple-600" /> Modern
                      Discovery
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "X-ray pulsar-based navigation and timing (XNAV) or simply
                      pulsar navigation is a navigation technique whereby the
                      periodic X-ray signals emitted from pulsars are used to
                      determine the location of a vehicle, such as a spacecraft
                      in deep space. A vehicle using XNAV would compare received
                      X-ray signals with a database of known pulsar frequencies
                      and locations. Similar to GPS, this comparison would allow
                      the vehicle to calculate its position accurately (±5 km).
                      The advantage of using X-ray signals over radio waves is
                      that X-ray telescopes can be made smaller and lighter.
                      Experimental demonstrations have been reported in 2018."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Pulsar-based_navigation"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Pulsar-Based Navigation, 2022
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Star size={16} className="text-purple-600" /> What is a
                        Pulsar?
                      </h3>
                      <p>
                        A pulsar is a highly magnetized, rotating neutron star
                        that emits beams of electromagnetic radiation out of its
                        magnetic poles. These beams, when detected from Earth,
                        appear as regular pulses, much like a lighthouse beam.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Compass size={16} className="text-gray-500" /> How XNAV
                        Works
                      </h3>
                      <p>
                        By precisely measuring the arrival times of X-ray pulses
                        from multiple known pulsars, a craft can triangulate its
                        position without relying on ground stations or
                        potentially vulnerable satellites.
                      </p>
                    </div>
                  </div>

                  <p>
                    This sophisticated method of using specific types of stars
                    (pulsars) for navigation is a very recent technological and
                    scientific achievement, confirmed experimentally only in the
                    late 2010s.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-600">
                {" "}
                {/* Green border */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-600" size={24} />{" "}
                      {/* BookOpen icon */}
                    </div>
                    <CardTitle>Guidance in The Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/16/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/16"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 16:16
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And landmarks. And by the stars they guide
                          themselves."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٦ وَعَلَامَاتٍ ۚ وَبِالنَّجْمِ هُمْ يَهْتَدُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "وَالنجْمِ هُمْ يَهْتَدُونَ" (wa bin-najmi hum
                      yahtadoon) translates to "and by the star/stars they guide
                      themselves." While traditionally interpreted in the
                      context of using constellations for navigation, the modern
                      discovery of pulsar navigation offers a fascinating new
                      dimension to this verse.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-600">
                {" "}
                {/* Amber border */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-600" size={24} />{" "}
                      {/* HelpCircle icon */}
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific understanding available in the
                    7th century, the concept of using stars for precise,
                    reliable navigation beyond simple constellation tracking
                    would have been unknown.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this possibility of using stars for advanced
                      navigation have been mentioned in the Quran over 1400
                      years ago?
                    </h3>
                    <p>
                      The alignment between this ancient text, understood in its
                      original context, and the cutting-edge discovery of
                      pulsar-based navigation in modern times is a remarkable
                      point for reflection on the source of such knowledge.
                    </p>
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
            <Sparkles className="text-blue-600" size={18} />{" "}
            {/* Sparkles icon */}
            <h3 className="text-lg font-medium">Exploring Cosmic Guidance</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The universe holds wonders that connect ancient wisdom with modern
            exploration.
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

export default PulsarNavigation;
