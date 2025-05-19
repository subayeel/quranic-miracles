/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Home, // Represents homeland/city
  Mouse, // Represents the rat legend
  Layers, // Represents archaeology/layers of discovery
  BookOpen, // Represents the Quran
  HelpCircle, // Represents reflection/question
  ArrowUp, // Scroll to top
  Sparkles,
  ChevronRight,
  Quote, // Miracle/wonder
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

// Define types for the content structure
interface UbarContentItem {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Tailwind background color class for section card border & icon background
  iconColor: string; // Tailwind text color class for icon
}

const UbarDam: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: UbarContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Legend vs. Reality",
        icon: Home,
        color: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-500",
      },
      {
        id: "legend",
        title: "The 7th Century Legend",
        icon: Mouse,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
      {
        id: "archaeology",
        title: "Modern Archaeology",
        icon: Layers,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
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

    // Clear previous observations and observe current elements
    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach((element) => {
      if (element) observer.unobserve(element);
    });
    sectionRefs.current = {}; // Reset refs

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      Object.values(sectionRefs.current).forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [contents]); // Depend on contents to re-observe if sections change (though static here)

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
      <div className="bg-gradient-to-r from-stone-600 to-stone-800 dark:from-stone-800 dark:to-stone-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Home className="text-stone-300" size={32} />
            <h1 className="text-4xl font-bold">The Flooded City</h1>
          </div>
          <p className="text-xl max-w-2xl text-stone-200">
            Ubar & The Mystery of the Marib Dam Collapse
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-stone-700 hover:bg-stone-100"
              onClick={() => scrollToSection("legend")}
            >
              Explore History <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-stone-100 border-stone-300 hover:bg-stone-700"
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
                    Uncover the truth about the Marib Dam
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
              <Card className="border-l-4 border-stone-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900">
                      <Home className="text-stone-500" size={24} />
                    </div>
                    <CardTitle>Legend vs. Reality</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The ancient city or civilization associated with the Marib
                    Dam in Yemen has long been shrouded in mystery, particularly
                    regarding the cause of its decline and the catastrophic
                    collapse of the Great Dam that sustained it. For centuries,
                    legends circulated about what happened.
                  </p>
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-bold text-lg mb-3">
                      Unraveling Ancient Accounts
                    </h3>
                    <p>
                      Different accounts existed about the demise of this once
                      flourishing civilization. One popular story from the past
                      attributed the destruction of their vital dam to a rather
                      unusual cause – an army of giant rats.
                    </p>
                  </div>
                  <p>
                    But what does modern investigation tell us? Let's compare
                    the ancient belief with what we know today.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* The 7th Century Legend */}
            <section id="legend" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Mouse className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>The 7th Century Legend</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Around 1400 years ago, in the 7th century, when the Quran
                    was revealed, a common explanation for the destruction that
                    befell the people of Sheba and the collapse of their dam was
                    a rather fanciful tale.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-orange-500" /> According
                      to Legend...
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "According to legend, the breach was caused by large rats
                      gnawing at it with their teeth and scratching it with
                      their nails."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.amusingplanet.com/2018/06/the-collapse-of-marib-dam-and-fall-of.html"
                        className="text-orange-600 dark:text-orange-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Amusing Planet, The Collapse of Marib Dam And The Fall
                        of an Empire, 2018
                      </a>
                    </div>
                  </div>
                  <p>
                    This story of giant rats causing the destruction was
                    prevalent at the time, a seemingly plausible (though
                    fantastical) explanation for the failure of such a massive
                    and important structure.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Modern Archaeology */}
            <section id="archaeology" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Layers className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Modern Archaeology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Today, thanks to archaeological research and geological
                    analysis, we have a much clearer understanding of what
                    likely caused the final collapse of the Marib Dam. Modern
                    science has dispelled the ancient legend.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-green-500" /> What
                      Science Says
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      "There is much debate what caused the dam to collapse.
                      Some scholars say it was heavy rains, while other believe
                      an earthquake undid the stonework. According to legend,
                      the breach was caused by large rats gnawing at it with
                      their teeth and scratching it with their nails."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.amusingplanet.com/2018/06/the-collapse-of-marib-dam-and-fall-of.html"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Amusing Planet, The Collapse of Marib Dam And The Fall
                        of an Empire, 2018 (cited above, but reiterating
                        findings)
                      </a>
                    </div>
                  </div>
                  <p>
                    Modern archaeologists are certain that the "giant rats"
                    story was merely a legend. The real causes point to natural
                    disasters: either excessive, heavy rains overwhelming the
                    structure, or an earthquake weakening its foundations. The
                    key takeaway from modern study is that the destruction was
                    *not* caused by rodents.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* The Quranic Account */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Quranic Account</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    When the Quran was revealed in the 7th century, amidst the
                    legends and stories circulating at the time, it presented a
                    different account of the destruction that befell the people
                    of Sheba.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/34/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/15"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 34:15-16
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "In Sheba's homeland there used to be a wonder: two
                          gardens, on the right, and on the left. 'Eat of your
                          Lord's provision, and give thanks to Him.' A good
                          land, and a forgiving Lord. But they turned away, so
                          We unleashed against them the flood of the dam; and We
                          substituted their two gardens with two gardens of
                          bitter fruits, thorny shrubs, and meager harvest."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٥ لَقَدْ كَانَ لِسَبَإٍ فِي مَسْكَنِهِمْ آيَةٌ ۖ
                          جَنَّتَانِ عَنْ يَمِينٍ وَشِمَالٍ ۖ كُلُوا مِنْ رِزْقِ
                          رَبِّكُمْ وَاشْكُرُوا لَهُ ۚ بَلْدَةٌ طَيِّبَةٌ
                          وَرَبٌّ غَفُورٌ
                        </p>
                        <p dir="rtl">
                          ١٦ فَأَعْرَضُوا فَأَرْسَلْنَا عَلَيْهِمْ سَيْلَ
                          الْعَرِمِ وَبَدَّلْنَاهُمْ بِجَنَّتَيْهِمْ جَنَّتَيْنِ
                          ذَوَاتَيْ أُكُلٍ خَمْطٍ وَأَثْلٍ وَشَيْءٍ مِنْ سِدْرٍ
                          قَلِيلٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The Arabic phrase{" "}
                      <span className="font-arabic">سَيْلَ الْعَرِمِ</span>{" "}
                      (sayl al-'arim) is key here, translating to "flood of the
                      dam". The Quran explicitly states that their punishment
                      came in the form of a flood overwhelming the dam.
                    </p>
                  </div>
                  <p>
                    This is notably different from the popular legend of
                    destruction by rats circulating at the time. The Quran
                    points to the dam's failure due to an overwhelming amount of
                    water.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* A Point to Ponder */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the context of the 7th century, where the
                    destruction of the Marib Dam was commonly attributed to
                    giant rats, we are presented with a thought-provoking
                    contrast:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known that the Marib Dam collapsed due to a flood,
                      contradicting the popular legend of his time?
                    </h3>
                    <p>
                      The Quran's account aligns with modern archaeological
                      findings which dismiss the legend of destruction by rats
                      and point to natural forces like excessive water (flood)
                      or earthquakes as the cause. The fact that a text from the
                      7th century presents a cause consistent with modern
                      scientific understanding, while differing from the
                      prevalent belief of that era, is indeed remarkable and
                      invites reflection.
                    </p>
                  </div>

                  <p>
                    This detail, seemingly minor in the grand narrative,
                    highlights a remarkable correlation between a historical
                    account in the Quran and the conclusions of modern
                    scientific investigation, raising questions about the source
                    of this knowledge 14 centuries ago.
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
            <Sparkles className="text-stone-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Ancient History and Revelation
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting historical accounts, ancient legends, and modern
            discoveries to understand the past.
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

export default UbarDam;
