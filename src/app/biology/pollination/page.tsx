/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Wind,
    ChevronRight,
    FlaskRound,
    BookOpen,
    Quote,
    HelpCircle,
    Flower,
    ArrowUp,
    Leaf,
    CloudRain,
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

const PollinationComponent = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Wind & Pollination",
                icon: Wind,
                color: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-500",
            },
            {
                id: "science",
                title: "Scientific Evidence",
                icon: FlaskRound,
                color: "bg-green-100 dark:bg-green-900",
                iconColor: "text-green-500",
            },
            {
                id: "quran",
                title: "Quranic References",
                icon: BookOpen,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
            },
            {
                id: "strong-winds",
                title: "Strong Winds Effect",
                icon: CloudRain,
                color: "bg-orange-100 dark:bg-orange-900",
                iconColor: "text-orange-500",
            },
            {
                id: "reflection",
                title: "Reflection",
                icon: HelpCircle,
                color: "bg-indigo-100 dark:bg-indigo-900",
                iconColor: "text-indigo-500",
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
                        <Wind className="text-blue-200" size={32} />
                        <h1 className="text-4xl font-bold">Pollination</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-blue-100">
                        Biology - Intermediate
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
                                        Explore wind's vital role in pollination
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
                            <Card className={`border-l-4 border-blue-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                                            <Wind className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Wind & Pollination</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        Pollination is the transfer of pollen from the male part of a plant to the female part. While many people think of insects as the primary pollinators, wind actually plays a crucial role in plant reproduction.
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Beyond the Buzz About Bees
                                        </h3>
                                        <p>
                                            In the Quran, wind is specifically related to pollination. Some skeptics claimed that whoever wrote the Quran made a mistake, arguing that insects are responsible for pollination, not wind. However, today scientists confirm that wind plays a vital role in pollination for many plant species.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Leaf size={16} className="text-green-500" /> Pollinating Agents
                                            </h3>
                                            <p>
                                                Nature uses various methods for pollination: insects, animals, water, and wind. Each method is perfectly suited to different plant species and environments.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Wind size={16} className="text-blue-500" /> Wind-Only Plants
                                            </h3>
                                            <p>
                                                Some plant species rely exclusively on wind for pollination, showing how essential this natural force is for plant reproduction and biodiversity.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Scientific Evidence */}
                        <section id="science" className="scroll-mt-20">
                            <Card className={`border-l-4 border-green-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                                            <FlaskRound className="text-green-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-3 flex items-center gap-2">
                                            <Quote size={16} className="text-green-500" /> Anemophily - Wind Pollination
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                                            "Anemophily or wind pollination is a form of pollination whereby pollen is distributed by wind. Almost all gymnosperms are anemophilous, as are many plants in the order Poales, including grasses, sedges and rushes. Other common anemophilous plants are oaks, sweet chestnuts, alders and members of the family Juglandaceae (hickory or walnut family)."
                                        </p>
                                        <div className="text-sm">
                                            <a
                                                href="https://en.wikipedia.org/wiki/Anemophily"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wikipedia, Anemophily, 2020
                                            </a>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        Wind plays a major role in pollination for countless plant species. This scientific understanding was only fully appreciated in recent times, yet it was mentioned in the Quran 1400 years ago.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2">Gymnosperms</h3>
                                            <p className="text-sm">
                                                Nearly all cone-bearing plants like pines, firs, and spruces rely entirely on wind for pollination.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2">Grasses</h3>
                                            <p className="text-sm">
                                                Most grasses, sedges, and rushes use wind pollination, making it essential for grassland ecosystems.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2">Trees</h3>
                                            <p className="text-sm">
                                                Many large trees like oaks, sweet chestnuts, and alders depend on wind to carry their pollen.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Quranic References */}
                        <section id="quran" className="scroll-mt-20">
                            <Card className={`border-l-4 border-purple-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <BookOpen className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Quranic Reference - Seeding Winds</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/15/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/22"
                                                className="text-purple-600 dark:text-purple-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 15:22
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "And We sent the seeding winds, then cause the rain to descend from the sky, and gave you water to drink, though you are not the guardians of its stores."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ٢٢ وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً فَأَسْقَيْنَاكُمُوهُ وَمَا أَنْتُمْ لَهُ بِخَازِنِينَ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                                            Key Point
                                        </Badge>
                                        <p className="mt-3">
                                            The term "seeding winds" (رِيَاحَ لَوَاقِحَ) directly refers to winds that fertilize and help plants reproduce. This precise description of wind's role in pollination shows remarkable scientific accuracy for text written 1400 years ago.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Strong Winds Effect */}
                        <section id="strong-winds" className="scroll-mt-20">
                            <Card className={`border-l-4 border-orange-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                                            <CloudRain className="text-orange-500" size={24} />
                                        </div>
                                        <CardTitle>When Wind Becomes Destructive</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p>
                                        While moderate winds help with pollination, scientists have recently discovered that strong winds actually hinder the pollination process.
                                    </p>

                                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <h3 className="font-medium mb-3 flex items-center gap-2">
                                            <Quote size={16} className="text-orange-500" /> Effects of Wind on Pollinator Activity
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300 mb-3">
                                            "Honeybees do not forage in rain or in wind stronger than 12 mph... Strong winds may injure flowers and cause loss of pollen. High temperatures, wind, and low humidity may cause desiccation of the style and reduce the receptive period of the blossom for pollination..."
                                        </p>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "For fruit with more delicate flowers, such as prunes, a few days of dry winds can destroy crop potential. Winds reduce cross-pollination in prunes, and in some cases apricot, when the desiccated pollen clumps on the dehisced anthers make it more difficult for bees to collect."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://energycentral.com/news/effects-wind-speed-foraging-behavior-insect-pollinators"
                                                className="text-orange-600 dark:text-orange-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Energy Central. Effects of wind speed on foraging behavior of insect pollinators, 2020
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/51/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/41"
                                                className="text-red-600 dark:text-red-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 51:41 - The Infertile Wind
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "And in Aad. We unleashed against them the infertile wind."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ٤١ وَفِي عَادٍ إِذْ أَرْسَلْنَا عَلَيْهِمُ الرِّيحَ الْعَقِيمَ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
                                            Scientific Connection
                                        </Badge>
                                        <p className="mt-3">
                                            "Akeem عَقِيمَ" means sterile or unable to produce offspring. The people of Aad experienced destructive strong winds. Today we understand scientifically why such winds would be called "infertile" - because strong winds hinder pollination and plant reproduction, making the land barren and unproductive.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Reflection */}
                        <section id="reflection" className="scroll-mt-20">
                            <Card className={`border-l-4 border-indigo-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                                            <HelpCircle className="text-indigo-500" size={24} />
                                        </div>
                                        <CardTitle>Reflection</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p>
                                        The Quranic description of wind's role in pollination demonstrates a sophisticated understanding of natural processes:
                                    </p>

                                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about pollination?
                                        </h3>
                                        <div className="space-y-3">
                                            <p>
                                                The Quran accurately describes two distinct aspects of wind and plant reproduction:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 ml-4">
                                                <li>Wind as "seeding winds" that help plants reproduce through pollination</li>
                                                <li>Strong winds as "infertile" forces that prevent plant reproduction</li>
                                            </ul>
                                            <p>
                                                Both of these concepts align perfectly with modern scientific understanding, yet they were written at a time when the mechanisms of pollination were completely unknown to human science.
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        The precision of these descriptions - distinguishing between helpful winds and destructive winds in terms of plant reproduction - suggests knowledge that goes beyond casual observation. This scientific accuracy in ancient text continues to intrigue scholars and believers alike.
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
                            <Wind size={24} />
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
                        <Flower className="text-blue-600" size={18} />
                        <h3 className="text-lg font-medium">Nature's Reproductive Dance</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        From gentle breezes that carry life to destructive winds that threaten it, the role of wind in pollination reveals the delicate balance of nature.
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

export default PollinationComponent;