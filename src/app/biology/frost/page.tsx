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
    Snowflake,
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

const Frost = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Plant Damage",
                icon: FlaskRound,
                color: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-500",
            },
            {
                id: "science",
                title: "Scientific Evidence",
                icon: Snowflake,
                color: "bg-cyan-100 dark:bg-cyan-900",
                iconColor: "text-cyan-500",
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
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Snowflake className="text-blue-200" size={32} />
                        <h1 className="text-4xl font-bold">Frost</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-blue-100">
                        Biology - Advanced
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
                                        Explore frost's effect on plant life
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
                                            <FlaskRound className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Plant Damage</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        Frost is more than just cold weather - it's a natural phenomenon that can devastate plant life through a fascinating biological process.
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            How Frost Kills Plants
                                        </h3>
                                        <p>
                                            <strong>When water inside the plant cells freezes it expands. This expansion ruptures the cell walls, killing the cell. This is why plants die in low temperatures.</strong>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Scientific Evidence */}
                        <section id="science" className="scroll-mt-20">
                            <Card className={`border-l-4 border-cyan-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                                            <Snowflake className="text-cyan-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-cyan-500" /> Scientific Understanding
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Frost
                                            <br /><br />
                                            Plants that have evolved in warmer climates suffer damage when the temperature falls low enough to freeze the water in the cells that make up the plant tissue. The tissue damage resulting from this process is known as "frost damage". Farmers in those regions where frost damage is known to affect their crops often invest in substantial means to protect their crops from such damage.
                                            <br /><br />
                                            Effect on plants
                                            <br /><br />
                                            Damage: Many plants can be damaged or killed by freezing temperatures or frost. This varies with the type of plant, the tissue exposed, and how low temperatures get: a "light frost" of −2 to 0 ⁰C (28 to 32 ⁰F) will damage fewer types of plants than a "hard frost" below −2 ⁰C (28 ⁰F)."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://en.wikipedia.org/wiki/Frost"
                                                className="text-cyan-600 dark:text-cyan-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wikipedia, Frost, 2019
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-cyan-500" /> Cell Damage
                                            </h3>
                                            <p>
                                                Modern science has confirmed that when water inside plant cells freezes, it expands and ruptures the cell walls. This cellular destruction is what leads to plant death during frost events.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Star size={16} className="text-blue-500" /> Varying Impact
                                            </h3>
                                            <p>
                                                The severity of frost damage depends on the plant species, temperature, and duration of exposure. Some plants have evolved mechanisms to survive freezing conditions, while others are highly vulnerable.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        Plants die in low temperatures. This scientific understanding was only comprehensively explained in recent times, yet it was portrayed in the Quran 1400 years before it was discovered.
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
                                                href="https://www.quranwow.com/#/ch/3/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/117"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 3:117
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "The parable of what they spend in this worldly life is that of a frosty wind that strikes the harvest of a people who have wronged their souls, and destroys it. Allah did not wrong them, but they wronged their own selves."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ١١٧ مَثَلُ مَا يُنْفِقُونَ فِي هَٰذِهِ الْحَيَاةِ الدُّنْيَا كَمَثَلِ رِيحٍ فِيهَا صِرٌّ أَصَابَتْ حَرْثَ قَوْمٍ ظَلَمُوا أَنْفُسَهُمْ فَأَهْلَكَتْهُ ۚ وَمَا ظَلَمَهُمُ اللَّهُ وَلَٰكِنْ أَنْفُسَهُمْ يَظْلِمُونَ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Key Point
                                        </Badge>
                                        <p className="mt-3">
                                            Here frost is specifically mentioned as causing plants to die. The verse uses frost as a metaphor but accurately describes its destructive effect on harvests. Today we understand the biological mechanism behind this: the expansion of frozen water ruptures the plant cells.
                                        </p>
                                    </div>
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
                                            How could an illiterate man who lived 1400 years ago have known about frost?
                                        </h3>
                                        <p>
                                            The Quranic description of frost destroying harvests aligns with our modern scientific understanding of how freezing temperatures damage plant cells. This specific mention of frost's destructive capability on plant life raises interesting questions about the source of this knowledge.
                                        </p>
                                    </div>

                                    <p>
                                        While the effects of frost on crops have been observed throughout human history, the cellular mechanism of how frost kills plants through water expansion and cell wall rupture is a relatively recent scientific understanding. The alignment between ancient text and modern science offers a fascinating perspective on knowledge, revelation, and the natural world.
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
                            <Snowflake size={24} />
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
                        <Snowflake className="text-blue-600" size={18} />
                        <h3 className="text-lg font-medium">Nature's Freezing Force</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The destructive impact of frost on plant life reveals fascinating biological mechanisms, connecting ancient observations with modern scientific understanding.
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

export default Frost;