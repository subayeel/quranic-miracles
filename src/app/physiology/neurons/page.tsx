/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Brain,
  ChevronRight,
  Microscope,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const NeuronsComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Memory's Secrets",
        icon: Brain,
      },
      {
        id: "science",
        title: "Recent Scientific Discoveries",
        icon: Microscope,
      },
      {
        id: "quran",
        title: "Quranic Perspective",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Reflecting on This Connection",
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
              <Brain
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Neurons
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
                  Memory's Secrets
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When we think of memory, we instantly think of the brain! It's
                  where we store cherished moments, important facts, and
                  everything else we 'remember'. For a long time, science
                  agreed: memory lives in the brain, and only the brain.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Is the Brain the Only Place for Memory?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The conventional understanding has always been that our
                    complex memories, from what we had for breakfast to
                    remembering a loved one's face, are exclusively processed
                    and stored within the intricate network of neurons in our
                    brain. This idea was deeply ingrained in scientific thought.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  However, what if other parts of the body held surprising
                  capabilities we're only just starting to understand? The Quran
                  contains verses that might make us ponder this question from a
                  completely different angle.
                </p>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Recent Scientific Discoveries
                </h2>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Can skin and liver 'remember'? Does our body store memories
                    everywhere? For a long time, memory was thought to be a
                    specialized function of the brain, with our neural circuits
                    and brain cells handling all our memories. But recent
                    research from New York University has turned this assumption
                    on its head. According to this study, even cells outside the
                    brains can store and retrieve memories, opening up a new
                    view of how our entire body participates in memory process.
                    This discovery doesn't just add to our understanding of
                    memory - it could just change how we approach learning and
                    treatment for memory-related disorders."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — TOI, Can skin and liver "remember"? Does our body store
                    memories everywhere?, 2024
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  This groundbreaking research published in 2024 suggests that
                  memory might not be confined solely to the brain. Cells in
                  other parts of the body, including the skin, appear to have
                  the capability to store and access information, a concept
                  previously thought impossible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Cellular Memory</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      It seems that memory, at a fundamental cellular level,
                      might be a more widespread phenomenon throughout the body
                      than just within neural networks.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">New Frontiers</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This opens up exciting new avenues for research in biology
                      and medicine, potentially transforming our understanding
                      of learning, trauma, and even certain diseases.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This idea – that memory isn't just in the brain – is a very
                  modern scientific concept, challenging decades of established
                  understanding.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quranic Perspective: The Testifying Skin
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/41/19"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 41:19-21
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "The Day when Allah's enemies are herded into the Fire,
                        forcibly. Until, when they have reached it, their
                        hearing, and their sight, and their skins will testify
                        against them regarding what they used to do. And they
                        will say to their skins, "Why did you testify against
                        us?" They will say, "Allah, Who made all things speak,
                        made us speak. It is He who created you the first time,
                        and to Him you are returned."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٩ وَيَوْمَ يُحْشَرُ أَعْدَاءُ اللَّهِ إِلَى النَّارِ
                        فَهُمْ يُوزَعُونَ
                        <br />
                        ٢٠ حَتَّىٰ إِذَا مَا جَاءُوهَا شَهِدَ عَلَيْهِمْ
                        سَمْعُهُمْ وَأَبْصَارُهُمْ وَجُلُودُهُمْ بِمَا كَانُوا
                        يَعْمَلُونَ
                        <br />
                        ٢١ وَقَالُوا لِجُلُودِهِمْ لِمَ شَهِدْتُمْ عَلَيْنَا ۖ
                        قَالُوا أَنْطَقَنَا اللَّهُ الَّذِي أَنْطَقَ كُلَّ
                        شَيْءٍ وَهُوَ خَلَقَكُمْ أَوَّلَ مَرَّةٍ وَإِلَيْهِ
                        تُرْجَعُونَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    These verses describe a scene on the Day of Judgment where a
                    person's own body parts – their hearing, sight, and *skins*
                    – will speak and testify against them about their past
                    actions. The people then question their skins, who reply
                    that Allah, who makes all things speak, made them speak.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    For the skin to "testify" about past deeds, it would
                    logically need to have some form of 'knowledge' or 'record'
                    of those actions. In essence, it implies the skin possesses
                    a form of memory or the ability to recall information.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    Ancient Knowledge, Modern Discovery
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    In the 7th century, the intricate biological mechanisms of
                    memory and the idea of cellular memory outside the brain
                    were completely unknown and scientifically impossible to
                    detect or even conceive of with the tools and knowledge
                    available at the time.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflecting on This Connection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  This brings us to a fascinating point of reflection:
                </p>
                <div className="bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could this idea – that memory might exist outside the
                    brain, specifically in the skin – be mentioned in a
                    7th-century text like the Quran?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the 7th century, human understanding of biology and the
                    nervous system was extremely limited. The concept of memory
                    was vaguely associated with the heart or the brain, but the
                    sophisticated understanding of neural networks we have
                    today, let alone the idea of cellular memory outside the
                    brain, was completely unknown and scientifically impossible
                    to detect or even conceive of with the tools and knowledge
                    available at the time.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quranic description of skins testifying implies they
                  retain some record of actions, a concept strikingly parallel
                  to the recent scientific findings that cells outside the brain
                  can store and retrieve memory. From the perspective of someone
                  in the 7th century, attributing the ability to 'testify' about
                  past deeds to skin would have been extraordinary, as all known
                  understanding placed memory firmly within the head.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This correlation between ancient scripture and modern
                  scientific discovery prompts us to think about the source of
                  such knowledge found in the Quran.
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
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Body & Knowledge
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Scientific discovery continues to unveil complexities that
              resonate with ancient texts, inviting us to ponder deeper
              connections.
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
          className="bg-purple-600 dark:bg-purple-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default NeuronsComponent;
