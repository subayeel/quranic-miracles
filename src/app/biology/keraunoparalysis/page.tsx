/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Star,
    ChevronRight,
    Zap,
    BookOpen,
    Quote,
    Droplet,
    HelpCircle,
    Activity,
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

const KeraunoparalysisComponent = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const contents = useMemo(() => {
        return [
            {
                id: "intro",
                title: "What is Keraunoparalysis?",
                icon: Zap,
                color: "bg-yellow-100 dark:bg-yellow-900",
                iconColor: "text-yellow-500",
            },
            {
                id: "science",
                title: "Medical Understanding",
                icon: Activity,
                color: "bg-red-100 dark:bg-red-900",
                iconColor: "text-red-500",
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
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-yellow-600 dark:to-orange-700 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="text-yellow-200" size={32} />
                        <h1 className="text-4xl font-bold">Keraunoparalysis</h1>
                    </div>
                    <p className="text-xl max-w-2xl text-yellow-100">
                        Biology - Extreme
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button
                            className="bg-white text-orange-700 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                            onClick={() => scrollToSection("science")}
                        >
                            Continue <ChevronRight size={16} />
                        </button>
                        <button
                            className="border border-white text-white hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition-colors"
                            onClick={() => scrollToSection("intro")}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Navigation Sidebar */}
                    <div className="hidden lg:block col-span-1">
                        <div className="sticky top-8">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-semibold">Topic Guide</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        Explore lightning's effects on the human body
                                    </p>
                                </div>
                                <div className="p-0">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-12">
                        {/* Introduction */}
                        <section id="intro" className="scroll-mt-20">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 border-l-4 border-l-yellow-500">
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                                            <Zap className="text-yellow-500" size={24} />
                                        </div>
                                        <h2 className="text-2xl font-bold">Caused by Lightning Strike</h2>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="font-medium">
                                        Keraunoparalysis is a rare but fascinating medical condition that reveals the incredible power of lightning and its effects on the human body.
                                    </p>
                                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800">
                                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                            <AlertTriangle className="text-yellow-600" size={20} />
                                            Understanding Keraunoparalysis
                                        </h3>
                                        <p>
                                            Keraunoparalysis is a temporary paralysis caused by lightning strike. When lightning strikes a person, it can cause their muscles to become completely paralyzed for several hours, even though they remain conscious and aware of their surroundings.
                                        </p>
                                    </div>
                                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <h3 className="font-bold text-lg mb-3">
                                            Ancient Knowledge, Modern Discovery
                                        </h3>
                                        <p>
                                            <strong>1400 years ago nobody knew about keraunoparalysis however it was portrayed in the Quran.</strong> This medical condition was only scientifically understood and named in recent decades, yet ancient texts described the phenomenon with remarkable accuracy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Scientific Evidence */}
                        <section id="science" className="scroll-mt-20">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 border-l-4 border-l-red-500">
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                                            <Activity className="text-red-500" size={24} />
                                        </div>
                                        <h2 className="text-2xl font-bold">Medical Understanding</h2>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-100 dark:border-red-800">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Quote size={16} className="text-red-500" /> Medical Definition
                                        </h3>
                                        <p className="italic text-gray-700 dark:text-gray-300">
                                            "Lightning injury
                                            <br />
                                            <br />
                                            Lightning strikes can also induce a transient paralysis known as keraunoparalysis. Signs and symptoms of keraunoparalysis include lack of pulse, pallor or cyanosis, and motor and sensory loss in the extremities. However, keraunoparalysis usually resolves within a few hours."
                                        </p>
                                        <div className="mt-3 text-sm">
                                            <a
                                                href="https://en.wikipedia.org/wiki/Lightning_injury"
                                                className="text-red-600 dark:text-red-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wikipedia, Lightning Injury, 2020
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Activity size={16} className="text-blue-500" /> Symptoms
                                            </h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• Complete paralysis of limbs</li>
                                                <li>• Loss of sensation in extremities</li>
                                                <li>• Weak or absent pulse</li>
                                                <li>• Pale or bluish skin color</li>
                                                <li>• Inability to move or stand</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                                <Star size={16} className="text-green-500" /> Recovery
                                            </h3>
                                            <p className="text-sm">
                                                The good news is that keraunoparalysis is temporary. Most patients recover full function within a few hours to a day after the lightning strike, as the nervous system gradually returns to normal.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-medium">
                                        A lightning strike can cause temporary paralysis. This medical phenomenon was only recently understood and documented, however it was described in the Quran 1400 years before it was scientifically discovered.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Quranic Reference */}
                        <section id="quran" className="scroll-mt-20">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 border-l-4 border-l-green-500">
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                                            <BookOpen className="text-green-500" size={24} />
                                        </div>
                                        <h2 className="text-2xl font-bold">Quranic Reference</h2>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
                                        <h3 className="font-medium mb-3">
                                            <a
                                                href="https://www.quranwow.com/#/ch/51/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/44"
                                                className="text-green-600 dark:text-green-400 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Quran 51:44-45
                                            </a>
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:space-x-6">
                                            <div className="md:w-1/2">
                                                <p className="italic mb-4">
                                                    "But they defied the command of their Lord, so the lightning struck them as they looked on. They could not rise up, nor could they find help."
                                                </p>
                                            </div>
                                            <div className="md:w-1/2 font-arabic text-right text-lg">
                                                <p dir="rtl">
                                                    ٤٤ فَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ فَأَخَذَتْهُمُ الصَّاعِقَةُ وَهُمْ يَنْظُرُونَ<br />
                                                    ٤٥ فَمَا اسْتَطَاعُوا مِنْ قِيَامٍ وَمَا كَانُوا مُنْتَصِرِينَ<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">
                                            Key Insight
                                        </span>
                                        <p className="mt-3">
                                            "<strong>They could not rise up</strong>" - today we understand why this happens. When lightning strikes a person, it causes keraunoparalysis - a temporary paralysis that prevents the victim from standing or moving, exactly as described in this ancient verse.
                                        </p>
                                    </div>

                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h4 className="font-medium mb-2">The Scientific Connection</h4>
                                        <p className="text-sm">
                                            The Quranic description perfectly matches what modern medicine knows about keraunoparalysis: victims of lightning strikes are conscious ("as they looked on") but unable to move or stand up ("could not rise up"). This specific detail about the inability to stand is a hallmark symptom of keraunoparalysis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Reflection */}
                        <section id="reflection" className="scroll-mt-20">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 border-l-4 border-l-purple-500">
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                                            <HelpCircle className="text-purple-500" size={24} />
                                        </div>
                                        <h2 className="text-2xl font-bold">Reflection</h2>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p>
                                        The correspondence between ancient texts and modern medical understanding invites us to consider the nature of knowledge and observation across time:
                                    </p>

                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-bold text-xl mb-3 text-center">
                                            How could an illiterate man who lived 1400 years ago have known about keraunoparalysis?
                                        </h3>
                                        <p>
                                            The Quranic description includes specific medical details about lightning strike victims: they remain conscious but cannot stand or move. This precise description of keraunoparalysis symptoms was unknown to medical science until recent decades, yet it was recorded with remarkable accuracy 1400 years ago.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h4 className="font-medium mb-2">Historical Context</h4>
                                            <p className="text-sm">
                                                In the 7th century, medical knowledge was limited, and the specific effects of lightning on the human nervous system were completely unknown. The detailed description of paralysis following lightning strikes shows remarkable precision.
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <h4 className="font-medium mb-2">Modern Validation</h4>
                                            <p className="text-sm">
                                                Today's medical research confirms exactly what the Quran described: lightning can cause temporary paralysis while leaving victims conscious. This alignment between ancient text and modern science is striking.
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        This example demonstrates how ancient wisdom and modern science can illuminate each other, encouraging us to approach both traditional texts and scientific discoveries with curiosity and respect.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="rounded-full h-14 w-14 shadow-lg bg-amber-600 hover:bg-amber-700">
                            <Droplet size={24} />
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
                        <Sparkles className="text-yellow-600" size={18} />
                        <h3 className="text-lg font-medium">The Power of Lightning</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        Understanding keraunoparalysis bridges the gap between ancient wisdom and modern medical science.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Back to Top <ArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default KeraunoparalysisComponent;