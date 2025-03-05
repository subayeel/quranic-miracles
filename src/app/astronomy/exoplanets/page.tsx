/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Star,
    ChevronRight,
    BookOpen,
    HelpCircle,
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

const AstronomyExoplanets = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Exoplanets Overview",
                icon: Star,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
            },
            {
                id: "discovery",
                title: "Scientific Discovery",
                icon: Sparkles,
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
                        <Star className="text-yellow-200" size={32} />
                        <h1 className="text-4xl font-bold">Exoplanets</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-indigo-100">
                        Astronomy - Advanced
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-indigo-700 hover:bg-indigo-50"
                            onClick={() => scrollToSection("discovery")}
                        >
                            Continue <ChevronRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="text-white border-white hover:bg-white/10"
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
                                        Explore planets beyond our solar system
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
                                        <CardTitle>Exploring Exoplanets</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        1400 years ago, people knew about Earth, the Sun, and the Moon.
                                        At that time, no one knew about planets outside our Solar System.
                                        Today, we know this is no longer true - astronomers have discovered
                                        numerous exoplanets.
                                    </p>
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            The Search for Life
                                        </h3>
                                        <p>
                                            When scientists search for life on exoplanets, they
                                            focus on one critical element: water. The fundamental
                                            principle is simple - no water, no life.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Scientific Discovery */}
                        <section id="discovery" className="scroll-mt-20">
                            <Card className="border-l-4 border-blue-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                                            <Sparkles className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Water Discovered on an Exoplanet</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            Exciting Discovery
                                        </h3>
                                        <p>
                                            "Astronomers using the Hubble space telescope have
                                            discovered water in the atmosphere of an exoplanet in
                                            its star's habitable zone. If confirmed, it will be the
                                            first time we've detected water - a critical ingredient
                                            for life as we know it - on an exoplanet.

                                            The water was detected as vapor in the atmosphere, but
                                            the planet's temperature means it could sustain liquid
                                            water on its surface, if it's rocky. The planet is called
                                            K2-18b, and it's about 110 light years away. The planet
                                            is much different than Earth. It's a Super-Earth, and
                                            it's twice as large as Earth, and about 8 times as massive.
                                            K2-18b is orbiting a red dwarf star, and it was first
                                            discovered in 2015 by the Kepler Space Telescope."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://www.universetoday.com/143372/water-discovered-in-the-atmosphere-of-an-exoplanet-in-the-habitable-zone-it-might-be-rain/"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Universe Today, Water Discovered in the Atmosphere of an Exoplanet in the Habitable zone. It Might Be Rain, 2019
                                            </a>
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
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/21/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/30"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 21:30
                                            </a>
                                        </h3>
                                        <p className="italic mb-4">
                                            "Do not those who disbelieve see that the heavens and the
                                            Earth were meshed together then We ripped them apart? And
                                            then We made of water everything living? Would they still
                                            not believe?"
                                        </p>
                                        <p className="font-arabic text-right text-lg" dir="rtl">
                                            ٣٠ أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا ۖ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Additional Reference
                                        </Badge>
                                        <div className="mt-3">
                                            <h3 className="font-medium mb-3">
                                                <a
                                                    href="https://www.quranwow.com/#/ch/65/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/12"
                                                    className="text-green-600 dark:text-green-400 hover:underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Quran 65:12
                                                </a>
                                            </h3>
                                            <p className="italic mb-4">
                                                "Allah is the one who created seven Heavens and from
                                                Earth like them (of corresponding type); [Allah's]
                                                command descends among them so that you may know that
                                                Allah is capable of anything and that Allah knows
                                                everything."
                                            </p>
                                            <p className="font-arabic text-right text-lg" dir="rtl">
                                                ١٢ اللَّهُ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ وَمِنَ الْأَرْضِ مِثْلَهُنَّ يَتَنَزَّلُ الْأَمْرُ بَيْنَهُنَّ لِتَعْلَمُوا أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا
                                            </p>
                                            <p className="mt-3">
                                                In the Quran, all life, on Earth and in the Heavens,
                                                is described as depending on water. This verse suggests
                                                that the seven heavens have planets like Earth, which
                                                aligns with today's astronomical discoveries of exoplanets.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Reflection */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AstronomyExoplanets;