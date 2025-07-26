/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Droplet,
  ChevronRight,
  GlassWater,
  BookOpen,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const SuperionicWater = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Water's Hidden Nature",
        icon: Droplet,
      },
      {
        id: "science",
        title: "Discovering Superionic Water",
        icon: GlassWater,
      },
      {
        id: "quran",
        title: "A Striking Description",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: Sparkles,
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
              <Droplet className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Superionic Water
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Chemistry • Advanced
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
                  Water's Hidden Nature
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  We usually think of water as the clear, life-giving liquid
                  that flows in rivers and oceans. For much of history, people
                  believed water was simply transparent. However, modern science
                  has revealed that under extreme conditions, water can take on
                  surprising forms and characteristics, including a very
                  different appearance.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Beyond the Ordinary
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    While liquid water and ice are familiar, the water molecule
                    (H₂O) can behave in extraordinary ways under conditions far
                    removed from Earth's surface, such as immense pressures and
                    temperatures found deep within planets.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Droplet
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Familiar States
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      We know water as a clear liquid, white ice, and
                      transparent vapor - all forms that are familiar and
                      expected in our daily experience.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <GlassWater
                        size={20}
                        className="text-cyan-500 dark:text-cyan-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Extreme Conditions
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Under extreme temperatures and pressures, water can
                      transform into forms that defy our everyday understanding,
                      including states that are black in color.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Discovering Superionic Water
                </h2>
                <blockquote className="border-l-4 border-cyan-500 pl-6 py-4 mb-8 bg-cyan-50 dark:bg-cyan-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Superionic water, also called superionic ice or ice XVIII
                    is a phase of water that exists at extremely high
                    temperatures and pressures. In superionic water, water
                    molecules break apart and the oxygen ions crystallize into
                    an evenly spaced lattice while the hydrogen ions float
                    around freely within the oxygen lattice. The freely mobile
                    hydrogen ions make superionic water almost as conductive as
                    typical metals... In May 2019, scientists at the Laboratory
                    for Laser Energetics were able to create superionic ice in a
                    laboratory, confirming it to be almost four times as dense
                    as normal ice and{" "}
                    <span className="font-bold text-cyan-800 dark:text-cyan-200">
                      black in color
                    </span>
                    . Superionic water is theorized to be present in the mantles
                    of giant planets such as Uranus and Neptune."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Superionic_water"
                      className="text-cyan-600 dark:text-cyan-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Superionic Water, 2019
                    </a>
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Extreme Conditions</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Superionic water exists at extremely high temperatures and
                      pressures, conditions found deep within giant planets like
                      Uranus and Neptune, not on Earth's surface.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Surprising Properties</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Unlike normal water or ice, superionic water is almost
                      four times denser than regular ice and, perhaps most
                      surprisingly, is black in color.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Recent Discovery</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This remarkable state of water was only definitively
                      confirmed in laboratory experiments relatively recently,
                      with crystal structure confirmation in 2019.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This remarkable state of water, known as superionic water or
                  ice XVIII, was only definitively confirmed in laboratory
                  experiments relatively recently. It forms under immense
                  temperatures and pressures far exceeding those on Earth's
                  surface.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Striking Description
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Now, consider a description found in the Quran, a book
                  revealed in the 7th century CE, over 1400 years ago.
                  Describing a scene from the Hereafter (specifically, the state
                  of the unjust in the Fire), it mentions the drink they will be
                  given:
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/18/29"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 18:29
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "...We have prepared for the unjust a Fire, whose
                        curtains will hem them in. And when they cry for relief,
                        they will be relieved with water{" "}
                        <span className="font-bold">like tar</span>, which
                        scalds the faces. What a miserable drink, and what a
                        terrible place."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٢٩ وَقُلِ الْحَقُّ مِنْ رَبِّكُمْ ۖ فَمَنْ شَاءَ
                        فَلْيُؤْمِنْ وَمَنْ شَاءَ فَلْيَكْفُرْ ۚ إِنَّا
                        أَعْتَدْنَا لِلظَّالِمِينَ نَارًا أَحَاطَ بِهِمْ
                        سُرَادِقُهَا ۚ وَإِنْ يَسْتَغِيثُوا يُغَاثُوا بِمَاءٍ
                        كَالْمُهْلِ يَشْوِي الْوُجُوهَ ۚ بِئْسَ الشَّرَابُ
                        وَسَاءَتْ مُرْتَفَقًا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Word
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Arabic phrase "كَالْمُهْلِ" (kal-muhl) is used to
                    describe the water. The word "مُهْلِ" (muhl) is commonly
                    translated as "tar" or "molten metal." Tar is known to be a
                    black, viscous substance.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Connecting this description to the scientific discovery: at
                    extremely high temperatures and pressures, water becomes
                    superionic water, a state that is described by scientists as
                    being black in color and notably different in viscosity from
                    regular water. The Quranic description of water in a
                    condition of intense heat ("Fire") as being "like tar"
                    strikingly aligns with the properties of superionic water
                    under extreme heat and pressure.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Reflection
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  This juxtaposition of a 7th-century description and a
                  21st-century scientific discovery leads us to a profound
                  question:
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone living over 1400 years ago have known that
                    water, under conditions of immense heat and pressure, could
                    turn black and viscous, resembling tar?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The properties of superionic water were unknown and
                    undetectable with the technology available in the 7th
                    century. Yet, the Quran seems to describe a characteristic
                    of water in an extreme state that aligns remarkably with
                    modern scientific findings. This correlation is seen by many
                    as a testament to the divine origin of the Quran, containing
                    knowledge far beyond human understanding at the time of its
                    revelation.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, detailed understanding of water's
                      behavior under extreme conditions was completely unknown.
                      The precise description of water turning black shows
                      remarkable insight.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's scientific research confirms exactly what the
                      Quran described: that water under extreme heat and
                      pressure can indeed turn black and viscous, resembling
                      tar.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  It invites us to reflect on how such specific and accurate
                  information about the fundamental nature of a common substance
                  like water, under conditions unimaginable to the people of
                  that era, could be present in an ancient scripture.
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
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Exploring Water's Wonders
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The universe holds many secrets, and sometimes ancient texts seem
              to contain glimpses of truths science would only uncover millennia
              later.
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
          className="bg-blue-600 dark:bg-blue-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SuperionicWater;
