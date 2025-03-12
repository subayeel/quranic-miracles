"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Star,
    ChevronRight,
    Clock,
    BookOpen,
    Quote,
    HelpCircle,
    Moon,
    ArrowUp,
    Sparkles,
    ArrowDownCircle,
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

const StarlightEvolution = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Stellar Evolution",
                icon: Star,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
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
                title: "Comparative Texts",
                icon: Moon,
                color: "bg-indigo-100 dark:bg-indigo-900",
                iconColor: "text-indigo-500",
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
                        <h1 className="text-4xl font-bold">Starlight</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-indigo-100">
                        Astronomy - Advanced
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
                                        Explore the evolution and luminosity of stars
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
                                        <CardTitle>Stellar Evolution</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        Stars undergo fascinating changes throughout their lifespans. Their
                                        brightness and appearance evolve dramatically over billions of years,
                                        ultimately reaching an end state where they may become invisible to the naked eye.
                                    </p>
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Luminosity Varies With Stage
                                        </h3>
                                        <p>
                                            Stars can end their lives in one of three forms: white/black dwarfs, neutron stars,
                                            or black holes. In each case, their luminosity (brightness) varies dramatically
                                            with their evolutionary stage. The study of these changes is a key part of modern astronomy.
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
                                            <Quote size={16} className="text-blue-500" /> Modern Understanding
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Stellar Evolution
                                            <br /><br />
                                            Stellar Remnants After a star has burned out its fuel supply, its remnants can take one of three forms, depending on the mass during its lifetime.
                                            <br /><br />
                                            -White and black dwarfs
                                            <br /><br />
                                            -Neutron stars
                                            <br /><br />
                                            -Black holes"
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://en.wikipedia.org/wiki/Stellar_evolution#Stellar_remnants"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wikipedia, Stellar Evolution, 2019
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-yellow-500" /> Stellar Lifecycle
                                            </h3>
                                            <p>
                                                Stars begin as giant clouds of gas and dust, undergo fusion for billions of years,
                                                and eventually exhaust their fuel. What's remarkable is that regardless of their
                                                final form, these remnants ultimately become invisible to the naked eye.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Moon size={16} className="text-gray-500" /> Dimming Stars
                                            </h3>
                                            <p>
                                                All stars eventually lose their visible light. White dwarfs fade and cool,
                                                neutron stars are too small to see without powerful telescopes, and black
                                                holes emit no light at all. This dimming is a fundamental aspect of stellar evolution.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        Until recently in human history, it wasn't known that stars would eventually dim
                                        and become invisible. This relatively new scientific understanding aligns with
                                        references found in ancient texts.
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
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/77/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/8"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 77:8
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "If the stars dimmed."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    فَإِذَا النُّجُومُ طُمِسَتْ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Key Point
                                        </Badge>
                                        <p className="mt-3">
                                            The Arabic word "Tumisat" (طُمِسَتْ) refers to the loss of light. The verse indicates
                                            that stars will lose their light, which aligns with our modern understanding that
                                            all stars eventually become invisible to the naked eye in their final stages.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Comparative Texts */}
                        <section id="comparison" className="scroll-mt-20">
                            <Card className="border-l-4 border-indigo-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                                            <Moon className="text-indigo-500" size={24} />
                                        </div>
                                        <CardTitle>Comparative Texts</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p>
                                        Different ancient texts have varying descriptions of stellar phenomena.
                                        Comparing these descriptions with modern astronomy can provide interesting
                                        perspectives on historical understanding of the cosmos.
                                    </p>

                                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                        <h3 className="font-medium mb-3">Biblical References to Stars</h3>
                                        <p>
                                            In Mark 13:24-30, there is a description of stars falling to Earth. This presents
                                            an interesting contrast to what we now know about stellar size and physics.
                                            Our sun is a very small star, and many stars are even larger than our entire solar system.
                                            Modern astronomy shows that stars cannot physically fall to Earth, as Earth would vaporize
                                            upon approaching a star's immense heat and size.
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="http://www.biblegateway.com/passage/?search=mark%2013:24-30&version=NIV"
                                                className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Mark 13:24-30, Bible Gateway
                                            </a>
                                        </div>
                                    </div>

                                    <p>
                                        These comparative perspectives help us understand how different ancient texts
                                        approached astronomical phenomena with the knowledge available at the time.
                                    </p>
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
                                        The study of stars and their evolution continues to inspire wonder and
                                        curiosity. The alignment between ancient texts and modern astronomical
                                        discoveries raises intriguing questions about knowledge transmission throughout history.
                                    </p>

                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about starlight?
                                        </h3>
                                        <p>
                                            This question invites contemplation on the sources of knowledge in ancient texts.
                                            The Quranic reference to stars losing their light (dimming) appears to
                                            align with what modern astronomy has only recently confirmed about stellar evolution.
                                            This connection between ancient text and modern science offers an opportunity for
                                            both scientific and philosophical reflection.
                                        </p>
                                    </div>

                                    <p>
                                        Whether approached from a scientific or spiritual perspective, the cosmic phenomena
                                        of stellar evolution and the ultimate fate of stars continue to captivate humanity's
                                        imagination and drive our quest for understanding the universe.
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
                            <ArrowDownCircle size={24} />
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
                        <h3 className="text-lg font-medium">Exploring Stellar Evolution</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        From brilliant celestial bodies to dimmed remnants, stars tell the story of cosmic time.
                        The universe continues to reveal its secrets, connecting ancient wisdom with modern discovery.
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

export default StarlightEvolution;