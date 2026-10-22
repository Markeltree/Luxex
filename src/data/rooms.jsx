import { FaWifi, FaTv, FaBed, FaSnowflake, FaCoffee, FaShower, FaUmbrellaBeach, FaConciergeBell, FaWineGlass, FaSwimmingPool } from "react-icons/fa";

export const deluxeDoubleRoom = {
  id: "deluxe-double-room",
  name: "Deluxe Double Room",
  size: 55,
  unit: "Square Meters",

  description:
    "Designed for discerning travelers seeking serenity and sophistication. The Deluxe Double Room features a king-size plush bed adorned with fine Italian linens, acoustic soundproofing, bespoke walnut furnishings, and expansive floor-to-ceiling windows capturing breathtaking coastal vistas.",

  additionalDescription:
    "Step onto your private furnished balcony for morning espresso, or unwind in the en-suite Calacatta marble bathroom equipped with a walk-in rain shower, premium organic amenities, and plush terry robes.",

  quote: "An oasis of understated luxury where every moment is curated for total relaxation and comfort.",

  mainImage: "/assets/images/rooms/rooms-single/1.webp",
  gallery: [
    {
      src: "/assets/images/rooms/rooms-single/1.webp",
      caption: "Private Balcony with View",
    },
    {
      src: "/assets/images/rooms/rooms-single/2.webp",
      caption: "Spacious Living Area",
    },
    {
      src: "/assets/images/rooms/rooms-single/3.webp",
      caption: "Elegant Bedroom Design",
    },
    {
      src: "/assets/images/rooms/rooms-single/4.webp",
      caption: "Modern Room Interior",
    },
    {
      src: "/assets/images/rooms/rooms-single/5.webp",
      caption: "Bright Morning Retreat",
    },
  ],

  amenities: [
    { icon: <FaWifi />, label: "High-Speed Wifi" },
    { icon: <FaTv />, label: "Smart TV" },
    { icon: <FaBed />, label: "King Bed" },
    { icon: <FaSnowflake />, label: "Air Conditioning" },
    { icon: <FaConciergeBell />, label: "Room Service" },
    { icon: <FaShower />, label: "Rain Shower" },
    { icon: <FaCoffee />, label: "Coffee Maker" },
    { icon: <FaUmbrellaBeach />, label: "Balcony" },
  ],

  details: [
    { label: "Bedding", value: "1 King Bed" },
    { label: "Occupancy", value: "Sleeps 2 Guests" },
    { label: "View", value: "Panoramic Sea View" },
    { label: "Bathroom", value: "Private with Walk-in Rain Shower" },
  ],

  heroSlides: [
    {
      media: "/assets/images/rooms/rooms-intro/1.webp",
      title: "Deluxe Double Room",
      buttonText: "View More",
      buttonLink: "#room",
    },
  ],
};

export const singleRoom = {
  id: "single-room",
  name: "Executive Single Room",
  size: 40,
  unit: "Square Meters",

  description:
    "Tailored for the modern solo explorer or business executive, the Executive Single Room combines ergonomic luxury with intimate comfort. Featuring a handcrafted plush bed, dedicated workspace with high-speed fiber connectivity, and contemporary art accents.",

  additionalDescription:
    "Enjoy automated climate control, smart room automation, and a spa-inspired rain shower to rejuvenate after a day of meetings or coastal exploration.",

  quote: "Intimate, stylish, and flawlessly appointed for the modern cosmopolitan traveler.",

  mainImage: "/assets/images/rooms/rooms-single/2.webp",

  gallery: [
    {
      src: "/assets/images/rooms/rooms-single/1.webp",
      caption: "Private Balcony with View",
    },
    {
      src: "/assets/images/rooms/rooms-single/2.webp",
      caption: "Spacious Living Area",
    },
    {
      src: "/assets/images/rooms/rooms-single/3.webp",
      caption: "Elegant Bedroom Design",
    },
    {
      src: "/assets/images/rooms/rooms-single/4.webp",
      caption: "Modern Room Interior",
    },
    {
      src: "/assets/images/rooms/rooms-single/5.webp",
      caption: "Bright Morning Retreat",
    },
  ],

  amenities: [
    { icon: <FaWifi />, label: "Free Fiber Wifi" },
    { icon: <FaTv />, label: "Smart TV" },
    { icon: <FaBed />, label: "Queen Bed" },
    { icon: <FaSnowflake />, label: "Air Conditioning" },
    { icon: <FaConciergeBell />, label: "Room Service" },
    { icon: <FaShower />, label: "Private Bathroom" },
    { icon: <FaCoffee />, label: "Nespresso Coffee" },
    { icon: <FaUmbrellaBeach />, label: "Balcony" },
  ],

  details: [
    { label: "Bedding", value: "1 Queen Bed" },
    { label: "Occupancy", value: "Sleeps 1-2 Guests" },
    { label: "View", value: "Garden or Coastal View" },
    { label: "Bathroom", value: "Private with Rain Shower" },
  ],

  heroSlides: [
    {
      media: "/assets/images/rooms/rooms-intro/1.webp",
      title: "Executive Single Room",
      buttonText: "View More",
      buttonLink: "#room",
    },
  ],
};

