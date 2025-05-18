/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Plane, // Changed icon for Flight
  ChevronRight,
  BookOpen,
  HelpCircle,
  Sparkles,
  ArrowUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FlightDay = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-700 dark:from-blue-800 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="text-blue-200" size={32} />{" "}
            {/* Updated icon and color */}
            <h1 className="text-4xl font-bold">Flight</h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            A Modern Wonder Foretold
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("intro")}
            >
              Explore <ChevronRight size={16} />
            </Button>
            {/* Adjust section ID for Learn More button */}
            <Button
              variant="outline"
              className="text-blue-700"
              onClick={() => scrollToSection("quranic-references")}
            >
              See References
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
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Plane className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Man Reached the Sky</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Imagine a world where the highest point a human could reach
                    was the peak of a mountain or perhaps how high they could
                    jump. For most of history, this was the reality. 1400 years
                    ago, the concept of human flight, soaring through the skies,
                    was purely the stuff of myth and imagination. Yet, the Quran
                    contained verses that spoke of humanity's ability to
                    traverse the sky.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Prophecy of Flight
                    </h3>
                    <p>
                      At a time when human mobility was limited to land and sea,
                      the idea of reaching the sky by means other than falling
                      or jumping seemed impossible. The Quran, revealed in the
                      7th century, remarkably described scenarios that modern
                      science and technology have now made commonplace.
                    </p>
                  </div>
                  <p>
                    These verses, read in their historical context, seem to
                    foretell a time when humans would overcome the constraints
                    of gravity and explore the vastness above.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic References */}
            <section id="quranic-references" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>
                      Quranic References to Reaching the Sky
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-6">
                  {" "}
                  {/* Increased space-y */}
                  {/* Quran 29:22 */}
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/29/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/22"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 29:22
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "You cannot escape (Allah's might), on earth or in the
                          sky; and you have no protector and no savior besides
                          Allah."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٢ وَمَا أَنْتُمْ بِمُعْجِزِينَ فِي الْأَرْضِ وَلَا
                          فِي السَّمَاءِ ۖ وَمَا لَكُمْ مِنْ دُونِ اللَّهِ مِنْ
                          وَلِيٍّ وَلَا نَصِيرٍ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      This verse implies that there are realms "on earth" and
                      "in the sky" where one might attempt to escape divine
                      reach. At a time when the sky was inaccessible to humans,
                      mentioning it as a place where one *might* try to escape
                      suggests a future capability for humans to operate within
                      it.
                    </p>
                  </div>
                  {/* Quran 84:19 */}
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/84/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/19"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 84:19
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "You will ride layer upon layer."
                          <br />
                          (Latarkabunna tabaqan an tabaq)
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">١٩ لَتَرْكَبُنَّ طَبَقًا عَنْ طَبَقٍ</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Key Phrase
                      </Badge>
                      <p className="mt-3">
                        The Arabic word "Tabak طبق" is a noun meaning "layer,"
                        "stratum," or "level." The phrase "tabaqan an tabaq"
                        implies ascending or moving through successive layers or
                        stages.
                      </p>
                      <p className="mt-3">
                        Historically, some interpretations linked this to layers
                        of the sky or stages of life. However, in the context of
                        reaching the sky, this description remarkably aligns
                        with modern flight, where aircraft ascend through
                        different atmospheric layers, or spacecraft travel
                        through layers of the atmosphere and into different
                        strata of space. This concept of "riding layer upon
                        layer" was entirely outside the human experience 1400
                        years ago.
                      </p>
                    </div>
                  </div>
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
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the historical context of the 7th century, where
                    the idea of human flight was non-existent, the presence of
                    these verses in the Quran presents a profound point for
                    contemplation:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have known that
                      humans would one day reach and "ride through layers" of
                      the sky?
                    </h3>
                    <p>
                      These descriptions do not align with myths of flying
                      creatures or magic carpets, but rather with the methodical
                      ascent through atmospheric layers characteristic of modern
                      aviation and space travel. The precision of the phrase
                      "ride layer upon layer" is particularly striking when
                      considered from the perspective of someone living in a
                      time with no concept of flight dynamics or atmospheric
                      science.
                    </p>
                  </div>

                  <p>
                    The Quranic verses, revealed centuries before the invention
                    of aircraft, accurately point towards a future reality of
                    human capability in the sky. This remarkable alignment
                    invites reflection on the nature and source of the knowledge
                    contained within the Quran.
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
            <Sparkles className="text-blue-500" size={18} />{" "}
            {/* Footer icon color updated */}
            <h3 className="text-lg font-medium">
              Exploring the Sky and Scripture
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Witnessing how ancient text seems to resonate with modern
            achievements in flight technology.
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

export default FlightDay;
