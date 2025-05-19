// src/app/page.tsx
"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react"; // Added SearchIcon

import { scienceCategories } from "@/lib/data";

// Define the structure for items and categories
interface Item {
  title: string;
  url: string;
  description?: string; // Optional: Add a brief description for cards
  author?: string; // Optional: For card metadata
  publishDate?: string; // Optional: For card metadata
  image?: string; // Optional: Image for the card
}

interface SubCategory {
  [key: string]: Item[];
}

interface Category {
  icon: React.ComponentType; // Or a more specific type for Lucide icons
  items?: Item[];
  subCategories?: SubCategory;
}

interface ScienceCategories {
  [key: string]: Category;
}

// Flatten the categories data for easier searching and filtering
const getAllItems = (
  categories: ScienceCategories
): (Item & { category: string; subCategory?: string })[] => {
  let allItems: (Item & { category: string; subCategory?: string })[] = [];
  for (const categoryName in categories) {
    const category = categories[categoryName];
    if (category.items) {
      allItems = allItems.concat(
        category.items.map((item) => ({ ...item, category: categoryName }))
      );
    }
    if (category.subCategories) {
      for (const subCategoryName in category.subCategories) {
        allItems = allItems.concat(
          category.subCategories[subCategoryName].map((item) => ({
            ...item,
            category: categoryName,
            subCategory: subCategoryName,
          }))
        );
      }
    }
  }
  return allItems;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<string>("All"); // Default to "All" or first category

  // Use the imported scienceCategoriesData or fetch it
  // For this example, let's assume scienceCategoriesData is available from SidebarComponent or a shared file
  const allScienceItems = useMemo(() => getAllItems(scienceCategories), []);
  const mainCategories = useMemo(
    () => ["All", ...Object.keys(scienceCategories)],
    []
  );

  useEffect(() => {
    // If there's a search term, we might want to switch the tab to "All"
    // or handle search within the active tab.
    // For this example, searching will clear the active tab to search all.
    if (searchTerm) {
      // setActiveTab("All"); // Or some indicator that search is active
    }
  }, [searchTerm]);

  const filteredItems = useMemo(() => {
    let itemsToDisplay =
      activeTab === "All"
        ? allScienceItems
        : allScienceItems.filter((item) => item.category === activeTab);

    if (searchTerm) {
      itemsToDisplay = allScienceItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // If search yields results, we can also update the active tab to show which category the top result belongs to,
      // or just keep it "All" / clear it. For now, let's not change the tab automatically on search.
    }
    return itemsToDisplay;
  }, [searchTerm, activeTab, allScienceItems]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchTerm(""); // Clear search when changing tabs
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (event.target.value !== "") {
      // If user starts typing, we might want to switch to an "All" tab implicitly
      // or let them search within the current tab.
      // For now, let's assume searching means across all categories.
      setActiveTab("All");
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between p-4 border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search miracles..."
                className="pl-9 w-full" // Added padding for the icon
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </header>

        {/* Tabs for Categories */}
        <div className="p-4 border-b max-w-[300px] overflow-x-auto md:max-w-[2000px]">
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="overflow-x-auto whitespace-nowrap no-scrollbar justify-start">
              {mainCategories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {/*
              We don't need TabsContent here if we're dynamically rendering cards below
              based on the activeTab and searchTerm.
              If each tab had distinctly different content structures, then TabsContent would be useful.
            */}
          </Tabs>
        </div>

        {/* Content Grid / List */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {filteredItems.map((item, index) => (
                <Card key={index} className="flex flex-col">
                  {item.image && (
                    <Image
                      src={item.image || "/placeholder-image.jpg"} // Provide a fallback placeholder
                      alt={item.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {item.description ||
                        `Explore the details of ${item.title.toLowerCase()} as mentioned in the Quran and supported by modern science.`}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-slate-800 hover:bg-slate-700 dark:bg-primary dark:hover:bg-primary/90"
                    >
                      <Link href={item.url}>Read more</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-muted-foreground">
                {searchTerm
                  ? `No results found for "${searchTerm}".`
                  : "No items in this category yet."}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// You'll need to modify your SidebarComponent to export scienceCategoriesData
// or move scienceCategoriesData to a shared location (e.g., a data.ts file)
// and import it in both SidebarComponent.tsx and page.tsx.

// Example of how you might export it from SidebarComponent.tsx:
// (Add this to your existing SidebarComponent.tsx file)
/*
  // ... (rest of your SidebarComponent code)

  export const scienceCategoriesData = { // Ensure this matches the name used in Home page
    Astronomy: {
      icon: Earth,
      items: [
        { title: "Stars", url: "/astronomy/stars", description: "The Quran on celestial bodies...", author: "Dr. Ali", publishDate: "2h ago", image: "/images/stars.jpg" },
        // ... other items with optional fields
      ],
    },
    // ... other categories
  };

  const SidebarComponent = () => {
    // ... your existing component logic using scienceCategoriesData (or simply `scienceCategories` if defined locally)
  }
  export default SidebarComponent;
*/

// Create a dummy data file if you prefer (e.g., src/lib/data.ts)
/*
// src/lib/data.ts
import { Earth, Microscope, FlaskConical, Atom, History as HistoryIcon, Mountain, Book, Hash, Cloud, Bug, Settings } from "lucide-react"; // Use HistoryIcon alias

interface Item {
  title: string;
  url: string;
  description?: string;
  author?: string;
  publishDate?: string;
  image?: string;
}

interface SubCategory {
  [key: string]: Item[];
}

interface Category {
  icon: React.ComponentType<any>;
  items?: Item[];
  subCategories?: SubCategory;
}

export interface ScienceCategories { // Exporting the interface
  [key: string]: Category;
}


export const scienceCategoriesData: ScienceCategories = {
    Astronomy: {
      icon: Earth,
      items: [
        { title: "Stars", url: "/astronomy/stars", description: "The Quran on celestial bodies and their formations.", author: "Dr. Ali", publishDate: "2h ago", image: "/images/astronomy/stars.jpg" },
        { title: "Red Giant", url: "/astronomy/red-giant", description: "Stages of star life cycles mentioned.", author: "Dr. Fatima", publishDate: "3h ago", image: "/images/astronomy/red-giant.jpg" },
        { title: "Venus", url: "/astronomy/venus", description: "Description of planets and their characteristics.", author: "Prof. Ahmed", publishDate: "1d ago", image: "/images/astronomy/venus.jpg" },
        // ... add more items with descriptions, authors, dates, and images
      ],
    },
    Biology: {
      icon: Microscope,
      items: [
         { title: "Bioluminescence", url: "/biology/bioluminescence", description: "Light production by living organisms.", author: "Dr. Omar", publishDate: "5h ago", image: "/images/biology/bioluminescence.jpg" },
         { title: "Evolution", url: "/biology/evolution", description: "The Quran and the concept of creation and development.", author: "Dr. Layla", publishDate: "6h ago", image: "/images/biology/evolution.jpg" },
      ],
      subCategories: {
        Embryology: [
          { title: "Meiosis", url: "/biology/embryology/meiosis", description: "Cell division in human reproduction.", author: "Dr. Yasmin", publishDate: "2d ago", image: "/images/biology/embryology/meiosis.jpg" },
          { title: "Fetal Development", url: "/biology/embryology/fetal-development", description: "Stages of fetal growth described in the Quran.", author: "Dr. Ibrahim", publishDate: "2d ago", image: "/images/biology/embryology/fetal-development.jpg" },
        ],
        Physiology: [
          { title: "Neurons", url: "/biology/physiology/neurons", description: "The nervous system and its functions.", author: "Dr. Aisha", publishDate: "3d ago", image: "/images/biology/physiology/neurons.jpg" },
        ],
        Botany: [
            { title: "Chlorophyll", url: "/biology/botany/chlorophyll", description: "The green pigment in plants essential for photosynthesis.", author: "Dr. Hasan", publishDate: "1w ago", image: "/images/biology/botany/chlorophyll.jpg" },
        ]
      },
    },
    // ... Add descriptions, authors, dates, and images for all other categories and items
    // ... Ensure you have a good variety for demonstration
    Chemistry: {
      icon: FlaskConical,
      items: [
        { title: "Hydrogen", url: "/chemistry/hydrogen", description: "The element hydrogen and its significance.", author: "Dr. Ali", publishDate: "4h ago", image: "/images/chemistry/hydrogen.jpg" },
      ],
    },
    Cosmology: {
      icon: Atom,
      items: [
        { title: "Big Bang", url: "/cosmology/big-bang", description: "The Quran's perspective on the origin of the universe.", author: "Prof. Ahmed", publishDate: "1d ago", image: "/images/cosmology/big-bang.jpg" },
      ],
    },
    // Add placeholder images in your public/images directory
    // e.g., public/images/astronomy/stars.jpg, public/images/biology/bioluminescence.jpg etc.
};
*/
