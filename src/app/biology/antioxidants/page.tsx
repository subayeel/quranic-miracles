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
    Grape,
    ArrowUp,
    Heart,
    Apple,
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

const Antioxidants = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Nature's Protectors",
                icon: Grape,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
            },
            {
                id: "science",
                title: "Scientific Evidence",
                icon: FlaskRound,
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
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
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
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Grape className="text-purple-200" size={32} />
                        <h1 className="text-4xl font-bold">Antioxidants</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-purple-100">
                        Biology - Advanced
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-purple-700 hover:bg-purple-50"
                            onClick={() => scrollToSection("science")}
                        >
                            Continue <ChevronRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="text-purple-700 border-white hover:bg-purple-600"
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
                                        Explore the power of antioxidants
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <nav className="space-y-1">
                                        {contents.map(({ id, title, icon: Icon, iconColor }) => (
                                            <button
                                                key={id}
                                                onClick={() => scrollToSection(id)}
                                                className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${activeSection === id
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
                            <Card className={`border-l-4 border-purple-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <Grape className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Nature's Protectors</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        Antioxidants are compounds that help protect our bodies from harmful free radicals and oxidative stress - they're like nature's shield for our cells.
                                    </p>
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Ancient Wisdom, Modern Discovery
                                        </h3>
                                        <p>
                                            1400 years ago, nobody knew that pomegranates and dates had any specific health benefits beyond basic nutrition. Today, scientists confirm that they are powerful antioxidants that can help prevent heart attacks and other diseases.
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
                                            <FlaskRound className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-blue-500" /> Research Findings
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Pomegranate-date combo helps prevent heart attacks
                                            <br /><br />
                                            An Israeli study has linked regular consumption of pomegranate juice and dates to heart attack prevention.
                                            <br /><br />
                                            Researchers at the Technion-Israel Institute of Technology have found that half a glass of juice a day, along with three dates, can bring about a significant reduction in atherosclerosis - the accumulation of fatty cells in arteries which can cause heart attacks and strokes. According to the study published recently in British scientific journal Food & Function, the scientists tested the effects of the fruits on mice as well as on arterial cells grown in the laboratory. They found that, used regularly, the combination of antioxidants contained within pomegranates and dates could lower cholesterol in the arteries by 28 per cent.
                                            <br /><br />
                                            The researchers said the combination of the different types of antioxidants contained within the two fruits gave the best results in their tests for fighting arterial blockage."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://www.timesofisrael.com/pomegranate-date-combo-protects-arteries-israeli-study-finds/"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                The Times Of Israel, Pomegranate-date combo helps prevent heart attacks, 2015
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Heart size={16} className="text-red-500" /> Heart Protection
                                            </h3>
                                            <p>
                                                The antioxidants in pomegranates and dates work together to reduce atherosclerosis - the buildup of fatty deposits in arteries that can lead to heart attacks and strokes.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Star size={16} className="text-yellow-500" /> Combined Effect
                                            </h3>
                                            <p>
                                                Research shows that combining these fruits creates a powerful effect, reducing arterial cholesterol by up to 28% - much more effective than either fruit alone.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-medium mt-6">
                                        Pomegranates and dates are now recognized as powerful antioxidants that can help protect our cardiovascular system. This scientific understanding was only confirmed recently, yet these specific fruits were highlighted together in the Quran 1400 years ago.
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
                                                href="https://www.quranwow.com/#/ch/55/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/68"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 55:68
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "In them are fruits, and date-palms, and pomegranates."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ٦٨ فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Key Point
                                        </Badge>
                                        <p className="mt-3">
                                            In this verse, dates and pomegranates are specifically mentioned together as preferred fruits in Paradise. Today we understand why these specific fruits might be highlighted - they contain powerful antioxidants that work particularly well together.
                                        </p>
                                    </div>

                                    <p className="mt-4">
                                        Pomegranates and dates are powerful antioxidants. This was discovered only recently, however these specific fruits were highlighted together in the Quran 1400 years before their special health properties were scientifically understood.
                                    </p>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Reflection */}
                        <section id="reflection" className="scroll-mt-20">
                            <Card className={`border-l-4 border-purple-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <HelpCircle className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Reflection</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p>
                                        The connection between ancient texts and modern scientific discoveries invites us to reflect on knowledge across time:
                                    </p>

                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about antioxidants?
                                        </h3>
                                        <p>
                                            The Quranic mention of dates and pomegranates together aligns with modern scientific understanding of their powerful combined antioxidant properties. This specific mention of these fruits together, rather than just mentioning fruits in general, raises interesting questions about the source of this knowledge.
                                        </p>
                                    </div>

                                    <p>
                                        While these fruits have been consumed for thousands of years across many cultures, the specific understanding of their combined antioxidant properties and heart-protective effects is a very recent scientific discovery. The alignment between this ancient text and modern nutritional science offers a fascinating perspective on knowledge, revelation, and the natural world.
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
                        <Button className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700">
                            <Grape size={24} />
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
                                    className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${activeSection === id
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
                        <Apple className="text-purple-600" size={18} />
                        <h3 className="text-lg font-medium">Nature's Protective Foods</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The power of antioxidants in pomegranates and dates continues to reveal its secrets, connecting ancient wisdom with modern discovery.
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

export default Antioxidants;