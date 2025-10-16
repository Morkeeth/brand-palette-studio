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
  {
    id: "apple",
    name: "Apple",
    industry: "Technology",
    tagline: "Think Different",
    colors: {
      primary: "#000000",
      secondary: "#F5F5F7",
      accent: "#06C",
      background: "#FFFFFF",
      text: "#1D1D1F",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #F5F5F7 50%, #06C 100%)",
    typography: {
      heading: "SF Pro Display",
      body: "SF Pro Text",
      style: "Clean, premium, refined",
    },
    voice: {
      tone: "Premium, simple, human",
      principles: [
        "Simplicity is sophistication",
        "Design is how it works",
        "Focus on the user",
        "Sweat the details",
      ],
    },
    quote: {
      text: "The people who are crazy enough to think they can change the world are the ones who do.",
      author: "Steve Jobs",
    },
  },
  {
    id: "netflix",
    name: "Netflix",
    industry: "Entertainment",
    tagline: "See what's next",
    colors: {
      primary: "#E50914",
      secondary: "#000000",
      accent: "#B20710",
      background: "#141414",
      text: "#FFFFFF",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #E50914 50%, #B20710 100%)",
    typography: {
      heading: "Netflix Sans",
      body: "Netflix Sans",
      style: "Bold, cinematic, immersive",
    },
    voice: {
      tone: "Entertaining, bold, personal",
      principles: [
        "Tell great stories",
        "Be cinematic",
        "Personalize everything",
        "Make it bingeable",
      ],
    },
    quote: {
      text: "Entertainment for everyone, everywhere.",
      author: "Netflix",
    },
  },
  {
    id: "uber",
    name: "Uber",
    industry: "Transportation",
    tagline: "Move the way you want",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#276EF1",
      background: "#FFFFFF",
      text: "#000000",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #276EF1 50%, #FFFFFF 100%)",
    typography: {
      heading: "Uber Move",
      body: "Uber Move Text",
      style: "Modern, accessible, bold",
    },
    voice: {
      tone: "Empowering, reliable, global",
      principles: [
        "Make movement effortless",
        "Build for everyone",
        "Be dependable",
        "Think globally",
      ],
    },
    quote: {
      text: "We ignite opportunity by setting the world in motion.",
      author: "Uber",
    },
  },
  {
    id: "shopify",
    name: "Shopify",
    industry: "E-commerce",
    tagline: "Make commerce better for everyone",
    colors: {
      primary: "#96BF48",
      secondary: "#5E8E3E",
      accent: "#000000",
      background: "#FFFFFF",
      text: "#212326",
    },
    gradient: "linear-gradient(135deg, #5E8E3E 0%, #96BF48 50%, #000000 100%)",
    typography: {
      heading: "Shopify Sans",
      body: "Shopify Sans",
      style: "Friendly, trustworthy, entrepreneurial",
    },
    voice: {
      tone: "Entrepreneurial, supportive, optimistic",
      principles: [
        "Empower entrepreneurs",
        "Make commerce accessible",
        "Build for scale",
        "Celebrate merchants",
      ],
    },
    quote: {
      text: "Anyone, anywhere, can start a business.",
      author: "Tobi Lütke, CEO",
    },
  },
  {
    id: "coinbase",
    name: "Coinbase",
    industry: "Crypto",
    tagline: "The cryptoeconomy awaits",
    colors: {
      primary: "#0052FF",
      secondary: "#000000",
      accent: "#05B169",
      background: "#FFFFFF",
      text: "#0A0B0D",
    },
    gradient: "linear-gradient(135deg, #0052FF 0%, #05B169 50%, #000000 100%)",
    typography: {
      heading: "Coinbase Sans",
      body: "Coinbase Sans",
      style: "Trustworthy, modern, accessible",
    },
    voice: {
      tone: "Trustworthy, educational, forward-thinking",
      principles: [
        "Build trust through clarity",
        "Educate and empower",
        "Make crypto accessible",
        "Think long-term",
      ],
    },
    quote: {
      text: "Create an open financial system for the world.",
      author: "Brian Armstrong, CEO",
    },
  },
  {
    id: "x",
    name: "X (Twitter)",
    industry: "Social",
    tagline: "What's happening?!",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#1D9BF0",
      background: "#000000",
      text: "#FFFFFF",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #1D9BF0 50%, #FFFFFF 100%)",
    typography: {
      heading: "Chirp",
      body: "Chirp",
      style: "Bold, conversational, real-time",
    },
    voice: {
      tone: "Bold, unfiltered, real-time",
      principles: [
        "Free speech",
        "Real-time conversation",
        "Global town square",
        "Break the news",
      ],
    },
    quote: {
      text: "Blaze your glory!",
      author: "X",
    },
  },
  {
    id: "instagram",
    name: "Instagram",
    industry: "Social",
    tagline: "Capture and share the world's moments",
    colors: {
      primary: "#E4405F",
      secondary: "#FCAF45",
      accent: "#833AB4",
      background: "#FFFFFF",
      text: "#000000",
    },
    gradient: "linear-gradient(135deg, #833AB4 0%, #E4405F 50%, #FCAF45 100%)",
    typography: {
      heading: "Instagram Sans",
      body: "Helvetica Neue",
      style: "Visual, vibrant, authentic",
    },
    voice: {
      tone: "Creative, authentic, visual-first",
      principles: [
        "Express yourself",
        "Capture moments",
        "Build community",
        "Be authentic",
      ],
    },
    quote: {
      text: "Bringing you closer to the people and things you love.",
      author: "Instagram",
    },
  },
];

// 🎁 MYSTERY BRANDS - Emerging & Cool New Apps
// These rotate as surprises - users won't see them in the grid!
export const MYSTERY_BRANDS: Brand[] = [
  {
    id: "raycast",
    name: "Raycast",
    industry: "Productivity",
    tagline: "Your shortcut to everything",
    colors: {
      primary: "#FF6363",
      secondary: "#000000",
      accent: "#FF8989",
      background: "#1C1C1E",
      text: "#FFFFFF",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #FF6363 50%, #FF8989 100%)",
    typography: {
      heading: "SF Pro Display",
      body: "SF Pro Text",
      style: "Fast, powerful, native",
    },
    voice: {
      tone: "Fast, powerful, efficiency-obsessed",
      principles: [
        "Speed is everything",
        "Keyboard-first",
        "Extensible by default",
        "Native performance",
      ],
    },
    quote: {
      text: "Your shortcut to everything.",
      author: "Raycast",
    },
  },
  {
    id: "arc",
    name: "Arc",
    industry: "Browser",
    tagline: "Browse beautifully",
    colors: {
      primary: "#FC5C54",
      secondary: "#5865F2",
      accent: "#FFD02D",
      background: "#FFFFFF",
      text: "#000000",
    },
    gradient: "linear-gradient(135deg, #FC5C54 0%, #5865F2 50%, #FFD02D 100%)",
    typography: {
      heading: "Inter",
      body: "Inter",
      style: "Modern, delightful, experimental",
    },
    voice: {
      tone: "Playful, innovative, user-centric",
      principles: [
        "Rethink browsing",
        "Design for delight",
        "Make it personal",
        "Question everything",
      ],
    },
    quote: {
      text: "The browser that browses for you.",
      author: "The Browser Company",
    },
  },
  {
    id: "replicate",
    name: "Replicate",
    industry: "AI",
    tagline: "Machine learning without the hassle",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#2DD4BF",
      background: "#FFFFFF",
      text: "#0F172A",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #2DD4BF 50%, #FFFFFF 100%)",
    typography: {
      heading: "Inter",
      body: "Inter",
      style: "Technical, accessible, modern",
    },
    voice: {
      tone: "Technical, accessible, empowering",
      principles: [
        "Make AI accessible",
        "Developer-first",
        "Open and transparent",
        "Production-ready",
      ],
    },
    quote: {
      text: "Run AI with an API.",
      author: "Replicate",
    },
  },
  {
    id: "cursor",
    name: "Cursor",
    industry: "AI/Dev Tools",
    tagline: "The AI-first code editor",
    colors: {
      primary: "#000000",
      secondary: "#0066FF",
      accent: "#00BFFF",
      background: "#FFFFFF",
      text: "#000000",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #0066FF 50%, #00BFFF 100%)",
    typography: {
      heading: "Inter",
      body: "Monaco",
      style: "Technical, clean, powerful",
    },
    voice: {
      tone: "Innovative, empowering, developer-focused",
      principles: [
        "AI-native from day one",
        "Speed matters",
        "Augment, don't replace",
        "Build the future",
      ],
    },
    quote: {
      text: "Write code at the speed of thought.",
      author: "Cursor",
    },
  },
  {
    id: "cal",
    name: "Cal.com",
    industry: "Scheduling",
    tagline: "Scheduling infrastructure for everyone",
    colors: {
      primary: "#292929",
      secondary: "#FFFFFF",
      accent: "#E1E1E1",
      background: "#FFFFFF",
      text: "#111111",
    },
    gradient: "linear-gradient(135deg, #292929 0%, #E1E1E1 50%, #FFFFFF 100%)",
    typography: {
      heading: "Cal Sans",
      body: "Inter",
      style: "Clean, professional, open",
    },
    voice: {
      tone: "Open, professional, user-first",
      principles: [
        "Open source first",
        "Privacy by design",
        "Simple and powerful",
        "Build for everyone",
      ],
    },
    quote: {
      text: "Scheduling for absolutely everyone.",
      author: "Cal.com",
    },
  },
  {
    id: "midjourney",
    name: "Midjourney",
    industry: "AI/Art",
    tagline: "Exploring new mediums of thought",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#7B68EE",
      background: "#0F0F0F",
      text: "#FFFFFF",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #7B68EE 50%, #C71585 100%)",
    typography: {
      heading: "SF Pro Display",
      body: "SF Pro Text",
      style: "Artistic, mysterious, experimental",
    },
    voice: {
      tone: "Artistic, mysterious, exploratory",
      principles: [
        "Expand imagination",
        "Embrace the unknown",
        "Art meets AI",
        "Create magic",
      ],
    },
    quote: {
      text: "Exploring new mediums of thought.",
      author: "Midjourney",
    },
  },
  {
    id: "loom",
    name: "Loom",
    industry: "Video/Communication",
    tagline: "Work async, ship faster",
    colors: {
      primary: "#625DF5",
      secondary: "#FF4646",
      accent: "#00DDB3",
      background: "#FFFFFF",
      text: "#1D1D21",
    },
    gradient: "linear-gradient(135deg, #625DF5 0%, #FF4646 50%, #00DDB3 100%)",
    typography: {
      heading: "Circular",
      body: "Circular",
      style: "Friendly, vibrant, approachable",
    },
    voice: {
      tone: "Friendly, efficient, async-first",
      principles: [
        "Show, don't just tell",
        "Async by default",
        "Respect time",
        "Make work human",
      ],
    },
    quote: {
      text: "Video messages for work.",
      author: "Loom",
    },
  },
  {
    id: "superhuman",
    name: "Superhuman",
    industry: "Email/Productivity",
    tagline: "The fastest email experience ever made",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#00A4FF",
      background: "#FFFFFF",
      text: "#000000",
    },
    gradient: "linear-gradient(135deg, #000000 0%, #00A4FF 50%, #FFFFFF 100%)",
    typography: {
      heading: "Inter",
      body: "Inter",
      style: "Premium, fast, refined",
    },
    voice: {
      tone: "Premium, fast, obsessive about details",
      principles: [
        "Speed is everything",
        "Keyboard shortcuts",
        "Beautiful design",
        "Email shouldn't suck",
      ],
    },
    quote: {
      text: "Get through your inbox twice as fast.",
      author: "Superhuman",
    },
  },
];

export function getBrand(id: string): Brand | undefined {
  return BRANDS.find((brand) => brand.id === id);
}

export function getMysteryBrand(id: string): Brand | undefined {
  return MYSTERY_BRANDS.find((brand) => brand.id === id);
}

export function getRandomMysteryBrand(): Brand {
  const randomIndex = Math.floor(Math.random() * MYSTERY_BRANDS.length);
  return MYSTERY_BRANDS[randomIndex];
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

