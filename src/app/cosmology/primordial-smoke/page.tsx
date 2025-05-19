/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Cloud, // For smoke/early universe
  Atom, // For science
  BookOpen, // For Quran
  Sparkles, // For reflection/miracle
  ChevronRight,
  Quote,
  Layers, // Main icon for Primordial Smoke topic
  ArrowUp,
  EyeOff, // Icon for opaqueness
} from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming path is correct
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming path is correct
import { Badge } from "@/components/ui/badge"; // Assuming path is correct

interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Lucide icons are components
  color: string;
  iconColor: string;
}

const PrimordialSmokePage = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Universe's Smoky Dawn",
        icon: Cloud,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Scientific Perspective",
        icon: Atom,
        color: "bg-sky-100 dark:bg-sky-900",
        iconColor: "text-sky-500",
      },
      {
        id: "quran",
        title: "Quranic Account",
        icon: BookOpen,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
      },
      {
        id: "reflection",
        title: "A Point of Wonder",
        icon: Sparkles,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ];
  }, []);

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 dark:from-slate-800 dark:via-gray-900 dark:to-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-sky-300" size={32} />
            <h1 className="text-4xl font-bold">Primordial Smoke</h1>
          </div>
          <p className="text-xl max-w-2xl text-slate-300">
            Cosmology - A Quranic Insight into the Early Universe
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-slate-800 hover:bg-slate-100 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-slate-400 text-slate-200 hover:bg-slate-700 hover:text-white dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
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
              <Card className="bg-white dark:bg-slate-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-700 dark:text-slate-200">
                    Journey Through Creation
                  </CardTitle>
                  <CardDescription className="text-slate-500 dark:text-slate-400">
                    Explore the early universe.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-slate-700/60 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-slate-700 font-medium text-indigo-600 dark:text-indigo-400"
                            : "text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {activeSection === id && (
                          <ChevronRight
                            className="ml-auto text-indigo-600 dark:text-indigo-400"
                            size={16}
                          />
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
              <Card className="border-l-4 border-indigo-500 shadow-xl bg-white dark:bg-slate-800/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/60">
                      <Cloud
                        className="text-indigo-500 dark:text-indigo-400"
                        size={24}
                      />
                    </div>
                    <CardTitle className="text-slate-800 dark:text-slate-100">
                      The Universe's Smoky Dawn
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4 text-slate-700 dark:text-slate-300">
                  <p className="font-medium">
                    Imagine a time, over 1400 years ago, when our understanding
                    of the cosmos was vastly different. Yet, the Quran described
                    the early state of the universe as "smoke" (Dukhan). This
                    description is remarkably profound, especially considering
                    the scientific knowledge available in the 7th century.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                    <h3 className="font-bold text-lg mb-3 text-indigo-700 dark:text-indigo-300">
                      A Gaseous Beginning
                    </h3>
                    <p>
                      While some ancient texts speak of light appearing at the
                      very dawn of creation, modern science reveals a different
                      picture. The early universe, shortly after the Big Bang,
                      was not transparent. It was a hot, dense, opaque soup of
                      particles, much like smoke, which would have scattered or
                      absorbed light, preventing it from traveling freely.
                    </p>
                  </div>
                  <p>
                    This concept of an initial "smoky" or opaque phase of the
                    universe was far beyond the observational capabilities of
                    ancient times. Let's explore what science says and how it
                    resonates with the Quranic narrative.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Perspective */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-sky-500 shadow-xl bg-white dark:bg-slate-800/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/60">
                      <Atom
                        className="text-sky-500 dark:text-sky-400"
                        size={24}
                      />
                    </div>
                    <CardTitle className="text-slate-800 dark:text-slate-100">
                      Scientific Perspective: The Opaque Early Universe
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4 text-slate-700 dark:text-slate-300">
                  <p>
                    Modern cosmology paints a fascinating picture of the
                    universe's infancy. Immediately after the Big Bang, the
                    universe was incredibly hot and dense.
                  </p>
                  <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-lg border border-sky-100 dark:border-sky-800/50">
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sky-700 dark:text-sky-300">
                      <Quote
                        size={16}
                        className="text-sky-500 dark:text-sky-400"
                      />{" "}
                      Scientific Understanding
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The first 380,000 years the universe was opaque to
                      visible light (non-transparent) and photons couldn't
                      travel at all. Few minutes after the Big Bang the universe
                      was primarily Hydrogen and Helium. But when a gas is too
                      hot it becomes ionized (loses the electrons) and becomes
                      opaque (like today's smoke). In the beginning the universe
                      was opaque to visible light. It took 380,000 years for the
                      universe to cool enough, and only then it became
                      transparent to visible light. For other wavelengths it was
                      opaque for a billion years."
                    </p>
                    <p className="mt-2 italic text-gray-700 dark:text-gray-300">
                      As 'Science' journal noted in 2010 regarding how the early
                      universe cleared: "About 300,000 years after the big bang,
                      the universe was like a smoke-filled chamber from which
                      light could not escape... the smoke - actually a gas of
                      light-trapping hydrogen - had cleared almost entirely,
                      allowing stars and galaxies to become visible."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-sky-600 dark:text-sky-400">
                        Based on astrophysical research on the Cosmic Microwave
                        Background and early universe conditions.
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-slate-700/40 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <EyeOff
                          size={16}
                          className="text-sky-500 dark:text-sky-400"
                        />{" "}
                        Opaque State
                      </h3>
                      <p>
                        For roughly 380,000 years, the universe was too hot for
                        neutral atoms to form. Free electrons scattered photons
                        (light particles), making the universe opaque, much like
                        how smoke scatters light.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-700/40 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <Sparkles
                          size={16}
                          className="text-amber-500 dark:text-amber-400"
                        />{" "}
                        Era of Recombination
                      </h3>
                      <p>
                        Only when the universe cooled sufficiently did protons
                        and electrons combine to form neutral hydrogen atoms.
                        This "recombination" allowed light to travel freely,
                        making the universe transparent.
                      </p>
                    </div>
                  </div>

                  <p>
                    So, the idea of "Let there be light" as an instantaneous
                    event at the very beginning doesn't align with the
                    scientific evidence of an initial opaque phase. The universe
                    indeed had a period where it could be described as being
                    filled with a "smoky" or fog-like substance.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Account */}
            <section id="quran" className="scroll-mt-20">
              <Card className="border-l-4 border-emerald-500 shadow-xl bg-white dark:bg-slate-800/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/60">
                      <BookOpen
                        className="text-emerald-500 dark:text-emerald-400"
                        size={24}
                      />
                    </div>
                    <CardTitle className="text-slate-800 dark:text-slate-100">
                      Quranic Account: The Heaven as 'Dukhan' (Smoke)
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4 text-slate-700 dark:text-slate-300">
                  <p>
                    It's truly fascinating to see how the Quran, revealed in the
                    7th century, describes this early cosmic state. Let's look
                    at the specific verse:
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800/50">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/41/11" // Example link, adjust if needed
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 41:11 (Surah Fussilat)
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6 rtl:md:space-x-reverse">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                          "Then He directed Himself to the heaven while it was
                          smoke and said to it and to the earth, 'Come [into
                          being], willingly or by compulsion.' They said, 'We
                          have come willingly.'"
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-xl md:text-2xl leading-loose">
                        <p dir="rtl">
                          ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ
                          فَقَالَ لَهَا وَلِلْأَرْضِ ائْتِيَا طَوْعًا أَوْ
                          كَرْهًا قَالَتَا أَتَيْنَا طَائِعِينَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-700/30 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-600">
                      Key Term: دُخَانٌ (Dukhan)
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "دُخَانٌ" (Dukhan) used in this verse
                      translates to "smoke." This description of the early
                      heaven (or sky, universe) as smoke aligns remarkably with
                      the scientific understanding of its hot, gaseous, and
                      opaque nature. At a time when such cosmic understanding
                      was non-existent, the Quran's choice of this specific word
                      is deeply significant.
                    </p>
                  </div>
                  <p>
                    This isn't a vague or ambiguous term, but a direct
                    description that resonates with the findings of modern
                    cosmology. It's a testament to the precision of the Quranic
                    language.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500 shadow-xl bg-white dark:bg-slate-800/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/60">
                      <Sparkles
                        className="text-amber-500 dark:text-amber-400"
                        size={24}
                      />
                    </div>
                    <CardTitle className="text-slate-800 dark:text-slate-100">
                      A Point of Wonder: Divine Knowledge?
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4 text-slate-700 dark:text-slate-300">
                  <p>
                    The alignment between the Quran's 1400-year-old description
                    and modern scientific discoveries about the early universe
                    naturally leads to a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800/50">
                    <h3 className="font-bold text-xl mb-3 text-center text-amber-700 dark:text-amber-300">
                      How could Prophet Muhammad (peace be upon him), living in
                      7th century Arabia, have known that the early universe was
                      like 'smoke'?
                    </h3>
                    <p>
                      This knowledge wasn't the result of scientific observation
                      or philosophical speculation of that era. The tools and
                      understanding required to deduce the opaque, smoky state
                      of the primordial universe only became available in the
                      modern age of astrophysics.
                    </p>
                  </div>

                  <p>
                    For believers, such instances are seen as signs of the
                    divine origin of the Quran, containing knowledge that
                    transcends human capabilities of the time. It invites us to
                    ponder the source of this remarkable insight into the
                    cosmos, revealed to an unlettered Prophet in a time when
                    humanity had a very different view of the heavens.
                  </p>
                  <p>
                    This is one of many examples where the Quran touches upon
                    aspects of the natural world with an accuracy that continues
                    to inspire awe and reflection as scientific knowledge
                    progresses. SubhanAllah (Glory be to Allah)!
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Layers
              className="text-indigo-500 dark:text-indigo-400"
              size={18}
            />
            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-200">
              Reflecting on Cosmic Origins
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The Quran's timeless verses offer insights that resonate deeply with
            our understanding of the universe, encouraging contemplation and
            faith.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-400 text-slate-700 hover:bg-slate-200 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
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

export default PrimordialSmokePage;
