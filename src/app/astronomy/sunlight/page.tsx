/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Sun,
    ChevronRight,
    Clock,
    BookOpen,
    Quote,
    HelpCircle,
    ArrowUp,
    Sparkles,
    Calendar,
    AlertTriangle
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

const AstronomySunlight = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Delayed First Sunlight",
                icon: Sun,
                color: "bg-orange-100 dark:bg-orange-900",
                iconColor: "text-orange-500",
            },
            {
                id: "science",
                title: "Scientific Evidence",
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
                id: "comparison",
                title: "Biblical Comparison",
                icon: Calendar,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
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
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-700 dark:to-amber-700 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Sun className="text-yellow-200" size={32} />
                        <h1 className="text-4xl font-bold">Sunlight</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-orange-100">
                        Astronomy - Extreme
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
                            className="text-orange-700"
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
                                        Explore the formation of sunlight
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
                                        <CardTitle>Delayed First Sunlight</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        The early stages of our solar system formation present an intriguing astronomical phenomenon: there was a period when our solar system was forming, but the sun had not yet begun to shine.
                                    </p>
                                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            From Darkness to Light
                                        </h3>
                                        <p>
                                            Modern astronomy has revealed that during the solar system's formation, all celestial bodies including the sun began forming simultaneously. However, the sun required additional time to achieve the necessary pressure and conditions to initiate nuclear fusion - the process that generates sunlight. This means our early solar system existed in darkness before the sun began to shine.
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
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-blue-500" /> Formation of the Solar System
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "This indicates that one or more supernovae must have occurred near the location where the Sun formed. A shock wave from a nearby supernova would have triggered the formation of the Sun by compressing the matter within the molecular cloud and causing certain regions to collapse under their own gravity. As one fragment of the cloud collapsed it also began to rotate because of conservation of angular momentum and heat up with the increasing pressure. Much of the mass became concentrated in the center, whereas the rest flattened out into a disk that would become the planets and other Solar System bodies. Gravity and pressure within the core of the cloud generated a lot of heat as it accreted more matter from the surrounding disk, eventually triggering nuclear fusion. Thus, the Sun was born."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://en.wikipedia.org/wiki/Sun#Formation"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wikipedia, Sun, 2018
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-yellow-500" /> Sun Formation
                                            </h3>
                                            <p>
                                                The entire solar system formed when a molecular cloud was hit by a supernova shockwave. All components of our solar system began accreting at the same time, but the sun required additional time to reach the necessary pressure to begin fusion.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <AlertTriangle size={16} className="text-red-500" /> Pre-Fusion Period
                                            </h3>
                                            <p>
                                                During this pre-fusion period, the proto-planets were already forming, but without sunlight. The solar system existed in darkness until the sun achieved sufficient mass and pressure to ignite nuclear fusion.
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
                                        <CardTitle>Quranic Reference</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/81/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/1"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 81:1
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "If the sun was made spherical."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ١ إِذَا الشَّمْسُ كُوِّرَتْ
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-4">
                                            Kura (كرة) in Arabic means a ball. In this verse, its verb Kuirat (كُوِّرَتْ) means "made into a ball (sphere)." Today we know that the sun formed from a molecular cloud that later accreted into a sphere.
                                        </p>
                                    </div>

                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-6">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/17/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/12"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 17:12
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "We have made the night and the day two wonders. We erased the wonder of the night, and made the wonder of the day revealing, that you may seek bounty from your Lord, and know the number of years, and the calculation. We have explained all things in detail."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ١٢ وَجَعَلْنَا اللَّيْلَ وَالنَّهَارَ آيَتَيْنِ ۖ فَمَحَوْنَا آيَةَ اللَّيْلِ وَجَعَلْنَا آيَةَ النَّهَارِ مُبْصِرَةً لِتَبْتَغُوا فَضْلًا مِنْ رَبِّكُمْ وَلِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ ۚ وَكُلَّ شَيْءٍ فَصَّلْنَاهُ تَفْصِيلًا
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-4">
                                            The phrase "We erased the wonder of the night" suggests it was all night (no sunlight) until later when sun shone. Notably, the Quran doesn't mention Earth or any other planet specifically, as they weren't yet fully formed planets during this early stage.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Biblical Comparison */}
                        <section id="comparison" className="scroll-mt-20">
                            <Card className="border-l-4 border-purple-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <Calendar className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Biblical Comparison</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-medium mb-3">Biblical Account</h3>
                                        <p>
                                            The Bible explains how the sun is related to day and night (Genesis 1:1-31). It says that on the first day God created the light and darkness on Earth, the first evening came and the first morning followed. But God did not create the sun until the fourth day, specifically after three evenings and three mornings. So three evenings and the three mornings occurred on Earth before there was a sun. So according to the Bible daylight occurred without the sun!
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                                            Contrast
                                        </Badge>
                                        <p className="mt-3">
                                            Unlike the Biblical account, which describes light and day cycles occurring before the creation of the sun, the Quranic description aligns with the modern astronomical understanding that darkness came first, followed by the sun's illumination once nuclear fusion began.
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
                                        The alignment between the Quranic description of sunlight's emergence and our modern astronomical understanding raises intriguing questions:
                                    </p>

                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about sunlight?
                                        </h3>
                                        <p>
                                            The Quranic descriptions appear to align with the modern understanding that the early solar system existed in darkness before the sun began fusion. The text describes a period of night that was later "erased" by daylight, and references the sun being "made spherical" - concepts that match our current understanding of solar system formation.
                                        </p>
                                    </div>

                                    <p>
                                        This correlation between ancient text and modern astronomical discoveries invites contemplation about the nature of knowledge, revelation, and our understanding of the universe's formation. The Quran's description of darkness preceding sunlight aligns with what modern astronomy has only recently confirmed.
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
                        <Sparkles className="text-orange-600" size={18} />
                        <h3 className="text-lg font-medium">Exploring the Origins of Sunlight</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The story of how our sun began to shine connects ancient texts with modern astronomical discoveries, inviting us to look more deeply at the origins of our solar system.
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

export default AstronomySunlight;