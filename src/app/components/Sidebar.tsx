/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Settings,
  ChevronUp,
  ChevronDown,
  Home,
  Microscope,
  Earth,
  FlaskConical,
  Atom,
  Hash,
  Cloud,
  Mountain,
  History,
  Bug,
  Book,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const SidebarComponent = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  // Set the current path when component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // New categories from the first document
  const scienceCategories = {
    Astronomy: {
      icon: Earth,
      items: [
        { title: "Stars", url: "/astronomy/stars" },
        { title: "Red Giant", url: "/astronomy/red-giant" },
        { title: "Venus", url: "/astronomy/venus" },
        { title: "Axial Tilt", url: "/astronomy/axial-tilt" },
        { title: "Tidal Locking", url: "/astronomy/tidal-locking" },
        { title: "Full Moon", url: "/astronomy/full-moon" },
        { title: "Exoplanets", url: "/astronomy/exoplanets" },
        { title: "Meteorites", url: "/astronomy/meteorites" },
        { title: "Planets", url: "/astronomy/planets" },
        { title: "Planetary Orbits", url: "/astronomy/planetary-orbits" },
        { title: "Magnetosphere", url: "/astronomy/magnetosphere" },
        { title: "Moonlight", url: "/astronomy/moonlight" },
        { title: "Day", url: "/astronomy/day" },
        { title: "Solar Flare", url: "/astronomy/solar-flare" },
        { title: "Sunlight", url: "/astronomy/sunlight" },
        { title: "Multi-Star System", url: "/astronomy/multi-star" },
        { title: "Starlight", url: "/astronomy/starlight" },
        { title: "Sirius", url: "/astronomy/sirius" },
        { title: "Stars Wobble", url: "/astronomy/stars-wobble" },
        { title: "Kelvin", url: "/astronomy/kelvin" },
      ],
    },
    Biology: {
      icon: Microscope,
      subCategories: {
        Embryology: [
          { title: "Meiosis", url: "/biology/embryology/meiosis" },
          {
            title: "Male Fertility",
            url: "/biology/embryology/male-fertility",
          },
          {
            title: "Fetal Development",
            url: "/biology/embryology/fetal-development",
          },
          { title: "Human Embryo", url: "/biology/embryology/human-embryo" },
        ],
        Physiology: [
          { title: "Neurons", url: "/biology/physiology/neurons" },
          { title: "Brain Cells", url: "/biology/physiology/brain-cells" },
          { title: "Vision", url: "/biology/physiology/vision" },
          {
            title: "Brain Functions",
            url: "/biology/physiology/brain-functions",
          },

          {
            title: "AMD",
            url: "/biology/physiology/amd",
          },
          {
            title: "Bedsores",
            url: "/biology/physiology/bedsores",
          },
          {
            title: "Brain Cells",
            url: "/biology/physiology/brain-cells",
          },
          {
            title: "Brain Stem",
            url: "/biology/physiology/brain-stem",
          },

          {
            title: "Cataracts",
            url: "/biology/physiology/cataracts",
          },
          {
            title: "Cholesterol",
            url: "/biology/physiology/cholesterol",
          },
          {
            title: "Ear Drum",
            url: "/biology/physiology/ear-drum",
          },
          {
            title: "Finger Prints",
            url: "/biology/physiology/fingerprints",
          },
          {
            title: "Flash Blindness",
            url: "/biology/physiology/flash-blindness",
          },
          {
            title: "Inner Ear",
            url: "/biology/physiology/inner-ear",
          },

          {
            title: "Milk",
            url: "/biology/physiology/milk",
          },
          {
            title: "Pupils",
            url: "/biology/physiology/pupils",
          },
          {
            title: "Reading",
            url: "/biology/physiology/reading-wisdom",
          },
          {
            title: "Skin Nerves",
            url: "/biology/physiology/skin-nerves",
          },
          {
            title: "Vision Space",
            url: "/biology/physiology/vision-space",
          },
        ],
        Botany: [
          { title: "Chlorophyll", url: "/biology/botany/chlorophyll" },
          { title: "Pollination", url: "/biology/botany/pollination" },
          { title: "Plant Stress", url: "/biology/botany/plant-stress" },
        ],
      },
      items: [
        { title: "Bioluminescence", url: "/biology/bioluminescence" },
        { title: "Colors", url: "/biology/colors" },
        { title: "Honey", url: "/biology/honey" },
        { title: "Evolution", url: "/biology/evolution" },
      ],
    },
    Chemistry: {
      icon: FlaskConical,
      items: [
        { title: "Hydrogen Peroxide", url: "/chemistry/hydrogen-peroxide" },
        { title: "Viscosity", url: "/chemistry/viscosity" },
        { title: "Hydrogen", url: "/chemistry/hydrogen" },
        { title: "Iron", url: "/chemistry/iron" },
        { title: "Rust", url: "/chemistry/rust" },
      ],
    },
    Cosmology: {
      icon: Atom,
      items: [
        { title: "Big Bang", url: "/cosmology/big-bang" },
        { title: "Expanding Universe", url: "/cosmology/expanding-universe" },
        { title: "Age Of Universe", url: "/cosmology/age-of-universe" },
        { title: "Dark Energy", url: "/cosmology/dark-energy" },
        { title: "Gravity", url: "/cosmology/gravity" },
      ],
    },
    Egyptology: {
      icon: History,
      subCategories: {
        History: [
          { title: "Paper Money", url: "/egyptology/history/paper-money" },
          { title: "Flight", url: "/egyptology/history/flight" },
          { title: "Noah", url: "/egyptology/history/noah" },
          { title: "Pompeii", url: "/egyptology/history/pompeii" },
        ],
      },
      items: [
        { title: "Pharaoh's Mummy", url: "/egyptology/mummy" },
        { title: "Haman", url: "/egyptology/haman" },
        { title: "Moses", url: "/egyptology/moses" },
        { title: "Pharaoh", url: "/egyptology/pharaoh" },
      ],
    },
    Geology: {
      icon: Mountain,

      items: [
        { title: "Aftershocks", url: "/geology/aftershocks" },
        { title: "Asthenosphere", url: "/geology/asthenosphere" },
        { title: "Coal", url: "/geology/coal" },
        { title: "Dead Sea", url: "/geology/dead-sea" },
        { title: "Earth", url: "/geology/earth" },
        { title: "Earthquake", url: "/geology/earthquake" },
        { title: "Fault Line", url: "/geology/fault-lines" },
        { title: "Hydrothermal Vents", url: "/geology/hydrothermal-vents" },
        { title: "Internal Mountains", url: "/geology/internal-mountains" },
        { title: "Internal Waves", url: "/geology/internal-waves" },
        { title: "Landslide", url: "/geology/landslides" },
        { title: "Minerals", url: "/geology/minerals" },
        { title: "Mountain", url: "/geology/mountain" },
        { title: "Photic Zone", url: "/geology/photic-zone" },
        { title: "Porous Rocks", url: "/geology/porous-rocks" },
        { title: "Pumice", url: "/geology/pumice" },
        { title: "Sinkhole", url: "/geology/sinkhole" },
        { title: "Soil Expansion", url: "/geology/soil-expansion" },
        { title: "Steam Explosion", url: "/geology/steam-explosion" },
        { title: "Subduction", url: "/geology/subduction" },
        { title: "Tectonic", url: "/geology/tectonic" },
        { title: "Volcano", url: "/geology/volcano" },
        { title: "Weathering & Erosions", url: "/geology/weathering-erosions" },
      ],
    },

    History: {
      icon: Book,
      items: [
        { title: "Calendar", url: "/history/calendar" },
        { title: "Crucifixtion", url: "/history/crucifixtion" },
        { title: "dieties", url: "/history/dieties" },
        { title: "Door Locks", url: "/history/door-locks" },
        { title: "Dried River", url: "/history/dried-river" },
        { title: "Flight", url: "/history/flight" },
        { title: "Haman", url: "/history/haman" },
        { title: "Karnak Temple", url: "/history/karnak-temple" },
        { title: "Moses", url: "/history/moses" },
        { title: "Mourning of Pharoah", url: "/history/mourning-of-pharoah" },
        { title: "Noah", url: "/history/noah" },
        { title: "North", url: "/history/north" },
        { title: "Paper Money", url: "/history/paper-money" },
        { title: "Petra", url: "/history/petra" },
        { title: "Pharoah", url: "/history/pharoah" },
        { title: "Pharoah Mummy", url: "/history/pharoah-mummy" },
        { title: "Pompiee", url: "/history/pomipee" },
        { title: "Prostrations", url: "/history/prostrations" },
        { title: "Skydiving", url: "/history/skydiving" },
        { title: "Ubar", url: "/history/ubar" },
      ],
    },
    Math: {
      icon: Hash,
      items: [
        { title: "Abjad Numerals", url: "/math/abjad-numerals" },
        { title: "Base 19", url: "/math/base-19" },
        { title: "Digital Books", url: "/math/digital-books" },
        { title: "Encoding", url: "/math/encoding" },
        { title: "Euler", url: "/math/euler" },
        { title: "Hypersonic", url: "/math/hypersonic" },
        { title: "Kilometer", url: "/math/kilometer" },
        { title: "Light Year", url: "/math/light-year" },
        { title: "Meter", url: "/math/meter" },
        { title: "Miles", url: "/math/miles" },
        { title: "Pi", url: "/math/pi" },
        { title: "Prime Numbers", url: "/math/prime-number" },
        { title: "Pulsar Navigation", url: "/math/pulsar-navigation" },
      ],
    },
    Meteorology: {
      icon: Cloud,
      items: [
        { title: "Acid Rain", url: "/meteorology/acid-rain" },
        { title: "Atmosphere", url: "/meteorology/atmosphere" },
        {
          title: "Atmospheric Pressure",
          url: "/meteorology/atmospheric-pressure",
        },
        { title: "Cloud Seeding", url: "/meteorology/cloud-seeding" },
        { title: "Desertification", url: "/meteorology/desertification" },
        { title: "Dew", url: "/meteorology/dew" },
        { title: "Fire Whirl", url: "/meteorology/fire-whirl" },
        { title: "Flash Flood", url: "/meteorology/flash-flood" },
        { title: "Fresh Water", url: "/meteorology/fresh-water" },
        { title: "Frost Weathering", url: "/meteorology/frost-weathering" },
        { title: "Microburst", url: "/meteorology/microburst" },
        { title: "Orographic Effect", url: "/meteorology/orographic-effect" },
        { title: "Sea Breeze", url: "/meteorology/sea-breeze" },
        { title: "Shoreline", url: "/meteorology/shoreline" },
        { title: "Water", url: "/meteorology/water" },
        { title: "Water Cycle", url: "/meteorology/water-cycle" },
        { title: "Weight of Clouds", url: "/meteorology/weight-of-clouds" },
        { title: "Wind", url: "/meteorology/wind" },
      ],
    },
    Zoology: {
      icon: Bug,
      items: [
        { title: "Ants", url: "/zoology/ants" },
        { title: "Animal Language", url: "/zoology/animal-language" },

        { title: "Camels", url: "/zoology/camels" },
        { title: "Colonies", url: "/zoology/colonies" },
        { title: "Crow", url: "/zoology/crow" },
        { title: "Exoskeleton", url: "/zoology/exoskeleton" },
        { title: "Fossils", url: "/zoology/fossils" },
        { title: "Honey Bees", url: "/zoology/honer-bees" },
        { title: "Housefly", url: "/zoology/housefly" },
        { title: "Magnetoreception", url: "/zoology/magnetoreception" },
        { title: "Mosquito", url: "/zoology/mosquito" },
        { title: "Raptors", url: "/zoology/raptors" },
        { title: "Spider Web", url: "/zoology/spider-web" },
      ],
    },
    Physics: {
      icon: Settings,
      items: [
        { title: "Armor Piercing", url: "/physics/armor-piercing" },
        { title: "Atom", url: "/physics/atom" },
        { title: "Cold Plasma", url: "/physics/cold-plasma" },
        { title: "Light", url: "/physics/light" },
        { title: "Mass", url: "/physics/mass" },
        { title: "Pairs", url: "/physics/pairs" },
        { title: "Pulsar", url: "/physics/pulsar" },
        { title: "Rayleigh Scattering", url: "/physics/rayleigh-scattering" },

        { title: "Singularity", url: "/physics/singularity" },
        { title: "Solar Energy", url: "/physics/solar-energy" },
        { title: "Sonic Weapons", url: "/physics/sonic-weapons" },
        { title: "Speed of Light", url: "/physics/speed-of-light" },
        { title: "String Theory", url: "/physics/string-theory" },
        { title: "Terminal Velocity", url: "/physics/terminal-velocity" },
        { title: "Work", url: "/physics/work" },
        { title: "Wormhole", url: "/physics/wormhole" },
      ],
    },
  };

  // Function to determine if a link is currently active
  const isActive = (url: string) => {
    return currentPath === url;
  };

  // Custom menu item component with active state highlighting
  interface MenuItemProps {
    item: {
      title: string;
      url: string;
      icon?: React.ComponentType;
    };
  }

  const MenuItemWithActiveState: React.FC<MenuItemProps> = ({ item }) => {
    const active = isActive(item.url);
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          className={
            active
              ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-primary/10"
              : ""
          }
        >
          <a href={item.url}>
            {item.icon &&
              React.createElement(
                item.icon as React.ComponentType<{ size?: number }>,
                { size: 16 }
              )}
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  // Render a submenu with its items
  const renderSubMenu = (items: Array<{ title: string; url: string }>) => {
    return (
      <div className="pl-6">
        <SidebarMenu>
          {items.map((item) => (
            <MenuItemWithActiveState key={item.title} item={item} />
          ))}
        </SidebarMenu>
      </div>
    );
  };

  // Render a category with nested subcategories
  const renderCategory = (
    categoryName: string,
    category: {
      icon: React.ComponentType<{ size?: number }>;
      items?: Array<{ title: string; url: string }>;
      subCategories?: Record<string, Array<{ title: string; url: string }>>;
    }
  ) => {
    const isExpanded = !!expandedCategories[categoryName];
    const Icon = category.icon;

    return (
      <SidebarGroup key={categoryName} className="p-0">
        <Collapsible
          open={isExpanded}
          onOpenChange={() => toggleCategory(categoryName)}
        >
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <Icon size={16} />
                <span>{categoryName}</span>
              </div>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </SidebarGroupLabel>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarGroupContent>
              {/* Render subcategories if they exist */}
              {category.subCategories &&
                Object.entries(category.subCategories).map(
                  ([subCatName, subItems]) => (
                    <Collapsible key={subCatName}>
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-800 cursor-pointer">
                          <span>{subCatName}</span>
                          <ChevronDown
                            size={14}
                            className="transition-transform ui-open:rotate-180"
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {renderSubMenu(subItems)}
                      </CollapsibleContent>
                    </Collapsible>
                  )
                )}

              {/* Render direct items if they exist */}
              {category.items && renderSubMenu(category.items)}
            </SidebarGroupContent>
          </CollapsibleContent>
        </Collapsible>
      </SidebarGroup>
    );
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-4 items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Brand logo"
                width={32}
                height={32}
                className="object-contain"
              />{" "}
            </Link>
            <div className="text-core flex flex-col font-semibold text-lg leading-3">
              <span className="tracking-wide text-lg m-0">Quranic Verses</span>
            </div>
            <ModeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto max-h-[calc(100vh-120px)]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={
                    isActive("/")
                      ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-muted"
                      : ""
                  }
                >
                  <a href="/">
                    <Home size={16} />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Render science categories */}
        {Object.entries(scienceCategories).map(([categoryName, category]) =>
          renderCategory(categoryName, category)
        )}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Settings size={16} /> Settings
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Privacy & Policy</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>About Us</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Contact Us</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarComponent;
