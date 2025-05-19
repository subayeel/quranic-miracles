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
    AlertTriangle,
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

const WhiteHair = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "White Hair & Shock",
                icon: Snowflake,
                color: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-500",
            },
            {
                id: "science",
                title: "Scientific Evidence",
                icon: FlaskRound,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
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
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Snowflake className="text-blue-200" size={32} />
                        <h1 className="text-4xl font-bold">White Hair</h1>
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
                                        Explore the connection between white hair and shock
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
                                            <Snowflake className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>White Hair & Shock</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        For centuries, people believed white hair was exclusively a sign of aging. Modern science has revealed there's much more to the story.
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Beyond Old Age
                                        </h3>
                                        <p>
                                            1400 years ago people thought that white hair comes from old age only. Today we know that this is false. Other factors cause change of color at any age, including psychological and physical shock.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Scientific Evidence */}
                        <section id="science" className="scroll-mt-20">
                            <Card className={`border-l-4 border-purple-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <FlaskRound className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-purple-500" /> Medical Research
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Can your hair turn white as a result of shock?
                                            <br /><br />
                                            Theoretically, any sudden severe shock, accident, illness or change in metabolism could make hair change colour, but it won't be visible right away.
                                            <br /><br />
                                            According to Dr John O'Connor, head of the School of Physical Science and Mathematics at the University of Newcastle in Australia, "once your hair has grown out of its follicle, any emotional or physical trauma will not affect it. This hair is basically dead, like your nails. Yet severe adverse events could cause new hair that grows out a few weeks later to be white."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://www.theregister.co.uk/2006/09/29/the_odd_body_shock_hair/"
                                                className="text-purple-600 dark:text-purple-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                The Register, Can your hair turn white as a result of shock?, 2006
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <AlertTriangle size={16} className="text-red-500" /> Traumatic Events
                                            </h3>
                                            <p>
                                                Modern science confirms that severe shock, trauma, and stress can trigger changes in hair pigmentation. This happens through complex biological mechanisms that affect the hair follicles and melanin production.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Star size={16} className="text-yellow-500" /> Beyond Age
                                            </h3>
                                            <p>
                                                While aging is the most common cause of white hair, research has shown that psychological factors can accelerate or trigger this process at any age, even in children and young adults.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        Shock is now recognized as one of the factors that could turn hair color to white. This scientific understanding was only confirmed recently, yet it was mentioned in the Quran 1400 years before it was discovered.
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
                                                href="https://www.quranwow.com/#/ch/73/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/17"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 73:17
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "So how will you, if you persist in unbelief, save yourself from a Day which will turn the children white-haired?"
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ١٧ فَكَيْفَ تَتَّقُونَ إِنْ كَفَرْتُمْ يَوْمًا يَجْعَلُ الْوِلْدَانَ شِيبًا
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Key Point
                                        </Badge>
                                        <p className="mt-3">
                                            This verse specifically mentions that the shock and terror of Resurrection Day can cause the hair of children to turn white. The reference to children ("al-wildaan" in Arabic) clearly indicates that the cause is not old age. Today we know that extreme shock can indeed turn hair white even in young people.
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
                                        The connection between ancient texts and modern scientific discoveries raises interesting questions about knowledge across time:
                                    </p>

                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about white hair?
                                        </h3>
                                        <p>
                                            The Quranic description of shock causing white hair in children aligns with our modern scientific understanding of how trauma can affect hair pigmentation. This specific mention of hair turning white in young people due to extreme emotional states, rather than only through aging, raises fascinating questions about the source of this knowledge.
                                        </p>
                                    </div>

                                    <p>
                                        While traditional observations might have noted rare cases of premature white hair throughout history, the specific understanding of shock as a causative factor is a relatively recent scientific discovery. The alignment between this ancient text and modern science offers a thought-provoking perspective on knowledge, revelation, and the human body.
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
                        <Sparkles className="text-blue-600" size={18} />
                        <h3 className="text-lg font-medium">Science & Ancient Wisdom</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The phenomenon of shock-induced white hair continues to fascinate scientists, connecting ancient observations with modern discovery.
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

export default WhiteHair;