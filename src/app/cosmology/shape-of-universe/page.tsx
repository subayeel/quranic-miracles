/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Globe,
  ChevronRight,
  Compass,
  Orbit,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Circle,
  Quote,
} from "lucide-react"; // Using Sphere and Compass for cosmic theme

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define TypeScript type for content sections
interface ContentSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const ShapeOfUniverse: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents: ContentSection[] = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Cosmic Shape",
        icon: Globe,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "observable",
        title: "The Observable Sphere",
        icon: Circle,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "principle",
        title: "Viewed Equally",
        icon: Compass, // Represents direction/perspective
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "curvature",
        title: "Returning Journey",
        icon: Orbit, // Represents a path returning
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
      },
      {
        id: "reflection",
        title: "Contemplation",
        icon: HelpCircle,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust threshold as needed
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-purple-300" size={32} />
            <h1 className="text-4xl font-bold">Shape of the Universe</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-200">
            Exploring Cosmic Dimensions
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("observable")}
            >
              Continue <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-purple-100 border-purple-300 hover:bg-purple-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cosmic Guide</CardTitle>
                  <CardDescription>
                    Navigate the universe's form
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium"
                            : ""
                        }`}
                      >
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {activeSection === id && (
                          <ChevronRight className="ml-auto" size={16} />
                        )}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="intro" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Globe className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Enigma of Cosmic Shape</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    Imagine living 1400 years ago, with no telescopes or space
                    probes. The shape and scale of the universe were beyond
                    human comprehension. Yet, the Quran, revealed in the 7th
                    century, contains verses that astonishingly align with our
                    modern understanding of the cosmos. Let's explore some of
                    these fascinating connections.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
                    <h3 className="font-bold text-lg mb-3">
                      A Look Back at Ancient Knowledge
                    </h3>
                    <p>
                      In the 7th century, cosmological views were vastly
                      different from today. Many cultures believed in a flat
                      Earth with a solid dome-like sky. The idea of a vast,
                      expanding universe with a discernible shape was simply not
                      part of human knowledge or scientific capability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* The Observable Sphere */}
            <section id="observable" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Circle className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Our Observable Universe: A Sphere</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Modern astronomy reveals that every observer in the universe
                    sees the observable universe around them as a giant sphere.
                    This sphere is estimated to be about 93 billion light-years
                    in diameter! This is true for *any* observer, no matter
                    where they are located.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-indigo-500" /> Modern
                      Scientific View
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Assuming the universe is isotropic, the distance to the
                      edge of the observable universe is roughly the same in
                      every direction. That is, the observable universe has a
                      spherical volume (a ball) centered on the observer. Every
                      location in the universe has its own observable universe,
                      which may or may not overlap with the one centered on
                      Earth... The radius of the observable universe is
                      therefore estimated to be about 46.5 billion light-years
                      and its diameter about 28.5 gigaparsecs (93 billion
                      light-years...)"
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Observable_universe"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Observable Universe, 2020
                      </a>
                    </div>
                  </div>
                  <p>
                    This understanding of the observable universe as a sphere is
                    a recent scientific discovery. However, let's look at a
                    verse from the Quran:
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/55/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/33"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 55:33
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "O society of jinn and humans! If you can escape the
                          diameters of the heavens and the earth, go ahead and
                          escape. But you will not escape except with
                          authorization."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٣٣ يَا مَعْشَرَ الْجِنِّ وَالْإِنْسِ إِنِ
                          اسْتَطَعْتُمْ أَنْ تَنْفُذُوا مِنْ أَقْطَارِ
                          السَّمَاوَاتِ وَالْأَرْضِ فَانْفُذُوا ۚ لَا
                          تَنْفُذُونَ إِلَّا بِسُلْطَانٍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                      Meaning of "Aktar"
                    </Badge>
                    <p className="mt-3">
                      The key Arabic word here is "
                      <span className="font-arabic">أَقْطَارِ</span>" (Aktar).
                      This word literally means 'diameters'. Diameters are a
                      property specifically associated with circles or spheres.
                      The verse speaks of the "diameters of the heavens and the
                      earth". Given that the observable universe from Earth is a
                      sphere, and similarly from any point in the heavens (where
                      Jinn are mentioned as residing), they too would perceive
                      their observable universe as a sphere.
                    </p>
                    <p className="mt-3">
                      The Quran mentions "diameters" for both the heavens
                      (representing the cosmos) and the Earth. This description
                      aligns remarkably with the modern scientific understanding
                      that the observable universe has a spherical shape, hence
                      possessing diameters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Viewed Equally */}
            <section id="principle" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Compass className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>The Universe Appears the Same to All</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Another cornerstone of modern cosmology is the "Cosmological
                    Principle." It states that, on a large enough scale, the
                    universe looks the same everywhere and in all directions.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-teal-500" /> The
                      Cosmological Principle
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "The cosmological principle is usually stated formally as
                      'Viewed on a sufficiently large scale, the properties of
                      the universe are the same for all observers.' This amounts
                      to the strongly philosophical statement that the part of
                      the universe which we can see is a fair sample, and that
                      the same physical laws apply throughout. In essence, this
                      in a sense says that the universe is knowable and is
                      playing fair with scientists."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Cosmological_principle"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Observable Universe, 2020 (entry includes
                        this principle)
                      </a>
                    </div>
                  </div>
                  <p>
                    This means that observers, whether on Earth or elsewhere,
                    see the observable universe with the same properties,
                    including its apparent size or "thickness" (radius). This
                    principle was unknown 1400 years ago. Now let's look at
                    another set of verses:
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/79/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/27"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 79:27-28
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "Are you more difficult to create, or the heaven? He
                          constructed it. He raised its thickness, and equalized
                          it."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٢٧ أَأَنْتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ ۚ
                          بَنَاهَا
                          <br />
                          ٢٨ رَفَعَ سَمْكَهَا فَسَوَّاهَا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Key Phrases
                    </Badge>
                    <p className="mt-3">
                      "<span className="font-arabic">رَفَعَ سَمْكَهَا</span>"
                      (Raafa'a Samkaha) means "He raised its thickness." Today,
                      we know the universe is expanding, meaning the radius (or
                      "thickness" from the observer to the edge) of the
                      observable universe is increasing over time.
                    </p>
                    <p className="mt-3">
                      "<span className="font-arabic">فَسَوَّاهَا</span>"
                      (Fasawwaha) means "and equalized it" or "made it equal."
                      This phrase aligns beautifully with the cosmological
                      principle – that the "thickness" or radius of the
                      observable universe appears equal for all observers, no
                      matter their location. This would not be the case if the
                      universe had a non-uniform shape like a dome over a flat
                      Earth, where the "height" or thickness would vary
                      depending on your position.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Returning Journey */}
            <section id="curvature" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <Orbit className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>
                      Is the Universe Curved? A Returning Path
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    While the observable universe is a sphere from any
                    viewpoint, the overall shape and topology of the *entire*
                    universe are subjects of ongoing research. One intriguing
                    possibility suggested by some studies is that the universe
                    might be curved, like the surface of a sphere, but in higher
                    dimensions.
                  </p>
                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote size={16} className="text-pink-500" /> The
                      Possibility of a Curved Universe
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "Now our new paper, published in Nature Astronomy, has
                      come to a conclusion that may unleash a crisis in
                      cosmology - if confirmed. We show that the shape of the
                      universe may actually be curved rather than flat, as
                      previously thought - with a probability larger than 99%.
                      In a curved universe, no matter which direction you travel
                      in, you will end up at the starting point - just like on a
                      sphere. Though the universe has four dimensions, including
                      time."
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://phys.org/news/2019-11-shape-universe-rethink-cosmos.html"
                        className="text-pink-600 dark:text-pink-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Phys.org, Shape of the universe..., 2019
                      </a>
                    </div>
                  </div>
                  <p>
                    This concept of eventually returning to your starting point
                    by traveling in a straight line is a property of a
                    positively curved, or closed, universe. It suggests the
                    universe, as a whole, might be finite and has no "exit."
                    This is a frontier of modern cosmology.
                  </p>
                  <p>Now, consider this verse from the Quran:</p>
                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-100 dark:border-pink-800">
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/86/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/none/v/11"
                        className="text-pink-600 dark:text-pink-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 86:11
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "And the sky that returns."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">١١ وَالسَّمَاءِ ذَاتِ الرَّجْعِ</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100">
                      Meaning of "Al-rajeh"
                    </Badge>
                    <p className="mt-3">
                      The Arabic word "
                      <span className="font-arabic">الرَّجْعِ</span>" (Al-rajeh)
                      means 'returns' or 'the return'. While we are familiar
                      with the concept of planets returning to their orbital
                      paths, applying "returning" to the vast "sky" or universe
                      on a larger scale points towards a property where a path
                      ultimately returns to its origin. This aligns remarkably
                      with the concept of a closed, curved universe where such a
                      return journey is possible.
                    </p>
                    <p className="mt-3">
                      Coupled with verse 55:33 which speaks of not being able to
                      escape the "diameters" (implying boundaries of a spherical
                      or closed nature), these verses together can be understood
                      to portray a universe that is closed, finite, and where
                      travel in a straight line would eventually bring one back
                      – concepts astonishingly similar to possibilities being
                      explored in modern cosmology.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <HelpCircle className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>A Point for Contemplation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The alignment between these Quranic descriptions and
                    concepts from modern cosmology presents a profound question:
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                    <h3 className="font-bold text-xl mb-3 text-center">
                      How could a text from the 7th century, revealed to an
                      illiterate man, contain ideas about the universe's shape
                      and properties that science is only confirming today?
                    </h3>
                    <p>
                      The detailed properties discussed – the spherical nature
                      of the observable universe, the idea that it appears the
                      same from all viewpoints, and the possibility of a curved
                      structure where paths return – were entirely beyond the
                      scientific grasp of the 7th century. The tools and
                      knowledge required to even hypothesize such concepts
                      simply did not exist.
                    </p>
                  </div>

                  <p>
                    This remarkable congruence between ancient revelation and
                    modern scientific discovery invites us to reflect deeply on
                    the origin and nature of the Quranic text.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-purple-500" size={18} />
            <h3 className="text-lg font-medium">Exploring Cosmic Wonders</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            The universe's shape and properties continue to amaze, revealing
            layers of complexity hinted at in ancient scripture.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShapeOfUniverse;
