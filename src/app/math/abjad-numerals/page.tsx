/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Hash, // Using Hash to represent numerals/codes
  ChevronRight,
  BookOpen, // For Quranic references
  HelpCircle, // For reflection/intriguing question
  ArrowUp, // Back to top
  Sparkles, // General insightful icon
  Scale,
  ImageIcon, // Representing balance/equality in the numerical patterns
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AbjadNumerals = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Basic type for potential future data structure, keeping it simple for this component
  // type AbjadPattern = {
  //   description: string;
  //   value?: number; // If we were to explicitly list values
  // };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 dark:from-indigo-700 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Hash className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Abjad Numerals</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Exploring Ancient Codes in the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("introduction")}
            >
              Discover <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-700"
              onClick={() => scrollToSection("reflection")}
            >
              Ponder
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Hash className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Alphanumeric Code: Abjad Numerals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Before the Arabic numbers we use today, an ancient system
                    called Abjad numerals was used. In this system, each letter
                    of the Arabic alphabet had a specific numerical value.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Understanding Abjad Numerals
                    </h3>
                    <p>
                      The Abjad numerals, also known as Hisab al-Jummal, form a
                      decimal alphabetic numeral system where the 28 letters of
                      the Arabic alphabet are assigned numerical values. This
                      system was in use in the Arabic-speaking world even before
                      the adoption of positional Arabic numerals around the 8th
                      century. Today, the word 'abjadīyah' generally means
                      'alphabet'.
                    </p>
                    <p className="mt-3">
                      In the Abjad system, letters represent values: 'alif' is
                      1, 'bāʾ' is 2, and so on up to 9. Then, letters represent
                      tens (yāʾ for 10, kāf for 20) and hundreds (qāf for 100),
                      going up to 1000.
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Abjad_numerals"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Abjad Numerals, 2021
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Discovery in the Quran */}
            <section id="discovery" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <BookOpen className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>An Encoding Found in the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Interestingly, this ancient numeral system appears to be
                    encoded within the text of the Quran itself. Let's look at
                    an example from Surah 111.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/111/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/0"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 111:1-5
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Condemned are the hands of Abee Lahab, and he is
                          condemned. His wealth did not avail him, nor did what
                          he acquired. He will burn in a Flaming Fire. And his
                          wife—the firewood carrier. Around her neck is a rope
                          of thorns."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١ تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ
                          <br />٢ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ
                          <br />٣ سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ
                          <br />٤ وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ
                          <br />٥ فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6">
                    By applying the Abjad numerical values to the letters and
                    words in this Surah, remarkable patterns emerge.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Scale size={16} className="text-purple-500" /> Odd Word
                        vs. Odd Letter Values
                      </h3>
                      <p>
                        The gematrical (Abjad) value of all the odd-numbered
                        words (1st, 3rd, 5th, etc.) in this Surah sums to 3049.
                        Astonishingly, the gematrical value of all the
                        odd-numbered letters (1st, 3rd, 5th, etc.) across the
                        entire Surah also sums to 3049.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Scale size={16} className="text-purple-500" /> Even
                        Word vs. Even Letter Values
                      </h3>
                      <p>
                        Similarly, the gematrical value of all the even-numbered
                        words (2nd, 4th, 6th, etc.) is 2382. And the gematrical
                        value of all the even-numbered letters throughout the
                        Surah is also 2382.
                      </p>
                    </div>
                  </div>
                  <p>
                    This intricate numerical coding means that altering even a
                    single letter would disrupt this precise balance.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Visual Aid - Optional, add an image related to gematria or abjad table */}
            <section id="visual" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <ImageIcon className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>Visualizing Abjad</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="image-wrapper mb-4">
                    <img
                      className="w-full rounded-lg"
                      src="assets/images/gematrical-1.webp"
                      alt="Abjad Numerals Table or Calculation Example"
                    />
                  </div>
                  <p className="mbr-description mbr-fonts-style mb-0 align-center display-7">
                    <a
                      href="https://www.youtube.com/watch?v=46kcd-u3TZM&ab_channel=skakvachttps://www.youtube.com/watch?v=46kcd-u3TZM&ab_channel=skakvac"
                      className="text-pink-600 dark:text-pink-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Extraordinary numerical coding in the Quran, evidence that
                      this book is from God (Video Link)
                    </a>
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
                    <CardTitle>Pondering the Implications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the sophistication of this numerical structure,
                    a thought-provoking question arises:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could this intricate Abjad numerical encoding, known
                      before the 8th century, be woven into the fabric of the
                      Quran, a text revealed in the 7th century?
                    </h3>
                    <p>
                      The presence of such a detailed and consistent numerical
                      pattern, based on an ancient system, within the Quran
                      invites contemplation on its origin and preservation
                      through centuries. This connection between an established
                      ancient numerical system and the Quranic text is indeed
                      remarkable.
                    </p>
                  </div>

                  <p>
                    This level of numerical precision, seemingly embedded within
                    the very letters and words, highlights a layer of complexity
                    that is fascinating to explore.
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
            <Sparkles className="text-indigo-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Ancient Numerals and Texts
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Delving into the historical use of Abjad numerals and their
            intriguing presence in the Quran.
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

export default AbjadNumerals;
