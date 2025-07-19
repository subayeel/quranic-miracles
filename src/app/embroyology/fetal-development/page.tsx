/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Baby,
  ChevronRight,
  Microscope,
  BookOpen,
  Quote,
  HelpCircle,
  Split,
  ArrowUp,
  Sparkles,
  Clock,
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

// Define TypeScript types
type SectionType = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

type SectionRefs = {
  [key: string]: HTMLElement | null;
};

const FetalDevelopmentComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<SectionType[]>(() => {
    return [
      {
        id: "intro",
        title: "Fetal Development",
        icon: Baby,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Microscope,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
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
      threshold: 0.3,
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
      <div className="bg-gradient-to-r from-teal-500 to-blue-700 dark:from-teal-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Baby className="text-teal-200" size={32} />
            <h1 className="text-4xl font-bold">Fetal Development</h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            Embryology - Advanced
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-teal-50 border-teal-200 hover:bg-teal-800/30"
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
                    Explore the miracle of human development
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
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Baby className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Fetal Development - Facial Features</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    The Quran contains a fascinating description of human fetal
                    development that aligns remarkably with modern embryology.
                    One aspect that stands out is the reference to facial
                    features forming at a specific stage of development. Today,
                    we know that the human face develops between the second and
                    third months of pregnancy, but how could this knowledge
                    exist in the 7th century?
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Development of Facial Features
                    </h3>
                    <p>
                      Modern embryology has revealed that a human embryo goes
                      through distinct stages of development. In the initial
                      stages, the embryo appears as a simple structure without
                      distinguishable features. Between the second and third
                      months of gestation, remarkable changes occur as facial
                      features begin to form and become recognizable. This
                      process involves complex cellular migration and
                      differentiation that was completely unknown to science
                      until the advent of modern microscopy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Microscope className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Facial features develop between the second and third
                      months; before that the fetus is featureless. This was
                      known recently, however this was portrayed in the Quran
                      1400 years before it was discovered."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3658176/"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AJNR, Illustrated Review of the Embryology and
                        Development of the Facial Region, 2013
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Clock size={16} className="text-blue-500" /> Timeline
                        of Development
                      </h3>
                      <p>
                        Modern embryology confirms that between days 40-56
                        (second month) facial structures begin to form, with
                        major features becoming recognizable by the end of the
                        third month. Before this period, the embryo has no
                        distinguishable facial features.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Split size={16} className="text-blue-500" /> Bone
                        Formation
                      </h3>
                      <p>
                        The first bones to form in the facial region include the
                        mandible (jawbone), which begins to ossify around day
                        41. Notably, research shows that Meckel's cartilage
                        turns into bone approximately 3 days before its
                        associated muscles form.
                      </p>
                    </div>
                  </div>

                  <p>
                    The scientific understanding of facial development has been
                    established only in the past century, requiring advanced
                    microscopy and embryological research. The detailed sequence
                    of development—from cartilage to bone to muscle, followed by
                    recognizable facial features—is a relatively recent
                    discovery in medical science.
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
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/22/5"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 22:5
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "O people! If you are in doubt about the
                          Resurrection—We created you from dust, then from a
                          small drop, then from a clinging clot, then from a
                          lump of flesh, featureless and with features. In order
                          to clarify things for you. And We settle in the wombs
                          whatever We will for a designated term, and then We
                          bring you out as infants, until you reach your full
                          strength. And some of you will pass away, and some of
                          you will be returned to the vilest age, so that he may
                          not know, after having known. And you see the earth
                          still; but when We send down water on it, it vibrates,
                          and swells, and grows all kinds of lovely pairs."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          يَا أَيُّهَا النَّاسُ إِنْ كُنْتُمْ فِي رَيْبٍ مِنَ
                          الْبَعْثِ فَإِنَّا خَلَقْنَاكُمْ مِنْ تُرَابٍ ثُمَّ
                          مِنْ نُطْفَةٍ ثُمَّ مِنْ عَلَقَةٍ ثُمَّ مِنْ مُضْغَةٍ
                          مُخَلَّقَةٍ وَغَيْرِ مُخَلَّقَةٍ لِنُبَيِّنَ لَكُمْ ۚ
                          وَنُقِرُّ فِي الْأَرْحَامِ مَا نَشَاءُ إِلَىٰ أَجَلٍ
                          مُسَمًّى ثُمَّ نُخْرِجُكُمْ طِفْلًا ثُمَّ لِتَبْلُغُوا
                          أَشُدَّكُمْ ۖ وَمِنْكُمْ مَنْ يُتَوَفَّىٰ وَمِنْكُمْ
                          مَنْ يُرَدُّ إِلَىٰ أَرْذَلِ الْعُمُرِ لِكَيْلَا
                          يَعْلَمَ مِنْ بَعْدِ عِلْمٍ شَيْئًا ۚ وَتَرَى
                          الْأَرْضَ هَامِدَةً فَإِذَا أَنْزَلْنَا عَلَيْهَا
                          الْمَاءَ اهْتَزَّتْ وَرَبَتْ وَأَنْبَتَتْ مِنْ كُلِّ
                          زَوْجٍ بَهِيجٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Phrase
                    </Badge>
                    <p className="mt-3">
                      The phrase "a lump of flesh, featureless and with
                      features" (مُضْغَةٍ مُخَلَّقَةٍ وَغَيْرِ مُخَلَّقَةٍ) is
                      particularly significant. The Arabic term "Mukhallaka"
                      (مُخَلَّقَةٍ) means "has features," while "Ghair
                      Mukhallaka" (غَيْرِ مُخَلَّقَةٍ) means "featureless." This
                      precise distinction describes the embryo at different
                      stages of development—initially without features, and then
                      developing distinguishable features.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-4">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://quran.com/23/14"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 23:14
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Then We developed the semen into a leech. Then We
                          developed the leech into a lump. Then We developed the
                          lump into bones. Then We clothed the bones with flesh.
                          Then We produced it into another feature. Most Blessed
                          is Allah, the Best of Creators."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ثُمَّ خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا
                          الْعَلَقَةَ مُضْغَةً فَخَلَقْنَا الْمُضْغَةَ عِظَامًا
                          فَكَسَوْنَا الْعِظَامَ لَحْمًا ثُمَّ أَنْشَأْنَاهُ
                          خَلْقًا آخَرَ ۚ فَتَبَارَكَ اللَّهُ أَحْسَنُ
                          الْخَالِقِينَ
                        </p>
                      </div>
                    </div>
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
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern embryological knowledge and
                    the Quranic descriptions raises a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      fetal development?
                    </h3>
                    <p>
                      The specific references to the embryo being "featureless
                      and with features" and the sequence of development—from
                      bones to flesh to facial features—would have been
                      impossible to know in the 7th century. Detailed
                      understanding of embryonic development required advanced
                      microscopy and scientific techniques that were not
                      available until the 19th and 20th centuries.
                    </p>
                  </div>

                  <p>
                    What makes this correspondence even more remarkable is the
                    precise order of development described in the Quran: bones
                    forming first, followed by muscles, and then facial
                    features. Modern embryology confirms that the first bone to
                    form in the facial region is the mandible (jawbone) around
                    day 41, with muscles forming approximately 3 days later, and
                    recognizable facial features developing in the subsequent
                    weeks.
                  </p>

                  <p>
                    This accurate description of embryonic development in the
                    Quran, at a time when such knowledge was unavailable through
                    observation or contemporary science, presents a compelling
                    case for reflection on the source of this information. The
                    level of precision in the Quranic descriptions aligns
                    remarkably with findings that would only be confirmed by
                    science many centuries later.
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
            <Sparkles className="text-teal-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Life's Beginnings</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The miraculous journey of human development continues to inspire
            wonder, connecting ancient wisdom with modern scientific
            discoveries.
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

export default FetalDevelopmentComponent;
