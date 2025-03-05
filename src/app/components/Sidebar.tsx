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
        ],
        Botany: [
          { title: "Chlorophyll", url: "/biology/botany/chlorophyll" },
          { title: "Pollination", url: "/biology/botany/pollination" },
          { title: "Plant Stress", url: "/biology/botany/plant-stress" },
        ],
      },
      items: [
        { title: "Bioluminescence", url: "/biology/bioluminescence" },
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
      subCategories: {
        Hydrology: [
          { title: "Porous Rocks", url: "/geology/hydrology/porous-rocks" },
          {
            title: "Steam Explosions",
            url: "/geology/hydrology/steam-explosions",
          },
          { title: "Dead Sea", url: "/geology/hydrology/dead-sea" },
        ],
      },
      items: [
        { title: "Mountains", url: "/geology/mountains" },
        { title: "Earthquake", url: "/geology/earthquake" },
        { title: "Volcano", url: "/geology/volcano" },
        { title: "Tectonics", url: "/geology/tectonics" },
      ],
    },
    Math: {
      icon: Hash,
      items: [
        { title: "Prime Numbers", url: "/math/prime-numbers" },
        { title: "Pi", url: "/math/pi" },
        { title: "Encoding", url: "/math/encoding" },
        { title: "Digital Books", url: "/math/digital-books" },
      ],
    },
    Meteorology: {
      icon: Cloud,
      items: [
        { title: "Atmosphere", url: "/meteorology/atmosphere" },
        { title: "Water", url: "/meteorology/water" },
        { title: "Desertification", url: "/meteorology/desertification" },
        { title: "Wind", url: "/meteorology/wind" },
        { title: "Water Cycle", url: "/meteorology/water-cycle" },
      ],
    },
    Zoology: {
      icon: Bug,
      items: [
        { title: "Raptors", url: "/zoology/raptors" },
        { title: "Spider Web", url: "/zoology/spider-web" },
        { title: "Ants", url: "/zoology/ants" },
        { title: "Honey Bees", url: "/zoology/honey-bees" },
        { title: "Animal Languages", url: "/zoology/animal-languages" },
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
