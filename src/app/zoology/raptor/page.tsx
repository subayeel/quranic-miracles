/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Bird,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Footprints,
  Microscope,
  ArrowUp,
} from "lucide-react";

const RaptorsPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Flesh Eating Birds",
        icon: Bird,
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: Microscope,
      },
      {
        id: "quran",
        title: "The Quranic Account",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "A Fascinating Question",
        icon: HelpCircle,
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

  const getNextSectionId = () => {
    const currentIndex = contents.findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex < contents.length - 1) {
      return contents[currentIndex + 1].id;
    }
    return contents[0].id; // Loop back to first section
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Bird className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Raptors
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Zoology • Medium
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                Share
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                Bookmark
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {/* Introduction */}
          <section id="intro" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Flesh Eating Birds
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              In the Quran some birds catch prey with their feet. Skeptics claim
              that whoever wrote the Quran made a mistake; birds catch prey with
              their bills, not their feet. Today Zoologists confirm that
              raptors, the flesh eating birds, catch prey with their feet.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                How Birds Hunt Their Prey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Most birds catch prey with their bills. However, raptors (birds
                of prey) are special - they use powerful feet equipped with
                talons to catch and kill their prey, contrary to common
                perception in ancient times.
              </p>
            </div>
          </section>

          {/* Scientific Evidence */}
          <section id="science" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              The Scientific Model
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Modern Zoological Understanding
              </h3>
              <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                "Bird of Prey: Birds of prey, or raptors, include species of
                bird that primarily hunt and feed on vertebrates that are large
                relative to the hunter. Additionally, they have keen eyesight
                for detecting food at a distance or during flight, strong feet
                equipped with talons for grasping or killing prey, and powerful,
                curved beaks for tearing flesh."
              </blockquote>
              <div className="text-sm">
                <a
                  href="https://en.wikipedia.org/wiki/Bird_of_prey"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia, Bird of Prey, 2019
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Footprints size={18} className="text-blue-500" />
                  Talons, Not Bills
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Unlike most birds, raptors use their powerful feet and sharp
                  talons to catch, kill, and carry their prey. The bill is
                  primarily used for tearing flesh after the prey is caught.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Bird size={18} className="text-blue-500" />
                  Hawking is Different
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  "Hawking" refers to how birds catch flying insects with their
                  bills. This term comes from the visual similarity to how hawks
                  hunt, though the actual mechanism is quite different.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 inline-block">
                <p className="font-bold text-gray-900 dark:text-gray-100">
                  <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                    Key Insight
                  </span>
                </p>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  Raptors catch prey with their feet
                </p>
              </div>
            </div>
          </section>

          {/* Quranic Reference */}
          <section id="quran" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              The Quranic Account
            </h2>
            <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 pl-6 py-4 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                <a
                  href="https://quran.com/en/22/31"
                  className="text-green-600 dark:text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quran 22:31
                </a>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "Being true to Allah, without associating anything with Him.
                    Whoever associates anything with Allah it is as though he
                    has fallen from the sky, and was snatched by the birds, or
                    was taken down by the wind to a deep place."
                  </blockquote>
                </div>
                <div className="font-arabic text-right text-lg">
                  <p dir="rtl" className="text-gray-700 dark:text-gray-300">
                    ٣١ حُنَفَاءَ لِلَّهِ غَيْرَ مُشْرِكِينَ بِهِ ۚ وَمَنْ
                    يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ
                    فَتَخْطَفُهُ الطَّيْرُ أَوْ تَهْوِي بِهِ الرِّيحُ فِي
                    مَكَانٍ سَحِيقٍ
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                Key Phrase
              </span>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                The phrase "was snatched by the birds" (فَتَخْطَفُهُ الطَّيْرُ)
                is significant. Since these birds attack humans, they would be
                flesh-eating raptors. The Quran describes them as snatching
                humans in mid-air without eating them immediately - implying the
                use of feet rather than bills for the capture.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
                Historical Context
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In 7th century Arabia, detailed zoological knowledge about the
                hunting methods of different bird species would have been
                limited. Most people would have observed common birds catching
                insects or small prey with their bills. The specific hunting
                method of raptors using their feet would not have been widely
                documented or studied.
              </p>
            </div>
          </section>

          {/* Reflection */}
          <section id="reflection" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              A Fascinating Question
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              The distinction between how most birds catch prey (with their
              bills) versus how raptors hunt (with their feet) presents an
              interesting consideration:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                How could man who lived 1400 years ago have known about raptors?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The specific description in the Quran of birds snatching prey
                (in this case, metaphorically a human) aligns with modern
                zoological understanding that raptors use their feet, not their
                bills, to catch prey. This specific hunting behavior wasn't
                systematically documented until modern zoological studies.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              While people in ancient times would have observed birds of prey
              hunting, the specific understanding that raptors catch with their
              feet while most other birds use their bills represents a
              zoological detail that seems to be accurately reflected in the
              Quranic text. This subtle distinction in bird hunting behavior
              appears in a metaphorical passage that aligns with what modern
              science has confirmed about raptor hunting techniques.
            </p>
          </section>
        </div>
      </main>

      {/* Medium-style Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => scrollToSection(getNextSectionId())}
          className="bg-blue-600 dark:bg-blue-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Medium-style Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Bird className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Wonders of Nature
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Discovering connections between ancient texts and modern
              zoological knowledge invites us to reflect on the origins of
              scientific understanding.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm flex items-center space-x-1 mx-auto transition-colors"
            >
              <ArrowUp size={16} />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RaptorsPage;
