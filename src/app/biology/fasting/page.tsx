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
    Award,
    ArrowUp,
    Sparkles,
    Clock,
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

const FastingBenefits = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Medical Benefits",
                icon: FlaskRound,
                color: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-500",
            },
            {
                id: "science",
                title: "Nobel Prize Research",
                icon: Award,
                color: "bg-amber-100 dark:bg-amber-900",
                iconColor: "text-amber-500",
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
                        <Clock className="text-blue-200" size={32} />
                        <h1 className="text-4xl font-bold">Fasting</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-blue-100">
                        Biology - Extreme
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
                                        Explore fasting's health benefits
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
                                        <CardTitle>Medical Benefits</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        Fasting is more than just a spiritual practice - it has profound health benefits that have recently been validated by modern science.
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Ancient Wisdom Confirmed by Science
                                        </h3>
                                        <p>
                                            In the Quran, fasting is described as beneficial for health. Skeptics once claimed that whoever wrote the Quran made a mistake, as fasting was thought to have no benefits. Today, the doctor who discovered the benefits of fasting was awarded the Nobel Prize in Medicine.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Scientific Evidence */}
                        <section id="science" className="scroll-mt-20">
                            <Card className={`border-l-4 border-amber-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                                            <Award className="text-amber-500" size={24} />
                                        </div>
                                        <CardTitle>Nobel Prize Research</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-amber-500" /> Nobel Prize Discovery
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Fasting Research Wins Nobel Prize in Medicine
                                            <br /><br />
                                            The 2016 Nobel Prize for Physiology or Medicine was awarded to Japan's Dr. Yoshinori Ohsumi for his discoveries of the underlying mechanisms of a physiological process called autophagy. Autophagy is a natural process by which the body degrades and recycles damaged cells, proteins and toxins. Autophagy comes from two Greek words, auto meaning "self" and phagy meaning "to eat." This is the body's way of cleaning house. It happens during starvation, calorie restriction, and fasting. If the body fails to engage in autophagy, damaged cells and structures can accumulate dangerously. Autophagy is one method that the body uses to naturally neutralize cancer cells and degrade cells infected by harmful bacteria and viruses... Today, we are learning that intermittent fasting can deliver numerous health benefits."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://lifespa.com/fasting-research-wins-nobel-prize-medicine-right/"
                                                className="text-amber-600 dark:text-amber-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                LifeSpa, Fasting Research Wins Nobel Prize in Medicine. Is it Right for You?, John Douillard, 2018
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-blue-500" /> Health Benefits
                                            </h3>
                                            <ul className="space-y-2 list-disc pl-5">
                                                <li>Decreased diabetes risk</li>
                                                <li>Decreased cardiovascular risk</li>
                                                <li>Improved longevity</li>
                                                <li>Protection against cancer</li>
                                                <li>Reduced risk of neurological concerns</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Star size={16} className="text-amber-500" /> Additional Benefits
                                            </h3>
                                            <ul className="space-y-2 list-disc pl-5">
                                                <li>Decreased inflammation</li>
                                                <li>Balanced lipid levels</li>
                                                <li>Reduced blood pressure</li>
                                                <li>Reduced oxidative stress</li>
                                                <li>Balanced weight</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        These medical benefits of fasting were only recently confirmed by modern science, yet they were mentioned in the Quran 1400 years ago.
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
                                                href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/184"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 2:183-184
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "O you who believe! Fasting is prescribed for you, as it was prescribed for those before you, that you may become righteous. For a specified number of days. But whoever among you is sick, or on a journey, then a number of other days. For those who are able: a ransom of feeding a needy person. But whoever volunteers goodness, it is better for him. But to fast is best for you, if you only knew."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ١٨٣ يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ<br />
                                                    ١٨٤ أَيَّامًا مَعْدُودَاتٍ ۚ فَمَنْ كَانَ مِنْكُمْ مَرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِنْ أَيَّامٍ أُخَرَ ۚ وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ ۖ فَمَنْ تَطَوَّعَ خَيْرًا فَهُوَ خَيْرٌ لَهُ ۚ وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ ۖ إِنْ كُنْتُمْ تَعْلَمُونَ<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Key Point
                                        </Badge>
                                        <p className="mt-3">
                                            <strong>"But to fast is best for you, if you only knew."</strong> This key phrase from the Quran indicates that fasting has benefits beyond just spiritual rewards. This was stated 1400 years before someone won the Nobel Prize for Medicine for discovering the health benefits of fasting.
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
                                        The connection between ancient religious texts and modern scientific discoveries invites us to reflect on the nature of knowledge across time:
                                    </p>

                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about fasting?
                                        </h3>
                                        <p>
                                            The Quranic statement that fasting is "best for you" aligns remarkably with our modern scientific understanding of fasting's numerous health benefits. This specific mention of fasting's positive effects, rather than just its spiritual aspects, raises interesting questions about the source of this knowledge.
                                        </p>
                                    </div>

                                    <p>
                                        While fasting has been practiced in many cultures throughout history, the specific understanding of its profound health benefits through processes like autophagy is a very recent scientific discovery. The alignment between this ancient text and modern Nobel Prize-winning research offers a fascinating perspective on knowledge, revelation, and human health.
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
                            <Clock size={24} />
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
                        <h3 className="text-lg font-medium">Ancient Wisdom, Modern Science</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The healing practice of fasting continues to reveal its secrets, connecting ancient wisdom with Nobel Prize-winning discoveries.
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

export default FastingBenefits;