export const familySuite = {
  id: "family-suite",
  name: "Family Suite",
  size: 95,
  unit: "Square Meters",

  description:
    "Offering generous space and effortless privacy for families and groups, the Family Suite boasts separate master and secondary bedrooms alongside an expansive living lounge. Styled with warm natural wood tones, custom textiles, and panoramic terrace access.",

  additionalDescription:
    "Includes an interactive smart entertainment system, dual vanity marble bathrooms, in-suite dining area, and personalized concierge assistance for family excursions.",

  quote: "Cherished moments and unparalleled comfort for the entire family in a private coastal sanctuary.",

  mainImage: "/assets/images/rooms/rooms-single/3.webp",

  gallery: [
    {
      src: "/assets/images/rooms/rooms-single/1.webp",
      caption: "Private Balcony with View",
    },
    {
      src: "/assets/images/rooms/rooms-single/2.webp",
      caption: "Spacious Living Area",
    },
    {
      src: "/assets/images/rooms/rooms-single/3.webp",
      caption: "Elegant Bedroom Design",
    },
    {
      src: "/assets/images/rooms/rooms-single/4.webp",
      caption: "Modern Room Interior",
    },
    {
      src: "/assets/images/rooms/rooms-single/5.webp",
      caption: "Bright Morning Retreat",
    },
  ],

  amenities: [
    { icon: <FaWifi />, label: "High-Speed Wifi" },
    { icon: <FaTv />, label: "Smart TV" },
    { icon: <FaBed />, label: "King & Twin Beds" },
    { icon: <FaSnowflake />, label: "Climate Control" },
    { icon: <FaConciergeBell />, label: "Room Service" },
    { icon: <FaShower />, label: "Dual Rain Shower" },
    { icon: <FaCoffee />, label: "Coffee Station" },
    { icon: <FaUmbrellaBeach />, label: "Private Terrace" },
  ],

  details: [
    { label: "Bedding", value: "1 King Bed + 2 Twin Beds" },
    { label: "Occupancy", value: "Sleeps 4-5 Guests" },
    { label: "View", value: "Panoramic Ocean View" },
    { label: "Bathroom", value: "Two Private Bathrooms with Showers" },
  ],

  heroSlides: [
    {
      media: "/assets/images/rooms/rooms-intro/1.webp",
      title: "Family Suite",
      buttonText: "View More",
      buttonLink: "#room",
    },
  ],
};

export const presidentialPenthouse = {
  id: "presidential-penthouse",
  name: "Presidential Penthouse",
  size: 240,
  unit: "Square Meters",

  description:
    "The pinnacle of world-class indulgence. Crowning the top floor with 360-degree panoramic ocean and skyline views, the Presidential Penthouse features a grand salon, private cocktail bar, dedicated 24/7 butler service, and an expansive wraparound rooftop terrace with infinity plunge pool.",

  additionalDescription:
    "Three master bedroom suites with walk-in dressing rooms, marble en-suite sanctuaries with freestanding soaking tubs, and private elevator access ensure the ultimate discretion and prestige.",

  quote: "Unrivaled grandeur, breathtaking vistas, and bespoke white-glove service at the absolute highest level.",

  mainImage: "/assets/images/rooms/rooms-single/4.webp",
  gallery: [
    {
      src: "/assets/images/rooms/rooms-single/1.webp",
      caption: "Private Balcony with View",
    },
    {
      src: "/assets/images/rooms/rooms-single/2.webp",
      caption: "Spacious Living Area",
    },
    {
      src: "/assets/images/rooms/rooms-single/3.webp",
      caption: "Elegant Bedroom Design",
    },
    {
      src: "/assets/images/rooms/rooms-single/4.webp",
      caption: "Modern Room Interior",
    },
    {
      src: "/assets/images/rooms/rooms-single/5.webp",
      caption: "Bright Morning Retreat",
    },
  ],

  amenities: [
    { icon: <FaWifi />, label: "Ultra-Fast Fiber" },
    { icon: <FaTv />, label: "8K Home Cinema" },
    { icon: <FaBed />, label: "3 King Beds" },
    { icon: <FaSnowflake />, label: "Climate Control" },
    { icon: <FaConciergeBell />, label: "24/7 Butler Service" },
    { icon: <FaShower />, label: "Steam Shower & Tub" },
    { icon: <FaWineGlass />, label: "Private Wine Cellar" },
    { icon: <FaSwimmingPool />, label: "Private Plunge Pool" },
  ],

  details: [
    { label: "Bedding", value: "3 King Master Suites" },
    { label: "Occupancy", value: "Sleeps up to 6 Guests" },
    { label: "View", value: "360° Panoramic Sea & Horizon" },
    { label: "Bathroom", value: "3 En-suite with Freestanding Tubs" },
  ],

  heroSlides: [
    {
      media: "/assets/images/rooms/rooms-intro/1.webp",
      title: "Presidential Penthouse",
      buttonText: "View More",
      buttonLink: "#room",
    },
  ],
};
