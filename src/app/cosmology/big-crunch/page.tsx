/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Orbit, // Using Orbit for the main theme icon (Universe, Cycle)
  ChevronRight,
  BookOpen,
  Quote,
  Layers, // For Intro - representing collapse/layers of universe
  Telescope, // For Science
  Brain, // For Reflection
  ArrowUp,
  Sparkles,
  AlertTriangle, // For possible alternative scenarios
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the type for each content section
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType; // Lucide icons are components
  color: string;
  iconColor: string;
}

const BigCrunchUniverse = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(
    () => [
      {
        id: "intro",
        title: "The Universe's Grand Finale: Big Crunch",
        icon: Layers, // Icon representing collapse or layers
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Perspectives",
        icon: Telescope, // Icon representing scientific observation
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Foresight",
        icon: BookOpen, // Icon representing sacred text
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Cosmic Contemplation",
        icon: Brain, // Icon representing thought and reflection
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ],
    []
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-800 dark:from-indigo-700 dark:to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Orbit className="text-purple-200" size={32} />
            <h1 className="text-4xl font-bold">The Big Crunch</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Cosmology - Exploring the Universe's Ultimate Fate
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-indigo-700 hover:bg-indigo-50"
              onClick={() => scrollToSection("science")}
            >
              Explore Science <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-purple-300 hover:bg-white/10"
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
                  <CardDescription>Journey to the end of time</CardDescription>
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
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Layers className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>
                      The Universe's Grand Finale: Big Crunch
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    How will our vast universe end? Among scientists, there are
                    a few main theories: the Big Rip, the Big Chill, or the Big
                    Crunch. Recent discoveries are pointing towards a
                    fascinating, fiery end – the Big Crunch, a scenario where
                    gravity eventually reverses cosmic expansion.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      Gravity's Ultimate Victory
                    </h3>
                    <p>
                      The Big Crunch theory suggests that the universe's
                      expansion will not continue forever. Instead, the force of
                      gravity, ever-present and patient, will eventually
                      overcome the expansion, pulling all matter and energy back
                      together into an incredibly hot, dense state, reminiscent
                      of the universe's very beginning.
                    </p>
                  </div>
                  <p>
                    This idea, that the cosmos might collapse back in on itself,
                    has profound implications. It paints a picture of a cyclic
                    universe, or a definitive, singular end.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Telescope className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Perspectives</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Cosmologists have long debated the ultimate fate of the
                    universe. While concepts like the "Big Rip" (spacetime
                    tearing apart) or the "Big Chill" (a cold, empty void) were
                    considered, recent data offers a new perspective.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> DESI Project
                      Insights
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Scientists studied the data from DESI (Dark Energy
                      Spectroscopic Instrument)...and found that the
                      acceleration of the universe is actually decreasing (not
                      constant as previously thought). This means in the end
                      gravity will dominate everywhere and will cause the
                      universe to collapse into a Big Crunch."
                    </p>
                    <p className="italic text-gray-700 dark:text-gray-300 mt-2">
                      "If what the first year of DESI results suggests is true,
                      then the accelerated expansion of the universe will cease
                      and eventually reverse, and the universe could begin
                      drawing together under the influence of gravity... This
                      could eventually lead to the universe ending in a 'Big
                      Crunch' scenario."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        Paraphrased from: Space, "Dark energy could be getting
                        weaker, suggesting the universe will end in a 'Big
                        Crunch'", 2024
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-orange-500" />{" "}
                        Weakening Dark Energy
                      </h3>
                      <p>
                        The mysterious "Dark Energy," responsible for the
                        universe's accelerated expansion, appears to be
                        weakening. If this trend continues, gravity will become
                        the dominant force on a cosmic scale.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Orbit size={16} className="text-blue-500" /> Return to
                        Singularity
                      </h3>
                      <p>
                        A Big Crunch scenario implies the universe will
                        contract, eventually collapsing back into a super-dense,
                        super-hot state, similar to the conditions just after
                        the Big Bang.
                      </p>
                    </div>
                  </div>

                  <p>
                    These findings are still being analyzed, but they open up
                    the fascinating possibility that our universe is not
                    destined to expand forever but might instead be on a path
                    towards a grand cosmic collapse.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic Foresight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg">
                    SubhanAllah! It is truly remarkable to find passages in the
                    Quran, revealed in the 7th century, that seem to resonate
                    with such complex cosmological ideas. Let's explore a couple
                    of verses:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/7/187"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 7:187 - The Weight of the Hour
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "They ask you about the Hour, 'When will it come?'
                          Say, 'Knowledge of it rests with my Lord. None can
                          reveal its coming except He. It **weighs heavily
                          (ثَقُلَتْ - thaqulat)** on the heavens and the earth.
                          It will not come upon you except suddenly.' They ask
                          you as if you are responsible for it. Say, 'Knowledge
                          of it rests with Allah,' but most people do not know."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-xl">
                        <p dir="rtl">
                          يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا ۖ
                          قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّي ۖ لَا يُجَلِّيهَا
                          لِوَقْتِهَا إِلَّا هُوَ ۚ ثَقُلَتْ فِي السَّمَاوَاتِ
                          وَالْأَرْضِ ۚ لَا تَأْتِيكُمْ إِلَّا بَغْتَةً ۗ
                          يَسْأَلُونَكَ كَأَنَّكَ حَفِيٌّ عَنْهَا ۖ قُلْ
                          إِنَّمَا عِلْمُهَا عِندَ اللَّهِ وَلَٰكِنَّ أَكْثَرَ
                          النَّاسِ لَا يَعْلَمُونَ
                        </p>
                      </div>
                    </div>
                    <p className="mt-3">
                      The Arabic word "thaqulat" (ثَقُلَتْ) implies immense
                      weight or gravity. In the context of the universe, this
                      could be understood as the overwhelming force of gravity
                      acting upon the heavens and the earth, a key component of
                      the Big Crunch.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-6">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/21/104"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 21:104 - Folding the Heavens
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "On the day when We will **fold the heaven (نَطْوِي
                          السَّمَاءَ - natwi as-samaa)**, like the folder
                          compacts the books, and as We originated the first
                          creation We shall return it; a promise (binding on
                          Us); surely We will deliver."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-xl">
                        <p dir="rtl">
                          يَوْمَ نَطْوِي السَّمَاءَ كَطَيِّ السِّجِلِّ
                          لِلْكُتُبِ ۚ كَمَا بَدَأْنَا أَوَّلَ خَلْقٍ نُعِيدُهُ
                          ۚ وَعْدًا عَلَيْنَا ۚ إِنَّا كُنَّا فَاعِلِينَ
                        </p>
                      </div>
                    </div>
                    <p className="mt-3">
                      The imagery of "folding the heaven like a folder compacts
                      books" is a powerful metaphor for cosmic contraction – the
                      very essence of a Big Crunch. This folding implies
                      spacetime itself is being drawn together.
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 mb-2">
                      Connecting the Verses
                    </Badge>
                    <p>
                      Isn't it fascinating? One verse points to the immense
                      "weight" or gravitational pull (7:187), and another
                      describes the "folding" or contracting of spacetime
                      (21:104). Modern physics, particularly Einstein's General
                      Relativity, describes gravity not as a simple force, but
                      as the curvature of spacetime. So, the Quran seems to
                      allude to both the cause (gravity/weight) and the effect
                      (spacetime contraction/folding) of an event like the Big
                      Crunch. Allahu Akbar (God is Greatest)!
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
                      <Brain className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>A Cosmic Contemplation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The descriptions in the Quran, revealed over 1400 years ago,
                    present us with a point of deep reflection.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could Prophet Muhammad (peace be upon him), an
                      unlettered man in 7th century Arabia, describe concepts
                      that align so closely with modern cosmological theories
                      about the universe's end, like the Big Crunch and the
                      nature of gravity as spacetime curvature?
                    </h3>
                    <p>
                      At that time, humanity lacked the scientific instruments
                      and theoretical frameworks to even conceive of such cosmic
                      events. The prevailing understanding of the cosmos was
                      vastly different. The idea that the universe's expansion
                      might halt and reverse, or that gravity is intertwined
                      with the fabric of spacetime, are insights gained through
                      centuries of scientific advancement.
                    </p>
                  </div>

                  <p>
                    For believers, such knowledge found in the Quran is seen as
                    a sign of its divine origin. It's a testament to a source of
                    knowledge beyond human capabilities of that era. It invites
                    us to ponder the mysteries of existence, the universe, and
                    the message brought by the prophets.
                  </p>
                  <p className="text-center font-medium text-lg mt-6 text-amber-700 dark:text-amber-300">
                    Indeed, in the creation of the heavens and the earth, and
                    the alternation of night and day, are signs for people of
                    understanding. (Quran 3:190)
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
              Reflecting on Cosmic Beginnings and Endings
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The universe holds profound mysteries, and exploring them can deepen
            our appreciation for both scientific discovery and ancient wisdom.
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

export default BigCrunchUniverse;
