/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Globe,
  Move,
  Maximize,
  PlusSquare,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const EarthComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Earth: Our Home",
        icon: Globe,
      },
      {
        id: "shape",
        title: "Spherical Shape",
        icon: Globe,
      },
      {
        id: "movement",
        title: "Earth's Motion",
        icon: Move,
      },
      {
        id: "dimensions",
        title: "Diameter & Surface",
        icon: Maximize,
      },
      {
        id: "formation",
        title: "Spreading Out",
        icon: PlusSquare,
      },
      {
        id: "reflection",
        title: "Historical Context",
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
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });
    const currentRefs = sectionRefs.current;
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
              <Globe className="text-teal-600 dark:text-teal-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Earth
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cosmology • Medium
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
                  Earth: Our Home Planet
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  For much of history, prevailing views on the Earth's shape and
                  motion were quite different from what we know today. In the
                  7th century, widespread beliefs often depicted Earth as flat
                  and stationary.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Ancient Views vs. Modern Science
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    While ancient Greek philosophers had proposed a spherical
                    Earth centuries earlier, this knowledge wasn't universally
                    accepted or widely known, especially in the Arabian
                    Peninsula at the time the Quran was revealed. The common
                    cosmology was often geocentric and viewed Earth as a flat
                    disk or solid foundation.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Let's explore how certain verses in the Quran describe the
                  Earth's form and behavior in ways that remarkably align with
                  modern scientific understanding, posing intriguing questions
                  about their origin in the 7th century.
                </p>
              </section>

              {/* Spherical Shape */}
              <section id="shape" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Describing a Sphere
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Consider how the Quran describes the transition between day
                  and night.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/39/5"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 39:5
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "He created the heavens and the earth in truth. He
                        overlaps the night over the day and overlaps the day
                        over the night, and enslaved the sun and the moon. ALL
                        MOVE to a prerecorded destiny. Is He not the Exalted,
                        the Forgiver?"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٥ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۖ
                        يُكَوِّرُ اللَّيْلَ عَلَى النَّهَارِ وَيُكَوِّرُ
                        النَّهَارَ عَلَى اللَّيْلِ ۖ وَسَخَّرَ الشَّمْسَ
                        وَالْقَمَرَ ۖ كُلٌّ يَجْرِي لِأَجَلٍ مُسَمًّى ۗ أَلَا
                        هُوَ الْعَزِيزُ الْغَفَّارُ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Word
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic word used here is "Yukawer يُكَوِّرُ". It comes
                    from the root "Kura كرة", which means "ball". Therefore,
                    "Yukawer" means to make something into a ball or to wrap or
                    coil something around like a turban, forming a rounded
                    shape.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Describing the night and day <em>overlapping</em> or{" "}
                  <em>coiling</em> around each other vividly portrays how this
                  phenomenon happens on a spherical body. On a flat Earth, night
                  and day would simply meet at a line, not overlap in a way that
                  "makes a ball." This description aligns perfectly with the
                  continuous transition from day to night experienced on a
                  rotating sphere.
                </p>
              </section>

              {/* Earth's Motion */}
              <section id="movement" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Is Earth Moving?
                </h2>
                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 mb-8 bg-indigo-50 dark:bg-indigo-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "...and enslaved the sun and the moon. ALL MOVE to a
                    prerecorded destiny..."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Quran 39:5 (Part)
                  </cite>
                </blockquote>
                <div className="mb-8">
                  <span className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Phrase
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The phrase "Kullon Yajree كُلٌّ يَجْرِي" means "ALL MOVE".
                    In Arabic grammar, different forms are used for singular,
                    binary (two), and plural (three or more). If only the sun
                    and moon were being referred to, the binary form "Kulahuma
                    Yajreean كلاهما يجريان" would typically be used.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Since the Quran uses the plural form "Kullon Yajree", meaning
                  "all" (referring to three or more things mentioned), and the
                  context mentions the sun, moon, <em>and</em> the Earth
                  (implied by the description of day/night overlapping{" "}
                  <em>on</em> Earth), this suggests that all three are in
                  motion. At a time when Earth was widely considered static,
                  this verse points to Earth's own movement, aligning with
                  modern understanding of planetary motion.
                </p>
              </section>

              {/* Diameter & Surface */}
              <section id="dimensions" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Mentioning Diameter?
                </h2>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/55/33"
                      className="text-purple-700 dark:text-purple-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 55:33
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "O company of Jinn and man, escape the diameters of the
                        Heavens and the Earth if you can, You won't escape
                        without authority."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٣٣ يَا مَعْشَرَ الْجِنِّ وَالْإِنْسِ إِنِ اسْتَطَعْتُمْ
                        أَنْ تَنْفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ
                        فَانْفُذُوا ۚ لَا تَنْفُذُونَ إِلَّا بِسُلْطَانٍ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Maximize
                        size={20}
                        className="text-purple-500 dark:text-purple-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Spherical Properties
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The Arabic word "Aqtar اقطار" is the plural of "Kutr قطر",
                      which specifically means diameter. Diameters are geometric
                      properties associated with circles or spheres.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Globe
                        size={20}
                        className="text-teal-500 dark:text-teal-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Surface vs. Flat
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The Arabic word "Sateh سطح" means "surface" (of any
                      shape), while "Musattah مسطح" means specifically "flat" -
                      which is not used in the Quran to describe Earth.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mentioning "diameters" of the Earth is highly consistent with
                  the idea of Earth being a spherical body, as suggested by the
                  term "Yukawer" in the previous verse. This concept of Earth
                  having a measurable diameter would have been foreign within a
                  flat-Earth cosmology.
                </p>
              </section>

              {/* Formation */}
              <section id="formation" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Earth's Early Growth
                </h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/50/7"
                      className="text-yellow-700 dark:text-yellow-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 50:7
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And the Earth We have spread it out, and set thereon
                        mountains standing firm, and have produced therein every
                        kind of lovely pairs (of plants)."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٧ وَالْأَرْضَ مَدَدْنَاهَا وَأَلْقَيْنَا فِيهَا
                        رَوَاسِيَ وَأَنْبَتْنَا فِيهَا مِنْ كُلِّ زَوْجٍ بَهِيجٍ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Word
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The phrase "Wal Arda Madadnaha وَالْأَرْضَ مَدَدْنَاهَا"
                    means "And the Earth We have spread it out". The verb
                    "Madda" means to spread out, extend, or increase.
                  </p>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Modern science explains that Earth formed through accretion,
                  starting as small particles and gradually growing by colliding
                  with and accumulating other material. As its radius increased
                  over millions of years, its surface area (which is a function
                  of the radius, A = 4πR² for a sphere) also increased
                  significantly. The description of Earth being "spread out"
                  during its formation aligns well with this scientific
                  understanding of gradual growth and increasing surface area.
                </p>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Connecting Ancient Text and Modern Science
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Let's pause and reflect on these descriptions. In the 7th
                  century, the dominant view in many parts of the world,
                  including the Arabian Peninsula, depicted Earth as flat and
                  immobile. The idea of Earth being a rotating sphere with a
                  measurable diameter, or that it gradually increased in size
                  during its formation, were concepts far beyond the common
                  understanding.
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could these precise descriptions of Earth's spherical
                    nature, its movement, its dimensions, and its formation
                    process be present in a text from 1400 years ago?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    These are details that science has only been able to confirm
                    accurately with advanced tools, telescopes, and space
                    exploration centuries later. The alignment between these
                    Quranic verses and modern scientific knowledge about Earth's
                    fundamental properties invites profound contemplation about
                    the source of this information in the 7th century.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Ancient texts often described Earth as a flat disk under a
                      solid dome, concepts that conflict with a spherical Earth.
                      The Quranic descriptions stand in remarkable contrast.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's science confirms Earth's spherical nature, its
                      rotation, its formation through accretion, and its
                      measurable dimensions - all mentioned in these verses.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  For instance, ancient texts like certain interpretations of
                  the Bible described Earth as a flat disk under a solid dome of
                  the sky (Isaiah 40:22), implying one could see the whole Earth
                  from a high mountain (Matthew 4:8) – concepts that conflict
                  sharply with a spherical Earth. The Quran's descriptions stand
                  in remarkable contrast to these widely held ancient views,
                  presenting details that resonate strongly with our current
                  scientific understanding.
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
              <Globe className="text-teal-600 dark:text-teal-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring the Wonders of Earth
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Our planet holds many secrets, and its ancient descriptions
              continue to spark curiosity and connection with modern
              discoveries.
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

export default EarthComponent;
