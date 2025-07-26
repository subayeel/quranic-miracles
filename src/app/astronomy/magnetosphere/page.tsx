/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Shield,
  ChevronRight,
  GlobeLock,
  BookOpen,
  HelpCircle,
  Zap,
  ArrowUp,
  Sparkles,
} from "lucide-react";

const Magnetosphere = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "Protective Shield",
        icon: Shield,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: GlobeLock,
      },
      {
        id: "quran",
        title: "Quranic Reference",
        icon: BookOpen,
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: HelpCircle,
      },
    ],
    []
  );

  // Set up Intersection Observer to track which section is in view
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

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Medium-style Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="text-green-600" size={24} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Magnetosphere
                </h1>
                <p className="text-sm text-gray-500">
                  Astronomy • Intermediate
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 text-sm">
                Share
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm">
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
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section id="intro" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Shields from cosmic radiation
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  In the Quran, Earth is described as having a protective
                  shield. Skeptics claimed this was a mistake, as Earth is
                  surrounded by vacuum that doesn't offer protection. However,
                  modern science confirms that Earth indeed has an invisible
                  magnetic field that shields it from cosmic radiation.
                </p>

                <div className="bg-gray-50 border-l-4 border-green-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Earth's Double Protection System
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Earth has two major protective systems: a visible atmosphere
                    that protects against meteorites and small debris
                    bombardment, and an invisible magnetic field called the
                    Magnetosphere that shields us from harmful cosmic radiation.
                    Without this magnetic shield, life would be impossible on
                    Earth's surface.
                  </p>
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Scientific Evidence
                </h2>

                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50">
                  <p className="text-lg italic text-gray-700 mb-4">
                    "Planets having active magnetospheres, like the Earth, are
                    capable of mitigating or blocking the effects of solar
                    radiation or cosmic radiation, that also protects all living
                    organisms from potentially detrimental and dangerous
                    consequences."
                  </p>
                  <cite className="text-sm text-gray-600">
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Magnetosphere"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia, Magnetosphere, 2018
                    </a>
                  </cite>
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Zap size={20} className="text-yellow-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Magnetic Protection
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Earth's magnetic field deflects charged particles from the
                      sun and cosmic rays, preventing them from stripping away
                      our atmosphere and bombarding the surface with radiation.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <GlobeLock size={20} className="text-red-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Mars Comparison
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Mars once had an atmosphere but lost it because it lacked
                      a strong magnetic field. This comparison highlights the
                      crucial protective role Earth's magnetosphere plays.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Without this magnetic field, life would be impossible on
                  Earth's surface. This scientific understanding was only
                  discovered recently, yet it was portrayed in the Quran 1400
                  years ago.
                </p>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Quranic Reference
                </h2>

                <div className="bg-green-50 border border-green-200 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <a
                      href="https://quran.com/en/21/32"
                      className="text-green-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 21:32
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "And We made the sky a protected shield and they turn
                        away from its sign."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800">
                        ٣٢ وَجَعَلْنَا السَّمَاءَ سَقْفًا مَحْفُوظًا ۖ وَهُمْ
                        عَنْ آيَاتِهَا مُعْرِضُونَ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Point
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The phrase "Protected shield" (سَقْفًا مَحْفُوظًا) is
                    significant. It doesn't just say "protective shield" (which
                    would mean the atmosphere protects us), but rather
                    "protected shield" - indicating that the atmosphere itself
                    is being protected by something else. This subtle
                    distinction aligns perfectly with our modern understanding
                    that Earth's atmosphere is preserved by the magnetosphere.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reflection
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The accurate description in the Quran of Earth's atmosphere as
                  a "protected shield" rather than just a "protective shield"
                  raises interesting questions about ancient knowledge:
                </p>

                <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    How could man who lived 1400 years ago have known about
                    magnetosphere?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This precise distinction - that our atmosphere is not just
                    protecting us, but is itself being protected - seems
                    remarkably prescient given our modern scientific
                    understanding. The comparison with Mars, which lost its
                    atmosphere due to the lack of a magnetic field, further
                    highlights the accuracy of this description.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  For many, this connection between ancient text and modern
                  science invites contemplation about knowledge, revelation, and
                  the precise systems that make life on Earth possible. The
                  magnetosphere continues to be an essential component of our
                  planet's habitability, silently protecting all life from
                  harmful cosmic radiation.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>

      {/* Medium-style Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Sparkles className="text-green-600" size={20} />
              <h3 className="text-xl font-bold text-gray-900">
                Earth's Invisible Protector
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              The magnetosphere continues to shield our planet from cosmic
              dangers, connecting ancient wisdom with modern scientific
              discovery.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-600 hover:text-gray-900 text-sm flex items-center space-x-1 mx-auto"
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
          className="bg-green-600 hover:bg-green-700 text-white rounded-full h-12 w-12 shadow-lg flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Magnetosphere;
