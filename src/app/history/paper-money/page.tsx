/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Banknote,
  ChevronRight,
  BookOpen,
  Quote,
  HelpCircle,
  History,
  ArrowUp,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define a simple functional component type
const PaperMoney: React.FC = () => {
  // Type for the scrollToSection function parameter
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-green-700 dark:from-teal-800 dark:to-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Banknote className="text-green-200" size={32} />
            <h1 className="text-4xl font-bold">Paper Money</h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            An intriguing mention in the Quran
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("introduction")}
            >
              Learn More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-teal-700"
              onClick={() => scrollToSection("quranic-mention")}
            >
              See the Verse
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Using a single column layout as the sidebar isn't needed for this topic */}
        <div className="space-y-12">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-20">
            <Card className="border-l-4 border-teal-600">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                    <Banknote className="text-teal-600" size={24} />
                  </div>
                  <CardTitle>Beyond Metal Coins</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="font-medium">
                  In the 7th century Arabian Peninsula, like much of the world
                  at the time, currency primarily consisted of precious metal
                  coins – gold Dinars and silver Dirhams. The concept of using
                  paper as a form of money for everyday transactions was
                  entirely foreign. However, the Quran contains a verse that
                  seems to reference the use of paper money, long before its
                  successful widespread adoption in history.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                  <h3 className="font-bold text-lg mb-3">
                    Currency in the 7th Century
                  </h3>
                  <p>
                    During the era of the Prophet Muhammad (peace be upon him),
                    trade and transactions were conducted using established coin
                    systems. The idea of a piece of paper holding monetary value
                    in the same way as a gold or silver coin was simply not a
                    part of the economic landscape or general knowledge.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Historical Context */}
          <section id="historical-context" className="scroll-mt-20">
            <Card className="border-l-4 border-blue-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                    <History className="text-blue-500" size={24} />
                  </div>
                  <CardTitle>Historical Perspective</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p>
                  Historians generally credit China with the first successful
                  use of paper currency.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Quote size={16} className="text-blue-500" /> Jiaozi:
                    China's Early Paper Money
                  </h3>
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "Jiaozi was a form of promissory banknote which appeared
                    around the 11th century in the Sichuan capital of Chengdu,
                    China. Numismatists regard it as the first paper money in
                    history, a development of the Chinese Song Dynasty (960-1279
                    CE)."
                  </p>
                  <div className="mt-3 text-sm">
                    <a
                      href="https://en.wikipedia.org/wiki/Jiaozi_(currency)"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Jiaozi (currency), 2019
                    </a>
                  </div>
                </div>

                <p>
                  This historical context makes the Quran's mention of paper
                  money particularly interesting, as it predates the known
                  successful use of such a system by several centuries and
                  originates from a region where this concept was unknown.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Quranic Mention */}
          <section id="quranic-mention" className="scroll-mt-20">
            <Card className="border-l-4 border-green-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                    <BookOpen className="text-green-500" size={24} />
                  </div>
                  <CardTitle>The Quranic Reference</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p>
                  The Quran mentions currency in the story of the Sleepers of
                  the Cave (Surah Al-Kahf). After awakening, they decide to send
                  one of their group to the city to buy food. The verse
                  describing this journey contains the key phrase:
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                  <h3 className="font-medium mb-3">
                    <a
                      href="https://www.quranwow.com/#/ch/18/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-64/v/19"
                      className="text-green-600 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 18:19
                    </a>
                  </h3>
                  <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-1/2">
                      <p className="italic mb-4">
                        "Even so, We awakened them, so that they may ask one
                        another. A speaker among them said, 'How long have you
                        stayed?' They said, 'We have stayed a day, or part of a
                        day.' They said, 'Your Lord knows best how long you have
                        stayed.' 'Send one of you to the city, with this{" "}
                        <span className="font-bold">paper money</span> of yours,
                        and let him see which food is most suitable, and let him
                        bring you some provision thereof. And let him be gentle,
                        and let no one become aware of you.'"
                      </p>
                    </div>
                    <div className="md:w-1/2 font-arabic text-right text-lg">
                      <p dir="rtl">
                        ١٩ وَكَذَٰلِكَ بَعَثْنَاهُمْ لِيَتَسَاءَلُوا بَيْنَهُمْ
                        ۚ قَالَ قَائِلٌ مِنْهُمْ كَمْ لَبِثْتُمْ ۖ قَالُوا
                        لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍ ۚ قَالُوا رَبُّكُمْ
                        أَعْلَمُ بِمَا لَبِثْتُمْ فَابْعَثُوا أَحَدَكُمْ{" "}
                        <span className="font-bold">بِوَرِقِكُمْ</span> هَٰذِهِ
                        إِلَى الْمَدِينَةِ فَلْيَنْظُرْ أَيُّهَا أَزْكَىٰ
                        طَعَامًا فَلْيَأْتِكُمْ بِرِزْقٍ مِنْهُ وَلْيَتَلَطَّفْ
                        وَلَا يُشْعِرَنَّ بِكُمْ أَحَدًا
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    Linguistic Detail
                  </Badge>
                  <p className="mt-3">
                    The key Arabic word here is "$بِوَرِقِكُمْ$" (bi-wariqikum).
                    The root word is "$وَرَق$" (warak), which means "paper" or
                    "leaves". In the context of currency, "$وَرِق$" has been
                    interpreted by classical and modern scholars to refer to
                    silver coins (Dirhams) or, more significantly, paper money.
                    The phrase "$بِوَرِقِكُمْ هَٰذِهِ$" translates literally to
                    "with this paper of yours" or "with this money of yours
                    (made of paper)". Given the primary meaning of "$وَرَق$" as
                    paper, and the historical context where metal coins were the
                    norm, the interpretation as paper money is particularly
                    striking.
                  </p>
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
                  <CardTitle>
                    Reflection: Knowledge in the 7th Century
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p>
                  Considering the economic landscape of the 7th century Arabian
                  Peninsula, where metal coinage was the standard form of
                  currency, the mention of "$بِوَرِقِكُمْ$" (your paper money)
                  in the Quran raises a profound question:
                </p>

                <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                  <h3 className="font-bold text-xl mb-3 text-center">
                    How could an individual in 7th-century Mecca or Medina have
                    knowledge of a concept like paper money, which was not in
                    use in the region and would only see successful
                    implementation centuries later in a distant land like China?
                  </h3>
                  <p>
                    The Quran was revealed at a time and place where such a form
                    of currency was unknown. The fact that it appears in the
                    narrative of the Sleepers of the Cave, a story set in an
                    even earlier time, adds another layer of contemplation. This
                    mention, seemingly out of place within the known historical
                    context of 7th-century Arabia, is presented as a point of
                    reflection for believers regarding the divine origin of the
                    Quran's knowledge.
                  </p>
                </div>

                {/* Optional: Include the Bible comparison if desired, formatted similarly */}
                {/*
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Quote size={16} className="text-gray-500" /> A Contrast
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                   (It's worth noting historical texts can sometimes contain anachronisms regarding currency. For example, some interpretations highlight that the Christian Bible mentions "gold darics" (coins from King Darius, ~400 BCE) being used during the time of King David (~1000 BCE) in 1 Chronicles 29:7, a period long before such coins existed. In contrast, the Quran's mention here is not tied to a specific anachronistic coin, but to the concept of paper money itself, which was unknown to 7th-century Arabs.)
                  </p>
                   <div className="mt-3 text-sm">
                    <a
                      href="https://www.biblegateway.com/passage/?search=1+Chronicles+29%3A7&version=NIV"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      1 Chronicles 29:7 (NIV)
                    </a>
                  </div>
                </div>
                */}
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-teal-600" size={18} />
            <h3 className="text-lg font-medium">
              Exploring Wisdom and History
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Contemplating the subtle details within ancient texts can reveal
            profound connections to historical facts and raise questions about
            the source of such knowledge.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaperMoney;
