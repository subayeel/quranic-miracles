/* eslint-disable react/no-unescaped-entities */
"use client"; // This indicates it's a Client Component in Next.js 13+

import {
  BookOpen,
  Monitor,
  ArrowUp,
  Sparkles,
  ChevronRight,
  Quote,
} from "lucide-react"; // Using relevant icons

import { Button } from "@/components/ui/button"; // Assuming Shadcn UI components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Assuming Shadcn UI Badge

// Define the component using React.FC for explicit typing
const DigitalBooks: React.FC = () => {
  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      {/* Using a gradient suggesting technology or knowledge */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Icon representing books or knowledge */}
            <BookOpen className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Digital Books</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Exploring Ancient Scripture and Modern Technology
          </p>
          {/* Navigation buttons */}
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("modern")} // Link to the modern analogy section
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-100 border-blue-100 hover:bg-blue-700"
              onClick={() => scrollToSection("intro")} // Link to the introduction
            >
              Learn About the Concept
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction/Concept Section */}
            <section id="intro" className="scroll-mt-20">
              {/* Card with a prominent border */}
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Icon related to books or the concept */}
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="text-blue-600" size={24} />
                    </div>
                    <CardTitle>A Concept Beyond Its Time</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine a time, 1400 years ago, when writing meant pens,
                    ink, and materials like animal skins or early forms of
                    paper. The idea of information being stored and accessed
                    digitally, let alone watching a history book like a movie,
                    would have been utterly foreign, perhaps even considered
                    science fiction.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Glimpse of Paradise
                    </h3>
                    <p>
                      Yet, in the Quran, there's a description of a book in
                      Paradise called 'Elliyyoon,' which is portrayed in a way
                      that remarkably resonates with modern digital technology
                      and interactive media. Skeptics from that era might have
                      found the description baffling, rooted in a reality far
                      beyond their technological grasp.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Modern Analogy Section */}
            <section id="modern" className="scroll-mt-20">
              {/* Card with a different border color */}
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Icon related to technology or media */}
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Monitor className="text-purple-600" size={24} />
                    </div>
                    <CardTitle>Relating to Today's World</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fast forward to today. We live in a world saturated with
                    digital information. We effortlessly transform physical
                    books into digital formats – e-books that consist of zeros
                    and ones, requiring electronic devices to read.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-purple-500" /> What is an
                      E-book?
                    </h3>
                    {/* Incorporating the Wikipedia definition */}
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "An electronic book, also known as an e-book or eBook, is
                      a book publication made available in digital form,
                      consisting of text, images, or both, readable on the
                      flat-panel display of computers or other electronic
                      devices... E-books can be read on dedicated e-reader
                      devices, but also on any computer device that features a
                      controllable viewing screen, including desktop computers,
                      laptops, tablets and smartphones."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/E-book"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, E-book, 2020
                      </a>
                    </div>
                  </div>

                  <p>
                    Beyond just reading, we also consume information visually.
                    Platforms like YouTube allow us to watch recorded events and
                    documentaries, essentially viewing history and information
                    unfold like a movie. These modern concepts of digital
                    information and viewing recorded events provide a framework
                    to understand the description found in the ancient text.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference Section */}
            <section id="quran" className="scroll-mt-20">
              {/* Card with another distinct border color */}
              <Card className="border-l-4 border-green-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Icon related to scripture */}
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-700" size={24} />
                    </div>
                    <CardTitle>Insights from the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    {/* Link to the specific Quranic verses */}
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/83/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/19"
                        className="text-green-700 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 83:19-21
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      {/* English Translation */}
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And how can you know about Elliyyoon? A digitized
                          book; Watched by the close ones."
                        </p>
                      </div>
                      {/* Arabic Text */}
                      <div className="md:w-1/2 font-arabic text-right text-lg font-bold">
                        <p dir="rtl">
                          ١٩ وَمَا أَدْرَاكَ مَا عِلِّيُّونَ
                          <br />
                          ٢٠ كِتَابٌ مَرْقُومٌ
                          <br />
                          ٢١ يَشْهَدُهُ الْمُقَرَّبُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {/* Explanation of the key terms */}
                    <div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 mr-2">
                        Key Term
                      </Badge>
                      <span className="font-medium">"Markoom مَرْقُومٌ":</span>{" "}
                      Interpreted as "digitized." The Quran itself is "Mura-qam
                      مُرَقَّم" (numbered chapters/verses), but the text
                      emphasizes that 'Elliyyoon' is something they didn't know
                      about (Quran 83:19). This suggests 'Markoom' here refers
                      to more than just numbering; it points towards a different
                      state or format - digitized.
                    </div>
                    <div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 mr-2">
                        Key Term
                      </Badge>
                      <span className="font-medium">
                        "Yash-haduhu يَشْهَدُهُ":
                      </span>{" "}
                      Means "watched" or "witnessed." The verse explicitly uses
                      this word, not "Yakra-uhu يقرئه," which means "read." This
                      implies interaction with the 'Elliyyoon' is visual, like
                      watching, rather than traditional reading from a page.
                    </div>
                    <p>
                      Combining these interpretations, the description points to
                      'Elliyyoon' being a digitized history book that can be
                      watched like a movie—a concept remarkably aligned with our
                      modern digital capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection/Miracle Point Section */}
            <section id="reflection" className="scroll-mt-20">
              {/* Card for reflection, using a warm or thoughtful color */}
              <Card className="border-l-4 border-amber-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Icon for thought or wonder */}
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Sparkles className="text-amber-600" size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the technological landscape of the 7th century,
                    where information was primarily stored on physical mediums
                    like parchment or paper scrolls, this description in the
                    Quran presents a profound question:
                  </p>

                  {/* Central question styled prominently */}
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living 1400 years ago have described a
                      concept so akin to modern digital, visual media?
                    </h3>
                    <p>
                      The idea of a "digitized book" that is "watched"
                      transcends the understanding and technology available in
                      the 7th century. This correlation between an ancient text
                      and contemporary technological realities invites us to
                      reflect on the source of such knowledge.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Optional: Sidebar area can be added here if needed, mirroring the grid structure */}
          {/* <div className="lg:col-span-1 space-y-8">
              {/* Sidebar content goes here }
          </div> */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            {/* Icon for the footer */}
            <BookOpen className="text-blue-600" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Knowledge Across Time
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting ancient scripture with the digital age, inviting
            reflection on timeless concepts.
          </p>
          {/* Back to top button */}
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

export default DigitalBooks;
