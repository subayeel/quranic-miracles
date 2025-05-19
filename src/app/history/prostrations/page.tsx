/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  User, // Or another suitable icon for human actions/worship
  ChevronRight,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Footprints, // Represents historical traces/evidence
  Quote, // For quoting or highlighting points
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

// Define a type for the section content structure
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind class for background color
  iconColor: string; // Tailwind class for icon color
}

const ProstrationComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Prostration Styles",
        icon: User,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "historical",
        title: "Historical Evidence",
        icon: Footprints,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "quran",
        title: "Quranic Mention",
        icon: BookOpen,
        color: "bg-violet-100 dark:bg-violet-900",
        iconColor: "text-violet-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-pink-100 dark:bg-pink-900", // Using pink for reflection/wonder
        iconColor: "text-pink-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Section is considered active when 30% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the section id that is most visible or first intersecting
          const currentSections = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio); // Sort by visibility

          if (currentSections.length > 0) {
            setActiveSection(currentSections[0].target.id);
          } else {
            // Fallback if no section is intersecting (e.g., at the very top)
            if (
              window.scrollY <
              (document.getElementById(contents[0].id)?.offsetTop || 0) + 100
            ) {
              setActiveSection(contents[0].id);
            }
          }
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements listed in contents
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    // Handle initial load state
    // A small delay to ensure elements are rendered before checking position
    const timeoutId = setTimeout(() => {
      const firstSection = document.getElementById(contents[0].id);
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          setActiveSection(contents[0].id);
        } else {
          // If not even the first section is visible, maybe set active based on scroll position
          // This is a basic fallback, more robust logic might be needed for complex layouts
          const scrollPos = window.scrollY;
          let currentActiveId = contents[0].id;
          for (let i = 0; i < contents.length; i++) {
            const sectionElement = document.getElementById(contents[i].id);
            if (
              sectionElement &&
              sectionElement.offsetTop <= scrollPos + window.innerHeight / 3
            ) {
              // Consider a section active if its top is within view + a buffer
              currentActiveId = contents[i].id;
            } else {
              break; // Stop if we pass the current scroll position
            }
          }
          setActiveSection(currentActiveId);
        }
      }
    }, 100); // Small delay

    return () => {
      // Clean up observer and timeout
      clearTimeout(timeoutId);
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]); // contents is a dependency because it defines the elements to observe

  const scrollToSection = (id: string) => {
    // Update active section state immediately for responsiveness
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Add a small offset to account for sticky header/nav if applicable, or just scroll into view
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-purple-200" size={32} /> {/* Icon update */}
            <h1 className="text-4xl font-bold">Prostration</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Exploring Historical Contexts
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("historical")}
            >
              Discover History <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-700 border-purple-400 hover:bg-purple-50/20 dark:hover:bg-purple-900/20"
              onClick={() => scrollToSection("intro")}
            >
              Start Reading
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
                  <CardDescription>Explore ancient prostration</CardDescription>
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
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <User className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Prostration Styles Across Time</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    When Muslims pray, they perform a beautiful act of humility
                    called prostration, or "Sujud". This involves placing the
                    forehead, nose, palms, knees, and feet on the ground,
                    showing complete submission.
                  </p>
                  <p>
                    However, the Quran mentions something that might sound a
                    little different at first glance. It speaks of some ancient
                    people prostrating in a way that involves their "chins".
                    This has led some skeptics to question the Quran's accuracy,
                    believing prostration has always meant touching the forehead
                    to the ground. But let's explore this further...
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">The Question</h3>
                    <p>
                      If prostration today means forehead to the ground, what
                      did it mean in ancient times, and what does the Quran's
                      mention of prostrating on chins imply?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Evidence */}
            <section id="historical" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Footprints className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Historical Evidence Unearthed</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    For centuries, the idea of prostrating on the chin might
                    have seemed unfamiliar or incorrect to many. However, in
                    more recent times, discoveries from archaeology and
                    Egyptology have shed fascinating light on ancient practices.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> Echoes
                      from Ancient Egypt
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      Evidence has been found depicting ancient Egyptian priests
                      performing acts of deep reverence and worship where they
                      appear to be bowing so low that their chins or beards
                      touch the ground. This posture was a form of profound
                      humiliation and submission before a deity or royalty.
                    </p>
                    <div className="mt-3 text-sm">
                      Such depictions can be seen in artifacts and temple
                      engravings. For instance, references point to imagery like
                      the "Two bowing courtiers behind Nefertiti" at the MET
                      Museum, and descriptions of the "Dawn prayer at Edfo
                      Temple" as highlighted by Elmizan, suggesting this was a
                      known form of significant worship among ancient priests.
                      These findings are relatively recent contributions to our
                      historical understanding.
                    </div>
                  </div>

                  <p>
                    These archaeological discoveries confirm that, contrary to
                    the assumption that only forehead prostration existed,
                    prostrating on the chin was indeed a practice observed by
                    some ancient cultures during acts of worship or deep
                    respect.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Mention */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-violet-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900">
                      <BookOpen className="text-violet-500" size={24} />
                    </div>
                    <CardTitle>The Quranic Mention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at the specific verse in the Quran that
                    mentions this form of prostration:
                  </p>
                  <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border border-violet-100 dark:border-violet-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/17/107" // Changed to a general Quran site if quranwow link is specific
                        className="text-violet-600 dark:text-violet-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 17:107
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Say, “Believe in it, or do not believe.” Indeed,
                          those who were given knowledge before it—when it is
                          recited to them, they fall to their chins,
                          prostrating."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          قُلْ آمِنُوا بِهِ أَوْ لَا تُؤْمِنُوا ۚ إِنَّ
                          الَّذِينَ أُوتُوا الْعِلْمَ مِنْ قَبْلِهِ إِذَا
                          يُتْلَىٰ عَلَيْهِمْ يَخِرُّونَ لِلْأَذْقَانِ سُجَّدًا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "يَخِرُّونَ لِلْأَذْقَانِ سُجَّدًا"
                      (yakhirroona lil-adhqani sujjadaa) is translated as "they
                      fall to their chins, prostrating." This directly describes
                      the action of prostrating in a way that involves the chin
                      touching the ground.
                    </p>
                  </div>
                  <p>
                    This verse speaks about a group of people who, upon hearing
                    the recitation, demonstrate their profound submission by
                    prostrating specifically onto their chins.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                {" "}
                {/* Pink border */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      {" "}
                      {/* Pink background */}
                      <Sparkles className="text-pink-500" size={24} />{" "}
                      {/* Pink icon */}
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Here's where the remarkable aspect comes into focus.
                    Consider the context of the 7th century CE, when the Quran
                    was revealed. At that time, detailed knowledge of ancient
                    Egyptian religious practices, especially specific postures
                    of worship like prostrating on the chin, was simply not
                    available. There was no field of Egyptology as we know it
                    today; the Rosetta Stone, key to deciphering hieroglyphs,
                    wasn't discovered until centuries later.
                  </p>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    {" "}
                    {/* Pink highlight box */}
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living in the 7th century know about
                      this specific, unusual form of ancient prostration?
                    </h3>
                    <p>
                      The discovery by modern Egyptologists that ancient priests
                      did indeed prostrate on their chins aligns remarkably with
                      the Quranic description. This was not a commonly known
                      practice in the 7th century, making its mention in the
                      Quran quite noteworthy.
                    </p>
                  </div>

                  <p>
                    The correlation between a detail in a 7th-century text and a
                    specific historical practice later uncovered by modern
                    archaeological efforts is a point of deep reflection for
                    many. It invites us to consider the source of such precise
                    and seemingly inaccessible historical information within the
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
            <Sparkles className="text-purple-500" size={18} />{" "}
            {/* Icon color update */}
            <h3 className="text-lg font-medium">
              Reflecting on Ancient Wisdom
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting historical discoveries with textual references invites us
            to ponder deeper meanings.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-purple-700 border-purple-400 hover:bg-purple-50/20 dark:hover:bg-purple-900/20" // Button style update
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProstrationComponent;
