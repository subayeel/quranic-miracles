/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  ChevronRight,
  FlaskRound,
  BookOpen,
  Quote,
  HelpCircle,
  Stethoscope,
  ArrowUp,
  Sparkles,
  Brain,
  Eye,
  Footprints,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Hypoxia = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Lack of Oxygen",
        icon: Stethoscope,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: FlaskRound,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "symptoms",
        title: "Symptoms of Hypoxia",
        icon: Brain,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
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
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Stethoscope className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Hypoxia</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">Biology - Extreme</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700 border-white hover:bg-blue-600"
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
                    Understanding oxygen deprivation
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
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Stethoscope className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Lack of Oxygen</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Hypoxia is a serious condition that occurs when body tissues
                    don't receive enough oxygen to function properly. It can
                    affect the entire body or specific regions and organs.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      Understanding Hypoxia
                    </h3>
                    <p>
                      1400 years ago nobody knew about hypoxia or its effects on
                      the body, however it was accurately portrayed in the
                      Quran. Today, we understand that at high altitudes, the
                      oxygen concentration in the atmosphere decreases, causing
                      blood vessels in the lungs to constrict as the body
                      experiences oxygen deprivation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className={`border-l-4 border-purple-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <FlaskRound className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-purple-500" /> Medical
                      Research
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Hypoxic pulmonary vasoconstriction (HPV), also known as
                      the Euler-Liljestrand mechanism, is a physiological
                      phenomenon in which small pulmonary arteries constrict in
                      the presence of alveolar hypoxia (low oxygen levels)."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Hypoxic_pulmonary_vasoconstriction"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Hypoxic Pulmonary Vasoconstriction, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Stethoscope size={16} className="text-blue-500" />{" "}
                        Pulmonary Effects
                      </h3>
                      <p>
                        Modern science has confirmed that when oxygen levels
                        drop, blood vessels in the lungs constrict. This is the
                        body's attempt to optimize ventilation-perfusion
                        matching, directing blood to areas with better oxygen
                        supply.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-purple-500" />{" "}
                        Physiological Response
                      </h3>
                      <p>
                        This constriction creates a feeling of chest tightness
                        and difficulty breathing, especially noticeable at high
                        altitudes where oxygen concentration is naturally lower.
                      </p>
                    </div>
                  </div>

                  <p className="font-medium">
                    The blood vessels in the lungs constrict when oxygen levels
                    drop, making breathing difficult. This physiological
                    response was only scientifically understood in recent times,
                    yet appears to be referenced in ancient texts.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Symptoms of Hypoxia */}
            <section id="symptoms" className="scroll-mt-20">
              <Card className={`border-l-4 border-red-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Brain className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Symptoms of Hypoxia</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Hypoxia manifests through several distinct symptoms as the
                    body struggles with insufficient oxygen:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-100 dark:border-red-800">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                          <Star className="text-red-500" size={16} />
                        </div>
                        <h3 className="font-medium">Cyanosis</h3>
                      </div>
                      <p>
                        The bluish or purplish discoloration of skin when
                        tissues near the surface have low oxygen saturation. The
                        term comes from "cyanos" (κυανός), the Greek word for
                        blue.
                      </p>
                      <div className="mt-3 text-sm">
                        <a
                          href="https://en.wikipedia.org/wiki/Cyanosis"
                          className="text-red-600 dark:text-red-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Wikipedia, Cyanosis, 2019
                        </a>
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-100 dark:border-red-800">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                          <Footprints className="text-red-500" size={16} />
                        </div>
                        <h3 className="font-medium">Motor Dysfunction</h3>
                      </div>
                      <p>
                        Problems with motor functions and movement coordination
                        are common with brain hypoxia, affecting a person's
                        ability to walk normally or coordinate limb movements.
                      </p>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-100 dark:border-red-800">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                          <Eye className="text-red-500" size={16} />
                        </div>
                        <h3 className="font-medium">Visual Impairment</h3>
                      </div>
                      <p>
                        Cortical blindness, the loss of vision due to oxygen
                        deprivation in the brain's occipital cortex, can occur
                        temporarily during severe hypoxic episodes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800 mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-red-500" /> Brain Hypoxia
                      Research
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Brain hypoxia is a form of hypoxia or oxygen deficiency
                      affecting the brain. It occurs when the brain does not
                      receive enough oxygen even though blood is still flowing.
                      When oxygen supply is totally cut off, it is called brain
                      anoxia. Brain hypoxia is a medical emergency because the
                      brain needs a constant supply of oxygen and nutrients to
                      function properly. There are several causes of brain
                      hypoxia. They include drowning, suffocating, cardiac
                      arrest, and stroke. Mild symptoms include memory loss and
                      problems with motor function, such as movement. Severe
                      cases can result in seizures and brain death."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://www.medicalnewstoday.com/articles/322803.php"
                        className="text-red-600 dark:text-red-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Medical News Today, What to know about brain hypoxia,
                        2018
                      </a>
                    </div>
                  </div>

                  <p className="font-medium mt-4">
                    These symptoms—skin discoloration, motor problems,
                    dizziness, and visual impairment—are all now recognized as
                    classic signs of oxygen deprivation, but this understanding
                    is relatively recent in medical science.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Quranic References</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/6/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/125"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 6:125
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Those whom Allah wants to guide, He opens their
                          chests to Islam; And those whom He wants to leave
                          astray, He makes their chests tight and constricted,
                          as if they are ascending to the sky: Such is the
                          penalty of Allah on those who refuse to believe."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٢٥ فَمَنْ يُرِدِ اللَّهُ أَنْ يَهْدِيَهُ يَشْرَحْ
                          صَدْرَهُ لِلْإِسْلَامِ ۖ وَمَنْ يُرِدْ أَنْ يُضِلَّهُ
                          يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا
                          يَصَّعَّدُ فِي السَّمَاءِ ۚ كَذَٰلِكَ يَجْعَلُ اللَّهُ
                          الرِّجْسَ عَلَى الَّذِينَ لَا يُؤْمِنُونَ
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Key Point
                      </Badge>
                      <p className="mt-2">
                        "He makes their chests tight and constricted, as if they
                        are ascending to the sky" appears to describe the chest
                        tightness experienced during hypoxia at high altitudes.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/20/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/102"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 20:102
                        </a>
                      </h3>
                      <div className="flex flex-col space-y-4">
                        <p className="italic">
                          "On the Day when the Trumpet is blown, We will gather
                          the sinners on that Day, blue."
                        </p>
                        <p dir="rtl" className="text-right font-arabic">
                          ١٠٢ يَوْمَ يُنْفَخُ فِي الصُّورِ ۚ وَنَحْشُرُ
                          الْمُجْرِمِينَ يَوْمَئِذٍ زُرْقًا
                        </p>
                      </div>
                      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Connection
                        </Badge>
                        <p className="mt-2">
                          The blue discoloration described matches the cyanosis
                          symptom of hypoxia.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/75/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/29"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 75:29
                        </a>
                      </h3>
                      <div className="flex flex-col space-y-4">
                        <p className="italic">
                          "And the leg is entwined with other leg."
                        </p>
                        <p dir="rtl" className="text-right font-arabic">
                          ٢٩ وَالْتَفَّتِ السَّاقُ بِالسَّاقِ
                        </p>
                      </div>
                      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Connection
                        </Badge>
                        <p className="mt-2">
                          This appears to describe the motor function problems
                          associated with brain hypoxia.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/2"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 22:2
                        </a>
                      </h3>
                      <p className="italic">
                        "When you will see it [final Hour] every nursing mother
                        will discard her infant, and every pregnant woman will
                        miscarry, and you will see the people drunk, even though
                        they are not drunk. but the punishment of Allah is
                        severe."
                      </p>
                      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Connection
                        </Badge>
                        <p className="mt-2">
                          The description of people appearing drunk while not
                          actually intoxicated aligns with the dizziness and
                          disorientation of hypoxia.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                      <h3 className="font-medium mb-3">
                        <a
                          href="https://www.quranwow.com/#/ch/20/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/124"
                          className="text-green-600 dark:text-green-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quran 20:124
                        </a>
                      </h3>
                      <p className="italic">
                        "But whoever turns away from My Reminder, for him is a
                        confined life. And We will raise him on the Day of
                        Resurrection blind."
                      </p>
                      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Connection
                        </Badge>
                        <p className="mt-2">
                          The reference to blindness corresponds to cortical
                          blindness that can occur with severe oxygen
                          deprivation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">Additional References</h3>
                    <p>
                      Other Quranic verses (14:16-17 and 88:6) suggest the cause
                      of this oxygen deprivation is described as a form of
                      choking: "He will guzzle it, but will barely swallow" and
                      "They will have no food except thorns."
                    </p>
                    <p className="mt-3">
                      These descriptions collectively paint a picture of oxygen
                      deprivation and its symptoms: constricted airways, bluish
                      skin, motor dysfunction, dizziness, and visual impairment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className={`border-l-4 border-amber-500`}>
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
                    The apparent connections between ancient texts and modern
                    scientific understanding of hypoxia invite thoughtful
                    reflection:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could man who lived 1400 years ago have known about
                      hypoxia?
                    </h3>
                    <p>
                      The Quranic descriptions appear to align with several
                      aspects of hypoxia that were only scientifically
                      understood in recent times:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>The constriction of airways at high altitudes</li>
                      <li>The bluish discoloration of skin (cyanosis)</li>
                      <li>Problems with motor functions and coordination</li>
                      <li>Dizziness similar to intoxication</li>
                      <li>Temporary blindness due to oxygen deprivation</li>
                    </ul>
                  </div>

                  <p>
                    While these verses are presented in a religious and
                    metaphorical context, the alignment between the described
                    symptoms and modern medical understanding of hypoxia
                    presents an interesting perspective on the intersection of
                    ancient texts and scientific knowledge.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              <Stethoscope size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
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
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-blue-600" size={18} />
            <h3 className="text-lg font-medium">
              Scientific Miracles in the Quran
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the connection between modern scientific discoveries about
            hypoxia and ancient revelations in religious texts.
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

export default Hypoxia;
