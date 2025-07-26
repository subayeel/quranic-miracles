/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Waves,
  FlaskConical,
  BookOpen,
  HelpCircle,
  ArrowUp,
} from "lucide-react";

const InternalWavesComponent = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Hidden Ocean Waves",
        icon: Waves,
      },
      {
        id: "science",
        title: "Scientific Discovery",
        icon: FlaskConical,
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Considering the Knowledge",
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
              <Waves className="text-blue-600 dark:text-blue-400" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Internal Ocean Waves
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Oceanography • Medium
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
                  Hidden Ocean Waves
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  When we think of ocean waves, we usually picture the ones
                  crashing on the shore. But beneath the surface, in the vast
                  depths, another type of wave exists – internal waves that move
                  through the dark waters far below.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Waves Beneath the Surface
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    For a long time, the idea of waves existing deep within the
                    ocean, hidden from view, wasn't widely known or understood.
                    Some skeptics might have questioned their very existence,
                    assuming only surface waves were possible.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Waves
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Surface Waves
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The familiar waves we see on the ocean surface, driven by
                      wind and gravity, visible to all observers.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <FlaskConical
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Internal Waves
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Hidden waves that propagate within the ocean's depths,
                      moving through layers of different density.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scientific Discovery */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Scientific Discovery
                </h2>
                <blockquote className="border-l-4 border-teal-500 pl-6 py-4 mb-8 bg-teal-50 dark:bg-teal-900/30">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "Internal waves are gravity waves that oscillate within a
                    fluid medium, rather than on its surface. To exist, the
                    fluid must be stratified: the density must decrease
                    continuously or discontinuously with depth/height due to
                    changes in temperature and/or salinity."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-gray-400">
                    — Wikipedia, Internal Wave, 2018
                  </cite>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Stratified Layers</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Internal waves exist within layers of the ocean where
                      water density changes due to temperature or salinity
                      differences.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Deep Darkness</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      These waves propagate in the pycnocline, far below where
                      sunlight penetrates, in complete darkness.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Slow Movement</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Internal waves travel more slowly than surface waves but
                      can span hundreds of meters to tens of kilometers.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This understanding of internal waves traveling in complete
                  darkness within stratified ocean layers is a relatively modern
                  scientific discovery, requiring sophisticated instruments and
                  research methods unavailable in ancient times.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Quranic Insight
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/24/40"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 24:40
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "Or like the depths of darkness in a vast deep ocean,
                        overwhelmed with waves topped by waves, topped by
                        clouds: depths of darkness, one above another: if a man
                        stretches out his hand, he will not see it!"
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ٤٠ أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُجِّيٍّ يَغْشَاهُ مَوْجٌ
                        مِنْ فَوْقِهِ مَوْجٌ مِنْ فَوْقِهِ سَحَابٌ ۚ ظُلُمَاتٌ
                        بَعْضُهَا فَوْقَ بَعْضٍ إِذَا أَخْرَجَ يَدَهُ لَمْ
                        يَكَدْ يَرَاهَا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Layered Description
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    The verse describes "waves topped by waves, topped by
                    clouds" - a remarkable sequence that aligns with internal
                    waves (deep) beneath surface waves (visible) beneath clouds
                    (atmosphere). The description of darkness so complete that
                    "if a man stretches out his hand, he will not see it"
                    perfectly matches the environment where internal waves
                    propagate.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description of layered waves in the depths of
                    darkness aligns remarkably with the modern understanding of
                    internal waves moving through dark ocean layers beneath the
                    visible surface.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Considering the Knowledge
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Thinking about the knowledge available in the 7th century
                  raises a fascinating question about the precise description of
                  internal ocean waves and their dark environment:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone living 1400 years ago have known about
                    internal ocean waves in the total darkness of the deep sea?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    At that time, understanding of oceanography was limited
                    primarily to the surface. There were no submarines, sonar,
                    or sophisticated sensors to probe the deep ocean and detect
                    these hidden waves moving through distinct layers of
                    darkness and density.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Limitations</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, deep ocean exploration was impossible.
                      The layered structure of ocean waves was unknown to human
                      observation.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Discovery</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's oceanographic research confirms the exact
                      phenomenon described: waves beneath waves in the darkness
                      of the deep ocean.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  This precise depiction of layers of darkness and waves deep
                  within the ocean seems to point to knowledge that was far
                  beyond the reach of people in the 7th century, inviting
                  reflection on the source of such detailed and accurate
                  descriptions.
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
              <Waves className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Ocean's Hidden Mysteries
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Exploring the profound connections between ancient texts and
              modern oceanographic discoveries.
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

export default InternalWavesComponent;
