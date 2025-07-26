/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  Star,
  Radio,
  BookOpen,
  HelpCircle,
  ArrowUp,
  Volume2,
  Pause,
  Play,
} from "lucide-react";
import Image from "next/image";

type AudioState = {
  slow: {
    audio: HTMLAudioElement | null;
    isPlaying: boolean;
  };
  fast: {
    audio: HTMLAudioElement | null;
    isPlaying: boolean;
  };
};

const PulsarsPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [audioState, setAudioState] = useState<AudioState>({
    slow: { audio: null, isPlaying: false },
    fast: { audio: null, isPlaying: false },
  });
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(
    () => [
      {
        id: "intro",
        title: "What Are Pulsars",
        icon: Star,
      },
      {
        id: "science",
        title: "Scientific Evidence",
        icon: Radio,
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

  // Initialize audio objects
  useEffect(() => {
    const slowAudio = new Audio("/audios/pulsar_slow.mp3");
    const fastAudio = new Audio("/audios/pulsar_fast.mp3");

    // Add event listeners for when audio ends
    slowAudio.addEventListener("ended", () => {
      setAudioState((prev) => ({
        ...prev,
        slow: { ...prev.slow, isPlaying: false },
      }));
    });

    fastAudio.addEventListener("ended", () => {
      setAudioState((prev) => ({
        ...prev,
        fast: { ...prev.fast, isPlaying: false },
      }));
    });

    setAudioState({
      slow: { audio: slowAudio, isPlaying: false },
      fast: { audio: fastAudio, isPlaying: false },
    });

    // Cleanup function
    return () => {
      slowAudio.removeEventListener("ended", () => {});
      fastAudio.removeEventListener("ended", () => {});
      slowAudio.pause();
      fastAudio.pause();
    };
  }, []);

  const togglePulsarSound = (type: "slow" | "fast") => {
    const currentAudio = audioState[type].audio;
    const otherType = type === "slow" ? "fast" : "slow";
    const otherAudio = audioState[otherType].audio;

    if (!currentAudio) return;

    // If current audio is playing, pause it
    if (audioState[type].isPlaying) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setAudioState((prev) => ({
        ...prev,
        [type]: { ...prev[type], isPlaying: false },
      }));
    } else {
      // Pause other audio if it's playing
      if (audioState[otherType].isPlaying && otherAudio) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
        setAudioState((prev) => ({
          ...prev,
          [otherType]: { ...prev[otherType], isPlaying: false },
        }));
      }

      // Play current audio
      currentAudio.currentTime = 0;
      currentAudio.play();
      setAudioState((prev) => ({
        ...prev,
        [type]: { ...prev[type], isPlaying: true },
      }));
    }
  };

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
              <Star
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Pulsars
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
              <section id="intro" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  What Are Pulsars
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Pulsars are rotating neutron stars that emit beams of
                  electromagnetic radiation. Most neutron stars discovered today
                  are in the form of radio pulsars, named for their pulsed radio
                  emissions.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 pl-6 py-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Listen to a Pulsar
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We can connect a radio telescope to a speaker and literally
                    hear a pulsar's unique knocking sound. This distinctive
                    audio signature is what makes pulsars so fascinating.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      onClick={() => togglePulsarSound("slow")}
                      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        audioState.slow.isPlaying
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "bg-purple-600 hover:bg-purple-700 text-white"
                      }`}
                    >
                      {audioState.slow.isPlaying ? (
                        <Pause size={16} className="mr-2" />
                      ) : (
                        <Volume2 size={16} className="mr-2" />
                      )}
                      {audioState.slow.isPlaying ? "Pause" : "Play"} Slow
                      Knocking Pulsar
                    </button>
                    <button
                      onClick={() => togglePulsarSound("fast")}
                      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        audioState.fast.isPlaying
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {audioState.fast.isPlaying ? (
                        <Pause size={16} className="mr-2" />
                      ) : (
                        <Volume2 size={16} className="mr-2" />
                      )}
                      {audioState.fast.isPlaying ? "Pause" : "Play"} Fast
                      Knocking Pulsar
                    </button>
                  </div>
                  {(audioState.slow.isPlaying || audioState.fast.isPlaying) && (
                    <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2">
                        <Play
                          size={16}
                          className="text-blue-600 dark:text-blue-400"
                        />
                        <span className="text-sm text-blue-800 dark:text-blue-200">
                          {audioState.slow.isPlaying
                            ? "Playing slow knocking pulsar..."
                            : "Playing fast knocking pulsar..."}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Scientific Evidence */}
              <section id="science" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Science Behind Pulsars
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Pulsars are rotating neutron stars. As more matter falls into
                  a neutron star, its mass increases, and consequently, its
                  gravity increases. At a certain point, the gravitational
                  distortion becomes so immense that it can create a hole in
                  spacetime, potentially forming a black hole.
                </p>
                <div className="flex justify-center my-8">
                  <div className="relative w-full max-w-md h-64 rounded">
                    <Image
                      src="/images/pulsars-black-holes.gif"
                      alt="Pulsar and spacetime distortion visualization"
                      layout="fill"
                      objectFit="contain"
                      className="rounded overflow-hidden"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Radio
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Radio Emissions
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Pulsars emit radio waves that can be detected on Earth.
                      When connected to a speaker, these emissions produce a
                      distinctive knocking sound due to the pulsar's rapid
                      rotation.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Star
                        size={20}
                        className="text-yellow-500 dark:text-yellow-400"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Gravitational Effects
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The extreme gravity of neutron stars can distort
                      spacetime. As their mass increases, they can reach a point
                      where this distortion creates a hole in spacetime, forming
                      a black hole.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quranic Reference */}
              <section id="quran" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Quranic Account
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a
                      href="https://quran.com/en/86/1"
                      className="text-green-700 dark:text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quran 86:1-3
                    </a>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        "And the heaven and the 'Knocker' How could you know
                        about the 'Knocker'? The piercing star."
                      </p>
                    </div>
                    <div className="font-arabic text-right text-xl leading-relaxed">
                      <p dir="rtl" className="text-gray-800 dark:text-gray-100">
                        ١ وَالسَّمَاءِ وَالطَّارِقِ
                        <br />
                        ٢ وَمَا أَدْرَاكَ مَا الطَّارِقُ
                        <br />٣ النَّجْمُ الثَّاقِبُ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Key Terminology
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    "Tarek الطَّارِقُ" in Arabic means "the one who knocks."
                    This perfectly describes the audio signature of pulsars when
                    converted to sound.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    "Thukb ثقب" means a hole, and "Thakeb ثَّاقِبُ" means "the
                    one who makes a hole." This describes how the extreme
                    gravity of massive neutron stars can distort spacetime,
                    potentially creating black holes.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-medium mb-2">
                    The Scientific Connection
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The Quranic description combines both the distinctive
                    "knocking" sound of pulsars and their connection to spatial
                    distortions that we now associate with black holes -
                    concepts completely unknown in the 7th century.
                  </p>
                </div>
              </section>

              {/* Reflection */}
              <section id="reflection" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  A Cosmic Inquiry
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The connection between modern astronomy and the Quranic verse
                  about "the knocker" raises a thought-provoking question about
                  the source of this knowledge.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    How could someone 1400 years ago have known about pulsars?
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Pulsars were only discovered in 1967 by Jocelyn Bell Burnell
                    and Antony Hewish, using radio telescopes unavailable in the
                    7th century. Yet the Quran appears to describe both the
                    distinctive "knocking" sound of pulsars and their connection
                    to spatial distortions that we now associate with black
                    holes.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Historical Context</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In the 7th century, astronomical knowledge was limited to
                      what could be observed with the naked eye. The concepts of
                      neutron stars, radio waves, and spacetime distortion were
                      entirely unknown.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Modern Validation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Today's astronomical research confirms the existence of
                      "knocking" neutron stars and their potential connection to
                      black hole formation - exactly what these verses appear to
                      describe.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  The reference in the Quran to "the knocker" (Al-Tariq) that is
                  also described as "the piercing star" (Al-Najm Al-Thaqib)
                  presents a remarkable correlation with our modern
                  understanding of pulsars and their potential connection to
                  black hole formation.
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
                Exploring Cosmic Wonders
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              The mysteries of our universe continue to unfold, connecting
              ancient texts with modern astronomical discoveries.
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

export default PulsarsPage;
