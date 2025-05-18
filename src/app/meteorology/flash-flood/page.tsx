/* eslint-disable react/no-unescaped-entities */
"use client"; // This directive is necessary for client-side interactivity in Next.js 13+

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  CloudRain, // Icon for rain/water
  ChevronRight,
  Waves, // Icon for water/flood
  BookOpen,
  Quote,
  Droplet, // Icon for water droplet
  ArrowUp,
  Sparkles,
  TreeDeciduous, // Icon potentially related to wood
} from "lucide-react"; // Using lucide-react for icons

// Assume these components are available from your Shadcn UI setup
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

// Define interface for the content sections for better type safety
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for a React functional component (like an icon)
  color: string; // Tailwind classes for background color
  iconColor: string; // Tailwind classes for icon color
}

const FlashFloodTopic: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Use a Ref to store section elements for IntersectionObserver
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections using useMemo to prevent re-creation on every render
  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Sudden Surge in Water",
        icon: CloudRain,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Understanding Flash Floods",
        icon: Waves,
        color: "bg-gray-100 dark:bg-gray-800", // Using gray for a different color scheme
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
        title: "A Point to Ponder",
        icon: Sparkles, // Changed icon for reflection
        color: "bg-teal-100 dark:bg-teal-900", // Using teal for reflection
        iconColor: "text-teal-500",
      },
    ];
  }, []); // Empty dependency array ensures this runs only once

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null, // Observes relative to the viewport
      rootMargin: "0px", // No margin
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      options
    );

    const currentRefs = sectionRefs.current;

    // Observe all section elements specified in contents
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    // Clean up observer when the component unmounts or contents change
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Re-run effect if contents array identity changes (though useMemo prevents this)

  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update active section state
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  return (
    // Main container div with background and text colors
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-gray-800 dark:from-blue-900 dark:to-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Header Icon */}
            <Waves className="text-blue-300" size={32} />
            {/* Header Title */}
            <h1 className="text-4xl font-bold">Flash Flood</h1>
          </div>
          {/* Header Subtitle */}
          <p className="text-xl max-w-2xl text-blue-200">
            Meteorology - Extreme
          </p>
          {/* Header Buttons */}
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} className="ml-1" />
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

      {/* Main Content and Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar (Desktop) */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              {" "}
              {/* Sticky positioning */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Navigate the topic of flash floods
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {/* Map through contents to create sidebar links */}
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors rounded-md
                                                    hover:bg-gray-100 dark:hover:bg-gray-800
                                                    ${
                                                      activeSection === id
                                                        ? "bg-gray-100 dark:bg-gray-800 font-medium text-blue-600 dark:text-blue-400" // Highlight active link
                                                        : "text-gray-700 dark:text-gray-300"
                                                    }`}
                      >
                        {/* Icon for the link */}
                        <Icon className={iconColor} size={18} />
                        {/* Title for the link */}
                        <span>{title}</span>
                        {/* Indicator for active section */}
                        {activeSection === id && (
                          <ChevronRight
                            className="ml-auto text-blue-600 dark:text-blue-400"
                            size={16}
                          />
                        )}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-20">
              {" "}
              {/* scroll-mt for sticky header offset */}
              <Card className="border-l-4 border-blue-500">
                {" "}
                {/* Card with left border color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Section Icon */}
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <CloudRain className="text-blue-500" size={24} />
                    </div>
                    {/* Section Title */}
                    <CardTitle>Sudden Surge in Water</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  {/* Content based on reference */}
                  <p className="font-medium">
                    Imagine a sudden, powerful rush of water where you least
                    expect it. That's a flash flood! These aren't like
                    slow-rising river floods; they happen quickly and can be
                    incredibly destructive.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Droplet size={20} className="text-blue-600" /> A Unique
                      Phenomenon
                    </h3>
                    <p>
                      Flash floods can occur with little warning, often in dry
                      areas like deserts or canyons after heavy rainfall, or
                      even in urban areas due to rapid runoff. A fascinating
                      detail about them is how they carry debris, and
                      specifically how lighter materials like wood behave on the
                      turbulent surface.
                    </p>
                  </div>
                  <p>
                    What's truly remarkable is that a text from 1400 years ago
                    seems to describe this very phenomenon, including that
                    specific detail about how materials are carried by the
                    floodwaters. At a time when the science of hydrology was
                    non-existent, this raises a compelling question.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation Section */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-gray-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <Waves className="text-gray-500" size={24} />
                    </div>
                    <CardTitle>Understanding Flash Floods</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  {/* Content based on reference */}
                  <div className="bg-gray-50 dark:bg-gray-900/30 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-gray-500" /> Scientific
                      Description
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Flash floods are the most common flood type in
                      normally-dry channels in arid zones, known as arroyos in
                      the southwest United States and many other names
                      elsewhere."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Flood"
                        className="text-gray-600 dark:text-gray-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Flood, 2019 (excerpt)
                      </a>
                    </div>
                  </div>

                  <p>
                    Flash floods are characterized by their rapid onset and
                    powerful, turbulent flow. This turbulence can pick up and
                    carry a wide variety of debris, including mud, rocks, and
                    vegetation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplet size={16} className="text-blue-500" /> Rapid
                        Onset
                      </h3>
                      <p>
                        Unlike typical river floods that build up over hours or
                        days, flash floods happen within minutes to a few hours
                        of excessive rainfall, often in areas with poor drainage
                        or steep terrain.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <TreeDeciduous size={16} className="text-green-500" />{" "}
                        Floating Debris
                      </h3>
                      <p>
                        The turbulent water in a flash flood easily carries
                        loose objects. Lighter materials, like wood, often float
                        on the surface, sometimes caught in the 'froth' or
                        turbulent foam that forms on the fast-moving water.
                      </p>
                    </div>
                  </div>

                  <p>
                    This behavior of debris, particularly lighter materials
                    floating on top of the churning water and froth, is a
                    observable characteristic of such powerful, sudden floods.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference Section */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Mention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  {/* Content based on reference */}
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/13/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/17"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 13:17
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "He sends down water from the sky, and riverbeds flow
                          according to their capacity. The current carries
                          swelling froth and from what they burn for fire, to
                          make ornaments or utensils comes a similar froth. Thus
                          Allah exemplifies truth and falsehood. As for the
                          froth, it is swept away, but what benefits the people
                          remains in the ground. Thus Allah presents the
                          analogies."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٧ أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَسَالَتْ أَوْدِيَةٌ
                          بِقَدَرِهَا فَاحْتَمَلَ السَّيْلُ زَبَدًا رَابِيًا ۚ
                          وَمِمَّا يُوقِدُونَ عَلَيْهِ فِي النَّارِ ابْتِغَاءَ
                          حِلْيَةٍ أَوْ مَتَاعٍ زَبَدٌ مِثْلُهُ ۚ كَذَٰلِكَ
                          يَضْرِبُ اللَّهُ الْحَقَّ وَالْبَاطِلَ ۚ فَأَمَّا
                          الزَّبَدُ فَيَذْهَبُ جُفَاءً ۖ وَأَمَّا مَا يَنْفَعُ
                          النَّاسَ فَيَمْكُثُ فِي الْأَرْضِ ۚ كَذَٰلِكَ يَضْرِبُ
                          اللَّهُ الْأَمْثَالَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrases
                    </Badge>
                    <p className="mt-3 space-y-2">
                      <span>"فَاحْتَمَلَ السَّيْلُ زَبَدًا رَابِيًا"</span> -
                      "The current carries swelling froth". This vividly
                      describes the turbulent, foamy surface of fast-moving
                      floodwater.
                      <br />
                      <span>"وَمِمَّا يُوقِدُونَ عَلَيْهِ فِي النَّارِ"</span> -
                      "and from what they burn for fire". As noted in the
                      reference, this refers to wood. The verse describes
                      something *similar* to the froth ("زَبَدٌ مِثْلُهُ")
                      coming from this material, carried by the current. This
                      aligns with wood floating on the surface, alongside the
                      froth.
                    </p>
                  </div>

                  <p>
                    The description paints a picture of a powerful water current
                    carrying debris, specifically mentioning froth and
                    referencing material used for fire (wood) being similarly
                    carried on top. This is a precise observation of how flash
                    floods behave.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection Section */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Sparkles className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  {/* Reflection based on reference and 7th-century context */}
                  <p>
                    Considering the context of the 7th century, particularly in
                    the Arabian Peninsula where large, consistent rivers and
                    dramatic flash floods with visible floating debris might not
                    have been everyday occurrences for everyone, this detailed
                    description is quite striking.
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-xl mb-3 text-center text-teal-800 dark:text-teal-200">
                      How could this specific detail about flash floods and
                      floating wood have been known 1400 years ago?
                    </h3>
                    <p className="text-teal-700 dark:text-teal-300">
                      The Quranic verse doesn't just mention water; it describes
                      the *behavior* of the floodwater—carrying turbulent froth
                      and indicating that lighter materials like wood are
                      carried similarly on the surface. This isn't just a
                      general statement about rain; it's an accurate depiction
                      of a specific hydrological phenomenon.
                    </p>
                  </div>

                  <p>
                    In an era without scientific instruments to study flood
                    dynamics and in a region where such dramatic, debris-laden
                    flash floods might not have been universally observed in
                    such detail, the presence of this description in the Quran
                    is a point that invites deep reflection on its origins. It's
                    a fascinating harmony between an ancient text and modern
                    understanding of how powerful floodwaters behave.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Popover) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            {/* Mobile Nav Trigger Button */}
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              <Waves size={24} /> {/* Icon for mobile trigger */}
            </Button>
          </PopoverTrigger>
          {/* Popover Content for Mobile Nav */}
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {/* Map through contents to create mobile links */}
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    // Optional: close popover after clicking
                    // document.getElementById('popover-trigger-id').click();
                  }}
                  className={`flex items-center gap-3 p-3 w-full text-left transition-colors rounded-md
                                        hover:bg-gray-100 dark:hover:bg-gray-800
                                        ${
                                          activeSection === id
                                            ? "bg-gray-100 dark:bg-gray-800 font-medium text-blue-600 dark:text-blue-400" // Highlight active link
                                            : "text-gray-700 dark:text-gray-300"
                                        }`}
                >
                  {/* Icon for the link */}
                  <Icon className={iconColor} size={18} />
                  {/* Title for the link */}
                  <span>{title}</span>
                  {/* Indicator for active section */}
                  {activeSection === id && (
                    <ChevronRight
                      className="ml-auto text-blue-600 dark:text-blue-400"
                      size={16}
                    />
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
            <Waves className="text-blue-600 dark:text-blue-400" size={18} />
            <h3 className="text-lg font-medium">Exploring Water's Power</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The dynamic forces of nature reveal wonders that resonate across
            time.
          </p>
          {/* Back to Top Button */}
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

export default FlashFloodTopic;
