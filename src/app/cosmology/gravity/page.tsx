/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Orbit, // Using Orbit icon for Gravity/Spacetime
  ChevronRight,
  Atom, // Using Atom icon for Science
  BookOpen, // Standard for Quran
  HelpCircle, // Standard for Reflection
  ArrowUp,
  Sparkles, // Used for the "Miracle" connection
  Link, // Used for connecting ideas
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define types for the content items
interface ContentItem {
  id: string;
  title: string;
  icon: React.ElementType; // Use React.ElementType for component types
  color: string;
  iconColor: string;
}

const GravityComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // Typing the sectionRefs ref
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentItem[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Gravity & Folding",
        icon: Orbit,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Scientific Context",
        icon: Atom,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic References",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "connection",
        title: "Connecting Quran & Science",
        icon: Link, // Icon for connection
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
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
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-900 dark:from-indigo-900 dark:to-purple-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Orbit className="text-purple-300" size={32} />
            <h1 className="text-4xl font-bold">Gravity</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-200">
            Exploring Spacetime Curvature
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Connections <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-indigo-700"
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
                    Understand gravity, spacetime, and Quranic insights
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
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Orbit className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Gravity and the Fabric of Spacetime</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, there are verses that can be understood in
                    relation to gravity, and intriguingly, some seem to connect
                    it to the concept of "folding" the heavens. For a long time,
                    this might have puzzled those who saw gravity purely as a
                    force between objects. However, modern science, particularly
                    Einstein's General Relativity, offers a perspective where
                    gravity is intimately linked to the curvature or "folding"
                    of spacetime itself.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Gravity: More Than Just a Force
                    </h3>
                    <p>
                      Newton described gravity as a force pulling objects
                      together. Einstein's groundbreaking theory, General
                      Relativity, reframed this, showing that gravity isn't a
                      force in the traditional sense, but rather a consequence
                      of mass and energy warping the very fabric of spacetime
                      around them. Objects then simply follow the curves in this
                      warped spacetime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Context */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Atom className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>
                      Scientific Understanding: The Fate of the Universe
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Cosmologists ponder the ultimate fate of our universe. Based
                    on current understanding and observations, there are a few
                    main possibilities for how the universe might end.
                    Originally, these included the Big Rip (where everything is
                    torn apart), the Big Chill (where everything spreads out and
                    cools), and the Big Crunch (where the expansion reverses,
                    and everything collapses back in).
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      Scientific Perspectives on the End
                    </h3>
                    <p>
                      Recent data has suggested that the Big Rip scenario is
                      unlikely. This leaves the Big Chill (continued expansion)
                      and the Big Crunch (re-collapse due to gravity) as primary
                      contenders.
                    </p>
                    <p className="italic mt-3 text-gray-700 dark:text-gray-300">
                      Stephen Hawking, in one of his final theories, also
                      explored the possibility of the Universe eventually
                      stopping its expansion and collapsing back in on itself.
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.universetoday.com/138831/heres-stephen-hawkings-final-theory-about-the-big-bang/"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Universe Today, Here's Stephen Hawking's final theory
                        about the Big Bang, 2018
                      </a>
                    </div>
                  </div>

                  <p>
                    The idea of a Big Crunch relies on the total amount of
                    matter and energy in the universe being enough for gravity
                    to eventually overcome the expansion. It's a scenario where
                    gravity ultimately wins, pulling everything back together.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic References */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic References to the Great Hour</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran speaks about "The Hour," often understood as the
                    Day of Judgment or the end of the current universal order.
                    Two particular verses offer intriguing descriptions related
                    to this event:
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/7/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/187"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 7:187
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "They ask you about the Hour, 'When will it come?'
                          Say, 'Knowledge of it rests with my Lord. None can
                          reveal its coming except He. It weighs heavily on the
                          heavens and the earth. It will not come upon you
                          except suddenly.' They ask you as if you are
                          responsible for it. Say, 'Knowledge of it rests with
                          Allah,' but most people do not know."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٨٧ يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا
                          ۖ قُلْ إِنَّمَا عِلْمُهَا عِنْدَ رَبِّي ۖ لَا
                          يُجَلِّيهَا لِوَقْتِهَا إِلَّا هُوَ ۚ ثَقُلَتْ فِي
                          السَّمَاوَاتِ وَالْأَرْضِ ۚ لَا تَأْتِيكُمْ إِلَّا
                          بَغْتَةً ۗ يَسْأَلُونَكَ كَأَنَّكَ حَفِيٌّ عَنْهَا ۖ
                          قُلْ إِنَّمَا عِلْمُهَا عِنْدَ اللَّهِ وَلَٰكِنَّ
                          أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ
                        </p>
                      </div>
                    </div>
                    <p className="mt-3">
                      The phrase "ثَقُلَتْ (thaqulat)" used here means "it
                      weighs heavily." This verse describes The Hour as
                      something that will weigh heavily upon the heavens and the
                      earth. In the context of the universe, "weighing heavily"
                      implies a significant gravitational effect.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/21/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/104"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 21:104
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "On the day when We will fold the heaven, like the
                          folder compacts the books, and as We originated the
                          first creation We shall return it; a promise (binding
                          on Us); surely We will deliver."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٠٤ يَوْمَ نَطْوِي السَّمَاءَ كَطَيِّ السِّجِلِّ
                          لِلْكُتُبِ ۚ كَمَا بَدَأْنَا أَوَّلَ خَلْقٍ نُعِيدُهُ
                          ۚ وَعْدًا عَلَيْنَا ۚ إِنَّا كُنَّا فَاعِلِينَ
                        </p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Here, the description of "folding the heaven, like the
                      folder compacts the books" is given for the end of the
                      current creation and its return to its original state.
                      This imagery strongly suggests a collapsing or compacting
                      process.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Connecting Quran & Science */}
            <section id="connection" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Link className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>
                      Drawing the Connection: Gravity and Folding
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    When we look at these two verses together in light of modern
                    scientific understanding, a remarkable potential connection
                    emerges.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Sparkles size={20} className="text-purple-500" /> A
                      Unified View?
                    </h3>
                    <p>
                      Verse 7:187 describes The Hour as "weighing heavily,"
                      which aligns with the idea of gravity playing a crucial
                      role, potentially in a cosmic collapse scenario like the
                      Big Crunch.
                    </p>
                    <p className="mt-3">
                      Verse 21:104 describes the end state as "folding the
                      heaven." In General Relativity, gravity is understood as
                      the curvature or warping (a form of "folding") of
                      spacetime. Concepts like wormholes are even visualized as
                      literal folds or tunnels through spacetime.
                    </p>
                  </div>

                  <p>
                    If both verses are describing the same ultimate event – the
                    end of the universe as we know it, potentially a Big Crunch
                    – then the Quranic description links an event caused by
                    "weighing heavily" (gravity) with an event described as
                    "folding the heaven." This parallel drawn in the Quranic
                    text between gravity and folding the cosmos is strikingly
                    resonant with the modern scientific understanding that
                    gravity *is* the curvature or folding of spacetime.
                  </p>
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
                    <CardTitle>A Point for Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Considering the scientific knowledge available in the 7th
                    century, the concept of gravity as a force was not clearly
                    defined, let alone the sophisticated understanding that
                    gravity is linked to the curvature or folding of the very
                    fabric of spacetime. The idea that the universe might end in
                    a gravitational collapse ("Big Crunch") was also far beyond
                    the scientific grasp of that era.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center flex items-center justify-center gap-3">
                      <Sparkles className="text-amber-500" size={24} /> How
                      could this knowledge be present?
                    </h3>
                    <p>
                      The depiction in the Quran, linking the "heavy weighing"
                      (gravity) of The Hour to the "folding" of the heavens,
                      seems to touch upon ideas that would only be formulated by
                      science many centuries later with Einstein's General
                      Relativity.
                    </p>
                    <p className="mt-3">
                      This alignment between ancient scripture and modern
                      cosmology invites deep thought about the source of this
                      knowledge. How could someone living in the 7th century,
                      without any means to measure or conceptualize spacetime
                      curvature or cosmic gravitational collapse scenarios,
                      describe the end of the universe using language that
                      resonates so closely with modern scientific understanding?
                      It's truly a point for contemplation.
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
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Cosmic Phenomena</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The mysteries of the universe and their potential reflection in
            ancient texts continue to inspire awe and reflection.
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

export default GravityComponent;
