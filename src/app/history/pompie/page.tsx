/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Flame, // Using Flame for volcano/Pompeii theme
  ChevronRight,
  Archive, // Using Archive for historical preservation
  BookOpen,
  Quote,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Assuming these components are available via your setup (like Shadcn UI)

const PompeiiMiracle = () => {
  // Define the type for the section ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header - Adapted for Pompeii theme */}
      <div className="bg-gradient-to-r from-stone-600 to-gray-800 dark:from-stone-800 dark:to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Changed icon and color */}
            <Flame className="text-red-300" size={32} />
            {/* Changed title */}
            <h1 className="text-4xl font-bold">Frozen in Time</h1>
          </div>
          {/* Changed subtitle */}
          <p className="text-xl max-w-2xl text-stone-200">
            Pompeii and the Quran
          </p>
          <div className="flex gap-4 mt-8">
            {/* Adapted button colors */}
            <Button
              className="bg-white text-stone-700 hover:bg-stone-100"
              onClick={() => scrollToSection("history")}
            >
              Explore the Past <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-stone-200 border-stone-300 hover:bg-stone-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid layout like AstronomyDay */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - Using lg:col-span-3 */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="intro" className="scroll-mt-20">
              {/* Card with border color matching theme */}
              <Card className="border-l-4 border-stone-600">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Icon and background color */}
                    <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900">
                      <Flame className="text-stone-600" size={24} />
                    </div>
                    <CardTitle>An Astonishing Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Have you ever heard of the ancient Roman city of Pompeii?
                    Its fate is one of history's most dramatic moments. In 79
                    A.D., Mount Vesuvius erupted with terrifying force, burying
                    the city and its inhabitants under volcanic ash and debris.
                    What archaeologists discovered centuries later was truly
                    astonishing: people frozen in their final moments, preserved
                    in time.
                  </p>
                  <div className="bg-stone-50 dark:bg-stone-900/30 p-6 rounded-lg border border-stone-100 dark:border-stone-800">
                    <h3 className="font-bold text-lg mb-3">
                      Bodies Preserved in Ash
                    </h3>
                    <p>
                      Unlike typical historical sites where only skeletons
                      remain, the people of Pompeii were found in postures
                      reflecting their last seconds – huddled together,
                      shielding faces, or reaching out. This unique preservation
                      occurred because of the specific nature of the volcanic
                      eruption.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Historical Context Section */}
            <section id="history" className="scroll-mt-20">
              {/* Card with different border color */}
              <Card className="border-l-4 border-red-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {/* Icon and background color */}
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Archive className="text-red-700" size={24} />
                    </div>
                    <CardTitle>The Mechanism of Preservation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The key to the incredible preservation at Pompeii was the
                    pyroclastic flow – a fast-moving current of hot gas and
                    volcanic matter.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-red-700" /> Pyroclastic
                      Flow
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The fast moving pyroclastic flow caught its citizens off
                      guard. The hot pumice, ash, and debris quickly hardened
                      around peoples' bodies, like a mold, preserving their
                      final act."
                    </p>
                    <div className="mt-3 text-sm">
                      {/* Acknowledge source if possible, otherwise state derived */}
                      <span className="text-red-600 dark:text-red-400">
                        (Information derived from historical accounts of
                        Pompeii)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Flame size={16} className="text-red-700" /> Volcanic
                        Materials
                      </h3>
                      <p>
                        The extreme heat and fine ash solidified rapidly around
                        the bodies, which later decayed, leaving cavities. These
                        cavities were filled with plaster by archaeologists to
                        create the casts we see today.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Archive size={16} className="text-gray-500" />{" "}
                        Preserved Postures
                      </h3>
                      <p>
                        This natural molding process captured the postures of
                        the victims with incredible detail, effectively
                        'freezing' them in the very moment of their death.
                      </p>
                    </div>
                  </div>

                  <p>
                    So, this historical event demonstrates a real-world
                    phenomenon where people's final physical states were
                    preserved by natural, intense forces.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference Section - Using the same green color */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>A Glimpse in the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Now, let's look at a verse from the Quran that speaks about
                    the power of Allah regarding people's movement and state.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      {/* Linking to a potential online Quran source */}
                      <a
                        href="https://www.quranexplorer.com/quran/36/67" // Example link
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 36:67
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And if We will, We can freeze them in their place; so
                          they can neither move forward, nor go back."
                        </p>
                        <div className="mt-3 text-sm">
                          <span className="text-green-700 dark:text-green-300">
                            (Translation of the meaning)
                          </span>
                        </div>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٦٧ وَلَوْ نَشَاءُ لَمَسَخْنَاهُمْ عَلَىٰ مَكَانَتِهِمْ
                          فَمَا اسْتَطَاعُوا مُضِيًّا وَلَا يَرْجِعُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Verse Meaning
                    </Badge>
                    <p className="mt-3">
                      The verse describes Allah's power to render someone
                      motionless, 'freezing' them exactly where they are, unable
                      to move in any direction. This is stated as a divine
                      capability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection Section - Using the same amber color */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Connecting the Dots</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Consider the context: the Quran was revealed in the 7th
                    century CE. At this time, the detailed fate of Pompeii and
                    the scientific explanation for how its inhabitants were
                    preserved by volcanic material was completely unknown.
                    Knowledge of Pompeii was buried literally and figuratively.
                  </p>
                  <p>
                    The correlation between the Quran's description of the
                    ability to "freeze them in their place" and the historical
                    event at Pompeii, where people were physically 'frozen' in
                    their final acts by volcanic material, is quite
                    thought-provoking.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone living in the 7th century have any
                      knowledge, let alone describe a scenario, that mirrors a
                      historical event and a physical process only understood
                      through modern archaeology and geology?
                    </h3>
                    <p>
                      The materials involved in the Pompeii preservation—intense
                      heat, ash, and debris from a volcano—bear a resemblance to
                      materials often associated with descriptions of Hell in
                      religious texts, including the Quran. The idea that
                      disbelievers could be 'frozen' or immobilized in their
                      state aligns with the visual evidence found centuries
                      later in Pompeii.
                    </p>
                  </div>

                  <p>
                    This connection invites us to reflect on the potential
                    sources of knowledge in the Quran, particularly when verses
                    seem to align with scientific or historical details that
                    were far beyond the grasp of people in the 7th century.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
          {/* Optional Sidebar area - keeping the grid but leaving this column empty for now */}
          <div className="lg:col-span-1">
            {/* Add content here if needed for a sidebar */}
          </div>
        </div>
      </div>

      {/* Footer - Adapted */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles
              className="text-stone-600 dark:text-stone-300"
              size={18}
            />
            <h3 className="text-lg font-medium">
              Reflecting on History and Faith
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring connections between historical events, scientific
            understanding, and ancient scripture.
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

export default PompeiiMiracle;
