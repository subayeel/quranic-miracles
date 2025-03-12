/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Star,
    ChevronRight,
    Clock,
    BookOpen,
    Quote,
    HelpCircle,
    ArrowUp,
    Sparkles,
    Sun,
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

const MultiStarSystem = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Introduction",
                icon: Star,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
            },
            {
                id: "science",
                title: "Scientific Discovery",
                icon: Clock,
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
            <div className="bg-gradient-to-r from-indigo-600 to-purple-800 dark:from-indigo-700 dark:to-purple-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Sun className="text-yellow-200" size={32} />
                        <h1 className="text-4xl font-bold">Multi-Star System</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-indigo-100">
                        Astronomy - Extreme
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-indigo-700 hover:bg-indigo-50"
                            onClick={() => scrollToSection("science")}
                        >
                            Continue <ChevronRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="text-indigo-700"
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
                                        Planets with multiple suns
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
                            <Card className="border-l-4 border-purple-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <Star className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Multiple Suns in the Sky</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        1400 years ago people thought that there is just one sunrise and one sunset. Nobody believed that there are planets with multiple sunrises and multiple sunsets. Today we know that this is false.
                                    </p>
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Planets With Multiple Suns
                                        </h3>
                                        <p>
                                            Planets orbiting one star like Earth are very common. Planets orbiting a binary star system (2 stars) are less common. But now NASA has discovered a planet orbiting 3 stars. This means if you are standing on that planet you will have 3 shadows, one shadow from each sun.
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
                                            <Clock className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Discovery</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-blue-500" /> NASA's Finding
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Newly-Discovered Planet Has 3 Suns
                                            <br /><br />
                                            If you thought Luke Skywalker's home planet, Tatooine, was a strange world with its two suns in the sky, imagine this: a planet with either constant daylight or triple sunrises and sunsets each day depending on the seasons (which last longer than human lifetimes). Such a world has been discovered by a team of astronomers led by the University of Arizona using direct imaging. The planet, HD 131399Ab, is unlike any other known world - one with, by far, the widest known orbit within a multi-star system..."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://astronomynow.com/2016/07/08/newly-discovered-planet-has-three-suns/"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Astronomy Now, Newly-Discovered Planet Has 3 Suns, 2016
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sun size={16} className="text-yellow-500" /> Triple Sunrises
                                            </h3>
                                            <p>
                                                Unlike Earth with its single sun, this planet experiences three different sunrises and sunsets, creating a completely different experience of day and night.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-yellow-500" /> Triple Shadows
                                            </h3>
                                            <p>
                                                Standing on this planet would create a unique phenomenon: three distinct shadows cast by each of the three suns in the sky.
                                            </p>
                                        </div>
                                    </div>
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
                                        <CardTitle>Quranic References</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mb-6">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/77/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/30"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 77:30-31
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "Proceed to a shadow of three branches. No shade, and no protection from the flames."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ٣٠ انْطَلِقُوا إِلَىٰ ظِلٍّ ذِي ثَلَاثِ شُعَبٍ
                                                    <br />
                                                    ٣١ لَا ظَلِيلٍ وَلَا يُغْنِي مِنَ اللَّهَبِ
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 border-t pt-4 border-green-200 dark:border-green-800">
                                            <p>
                                                <strong>"Shadow of three branches"</strong> means it has three stars, one shadow from each star. This is a triple-star system.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/70/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/40"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 70:40
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "I swear by the Lord of the sunrises and the sunsets, that We are able."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ٤٠ فَلَا أُقْسِمُ بِرَبِّ الْمَشَارِقِ وَالْمَغَارِبِ إِنَّا لَقَادِرُونَ
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 border-t pt-4 border-green-200 dark:border-green-800">
                                            <p>
                                                "Mashreq مَشَرِقِ" means single sunrise. "Mashreqain مَشْرِقَيْنِ" means double sunrises. In this verse "Mashareq مَشَارِقِ" means multiple sunrises (3 or more). Today we know what it is, it is multi-star system.
                                            </p>
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
                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about multi-star system?
                                        </h3>
                                        <p>
                                            The Quranic references to "shadow of three branches" and "multiple sunrises and sunsets" present an intriguing alignment with our modern astronomical discoveries. These verses, revealed 14 centuries ago, describe phenomena that have only recently been scientifically confirmed.
                                        </p>
                                        <p className="mt-4">
                                            The specific mention of triple shadows and multiple rising and setting points for the sun offers a remarkably accurate description of what would be experienced on a planet in a triple-star system - a concept that would have been completely foreign to the knowledge of that era.
                                        </p>
                                    </div>

                                    <p>
                                        For many, this connection between ancient text and modern astronomical discoveries invites deep contemplation about knowledge, revelation, and our understanding of the universe. Whether approached from a scientific or spiritual perspective, these celestial phenomena continue to inspire wonder and expand our cosmic horizons.
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
                        <Button className="rounded-full h-14 w-14 shadow-lg bg-indigo-600 hover:bg-indigo-700">
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
                        <Sparkles className="text-indigo-600" size={18} />
                        <h3 className="text-lg font-medium">Exploring Multi-Star Systems</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        From ancient texts to modern astronomy, the wonders of multi-star systems continue to expand our understanding of the cosmos.
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

export default MultiStarSystem;