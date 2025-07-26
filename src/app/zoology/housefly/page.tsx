/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Bug,
  FlaskConical,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const Housefly = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Housefly's Diet",
        icon: Bug,
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: FlaskConical,
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
    ],
    []
  );

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
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });
    return () => {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Bug className="text-green-600 dark:text-green-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Housefly
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

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid">
          {/* Main Content - Medium Style */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none dark:prose-invert">
              {/* Introduction */}
              <section id="intro" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Housefly's Diet
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The common housefly represents one of nature's most successful
                  scavengers, with feeding habits that might seem simple but are
                  actually quite sophisticated. These small insects play crucial
                  ecological roles and have remarkable biological adaptations
                  for their lifestyle.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Nature's Cleanup Crew
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Houseflies serve as important decomposers in ecosystems,
                    breaking down organic matter and recycling nutrients. Their
                    feeding behavior, while sometimes considered unsanitary by
                    humans, is essential for maintaining ecological balance.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Scientific Model
                </h2>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Houseflies are primarily decomposers, feeding on decaying
                    organic matter, excrement, and various organic wastes. Their
                    feeding mechanism involves regurgitating digestive enzymes
                    onto food sources to break them down externally before
                    consumption, a process known as external digestion."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Entomological Research
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Scientific research has revealed the important ecological role
                  that houseflies play as decomposers and nutrient recyclers in
                  various ecosystems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Bug
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Feeding Behavior
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Houseflies use external digestion, secreting enzymes to
                      break down food sources before consumption, making them
                      efficient at processing decomposing organic matter.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <FlaskConical
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Ecological Role
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      As decomposers, houseflies help break down organic waste
                      and return nutrients to the ecosystem, playing a vital
                      role in nutrient cycling.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  These discoveries have led to a better understanding of insect
                  ecology and the important services that even common insects
                  provide to natural ecosystems.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran makes reference to flies in contexts that
                  demonstrate the wisdom and purpose in all of creation,
                  regardless of how small or seemingly insignificant.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Wisdom in All Creation
                  </h3>
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    The Quran reminds us that even the smallest creatures have
                    their purpose and role in the grand design of creation,
                    serving functions that contribute to the balance and
                    sustainability of life on Earth.
                  </p>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The inclusion of flies in divine discourse highlights that
                    even creatures often considered bothersome or insignificant
                    have important ecological functions and represent aspects of
                    divine wisdom in creation.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">Purpose in Nature</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Modern ecology confirms that houseflies and similar insects
                    serve essential functions as decomposers and nutrient
                    recyclers, validating the concept that all creatures,
                    however small, have important roles in maintaining
                    ecological balance.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Fascinating Question
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The recognition of purpose and function in even the smallest
                  creatures raises profound questions about the nature of
                  ecological design:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could ancient wisdom recognize purpose and design in
                    creatures that modern science is only beginning to fully
                    appreciate?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The ecological importance of decomposer insects like
                    houseflies was not scientifically understood until the
                    development of modern ecology. Yet ancient perspectives
                    often recognized the inherent value and purpose in all
                    living creatures, including those that might seem
                    insignificant.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Ecological Wisdom</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The understanding that all creatures, regardless of size
                      or apparent insignificance, serve important ecological
                      functions aligns with modern scientific discoveries about
                      ecosystem balance.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Universal Purpose</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The concept that every creature has a role and purpose in
                      creation reflects a sophisticated understanding of
                      interconnectedness that science continues to validate.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This recognition of purpose in all creation, including common
                  insects like houseflies, demonstrates a profound understanding
                  of ecological interconnectedness that continues to inspire
                  both scientific inquiry and philosophical reflection.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>

      {/* Medium-style Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Bug className="text-green-600 dark:text-green-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Nature's Cycles
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Even the smallest creatures play vital roles in the intricate web
              of life and ecological balance.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm flex items-center space-x-1 mx-auto"
            >
              <ArrowUp size={16} />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation - Medium Style */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            const nextIndex =
              (contents.findIndex((c) => c.id === activeSection) + 1) %
              contents.length;
            scrollToSection(contents[nextIndex].id);
          }}
          className="bg-green-600 dark:bg-green-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Housefly;
