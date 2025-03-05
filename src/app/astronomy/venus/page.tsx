/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Orbit,
    ChevronRight,
    BookOpen,
    HelpCircle,
    Quote,
    Star,
    ArrowUp,
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

const AstronomyVenus = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Venus Overview",
                icon: Orbit,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
            },
            {
                id: "historical",
                title: "Historical Context",
                icon: Quote,
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
                        <Orbit className="text-yellow-200" size={32} />
                        <h1 className="text-4xl font-bold">Venus</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-indigo-100">
                        Astronomy - Easy
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-indigo-700 hover:bg-indigo-50"
                            onClick={() => scrollToSection("historical")}
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
                                        Explore Venus across history and text
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
                                            <Orbit className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Venus: A Celestial Mystery</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        Venus, often visible in the sky, has fascinated humanity for millennia.
                                        Once mistaken for a star, it's actually a planet with a rich historical and scientific significance.
                                    </p>
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            A Planet of Misconceptions
                                        </h3>
                                        <p>
                                            Throughout history, Venus was often misunderstood. Ancient cultures
                                            frequently mistook it for a star, not realizing it was a planet
                                            moving through our solar system.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Historical Context */}
                        <section id="historical" className="scroll-mt-20">
                            <Card className="border-l-4 border-blue-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                                            <Quote className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Historical Understanding</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Star size={16} className="text-blue-500" /> Star of Ishtar
                                        </h3>
                                        <p>
                                            The "Star of Ishtar" or "Star of Inanna" was a symbol associated with
                                            the ancient Sumerian goddess. Interestingly, this "star" was actually
                                            the planet Venus. As the Wikipedia entry notes: "The Star of Ishtar
                                            is a symbol of the ancient Sumerian goddess Inanna and her East Semitic
                                            counterpart Ishtar. Alongside the lion, it was one of Ishtar's primary
                                            symbols. Because Ishtar was associated with the planet Venus, the star
                                            is also known as the Star of Venus."
                                        </p>
                                    </div>

                                    <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                        <h3 className="font-medium mb-2">Ancient Worship</h3>
                                        <p>
                                            The Christian Bible mentions that at Abraham's birthplace,
                                            people worshipped the sun, moon, and stars. Archaeological
                                            evidence suggests they specifically worshipped the "Star of Venus"
                                            - which we now know is actually the planet Venus.
                                        </p>
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
                                        <CardTitle>Quranic Perspective</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-3">Quran 6:74-79 - Abraham's Reflection</h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    Abraham said to his father Azar, "Do you take idols for gods?
                                                    I see that you and your people are in evident error."
                                                    Thus We showed Abraham the empire of the heavens and the earth,
                                                    that he might be one of those with certainty.

                                                    When the night fell over him, he saw a planet.
                                                    He said, "This is my lord." But when it set, he said,
                                                    "I do not love those that set."

                                                    Then, when he saw the moon rising, he said,
                                                    "This is my lord." But when it set, he said,
                                                    "If my Lord does not guide me, I will be one of the erring people."

                                                    Then, when he saw the sun rising, he said,
                                                    "This is my lord, this is bigger." But when it set, he said,
                                                    "O my people, I am innocent of your idolatry.
                                                    I have directed my attention towards Him Who created the heavens
                                                    and the earth—a monotheist—and I am not of the idolaters."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ٧٤ وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ آزَرَ أَتَتَّخِذُ أَصْنَامًا آلِهَةً ۖ إِنِّي أَرَاكَ وَقَوْمَكَ فِي ضَلَالٍ مُبِينٍ
                                                    <br />
                                                    ٧٥ وَكَذَٰلِكَ نُرِي إِبْرَاهِيمَ مَلَكُوتَ السَّمَاوَاتِ وَالْأَرْضِ وَلِيَكُونَ مِنَ الْمُوقِنِينَ
                                                    <br />
                                                    ٧٦ فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا ۖ قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ
                                                    <br />
                                                    ٧٧ فَلَمَّا رَأَى الْقَمَرَ بَازِغًا قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَئِنْ لَمْ يَهْدِنِي رَبِّي لَأَكُونَنَّ مِنَ الْقَوْمِ الضَّالِّينَ
                                                    <br />
                                                    ٧٨ فَلَمَّا رَأَى الشَّمْسَ بَازِغَةً قَالَ هَٰذَا رَبِّي هَٰذَا أَكْبَرُ ۖ فَلَمَّا أَفَلَتْ قَالَ يَا قَوْمِ إِنِّي بَرِيءٌ مِمَّا تُشْرِكُونَ
                                                    <br />
                                                    ٧٩ إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا ۖ وَمَا أَنَا مِنَ الْمُشْرِكِينَ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Key Linguistic Point
                                        </Badge>
                                        <p className="mt-3">
                                            The word "Kaukab" (كَوْكَبً) specifically means "planet" in this context.
                                            Those people worshipped the sun, moon, and a planet - not a star.
                                            This precise linguistic distinction is significant, as it accurately
                                            describes the celestial bodies being observed.
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
                                        <CardTitle>A Thought to Ponder</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about Venus?
                                        </h3>
                                        <p>
                                            The precise distinction between a planet and a star, made at a time
                                            when most cultures did not understand the difference, raises intriguing
                                            questions about the source of such knowledge. While ancient people
                                            worshipped Venus as a star, the Quranic text uniquely identified it
                                            as a planet.
                                        </p>
                                    </div>

                                    <p>
                                        This subtle yet significant detail invites reflection on the nature
                                        of knowledge, perception, and understanding of the celestial world.
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
                            <Orbit size={24} />
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
                        <Orbit className="text-indigo-600" size={18} />
                        <h3 className="text-lg font-medium">Exploring Celestial Wonders</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        The mysteries of the cosmos continue to inspire wonder and curiosity.
                        From ancient observations to modern understanding, our journey of discovery never ends.
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

export default AstronomyVenus;