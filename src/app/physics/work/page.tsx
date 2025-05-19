/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Target, // Represents a goal or concept
  ChevronRight,
  Scale, // Represents measurement, weight
  BookOpen, // Consistent for Quranic reference
  Lightbulb, // Represents reflection or insight
  ArrowUp,
  Sparkles, // Used in footer
  BookUp2,
  Quote, // Represents Weight
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PhysicsWork = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Understanding Work",
        icon: Target,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "science",
        title: "The Physics of Work",
        icon: Scale, // Using Scale to represent measurement/weight
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "quran",
        title: "Quranic Insight",
        icon: BookOpen,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "reflection",
        title: "Connecting Concepts",
        icon: Lightbulb,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
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
      <div className="bg-gradient-to-r from-blue-500 to-teal-700 dark:from-blue-700 dark:to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <BookUp2 className="text-blue-200" size={32} />
            <h1 className="text-4xl font-bold">Work</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Exploring a Physics Concept
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("science")}
            >
              Discover More <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="text-blue-700"
              onClick={() => scrollToSection("intro")}
            >
              Start Here
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
                  <CardTitle className="text-lg">Topic Guide</CardTitle>
                  <CardDescription>
                    Journey into the concept of Work
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
              <Card
                className={`border-l-4 ${contents
                  .find((c) => c.id === "intro")
                  ?.iconColor.replace("text-", "border-")}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "intro")?.color
                      }`}
                    >
                      <Target
                        className={
                          contents.find((c) => c.id === "intro")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Understanding Work in Physics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="font-medium">
                    When we talk about "work" in everyday life, we usually mean
                    effort. But in physics, Work has a very specific meaning!
                    It's all about force and movement.
                  </p>
                  <div
                    className={`p-6 rounded-lg border ${contents
                      .find((c) => c.id === "intro")
                      ?.color.replace("bg-", "bg-")
                      .replace("-100", "-50")
                      .replace("-900", "-900/30")} ${contents
                      .find((c) => c.id === "intro")
                      ?.iconColor.replace("text-", "border-")
                      .replace("-500", "-100")
                      .replace("-400", "-800")}`}
                  >
                    <h3 className="font-bold text-lg mb-3">
                      Work Isn't Just Effort!
                    </h3>
                    <p>
                      In physics, work is done only when a force causes an
                      object to move a certain distance. If you push against a
                      wall with all your might, you might feel tired (lots of
                      effort!), but if the wall doesn't move, no *physics* work
                      is done!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scientific Concept */}
            <section id="science" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${contents
                  .find((c) => c.id === "science")
                  ?.iconColor.replace("text-", "border-")}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "science")?.color
                      }`}
                    >
                      <Scale
                        className={
                          contents.find((c) => c.id === "science")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>The Physics of Work</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Scientifically, work is defined as the product of the force
                    applied to an object and the distance over which that force
                    is applied, in the direction of the force. A simple way to
                    think about it is:
                  </p>
                  <div
                    className={`p-4 rounded-lg border ${contents
                      .find((c) => c.id === "science")
                      ?.color.replace("bg-", "bg-")
                      .replace("-100", "-50")
                      .replace("-900", "-900/30")} ${contents
                      .find((c) => c.id === "science")
                      ?.iconColor.replace("text-", "border-")
                      .replace("-500", "-100")
                      .replace("-400", "-800")}`}
                  >
                    <p className="text-center font-mono text-lg font-bold">
                      Work = Force × Displacement
                    </p>
                  </div>
                  <p>
                    When we talk about lifting something, we are doing work
                    against gravity. The force required is equal to the object's
                    weight, and the displacement is the vertical distance it's
                    lifted.
                  </p>

                  <div
                    className={`p-6 rounded-lg border ${contents
                      .find((c) => c.id === "science")
                      ?.color.replace("bg-", "bg-")
                      .replace("-100", "-50")
                      .replace("-900", "-900/30")} ${contents
                      .find((c) => c.id === "science")
                      ?.iconColor.replace("text-", "border-")
                      .replace("-500", "-100")
                      .replace("-400", "-800")}`}
                  >
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Quote
                        size={16}
                        className={
                          contents.find((c) => c.id === "science")?.iconColor
                        }
                      />{" "}
                      Work by Gravity
                    </h3>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "In the absence of other forces, gravity results in a
                      constant downward acceleration of every freely moving
                      object. Near Earth's surface the acceleration due to
                      gravity is $g = 9.8 m / s^2 and the gravitational force on
                      an object of mass $m$ is $F_g = mg$. It is convenient to
                      imagine this gravitational force concentrated at the
                      center of mass of the object. If an object is displaced
                      upwards or downwards a vertical distance $y_2 − y_1$, the
                      work $W$ done on the object by its weight $mg$ is:
                      <br />
                      <br />
                      $$W = F_g (y_2-y_1) = F_g \Delta y = - mg \Delta y$$
                      <br />
                      where $F_g$ is weight (pounds in imperial units, and
                      newtons in SI units), and $\Delta y$ is the change in
                      height $y$. Notice that the work done by gravity depends
                      only on the vertical movement of the object. The presence
                      of friction does not affect the work done on the object by
                      its weight. "
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href="https://en.wikipedia.org/wiki/Work_(physics)#Work_by_gravity"
                        className={contents
                          .find((c) => c.id === "science")
                          ?.iconColor.replace("text-", "text-")
                          .replace("-500", "-600")
                          .replace("-400", "-400")}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia, Work (physics), 2019
                      </a>
                    </div>
                  </div>
                  <p>
                    This precise understanding of work, especially its
                    mathematical relationship to force and displacement (like
                    weight and vertical distance), was developed much later in
                    scientific history. It wasn't a concept known in the 7th
                    century.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Quranic Reference */}
            <section id="quran" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${contents
                  .find((c) => c.id === "quran")
                  ?.iconColor.replace("text-", "border-")}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "quran")?.color
                      }`}
                    >
                      <BookOpen
                        className={
                          contents.find((c) => c.id === "quran")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>A Quranic Connection?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div
                    className={`p-6 rounded-lg border ${contents
                      .find((c) => c.id === "quran")
                      ?.color.replace("bg-", "bg-")
                      .replace("-100", "-50")
                      .replace("-900", "-900/30")} ${contents
                      .find((c) => c.id === "quran")
                      ?.iconColor.replace("text-", "border-")
                      .replace("-500", "-100")
                      .replace("-400", "-800")}`}
                  >
                    <h3 className="font-medium mb-3">
                      <a
                        href="https://www.quranwow.com/#/ch/99/t1/ar-allah/t2/en-itania/a1/alafasy-64/a2/itania-48-b/v/7"
                        className={contents
                          .find((c) => c.id === "quran")
                          ?.iconColor.replace("text-", "text-")
                          .replace("-500", "-600")
                          .replace("-400", "-400")}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quran 99:7-8
                      </a>
                    </h3>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                      <div className="md:w-1/2">
                        <p className="italic mb-4">
                          "So whoever does an atom's weight of good will see it,{" "}
                          <br /> And whoever does an atom's weight of evil will
                          see it."
                        </p>
                      </div>
                      <div className="md:w-1/2 font-arabic text-right text-lg">
                        <p dir="rtl">
                          ٧ فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ
                          <br />٨ وَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا
                          يَرَهُ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge
                      className={
                        contents
                          .find((c) => c.id === "quran")
                          ?.color.replace("bg-", "bg-")
                          .replace("-100", "")
                          .replace("-900", "dark:") +
                        " " +
                        contents
                          .find((c) => c.id === "quran")
                          ?.iconColor.replace("text-", "text-")
                          .replace("-500", "-800")
                          .replace("-400", "-100")
                      }
                    >
                      Key Terms
                    </Badge>
                    <p className="mt-3">
                      The Arabic word used here is "Yaamal" (يَعْمَلْ), derived
                      from "Aamal" (عمل), meaning "to do work" or "to act". The
                      phrase "mithqala tharratin" (مِثْقَالَ ذَرَّةٍ) translates
                      to "the weight of an atom". In the context of the 7th
                      century, "dharrah" might have referred to the smallest
                      particle visible (like a dust mote in a sunbeam) or even
                      something smaller, but the concept of an atom as we know
                      it today was not established.
                    </p>
                    <p className="mt-3">
                      Interestingly, this verse links "doing work" (`yaamal`)
                      directly to "the weight of a dharrah" (`mithqala
                      tharratin`). This suggests a relationship between actions
                      (work/deeds) and their measurement by weight, even at the
                      smallest conceivable scale.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-20">
              <Card
                className={`border-l-4 ${contents
                  .find((c) => c.id === "reflection")
                  ?.iconColor.replace("text-", "border-")}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        contents.find((c) => c.id === "reflection")?.color
                      }`}
                    >
                      <Lightbulb
                        className={
                          contents.find((c) => c.id === "reflection")?.iconColor
                        }
                        size={24}
                      />
                    </div>
                    <CardTitle>Connecting the Dots</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    We've seen that modern physics defines work (especially
                    against gravity) in terms of force (weight) and
                    displacement. We also noted that this precise definition
                    wasn't known 1400 years ago.
                  </p>

                  <div
                    className={`p-6 rounded-lg border ${contents
                      .find((c) => c.id === "reflection")
                      ?.color.replace("bg-", "bg-")
                      .replace("-100", "-50")
                      .replace("-900", "-900/30")} ${contents
                      .find((c) => c.id === "reflection")
                      ?.iconColor.replace("text-", "border-")
                      .replace("-500", "-100")
                      .replace("-400", "-800")}`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-center">
                      Could the Quranic phrase, linking "work" to "the weight of
                      a dharrah," hint at this fundamental relationship?
                    </h3>
                    <p>
                      The concept of "work" in physics, tied to "force" (like
                      weight) acting over a "distance" (displacement), is a
                      foundational principle developed through centuries of
                      scientific inquiry, formalized well after the 7th century.
                    </p>
                    <p>
                      The Quranic verse, however, seems to intuitively connect
                      the concept of "doing work" or "action" with a measure
                      related to "weight" at the smallest level. This
                      correlation between a spiritual/accountability context in
                      the Quran and a core physical principle (work related to
                      weight/force) invites contemplation. How could this subtle
                      connection, which aligns with a principle of modern
                      physics, be present in a text from so long ago?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              <BookUp2 size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
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
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-blue-500" size={18} />
            <h3 className="text-lg font-medium">Work, Weight, and Wisdom</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Exploring the unexpected connections between physical laws and
            ancient scripture.
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

export default PhysicsWork;
