/* eslint-disable react/no-unescaped-entities */
"use client"; // This directive is necessary for client-side interactivity like scrolling

import {
  Circle, // Using Circle icon for Pi theme
  ChevronRight,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Target, // Represents geometry/angles
  Calculator,
  Hash, // Represents calculation/numerical value
} from "lucide-react"; // Using Lucide icons

import { Button } from "@/components/ui/button"; // Assuming Shadcn UI components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the component using TypeScript React.FC type
const PiDay: React.FC = () => {
  // Function to smoothly scroll to a section based on its ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 dark:from-purple-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Circle className="text-purple-200" size={32} />{" "}
            {/* Pi related icon */}
            <h1 className="text-4xl font-bold">Pi ($\pi$)</h1>{" "}
            {/* Using LaTeX for Pi */}
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Exploring $\pi$ and Ancient Knowledge
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("what-is-pi")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-100 hover:bg-indigo-800"
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
          {/* Content Column (taking 3 out of 4 columns on large screens) */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction: What is Pi? */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <BookOpen className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Introducing Pi ($\pi$)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Pi ($\pi$) is one of the most fascinating numbers in
                    mathematics, representing the ratio of a circle's
                    circumference to its diameter. It's a value that appears in
                    countless formulas across science and engineering.
                  </p>
                  <p>
                    While ancient civilizations had approximations of this
                    ratio, the symbol $\pi$ was popularized much later. For
                    example, the Welsh mathematician William Jones is noted for
                    his use of the symbol $\pi$ in 1706. This level of
                    mathematical formalization and widely accepted numerical
                    value (approximately 3.14159) is a relatively recent
                    development in human history.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Historical Context (7th Century)
                    </h3>
                    <p>
                      In the 7th century CE, during the time of the revelation
                      of the Quran, mathematical understanding varied. While
                      some approximations of the circle ratio existed, the
                      formal concept of $\pi$ with its precise decimal expansion
                      and its widespread application in geometry and beyond was
                      not established knowledge, especially not among the
                      general population or in regions like the Arabian
                      Peninsula. The idea of relating it to angles in radians,
                      let alone centiradians, was centuries away.
                    </p>
                  </div>
                  <p>
                    Let's explore some interesting properties of $\pi$ and then
                    see how they might connect to an ancient text.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Pi and Circular Measurement */}
            <section id="what-is-pi" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Target className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Pi and Angles</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Pi is fundamental to understanding circles and angles. While
                    we commonly measure angles in degrees ($360^\circ$ for a
                    full circle), radians offer another way, especially useful
                    in higher mathematics and physics.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Circle size={16} className="text-blue-500" /> Radians and
                      Centiradians
                    </h3>
                    <p>
                      In radians, a full circle is $2\pi$ radians, and a
                      half-circle is $\pi$ radians.
                    </p>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-3">
                      $180^\circ = \pi$ radians
                      <br />
                      $360^\circ = 2\pi$ radians
                    </p>
                    <p className="mt-3">
                      If we express these values in centiradians (where 1
                      centiradian = 0.01 radians), we get approximations:
                    </p>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-3">
                      $\pi$ radians $\approx 3.14$ radians $= 314$ centiradians
                      <br />
                      $2\pi$ radians $\approx 6.28$ radians $= 628$ centiradians
                    </p>
                  </div>
                  <p>
                    These specific numerical values (314 and 628) take on
                    significance when looking at a particular verse in the
                    Quran.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>A Quranic Verse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/96/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/8"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 96:8
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "But to your Lord is the return."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">٨ إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Interpretation & Implication
                    </Badge>
                    <p className="mt-3">
                      The Arabic word الرُّجْعَىٰ ("Al-Rujaa") in this verse
                      translates to "the return" or "the coming back." The verse
                      speaks of returning to one's Lord. However, some
                      interpretations also see a cosmic implication in the word
                      "return" when considering travel.
                    </p>
                    <p className="mt-3">
                      The idea of being able to "return to the same location" by
                      continuously moving in one general direction is only
                      possible if the path you are on eventually curves back
                      onto itself. This strongly implies a spherical shape for
                      the Earth, a concept not universally accepted or
                      understood by everyone in the 7th century. If the Earth is
                      spherical, travel around it would involve traversing a
                      circle, and properties of circles, including $\pi$, become
                      relevant.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* The Numerical Connection (Gematria) */}
            <section id="numerical-connection" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Calculator className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>A Numerical Correspondence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Another layer of interpretation involves the ancient system
                    of Abjad numerals, where each Arabic letter has a numerical
                    value. This system existed in various forms at the time of
                    the Quran's revelation.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Hash className="text-yellow-500" size={20} /> Gematria
                      Values
                    </h3>
                    <p>
                      According to the numerical assignments used in this
                      analysis:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-2">
                      <li>
                        The gematrical value of the word الرُّجْعَىٰ
                        ("Al-Rujaa") is calculated as 314.
                      </li>
                      <li>
                        The gematrical value of the entire verse إِنَّ إِلَىٰ
                        رَبِّكَ الرُّجْعَىٰ ("But to your Lord is the return.")
                        is calculated as 628.
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">
                      (Note: Abjad values for letters existed in the 7th
                      century, though applying them to find hidden meanings in
                      scripture is a specific interpretative practice).
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Abjad_numerals"
                        className="text-yellow-600 dark:text-yellow-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more about Abjad Numerals (Wikipedia)
                      </a>
                    </div>
                  </div>

                  <p>
                    Remarkably, these numerical values derived from the Arabic
                    text (314 and 628) correspond exactly to the approximate
                    values of $\pi$ and $2\pi$ when expressed in centiradians
                    (314 centiradians $\approx \pi$ radians, and 628
                    centiradians $\approx 2\pi$ radians).
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <HelpCircle className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Point for Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>Considering the context of the 7th century:</p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this verse, revealed 1400 years ago, seem to
                      imply Earth's sphericity AND contain numerical values
                      related to $\pi$ and $2\pi$ in centiradians, concepts not
                      formalized until centuries later?
                    </h3>
                    <p>
                      The apparent convergence of the verse's linguistic meaning
                      (implying return/sphericity) and its numerical value via
                      an existing ancient system (matching $\pi$ and $2\pi$ in
                      centiradians) is presented as a remarkable alignment that
                      points to knowledge beyond human capacity at the time of
                      its revelation.
                    </p>
                  </div>

                  <p>
                    This connection between an ancient text and modern
                    mathematical constants invites contemplation about the
                    source of such knowledge, particularly when considering the
                    historical context where the precise value and formal
                    understanding of $\pi$ and circular measurement in
                    radians/centiradians were not established.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Optional Sidebar (can add navigation or related info here if needed) */}
          {/* <div className="lg:col-span-1">
             // Sidebar content goes here
           </div> */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-purple-500" size={18} />{" "}
            {/* Pi theme color */}
            <h3 className="text-lg font-medium">
              Exploring Connections in the Cosmos
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Reflecting on the patterns found in mathematics, nature, and ancient
            texts.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-600 hover:dark:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PiDay;
