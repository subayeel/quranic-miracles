/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplets,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Quote,
  HelpCircle,
  CloudRain,
  ArrowUp,
  Sparkles,
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

// Define types for our component
type SectionContent = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

type SectionRefs = {
  [key: string]: HTMLElement | null;
};

const WaterMeterology: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<SectionRefs>({});

  const contents = useMemo<SectionContent[]>(() => {
    return [
      {
        id: "intro",
        title: "Water from Space",
        icon: Droplets,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: ExternalLink,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "Quranic References",
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
      <div className="bg-gradient-to-r from-blue-500 to-cyan-700 dark:from-blue-700 dark:to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Water</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Meteorology - Intermediate
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-600"
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
                    Explore the cosmic origins of Earth's water
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
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Droplets className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Water from Space</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    In the Quran, water is described as coming from outer space.
                    Skeptics claim that whoever wrote the Quran made a mistake,
                    believing water forms underground. Today, scientists confirm
                    that water indeed came from outer space.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">
                      The Cosmic Origin of Earth's Water
                    </h3>
                    <p>
                      Modern scientific evidence suggests that Earth's water was
                      delivered by comets and asteroids from the outer reaches
                      of our solar system. When these celestial bodies enter our
                      atmosphere, the heat generated on entry vaporizes their
                      ice into the atmosphere, gradually accumulating to form
                      Earth's vast oceans.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <ExternalLink className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> Scientific
                      Confirmation
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Origin of water on Earth:
                      <br />
                      Comets, trans-Neptunian objects, or water-rich meteoroids
                      (protoplanets) from the outer reaches of the asteroid belt
                      colliding with Earth may have brought water to the world's
                      oceans. Asteroids may have been primarily responsible
                      based on several studies, including measurements of the
                      ratio of the hydrogen isotopes deuterium and protium,
                      since similar percentage impurities as in carbon-rich
                      chondrites were found in oceanic water, whereas previous
                      measurement of the isotopes' concentrations in comets and
                      trans-Neptunian objects correspond only slightly to water
                      on Earth. In January 2018, researchers reported that two
                      4.5 billion-year-old meteorites found on Earth contained
                      liquid water alongside a wide diversity of deuterium-poor
                      organic matter."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Origin_of_water_on_Earth#Internal_sources"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Origin of water on Earth, 2019
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <CloudRain size={16} className="text-teal-500" /> Comets
                        and Asteroids
                      </h3>
                      <p>
                        Research suggests that water was delivered to Earth by
                        comets and asteroids billions of years ago. These
                        celestial objects, containing ice, brought water to our
                        planet during the early formation of the solar system.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-gray-500" /> Earth's
                        Water Coverage
                      </h3>
                      <p>
                        Water covers approximately 71% of Earth's surface.
                        Remarkably, this is the same ratio that the words "Sea"
                        (32 times) and "Land" (13 times) appear in the Quran:
                        32/(32+13) = 71%.
                      </p>
                    </div>
                  </div>

                  <p>
                    While the Christian Bible suggests God created water
                    directly on Earth, the Quran presents a different narrative
                    - one that aligns with modern scientific understanding that
                    water originated from space and was made to dwell on Earth.
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
                    <CardTitle>Quranic References</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mb-6">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/23/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/18"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 23:18
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And We sent down water from the heaven in proper
                          quantity, and we made Earth its dwelling, and We are
                          Able to take it away."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٨ وَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً بِقَدَرٍ
                          فَأَسْكَنَّاهُ فِي الْأَرْضِ ۖ وَإِنَّا عَلَىٰ ذَهَابٍ
                          بِهِ لَقَادِرُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mb-6">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/164"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:164
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "In the creation of the heavens and the earth; in the
                          alternation of night and day; in the ships that sail
                          the oceans for the benefit of mankind; In the water
                          which Allah sent down from the Heavens and brought
                          with it life to Earth after being dead and gave life
                          in it to every kind of land animal; And in directing
                          the winds; And in the clouds that are enslaved between
                          the Heavens and the Earth; [All these] are Signs for a
                          people who comprehend."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٦٤ إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ
                          وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَالْفُلْكِ
                          الَّتِي تَجْرِي فِي الْبَحْرِ بِمَا يَنْفَعُ النَّاسَ
                          وَمَا أَنْزَلَ اللَّهُ مِنَ السَّمَاءِ مِنْ مَاءٍ
                          فَأَحْيَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ
                          فِيهَا مِنْ كُلِّ دَابَّةٍ وَتَصْرِيفِ الرِّيَاحِ
                          وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ
                          وَالْأَرْضِ لَآيَاتٍ لِقَوْمٍ يَعْقِلُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/24/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/43"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 24:43
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Can't you see that Allah makes the clouds move
                          gently, then joins them together, then makes them into
                          a pile? Then you see rain come out from within? And He
                          sends down from heaven mountains with ice inside them;
                          that strike whomever He wishes or miss whoever He
                          wishes; Its flash almost blinds you."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٤٣ أَلَمْ تَرَ أَنَّ اللَّهَ يُزْجِي سَحَابًا ثُمَّ
                          يُؤَلِّفُ بَيْنَهُ ثُمَّ يَجْعَلُهُ رُكَامًا فَتَرَى
                          الْوَدْقَ يَخْرُجُ مِنْ خِلَالِهِ وَيُنَزِّلُ مِنَ
                          السَّمَاءِ مِنْ جِبَالٍ فِيهَا مِنْ بَرَدٍ فَيُصِيبُ
                          بِهِ مَنْ يَشَاءُ وَيَصْرِفُهُ عَنْ مَنْ يَشَاءُ ۖ
                          يَكَادُ سَنَا بَرْقِهِ يَذْهَبُ بِالْأَبْصَارِ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Insight
                    </Badge>
                    <p className="mt-3">
                      The phrase "We sent down water from the heaven... and we
                      made Earth its dwelling" (وَأَنْزَلْنَا مِنَ السَّمَاءِ
                      مَاءً بِقَدَرٍ فَأَسْكَنَّاهُ فِي الْأَرْضِ) indicates
                      that water formed in space and was then established on
                      Earth. The mention of "mountains with ice inside them"
                      that create bright flashes when they strike is remarkably
                      similar to modern descriptions of ice-bearing comets and
                      meteors entering Earth's atmosphere.
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
                    <CardTitle>Reflection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The correlation between modern scientific findings and the
                    Quranic verses raises an intriguing question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about water's cosmic origins?
                    </h3>
                    <p>
                      The concept that Earth's water came from outer space -
                      specifically from ice-bearing celestial bodies - is a
                      relatively recent scientific discovery. Yet, the Quran
                      appears to describe this phenomenon with remarkable
                      accuracy, centuries before modern astronomy and planetary
                      science could confirm it.
                    </p>
                  </div>

                  <p>
                    In the 7th century, the prevailing belief was that water
                    originated from underground sources or was created directly
                    on Earth. The Quranic description of water coming from
                    space, particularly in the form of ice in "mountains" that
                    create bright flashes (similar to comets), presents a
                    scientific understanding that would have been impossible to
                    know through the observational means available at that time.
                  </p>

                  <p>
                    Furthermore, the precise alignment between the 71% water
                    coverage of Earth's surface and the 71% ratio of "Sea" to
                    "Land" mentions in the Quran adds another layer to this
                    remarkable correspondence between ancient text and modern
                    scientific knowledge.
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
              <Droplets size={24} />
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
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">
              Cosmic Origins of Earth's Water
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the connections between ancient wisdom and modern
            scientific discoveries about our planet's most precious resource.
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

export default WaterMeterology;
