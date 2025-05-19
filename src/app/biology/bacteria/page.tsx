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
    Microscope,
    ArrowUp,
    Sparkles,
    ShieldAlert,
    Footprints,
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

const BacteriaComponent = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Microscopic Life",
                icon: Microscope,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
            },
            {
                id: "science",
                title: "Scientific Evidence",
                icon: FlaskRound,
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
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-700 dark:to-purple-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Microscope className="text-purple-200" size={32} />
                        <h1 className="text-4xl font-bold">Bacteria</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-purple-100">
                        Biology - Advanced
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-purple-700 hover:bg-purple-50"
                            onClick={() => scrollToSection("science")}
                        >
                            Continue <ChevronRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="text-purple-700 border-white hover:bg-purple-600"
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
                                        Explore the microscopic world of bacteria
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
                            <Card className={`border-l-4 border-purple-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <Microscope className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Microscopic Organisms</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        Bacteria are microscopic single-celled organisms that exist everywhere around us - invisible to the naked eye but playing crucial roles in our world.
                                    </p>
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Ancient Knowledge, Modern Discovery
                                        </h3>
                                        <p>
                                            <strong>1400 years ago nobody knew about bacteria however it was portrayed in the Quran.</strong> Back then, nobody believed that there are organisms too small to be seen by the naked eye. Today we know this understanding was incomplete - bacteria are microscopic and spread everywhere, including on the surfaces we touch daily.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Microscope size={16} className="text-purple-500" /> Size & Scale
                                            </h3>
                                            <p>
                                                Bacteria are typically 0.5-5.0 micrometers in size - thousands of times smaller than the width of a human hair. A single drop of water can contain millions of bacteria.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Star size={16} className="text-purple-500" /> Ubiquitous Presence
                                            </h3>
                                            <p>
                                                Bacteria exist virtually everywhere on Earth - in soil, water, air, and on all surfaces. They can survive in extreme conditions from boiling springs to frozen Antarctica.
                                            </p>
                                        </div>
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
                                            <FlaskRound className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Evidence</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium mb-3 flex items-center gap-2">
                                            <Quote size={16} className="text-blue-500" /> Research on Shoe Bacteria
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "How Gross Is it to Wear Your Shoes in the House?
                                            <br /><br />
                                            In 2016, a study by researchers at the University of Arizona set the germophobic world on fire with a report that said the average shoe sole is covered with 421,000 bacteria and that 90 percent of those bacteria transfer directly to a clean tile floor on first contact. A 2017 study on shoe bacteria by the University of Houston showed that more than 26 percent of shoes examined test positive for C. diff, a bacteria that causes a potentially deadly super diarrhea. That's more than triple the amount typically found in kitchens and bathrooms."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://www.vice.com/en_us/article/435ymn/wearing-shoes-inside-house-bacteria"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Vice, How Gross Is it to Wear Your Shoes in the House?, 2018
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <ShieldAlert size={16} className="text-red-500" /> Bacterial Contamination
                                            </h3>
                                            <p>
                                                Modern studies show that shoe soles harbor hundreds of thousands of bacteria, including harmful pathogens like C. difficile. These bacteria transfer to clean surfaces on first contact.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Footprints size={16} className="text-orange-500" /> Transfer Rate
                                            </h3>
                                            <p>
                                                Research demonstrates that 90% of bacteria on shoe soles transfer directly to clean floors on first contact, making shoes a significant vector for bacterial contamination.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        Bacteria are microscopic and highly concentrated on shoes. Shoes transfer bacteria to clean tile floors on first contact. This was only known recently, however this concept was addressed in the Quran 1400 years before it was scientifically discovered.
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
                                                href="https://www.quranwow.com/#/ch/20/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/12"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 20:12
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "I am your Lord. Take off your shoes. You are in the sacred valley of Tuwa."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ١٢ إِنِّي أَنَا رَبُّكَ فَاخْلَعْ نَعْلَيْكَ ۖ إِنَّكَ بِالْوَادِ الْمُقَدَّسِ طُوًى
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Key Insight
                                        </Badge>
                                        <p className="mt-3">
                                            God ordered Moses to remove his shoes in order not to desecrate the sacred place. Today we understand why from a scientific perspective - shoes carry vast amounts of bacteria and other microorganisms that can contaminate clean environments. The instruction to remove shoes in sacred spaces aligns perfectly with our modern understanding of bacterial transmission.
                                        </p>
                                    </div>

                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border border-amber-100 dark:border-amber-800 mt-4">
                                        <h4 className="font-medium mb-2">Cultural Context</h4>
                                        <p>
                                            While removing shoes indoors is practiced in many cultures for cleanliness, the specific Quranic context emphasizes the sanctity of the space. The scientific understanding of bacterial contamination provides a modern lens through which to view this ancient practice.
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
                                        The intersection of ancient wisdom and modern microbiology offers fascinating insights into knowledge, cleanliness, and respect for sacred spaces:
                                    </p>

                                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about bacteria?
                                        </h3>
                                        <p>
                                            The practice of removing shoes to maintain the sanctity of sacred spaces, as instructed in the Quran, aligns remarkably with our modern understanding of bacterial contamination. At a time when the existence of microscopic organisms was unknown, this guidance provided both spiritual and practical benefits that science would later validate.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h4 className="font-medium mb-2">Scientific Perspective</h4>
                                            <p>
                                                Modern microbiology has revealed that shoes are indeed vectors for bacterial transmission, carrying hundreds of thousands of microorganisms that can contaminate clean surfaces instantly.
                                            </p>
                                        </div>

                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h4 className="font-medium mb-2">Historical Context</h4>
                                            <p>
                                                In the 7th century, the concept of microscopic life was entirely unknown. The scientific discovery of bacteria wouldn't occur until the invention of the microscope over 1000 years later.
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        This convergence between ancient religious practice and modern scientific understanding invites contemplation about the sources of knowledge, the wisdom embedded in traditional practices, and the relationships between spiritual purity and physical cleanliness. Whether viewed from a religious, scientific, or cultural perspective, the instruction to remove shoes in sacred spaces demonstrates a sophisticated understanding of cleanliness that transcends its historical context.
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
                        <Button className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700">
                            <Microscope size={24} />
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
                        <Sparkles className="text-purple-600" size={18} />
                        <h3 className="text-lg font-medium">The Invisible World Around Us</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        Understanding the microscopic world of bacteria bridges ancient wisdom with modern science, revealing insights about cleanliness, health, and respect for sacred spaces.
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

export default BacteriaComponent;