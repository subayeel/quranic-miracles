/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet, // Icon for water/amniotic fluid
  ChevronRight,
  FlaskConical, // Icon for science
  BookOpen,
  Quote,
  HelpCircle,
  Baby, // Alternative icon for embryology/life
  ArrowUp,
  Sparkles,
  ShieldCheck, // Icon for protection
} from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming these paths are correct
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SectionContent {
  id: string;
  title: string;
  icon: React.ElementType; // Lucide icons are components
  color: string;
  iconColor: string;
}

const AmnioticFluidMiracle: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: SectionContent[] = useMemo(
    () => [
      {
        id: "intro",
        title: "The Protective Water",
        icon: ShieldCheck,
        color: "bg-sky-100 dark:bg-sky-900",
        iconColor: "text-sky-500",
      },
      {
        id: "science",
        title: "Scientific Understanding",
        icon: FlaskConical,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Description",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "reflection",
        title: "A Point to Ponder",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ],
    []
  );

  useEffect(() => {
    const options: IntersectionObserverInit = {
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

  const scrollToSection = (id: string): void => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-500 to-cyan-700 dark:from-sky-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="text-cyan-200" size={32} />
            <h1 className="text-4xl font-bold">Amniotic Fluid</h1>
          </div>
          <p className="text-xl max-w-2xl text-cyan-100">
            Embryology - A Quranic Insight into Early Human Development
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-sky-700 hover:bg-sky-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-cyan-700 border-cyan-200 hover:bg-white/10 hover:text-white" // Adjusted for better visibility
              onClick={() => scrollToSection("intro")}
            >
              Learn about its Protection
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
                  <CardTitle className="text-lg">
                    Journey of Discovery
                  </CardTitle>
                  <CardDescription>
                    Exploring the Miracle of Amniotic Fluid
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
              <Card className="border-l-4 border-sky-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900">
                      <ShieldCheck className="text-sky-500" size={24} />
                    </div>
                    <CardTitle>
                      The Protective Water: A Miracle in the Womb
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Within the mother's womb, the developing baby is cradled in
                    a special fluid known as amniotic fluid. This fluid is not
                    just any liquid; it's a divinely designed environment, often
                    simply referred to as "water." Remarkably, the Quran,
                    revealed in the 7th century, describes the origin of humans
                    from "water," a concept that aligns beautifully with our
                    modern understanding of this life-sustaining fluid.
                  </p>
                  <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-lg border border-sky-100 dark:border-sky-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Baby
                        size={20}
                        className="text-sky-600 dark:text-sky-400"
                      />{" "}
                      A Safe Haven for Growth
                    </h3>
                    <p>
                      Amniotic fluid acts as a protective cushion, shielding the
                      delicate fetus from external pressures. It also allows for
                      movement, crucial for proper limb and lung development,
                      and maintains a stable temperature. In an era long before
                      microscopes and detailed embryology, the understanding of
                      such a complex environment was beyond human discovery.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Explanation */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <FlaskConical className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>
                      Scientific Understanding of Amniotic Fluid
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Composition
                      and Function
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The amniotic fluid is the protective liquid contained by
                      the amniotic sac... This fluid serves as a cushion for the
                      growing fetus, but also serves to facilitate the exchange
                      of nutrients, water, and biochemical products between
                      mother and fetus. For humans, the amniotic fluid is
                      commonly called water or waters (Latin liquor amnii)... At
                      first, amniotic fluid is mainly water with electrolytes,
                      but by about the 12-14th week the liquid also contains
                      proteins, carbohydrates, lipids and phospholipids, and
                      urea, all of which aid in the growth of the fetus."
                    </p>
                    <div className="mt-3 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        Adapted from Wikipedia, Amniotic Fluid
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplet size={16} className="text-blue-500" />{" "}
                        Primarily Water
                      </h3>
                      <p>
                        As scientific understanding has advanced, it's confirmed
                        that amniotic fluid, especially in its early stages, is
                        indeed primarily composed of water along with
                        electrolytes. This simple yet profound fact resonates
                        with ancient descriptions.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-gray-500" />{" "}
                        Essential for Life
                      </h3>
                      <p>
                        Beyond cushioning, it's vital for nutrient exchange and
                        provides the medium for the fetus to develop. The common
                        term "waters" breaking before childbirth highlights its
                        aqueous nature.
                      </p>
                    </div>
                  </div>

                  <p>
                    Modern science reveals the complexity of amniotic fluid, yet
                    its fundamental nature as "water" is undeniable. This was
                    not common knowledge in the 7th century, a time when
                    detailed biological processes were largely a mystery.
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
                    <CardTitle>Quranic Description of Origin</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/86/6" // Example link, adjust if you have a preferred Quran site
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 86:6
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4 text-lg">
                          "He was created from a fluid, ejected (gushing
                          water)."
                          <br />
                          <span className="text-sm">
                            (Translation can vary, emphasizing "water" or
                            "fluid")
                          </span>
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-2xl">
                        <p dir="rtl">خُلِقَ مِن مَّآءٍ دَافِقٍ</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Term: "مَآءٍ" (Ma-in)
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "مَآءٍ" (Ma-in) used in this verse
                      directly translates to "water." In the context of human
                      creation, this points with beautiful simplicity to the
                      aqueous environment, like the amniotic fluid, essential
                      for the earliest stages of life. It's a testament to the
                      Quran's profound and precise language.
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
                      A Point to Ponder: Knowledge from the 7th Century
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The clear reference to "water" as the origin or medium for
                    human creation in the Quran, revealed over 1400 years ago,
                    is truly remarkable when considered against the backdrop of
                    scientific knowledge at that time.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could the Prophet Muhammad (peace be upon him), an
                      unlettered man in 7th century Arabia, have known that the
                      developing human is surrounded by and essentially begins
                      in "water"?
                    </h3>
                    <p>
                      Detailed embryology and the understanding of amniotic
                      fluid's composition are modern scientific discoveries. In
                      the 7th century, such intricate biological knowledge was
                      not available. The precise yet simple description in the
                      Quran aligns astonishingly with what science has taken
                      centuries to uncover. This invites deep reflection on the
                      source of this knowledge, pointing towards a wisdom that
                      transcends human capabilities of that era.
                    </p>
                  </div>

                  <p>
                    This alignment between the Quranic text and modern
                    scientific findings about amniotic fluid being primarily
                    water offers a compelling sign for those who reflect. It's
                    one of the many instances where the Quran touches upon
                    scientific truths long before they were formally
                    "discovered."
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
            <Sparkles className="text-sky-500" size={18} />
            <h3 className="text-lg font-medium">The Miracle of Creation</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The Quran invites us to reflect on the signs in ourselves and the
            universe, revealing profound truths that resonate across time.
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

export default AmnioticFluidMiracle;
