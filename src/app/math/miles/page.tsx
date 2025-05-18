/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  MapPin,
  BookOpen,
  Compass, // Using Compass for distance/direction
  Sparkles,
  ChevronRight,
  ArrowUp,
} from "lucide-react"; // Using lucide-react for icons
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Assuming shadcn/ui popover
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming shadcn/ui card
import { Badge } from "@/components/ui/badge"; // Assuming shadcn/ui badge

// Define the structure for each content section
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icon components
  color: string; // Tailwind classes for background color
  iconColor: string; // Tailwind classes for icon color
}

const QuranMiles = () => {
  // State to track the currently visible section for navigation highlighting
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Ref to store references to the section elements
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections using useMemo for stability
  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "A Distance Measured",
        icon: MapPin,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "The Quranic Verses",
        icon: BookOpen,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "distance",
        title: "Calculating the Distance",
        icon: Compass,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "reflection",
        title: "A Remarkable Correlation",
        icon: Sparkles,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
      },
    ];
  }, []); // Empty dependency array means this is memoized once

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If a section is intersecting, set it as the active section
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements defined in the contents array
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        // Store reference and observe the element
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    // Cleanup function for the effect
    return () => {
      // Disconnect the observer and clean up references
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Re-run effect if contents array changes (it won't due to useMemo)

  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Also update active section when clicking nav
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Main container with background and text colors, min-height
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      {/* Using colors related to the "Miles" topic, maybe a blue/purple gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Header icon */}
            <MapPin className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Miles</h1>
          </div>
          {/* Subtitle */}
          <p className="text-xl max-w-2xl text-blue-100">Mathematics - Easy</p>
          {/* Call to action buttons */}
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("quran")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar (Desktop) */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              {" "}
              {/* Make sidebar sticky */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Exploring distance and verses
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {/* Map through contents to create navigation links */}
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium" // Highlight active section
                            : ""
                        }`}
                      >
                        <Icon className={iconColor} size={18} />{" "}
                        {/* Section icon */}
                        <span>{title}</span> {/* Section title */}
                        {activeSection === id && (
                          <ChevronRight className="ml-auto" size={16} /> // Arrow for active section
                        )}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-20">
              {" "}
              {/* scroll-mt-20 for sticky nav offset */}
              <Card className="border-l-4 border-blue-500">
                {" "}
                {/* Section specific border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      {" "}
                      {/* Icon background */}
                      <MapPin className="text-blue-500" size={24} />{" "}
                      {/* Icon */}
                    </div>
                    <CardTitle>A Distance Measured</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Did you know there's a fascinating connection being explored
                    between specific verses in the Quran and the geographical
                    distance between two holy sites? It's a point that has led
                    many to ponder the depth of the scripture!
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Connection: Verses and Miles
                    </h3>
                    <p>
                      The idea revolves around the number of verses separating
                      two specific mentions of holy mosques in the Quran, and
                      how this number remarkably correlates with the distance in
                      miles between these mosques on Earth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Verses Section */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <BookOpen className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>The Quranic Verses</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation focuses on the first verse mentioning the
                    Sacred Mosque (Al-Masjid al-Haram in Mecca, where the Kaaba
                    is located) and the verse mentioning Al-Aqsa Mosque (in
                    Jerusalem) in the context of the Prophet Muhammad's night
                    journey (Al-Isra').
                  </p>
                  {/* Quran Verse 9:28 */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/9/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/28"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 9:28
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "O you who believe! The polytheists are polluted, so
                          let them not approach the Sacred Mosque after this
                          year of theirs. And if you fear poverty, Allah will
                          enrich you from His grace, if He wills. Allah is Aware
                          and Wise."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٨ يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا
                          الْمُشْرِكُونَ نَجَسٌ فَلَا يَقْرَبُوا الْمَسْجِدَ
                          الْحَرَامَ بَعْدَ عَامِهِمْ هَٰذَا ۚ وَإِنْ خِفْتُمْ
                          عَيْلَةً فَسَوْفَ يُغْنِيكُمُ اللَّهُ مِنْ فَضْلِهِ
                          إِنْ شَاءَ ۚ إِنَّ اللَّهَ عَلِيمٌ حَكِيمٌ
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Quran Verse 17:1 */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/17/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/1"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 17:1
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Glory to Him who journeyed His servant by night, from
                          the Sacred Mosque, to the Al-Aqsa Mosque, whose
                          precincts We have blessed, in order to show him of Our
                          wonders. He is the Listener, the Beholder."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١ سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِنَ
                          الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى
                          الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا
                          ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                      Verse Count
                    </Badge>
                    <p className="mt-3">
                      According to some counts, the verses containing the first
                      mention of the Sacred Mosque (Quran 9:28) and Al-Aqsa
                      Mosque (Quran 17:1) are separated by a specific number of
                      verses. Using one counting method (e.g., starting verse
                      count from the beginning of the Quran), Quran 9:28 is the
                      1263rd verse, and Quran 17:1 is the 2030th verse.
                    </p>
                    <p className="mt-2 font-medium">
                      The difference is: 2030 - 1263 = 767 verses.
                    </p>
                    {/* Link to the Quran Characters Counter source */}
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.kaheel7.com/ar/index.php/1/2087--2019"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source: Quran Characters Counter (Kaheel7.com)
                      </a>
                    </div>
                    {/* Placeholder for the image showing verse count calculation */}
                    {/* <div className="mt-4">
                                            <img src="/assets/images/distance13.webp" alt="Verse count calculation 1" className="w-full h-auto rounded-lg" />
                                        </div>
                                        <div className="mt-4">
                                            <img src="/assets/images/distance14.webp" alt="Verse count calculation 2" className="w-full h-auto rounded-lg" />
                                        </div> */}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Calculating Distance Section */}
            <section id="distance" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Compass className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Calculating the Distance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at the geographical distance between the
                    Sacred Mosque (Kaaba in Mecca) and Al-Aqsa Mosque in
                    Jerusalem.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Geographic Coordinates
                    </h3>
                    <p>
                      Using modern tools like Google Maps, we can find the
                      coordinates of these locations:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                      <li>Kaaba (Mecca): 21.4225° N, 39.8262° E</li>
                      <li>
                        Al-Aqsa Mosque (Jerusalem): 31.7761° N, 35.2358° E
                      </li>
                    </ul>
                    {/* Placeholder for the image showing Kaaba coordinates */}
                    {/* <div className="mt-4">
                                            <img src="/assets/images/distance1.webp" alt="Kaaba coordinates" className="w-full h-auto rounded-lg" />
                                        </div>
                                        {/* Placeholder for the image showing Al-Aqsa coordinates */}
                    {/* <div className="mt-4">
                                            <img src="/assets/images/distance2.webp" alt="Al-Aqsa coordinates" className="w-full h-auto rounded-lg" />
                                        </div> */}
                  </div>

                  <p>
                    By entering these coordinates into a geographical distance
                    calculator, we can find the approximate straight-line
                    (great-circle) distance between the two mosques.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Resulting Distance
                    </h3>
                    <p>Using a standard distance calculation tool:</p>
                    <div className="mt-3 font-medium text-lg">
                      The distance between the Kaaba and Al-Aqsa Mosque is
                      approximately{" "}
                      <span className="text-purple-700 dark:text-purple-300">
                        767 miles
                      </span>
                      .
                    </div>
                    {/* Link to the distance calculator used in the reference */}
                    <div className="mt-3 text-sm">
                      <a
                        href="http://boulter.com/gps/distance/?from=21.4225%C2%B0+N%2C+39.8262%C2%B0+E&to=31.7761%C2%B0+N%2C+35.2358%C2%B0+E&units=m"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify the distance calculation (boulter.com)
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection Section */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <Sparkles className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>A Remarkable Correlation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here's where the correlation becomes truly
                    thought-provoking:
                  </p>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      The number of verses separating the mentions of the Sacred
                      Mosque and Al-Aqsa Mosque is 767.
                      <br />
                      The geographical distance between these two mosques is
                      approximately 767 miles.
                    </h3>
                  </div>

                  <p>
                    Now, consider the context of the 7th century CE, when the
                    Quran was revealed.
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-pink-500" /> Knowledge
                      in the 7th Century
                    </h3>
                    <p>
                      In the 7th century, precise geographic measurement over
                      long distances was incredibly difficult. While people
                      certainly traveled and had estimations of distances,
                      accurate, large-scale surveys were not available.
                      Furthermore, the unit of "miles" was not a standard unit
                      of measurement in the Arabian Peninsula or the wider
                      Middle East at that time; distances were typically
                      measured using units like *farsakh* or based on travel
                      time.
                    </p>
                    <p className="mt-2">
                      Calculating the straight-line distance between two points
                      thousands of miles apart with the precision to match a
                      count within a text would require advanced geodesy and
                      mathematics far beyond the tools and knowledge available
                      to people in the 7th century.
                    </p>
                  </div>

                  <p>
                    The correlation between the count of verses and the
                    geographical distance in *miles*—a unit unfamiliar locally
                    and requiring sophisticated methods to measure accurately
                    over such a distance—is seen by many as a remarkable sign.
                    How could this specific numerical correspondence exist in a
                    text from that era? It's a point that invites deep
                    contemplation about the origin and nature of the Quran.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Fixed Button + Popover) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            {/* Mobile trigger button */}
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700">
              <MapPin size={24} /> {/* Icon for mobile nav */}
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            {/* Mobile navigation links within popover */}
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  // Scroll and close popover on click
                  onClick={() => {
                    scrollToSection(id);
                    // Note: Closing popover often needs access to the Popover component's state or a separate state handler.
                    // For simplicity here, we assume the popover manages its own close on trigger click or external click.
                    // A more robust solution might pass a `setOpen` prop from the Popover state.
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

      {/* Footer Section */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-blue-500" size={18} /> {/* Footer icon */}
            <h3 className="text-lg font-medium">
              Exploring Connections in the Quran
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Points of correlation between scripture and the world around us
            invite us to reflect on the divine wisdom.
          </p>
          {/* Back to Top button */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuranMiles;
