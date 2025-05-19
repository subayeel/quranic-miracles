/* eslint-disable react/no-unescaped-entities */
"use client"; // This indicates a Client Component in Next.js 13+

import {
  Ship, // Icon for Noah's Ark
  BookOpen, // Icon for text/scripture
  Droplets, // Icon for flood/water
  Mountain, // Icon for Mount Judi
  HelpCircle, // Icon for reflection/question
  Sparkles, // Icon for wonder/miracle
  ChevronRight,
  ArrowUp,
  RotateCcw,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NoahsHistory = () => {
  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 dark:from-blue-800 dark:to-cyan-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Ship className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Noah's History</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            The Flood - A Quranic Perspective
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("account")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid layout similar to AstronomyDay */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Introduction: The Flood Narrative</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The story of Prophet Noah (peace be upon him) and the great
                    flood is a significant narrative found in many religious and
                    cultural traditions. While many accounts depict a global
                    event that wiped out all life except those on the ark, the
                    Quran presents a perspective that differs in a key aspect –
                    the scale and scope of the flood.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Common vs. Quranic Perspective
                    </h3>
                    <p>
                      Many traditional accounts describe Noah's flood as a
                      global catastrophe. The Quran, however, provides details
                      that suggest the flood was a localized event primarily
                      affecting Noah's disbelieving people, while other
                      communities and nations on Earth survived.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* The Quranic Account Section */}
            <section id="account" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Insights from the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let's explore some verses from the Holy Quran that shed
                    light on the nature of Noah's flood.
                  </p>

                  {/* Quran 11:48 */}
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/11/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/48"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 11:48
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "It was said, 'O Noah, disembark with peace from Us;
                          and with blessings upon you, and upon communities from
                          those with you. And other communities We will grant
                          prosperity and later We will hand them painful
                          torture.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٨ قِيلَ يَا نُوحُ اهْبِطْ بِسَلَامٍ مِنَّا
                          وَبَرَكَاتٍ عَلَيْكَ وَعَلَىٰ أُمَمٍ مِمَّنْ مَعَكَ ۚ
                          وَأُمَمٌ سَنُمَتِّعُهُمْ ثُمَّ يَمَسُّهُمْ مِنَّا
                          عَذَابٌ أَلِيمٌ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                      This verse mentions "other communities We will grant
                      prosperity and later We will hand them painful torture."
                      This indicates that there were other communities outside
                      of Noah's people and outside the ark who survived the
                      flood, as God intends to punish them later.
                    </p>
                  </div>

                  {/* Quran 11:49 */}
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/11/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/49"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 11:49
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "These are some stories from the past that We reveal
                          to you. Neither you, nor your people knew them before
                          this. So be patient. The future belongs to the pious."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٩ تِلْكَ مِنْ أَنْبَاءِ الْغَيْبِ نُوحِيهَا إِلَيْكَ
                          ۖ مَا كُنْتَ تَعْلَمُهَا أَنْتَ وَلَا قَوْمُكَ مِنْ
                          قَبْلِ هَٰذَا ۖ فَاصْبِرْ ۖ إِنَّ الْعَاقِبَةَ
                          لِلْمُتَّقِينَ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                      This verse highlights that this particular account of
                      Noah's history, including the details it contains (like
                      the survival of other communities), was not known to
                      Prophet Muhammad (PBUH) or his people before its
                      revelation.
                    </p>
                  </div>

                  {/* Scope of Noah's Mission */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <BookOpen size={16} className="text-green-500" />{" "}
                        Prophet Muhammad's Mission
                      </h3>
                      <p>
                        <a
                          href="https://www.quranwow.com/#/ch/21/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/107"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 21:107
                        </a>{" "}
                        states, "We did not send you except as mercy to all
                        nations ('Al-alameen')." His message was universal.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <BookOpen size={16} className="text-green-500" />{" "}
                        Prophet Noah's Mission
                      </h3>
                      <p>
                        In contrast,{" "}
                        <a
                          href="https://www.quranwow.com/#/ch/7/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/59"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 7:59
                        </a>{" "}
                        says, "We sent Noah to his people." This indicates his
                        mission was specifically directed towards his own
                        community, not all of mankind globally.
                      </p>
                    </div>
                  </div>

                  {/* Quran 25:37 */}
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/25/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/37"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 25:37
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the people of Noah: when they rejected the
                          messengers, We drowned them, and made them a lesson
                          for mankind. We have prepared for the wrongdoers a
                          painful retribution."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٧ وَقَوْمَ نُوحٍ لَمَّا كَذَّبُوا الرُّسُلَ
                          أَغْرَقْنَاهُمْ وَجَعَلْنَاهُمْ لِلنَّاسِ آيَةً ۖ
                          وَأَعْتَدْنَا لِلظَّالِمِينَ عَذَابًا أَلِيمًا
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                      This verse explicitly states that God drowned "the people
                      of Noah" (قَوْمَ نُوحٍ), reinforcing that the judgment was
                      on his specific community who disbelieved, not on all of
                      mankind ("Al-alameen").
                    </p>
                  </div>

                  <p className="mt-6">
                    Based on these verses, the Quran presents a flood that
                    specifically targeted Noah's disbelieving people, implying
                    that it was a localized event, unlike the widespread belief
                    in a global flood that annihilated all but the ark's
                    passengers.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Specific Details Section */}
            <section id="details" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Droplets className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Further Details</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Additional details in the Quran also support the idea of a
                    more localized event.
                  </p>

                  {/* Quran 11:40 - The Tannur */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/11/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/40"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 11:40
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Until, when Our command came, and the earth oven
                          boiled ('Tannur'), We said, 'Board into it a pair of
                          every kind, and your family—except those against whom
                          the sentence has already been passed—and those who
                          have believed.' But those who believed with him were
                          only a few."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٠ حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ
                          قُلْنَا احْمِلْ فِيهَا مِنْ كُلٍّ زَوْجَيْنِ اثْنَيْنِ
                          وَأَهْلَكَ إِلَّا مَنْ سَبَقَ عَلَيْهِ الْقَوْلُ
                          وَمَنْ آمَنَ ۚ وَمَا آمَنَ مَعَهُ إِلَّا قَلِيلٌ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                      The phrase "and the earth oven boiled" (وَفَارَ
                      التَّنُّورُ) uses the word "Tannur" (التَّنُّورُ) in the
                      singular form. A Tannur is traditionally an oven, often a
                      hole in the ground. The Quran mentioning *the* Tannur
                      boiling, rather than all ovens or sources globally, can be
                      understood as the localized starting point of the flood
                      waters, perhaps referring to a specific location known to
                      Noah and his people.
                    </p>
                  </div>

                  {/* The Animals */}
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Ship size={16} className="text-purple-500" /> Animals on
                      the Ark
                    </h3>
                    <p>
                      The same verse (11:40) mentions taking "a pair of every
                      kind". Considering the context of Noah being sent only to
                      his people, and the practical limitations of a single ark,
                      this can be understood as taking pairs of animals
                      necessary for *them* – perhaps domesticated animals they
                      owned or needed for sustenance and continuation, rather
                      than every single species on the planet. This aligns
                      better with a local event where not all animal life
                      globally was destroyed.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Supporting Evidence Claim (from source text) */}
            <section id="evidence" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                {" "}
                {/* Using orange as in AstronomyDay */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Mountain className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>Supporting Claim: Ark Finding</CardTitle>{" "}
                    {/* Label this as a claim */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <MapPin size={16} className="text-orange-500" /> Location
                      Claim
                    </h3>
                    <p>
                      The source text mentions a claim of a fossilized wooden
                      ark found in Yemen on Mount Judi. It describes it as
                      having dimensions sufficient for around 80 people and
                      their personal animals, found on a mountain around 2500m
                      altitude.
                    </p>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 italic">
                      (Note: Claims about the discovery and location of Noah's
                      Ark are widely debated and not universally accepted within
                      archaeological and scientific communities.)
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <RotateCcw size={16} className="text-orange-500" />{" "}
                      Implied Travel Distance
                    </h3>
                    <p>
                      The text posits the ark traveled a relatively short
                      distance (30 km) from Mount Sam (where Noah's disbelieving
                      son allegedly went) to Mount Judi, both at similar
                      altitudes. This limited travel distance is presented as
                      further support for a local flood confined to a specific
                      region.
                    </p>
                  </div>

                  <p>
                    While the scientific community does not currently support
                    evidence for a single global flood event of the scale
                    described in some traditions, the idea of localized, massive
                    floods occurring in various regions throughout history is
                    well-documented.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection Section - The Miracle Point */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                {" "}
                {/* Using amber as in AstronomyDay */}
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
                    Considering the prevailing narratives at the time,
                    predominantly influenced by accounts depicting a global
                    flood with no survivors outside the ark, the details
                    provided in the Quran raise a fascinating question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an unlettered man living in 7th-century Arabia
                      have presented details about Noah's flood that suggest a
                      localized event and the survival of other communities –
                      details that seem to align better with modern scientific
                      skepticism towards a global flood and contradict widely
                      known narratives of his time?
                    </h3>
                    <p className="mt-4">
                      In the 7th century, the concept of a global flood was
                      widely accepted based on existing scriptures and stories.
                      The idea that the flood was limited to Noah's people, that
                      other nations survived, and specific details like the
                      singular "Tannur" or the practical scope of animals on the
                      ark, represent a unique perspective. The Quran explicitly
                      states (11:49) that this account was previously unknown.
                      This divergence from the common narrative and the
                      provision of specific details are presented as points for
                      contemplation regarding the source of this knowledge.
                    </p>
                  </div>

                  <p>
                    The Quranic account, with its focus on the judgment of
                    Noah's specific people and the survival of others, offers a
                    perspective that was not commonly known or accepted in the
                    7th century. This unique presentation is highlighted as a
                    potential sign for those who reflect.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Optional: Sidebar area (currently empty as in AstronomyDay example) */}
          <div className="lg:col-span-1 space-y-8">
            {/* Add sidebar content here if needed */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-blue-600" size={18} />
            <h3 className="text-lg font-medium">
              Reflecting on Ancient Narratives
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the stories of the past provides unique insights and
            perspectives for today.
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

export default NoahsHistory;
