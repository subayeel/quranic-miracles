/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles,
  Activity,
  BookOpen,
  HelpCircle,
  ChevronRight,
  ArrowUp,
  Zap,
} from "lucide-react";

const SkinNerves = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Skin & Pain Sensation",
        icon: Sparkles,
      },
      {
        id: "science",
        title: "Nerves: The Body's Alert System",
        icon: Activity,
      },
      {
        id: "quran",
        title: "Mentioned in the Quran",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Putting it Together",
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
              <Zap className="text-red-600 dark:text-red-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Skin Nerves
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
                  Skin and the Sense of Pain
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Our skin is an incredible organ, protecting us and connecting
                  us to the world through touch, pressure, temperature, and
                  importantly, pain. Have you ever wondered how we feel that
                  sharp pinch or the heat from a stove? It all comes down to
                  tiny helpers in our skin: the nerve endings!
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Feeling the Heat
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Pain, especially burning pain, is a crucial signal that
                    tells our body something is wrong. This sensation isn't felt
                    evenly throughout our tissues; it's primarily the job of the
                    specialized nerve endings located in our outer layers of
                    skin.
                  </p>
                </div>
              </section>

              {/* Scientific Explanation */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Nerves: The Body's Alert System
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Our skin is packed with millions of nerve endings. Think of
                  them as tiny sensors connected to a vast network that sends
                  messages all the way to your brain! Different nerve endings
                  sense different things, and some are specifically designed to
                  detect painful stimuli like extreme heat or cold, sharp
                  objects, or intense pressure.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Pain Signals Need Nerves
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    When you touch something hot, these nerve endings in your
                    outer skin get activated and send a rapid electrical signal
                    through your nerves up to your spinal cord and then to your
                    brain. Your brain processes this signal and interprets it as
                    pain, prompting you to pull away instantly!
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    However, here's a key point: if the skin is severely burned
                    and the nerve endings are destroyed, the signal pathway is
                    broken. Without those functional nerve endings, no message
                    is sent to the brain, and surprisingly, the intense pain
                    sensation goes away, even though the tissue damage is
                    severe. This is why severe burns might initially be less
                    painful than moderate ones after the nerves are destroyed.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Skin's Crucial Role</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The ability to feel pain, particularly the burning
                      sensation, is highly concentrated in the skin due to the
                      density of pain receptors (nociceptors) located there.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Loss of Sensation</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Damage to the skin and its nerves, such as from severe
                      burns, results in a loss of pain sensation because the
                      signals cannot be transmitted to the brain.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Understanding that pain from burning is felt *via* the skin's
                  nerve endings, and that destroying these nerves removes the
                  sensation, is a detail that modern medicine has fully grasped.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Mentioned in the Quran
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now, let's look at a verse from the Quran, revealed in the 7th
                  century, at a time when detailed knowledge of anatomy and
                  nerve function was simply not available to the general
                  populace, or even advanced scholars, in the way we understand
                  it today.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/4/56"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 4:56
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Indeed, those who disbelieve in Our verses - We will
                        drive them into a Fire. Every time their skins are
                        roasted, We will replace them with other skins so that
                        they may taste the punishment. Indeed, Allah is ever
                        Exalted in Might and Wise."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٥٦ إِنَّ الَّذِينَ كَفَرُوا بِآيَاتِنَا سَوْفَ
                        نُصْلِيهِمْ نَارًا كُلَّمَا نَضِجَتْ جُلُودُهُمْ
                        بَدَّلْنَاهُمْ جُلُودًا غَيْرَهَا لِيَذُوقُوا الْعَذَابَ
                        ۗ إِنَّ اللَّهَ كَانَ عَزِيزًا حَكِيمًا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The verse mentions replacing the skins "so that they may
                    taste the punishment." The emphasis is on the skin's role in
                    experiencing the pain of the fire.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">Precise Knowledge</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The verse doesn't just say people will burn; it specifically
                    mentions replacing skins *so they can taste the torture*.
                    This strongly implies that without the replacement skins,
                    the pain sensation would be lost.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Putting it Together
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Consider the knowledge available in the 7th century. While
                  people knew that burns were painful, the intricate mechanism
                  of *why* and *how* pain is felt – specifically the dependence
                  on intact nerve endings in the outer skin layers – was not
                  understood.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone 1400 years ago know that pain sensation
                    from burning requires intact skin?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic verse doesn't just say people will burn; it
                    specifically mentions replacing skins *so they can taste the
                    torture*. This strongly implies that without the replacement
                    skins, the pain sensation would be lost, aligning with the
                    modern scientific understanding that severe burns destroying
                    skin and nerves eliminate pain sensitivity.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The level of detail linking pain sensation directly to the
                  skin and the implication that damaging the skin removes this
                  sensation is remarkable from the perspective of 7th-century
                  knowledge. It raises fascinating questions about the source of
                  such information in the Quran.
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
              <Sparkles className="text-red-600 dark:text-red-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring the Body & Beyond
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The complexities of the human body, understood through modern
              science, echo themes found in ancient scripture.
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
          className="bg-red-600 dark:bg-red-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SkinNerves;
