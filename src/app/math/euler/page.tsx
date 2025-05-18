/* eslint-disable react/no-unescaped-entities */
"use client"; // This component uses client-side features like scrolling

import {
  Sparkles, // Used in AstronomyDay header/footer, fitting for "miracles"
  ChevronRight,
  Atom, // Icon for mathematics/science
  BookOpen, // Icon for Quranic reference
  HelpCircle, // Icon for reflection/question
  ArrowUp,
  Variable, // Icon for variables/formulas
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Assuming these components are available

const EulerIdentity = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-purple-300" size={32} />
            <h1 className="text-4xl font-bold">Euler's Identity</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-200">
            Connecting Mathematics and Meaning
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("mathematics")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-100 border-indigo-100 hover:bg-indigo-900"
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
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Variable className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Euler's Beautiful Formula</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Meet Leonhard Euler, a brilliant mathematician from the 18th
                    century. He explored the world of numbers and discovered a
                    formula so elegant, it's often called "God's Formula." It's
                    a simple equation that brings together some of the most
                    fundamental numbers in mathematics in a truly surprising
                    way.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800 text-center text-xl md:text-2xl font-bold">
                    {/* $$e^{i\pi} + 1 = 0$$ */}
                  </div>
                  <p>
                    This identity, known as Euler's Identity, was voted the most
                    beautiful formula in mathematics in a 1988 poll. It's
                    simple, yet profound, connecting seemingly unrelated
                    mathematical constants.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* The Numbers */}
            <section id="mathematics" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Atom className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Understanding the Magic Numbers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Euler's Identity harmoniously combines five essential
                    mathematical constants from different fields:
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800 space-y-4">
                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Badge className="bg-teal-200 text-teal-900 dark:bg-teal-800 dark:text-teal-100">
                          $e$
                        </Badge>{" "}
                        The Natural Constant
                      </h3>
                      <p>
                        An irrational number, approximately 2.71828, fundamental
                        in calculus and describing natural growth and decay
                        processes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Badge className="bg-teal-200 text-teal-900 dark:bg-teal-800 dark:text-teal-100">
                          $i$
                        </Badge>{" "}
                        The Imaginary Unit
                      </h3>
                      <p>
                        Defined as the square root of -1 ($\sqrt{-1}$), this
                        "imaginary" number is crucial in algebra and unlocks the
                        world of complex numbers, which are surprisingly vital
                        for describing real-world phenomena like waves (sound,
                        light, quantum mechanics).
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Badge className="bg-teal-200 text-teal-900 dark:bg-teal-800 dark:text-teal-100">
                          $\pi$
                        </Badge>{" "}
                        Pi
                      </h3>
                      <p>
                        The famous irrational number, approximately 3.14159,
                        representing the ratio of a circle's circumference to
                        its diameter, connecting geometry and trigonometry.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Badge className="bg-teal-200 text-teal-900 dark:bg-teal-800 dark:text-teal-100">
                          $1$ and $0$
                        </Badge>{" "}
                        The Arithmetic Basics
                      </h3>
                      <p>
                        The fundamental building blocks of arithmetic,
                        representing identity and nullity.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Learn more about why it's called "God's Formula":{" "}
                    <a
                      href="https://themathdistrict.com/fun-math/gods-formula/"
                      className="text-teal-600 dark:text-teal-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Math District, Mathematicians Call It God’s Formula,
                      2024
                    </a>
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Connection */}
            <section id="quranic-connection" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>A Glimpse in Ancient Scripture?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Interestingly, some have noted a numerical correlation found
                    within the Quran that resonates with one of these
                    fundamental constants, $e$.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/74/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/30"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 74:30-31
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Over it are Nineteen. We have appointed only angels
                          to be wardens of the Fire, and made their count to be
                          a stumbling block for those who disbelieve; so that
                          those given the Scripture may attain certainty; and
                          those who believe may increase their faith; and those
                          given the Scripture and the believers may not doubt.
                          And those in whose hearts is sickness and the
                          unbelievers may say, "What did Allah intend by this
                          parable?" Thus Allah leads astray whom He wills, and
                          guides whom He wills. None knows the soldiers of your
                          Lord except Him. This is nothing but a reminder for
                          humans."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٠ عَلَيْهَا تِسْعَةَ عَشَرَ
                          <br />
                          ٣١ وَمَا جَعَلْنَا أَصْحَابَ النَّارِ إِلَّا
                          مَلَائِكَةً ۙ وَمَا جَعَلْنَا عِدَّتَهُمْ إِلَّا
                          فِتْنَةً لِلَّذِينَ كَفَرُوا لِيَسْتَيْقِنَ الَّذِينَ
                          أُوتُوا الْكِتَابَ وَيَزْدَادَ الَّذِينَ آمَنُوا
                          إِيمَانًا ۙ وَلَا يَرْتَابَ الَّذِينَ أُوتُوا
                          الْكِتَابُ وَالْمُؤْمِنُونَ ۙ وَلِيَقُولَ الَّذِينَ
                          فِي قُلُوبِهِمْ مَرَضٌ وَالْكَافِرُونَ مَاذَا أَرَادَ
                          اللَّهُ بِهَٰذَا مَثَلًا ۚ كَذَٰلِكَ يُضِلُّ اللَّهُ
                          مَنْ يَشَاءُ وَيَهْدِي مَنْ يَشَاءُ ۚ وَمَا يَعْلَمُ
                          جُنُودَ رَبِّكَ إِلَّا هُوَ ۚ وَمَا هِيَ إِلَّا
                          ذِكْرَىٰ لِلْبَشَرِ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-4">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/15/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/44"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 15:44
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "It has seven doors; for each door is an assigned
                          class."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          لَهَا سَبْعَةُ أَبْوَابٍ لِكُلِّ بَابٍ مِنْهُمْ جُزْءٌ
                          مَقْسُومٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    These verses mention 19 angels guarding Hell and that Hell
                    has 7 doors. A fascinating observation made in recent times
                    is the numerical value derived from these numbers: $19 / 7$.
                  </p>

                  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mt-4 text-center font-bold text-lg">
                    $$19 \div 7 \approx 2.714$$
                  </div>

                  <p>
                    This value, $2.714$, is remarkably close to the value of
                    Euler's number, $e \approx 2.718$. While $e$ was rigorously
                    defined and understood much later in mathematical history
                    (18th century), it's noted that numbers appearing in the
                    Quranic text from the 7th century yield an approximation of
                    this constant when combined in this way.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>A Point for Contemplation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This leads us to a thought-provoking question, similar to
                    the one raised by other potential correlations found in the
                    Quran:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800 text-center">
                    <h3 className="font-bold text-xl mb-3">
                      Could someone living in the 7th century, without any
                      knowledge of advanced mathematics or the constant $e$,
                      have intentionally placed numbers in a text that produce
                      such a correlation?
                    </h3>
                    <p>
                      The concept of $e$ and its profound role in mathematics
                      and describing natural laws was unknown in the 7th
                      century. The fact that numbers mentioned in the Quran,
                      revealed at that time, yield a value so close to this
                      fundamental constant, discovered centuries later, is seen
                      by some as a remarkable sign. It invites reflection on the
                      source of the knowledge contained within the scripture.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
          {/* Sidebar could go here if needed */}
          {/* <div className="lg:col-span-1 space-y-8">...</div> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Order in the Universe
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discovering connections between ancient wisdom and the language of
            mathematics.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EulerIdentity;
