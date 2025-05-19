/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    ChevronRight,
    Quote,
    HelpCircle,
    ArrowUp,
    Dna,
    Fish,
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

const Evolution = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "Divine Evolution",
                icon: Dna,
                color: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-500",
            },
            {
                id: "humans",
                title: "Humans & Their Origin",
                icon: Footprints,
                color: "bg-green-100 dark:bg-green-900",
                iconColor: "text-green-500",
            },
            {
                id: "animals",
                title: "Animal Evolution",
                icon: Fish,
                color: "bg-amber-100 dark:bg-amber-900",
                iconColor: "text-amber-500",
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
                        <Dna className="text-blue-200" size={32} />
                        <h1 className="text-4xl font-bold">Evolution</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-blue-100">
                        Biology - Extreme
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button
                            className="bg-white text-blue-700 hover:bg-blue-50"
                            onClick={() => scrollToSection("intro")}
                        >
                            Continue <ChevronRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="text-blue-700 border-white hover:bg-blue-600"
                            onClick={() => scrollToSection("humans")}
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
                                        Explore the divine nature of evolution
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
                                            <Dna className="text-blue-500" size={24} />
                                        </div>
                                        <CardTitle>Divine Evolution</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p className="font-medium">
                                        1400 years ago, the concept of evolution was unknown to humanity, yet the Quran presented a perspective on evolution that aligns with modern scientific discoveries.
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Evolution in the Quranic Context
                                        </h3>
                                        <p>
                                            Unlike the Biblical account that suggests Adam and Eve were created on Earth approximately 6,000 years ago, the Quran presents a different narrative. It states that Adam and Eve were created in Paradise (the same Paradise promised to believers in the afterlife), and only later were they sent to Earth to succeed the existing human-like species, Homo sapiens.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Humans & Their Origin */}
                        <section id="humans" className="scroll-mt-20">
                            <Card className={`border-l-4 border-green-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                                            <Footprints className="text-green-500" size={24} />
                                        </div>
                                        <CardTitle>Humans & Their Origin</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-green-500" /> Quran 2:30
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "And your Lord said to the angels 'I will make a successor on Earth', They said 'How can You make [a successor] someone who corrupts and sheds blood while we praise and sanctify You?' He said 'I know what you don't know.'"
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً ۖ قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        This verse suggests that when Adam and Eve were still in Paradise, there were already beings on Earth who were "shedding blood and causing mischief." This indicates that Adam and Eve were not the first beings on Earth but were sent as successors to the existing population.
                                    </p>

                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-6">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-green-500" /> Quran 56:58-62
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "Do you see your own semen? Do you create it or Do We create it? We decreed the death among you and nobody beat Us to alter your form and raise you in forms that you do not perceive. And you have figured out your first form if only you would remember."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    أَفَرَأَيْتُمْ مَا تُمْنُونَ
                                                    أَأَنْتُمْ تَخْلُقُونَهُ أَمْ نَحْنُ الْخَالِقُونَ
                                                    نَحْنُ قَدَّرْنَا بَيْنَكُمُ الْمَوْتَ وَمَا نَحْنُ بِمَسْبُوقِينَ
                                                    عَلَىٰ أَنْ نُبَدِّلَ أَمْثَالَكُمْ وَنُنْشِئَكُمْ فِي مَا لَا تَعْلَمُونَ
                                                    وَلَقَدْ عَلِمْتُمُ النَّشْأَةَ الْأُولَىٰ فَلَوْلَا تَذَكَّرُونَ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        The phrase "change of form from our own semen" describes a process reminiscent of evolution. The Arabic term "Ghair Masbookeen" (nobody beat us to it) suggests that evolution is a divinely guided process rather than a random occurrence.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Dna size={16} className="text-blue-500" /> Chromosomal Evidence
                                            </h3>
                                            <p>
                                                Modern science reveals that humans have 46 chromosomes while apes have 48. This chromosomal difference poses a challenge to the theory that humans directly evolved from apes.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Quote size={16} className="text-green-500" /> Quranic Perspective
                                            </h3>
                                            <p>
                                                The Quran mentions that God created Adam and Eve in Paradise from clay and later brought them to Earth as successors to the existing population (Homo sapiens).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800 mt-6">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-green-500" /> Quran 6:133
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "Your Lord, the Rich and Merciful, if He wishes, can discard you and succeed you with 'WHATEVER' He wishes; Just like He created you from the seed of another clan."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    وَرَبُّكَ الْغَنِيُّ ذُو الرَّحْمَةِ ۚ إِنْ يَشَأْ يُذْهِبْكُمْ وَيَسْتَخْلِفْ مِنْ بَعْدِكُمْ مَا يَشَاءُ كَمَا أَنْشَأَكُمْ مِنْ ذُرِّيَّةِ قَوْمٍ آخَرِينَ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        The verse uses the Arabic word "ma" (meaning "whatever" or "what"), which specifically refers to non-humans, rather than "men" (who/whoever) which would refer to humans. This suggests that God could make our descendants non-human, just as our ancestors were.
                                    </p>

                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800 mt-6">
                                        <h3 className="font-medium mb-2">Chromosome Fusion Theory Challenges</h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Human Chromosome 2 Fusion Never Happened

                                            One of the more popular arguments used for humans supposedly evolving from apes is known as the chromosome fusion. The impetus for this concept is the evolutionary problem that apes have an extra pair of chromosomes—humans have 46 while apes have 48...

                                            However, the fusion signature was somewhat of an enigma based on the real fusions that occasionally occur in nature. All documented fusions in living animals involve a specific type of sequence called satellite DNA (satDNA) located in chromosomes and found in breakages and fusions. The fusion signature on human chromosome 2 was missing this telltale satDNA.

                                            Another problem is the small size of the fusion site, which is only 798 DNA letters long. Telomere sequences at the ends of chromosomes are 5,000 to 15,000 bases long. If two chromosomes had fused, you should see a fused telomere signature of 10,000 to 30,000 bases long—not 798."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://www.icr.org/article/human-chromosome-2-fusion-never-happened"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                ICR, Human Chromosome 2 Fusion Never Happened, 2020
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Animal Evolution */}
                        <section id="animals" className="scroll-mt-20">
                            <Card className={`border-l-4 border-amber-500`}>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                                            <Fish className="text-amber-500" size={24} />
                                        </div>
                                        <CardTitle>Animal Evolution</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <p>
                                        While the Quran suggests that humans did not evolve directly from apes, it does confirm the evolution of animals and presents the progression of life from water to land.
                                    </p>

                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-amber-500" /> Quran 24:45
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "Allah created every living creature from water. Some of them crawl on their bellies, and some walk on two legs, and others walk on four. Allah creates whatever He wills. Allah is Capable of everything."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِنْ مَاءٍ ۖ فَمِنْهُمْ مَنْ يَمْشِي عَلَىٰ بَطْنِهِ وَمِنْهُمْ مَنْ يَمْشِي عَلَىٰ رِجْلَيْنِ وَمِنْهُمْ مَنْ يَمْشِي عَلَىٰ أَرْبَعٍ ۚ يَخْلُقُ اللَّهُ مَا يَشَاءُ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center my-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg max-w-2xl">
                                            <img
                                                src="/api/placeholder/600/400"
                                                alt="Evolution progression"
                                                className="w-full rounded-lg mb-4"
                                            />
                                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                                Evolutionary progression from water to land creatures
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        Some have questioned the order presented in the Quran, arguing that animals evolved to walk on four legs before any walked on two. However, recent scientific discoveries have confirmed the Quranic order is accurate.
                                    </p>

                                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800 mt-6">
                                        <h3 className="font-medium mb-2">Ancient Fish With Legs - Scientific Confirmation</h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Ancient Fish With Legs, Tiktaalik Roseae, May Be Missing Evolutionary Link

                                            The closest known relative of the ancestors of limbed animals such as humans likely evolved the foundation for rear legs even before the move to land, researchers say. This ancestor may have even been able to walk underwater, they added. These findings reveal that a key step in the evolution of hind limbs happened in fish, challenging previous theories that such appendages evolved only after the move to land."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://www.huffpost.com/entry/ancient-fish-with-legs-evolution_n_4590028"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Huff Post, Ancient Fish With Legs, Tiktaalik Roseae, May Be Missing Evolutionary Link, 2017
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex justify-center my-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg max-w-2xl">
                                            <img
                                                src="/api/placeholder/600/400"
                                                alt="Tiktaalik Roseae"
                                                className="w-full rounded-lg mb-4"
                                            />
                                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                                Tiktaalik Roseae - Ancient fish with leg-like appendages
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        These scientific discoveries confirm that ancient fish walked on two legs long before land animals walked on four, validating the order presented in the Quran: creatures from water, some crawling on bellies, some walking on two legs, and others on four legs.
                                    </p>
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
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about evolution?
                                        </h3>
                                        <p>
                                            The Quranic descriptions of the origins of humans and the progression of animal life present a fascinating alignment with modern scientific discoveries. The specific mention of evolution from water, the sequence of locomotion development, and the nuanced perspective on human origins raise thought-provoking questions about the source of this knowledge.
                                        </p>
                                    </div>

                                    <p>
                                        The Quran offers a unique perspective on evolution that both aligns with and differs from modern scientific theories. It presents evolution as a divinely guided process rather than a random occurrence, acknowledging the development of animal life from water while suggesting a special creation for humans.
                                    </p>

                                    <p>
                                        Modern scientific discoveries, such as the Tiktaalik Roseae fossil and advanced genomic research, continue to provide new insights that sometimes validate aspects of the Quranic narrative that would have been impossible to know through human means 1400 years ago.
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
                            <Dna size={24} />
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
                        <Dna className="text-blue-600" size={18} />
                        <h3 className="text-lg font-medium">Divine Design in Development</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        Evolution, when viewed through the lens of the Quran, offers a unique perspective that connects ancient wisdom with modern scientific discovery.
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

export default Evolution;