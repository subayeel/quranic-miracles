/* eslint-disable react/no-unescaped-entities */
"use client"; // This directive is needed for client-side interactivity in Next.js App Router

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain, // Icon for mountains/landslides
  ChevronRight,
  Drill, // Icon for geological work
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  AlertTriangle, // Alternative icon for danger/landslide
} from "lucide-react";

// Assuming these components are from a UI library like shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the type for each content section item
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType; // Type for the Lucide icon component
  color: string; // Tailwind classes for background color
  iconColor: string; // Tailwind classes for icon color
}

const LandslideMiracle = () => {
  // State to track the currently visible section for navigation highlighting
  const [activeSection, setActiveSection] = useState("intro");
  // Ref to store DOM elements of sections for observation
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Memoize the content structure to avoid re-creating on every render
  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Shifting Ground",
        icon: Mountain, // Using Mountain for the overall topic
        color: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-600", // Earthy tone
      },
      {
        id: "geology",
        title: "Geological Facts",
        icon: Drill, // Representing scientific study
        color: "bg-cyan-100 dark:bg-cyan-900", // Different color for science
        iconColor: "text-cyan-600",
      },
      {
        id: "quran",
        title: "Quranic Verse",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900", // Consistent green for Quran
        iconColor: "text-green-600",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900", // Consistent amber for reflection
        iconColor: "text-amber-600",
      },
    ];
  }, []);

  // Effect to set up the Intersection Observer for tracking sections
  useEffect(() => {
    // Options for the observer: trigger when 30% of the section is visible
    const options: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If a section is intersecting, set it as the active section
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Get current refs to avoid issues with closure capturing stale values
    const currentRefs = sectionRefs.current;

    // Observe all section elements based on their IDs
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        // Store the element reference and start observing
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    // Cleanup function: stop observing when the component unmounts
    return () => {
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // Re-run effect if contents change (though memoized)

  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update active section immediately on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-stone-600 to-stone-800 dark:from-stone-800 dark:to-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Use AlertTriangle for a more impactful header icon related to danger */}
            <AlertTriangle className="text-yellow-400" size={32} />
            <h1 className="text-4xl font-bold">Landslides</h1>
          </div>
          <p className="text-xl max-w-2xl text-stone-200">
            Geology & Quran - A Potential Miracle
          </p>
          <div className="flex gap-4 mt-8">
            {/* Buttons to navigate to key sections */}
            <Button
              className="bg-white text-stone-700 hover:bg-stone-100"
              onClick={() => scrollToSection("geology")}
            >
              Explore Geology <ChevronRight size={16} className="ml-1" />
            </Button>
            <Button
              variant="outline"
              className="text-stone-100 border-stone-200 hover:bg-stone-700 hover:text-white"
              onClick={() => scrollToSection("intro")}
            >
              Understand the Topic
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar (hidden on small screens) */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              {" "}
              {/* Make sidebar sticky */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Navigate through Landslides & Quran
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
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {/* Show arrow for the active section */}
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

          {/* Main Content Sections */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-20">
              {" "}
              {/* Added scroll-mt to account for sticky header */}
              <Card className="border-l-4 border-stone-600 dark:border-stone-800">
                {" "}
                {/* Border color based on theme */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[0].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever thought about how the ground beneath us can
                    shift? We're exploring the fascinating world of landslides –
                    a phenomenon that involves the movement of rock, debris, or
                    earth down a slope.
                  </p>
                  <p>
                    While it was known in 7th-century Arabia that sandy areas
                    could collapse (like dunes caving in), the idea that solid,
                    rocky mountains could experience similar catastrophic
                    failures was largely unknown. Skeptics sometimes questioned
                    ancient texts that seemed to hint at such events in
                    unexpected places.
                  </p>
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-bold text-lg mb-3">
                      The 7th Century Perspective
                    </h3>
                    <p>
                      Imagine living 1400 years ago. You might see sand dunes
                      collapse, understanding that loose sand isn't always
                      stable. But if you looked at a massive, rocky mountain, it
                      would seem like the very definition of solid, immovable
                      ground. The concept of a mountain simply "caving in" was
                      likely outside the common understanding.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Geological Perspective Section */}
            <section id="geology" className="scroll-mt-20">
              <Card className="border-l-4 border-cyan-600 dark:border-cyan-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[1].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern geology gives us a much clearer picture of how and
                    where landslides occur. It turns out they aren't limited to
                    just loose soil or sand.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Drill size={16} className={contents[1].iconColor} /> What
                      Geologists Tell Us
                    </h3>
                    {/* Use the provided Wikipedia quote */}
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The term landslide or less frequently, landslip, refers
                      to several forms of mass wasting that include a wide range
                      of ground movements, such as rockfalls, deep-seated slope
                      failures, mudflows, and debris flows. Landslides occur in
                      a variety of environments, characterized by either steep
                      or gentle slope gradients, from mountain ranges to coastal
                      cliffs or even underwater, in which case they are called
                      submarine landslides."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Landslide"
                        className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Landslide, 2020
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain size={16} className={contents[1].iconColor} />{" "}
                        Not Just Sand
                      </h3>
                      <p>
                        Crucially, geological science confirms that landslides,
                        including rockfalls and deep slope failures, *do* occur
                        in mountain ranges made of rock. They aren't confined to
                        sandy or loose terrains.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-red-500" />{" "}
                        Diverse Environments
                      </h3>
                      <p>
                        Landslides happen in a wide range of environments –
                        steep mountains, gentle slopes, coastal cliffs, and even
                        underwater. It's a widespread natural process linked to
                        gravity and geological conditions.
                      </p>
                    </div>
                  </div>

                  <p>
                    So, while people in the 7th century understood localized
                    collapses in soft ground, the broader geological
                    understanding that massive rocky structures could fail and
                    slide was not part of common or scientific knowledge at that
                    time.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Verse Section */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-600 dark:border-green-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[2].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran, revealed in the 7th century, touches upon the
                    power of Allah over the earth, including the potential for
                    the land to collapse. Let's look at a specific verse:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/17/68" // Using Quran.com as an alternative link source
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 17:68
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        {/* Use the provided English translation */}
                        <p className="italic mb-4">
                          "Are you confident that He will not cause side of land
                          to cave in beneath you? Or unleash a tornado against
                          you? And then you find no protector for yourselves."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        {/* Use the provided Arabic text */}
                        <p dir="rtl">
                          ٦٨ أَفَأَمِنْتُمْ أَنْ يَخْسِفَ بِكُمْ جَانِبَ
                          الْبَرِّ أَوْ يُرْسِلَ عَلَيْكُمْ حَاصِبًا ثُمَّ لَا
                          تَجِدُوا لَكُمْ وَكِيلًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Understanding the Verse
                    </Badge>
                    <p className="mt-3">
                      The phrase "يَخْسِفَ بِكُمْ جَانِبَ الْبَرِّ" (yakhsifa
                      bikum janib al-barr) can be translated as "cause side of
                      land to cave in beneath you" or "cause the side of the
                      land to swallow you up." In the context of geological
                      events, "caving in" or "swallowing up" aligns remarkably
                      with the phenomenon of a landslide, which involves a mass
                      of earth or rock moving downwards.
                    </p>
                    <p className="mt-3">
                      Considering the knowledge available in the 7th century,
                      where the vast scale and mechanics of rocky mountain
                      landslides were unknown, this description in the Quran is
                      noteworthy. It speaks of the *land* generally, not just
                      loose sand, having the potential to collapse from the
                      side.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection Section */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-600 dark:border-amber-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents[3].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Connecting the geological understanding of landslides, which
                    can occur in various terrains including rocky mountains,
                    with the Quranic verse from the 7th century brings us to an
                    intriguing point:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century, when knowledge of
                      rocky mountain landslides was not widespread or
                      scientifically understood, describe the "side of land"
                      caving in?
                    </h3>
                    <p>
                      The Quranic verse speaks generally about the potential for
                      the land to collapse, a description that fits both the
                      known (sand dunes) and the then-unknown (rocky mountains)
                      types of landslides. This subtle yet accurate description,
                      predating modern geological confirmation by over a
                      thousand years, is considered by many to be a sign
                      pointing to the divine origin of the Quran. It invites us
                      to reflect on the source of this knowledge.
                    </p>
                  </div>

                  <p>
                    Exploring such correlations between ancient texts and modern
                    science can deepen our appreciation for the world around us
                    and the profound wisdom contained within scriptures.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-stone-600" size={18} />{" "}
            {/* Use theme color for footer icon */}
            <h3 className="text-lg font-medium">
              Reflecting on Earth's Power and Ancient Wisdom
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The dynamic forces shaping our planet continue to offer points of
            reflection and connection with texts from the past.
          </p>
          {/* Button to scroll back to the top of the page */}
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

export default LandslideMiracle;
