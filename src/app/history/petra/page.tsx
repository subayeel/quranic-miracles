/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Mountain,
  BookOpen,
  Quote,
  Spade,
  ChevronRight,
  ArrowUp,
  Sparkles,
  ScrollText,
} from "lucide-react"; // Added Spade and ScrollText icons

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define TypeScript type for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const PetraComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Lost City",
        icon: Mountain,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-600", // Changed colors for a rocky/desert theme
      },
      {
        id: "history",
        title: "Ancient Petra",
        icon: Spade, // Archaeology icon
        color: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-600",
      },
      {
        id: "quran",
        title: "Quranic Account",
        icon: BookOpen,
        color: "bg-emerald-100 dark:bg-emerald-900", // Green for Quran
        iconColor: "text-emerald-600",
      },
      {
        id: "findings",
        title: "Archaeological Evidence",
        icon: ScrollText, // Scroll/Document icon
        color: "bg-yellow-100 dark:bg-yellow-900", // Earthy/discovery color
        iconColor: "text-yellow-600",
      },
      {
        id: "reflection",
        title: "A Remarkable Connection",
        icon: Sparkles, // Miracle/Wonder icon
        color: "bg-purple-100 dark:bg-purple-900", // Distinct color for reflection
        iconColor: "text-purple-600",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Optional: Update URL hash without navigating
      // history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-orange-800 dark:from-red-900 dark:to-orange-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="text-red-300" size={32} /> {/* Icon updated */}
            <h1 className="text-4xl font-bold">Petra: The Lost City</h1>
          </div>
          <p className="text-xl max-w-2xl text-orange-200">
            Archaeology & Ancient History
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-red-800 hover:bg-red-50"
              onClick={() => scrollToSection("history")}
            >
              Explore History <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              onClick={() => scrollToSection("intro")}
            >
              Discover Petra
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>Explore the story of Petra</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium"
                            : ""
                        }`}
                      >
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {activeSection === id && (
                          <ChevronRight className="ml-auto" size={16} />
                        )}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-red-600 dark:border-red-800">
                {" "}
                {/* Border color updated */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents.at(0)?.title}</CardTitle>{" "}
                    {/* Title updated */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine a city carved directly into rose-red cliffs – a
                    place of incredible beauty and ancient mystery. This is
                    Petra, a "lost" city that lay hidden from the Western world
                    for centuries, nestled in the desert canyons of Jordan.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                    {" "}
                    {/* Colors updated */}
                    <h3 className="font-bold text-lg mb-3">Carved Wonders</h3>
                    <p>
                      Petra is famous for its elaborate rock-cut architecture,
                      particularly structures like the Treasury (Al-Khazneh).
                      These impressive facades were carved directly into the
                      sandstone cliffs, showcasing the incredible skill of its
                      ancient inhabitants, the Nabataeans.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Ancient Petra (History) */}
            <section id="history" className="scroll-mt-20">
              <Card className="border-l-4 border-stone-600 dark:border-stone-800">
                {" "}
                {/* Border color updated */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents.at(1)?.title}</CardTitle>{" "}
                    {/* Title updated */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Petra was the thriving capital of the Nabataean empire, a
                    dominant trading power between 400 B.C. and A.D. 106. They
                    controlled vital trade routes, accumulating wealth that
                    allowed them to build their magnificent city.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-stone-50 dark:bg-stone-900/30 p-4 rounded-lg border border-stone-100 dark:border-stone-800">
                      {" "}
                      {/* Colors updated */}
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Spade
                          size={16}
                          className="text-stone-600 dark:text-stone-400"
                        />{" "}
                        {/* Icon updated */}
                        Nabataean Legacy
                      </h3>
                      <p>
                        The Nabataeans were masters of hydraulics and stone
                        carving. While the famous structures like the Treasury
                        were later additions (around 1st century A.D.), the
                        tradition of carving homes and tombs into the rock goes
                        back much further among the people of this region.
                      </p>
                    </div>
                    <div className="bg-stone-50 dark:bg-stone-900/30 p-4 rounded-lg border border-stone-100 dark:border-stone-800">
                      {" "}
                      {/* Colors updated */}
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain
                          size={16}
                          className="text-stone-600 dark:text-stone-400"
                        />{" "}
                        {/* Icon updated */}
                        Homes in the Cliffs
                      </h3>
                      <p>
                        Beyond the grand facades, many of the inhabitants lived
                        in simpler dwellings also carved directly into the
                        natural rock faces. These older, humbler rock-cut homes
                        are a key feature of the Petra landscape.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Quote
                        size={16}
                        className="text-gray-600 dark:text-gray-400"
                      />{" "}
                      Source:
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Carved into vibrant red, white, pink, and sandstone cliff
                      faces, the prehistoric Jordanian city of Petra was "lost"
                      to the Western world for hundreds of years... Only in the
                      early 1800s did a European traveler disguise himself in
                      Bedouin costume and infiltrate the mysterious locale."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.nationalgeographic.com/travel/article/petra" // Link updated
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        National Geographic, Petra, 2021
                      </a>
                    </div>
                  </div>
                  <p>
                    After its decline, Petra became largely uninhabited and its
                    location remained unknown to the wider world until the early
                    19th century. It was effectively "lost" to Europe and beyond
                    for over a thousand years before its "rediscovery".
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Account */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-emerald-600 dark:border-emerald-800">
                {" "}
                {/* Border color updated */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents.at(2)?.title}</CardTitle>{" "}
                    {/* Title updated */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran mentions a people who lived in the mountains and
                    carved their homes into rock. These people were warned by
                    messengers but ultimately rejected the message and faced a
                    divine consequence. Could this be the people of Petra?
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    {" "}
                    {/* Colors updated */}
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/15/80-83" // Link updated
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 15:80-83
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "And verily, the dwellers of Al-Hijr (the rocky tract)
                          denied the Messengers. <br />
                          And We gave them Our Signs, but they turned away from
                          them. <br />
                          And they used to carve out dwellings from the
                          mountains, feeling secure. <br />
                          But the Sayhah (torment — shout) overtook them in the
                          morning."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg leading-loose">
                        {" "}
                        {/* Added leading-loose for readability */}
                        <p dir="rtl">
                          ٨٠ وَلَقَدْ كَذَّبَ أَصْحَابُ الْحِجْرِ الْمُرْسَلِينَ
                        </p>
                        <p dir="rtl">
                          ٨١ وَآتَيْنَاهُمْ آيَاتِنَا فَكَانُوا عَنْهَا
                          مُعْرِضِينَ
                        </p>
                        <p dir="rtl">
                          ٨٢ وَكَانُوا يَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا
                          آمِنِينَ
                        </p>
                        <p dir="rtl">
                          ٨٣ فَأَخَذَتْهُمُ الصَّيْحَةُ مُصْبِحِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
                      {" "}
                      {/* Colors updated */}
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      "أَصْحَابُ الْحِجْرِ (Ashab al-Hijr)" translates to "the
                      people of the Rock" or "the dwellers of the rocky tract."
                      This description strongly aligns with the environment of
                      Petra, where people literally carved their homes into the
                      rocky mountains.
                    </p>
                    <p className="mt-3">
                      The verses describe them carving dwellings ("يَنْحِتُونَ
                      مِنَ الْجِبَالِ بُيُوتًا" - yanḥitūna mina l-jibāli
                      buyūtan) from the mountains, feeling secure. This
                      perfectly matches the practice of the Nabataeans,
                      especially their earlier generations and less affluent
                      inhabitants, who lived in rock-cut homes.
                    </p>
                    <p className="mt-3">
                      Finally, the mention of being overtaken by "الصَّيْحَةُ"
                      (the Shout/torment) suggests a sudden, overwhelming
                      destruction. Interestingly, while the people were
                      destroyed, the rock-cut structures themselves remain
                      largely intact, consistent with the idea that the
                      destruction was not physical demolition of the buildings
                      but something that targeted the inhabitants.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Archaeological Evidence */}
            <section id="findings" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-600 dark:border-yellow-800">
                {" "}
                {/* Border color updated */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents.at(3)?.title}</CardTitle>{" "}
                    {/* Title updated */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Archaeological explorations in Petra have uncovered
                    fascinating details about the Nabataeans that connect them
                    to the Quranic description of the "people of the Rock."
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    {" "}
                    {/* Colors updated */}
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <ScrollText
                        size={16}
                        className="text-yellow-600 dark:text-yellow-400"
                      />{" "}
                      {/* Icon updated */}
                      Inscriptions and Beliefs
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The Nabataeans worshipped Arab gods and goddesses during
                      the pre-Islamic era... Nabatean inscriptions in Sinai and
                      other places display widespread references to names
                      including Allah, El and Allat (god and goddess)... A stele
                      dedicated to Qos-Allah 'Qos is Allah' or 'Qos the god', by
                      Qosmilk (melech - king) is found at Petra."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Petra#Religion" // Link updated
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Petra (Religion section), 2019
                      </a>
                    </div>
                  </div>

                  <p>
                    The discovery of inscriptions containing the name "Allah"
                    among the Nabataean ruins is highly significant. It
                    indicates that the name "Allah" was known and used by these
                    people in the pre-Islamic era, suggesting they were indeed
                    exposed to the concept of the monotheistic God, correlating
                    with the Quran's statement that they "denied the
                    Messengers."
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Spade
                          size={16}
                          className="text-stone-600 dark:text-stone-400"
                        />{" "}
                        {/* Icon updated */}
                        Homes Match Description
                      </h3>
                      <p>
                        Archaeological findings confirm that, alongside their
                        grand tombs, the Nabataeans, especially in earlier
                        periods, carved their actual homes into the rock cliffs
                        of Petra, fitting the Quranic description of "carving
                        out dwellings from the mountains."
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mountain size={16} className="text-gray-500" />{" "}
                        {/* Icon updated */}
                        City Remains Intact
                      </h3>
                      <p>
                        The physical rock-cut structures of Petra remain largely
                        preserved, while there is archaeological evidence of the
                        sudden demise of its inhabitants, aligning with the
                        Quran's mention of the "Shout" as a torment that struck
                        the people, not necessarily demolishing the entire city
                        infrastructure.
                      </p>
                    </div>
                  </div>

                  <p>
                    The convergence of these details – a people in a rocky
                    mountain region, carving their homes into the rock, who knew
                    the name "Allah" and were warned, and whose city structures
                    remained after their disappearance – points strongly to
                    Petra being the "people of the Rock" mentioned in the Quran.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-600 dark:border-purple-800">
                {" "}
                {/* Border color updated */}
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle>{contents.at(4)?.title}</CardTitle>{" "}
                    {/* Title updated */}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the historical context of the 7th century when
                    the Quran was revealed, the details provided about the
                    "people of the Rock" are quite remarkable.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    {" "}
                    {/* Colors updated */}
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could these specific, interconnected details about
                      Petra have been known in the 7th century?
                    </h3>
                    <p>
                      In the 7th century, Petra was not a prominent,
                      widely-known city. It had been largely abandoned for
                      centuries and was essentially "lost" to the world beyond
                      the local Bedouin tribes. The detailed knowledge that a
                      people in a specific rocky region carved their *homes*
                      (not just grand temples) into the mountains, that they
                      were warned by divine messengers, and crucially, that they
                      knew and used the name "Allah" (as confirmed by
                      inscriptions found much later) was not readily available
                      public information. These are specific points that align
                      the Quranic narrative with archaeological findings made
                      over a thousand years later, after Petra's "rediscovery"
                      in the 1800s.
                    </p>
                  </div>

                  <p>
                    The Quran speaks of a specific group who fit the description
                    of the Nabataeans of Petra in their location, dwelling
                    style, and potential exposure to monotheistic warnings (via
                    the knowledge of "Allah"). The fact that these specific
                    details, which modern archaeology confirms, were mentioned
                    in the 7th century raises profound questions about the
                    source of this knowledge, particularly given the lack of
                    widespread information about Petra at that time.
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
            <Sparkles
              className="text-purple-600 dark:text-purple-400"
              size={18}
            />{" "}
            {/* Icon and color updated */}
            <h3 className="text-lg font-medium">
              Exploring History and Revelation
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The ancient city of Petra holds secrets that resonate with accounts
            found in the Quran, inviting us to reflect on history and faith.
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

export default PetraComponent;
