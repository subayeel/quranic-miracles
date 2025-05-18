/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Rocket, // Changed icon for theme
  ChevronRight,
  CircleGauge, // Icon for speed/science
  BookOpen,
  HelpCircle,
  Calculator, // Icon for calculation
  ArrowUp,
  Sparkles,
  FastForward, // Icon for introduction
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define types for sections to ensure type safety for scrollToSection
type SectionId = "intro" | "quran" | "science" | "reflection";

const HypersonicDay = () => {
  // Function to smoothly scroll to a specific section
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-700 dark:from-cyan-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="text-cyan-200" size={32} /> {/* Thematic icon */}
            <h1 className="text-4xl font-bold">Hypersonic</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Speed Beyond Imagination?
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Speed <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn the Story
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
              <Card className="border-l-4 border-cyan-500">
                {" "}
                {/* Thematic color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <FastForward className="text-cyan-500" size={24} />{" "}
                      {/* Thematic icon */}
                    </div>
                    <CardTitle>A Journey of Incredible Speed</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran recounts the story of Prophet Solomon (peace be
                    upon him) and the transfer of the Queen of Sheba's throne.
                    In a remarkable exchange, a powerful being from the Jinn
                    offered to bring the throne in an incredibly short time.
                    Skeptics sometimes view such accounts as defying the known
                    laws of physics, particularly regarding speed. However,
                    let's explore this through the lens of the knowledge
                    available today and consider the understanding 1400 years
                    ago.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Challenge of the Throne
                    </h3>
                    <p>
                      Prophet Solomon asked his assembly who could bring him the
                      throne of the Queen of Sheba before she and her company
                      arrived. A Jinn offered to bring it before Solomon could
                      rise from his seat. Then, someone with knowledge from the
                      Book offered to bring it even faster. This latter offer is
                      the focus of our exploration into speed.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                {" "}
                {/* Thematic color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <BookOpen className="text-purple-500" size={24} />{" "}
                      {/* Consistent icon */}
                    </div>
                    <CardTitle>The Quranic Account</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/27/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/39"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 27:39-40
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "A daemon of the Jinn said, “I will bring it to you
                          before you rise from your seat. I am strong and
                          reliable enough to do it.” He who had knowledge from
                          the Book said, “I will bring it to you before your
                          glance returns to you.” And when he saw it settled
                          before him, he said, “This is from the grace of my
                          Lord, to test me, whether I am grateful or ungrateful.
                          He who is grateful, his gratitude is to his own
                          credit; but he who is ungrateful—my Lord is
                          Independent and Generous.”
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg text-gray-800 dark:text-gray-200">
                        <p dir="rtl">
                          ٣٩ قَالَ عِفْرِيتٌ مِنَ الْجِنِّ أَنَا آتِيكَ بِهِ
                          قَبْلَ أَنْ تَقُومَ مِنْ مَقَامِكَ ۖ وَإِنِّي عَلَيْهِ
                          لَقَوِيٌّ أَمِينٌ
                          <br />
                          ٤٠ قَالَ الَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ أَنَا
                          آتِيكَ بِهِ قَبْلَ أَنْ يَرْتَدَّ إِلَيْكَ طَرْفُكَ ۚ
                          فَلَمَّا رَآهُ مُسْتَقِرًّا عِنْدَهُ قَالَ هَٰذَا مِنْ
                          فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ ۖ
                          وَمَنْ شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ ۖ وَمَنْ
                          كَفَرَ فَإِنَّ رَبِّي غَنِيٌّ كَرِيمٌ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "قبل أن يرتد إليك طرفك" (qabla an yartadda
                      ilayka tarfuk) is often translated as "before your glance
                      returns to you." A common interpretation relates this to
                      the speed of light reflecting off an object and returning
                      to the eye. However, the Arabic word "Yartadd" (يَرْتَدَّ)
                      means to go back or bounce back, implying it didn't
                      originate there. The word "Qabla" (قَبْلَ) means *before*.
                      Thus, "Qabla an yartadda ilayka tarfuk" can be understood
                      as *before* the light is reflected back to you. This
                      points to the initial journey of light from its source
                      (like the sun) to the object, not the reflection back to
                      the observer's eye. This journey for sunlight to reach an
                      object on Earth takes approximately 8 minutes and 20
                      seconds.
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://phys.org/news/2013-04-sunlight-earth.html"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Phys.org, How long does it take sunlight to reach the
                        Earth?, 2013
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Science and Calculation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                {" "}
                {/* Thematic color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <CircleGauge className="text-blue-500" size={24} />{" "}
                      {/* Thematic icon */}
                    </div>
                    <CardTitle>Calculating the Speed</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Based on the interpretation that the time taken was related
                    to the initial journey of light from the sun (8 minutes 20
                    seconds), we can estimate the speed of this incredible feat.
                    The distance between Jerusalem and Yemen is approximately
                    2250 km. A round trip would be 4500 km.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Calculator size={16} className="text-blue-500" /> The
                      Calculation
                    </h3>
                    <p>
                      Given the distance (4500 km) and the time (8 minutes 20
                      seconds, or 8.33333 minutes):
                    </p>
                    <p className="mt-3 font-mono text-lg text-center">
                      Speed = Distance / Time
                    </p>
                    <p className="font-mono text-lg text-center">
                      Speed = 4500 km / 8.33333 minutes
                    </p>
                    <p className="font-mono text-lg text-center">
                      Speed ≈ 540 km/minute
                    </p>
                    <p className="font-mono text-lg text-center">
                      Speed ≈ 32,400 km/hour
                    </p>
                  </div>

                  <p>
                    To understand this speed in modern terms, we can convert it
                    to Mach number, which is the speed relative to the speed of
                    sound (approximately 1234.8 km/hr at sea level).
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <CircleGauge size={16} className="text-blue-500" />{" "}
                      Converting to Mach
                    </h3>
                    <p className="font-mono text-lg text-center">
                      Mach = Speed (km/hr) / Speed of Sound (km/hr)
                    </p>
                    <p className="font-mono text-lg text-center">
                      Mach = 32,400 km/hr / 1234.8 km/hr
                    </p>
                    <p className="font-mono text-lg text-center">
                      Mach ≈ 26.24
                    </p>
                  </div>

                  <p>
                    This calculated speed, Mach 26.24, is incredibly fast – deep
                    within the hypersonic range (speeds above Mach 5).
                    Interestingly, this speed is comparable to, or slightly
                    slower than, the speeds achieved by some of today's most
                    advanced military hypersonic vehicles, which can reach
                    speeds of Mach 27-30.
                  </p>
                  <div className="mt-3 text-sm">
                    <a
                      href="https://en.wikipedia.org/wiki/Avangard_(hypersonic_glide_vehicle)"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Avangard (hypersonic glide vehicle), 2025
                    </a>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                {" "}
                {/* Thematic color */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <HelpCircle className="text-teal-500" size={24} />{" "}
                      {/* Consistent icon */}
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering this interpretation of the Quranic verse and the
                    resulting speed calculation:
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could knowledge of speeds comparable to modern
                      hypersonic travel be present in a text revealed in the 7th
                      century CE?
                    </h3>
                    <p>
                      At a time when the fastest human travel was limited to
                      animals or sailing ships, the concept of traveling at
                      speeds of tens of thousands of kilometers per hour would
                      have been utterly beyond comprehension. There was no
                      scientific framework or technology available in the 7th
                      century to even conceive of, let alone measure, such
                      velocities.
                    </p>
                  </div>

                  <p>
                    The narrative in the Quran describes an event involving
                    beings (Jinn and one with knowledge from the Book) operating
                    at speeds that humanity has only begun to achieve with
                    cutting-edge technology today. This alignment between an
                    ancient text and modern scientific understanding of extreme
                    speeds presents a fascinating point of reflection regarding
                    the source of the knowledge contained within the Quran. It
                    invites us to consider how such details could have been
                    articulated at a time when human scientific capacity was
                    vastly different.
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
            {/* Thematic color */}
            <h3 className="text-lg font-medium">
              Exploring Speed and Revelation
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Delving into the descriptions of speed in ancient texts and their
            connection to modern scientific achievements.
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

export default HypersonicDay;
