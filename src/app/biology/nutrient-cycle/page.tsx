/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Star,
    ChevronRight,
    Leaf,
    BookOpen,
    Quote,
    HelpCircle,
    Recycle,
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

const NutrientCycle = () => {
    const [activeSection, setActiveSection] = useState("intro");
      const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Decomposed Matter Recycled",
                icon: Recycle,
                color: "bg-green-100 dark:bg-green-900",
                iconColor: "text-green-500",
            },
            {
                id: "science",
                title: "Scientific Evidence",
                icon: Leaf,
                color: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-500",
            },
            {
                id: "quran",
                title: "Quranic Reference",
                icon: BookOpen,
                color: "bg-emerald-100 dark:bg-emerald-900",
                iconColor: "text-emerald-500",
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
            <div className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-600 dark:to-green-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Recycle className="text-green-200" size={32} />
                        <h1 className="text-4xl font-bold">Nutrient Cycle</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-green-100">
                        Biology - Advanced
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-green-700 hover:bg-green-50"
                            onClick={() => scrollToSection("science")}
                        >
                            Continue <ChevronRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="text-green-700 border-white hover:bg-green-600"
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
                                        Explore nature's recycling system
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
                            <Card className={`border-l-4 border-green-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                                            <Recycle className="text-green-500" size={24} />
                                        </div>
                                        <CardTitle>Decomposed Matter Recycled</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        In the Quran God brings the living from the dead, and brings the dead from the living. Skeptics claim that whoever wrote the Quran made a mistake; bringing the living form the dead is impossible. Today scientists confirm that dead organisms recycle back into living organisms.
                                    </p>
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Nutrient Cycle
                                        </h3>
                                        <p className="italic">
                                            "The nutrient cycle is nature's recycling system. All forms of recycling have feedback loops that use energy in the process of putting material resources back into use. Recycling in ecology is regulated to a large extent during the process of decomposition. Ecosystems employ biodiversity in the food webs that recycle natural materials, such as mineral nutrients, which includes water. Recycling in natural systems is one of the many ecosystem services that sustain and contribute to the well-being of human societies."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://en.wikipedia.org/wiki/Nutrient_cycle"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wikipedia, Nutrient Cycle, 2022
                                            </a>
                                        </div>
                                    </div>

                                    <p>
                                        Nutrients recycle back into living organisms. This was known recently, however this was portrayed in the Quran 1400 years before it was discovered.
                                    </p>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Scientific Evidence */}
                        <section id="science" className="scroll-mt-20">
                            <Card className={`border-l-4 border-blue-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                                            <Leaf className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-green-500" /> Decomposition Process
                                            </h3>
                                            <p>
                                                When organisms die, decomposers break down their remains into simpler substances. These nutrients are then absorbed by plants and reintroduced into the food chain.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Star size={16} className="text-blue-500" /> Nutrient Transfer
                                            </h3>
                                            <p>
                                                Essential elements like carbon, nitrogen, and phosphorus move from dead organisms to soil, water, and air, then back to living organisms in a continuous cycle.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800 mt-4">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-blue-500" /> Modern Understanding
                                        </h3>
                                        <p>
                                            Modern science confirms that the matter from dead organisms doesn't disappear but transforms and becomes part of new living things. This understanding of how "life comes from death" is a fundamental principle in ecology and biology. The nutrients from decomposed matter are essential for new life to emerge.
                                        </p>
                                    </div>

                                    <p className="font-medium mt-4">
                                        The scientific concept of nutrients cycling from dead organisms back into living ones gives new meaning to the Quranic phrase "bringing the living from the dead, and the dead from the living."
                                    </p>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Quranic Reference */}
                        <section id="quran" className="scroll-mt-20">
                            <Card className={`border-l-4 border-emerald-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                                            <BookOpen className="text-emerald-500" size={24} />
                                        </div>
                                        <CardTitle>Quranic Reference</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/6/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/95"
                                                className="text-emerald-600 dark:text-emerald-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 6:95
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "It is Allah Who splits the grain and the seed. He brings the living from the dead, and He brings the dead from the living. Such is Allah. So how could you deviate?"
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ٩٥ إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَىٰ ۖ يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَمُخْرِجُ الْمَيِّتِ مِنَ الْحَيِّ ۚ ذَٰلِكُمُ اللَّهُ ۖ فَأَنَّىٰ تُؤْفَكُونَ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
                                            Key Point
                                        </Badge>
                                        <p className="mt-3">
                                            The seeds are organic matter and Allah "brings the living from the dead, and brings the dead from the living." This description aligns perfectly with what we now understand as the nutrient cycle - where decomposed matter becomes the building blocks for new life.
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
                                            How could an illiterate man who lived 1400 years ago have known about nutrient cycle?
                                        </h3>
                                        <p>
                                            The Quranic description of "bringing the living from the dead, and the dead from the living" aligns remarkably with our modern understanding of the nutrient cycle. This scientific concept was only fully understood in recent centuries, raising questions about the source of this knowledge in a text from 1400 years ago.
                                        </p>
                                    </div>

                                    <p>
                                        While ancient people observed that plants grew better in soil enriched with organic matter, the specific understanding of how dead organisms decompose and their nutrients become part of new life is a relatively recent scientific discovery. The cycle of matter in ecosystems, where atoms and molecules transition between living and non-living states, provides a scientific perspective on the ancient description found in the Quran.
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
                        <Button className="rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700">
                            <Recycle size={24} />
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
                        <Recycle className="text-green-600" size={18} />
                        <h3 className="text-lg font-medium">Nature's Recycling System</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The continuous flow of nutrients between living and non-living matter reveals the interconnected nature of all life on Earth.
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

export default NutrientCycle;