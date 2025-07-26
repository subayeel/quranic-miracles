/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Scroll,
  ChevronRight,
  Building,
  BookOpen,
  MapPin,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const Haman = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Ancient Figure",
        icon: Scroll,
      },
      {
        id: "misconception",
        title: "Historical Misconception",
        icon: Building,
      },
      {
        id: "quran",
        title: "The Quranic Reference",
        icon: BookOpen,
      },
      {
        id: "discovery",
        title: "Archaeological Evidence",
        icon: MapPin,
      },
      {
        id: "reflection",
        title: "Historical Inquiry",
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
              <Scroll
                className="text-amber-600 dark:text-amber-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Haman in Ancient Egypt
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  History • Medium
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
                  A Historical Mystery Solved
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The name Haman appears in both Biblical and Quranic texts, but
                  in strikingly different historical contexts. This difference
                  has been a point of critique against the Quran's historical
                  accuracy. Modern archaeological discoveries, however, have
                  shed new light on this ancient figure.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Haman Across Ancient Texts
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The name Haman appears in the Quran as a high official in
                    ancient Egypt during the time of Moses and Pharaoh, involved
                    in construction projects. This placement differed
                    significantly from the Biblical Haman, who was portrayed as
                    a Persian official many centuries after Moses.
                  </p>
                </div>
              </section>

              {/* Historical Misconception */}
              <section id="misconception" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Misconception
                </h2>
                <blockquote className="border-l-4 border-red-500 pl-6 py-4 mb-8 bg-red-50 dark:bg-red-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "In the Bible's Book of Esther, Haman appears as an
                    assistant to the King of Persia, Xerxes I (Ahasuerus),
                    living approximately 1,000 years after the time of Moses."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Biblical Account
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Biblical Timeline</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The Biblical Haman lived during the Persian Empire (circa
                      5th century BCE).
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Moses' Era</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Moses is traditionally placed in Egypt around the 13th
                      century BCE—nearly 800 years earlier.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">The Critique</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Critics argued this was a chronological error in the
                      Quran.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  For centuries, this apparent discrepancy was cited as evidence
                  that the Quran contained historical errors. During the 7th
                  century when the Quran was revealed, there was no way to
                  verify ancient Egyptian names and titles, as the ability to
                  read hieroglyphs had been lost for over a thousand years.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Reference
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/28/38"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 28:38
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And Pharaoh said to his people: 'I have not known a god
                        for you other than myself; so Haman, light me a fire to
                        bake clay so that I could build a rise high enough,
                        maybe I see Moses' god whom I think is a liar.'"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        وَقَالَ فِرْعَوْنُ يَا أَيُّهَا الْمَلَأُ مَا عَلِمْتُ
                        لَكُمْ مِنْ إِلَٰهٍ غَيْرِي فَأَوْقِدْ لِي يَا هَامَانُ
                        عَلَى الطِّينِ فَاجْعَلْ لِي صَرْحًا لَعَلِّي أَطَّلِعُ
                        إِلَىٰ إِلَٰهِ مُوسَىٰ وَإِنِّي لَأَظُنُّهُ مِنَ
                        الْكَاذِبِينَ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Details
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    According to the Quran, Haman was:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>An official in ancient Egypt during Pharaoh's time</li>
                    <li>
                      Specifically tasked with construction work using baked
                      clay (bricks)
                    </li>
                    <li>
                      Ordered to build a tall structure for Pharaoh to "ascend"
                      to see Moses' God
                    </li>
                  </ul>
                </div>
              </section>

              {/* Archaeological Evidence */}
              <section id="discovery" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Archaeological Evidence
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Modern Egyptologists made a remarkable discovery when
                  translating ancient Egyptian hieroglyphs. They found the name
                  "Haman" mentioned as a high official who worked in
                  construction during the New Kingdom period of ancient
                  Egypt—exactly as described in the Quran.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    Hieroglyphic Discovery
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The hieroglyphic inscription "overseer of the stone masons
                    of Amun Haman" provides compelling evidence that a person
                    named Haman did exist in ancient Egypt with a title closely
                    matching his role as described in the Quran.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Archaeological Record</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Ancient Egyptian inscriptions confirm a person named Haman
                      held a construction-related position in ancient Egypt.
                    </p>
                    <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                      Source: Die aegyptischen Denkmaeler in Miramar, Leo
                      Rienisch
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Construction Role</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Egyptologists found prayers for "the overseer of the stone
                      masons of Amun Haman"—confirming his role in monument
                      construction.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mt-8">
                  <h4 className="font-medium mb-2">
                    Lost Knowledge Rediscovered
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    These archaeological findings are particularly significant
                    because the ability to read Egyptian hieroglyphs was lost
                    shortly after the fall of ancient Egypt and was not
                    recovered until the 19th century, over 1,000 years after the
                    Quran was revealed.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Historical Inquiry
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The archaeological confirmation of Haman's existence in
                  ancient Egypt as a construction official raises an intriguing
                  historical question:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone 1400 years ago have known about Haman?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    In 7th century Arabia, no one could read Egyptian
                    hieroglyphs—this ability had been lost for over a
                    millennium. The Rosetta Stone that eventually enabled their
                    translation wasn't discovered until 1799, and the
                    decipherment wasn't completed until the 1820s. The accurate
                    placement of Haman in ancient Egypt with a specific
                    construction role presents a historical puzzle that defies
                    simple explanation.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">7th Century Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      When the Quran was revealed, detailed knowledge of ancient
                      Egyptian officials and their roles was completely
                      inaccessible.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      What was once considered a historical error has been
                      transformed by archaeology into evidence of historical
                      accuracy.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  The correct mention of Haman's name, location, and
                  professional role—details that were unknowable in the 7th
                  century—presents a remarkable historical correspondence that
                  continues to intrigue scholars today. This connection between
                  ancient scripture and modern archaeological discovery invites
                  thoughtful consideration about the origins of this knowledge.
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
              <Scroll
                className="text-amber-600 dark:text-amber-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Ancient History & Modern Discovery
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Where ancient texts and modern archaeology converge to reveal
              historical insights that bridge millennia.
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
          className="bg-amber-600 dark:bg-amber-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Haman;
