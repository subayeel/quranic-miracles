import {
  Settings,
  Microscope,
  Earth,
  FlaskConical,
  Hash,
  Cloud,
  Mountain,
  Bug,
  Book,
  Baby,
  Torus,
} from "lucide-react";

export const scienceCategories = {
  Astronomy: {
    icon: Earth,
    items: [
      { title: "Magnetosphere", url: "/astronomy/magnetosphere" },

      { title: "Moonlight", url: "/astronomy/moonlight" },

      { title: "Planetary Orbits", url: "/astronomy/planetary-orbits" },

      { title: "Red Giant", url: "/astronomy/red-giant" },
      { title: "Sirius", url: "/astronomy/sirius" },

      { title: "Starlight", url: "/astronomy/starlight" },

      { title: "Tidal Locking", url: "/astronomy/tidal-locking" },
    ],
  },
  Biology: {
    icon: Microscope,
    items: [
      { title: "Breastfeeding", url: "/biology/breastfeeding" },

      { title: "Fasting", url: "/biology/fasting" },

      { title: "Gardens", url: "/biology/gardens" },
      { title: "Honey", url: "/biology/honey" },
      { title: "Hypoxia", url: "/biology/hypoxia" },
      { title: "Keraunoparalysis", url: "/biology/keraunoparalysis" },

      { title: "Plant Stress", url: "/biology/plant-stress" },
      { title: "Pollination", url: "/biology/pollination" },
      { title: "White Hair", url: "/biology/white-hair" },
    ],
  },
  Chemistry: {
    icon: FlaskConical,
    items: [
      { title: "Halocline", url: "/chemistry/halocline" },

      { title: "Iron", url: "/chemistry/iron" },

      { title: "Pyritized Fossils", url: "/chemistry/pyritized-fossils" },

      { title: "Superionic Water", url: "/chemistry/superionic-water" },
    ],
  },
  Cosmology: {
    icon: Torus,
    items: [
      { title: "Age Of Universe", url: "/cosmology/age-of-universe" },
      { title: "Big Bang", url: "/cosmology/big-bang" },
      { title: "Big Crunch", url: "/cosmology/big-crunch" },
      { title: "Dark Energy", url: "/cosmology/dark-energy" },

      { title: "Expanding Universe", url: "/cosmology/expanding-universe" },

      { title: "Gravitation Waves", url: "/cosmology/gravitation-waves" },
      { title: "Gravity", url: "/cosmology/gravity" },

      { title: "Primordial Smoke", url: "/cosmology/primordial-smoke" },
      { title: "Red Shifting", url: "/cosmology/red-shifting" },
      { title: "Seven Heavens", url: "/cosmology/seven-heavens" },
      { title: "Shape of Universe", url: "/cosmology/shape-of-universe" },
    ],
  },
  Embryology: {
    icon: Baby,
    items: [
      { title: "Bones", url: "/embroyology/bones" },
      { title: "Fetal Development", url: "/embroyology/fetal-development" },
      { title: "Gender", url: "/embroyology/gender" },
      { title: "Human Embryo", url: "/embroyology/human-embryo" },
      { title: "Human Senses", url: "/embroyology/human-senses" },
    ],
  },
  Geology: {
    icon: Mountain,
    items: [
      { title: "Asthenosphere", url: "/geology/asthenosphere" },
      { title: "Coal", url: "/geology/coal" },

      { title: "Earth", url: "/geology/earth" },
      { title: "Earthquake", url: "/geology/earthquake" },
      { title: "Fault Lines", url: "/geology/fault-lines" },

      { title: "Internal Mountains", url: "/geology/internal-mountains" },
      { title: "Internal Waves", url: "/geology/internal-waves" },
      { title: "Landslides", url: "/geology/landslides" },

      { title: "Mountain", url: "/geology/mountain" },
      { title: "Photic Zone", url: "/geology/photic-zone" },
      { title: "Porous Rocks", url: "/geology/porous-rocks" },
      { title: "Pumice", url: "/geology/pumice" },
      { title: "Sinkhole", url: "/geology/sinkhole" },
      { title: "Soil Expansion", url: "/geology/soil-expansion" },

      { title: "Steam Explosions", url: "/geology/steam-explosions" },
      { title: "Subduction", url: "/geology/subduction" },

      { title: "Tectonics", url: "/geology/tectonics" },
      { title: "Volcano", url: "/geology/volcano" },
      { title: "Weathering & Erosions", url: "/geology/weathering-erosions" },
    ],
  },
  History: {
    icon: Book,
    items: [
      { title: "Crucifixtion", url: "/history/crucifixtion" },
      { title: "Deities", url: "/history/deities" },

      { title: "Dried River", url: "/history/dried-river" },
      { title: "Flight", url: "/history/flight" },
      { title: "Haman", url: "/history/haman" },
      { title: "Karnak Temple", url: "/history/karnak-temple" },
      { title: "Moses", url: "/history/moses" },
      { title: "Mourning of Pharoah", url: "/history/mourning-of-pharoah" },
      { title: "Noah", url: "/history/noah" },

      { title: "Petra", url: "/history/petra" },
      { title: "Pharoah", url: "/history/pharoah" },
      { title: "Pharoah Mummy", url: "/history/pharoah-mummy" },

      { title: "Ubar", url: "/history/ubar" },
    ],
  },
  Math: {
    icon: Hash,
    items: [
      { title: "Abjad Numerals", url: "/math/abjad-numerals" },
      { title: "Base 19", url: "/math/base-19" },

      { title: "Encoding", url: "/math/encoding" },

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
      { title: "Atmosphere", url: "/meteorology/atmosphere" },
      {
        title: "Atmospheric Pressure",
        url: "/meteorology/atmospheric-pressure",
      },

      { title: "Desertification", url: "/meteorology/desertifiction" },

      { title: "Water", url: "/meteorology/water" },
      { title: "Water Cycle", url: "/meteorology/water-cycle" },
      { title: "Weight of Clouds", url: "/meteorology/weight-of-clouds" },
    ],
  },
  Physics: {
    icon: Settings,
    items: [
      { title: "Atom", url: "/physics/atom" },

      { title: "Pairs", url: "/physics/pairs" },
      { title: "Pulsar", url: "/physics/pulsar" },

      { title: "Solar Energy", url: "/physics/solar-energy" },
      { title: "Sonic Weapons", url: "/physics/sonic-weapons" },

      { title: "String Theory", url: "/physics/string-theory" },

      { title: "Work", url: "/physics/work" },
      { title: "Wormhole", url: "/physics/wormhole" },
    ],
  },
  Physiology: {
    icon: Microscope,
    items: [
      { title: "Brain Function", url: "/physiology/brain-function" },
      { title: "Brain Stem", url: "/physiology/brain-stem" },

      { title: "Ear Drum", url: "/physiology/ear-drum" },
      { title: "Finger Prints", url: "/physiology/fingerprints" },
      { title: "Flash Blindness", url: "/physiology/flash-blindness" },

      { title: "Milk", url: "/physiology/milk" },
      { title: "Neurons", url: "/physiology/neurons" },

      { title: "Skin Nerves", url: "/physiology/skin-nerves" },
    ],
  },
  Zoology: {
    icon: Bug,
    items: [
      { title: "Animal Language", url: "/zoology/animal-language" },
      { title: "Ants", url: "/zoology/ants" },
      { title: "Camels", url: "/zoology/camels" },
      { title: "Colonies", url: "/zoology/colonies" },
      { title: "Crow", url: "/zoology/crow" },
      { title: "Exoskeleton", url: "/zoology/exoskeleton" },

      { title: "Honey Bees", url: "/zoology/honey-bees" },
      { title: "Housefly", url: "/zoology/housefly" },

      { title: "Mosquito", url: "/zoology/mosquito" },
      { title: "Raptor", url: "/zoology/raptor" },
      { title: "Spider Web", url: "/zoology/spider-web" },
    ],
  },
};
