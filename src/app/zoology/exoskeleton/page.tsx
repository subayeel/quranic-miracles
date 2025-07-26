/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Bug,
  GlassWater,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const ExoskeletonAnts = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Crystal Armor",
        icon: Bug,
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: GlassWater,
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
              <Bug
                className="text-emerald-600 dark:text-emerald-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Exoskeleton
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
                  Crystal Armor
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The protective exoskeletons of insects represent one of
                  nature's most successful evolutionary innovations. These
                  external structures provide protection, support, and serve as
                  attachment points for muscles, enabling complex movements and
                  behaviors.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/30 border-l-4 border-emerald-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Nature's Engineering Marvel
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Exoskeletons are composed of complex materials that combine
                    strength with flexibility, creating lightweight yet durable
                    protective shells. These structures have enabled arthropods
                    to become one of the most successful groups on Earth.
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
                    "The arthropod exoskeleton is a multi-layered structure that
                    provides mechanical support, protection from predators and
                    the environment, and serves as an attachment site for
                    muscles. Its composition includes chitin, proteins, and
                    various mineral deposits that create a remarkably efficient
                    protective system."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Modern Entomology Research
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Scientific research has revealed the sophisticated engineering
                  principles behind exoskeletal structures, inspiring modern
                  materials science and biomimetic technologies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Bug
                        size={20}
                        className="text-emerald-500 dark:text-emerald-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Structural Integrity
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Exoskeletons provide superior protection while maintaining
                      flexibility at joints, allowing for complex movements and
                      behaviors.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <GlassWater
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Material Properties
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The combination of chitin and proteins creates a
                      lightweight yet incredibly strong material that rivals
                      modern composites.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  These discoveries have led to breakthrough applications in
                  materials science, robotics, and protective equipment design,
                  demonstrating the remarkable engineering found in nature.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran contains references to the protective structures
                  that Allah has created for His creatures, highlighting the
                  wisdom in natural design.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Divine Design in Nature
                  </h3>
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    The Quran frequently references the intricate designs found
                    in creation, encouraging reflection on the wisdom and
                    precision evident in natural structures like the protective
                    coverings of insects.
                  </p>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The precision and functionality of exoskeletal structures
                    demonstrate the remarkable engineering principles embedded
                    in natural design, reflecting divine wisdom in creation that
                    continues to inspire human innovation and scientific
                    advancement.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">Engineering Excellence</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The sophisticated design of exoskeletons demonstrates the
                    remarkable engineering principles found throughout nature,
                    providing protection, support, and functionality in ways
                    that continue to inspire modern technology and materials
                    science.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Fascinating Question
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The intricate design and engineering excellence of exoskeletal
                  structures raises profound questions about the nature of
                  biological design:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could such sophisticated engineering principles emerge
                    without conscious design and planning?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The level of engineering sophistication found in
                    exoskeletons - from their multi-layered structure to their
                    optimal balance of strength and flexibility - demonstrates
                    design principles that human engineers are only beginning to
                    understand and replicate.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Natural Engineering</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The precision and efficiency of exoskeletal design
                      surpasses many human engineering achievements, suggesting
                      underlying principles of optimal design embedded in
                      nature.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Biomimetic Innovation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Modern technology increasingly draws inspiration from
                      exoskeletal structures, validating the sophisticated
                      engineering principles found in these natural designs.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  The study of exoskeletons continues to reveal the remarkable
                  precision and wisdom embedded in natural design, inviting us
                  to reflect on the source of such sophisticated engineering
                  principles in the biological world.
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
              <Bug
                className="text-emerald-600 dark:text-emerald-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Natural Engineering
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The sophisticated engineering of exoskeletons continues to inspire
              innovation and reflection on design in nature.
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
          className="bg-emerald-600 dark:bg-emerald-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ExoskeletonAnts;
