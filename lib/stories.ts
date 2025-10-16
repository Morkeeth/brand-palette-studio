// Iconic stories, features, and moments from tech history

export interface Story {
  id: string;
  title: string;
  brandId?: string;
  category: 'triumph' | 'disaster' | 'pivot' | 'feature' | 'design' | 'culture';
  year: number;
  summary: string;
  impact: string;
  lesson: string;
  imageDescription: string;
  details: string[];
  relatedBrands?: string[];
}

export const ICONIC_STORIES: Story[] = [
  {
    id: "uber-surge",
    title: "Surge Pricing: The Algorithm That Made People Angry",
    brandId: "uber",
    category: "feature",
    year: 2011,
    summary: "Uber's surge pricing became one of the most controversial features in tech, sparking debates about algorithmic fairness during emergencies.",
    impact: "Enabled dynamic pricing across industries but created PR nightmares during crises. New Year's Eve 2011 saw 7x pricing, Hurricane Sandy saw outrage.",
    lesson: "Transparent algorithms matter. Users will accept dynamic pricing if they understand the 'why'. Communication is as important as the feature.",
    imageDescription: "Red surge pricing notification with 2.5x multiplier on map",
    details: [
      "Launched 2011 to balance supply and demand",
      "Hurricane Sandy 2012: Surge pricing during emergency sparked outrage",
      "New Year's Eve became infamous for 7-10x multipliers",
      "Uber added upfront pricing transparency after backlash",
      "Now standard across ride-sharing, but heavily regulated",
      "Taught the industry: smart algorithms need human empathy",
    ],
    relatedBrands: ["uber"],
  },
  {
    id: "twitter-fail-whale",
    title: "The Fail Whale: When Downtime Became Iconic",
    brandId: "x",
    category: "design",
    year: 2008,
    summary: "Twitter's cute error page became more famous than the service itself during its early scaling problems.",
    impact: "Turned technical failures into brand moments. The whale became a cultural icon, showing users how to handle downtime with grace.",
    lesson: "Brand personality matters even (especially) during failures. A delightful error page can turn frustration into affection.",
    imageDescription: "Cartoon whale being lifted by birds - Twitter's famous error illustration",
    details: [
      "Created by Yiying Lu in 2007",
      "Appeared constantly 2008-2009 during scaling issues",
      "Became more recognizable than the Twitter logo",
      "Users started creating fan art of the whale",
      "Eventually 'retired' as infrastructure improved",
      "Taught design: empathy in error states builds loyalty",
    ],
    relatedBrands: ["x"],
  },
  {
    id: "instagram-pivot",
    title: "From Burbn to Instagram: The Perfect Pivot",
    brandId: "instagram",
    category: "pivot",
    year: 2010,
    summary: "Kevin Systrom and Mike Krieger stripped everything from their check-in app except photos. It became Instagram in 8 weeks.",
    impact: "One of the most successful pivots in tech history. From cluttered location app to photo-sharing phenomenon. Sold to Facebook for $1B in 2012.",
    lesson: "Focus is power. Cut features until you find your core magic. Sometimes less is exponentially more.",
    imageDescription: "Side-by-side of Burbn's cluttered interface vs Instagram's clean photo grid",
    details: [
      "Burbn: location check-in app with photos, no traction",
      "Paul Sciarra (Pinterest founder) gave brutal feedback: 'too complicated'",
      "Stripped to only photos + filters in 8 weeks",
      "Launched October 2010, hit 25k users day one",
      "1 million users in 2 months",
      "Instagram became the fastest app to 1 billion users",
    ],
    relatedBrands: ["instagram"],
  },
  {
    id: "apple-skeuomorphism",
    title: "Killing Skeuomorphism: Apple's Flat Design Revolution",
    brandId: "apple",
    category: "design",
    year: 2013,
    summary: "Jony Ive killed leather textures, torn paper, and realistic shadows. iOS 7 went flat, changing design forever.",
    impact: "Every app and website went flat within 2 years. Ended an era of digital realism. Material Design, flat 2.0 all followed.",
    lesson: "Design leadership means killing what you're known for. Apple bet their entire visual identity on flatness and won.",
    imageDescription: "iOS 6 vs iOS 7 side-by-side showing leather notes app becoming flat",
    details: [
      "iOS 1-6: Realistic textures, shadows, 3D effects",
      "Steve Jobs loved skeuomorphism - made digital feel tactile",
      "Jony Ive became design lead 2012, hated it",
      "iOS 7 (2013): Everything flat, bright colors, thin fonts",
      "Designers revolted, users confused, then everyone copied it",
      "Proved design trends can change overnight with conviction",
    ],
    relatedBrands: ["apple"],
  },
  {
    id: "stripe-simplicity",
    title: "Seven Lines of Code: Stripe's API Revolution",
    brandId: "stripe",
    category: "feature",
    year: 2011,
    summary: "Stripe made accepting payments ridiculously simple. Seven lines of code replaced weeks of work. PayPal never saw it coming.",
    impact: "Enabled the entire startup ecosystem. SaaS explosion wouldn't exist without Stripe. Made $95B company from developer love.",
    lesson: "Remove friction for developers, they'll evangelize for free. Documentation is product. Developer experience = competitive moat.",
    imageDescription: "Stripe's 7-line integration code snippet on dark terminal",
    details: [
      "Before: Weeks to integrate payments, terrible docs",
      "Stripe: 7 lines of code, works immediately",
      "Beautiful documentation as marketing",
      "Test mode with fake credit cards",
      "Focused on developers who make buying decisions",
      "Now processes hundreds of billions annually",
    ],
    relatedBrands: ["stripe"],
  },
  {
    id: "spotify-wrapped",
    title: "Spotify Wrapped: Gamifying Your Music Year",
    brandId: "spotify",
    category: "feature",
    year: 2016,
    summary: "Spotify turned listening data into shareable stories. Wrapped became the most viral marketing campaign ever created.",
    impact: "Generated billions in free PR annually. Users wait all year for it. Copied by every app with data (Apple, Netflix, etc).",
    lesson: "Give users mirrors that make them look interesting. Personal data + social sharing = viral growth loop.",
    imageDescription: "Colorful Spotify Wrapped 2023 stats screen with top songs",
    details: [
      "Launched 2016 as 'Year in Music'",
      "Became 'Wrapped' with shareable stories 2017",
      "Users post to Instagram, TikTok, Twitter religiously",
      "Creates December spike in app usage every year",
      "Competitors copied: Apple Replay, YouTube Recap, etc",
      "Turned analytics into culture",
    ],
    relatedBrands: ["spotify"],
  },
  {
    id: "airbnb-trust",
    title: "Design for Trust: Airbnb's Reputation System",
    brandId: "airbnb",
    category: "design",
    year: 2008,
    summary: "How do you convince people to sleep in strangers' homes? Airbnb designed trust into every pixel.",
    impact: "Created the sharing economy blueprint. Two-way reviews, verified photos, insurance. Made $100B industry from trust design.",
    lesson: "Trust is designed, not assumed. Remove friction but add safety signals. Make consequences visible and fair.",
    imageDescription: "Airbnb's two-way review system with 5-star ratings and verified badges",
    details: [
      "Problem: No one trusts strangers with their home",
      "Solution: Two-way reviews (hosts AND guests)",
      "Professional photography program",
      "$1M host guarantee (insurance as design)",
      "Verified photos, IDs, profiles",
      "Made trusting strangers normal",
    ],
    relatedBrands: ["airbnb"],
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot: When AI Learned to Code",
    brandId: "github",
    category: "feature",
    year: 2021,
    summary: "GitHub trained AI on billions of lines of code. Copilot writes code for you. Developers questioned their careers.",
    impact: "Changed coding forever. 40% of code in Copilot workspaces written by AI. Sparked AI coding revolution.",
    lesson: "AI augmentation beats AI replacement. Give developers superpowers, don't replace them.",
    imageDescription: "Code editor with Copilot suggestions appearing in gray text",
    details: [
      "Trained on public GitHub code",
      "Suggests entire functions from comments",
      "Writes boilerplate, tests, documentation",
      "Controversial: trained on open source code",
      "Sparked debate about AI and copyright",
      "Now standard in VS Code, other editors",
    ],
    relatedBrands: ["github", "openai"],
  },
  {
    id: "notion-databases",
    title: "Notion's Secret Weapon: Databases That Don't Suck",
    brandId: "notion",
    category: "feature",
    year: 2018,
    summary: "Notion made databases fun and visual. Turned spreadsheets into Kanban boards, calendars, galleries with one click.",
    impact: "Killed dozens of productivity tools. Became $10B company by making databases approachable.",
    lesson: "Complex tools need simple interfaces. Multiple views of the same data = power + flexibility.",
    imageDescription: "Notion database switching between table, board, and calendar views",
    details: [
      "Most productivity tools: one view only",
      "Notion: same data, infinite views",
      "Made databases visual and approachable",
      "Users build custom tools without code",
      "Replaced Trello, Airtable, Google Docs simultaneously",
      "Proved flexibility beats specialization",
    ],
    relatedBrands: ["notion"],
  },
  {
    id: "discord-pivot",
    title: "Discord: From Failed Game to Gaming Platform",
    brandId: "discord",
    category: "pivot",
    year: 2015,
    summary: "Jason Citron's game Fates Forever failed. They kept the voice chat, ditched the game. Discord was born.",
    impact: "Became primary communication for 150M+ users. Replaced Skype, TeamSpeak, Slack for gamers.",
    lesson: "Watch what users actually use. Sometimes the 'side feature' is the real product.",
    imageDescription: "Fates Forever game screenshot next to Discord's server interface",
    details: [
      "Fates Forever: mobile multiplayer game, flopped",
      "Players loved the built-in voice chat",
      "Pivoted to voice chat as product",
      "Gamers switched from Skype immediately",
      "Added video, screen sharing, streaming",
      "Now valued at $15B+ from a failed game",
    ],
    relatedBrands: ["discord"],
  },
  {
    id: "figma-multiplayer",
    title: "Figma's Multiplayer Magic: Design Gets Real-Time",
    brandId: "figma",
    category: "feature",
    year: 2016,
    summary: "Figma brought Google Docs collaboration to design. Multiple cursors, live editing. Design became a team sport.",
    impact: "Killed Sketch. Forced Adobe to buy them for $20B. Changed how design teams work forever.",
    lesson: "Collaboration is a feature AND a moat. Real-time multiplayer creates lock-in through network effects.",
    imageDescription: "Multiple colored cursors in Figma canvas with user avatars",
    details: [
      "Sketch dominated but was single-player",
      "Figma launched browser-based, multiplayer",
      "See everyone's cursor in real-time",
      "Comments, version history, design systems",
      "Made design reviews happen in the tool",
      "Adobe paid $20B to make threat disappear",
    ],
    relatedBrands: ["figma"],
  },
  {
    id: "netflix-algorithm",
    title: "Netflix: The Algorithm That Picks Your Movies",
    brandId: "netflix",
    category: "feature",
    year: 2006,
    summary: "Netflix bet the company on recommendation algorithms. Started Netflix Prize competition. Changed entertainment forever.",
    impact: "80% of watched content comes from recommendations. Algorithms now run entertainment industry.",
    lesson: "Data-driven personalization at scale creates moats. Invest in algorithms before competitors.",
    imageDescription: "Netflix home screen with personalized rows of movie recommendations",
    details: [
      "DVD days: ratings drove recommendations",
      "Netflix Prize 2006: $1M for best algorithm",
      "Streaming era: watch time + preferences + thumbnails",
      "80% of views from recommendations now",
      "Auto-playing trailers test engagement",
      "Algorithms decide what shows get made",
    ],
    relatedBrands: ["netflix"],
  },
];

export function getStoriesByBrand(brandId: string): Story[] {
  return ICONIC_STORIES.filter(story => story.brandId === brandId);
}

export function getStoriesByCategory(category: Story['category']): Story[] {
  return ICONIC_STORIES.filter(story => story.category === category);
}

export function getAllStories(): Story[] {
  return ICONIC_STORIES;
}

export function getRandomStory(): Story {
  return ICONIC_STORIES[Math.floor(Math.random() * ICONIC_STORIES.length)];
}

