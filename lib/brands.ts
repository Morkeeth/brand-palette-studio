// Brand design systems from iconic startups

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface Brand {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  colors: BrandColors;
  gradient: string;
  typography: {
    heading: string;
    body: string;
    style: string;
  };
  voice: {
    tone: string;
    principles: string[];
  };
  quote: {
    text: string;
    author: string;
  };
}

export const BRANDS: Brand[] = [
  {
    id: "openai",
    name: "OpenAI",
    industry: "AI",
    tagline: "Building safe AGI that benefits all of humanity",
    colors: {
      primary: "#10A37F",
      secondary: "#000000",
      accent: "#74AA9C",
      background: "#FFFFFF",
      text: "#1A1A1A",
    },
    gradient: "linear-gradient(135deg, #10A37F 0%, #74AA9C 50%, #000000 100%)",
    typography: {
      heading: "Söhne",
      body: "Söhne",
      style: "Clean, modern, highly readable",
    },
    voice: {
      tone: "Intelligent, approachable, forward-thinking",
      principles: [
        "Clear and concise",
        "Technically accurate",
        "Human-centric",
        "Future-focused",
      ],
    },
    quote: {
      text: "Our mission is to ensure that artificial general intelligence benefits all of humanity.",
      author: "OpenAI Team",
    },
  },
  {
    id: "stripe",
    name: "Stripe",
    industry: "Fintech",
    tagline: "Financial infrastructure for the internet",
    colors: {
      primary: "#635BFF",
      secondary: "#0A2540",
      accent: "#00D4FF",
      background: "#FFFFFF",
      text: "#0A2540",
    },
    gradient: "linear-gradient(135deg, #635BFF 0%, #00D4FF 50%, #0A2540 100%)",
    typography: {
      heading: "Camphor",
      body: "Camphor",
      style: "Professional, trustworthy, precise",
    },
    voice: {
      tone: "Professional, trustworthy, developer-first",
      principles: [
        "Be direct and honest",
        "Assume intelligence",
        "Build trust through clarity",
        "Empower developers",
      ],
    },
    quote: {
      text: "Increase the GDP of the internet.",
      author: "Patrick Collison, CEO",
    },
  },
  {
    id: "linear",
    name: "Linear",
    industry: "Productivity",
    tagline: "Built for high-performance teams",
    colors: {
      primary: "#5E6AD2",
      secondary: "#101114",
      accent: "#7F8AC4",
      background: "#16181D",
      text: "#FFFFFF",
    },
    gradient: "linear-gradient(135deg, #101114 0%, #5E6AD2 50%, #7F8AC4 100%)",
    typography: {
      heading: "SF Pro Display",
      body: "SF Pro Text",
      style: "Sleek, technical, purposeful",
    },
    voice: {
      tone: "Precise, elegant, performance-focused",
      principles: [
        "Speed is a feature",
        "Design for power users",
        "Minimal but powerful",
        "Craft every detail",
      ],
    },
    quote: {
      text: "The issue tracking tool you'll enjoy using.",
      author: "Linear Team",
    },
  },
  {
    id: "notion",
    name: "Notion",
    industry: "Productivity",
    tagline: "Your wiki, docs, and projects. Together.",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#E69B9B",
      background: "#FFFFFF",
      text: "#37352F",
    },
    gradient: "linear-gradient(135deg, #E69B9B 0%, #FFFFFF 50%, #37352F 100%)",
    typography: {
      heading: "Inter",
      body: "Inter",
      style: "Clean, organized, versatile",
    },
    voice: {
      tone: "Friendly, empowering, organized",
      principles: [
        "Make work feel less like work",
        "Empower creativity",
        "Adapt to any workflow",
        "Beautiful by default",
      ],
    },
    quote: {
      text: "Write, plan, collaborate, and get organized.",
      author: "Notion Team",
    },
  },
  {
    id: "airbnb",
    name: "Airbnb",
    industry: "Travel",
    tagline: "Belong anywhere",
    colors: {
      primary: "#FF5A5F",
      secondary: "#00A699",
      accent: "#FC642D",
      background: "#FFFFFF",
      text: "#484848",
    },
    gradient: "linear-gradient(135deg, #FF5A5F 0%, #FC642D 50%, #00A699 100%)",
    typography: {
      heading: "Cereal",
      body: "Circular",
      style: "Warm, friendly, inviting",
    },
    voice: {
      tone: "Welcoming, inspiring, community-driven",
      principles: [
        "Belong anywhere",
        "Champion the host",
        "Embrace diversity",
        "Create magical moments",
      ],
    },
    quote: {
      text: "Don't go there. Live there.",
      author: "Airbnb Marketing",
    },
  },
  {
    id: "spotify",
    name: "Spotify",
    industry: "Music",
    tagline: "Listening is everything",
    colors: {
      primary: "#1DB954",
      secondary: "#191414",
      accent: "#1ED760",
      background: "#000000",
      text: "#FFFFFF",
    },
    gradient: "linear-gradient(135deg, #191414 0%, #1DB954 50%, #1ED760 100%)",
    typography: {
      heading: "Circular",
      body: "Circular",
      style: "Bold, energetic, expressive",
    },
    voice: {
      tone: "Bold, passionate, music-first",
      principles: [
        "Love music",
        "Be bold",
        "Stay curious",
        "Celebrate individuality",
      ],
    },
    quote: {
      text: "Music for everyone.",
      author: "Spotify",
    },
  },
  {
    id: "figma",
    name: "Figma",
    industry: "Design",
    tagline: "Where teams design together",
    colors: {
      primary: "#F24E1E",
      secondary: "#A259FF",
      accent: "#0ACF83",
      background: "#FFFFFF",
      text: "#000000",
    },
    gradient: "linear-gradient(135deg, #F24E1E 0%, #A259FF 50%, #0ACF83 100%)",
    typography: {
      heading: "Inter",
      body: "Inter",
      style: "Playful, collaborative, modern",
    },
    voice: {
      tone: "Creative, collaborative, inclusive",
      principles: [
        "Make design accessible",
        "Enable collaboration",
        "Embrace constraints",
        "Stay playful",
      ],
    },
    quote: {
      text: "Design is better together.",
      author: "Dylan Field, CEO",
    },
  },
  {
    id: "vercel",
    name: "Vercel",
    industry: "DevTools",
    tagline: "Develop. Preview. Ship.",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#0070F3",
      background: "#000000",
      text: "#FFFFFF",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #333333 50%, #0070F3 100%)",
    typography: {
      heading: "Inter",
      body: "Inter",
      style: "Minimal, precise, technical",
    },
    voice: {
      tone: "Confident, minimal, performance-obsessed",
      principles: [
        "Speed is paramount",
        "Less is more",
        "Ship with confidence",
        "Developer experience first",
      ],
    },
    quote: {
      text: "Ship at the moment of inspiration.",
      author: "Guillermo Rauch, CEO",
    },
  },
  {
    id: "github",
    name: "GitHub",
    industry: "DevTools",
    tagline: "Where the world builds software",
    colors: {
      primary: "#238636",
      secondary: "#0D1117",
      accent: "#58A6FF",
      background: "#0D1117",
      text: "#C9D1D9",
    },
    gradient: "linear-gradient(135deg, #0D1117 0%, #238636 50%, #58A6FF 100%)",
    typography: {
      heading: "Mona Sans",
      body: "Mona Sans",
      style: "Technical, open, collaborative",
    },
    voice: {
      tone: "Open, collaborative, developer-centric",
      principles: [
        "Open source first",
        "Collaborate freely",
        "Build together",
        "Empower developers",
      ],
    },
    quote: {
      text: "Let's build from here.",
      author: "GitHub",
    },
  },
  {
    id: "slack",
    name: "Slack",
    industry: "Communication",
    tagline: "Where work happens",
    colors: {
      primary: "#4A154B",
      secondary: "#36C5F0",
      accent: "#ECB22E",
      background: "#FFFFFF",
      text: "#1D1C1D",
    },
    gradient: "linear-gradient(135deg, #4A154B 0%, #36C5F0 50%, #ECB22E 100%)",
    typography: {
      heading: "Larsseit",
      body: "Larsseit",
      style: "Friendly, professional, clear",
    },
    voice: {
      tone: "Friendly, productive, team-focused",
      principles: [
        "Make work simpler",
        "Be inclusive",
        "Stay organized",
        "Have fun",
      ],
    },
    quote: {
      text: "Be less busy.",
      author: "Slack",
    },
  },
  {
    id: "discord",
    name: "Discord",
    industry: "Communication",
    tagline: "Imagine a place",
    colors: {
      primary: "#5865F2",
      secondary: "#23272A",
      accent: "#EB459E",
      background: "#36393F",
      text: "#FFFFFF",
    },
    gradient: "linear-gradient(135deg, #23272A 0%, #5865F2 50%, #EB459E 100%)",
    typography: {
      heading: "Ginto",
      body: "Whitney",
      style: "Playful, expressive, community-driven",
    },
    voice: {
      tone: "Fun, inclusive, community-first",
      principles: [
        "Bring people together",
        "Be authentic",
        "Make it fun",
        "Celebrate communities",
      ],
    },
    quote: {
      text: "Your place to talk.",
      author: "Discord",
    },
  },
  {
    id: "framer",
    name: "Framer",
    industry: "Design",
    tagline: "The internet is your canvas",
    colors: {
      primary: "#0099FF",
      secondary: "#000000",
      accent: "#FF0055",
      background: "#FFFFFF",
      text: "#000000",
    },
    gradient: "linear-gradient(135deg, #0099FF 0%, #FF0055 50%, #000000 100%)",
    typography: {
      heading: "Inter",
      body: "Inter",
      style: "Dynamic, creative, bold",
    },
    voice: {
      tone: "Creative, empowering, innovative",
      principles: [
        "Design with code",
        "No limits",
        "Ship fast",
        "Break boundaries",
      ],
    },
    quote: {
      text: "Design and ship your dream site. Zero code, maximum speed.",
      author: "Framer",
    },
  },
];

export function getBrand(id: string): Brand | undefined {
  return BRANDS.find((brand) => brand.id === id);
}

export function getNextBrand(currentId: string): Brand {
  const currentIndex = BRANDS.findIndex((brand) => brand.id === currentId);
  const nextIndex = (currentIndex + 1) % BRANDS.length;
  return BRANDS[nextIndex];
}

export function getPreviousBrand(currentId: string): Brand {
  const currentIndex = BRANDS.findIndex((brand) => brand.id === currentId);
  const prevIndex = currentIndex === 0 ? BRANDS.length - 1 : currentIndex - 1;
  return BRANDS[prevIndex];
}

