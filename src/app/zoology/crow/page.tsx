/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Bird,
  Eye,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const CrowMiracle = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Crows and Funerals",
        icon: Bird,
      },
      {
        id: "science",
        title: "The Scientific Model",
        icon: Eye,
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
              <Bird className="text-teal-600 dark:text-teal-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Crow
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
                  Crows and Their Behavior Towards The Dead
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  For a long time, it was commonly believed that only humans had
                  complex behaviors related to death, like holding funerals or
                  burying the deceased. However, fascinating discoveries in the
                  animal kingdom challenge this idea!
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    What Did People Think 1400 Years Ago?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Back in the 7th century, the understanding of animal
                    behavior was very limited. People primarily observed animals
                    for practical reasons or in simple narratives. The concept
                    of animals displaying complex social rituals, especially
                    concerning death, was simply not known or considered
                    possible outside of human behavior.
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
                    "Someone is dead. There's a body, attended by a number of
                    concerned and watchful figures, all in black... The lifeless
                    corpse belongs to a crow, and the dark-garbed group
                    congregating nearby is a gathering of its fellow crows,
                    sometimes referred to as a "murder." That name is
                    particularly apt in this case, as murder is what holds their
                    attention. Their vigilance over a dead crow serves a purpose
                    - one that's a matter of life and death... By sticking close
                    to a crow that was killed, other crows may improve their
                    chances of learning about predators they need to avoid."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — LiveScience, Why Crows Hold Funerals, 2016
                  </cite>
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Today, thanks to scientific observation and research, we've
                  learned something truly remarkable about crows. They exhibit
                  behaviors around their dead that researchers have described as
                  "funerals"!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Bird
                        size={20}
                        className="text-teal-500 dark:text-teal-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Complex Behavior
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Crows gather around a deceased fellow, sometimes even
                      interacting with the body in what scientists call
                      "funeral" behavior.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Eye
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Learning Process
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      This behavior serves a crucial purpose: learning about
                      dangers in their environment, particularly predators that
                      might have killed the crow.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This behavior isn't just random; it's a complex social
                  interaction where crows gather around a deceased fellow.
                  Scientists believe this serves a crucial purpose: learning
                  about dangers in their environment, particularly predators
                  that might have killed the crow.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Quran contains a narrative about the sons of Adam, Cain
                  and Abel, which includes a remarkable detail involving a crow.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/5/31"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 5:31
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Then Allah sent a crow digging the ground, to show him
                        how to cover his brother's corpse. He said, 'Woe to me!
                        I was unable to be like this crow, and bury my brother's
                        corpse.' So he became full of regrets."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٣١ فَبَعَثَ اللَّهُ غُرَابًا يَبْحَثُ فِي الْأَرْضِ
                        لِيُرِيَهُ كَيْفَ يُوَارِي سَوْءَةَ أَخِيهِ ۚ قَالَ يَا
                        وَيْلَتَا أَعَجَزْتُ أَنْ أَكُونَ مِثْلَ هَٰذَا
                        الْغُرَابِ فَأُوَارِيَ سَوْءَةَ أَخِي ۖ فَأَصْبَحَ مِنَ
                        النَّادِمِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Insight
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In this poignant story, after Cain kills his brother Abel,
                    he is left not knowing what to do with the body. Allah sends
                    a crow that digs in the ground, demonstrating a behavior
                    that teaches Cain how to bury his brother's corpse. This
                    shows the crow possessing an instinct or knowledge about
                    dealing with the deceased that the human, at that moment,
                    lacked.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Remarkable Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic narrative depicts the crow possessing and
                    demonstrating knowledge related to handling the dead,
                    serving as a teacher to a human who was ignorant of what to
                    do. This resonates remarkably with modern scientific
                    observations of crows exhibiting complex, funeral-like
                    behaviors around their deceased.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Fascinating Question
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now, let's put this together. In the 7th century, when the
                  Quran was revealed, the prevailing belief was that
                  sophisticated behaviors related to death, like burial rituals,
                  were uniquely human. The detailed scientific understanding of
                  complex social behaviors in animals, let alone specific
                  actions like crows gathering around their dead or digging, was
                  nonexistent.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could a text from the 7th century describe a crow
                    demonstrating burial behavior, a concept about animal
                    conduct only understood scientifically centuries later?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Quranic narrative depicts the crow possessing and
                    demonstrating knowledge related to handling the dead,
                    serving as a teacher to a human who was ignorant of what to
                    do. This resonates remarkably with modern scientific
                    observations of crows exhibiting complex, funeral-like
                    behaviors around their deceased, which includes interacting
                    with the body and the ground.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, complex behaviors related to death
                      were considered uniquely human. The idea that an animal
                      might "hold a funeral" or teach a human about burial would
                      have been extraordinary.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Contemporary research confirms that crows do indeed
                      exhibit sophisticated funeral-like behaviors, validating
                      the ancient narrative about their knowledge of
                      death-related practices.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This correlation raises profound questions about the source of
                  such detailed knowledge in a text from an era when such animal
                  behavior was entirely unknown to people. It's a beautiful
                  example of how observing the world around us, as the Quran
                  often encourages, can reveal wonders that science continues to
                  explore and confirm.
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
              <Bird className="text-teal-600 dark:text-teal-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Nature's Wonders
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The natural world holds many secrets, sometimes reflected in
              ancient wisdom.
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
          className="bg-teal-600 dark:bg-teal-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CrowMiracle;
