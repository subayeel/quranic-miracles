/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  Activity,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Cpu,
} from "lucide-react";

const BrainFunctions = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Your Amazing Brain",
        icon: Sparkles,
      },
      {
        id: "science",
        title: "Science & The Frontal Lobe",
        icon: Activity,
      },
      {
        id: "quran",
        title: "A Quranic Verse",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "An Intriguing Connection",
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
              <Cpu className="text-cyan-600 dark:text-cyan-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Brain Functions
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Physiology • Medium
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
                  Your Amazing Brain
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Hey there! Let's talk about one of the most incredible things
                  in the universe – your brain! It's a super complex organ, and
                  different parts handle different jobs, from helping you see to
                  deciding what you want for dinner.
                </p>
                <div className="bg-cyan-50 dark:bg-cyan-900/30 border-l-4 border-cyan-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Mapping the Mind
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    For a long time, understanding exactly which part of the
                    brain does what was a big mystery. Scientists and thinkers
                    made educated guesses, but pinpointing the specific function
                    of each region took centuries of study and advancements in
                    technology.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, thanks to amazing tools and research, we know so much
                  more. We've discovered that a certain area right behind your
                  forehead plays a crucial role in complex thinking,
                  decision-making, and... well, let's just say, being creative
                  with the truth sometimes! 😉
                </p>
              </section>

              {/* Scientific Understanding */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Science & The Frontal Lobe
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Let's zoom in on the front part of your brain, the frontal
                  lobe, specifically the prefrontal cortex. For ages, some
                  thought this area might handle vision, simply because it's
                  located near the eyes. But science has shown us the real
                  picture!
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Prefrontal Cortex
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The prefrontal cortex is like the brain's command center for
                    higher-level thinking. It's involved in planning,
                    personality, decision-making, and social behavior. And yes,
                    studies have linked it to the complex process of
                    constructing and telling lies.
                  </p>
                </div>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Liars showed a relatively widespread increase in white
                    matter (23-36%) in orbitofrontal, middle and inferior, but
                    not superior, frontal gyri compared with antisocial and
                    normal controls. This white matter increase may predispose
                    some individuals to pathological lying."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Yang et al., Br J Psychiatry. 2007
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">White Matter & Lying</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Research has found physical differences in the brains of
                      people who lie compulsively, with increased white matter
                      in their prefrontal cortex.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Brain Communications</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      White matter helps different parts of the brain
                      communicate, suggesting increased connections in this area
                      might play a role in habitual lying.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  So, modern science points to the prefrontal area, located in
                  the forehead region, as being significantly involved in lying.
                  This is a relatively recent discovery in the grand scheme of
                  human history!
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Quranic Verse
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now, let's look at a verse from the Quran, a text revealed in
                  the 7th century. It speaks about the consequence of rejecting
                  truth and describes a specific part of the body.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/96/16"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 96:16
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "[He was told] - a lying, sinful forehead (nasiyah)."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٦ نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic word "nasiyah" (نَاصِيَةٍ) refers to the front
                    part of the head, specifically the forehead or forelock
                    area. The verse describes this forehead as "lying" and
                    "sinful" ("kādhibatin khāṭi'ah" كَاذِبَةٍ خَاطِئَةٍ).
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The verse directly associates lying and sinfulness with this
                    specific region of the head, which aligns remarkably with
                    what modern neuroscience has only recently confirmed about
                    the prefrontal cortex's role in lying.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  An Intriguing Connection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Here's where things get really interesting! We've seen that
                  modern science, with its advanced tools and studies, has
                  pinpointed the prefrontal cortex (located in the forehead
                  area) as being central to the process of lying.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a text from the 7th century refer to a "lying,
                    sinful forehead"?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, understanding of brain anatomy and
                    function was extremely limited. The idea that a specific
                    behavior like lying could be linked to a particular, subtle
                    part of the forehead area was completely unknown. This
                    knowledge was simply not available to people at that time.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The fact that the Quran connects lying and sinfulness to the
                  "nasiyah" (forehead/forelock) aligns remarkably with what
                  modern neuroscience has only recently confirmed about the
                  prefrontal cortex's role in lying. This correlation between an
                  ancient religious text and contemporary scientific discovery
                  invites us to pause and reflect on the source of such
                  knowledge.
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
              <Sparkles
                className="text-cyan-600 dark:text-cyan-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring the Mind
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Connections between ancient wisdom and modern discoveries continue
              to inspire wonder.
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
          className="bg-cyan-600 dark:bg-cyan-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BrainFunctions;
