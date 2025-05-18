/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Code, // Represents encoding/data
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  Binary, // Represents digital data/encoding
  ArrowUp,
  Sparkles, // For the 'miracle'/sign aspect
  Search, // Could represent discovery
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EncodingTopic = () => {
  // Function to scroll to a specific section ID
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-700 dark:from-blue-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-cyan-200" size={32} />
            <h1 className="text-4xl font-bold">Topic</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Character Encoding - A fascinating connection
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("introduction")}
            >
              Explore Topic <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-indigo-700"
              onClick={() => scrollToSection("technical-context")}
            >
              Learn About Encoding
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
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Sparkles className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>A Glimpse into Encoding</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the world of modern computing, a key concept rooted in
                    mathematical ideas like sets and relations is character
                    encoding. It's how we represent letters and symbols using
                    numbers, the language computers understand. Surprisingly,
                    some see echoes of this complex idea in a text revealed over
                    1400 years ago.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Modern Concept, Ancient Whisper?
                    </h3>
                    <p>
                      Character encoding is fundamental to how we interact with
                      digital text today, a sophisticated system developed
                      relatively recently in human history. The idea that a text
                      from the 7th century might contain patterns resembling
                      such a system is truly thought-provoking.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Technical Context */}
            <section id="technical-context" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Binary className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>What is Character Encoding?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> From
                      Wikipedia
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In computing, data storage, and data transmission,
                      character encoding is used to represent a repertoire of
                      characters by some kind of encoding system that assigns a
                      number to each character for digital representation."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Character_encoding"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Character Encoding
                      </a>
                    </div>
                  </div>

                  <p>
                    Essentially, encoding allows us to map characters (like 'A',
                    'ب', '€', or '😊') to unique numbers, making it possible for
                    computers to store, process, and display text. Different
                    encoding systems (like ASCII, UTF-8) use different maps.
                    This concept of representing one set of symbols using
                    another is key.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Code size={16} className="text-indigo-500" /> Mapping
                        Characters
                      </h3>
                      <p>
                        Encoding assigns a specific numerical value to each
                        character, creating a correspondence between symbols and
                        numbers that computers can handle.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Search size={16} className="text-gray-500" /> Modern
                        Development
                      </h3>
                      <p>
                        Sophisticated character encoding systems are products of
                        the modern age of computing and information technology.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Example */}
            <section id="quranic-example" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>An intriguing pattern in the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Some verses in the Quran begin with mysterious individual
                    letters or combinations of letters, known as the
                    "Muqatta'at" (disconnected letters). Their meaning is
                    debated, but in Chapter 27 (Surah An-Naml - The Ants), a
                    fascinating numerical pattern has been observed relating
                    these letters to the chapter itself.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      The case of Chapter 27 (An-Naml)
                    </h3>
                    <p>
                      This chapter begins with the letters "T ط" and "S س".
                      Interestingly, counts of these letters within this
                      specific chapter reveal:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
                      <li>
                        The letter "T ط" appears exactly{" "}
                        <span className="font-bold text-green-800 dark:text-green-200">
                          27
                        </span>{" "}
                        times in this chapter.
                      </li>
                      <li>
                        The letter "S س" appears exactly{" "}
                        <span className="font-bold text-green-800 dark:text-green-200">
                          93
                        </span>{" "}
                        times in this chapter.
                      </li>
                    </ul>
                    <p className="mt-3 text-sm italic text-gray-700 dark:text-gray-300">
                      (Counts based on resources like the Quran Characters
                      Counter)
                      {/* Link to the counter is commented out as per original HTML, but could be added */}
                      {/* <a href="http://www.kaheel7.com/ar/index.php/1/2087--2019" className="text-green-600 dark:text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">Quran Characters Counter</a> */}
                    </p>
                  </div>

                  <p>
                    What makes this pattern particularly striking is that
                    Chapter 27 is... well, chapter{" "}
                    <span className="font-bold text-green-800 dark:text-green-200">
                      27
                    </span>
                    , and it contains{" "}
                    <span className="font-bold text-green-800 dark:text-green-200">
                      93
                    </span>{" "}
                    verses! It's as if the chapter number (27) and the total
                    number of verses (93) are "encoded" within the frequency of
                    these specific opening letters in that chapter.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">Consider Quran 27:93</h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "And say, 'Praise belongs to Allah;{" "}
                          <span className="font-bold">
                            He will show you His signs, and you will recognize
                            them
                          </span>
                          . Your Lord is not heedless of what you do.'"
                        </p>
                        <div className="mt-3 text-sm">
                          <a
                            href="https://www.quranwow.com/#/ch/27/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/93"
                            className="text-green-600 dark:text-green-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Quran 27:93
                          </a>
                        </div>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٩٣ وَقُلِ الْحَمْدُ لِلَّهِ سَيُرِيكُمْ آيَاتِهِ
                          فَتَعْرِفُونَهَا ۚ وَمَا رَبُّكَ بِغَافِلٍ عَمَّا
                          تَعْمَلُون
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    This verse, itself the{" "}
                    <span className="font-bold text-green-800 dark:text-green-200">
                      93rd
                    </span>{" "}
                    verse of the{" "}
                    <span className="font-bold text-green-800 dark:text-green-200">
                      27th
                    </span>{" "}
                    chapter (the very numbers seemingly encoded by the 'T' and
                    'S' counts), speaks of future signs from God that people
                    will recognize. Could this numerical pattern be one such
                    sign revealed in our modern era?
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Reflecting on this Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    This observed pattern in Chapter 27 of the Quran, linking
                    the frequency of specific letters to the chapter and verse
                    counts, presents a fascinating point for contemplation.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-xl mb-3 text-center text-purple-800 dark:text-purple-200">
                      A Question from the 7th Century
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300 text-center">
                      How could a text originating in the 7th century contain
                      such a subtle, mathematical pattern that seems to "encode"
                      information like chapter and verse numbers?
                    </p>
                  </div>

                  <p>
                    The arrangement of the Quran into its current chapters and
                    verses was finalized after the lifetime of the Prophet
                    Muhammad (peace be upon him), who received the revelation.
                    This means the specific numbering of Chapter 27 and its 93
                    verses would not have been known during the initial
                    revelation period. Therefore, the presence of this numerical
                    correlation within the text itself, discovered through
                    counting characters (a concept akin to modern data analysis
                    and encoding), is seen by some as a remarkable sign.
                  </p>
                  <p>
                    It's a pattern that aligns intriguing with the message of
                    Quran 27:93 – that signs will be shown and recognized. From
                    the perspective of someone living in the 7th century,
                    without modern counting methods, statistical analysis, or
                    the concept of digital encoding, discovering such a pattern
                    would have been impossible. This leads many to view this as
                    a sign that points to a source of knowledge beyond human
                    capacity at that time.
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
            <Code className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Patterns and Meaning
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discoveries in various fields continue to reveal intriguing
            connections that invite deeper reflection.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-50"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EncodingTopic;
