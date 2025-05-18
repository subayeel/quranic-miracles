/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Calculator, // Using Calculator for the header and intro
  ChevronRight,
  Key, // For the connection/decoding aspect
  ListOrdered, // For showing counts
  Sparkles, // For the miracle/implication
  ArrowUp,
  Code, // Another option for coding/structure
  Layers, // Representing different bases
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define section IDs for scrolling
type SectionId = "intro" | "connection" | "decoding" | "implication";

const Base19Component: React.FC = () => {
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 dark:from-indigo-700 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Base-19</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            A Numerical Aspect of the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("connection")}
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
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Layers className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Understanding Number Bases</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In mathematics, we commonly use a base-10 numeral system
                    (decimal), where we use digits 0 through 9. Computers,
                    however, rely on a base-2 system (binary) using only 0 and
                    1. It has been observed that the Quran appears to
                    incorporate a base-19 numerical structure, adding another
                    layer to its intricate composition.
                  </p>
                  <p>
                    One fascinating aspect relates to the mysterious letters
                    that begin certain chapters of the Quran. These letters,
                    known as Huroof Muqatta'at (Disconnected Letters), appear in
                    various combinations and their meaning has been a subject of
                    discussion for centuries.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Example: Surah Ash-Shu'ara (The Poets)
                    </h3>
                    <p>
                      Some chapters begin with these letters, like Chapter 26:
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://www.quranwow.com/#/ch/26/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/1"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 26:1-4
                      </a>
                    </div>
                    <p className="italic mt-2">
                      "Ta, Seen, Meem, these are verses of the clarifying book.
                      Maybe you are frustrated that they don't believe. If We
                      wish We can send down from heaven a sign their necks
                      remain for it subdued."
                    </p>
                    <div
                      className="font-arabic text-right text-lg mt-4"
                      dir="rtl"
                    >
                      <p>١ طسم</p>
                      <p>٢ تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ</p>
                      <p>
                        ٣ لَعَلَّكَ بَاخِعٌ نَفْسَكَ أَلَّا يَكُونُوا
                        مُؤْمِنِينَ
                      </p>
                      <p>
                        ٤ إِنْ نَشَأْ نُنَزِّلْ عَلَيْهِمْ مِنَ السَّمَاءِ آيَةً
                        فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* The Base-19 Connection */}
            <section id="connection" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Key className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Connecting Letters and Verses</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The claim regarding Base-19 centers around the total number
                    of verses in the Quran, which is commonly accepted as 6236
                    in our standard base-10 system.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Code size={16} className="text-teal-500" /> Base
                      Conversion
                    </h3>
                    <p>
                      When the number 6236 (base-10) is converted to a base-19
                      system, it results in the number H54 (base-19). In
                      base-19, digits range from 0-9 and then A-I representing
                      values 10-18. H represents 17.
                    </p>
                    <p className="mt-2 font-mono">
                      $$ 6236_{10} = 17 \times 19^2 + 5 \times 19^1 + 4 \times
                      19^0 $$ $$ = 17 \times 361 + 5 \times 19 + 4 \times 1 $$
                      $$ = 6137 + 95 + 4 = 6236 $$ $$ 6236_{10} = H54_{19} $$
                    </p>
                    {/* Placeholder for the conversion image */}
                    <div className="mt-4 text-center">
                      {/* <img src="/assets/images/base-19.webp" alt="Base 10 to Base 19 Conversion" className="max-w-xs mx-auto rounded-lg"/> */}
                      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md italic text-gray-700 dark:text-gray-300">
                        [Placeholder for Base-10 to Base-19 conversion image,
                        e.g., `public/assets/images/base-19.webp`]
                      </div>
                    </div>
                    <div className="mt-3 text-sm">
                      <a
                        href="http://www.unitconversion.org/numbers/base-10-to-base-19-conversion.html"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.unitconversion.org
                      </a>
                    </div>
                  </div>
                  <p>
                    The intriguing part is how these numbers might connect to
                    the Huroof Muqatta'at.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Decoding the Letters */}
            <section id="decoding" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <ListOrdered className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Counting the Letters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's look at the specific counts of the letters Ta (ط),
                    Seen (س), and Meem (م) across the entire text of the Quran.
                    Researchers have meticulously counted the occurrences of
                    these letters.
                  </p>
                  {/* Placeholder for the letter counts image */}
                  <div className="mt-4 text-center">
                    {/* <img src="/assets/images/base-19-count.webp" alt="Counts of Ta, Seen, Meem" className="max-w-xs mx-auto rounded-lg"/> */}
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md italic text-gray-700 dark:text-gray-300">
                      [Placeholder for letter counts image, e.g.,
                      `public/assets/images/base-19-count.webp`]
                    </div>
                  </div>
                  <p className="mt-4">
                    The counts are observed to be:
                    <ul className="list-disc list-inside ml-4">
                      <li>Ta (ط): 34</li>
                      <li>Seen (س): 102</li>
                      <li>Meem (م): 266</li>
                    </ul>
                  </p>
                  <p>
                    The claim is that these specific letters, Ta, Seen, and
                    Meem, somehow correspond to the digits H, 5, and 4
                    respectively in the base-19 representation (H54) of the
                    total number of verses (6236).
                  </p>
                  {/* Placeholder for the letters mapping to base-19 digits image */}
                  <div className="mt-4 text-center">
                    {/* <img src="/assets/images/base-19-base.webp" alt="Letters mapping to Base 19 digits" className="max-w-md mx-auto rounded-lg"/> */}
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md italic text-gray-700 dark:text-gray-300">
                      [Placeholder for letters mapping to Base 19 digits image,
                      e.g., `public/assets/images/base-19-base.webp`]
                    </div>
                  </div>
                  {/* Placeholder for the number H54 image */}
                  <div className="mt-4 text-center">
                    {/* <img src="/assets/images/base-19-number.webp" alt="H54 in Base 19" className="max-w-[150px] mx-auto rounded-lg"/> */}
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md italic text-gray-700 dark:text-gray-300">
                      [Placeholder for H54 number image, e.g.,
                      `public/assets/images/base-19-number.webp`]
                    </div>
                  </div>

                  <p className="mt-4 font-medium">
                    So, according to this observation, the combination of Ta,
                    Seen, and Meem can be seen as representing H54 in base-19,
                    which precisely equals 6236, the total number of verses in
                    the Quran (in base-10).
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h3 className="font-bold text-lg mb-3">A Precise Code</h3>
                    <p>
                      This implies a highly specific structure: if even a single
                      verse were added to or removed from the entire Quran, the
                      total verse count (6236) would change, and its base-19
                      representation would no longer be H54, thus breaking this
                      observed numerical link with the letters Ta, Seen, Meem.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Implication / Reflection */}
            <section id="implication" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Sparkles className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>A Miracle from the 7th Century?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This numerical structure raises a truly thought-provoking
                    question when considered from the perspective of the 7th
                    century CE, the time of the Quran's revelation.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could anyone 1400 years ago have conceived of, let
                      alone encoded, a text using a base-19 numerical system
                      related to specific letter counts that align with the
                      total verse count, especially when base systems beyond
                      base-10 were not widely understood or used in that era?
                    </h3>
                  </div>

                  <p>
                    Knowledge of different number bases, particularly something
                    like base-19, and the ability to perform conversions between
                    them were far beyond the general understanding of
                    mathematics in the 7th century world, including the Arabian
                    peninsula. Furthermore, accurately counting the occurrences
                    of specific letters across an entire book and correlating
                    that count to its total number of verses via a non-standard
                    base system would require a level of mathematical
                    sophistication and meticulous textual analysis that seems
                    impossible for the time.
                  </p>
                  <p>
                    The verse quoted earlier (Quran 26:4) mentions, "If We wish
                    We can send down from heaven a sign their necks remain for
                    it subdued." For believers, this intricate numerical pattern
                    related to Base-19 is seen as one such sign, a complex code
                    embedded within the text that could only be fully
                    appreciated with the advent of modern mathematical
                    understanding and computational tools.
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
            <Calculator className="text-indigo-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Numerical Patterns
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discovering hidden structures and potential signs within ancient
            texts.
          </p>
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

export default Base19Component;
