/* eslint-disable react/no-unescaped-entities */
"use client"; // This makes the component a Client Component in Next.js

import React from "react"; // Explicitly import React
import {
  Hash, // Represents a number/hash
  SquareDivide, // Represents division/indivisibility
  BookOpen, // For Quranic references
  HelpCircle, // For reflection/question
  Sparkles, // For wonder/miracles
  ArrowUp, // Back to Top
  Calculator,
  ChevronRight,
  Quote, // For mathematical concepts
} from "lucide-react";

// Assume these components are correctly configured in your project's ui library
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrimeNumbersPage = () => {
  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Hash className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">The Mystery of Primes</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Exploring remarkable numerical patterns
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("intro")}
            >
              Discover Patterns <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-100 border-blue-100 hover:bg-blue-800/30"
              onClick={() => scrollToSection("reflection")}
            >
              Reflect on Significance
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
                      <SquareDivide className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>
                      Indivisible Numbers, Indivisible Concept
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Prime numbers are special because they can only be divided
                    evenly by 1 and themselves. They are, in essence,
                    'indivisible' building blocks in the world of numbers.
                  </p>
                  <p>
                    It's fascinating to consider this concept in relation to the
                    Quran. For example, the word "Allah" appears 2699 times in
                    the Quran. Interestingly, 2699 is a prime number –
                    indivisible, just as the concept of Allah (God) is central
                    and indivisible in Islam. Skeptics might see this as mere
                    coincidence, but let's explore further numerical
                    characteristics within the Quran.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Definition */}
            <section id="definition" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Calculator className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>What Exactly is a Prime Number?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> From the
                      Experts
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "A prime number (or a prime) is a natural number greater
                      than 1 that cannot be formed by multiplying two smaller
                      natural numbers. A natural number greater than 1 that is
                      not prime is called a composite number... Primes are
                      central in number theory because of the fundamental
                      theorem of arithmetic: every natural number greater than 1
                      is either a prime itself or can be factorized as a product
                      of primes that is unique up to their order."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Prime_number"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Prime Number, 2020
                      </a>
                    </div>
                  </div>
                  <p>
                    Simply put, primes are numbers like 2, 3, 5, 7, 11, and so
                    on. They are the foundational numbers that, when multiplied
                    together, create all other whole numbers greater than 1.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 1 Analysis */}
            <section id="chapter1" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Chapter 1: A Prime Example?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's look at the very first chapter of the Quran,
                    Al-Fatiha. According to numerical analyses, it exhibits some
                    remarkable characteristics:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Its verse count is 7 (a prime number).</li>
                    <li>Its word count is 29 (a prime number).</li>
                    <li>Its letter count is 139 (a prime number).</li>
                  </ul>
                  <p>
                    All key counts for this foundational chapter are prime
                    numbers.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.quranwow.com/#/ch/1/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-64/v/1"
                      className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Quran Chapter 1 <ChevronRight size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Mathany Connection */}
            <section id="mathany" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <BookOpen className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>"Mathany" and Prime Factors</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran itself provides a potentially related concept. In
                    Surah Al-Hijr (15:87), Allah says:
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/15/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/87"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 15:87
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "We have given you seven of the pairs (Mathany), and
                          the Grand Quran."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٨٧ وَلَقَدْ آتَيْنَاكَ سَبْعًا مِنَ الْمَثَانِي
                          وَالْقُرْآنَ الْعَظِيمَ
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>
                    Here, the number seven (the verse count of Al-Fatiha) is
                    explicitly referred to as belonging to a group called
                    "Mathany" (مَثَانِي).
                  </p>
                  <p>
                    In another verse, Surah Az-Zumar (39:23), the *entire* Quran
                    is described using the same term:
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/39/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/23"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 39:23
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Allah has sent down the best of narrations: A
                          Scripture consistent and paired (Mathany)..."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٣ اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا
                          مُتَشَابِهًا مَثَانِيَ ...
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>
                    The word "Mathany" is derived from a root meaning "pair" or
                    "to do again." While it has various interpretations, one
                    could relate it to the concept of multiplication or pairing
                    in mathematics. The Fundamental Theorem of Arithmetic tells
                    us any non-prime number greater than 1 can be formed by
                    *multiplying prime numbers together* ("multiplying again"
                    with these prime factors). Since 7 is called "Mathany" and
                    the whole Quran is called "Mathany," this invites us to look
                    for a prime characteristic in the entire Quran, just as 7 is
                    a prime characteristic of its first chapter.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Total Letter Count */}
            <section id="totalcount" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Hash className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>The Grand Total: A Prime?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Taking this further, let's consider the total number of
                    letters in the entire Quran. Counts indicate this number is
                    326159.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800 text-center font-bold text-xl">
                    Total Letters in the Quran: 326159
                  </div>
                  <p>
                    Now, for the intriguing part: Is 326159 a prime number?
                    Checking this requires significant calculation (especially
                    without modern computers!). The analysis shows that yes,
                    326159 is indeed a prime number.
                  </p>
                  <p>
                    This finding is presented as evidence that the Quran is
                    numerically "indivisible" at this foundational level. If
                    even a single letter were added, removed, or changed, the
                    total count would change, and it would likely no longer be a
                    prime number, thus potentially breaking this intricate
                    numerical characteristic. This has been suggested as a sign
                    of its preservation.
                  </p>
                  <div className="mt-6">
                    <a
                      href="http://www.kaheel7.com/ar/index.php/1/2087--2019" // Using the link from the reference
                      className="text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reference: Quran Characters Counter{" "}
                      <ChevronRight size={16} />
                    </a>
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
                    <CardTitle>Connecting to the 7th Century</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    These numerical observations lead to a compelling question,
                    especially when considering the historical context:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century have known about the
                      mathematical significance of prime numbers, let alone
                      apply this concept to the total letter count of an entire
                      book?
                    </h3>
                    <p>
                      In the 7th century, mathematical knowledge was developing,
                      but the concept of prime numbers was based on much smaller
                      integers. Identifying a number like 326159 as prime
                      requires systematic division tests or more advanced
                      techniques, which were simply not available or practical
                      at that time. The sheer task of accurately counting every
                      single letter in the entire Arabic text of the Quran would
                      also have been an immense undertaking, extremely prone to
                      error.
                    </p>
                    <p>
                      The idea that the final total letter count would be a
                      prime number, aligning with the 'indivisible' nature and
                      the concept of "Mathany" as potentially related to prime
                      factorization, presents a fascinating intersection of
                      ancient scripture and abstract mathematical properties.
                      This apparent deliberate numerical structure, if accepted
                      as intentional, points to knowledge seemingly beyond the
                      human capabilities and mathematical understanding
                      prevalent in the 7th century world.
                    </p>
                  </div>
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">
              Numbers, Patterns, and Meaning
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the intriguing world of numbers within the Quranic text.
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

export default PrimeNumbersPage;
