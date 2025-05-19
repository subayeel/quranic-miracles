/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Heart,
    ChevronRight,
    Baby,
    BookOpen,
    Quote,
    HelpCircle,
    Users,
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

const BreastfeedingComponent = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Social Bonding",
                icon: Heart,
                color: "bg-pink-100 dark:bg-pink-900",
                iconColor: "text-pink-500",
            },
            {
                id: "nutrition",
                title: "Nutritional Science",
                icon: Baby,
                color: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-500",
            },
            {
                id: "quran-duration",
                title: "Quranic Guidance",
                icon: BookOpen,
                color: "bg-green-100 dark:bg-green-900",
                iconColor: "text-green-500",
            },
            {
                id: "bonding-science",
                title: "Bonding Research",
                icon: Users,
                color: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-500",
            },
            {
                id: "quran-bond",
                title: "Breaking of Bonds",
                icon: Quote,
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
            <div className="bg-gradient-to-r from-pink-500 to-rose-700 dark:from-pink-600 dark:to-rose-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Heart className="text-pink-200" size={32} />
                        <h1 className="text-4xl font-bold">Breastfeeding</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-pink-100">
                        Biology - Advanced
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-pink-700 hover:bg-pink-50"
                            onClick={() => scrollToSection("nutrition")}
                        >
                            Continue <ChevronRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="text-pink-700 border-white hover:bg-pink-600"
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
                                        Explore breastfeeding's profound significance
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
                            <Card className={`border-l-4 border-pink-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                                            <Heart className="text-pink-500" size={24} />
                                        </div>
                                        <CardTitle>Social Bonding Through Breastfeeding</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        Breastfeeding is far more than just nourishment - it creates the strongest social bond known to humanity, connecting mother and child in ways that modern science is only beginning to understand.
                                    </p>
                                    <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Ancient Wisdom Meets Modern Discovery
                                        </h3>
                                        <p>
                                            1400 years ago, nobody understood the deep psychological and social connections formed through breastfeeding. Yet the Quran spoke of this profound bond and its importance, long before modern science could explain why it matters so much for both mother and child.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Nutritional Science */}
                        <section id="nutrition" className="scroll-mt-20">
                            <Card className={`border-l-4 border-blue-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                                            <Baby className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Nutritional Science</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-blue-500" /> World Health Organization
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Breast milk is the natural first food for babies, it provides all the energy and nutrients that the infant needs for the first months of life, and it continues to provide up to half or more of a child's nutritional needs during the second half of the first year, and up to one-third during the second year of life."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="http://www.who.int/nutrition/topics/exclusive_breastfeeding/en/"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                World Health Organization, Breastfeeding, 2018
                                            </a>
                                        </div>
                                    </div>

                                    <p>
                                        As babies grow and their nutritional needs increase, breast milk alone becomes insufficient. By the second year of life, breast milk can only provide about one-third of the nutrients the growing child needs. This natural progression explains why additional foods become necessary around this time.
                                    </p>

                                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Sparkles size={16} className="text-blue-500" /> The Perfect Timeline
                                        </h3>
                                        <p>
                                            Modern nutritional science has revealed the precise timeline of breastfeeding benefits - exactly matching what was described 1400 years ago in the Quran.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Quranic Guidance on Duration */}
                        <section id="quran-duration" className="scroll-mt-20">
                            <Card className={`border-l-4 border-green-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                                            <BookOpen className="text-green-500" size={24} />
                                        </div>
                                        <CardTitle>Quranic Guidance on Breastfeeding Duration</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/2/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/233"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 2:233
                                            </a>
                                        </h3>
                                        <div className="space-y-4">
                                            <p className="italic">
                                                "Mothers may nurse their infants for two whole years, for those who desire to complete the nursing-period. It is the duty of the father to provide for them and clothe them in a proper manner. No soul shall be burdened beyond its capacity. No mother shall be harmed on account of her child, and no father shall be harmed on account of his child. The same duty rests upon the heir. If the couple desire weaning, by mutual consent and consultation, they commit no error by doing so. You commit no error by hiring nursing-mothers, as long as you pay them fairly. And be wary of Allah, and know that Allah is Seeing of what you do."
                                            </p>
                                            <div className="font-arabic text-right text-lg" dir="rtl">
                                                <p>
                                                    ٢٣٣ وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ ۖ لِمَنْ أَرَادَ أَنْ يُتِمَّ الرَّضَاعَةَ ۚ وَعَلَى الْمَوْلُودِ لَهُ رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِالْمَعْرُوفِ ۚ لَا تُكَلَّفُ نَفْسٌ إِلَّا وُسْعَهَا ۚ لَا تُضَارَّ وَالِدَةٌ بِوَلَدِهَا وَلَا مَوْلُودٌ لَهُ بِوَلَدِهِ ۚ وَعَلَى الْوَارِثِ مِثْلُ ذَٰلِكَ ۗ فَإِنْ أَرَادَا فِصَالًا عَنْ تَرَاضٍ مِنْهُمَا وَتَشَاوُرٍ فَلَا جُنَاحَ عَلَيْهِمَا ۗ وَإِنْ أَرَدْتُمْ أَنْ تَسْتَرْضِعُوا أَوْلَادَكُمْ فَلَا جُنَاحَ عَلَيْكُمْ إِذَا سَلَّمْتُمْ مَا آتَيْتُمْ بِالْمَعْرُوفِ ۗ وَاتَّقُوا اللَّهَ وَاعْلَمُوا أَنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Key Insight
                                        </Badge>
                                        <p className="mt-3">
                                            The Quran specifically mentions "two whole years" (حَوْلَيْنِ كَامِلَيْنِ) as the optimal duration for breastfeeding - a timeframe that perfectly aligns with modern nutritional science and WHO recommendations.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Bonding Research */}
                        <section id="bonding-science" className="scroll-mt-20">
                            <Card className={`border-l-4 border-purple-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <Users className="text-purple-500" size={24} />
                                        </div>
                                        <CardTitle>Scientific Research on Mother-Baby Bonding</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p>
                                        While nutritional benefits were somewhat understood historically, the profound psychological and social bonding aspects of breastfeeding were completely unknown until very recently.
                                    </p>

                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-medium mb-3 flex items-center gap-2">
                                            <Quote size={16} className="text-purple-500" /> Breakthrough Research
                                        </h3>
                                        <h4 className="font-bold mb-2">Is Breast Milk the Key to Mother-Baby Bonding?</h4>
                                        <p className="italic text-gray-700 dark:text-gray-300 mb-3">
                                            "The secret to mother-baby bonding might be breast milk, according to new research that determines that breast-feeding mothers are more likely than formula-feeding moms to bond with their infants in the months after they are born. They also demonstrate stronger brain responses when they hear their baby cry, according to a study published in the May issue of the Journal of Child Psychology and Psychiatry...
                                        </p>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            While participants lay in a scanner and listened to clips of their own baby and an unknown child crying, researchers tracked what areas of their brains lit up. All mother's brains were more active when listening to their own baby's cry, but the changes in the breast-feeding mothers' relevant brain regions were far more significant."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="http://healthland.time.com/2011/05/20/is-breast-milk-the-key-to-mother-baby-bonding/"
                                                className="text-purple-600 dark:text-purple-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Time, Is Breast Milk the Key to Mother-Baby Bonding?, 2011
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Heart size={16} className="text-pink-500" /> The Strongest Social Bond
                                        </h3>
                                        <p>
                                            Modern neuroimaging studies reveal that breastfeeding creates the most powerful social bond known to science - stronger brain responses, deeper emotional connections, and more intense maternal instincts than any other human relationship.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Breaking of Bonds - Final Hour */}
                        <section id="quran-bond" className="scroll-mt-20">
                            <Card className={`border-l-4 border-orange-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                                            <Quote className="text-orange-500" size={24} />
                                        </div>
                                        <CardTitle>The Breaking of the Strongest Bond</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p>
                                        The Quran describes a time when even the strongest social bond - that between a nursing mother and her infant - will be broken due to the severity of the final Hour.
                                    </p>

                                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/22/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/2"
                                                className="text-orange-600 dark:text-orange-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 22:2
                                            </a>
                                        </h3>
                                        <div className="space-y-4">
                                            <p className="italic">
                                                "When you will see it [final Hour] every nursing mother will discard her infant, and every pregnant woman will miscarry, and you will see the people drunk, even though they are not drunk. But the punishment of Allah is severe."
                                            </p>
                                            <div className="font-arabic text-right text-lg" dir="rtl">
                                                <p>
                                                    ٢ يَوْمَ تَرَوْنَهَا تَذْهَلُ كُلُّ مُرْضِعَةٍ عَمَّا أَرْضَعَتْ وَتَضَعُ كُلُّ ذَاتِ حَمْلٍ حَمْلَهَا وَتَرَى النَّاسَ سُكَارَىٰ وَمَا هُمْ بِسُكَارَىٰ وَلَٰكِنَّ عَذَابَ اللَّهِ شَدِيدٌ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
                                            Profound Insight
                                        </Badge>
                                        <p className="mt-3">
                                            <strong>"Every nursing mother will discard her infant"</strong> - This verse powerfully emphasizes just how severe the final Hour will be by referencing the breaking of the strongest known social bond. Only now do we understand through neuroscience that this is indeed the most powerful emotional connection in human experience.
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
                                        The intersection of ancient text and modern discovery reveals profound insights about human nature and the bonds that define us:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                            <h3 className="font-bold mb-2">Two Years: Perfect Timing</h3>
                                            <p className="text-sm">
                                                The Quran's specific mention of "two whole years" perfectly aligns with WHO recommendations and scientific understanding of when breast milk becomes nutritionally insufficient.
                                            </p>
                                        </div>
                                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                            <h3 className="font-bold mb-2">The Strongest Bond</h3>
                                            <p className="text-sm">
                                                Only in 2011 did neuroscience discover that breastfeeding creates the most powerful social bond. The Quran referenced this strength 1400 years earlier.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about breastfeeding's profound effects?
                                        </h3>
                                        <p>
                                            The Quranic descriptions of breastfeeding encompass both its optimal duration and its role in creating the strongest human social bond - knowledge that modern science has only recently uncovered through advanced neuroimaging and longitudinal studies.
                                        </p>
                                    </div>

                                    <p>
                                        The precision with which the Quran describes both the nutritional timeline and the psychological significance of breastfeeding offers a remarkable example of ancient text aligning with cutting-edge scientific understanding.
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
                        <Button className="rounded-full h-14 w-14 shadow-lg bg-pink-600 hover:bg-pink-700">
                            <Heart size={24} />
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
                        <Heart className="text-pink-600" size={18} />
                        <h3 className="text-lg font-medium">The Bond That Defines Us</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        From the first moments of life, the connection between mother and child through breastfeeding shapes our understanding of love, care, and human bonds.
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

export default BreastfeedingComponent;