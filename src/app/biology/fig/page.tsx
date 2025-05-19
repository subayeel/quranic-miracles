/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    ChevronRight,
    Sprout,
    BookOpen,
    Quote,
    HelpCircle,
    TreePine,
    ArrowUp,
    Sparkles,
    Mountain,
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

const FigDomestication = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "First Domesticated",
                icon: Sprout,
                color: "bg-green-100 dark:bg-green-900",
                iconColor: "text-green-600",
            },
            {
                id: "science",
                title: "Scientific Evidence",
                icon: TreePine,
                color: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-500",
            },
            {
                id: "quran",
                title: "Quranic Reference",
                icon: BookOpen,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
            },
            {
                id: "reflection",
                title: "Reflection",
                icon: HelpCircle,
                color: "bg-orange-100 dark:bg-orange-900",
                iconColor: "text-orange-500",
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
            <div className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 text-white py-12 relative">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url('/api/placeholder/1920/400')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="flex items-center gap-3 mb-4">
                        <TreePine className="text-green-200" size={32} />
                        <h1 className="text-4xl font-bold">Fig</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-green-100">
                        Biology - Intermediate
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
                                        Explore fig tree domestication
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
                            <Card className={`border-l-4 border-green-600`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                                            <Sprout className="text-green-600" size={24} />
                                        </div>
                                        <CardTitle>First Domesticated Fruit Tree</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        The humble fig holds a special place in human history as our very first domesticated fruit tree - a fact that was unknown just centuries ago.
                                    </p>
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Ancient Assumption vs. Modern Discovery
                                        </h3>
                                        <p className="mb-3">
                                            <strong>1400 years ago</strong>, Arabs thought that dates were the first trees to be domesticated by humans. This seemed logical since date palms were so important to their civilization and survival in desert regions.
                                        </p>
                                        <p>
                                            <strong>Today we know</strong> this assumption was incorrect. Modern archaeological and genetic research has revealed that the fig tree was actually the first fruit tree domesticated by humans, occurring around 6,500 years ago in the Near East.
                                        </p>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                        <h4 className="font-medium mb-2">What is domestication?</h4>
                                        <p className="text-sm">
                                            Domestication is the process by which humans selectively breed plants or animals over generations to enhance desired traits. For fruit trees, this means selecting for sweeter fruit, better yields, and easier cultivation.
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
                                            <TreePine className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-blue-500" /> Archaeological Research
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300 mb-3">
                                            "Origins of cultivation and domestication
                                            <br /><br />
                                            The origin of the common fig is debated. Some believe it to be indigenous to Western Asia and then spread by human activity throughout the Mediterranean. Despite uncertainty about its geographic origins, most archaeobotanists agree that the domestication of the fig tree occurred around 6500 years ago in the Near East. <strong>Scholars agree that the domestication of the fig tree came long before the domestication of other fruit crops like grapes, olives, and dates.</strong>"
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://en.wikipedia.org/wiki/Domestication_of_Ficus_carica"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wikipedia, Domestication of Ficus carica, 2021
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-green-500" /> Timeline Discovery
                                            </h3>
                                            <p className="text-sm">
                                                Archaeological evidence from sites like Gilgal I in the Jordan Valley shows fig cultivation predated other crops by thousands of years, revolutionizing our understanding of early agriculture.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Mountain size={16} className="text-brown-500" /> Order of Domestication
                                            </h3>
                                            <p className="text-sm">
                                                Modern research confirms: Fig trees (6,500 years ago) came before grapes, olives, and dates. This order was unknown to ancient civilizations but is precisely reflected in certain historical texts.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        This chronological order of fruit tree domestication was only discovered through modern archaeological and genetic research methods, yet it appears to have been known 1400 years ago.
                                    </p>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Quranic Reference */}
                        <section id="quran" className="scroll-mt-20">
                            <Card className={`border-l-4 border-purple-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <BookOpen className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Quranic Reference</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/95/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/1"
                                                className="text-purple-600 dark:text-purple-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 95:1-3
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "By the fig and the olive. And Mount Sinai. And this safe land."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ١ وَالتِّينِ وَالزَّيْتُونِ<br />
                                                    ٢ وَطُورِ سِينِينَ<br />
                                                    ٣ وَهَٰذَا الْبَلَدِ الْأَمِينِ<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 mb-2">
                                                Plant Order
                                            </Badge>
                                            <p className="text-sm">
                                                <strong>Fig before olive</strong> - This matches the scientific discovery that figs were domesticated thousands of years before olives.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 mb-2">
                                                Geological Order
                                            </Badge>
                                            <p className="text-sm">
                                                <strong>Mountain before land</strong> - Mountains form millions of years before desert plains, confirming this represents a chronological sequence.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p>
                                            The sequence in this verse appears to follow a chronological order of events: the domestication of figs came before olives, and mountains formed before the desert lands. This precise ordering aligns perfectly with modern scientific understanding.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Reflection */}
                        <section id="reflection" className="scroll-mt-20">
                            <Card className={`border-l-4 border-orange-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                                            <HelpCircle className="text-orange-500" size={24} />
                                        </div>
                                        <CardTitle>Reflection</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p>
                                        The remarkable accuracy of ancient chronological knowledge raises fascinating questions about the intersection of text, tradition, and scientific discovery:
                                    </p>

                                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about fig domestication?
                                        </h3>
                                        <p className="mb-4">
                                            The precise chronological ordering in this ancient text - placing figs before olives in domestication, and mountains before desert lands in geological formation - demonstrates knowledge that wasn't scientifically confirmed until recent archaeological and geological research.
                                        </p>
                                        <p>
                                            This alignment between ancient text and modern science invites deeper contemplation about the sources of knowledge across time and cultures.
                                        </p>
                                    </div>

                                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                        <h4 className="font-medium mb-2">Historical Context</h4>
                                        <p className="text-sm">
                                            In 7th century Arabia, people naturally assumed dates were the first domesticated fruit trees due to their central importance in desert civilizations. The knowledge that figs actually came first wasn't available through conventional means of that time period.
                                        </p>
                                    </div>

                                    <p>
                                        Whether viewed through the lens of divine revelation, preserved ancient wisdom, or remarkable coincidence, the precise correspondence between this 1400-year-old text and modern archaeological findings continues to intrigue scholars and believers alike.
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
                            <TreePine size={24} />
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
                        <Sparkles className="text-green-600" size={18} />
                        <h3 className="text-lg font-medium">Ancient Knowledge, Modern Discovery</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The story of the fig tree connects us to our earliest agricultural ancestors and the timeless wisdom embedded in ancient texts.
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

export default FigDomestication;