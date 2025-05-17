/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Eye,
  ChevronRight,
  Moon,
  BookOpen,
  Quote,
  HelpCircle,
  Sun,
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

const BiologyColors = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Vision in Dim Light",
        icon: Eye,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Moon,
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Colors</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">Biology - Advanced</p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-800 border-blue-100 hover:bg-blue-700 "
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
                    Explore human vision in different light conditions
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
              <Card className={`border-l-4 border-indigo-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Eye className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Vision in Dim Light</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-lg mb-3">
                      Humans cannot see colors in dim light
                    </h3>
                    <p>
                      In the Quran, there's a reference to seeing only in black
                      and white during dim light conditions. Skeptics have
                      claimed that whoever wrote the Quran made a mistake,
                      suggesting that humans always see in color, never in black
                      and white. However, modern science has confirmed that in
                      dim light, humans can indeed only see in black and white.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Evidence */}
            <section id="science" className="scroll-mt-20">
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Moon className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Scientific Evidence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-blue-500" /> Modern
                      Understanding of Vision
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Sensing Light
                      <br />
                      <br />
                      There are two kinds of light-sensitive organs located in
                      the backs of our eyes: rod-shaped and cone-shaped. Both
                      rods and cones are sensitive to light. The difference
                      between them is that the rods allow us to see in very dim
                      light but don't permit detection of color, while the cones
                      let us see color but they don't work in dim light.
                      <br />
                      <br />
                      When it gets dark the cones lose their ability to respond
                      to light. The rods continue to respond to available light,
                      but since they cannot see color, so to speak, everything
                      appears to be various shades of black and white and gray."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://indianapublicmedia.org/amomentofscience/night-vision-humans-color.php"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Indiana Public Media, Night Vision And Humans: Why Can't
                        We See Color?, 2012
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Moon size={16} className="text-gray-500" /> Rod Cells
                      </h3>
                      <p>
                        Rod cells are highly sensitive to light and allow us to
                        see in very dim light conditions. However, they don't
                        detect color, which is why our night vision is
                        essentially black and white.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Sun size={16} className="text-yellow-500" /> Cone Cells
                      </h3>
                      <p>
                        Cone cells are responsible for color vision but require
                        more light to function properly. In dim light
                        conditions, these cells become ineffective, leaving only
                        rod cells to process visual information.
                      </p>
                    </div>
                  </div>

                  <p className="font-medium mt-4">
                    "Rods allow us to see in very dim light but don't permit
                    detection of color, while the cones let us see color but
                    they don't work in dim light." So in dim light we can only
                    see in black and white. This was known recently; however,
                    this was portrayed in the Quran 1400 years before it was
                    discovered.
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
                    <CardTitle>Quranic Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/187"
                        className="text-green-600 dark:text-green-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 2:187
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Permitted for you is intercourse with your wives on
                          the night of the fast. They are a garment for you, and
                          you are a garment for them. Allah knows that you used
                          to betray yourselves, but He turned to you and
                          pardoned you. So approach them now, and seek what
                          Allah has ordained for you, and eat and drink until
                          the white streak of dawn can be distinguished from the
                          black streak. Then complete the fast until nightfall.
                          But do not approach them while you are in retreat at
                          the mosques. These are the limits of Allah, so do not
                          come near them. Allah thus clarifies His revelations
                          to the people, that they may attain piety."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ١٨٧ أُحِلَّ لَكُمْ لَيْلَةَ الصِّيَامِ الرَّفَثُ
                          إِلَىٰ نِسَائِكُمْ ۚ هُنَّ لِبَاسٌ لَكُمْ وَأَنْتُمْ
                          لِبَاسٌ لَهُنَّ ۗ عَلِمَ اللَّهُ أَنَّكُمْ كُنْتُمْ
                          تَخْتَانُونَ أَنْفُسَكُمْ فَتَابَ عَلَيْكُمْ وَعَفَا
                          عَنْكُمْ ۖ فَالْآنَ بَاشِرُوهُنَّ وَابْتَغُوا مَا
                          كَتَبَ اللَّهُ لَكُمْ ۚ وَكُلُوا وَاشْرَبُوا حَتَّىٰ
                          يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْأَبْيَضُ مِنَ
                          الْخَيْطِ الْأَسْوَدِ مِنَ الْفَجْرِ ۖ ثُمَّ أَتِمُّوا
                          الصِّيَامَ إِلَى اللَّيْلِ ۚ وَلَا تُبَاشِرُوهُنَّ
                          وَأَنْتُمْ عَاكِفُونَ فِي الْمَسَاجِدِ ۗ تِلْكَ
                          حُدُودُ اللَّهِ فَلَا تَقْرَبُوهَا ۗ كَذَٰلِكَ
                          يُبَيِّنُ اللَّهُ آيَاتِهِ لِلنَّاسِ لَعَلَّهُمْ
                          يَتَّقُونَ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Key Point
                    </Badge>
                    <p className="mt-3">
                      Note that the verse specifically mentions "white streak of
                      dawn can be distinguished from the black streak." This
                      indicates that humans can only see black and white in dim
                      light conditions, with no mention of colors. Today we know
                      this is scientifically accurate - our rod cells allow us
                      to see in very dim light but don't permit detection of
                      color.
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
                    The alignment between the Quranic reference to seeing only
                    black and white in dim light conditions and our modern
                    understanding of human vision raises intriguing questions:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could an illiterate man who lived 1400 years ago have
                      known about colors?
                    </h3>
                    <p>
                      The verse in the Quran accurately describes a biological
                      phenomenon that was only scientifically understood in
                      recent times. The specific mention of distinguishing
                      between white and black streaks at dawn - a time of dim
                      light - aligns perfectly with our modern understanding of
                      how human rod and cone cells function under different
                      lighting conditions.
                    </p>
                  </div>

                  <p>
                    For many, this connection between ancient text and modern
                    science invites contemplation about knowledge, revelation,
                    and the world we inhabit. Whether approached from a
                    scientific or spiritual perspective, the complexity of human
                    vision continues to inspire wonder and discovery.
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
              <Eye size={24} />
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
            <h3 className="text-lg font-medium">Exploring Human Vision</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The human eye continues to reveal its complexity, connecting ancient
            wisdom with modern scientific discovery.
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

export default BiologyColors;
