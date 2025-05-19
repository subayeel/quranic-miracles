/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Scale, // For historical balance/justice
  ChevronRight,
  BookOpen, // For Quranic reference
  FileText, // For papyrus/historical evidence
  Sparkles, // For the miracle/intriguing point
  ArrowUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the structure for content sections
interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Type for Lucide icons
  color: string; // Background color class for icon container
  iconColor: string; // Text color class for the icon
  borderColor: string; // Border color class for the Card
}

const CrucifixionComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  // Using a more specific type for sectionRefs
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define the content sections for the component
  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Crucifixion Mentioned",
        icon: Scale,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
        borderColor: "border-indigo-500",
      },
      {
        id: "history",
        title: "Historical Methods",
        icon: Scale,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
        borderColor: "border-purple-500",
      },
      {
        id: "quran",
        title: "Quranic Account",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
        borderColor: "border-green-500",
      },
      {
        id: "evidence",
        title: "Ancient Evidence",
        icon: FileText,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
        borderColor: "border-teal-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: Sparkles,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
        borderColor: "border-amber-500",
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

    const currentRefs = sectionRefs.current; // Capture current refs

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element; // Store element reference
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
  }, [contents]); // Dependency array includes contents

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Use element.scrollIntoView for smooth scrolling
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">Crucifixion</h1>
          </div>
          <p className="text-xl max-w-2xl text-indigo-100">
            Exploring a Quranic Account
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("history")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
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
                  <CardDescription>
                    Unpacking a historical point
                  </CardDescription>
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
              <Card className={`border-l-4 ${contents[0].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[0].color}`}>
                      <Scale className={contents[0].iconColor} size={24} />
                    </div>
                    <CardTitle>Crucifixion Mentioned</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The term "crucifixion" brings to mind the image of a person
                    affixed to a cross. In the Bible, Jesus is depicted as
                    meeting this fate. Interestingly, the Quran also uses a
                    related term when recounting the story of Prophet Joseph
                    (Yusuf), which occurred long before the common era and Roman
                    practices.
                  </p>
                  <p>
                    Some critics have pointed out that the Roman method of
                    crucifixion using a cross became systematic around the 4th
                    century BC, suggesting that mentioning "crucifixion" in
                    Joseph's time (much earlier) might be an historical
                    inaccuracy in the Quran.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Historical Methods */}
            <section id="history" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[1].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[1].color}`}>
                      <Scale className={contents[1].iconColor} size={24} />
                    </div>
                    <CardTitle>Historical Methods of Punishment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`${
                      contents[1].color
                    }/30 p-6 rounded-lg border ${contents[1].borderColor.replace(
                      "border-",
                      "border-"
                    )} border-opacity-50`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Scale size={16} className={contents[1].iconColor} />{" "}
                      Early Practices
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      According to historical sources, crucifixion probably
                      originated with the Assyrians and Babylonians, and was
                      systematically used by the Persians before the Romans
                      adopted it. Importantly, in its earliest forms, the victim
                      was often tied to a tree or post, or even impaled on an
                      upright post, with feet clear of the ground. The use of a
                      cross came later.
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1283975/"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source: National Library of Medicine, "The History and
                        Pathology of Crucifixion"
                      </a>
                    </div>
                  </div>

                  <p>
                    This historical context reveals that while the *method*
                    evolved, the practice of executing individuals by fixing
                    them to an upright structure was known and used by ancient
                    civilizations like the Assyrians and Babylonians, long
                    before the Romans and their standardization of the cross
                    shape. The crucial point here is that the early forms
                    involved stakes, posts, or impalement, rather than a
                    T-shaped cross.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Account */}
            <section id="quran" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[2].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[2].color}`}>
                      <BookOpen className={contents[2].iconColor} size={24} />
                    </div>
                    <CardTitle>The Account in the Quran</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`${
                      contents[2].color
                    }/30 p-6 rounded-lg border ${contents[2].borderColor.replace(
                      "border-",
                      "border-"
                    )} border-opacity-50`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/12/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/41"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 12:41
                      </a>{" "}
                      (Prophet Joseph's time)
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          “O my fellow inmates! As for one of you, he will pour
                          wine for his master, and as for the other, he will be
                          crucified, and the birds will eat from his head. The
                          matter about which you inquire has been decreed.”
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤١ يَا صَاحِبَيِ السِّجْنِ أَمَّا أَحَدُكُمَا
                          فَيَسْقِي رَبَّهُ خَمْرًا ۖ وَأَمَّا الْآخَرُ
                          فَيُصْلَبُ فَتَأْكُلُ الطَّيْرُ مِنْ رَأْسِهِ ۚ قُضِيَ
                          الْأَمْرُ الَّذِي فِيهِ تَسْتَفْتِيَانِ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      The Arabic word used here related to crucifixion is
                      يَصْلُبُ (yuslabu).
                    </p>
                  </div>

                  <div
                    className={`${
                      contents[2].color
                    }/30 p-6 rounded-lg border ${contents[2].borderColor.replace(
                      "border-",
                      "border-"
                    )} border-opacity-50 mt-6`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/89/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/10"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 89:10-12
                      </a>{" "}
                      (Mentioning Pharaoh)
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And [with] Pharaoh, owner of the stakes,"
                          <br />
                          "Who transgressed in the lands"
                          <br />
                          "And spread corruption therein."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٠ وَفِرْعَوْنَ ذِي الْأَوْتَادِ
                          <br />
                          ١١ الَّذِينَ طَغَوْا فِي الْبِلَادِ
                          <br />
                          ١٢ فَأَكْثَرُوا فِيهَا الْفَسَادَ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      Here, Pharaoh is described as ذِي الْأَوْتَادِ (dhi
                      al-awtad), meaning "owner of the stakes". This term
                      strongly suggests a method of punishment involving stakes
                      or posts.
                    </p>
                  </div>

                  <div
                    className={`${
                      contents[2].color
                    }/30 p-6 rounded-lg border ${contents[2].borderColor.replace(
                      "border-",
                      "border-"
                    )} border-opacity-50 mt-6`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/20/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/71"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 20:71
                      </a>{" "}
                      (Pharaoh threatening sorcerers)
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          He said, “You believed in him before I gave you
                          permission? Indeed, he is your chief who taught you
                          magic. So I will surely cut off your hands and your
                          feet from opposite sides, and I will surely crucify
                          you on the trunks of palm trees, and you will surely
                          know which of us is more severe in punishment and more
                          lasting.”
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧١ قَالَ آمَنْتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ ۖ
                          إِنَّهُ لَكَبِيرُكُمُ الَّذِي عَلَّمَكُمُ السِّحْرَ ۖ
                          فَلَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُمْ مِنْ
                          خِلَافٍ وَلَأُصَلِّبَنَّكُمْ فِي جُذُوعِ النَّخْلِ
                          وَلَتَعْلَمُنَّ أَيُّنَا أَشَدُّ عَذَابًا وَأَبْقَىٰ
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      Pharaoh threatens to crucify them عَلَى جُذُوعِ النَّخْلِ
                      (ala judhu'i al-nakhl) - "on the trunks of the
                      palm-trees". He also mentions cutting off hands and feet
                      from opposite sides. The context of using palm tree trunks
                      and the mention of cutting limbs further suggests a method
                      involving posts or stakes (like tree trunks) rather than a
                      cross shape, especially if the victims' hands were already
                      cut off. This aligns with the historical understanding of
                      early forms of crucifixion as impalement or tying to a
                      post.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Ancient Evidence */}
            <section id="evidence" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[3].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[3].color}`}>
                      <FileText className={contents[3].iconColor} size={24} />
                    </div>
                    <CardTitle>
                      Discovering Ancient Egyptian Practices
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern discoveries by Egyptologists have shed more light on
                    punishment methods in ancient Egypt, providing fascinating
                    context relevant to the time of Prophet Joseph.
                  </p>
                  <div
                    className={`${
                      contents[3].color
                    }/30 p-6 rounded-lg border ${contents[3].borderColor.replace(
                      "border-",
                      "border-"
                    )} border-opacity-50`}
                  >
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <FileText size={16} className={contents[3].iconColor} />{" "}
                      Papyrus Evidence
                    </h3>
                    <p>
                      Ancient Egyptian papyri have been found depicting
                      punishment methods that resemble impalement or tying to
                      stakes. For instance, Papyrus Boulaq 18, dating to the
                      13th Dynasty (before Joseph's time), contains a passage
                      describing someone being "put on the stake".
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">
                        Hieroglyph Depicting Impalement:
                      </h4>
                      {/* Replace with an actual image if available and appropriate */}
                      <div className="text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                        {/* In a real app, you'd use an <img> tag */}
                        <p>
                          [Image Placeholder: Hieroglyph showing a man impaled
                          on a stake]
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          Hieroglyph writing for "Stake. rdj hr = To put on the
                          stake (for punishment)".
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      The translation of the Papyrus Boulaq 18 passage:
                    </p>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-2">
                      "...the comrade was put on the stake..."
                    </p>
                    <p className="mt-2 text-sm">
                      This provides archaeological evidence for the use of
                      impalement or fixing to a stake as a punishment method in
                      Egypt, *before* the time of Prophet Joseph.
                    </p>
                  </div>
                  <p>
                    These findings by Egyptologists, relatively recent in the
                    scope of history, confirm that methods akin to impalement or
                    being fixed to a stake were indeed practiced in ancient
                    Egypt during or even before the historical period associated
                    with Prophet Joseph.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className={`border-l-4 ${contents[4].borderColor}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contents[4].color}`}>
                      <Sparkles className={contents[4].iconColor} size={24} />
                    </div>
                    <CardTitle>A Point to Ponder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the historical information and the Quranic
                    account, an intriguing point arises:
                  </p>

                  <div
                    className={`${
                      contents[4].color
                    }/30 p-6 rounded-lg border ${contents[4].borderColor.replace(
                      "border-",
                      "border-"
                    )} border-opacity-50`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could someone in the 7th century know about ancient
                      Egyptian impalement on stakes?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Think about the context of the 7th century CE. The precise
                      historical details about pre-Roman crucifixion methods,
                      specifically the use of stakes and impalement by
                      civilizations like the Assyrians, Babylonians, Persians,
                      and even ancient Egyptians, were not common knowledge. The
                      specific archaeological evidence from Egyptian papyri
                      confirming the practice of impalement on stakes *before*
                      the time of Prophet Joseph is a discovery of modern
                      Egyptology.
                    </p>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                      Yet, the Quran, revealed in the 7th century, uses language
                      (like "stakes" and "trunks of palm trees") that aligns
                      with the understanding of these older, non-cross-based
                      forms of crucifixion, and places such an event within the
                      narrative of Prophet Joseph, which aligns with the
                      archaeological findings regarding punishment methods in
                      ancient Egypt.
                    </p>
                  </div>

                  <p>
                    This precise detail – that crucifixion-like punishment in
                    Joseph's time involved stakes/posts and was practiced in
                    ancient Egypt – was not accessible knowledge 1400 years ago.
                    The correlation between modern historical and archaeological
                    findings and the Quranic text presents something quite
                    remarkable for reflection.
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">
              Reflecting on History and Scripture
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Connecting ancient accounts with modern historical discoveries.
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

export default CrucifixionComponent;
