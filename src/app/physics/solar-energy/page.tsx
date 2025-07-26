/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  Sun,
  Zap,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const SolarEnergyComponent = () => {
  const [activeSection, setActiveSection] = useState("solar-intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "solar-intro",
        title: "The Sun's 'Loan'",
        icon: Sun,
      },
      {
        id: "solar-science",
        title: "Conservation of Energy",
        icon: Zap,
      },
      {
        id: "solar-future",
        title: "The Ultimate Repayment",
        icon: Sparkles,
      },
      {
        id: "solar-quran",
        title: "Quranic Mention",
        icon: BookOpen,
      },
      {
        id: "solar-reflection",
        title: "Food for Thought",
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
              <Sun className="text-purple-600 dark:text-purple-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Solar Energy
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Physics • Medium
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
              <section id="solar-intro" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Sun's 'Loan'
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Did you know that in the Quran, it's described as if the sun
                  'lends' us something that we later have to 'repay'? Some
                  people in the past might have thought this idea sounded
                  strange. Why would the sun lend anything? And what would we
                  possibly repay to it?
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    An Ancient Concept, Modern Implications
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This intriguing description in the Quran seems to touch upon
                    a concept remarkably similar to what modern science
                    understands about energy. Let's explore how!
                  </p>
                </div>
              </section>

              {/* Scientific Principle */}
              <section id="solar-science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Conservation of Energy
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  In physics, one of the most fundamental principles is the law
                  of conservation of energy.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 dark:bg-blue-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In physics and chemistry, the law of conservation of energy
                    states that the total energy of an isolated system remains
                    constant; it is said to be conserved over time. Energy can
                    neither be created nor destroyed; rather, it can only be
                    transformed or transferred from one form to another."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Conservation_of_energy"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Conservation of energy, 2024
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Zap
                        size={20}
                        className="text-amber-500 dark:text-amber-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Energy Transformations
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Energy is constantly changing forms around us – from light
                      to heat, chemical to kinetic, and so on.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Sun
                        size={20}
                        className="text-yellow-500 dark:text-yellow-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Maintaining Balance
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      What's crucial is that the total amount of energy in a
                      closed system stays the same. You can't create extra
                      energy, nor does it just disappear.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This means if you gain energy from somewhere (like heat from
                  the sun), you must eventually lose that same amount of energy
                  elsewhere. It's like a cosmic balance!
                </p>
              </section>

              {/* The Sun's Future */}
              <section id="solar-future" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Ultimate Repayment
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now here's where the concept of the sun's "loan" becomes truly
                  profound...
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    The Sun's Lifecycle
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Our sun is currently about{" "}
                    <strong>4.6 billion years old</strong> and is roughly
                    halfway through its main sequence life. In approximately{" "}
                    <strong>5 billion years</strong>, something remarkable will
                    happen.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    As the sun ages, it will start running out of hydrogen fuel
                    in its core. When this happens, it will begin to expand
                    dramatically, becoming what astronomers call a{" "}
                    <strong>red giant star</strong>.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <ArrowUp
                        size={20}
                        className="text-red-500 dark:text-red-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Massive Expansion
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The sun will expand to roughly <strong>100 times</strong>{" "}
                      its current size, potentially reaching beyond the orbit of
                      Venus and possibly even Earth.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Zap
                        size={20}
                        className="text-red-500 dark:text-red-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Complete Consumption
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Earth, along with all the energy it has accumulated over
                      billions of years, will be completely engulfed and
                      absorbed back into the sun.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 p-8 rounded-lg border border-red-100 dark:border-red-800 mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center text-red-700 dark:text-red-300">
                    The Perfect "Repayment"
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-4">
                    Every bit of energy the sun has "lent" to Earth over 4.6
                    billion years – the energy that powers our weather, grows
                    our plants, drives photosynthesis, and sustains all life –
                    will be returned to the sun when Earth is consumed.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center font-medium">
                    This is the ultimate demonstration of energy conservation:
                    the sun will literally reclaim every joule of energy it has
                    ever given to our planet.
                  </p>
                </div>
              </section>

              {/* Quranic Mention */}
              <section id="solar-quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/18/17"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 18:17
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "You would have seen the sun, when it rose, veering away
                        from their cave towards the right, and when it sets, it
                        lends them from the left, as they lay in the midst of
                        the cave. That was one of Allah's wonders."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١٧ وَتَرَى الشَّمْسَ إِذَا طَلَعَتْ تَزَاوَرُ عَنْ
                        كَهْفِهِمْ ذَاتَ الْيَمِينِ وَإِذَا غَرَبَتْ
                        تَقْرِضُهُمْ ذَاتَ الشِّمَالِ وَهُمْ فِي فَجْوَةٍ مِنْهُ
                        ۚ ذَٰلِكَ مِنْ آيَاتِ اللَّهِ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Term Analysis
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic word used here is "تَقْرِضُهُمْ" (taqridhuhum),
                    which comes from the root "قَرْض" (qardh), meaning a loan.
                    So, the verse says the sun "lends" them from the left.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    In Islamic understanding, a loan is typically expected to be
                    repaid without any interest or alteration – you repay
                    exactly what was lent. Applying this to the sun's "loan," it
                    suggests that whatever is received from the sun must be
                    given back later, precisely the same amount.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The metaphor of a loan is scientifically perfect –
                    describing both the principle of energy conservation and
                    foreshadowing the ultimate fate of our planet when the sun
                    reclaims all the energy it has ever given.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="solar-reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Food for Thought
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Here's where things get really interesting!
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone in the 7th century have possibly described
                    the interaction with the sun's energy using a concept that
                    so accurately mirrors both the principle of energy
                    conservation AND the ultimate fate of Earth?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The idea that energy is conserved – gained and then lost
                    without alteration – is a cornerstone of modern physics. It
                    wasn't understood or scientifically formulated until
                    centuries after the 7th century. Even more remarkably, our
                    understanding of stellar evolution and the red giant phase
                    is only a few centuries old.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 p-8 rounded-lg border border-red-200 dark:border-red-700 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center text-red-700 dark:text-red-300">
                    The Complete Picture
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    The Quranic verse describes the sun as "lending" – implying
                    that what is lent must be repaid in full. This concept works
                    on multiple levels:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      <strong>Daily cycle:</strong> Energy absorbed during the
                      day is radiated back at night
                    </li>
                    <li>
                      <strong>Seasonal cycle:</strong> Energy stored and
                      released through natural processes
                    </li>
                    <li>
                      <strong>Ultimate cosmic cycle:</strong> All energy ever
                      received from the sun will be literally reclaimed when the
                      sun consumes Earth as a red giant
                    </li>
                  </ul>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-center">
                    The metaphor of a loan is scientifically perfect – down to
                    the final cosmic "collection" billions of years in the
                    future.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This multilayered scientific accuracy in a 7th-century text
                  invites profound reflection on the origin of this knowledge.
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
                Energy's Enduring Principles
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              From the daily rhythm of solar energy to the ultimate cosmic
              cycles of stellar evolution, the deep principles governing the
              universe resonate across time, inviting us to explore the profound
              connections between ancient wisdom and modern science.
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

export default SolarEnergyComponent;
