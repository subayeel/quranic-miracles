/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Thermometer,
    ChevronRight,
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

const AstronomyKelvin = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Surface Temperature of the Sun",
                icon: Sun,
                color: "bg-orange-100 dark:bg-orange-900",
                iconColor: "text-orange-500",
            },
            {
                id: "science",
                title: "Scientific Evidence",
                icon: Thermometer,
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
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-yellow-600 dark:to-orange-700 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Sun className="text-yellow-200" size={32} />
                        <h1 className="text-4xl font-bold">Kelvin</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-yellow-100">
                        Astronomy - Easy
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-orange-700 hover:bg-orange-50"
                            onClick={() => scrollToSection("science")}
                        >
                            Continue <ChevronRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="text-orange-700 border-white hover:bg-orange-600"
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
                                        Explore the Sun's temperature in Kelvin
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
                            <Card className="border-l-4 border-orange-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                                            <Sun className="text-orange-500" size={24} />
                                        </div>
                                        <CardTitle>Surface Temperature of the Sun</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        The Sun is our closest star and the center of our solar system. Understanding its properties, including its surface temperature, is fundamental to astronomy.
                                    </p>
                                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            The Sun's Temperature
                                        </h3>
                                        <p>
                                            1400 years ago, nobody knew the surface temperature of the sun in kelvin. Today, modern astronomy has precisely measured this value. Interestingly, this temperature appears to be portrayed in the Quran through the number of verses between the first and last mentions of the sun.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Scientific Evidence */}
                        <section id="science" className="scroll-mt-20">
                            <Card className="border-l-4 border-red-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                                            <Thermometer className="text-red-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-red-500" /> Modern Understanding
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "The Sun is a G2V star, with G2 indicating its surface temperature of approximately 5,778 K (5,505 °C; 9,941 °F), and V that it, like most stars, is a main-sequence star."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://en.wikipedia.org/wiki/Sun"
                                                className="text-red-600 dark:text-red-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wikipedia, Sun, 2023
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sun size={16} className="text-yellow-500" /> Surface Temperature
                                            </h3>
                                            <p>
                                                Modern astronomical measurements have determined that the Sun's surface temperature is precisely 5778 Kelvin. This temperature is crucial for understanding the Sun's properties and behavior.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-blue-500" /> Kelvin Scale
                                            </h3>
                                            <p>
                                                The Kelvin scale, named after Lord Kelvin, is the primary temperature scale in physics and astronomy. It begins at absolute zero (-273.15°C) with no negative values, making it ideal for scientific measurements.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        This precise measurement of 5778 Kelvin is the accepted standard value for the Sun's surface temperature in modern astronomy.
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
                                    <p>
                                        The Quran mentions the sun in multiple verses. The first and last occurrences have a particular numerical relationship that has drawn attention.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                            <h3 className="font-medium mb-3">
                                                <a
                                                    href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/258"
                                                    className="text-green-600 dark:text-green-400 hover:underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Quran 2:258 - First Mention
                                                </a>
                                            </h3>
                                            <div className="flex flex-col space-y-4">
                                                <p className="italic">
                                                    "Have you not considered him who argued with Abraham about his Lord, because Allah had given him sovereignty? Abraham said, 'My Lord is He who gives life and causes death.' He said, 'I give life and cause death.' Abraham said, 'Allah brings the sun from the East, so bring it from the West,' so the blasphemer was confounded. Allah does not guide the wrongdoing people."
                                                </p>
                                                <p dir="rtl" className="text-right text-gray-700 dark:text-gray-300">
                                                    أَلَمْ تَرَ إِلَى الَّذِي حَاجَّ إِبْرَاهِيمَ فِي رَبِّهِ أَنْ آتَاهُ اللَّهُ الْمُلْكَ إِذْ قَالَ إِبْرَاهِيمُ رَبِّيَ الَّذِي يُحْيِي وَيُمِيتُ قَالَ أَنَا أُحْيِي وَأُمِيتُ ۖ قَالَ إِبْرَاهِيمُ فَإِنَّ اللَّهَ يَأْتِي بِالشَّمْسِ مِنَ الْمَشْرِقِ فَأْتِ بِهَا مِنَ الْمَغْرِبِ فَبُهِتَ الَّذِي كَفَرَ ۗ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                            <h3 className="font-medium mb-3">
                                                <a
                                                    href="https://www.quranwow.com/#/ch/91/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/1"
                                                    className="text-green-600 dark:text-green-400 hover:underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Quran 91:1 - Last Mention
                                                </a>
                                            </h3>
                                            <div className="flex flex-col space-y-4">
                                                <p className="italic">
                                                    "By the sun and its radiance."
                                                </p>
                                                <p dir="rtl" className="text-right text-gray-700 dark:text-gray-300">
                                                    وَالشَّمْسِ وَضُحَاهَا
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                                            Numerical Pattern
                                        </Badge>
                                        <p className="mt-3">
                                            The first occurrence of the word "sun" (الشَّمْسِ) in the Quran is in chapter 2, verse 258, and the last occurrence is in chapter 91, verse 1. When counting the verses between these two mentions (inclusive), there are exactly 5778 verses—the same number as the surface temperature of the sun in Kelvin.
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
                                        The correlation between the number of verses between the first and last mentions of the sun in the Quran and the modern scientific measurement of the sun's surface temperature raises interesting questions:
                                    </p>

                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about Kelvin?
                                        </h3>
                                        <p>
                                            This numerical correspondence is particularly noteworthy because the Kelvin temperature scale was only developed in the 19th century by Lord Kelvin (William Thomson), and the precise measurement of the sun's surface temperature is a relatively recent scientific achievement. The Quran was revealed in the 7th century CE, long before modern temperature scales or advanced astronomical measurements were established.
                                        </p>
                                    </div>

                                    <p>
                                        For many, this connection between the numerical structure of the Quran and modern scientific measurements invites contemplation about knowledge, revelation, and the universe we inhabit. Whether approached from a scientific or spiritual perspective, such correlations continue to inspire wonder and dialogue about the relationship between ancient texts and modern discoveries.
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
                        <Button className="rounded-full h-14 w-14 shadow-lg bg-orange-600 hover:bg-orange-700">
                            <Sun size={24} />
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
                        <Sun className="text-orange-600" size={18} />
                        <h3 className="text-lg font-medium">Exploring Solar Science</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The sun continues to reveal its secrets, connecting ancient wisdom with modern discovery. May we always look up with wonder.
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

export default AstronomyKelvin;