// Core data types and structures for the Vibe Generator

export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
  gradient: string;
}

export interface Quote {
  text: string;
  author?: string;
}

export interface Vibe {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export interface GeneratedVibeCard {
  vibe: Vibe;
  palette: ColorPalette;
  quote: Quote;
  timestamp: number;
}

// Vibe categories
export const VIBES: Vibe[] = [
  {
    id: 'cozy',
    name: 'Cozy',
    emoji: '☕',
    description: 'Warm, comfortable, and peaceful',
  },
  {
    id: 'energetic',
    name: 'Energetic',
    emoji: '⚡',
    description: 'Vibrant, bold, and dynamic',
  },
  {
    id: 'dreamy',
    name: 'Dreamy',
    emoji: '✨',
    description: 'Soft, ethereal, and magical',
  },
  {
    id: 'focused',
    name: 'Focused',
    emoji: '🎯',
    description: 'Clear, minimal, and productive',
  },
  {
    id: 'melancholic',
    name: 'Melancholic',
    emoji: '🌧️',
    description: 'Reflective, deep, and emotional',
  },
  {
    id: 'euphoric',
    name: 'Euphoric',
    emoji: '🌈',
    description: 'Joyful, bright, and uplifting',
  },
  {
    id: 'cosmic',
    name: 'Cosmic',
    emoji: '🌌',
    description: 'Mysterious, vast, and infinite',
  },
  {
    id: 'midnight',
    name: 'Midnight',
    emoji: '🌙',
    description: 'Dark, calm, and introspective',
  },
];

// Color palettes mapped to vibes
export const COLOR_PALETTES: Record<string, ColorPalette[]> = {
  cozy: [
    {
      id: 'cozy-1',
      name: 'Autumn Warmth',
      colors: ['#8B4513', '#D2691E', '#F4A460', '#FFF8DC', '#FFE4B5'],
      gradient: 'linear-gradient(135deg, #8B4513 0%, #D2691E 25%, #F4A460 50%, #FFF8DC 75%, #FFE4B5 100%)',
    },
    {
      id: 'cozy-2',
      name: 'Coffee Morning',
      colors: ['#3E2723', '#5D4037', '#8D6E63', '#D7CCC8', '#EFEBE9'],
      gradient: 'linear-gradient(135deg, #3E2723 0%, #5D4037 25%, #8D6E63 50%, #D7CCC8 75%, #EFEBE9 100%)',
    },
    {
      id: 'cozy-3',
      name: 'Sunset Glow',
      colors: ['#BF360C', '#D84315', '#FF7043', '#FFAB91', '#FFCCBC'],
      gradient: 'linear-gradient(135deg, #BF360C 0%, #D84315 25%, #FF7043 50%, #FFAB91 75%, #FFCCBC 100%)',
    },
  ],
  energetic: [
    {
      id: 'energetic-1',
      name: 'Electric Pulse',
      colors: ['#FF1744', '#FF6F00', '#FFD600', '#76FF03', '#00E5FF'],
      gradient: 'linear-gradient(135deg, #FF1744 0%, #FF6F00 25%, #FFD600 50%, #76FF03 75%, #00E5FF 100%)',
    },
    {
      id: 'energetic-2',
      name: 'Neon Night',
      colors: ['#E91E63', '#FF5722', '#FFC107', '#4CAF50', '#2196F3'],
      gradient: 'linear-gradient(135deg, #E91E63 0%, #FF5722 25%, #FFC107 50%, #4CAF50 75%, #2196F3 100%)',
    },
    {
      id: 'energetic-3',
      name: 'Power Pop',
      colors: ['#C51162', '#AA00FF', '#6200EA', '#304FFE', '#2979FF'],
      gradient: 'linear-gradient(135deg, #C51162 0%, #AA00FF 25%, #6200EA 50%, #304FFE 75%, #2979FF 100%)',
    },
  ],
  dreamy: [
    {
      id: 'dreamy-1',
      name: 'Cotton Candy',
      colors: ['#E1BEE7', '#F8BBD0', '#FFCCBC', '#FFF9C4', '#F0F4C3'],
      gradient: 'linear-gradient(135deg, #E1BEE7 0%, #F8BBD0 25%, #FFCCBC 50%, #FFF9C4 75%, #F0F4C3 100%)',
    },
    {
      id: 'dreamy-2',
      name: 'Fairy Tale',
      colors: ['#CE93D8', '#F48FB1', '#90CAF9', '#80DEEA', '#A5D6A7'],
      gradient: 'linear-gradient(135deg, #CE93D8 0%, #F48FB1 25%, #90CAF9 50%, #80DEEA 75%, #A5D6A7 100%)',
    },
    {
      id: 'dreamy-3',
      name: 'Pastel Sky',
      colors: ['#B39DDB', '#9FA8DA', '#90CAF9', '#81D4FA', '#80CBC4'],
      gradient: 'linear-gradient(135deg, #B39DDB 0%, #9FA8DA 25%, #90CAF9 50%, #81D4FA 75%, #80CBC4 100%)',
    },
  ],
  focused: [
    {
      id: 'focused-1',
      name: 'Zen Garden',
      colors: ['#37474F', '#546E7A', '#78909C', '#B0BEC5', '#ECEFF1'],
      gradient: 'linear-gradient(135deg, #37474F 0%, #546E7A 25%, #78909C 50%, #B0BEC5 75%, #ECEFF1 100%)',
    },
    {
      id: 'focused-2',
      name: 'Clean Slate',
      colors: ['#455A64', '#607D8B', '#90A4AE', '#CFD8DC', '#FFFFFF'],
      gradient: 'linear-gradient(135deg, #455A64 0%, #607D8B 25%, #90A4AE 50%, #CFD8DC 75%, #FFFFFF 100%)',
    },
    {
      id: 'focused-3',
      name: 'Minimalist',
      colors: ['#263238', '#546E7A', '#B0BEC5', '#ECEFF1', '#FAFAFA'],
      gradient: 'linear-gradient(135deg, #263238 0%, #546E7A 25%, #B0BEC5 50%, #ECEFF1 75%, #FAFAFA 100%)',
    },
  ],
  melancholic: [
    {
      id: 'melancholic-1',
      name: 'Rainy Day',
      colors: ['#1A237E', '#283593', '#3949AB', '#5C6BC0', '#9FA8DA'],
      gradient: 'linear-gradient(135deg, #1A237E 0%, #283593 25%, #3949AB 50%, #5C6BC0 75%, #9FA8DA 100%)',
    },
    {
      id: 'melancholic-2',
      name: 'Ocean Depth',
      colors: ['#01579B', '#0277BD', '#0288D1', '#039BE5', '#4FC3F7'],
      gradient: 'linear-gradient(135deg, #01579B 0%, #0277BD 25%, #0288D1 50%, #039BE5 75%, #4FC3F7 100%)',
    },
    {
      id: 'melancholic-3',
      name: 'Twilight',
      colors: ['#4A148C', '#6A1B9A', '#8E24AA', '#AB47BC', '#CE93D8'],
      gradient: 'linear-gradient(135deg, #4A148C 0%, #6A1B9A 25%, #8E24AA 50%, #AB47BC 75%, #CE93D8 100%)',
    },
  ],
  euphoric: [
    {
      id: 'euphoric-1',
      name: 'Rainbow Joy',
      colors: ['#FF6B6B', '#FFD93D', '#6BCF7F', '#4ECDC4', '#A78BFA'],
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 25%, #6BCF7F 50%, #4ECDC4 75%, #A78BFA 100%)',
    },
    {
      id: 'euphoric-2',
      name: 'Sunshine Burst',
      colors: ['#FFA726', '#FFCA28', '#FFEE58', '#FFF59D', '#FFF9C4'],
      gradient: 'linear-gradient(135deg, #FFA726 0%, #FFCA28 25%, #FFEE58 50%, #FFF59D 75%, #FFF9C4 100%)',
    },
    {
      id: 'euphoric-3',
      name: 'Happy Vibes',
      colors: ['#F06292', '#BA68C8', '#64B5F6', '#4DD0E1', '#AED581'],
      gradient: 'linear-gradient(135deg, #F06292 0%, #BA68C8 25%, #64B5F6 50%, #4DD0E1 75%, #AED581 100%)',
    },
  ],
  cosmic: [
    {
      id: 'cosmic-1',
      name: 'Galaxy',
      colors: ['#0D0221', '#1B1464', '#5B4FFF', '#8B5CF6', '#C084FC'],
      gradient: 'linear-gradient(135deg, #0D0221 0%, #1B1464 25%, #5B4FFF 50%, #8B5CF6 75%, #C084FC 100%)',
    },
    {
      id: 'cosmic-2',
      name: 'Nebula',
      colors: ['#1E0342', '#3D0E61', '#6B2D5C', '#FF1B8D', '#FF6B35'],
      gradient: 'linear-gradient(135deg, #1E0342 0%, #3D0E61 25%, #6B2D5C 50%, #FF1B8D 75%, #FF6B35 100%)',
    },
    {
      id: 'cosmic-3',
      name: 'Stellar',
      colors: ['#050505', '#1A1A2E', '#16213E', '#0F3460', '#533483'],
      gradient: 'linear-gradient(135deg, #050505 0%, #1A1A2E 25%, #16213E 50%, #0F3460 75%, #533483 100%)',
    },
  ],
  midnight: [
    {
      id: 'midnight-1',
      name: 'Dark Hours',
      colors: ['#0A0E27', '#1B1B2F', '#2D3142', '#4F5D75', '#BFC0C0'],
      gradient: 'linear-gradient(135deg, #0A0E27 0%, #1B1B2F 25%, #2D3142 50%, #4F5D75 75%, #BFC0C0 100%)',
    },
    {
      id: 'midnight-2',
      name: 'Moon Shadow',
      colors: ['#000000', '#1C1C1C', '#2D2D2D', '#424242', '#757575'],
      gradient: 'linear-gradient(135deg, #000000 0%, #1C1C1C 25%, #2D2D2D 50%, #424242 75%, #757575 100%)',
    },
    {
      id: 'midnight-3',
      name: 'Starless Night',
      colors: ['#0D1B2A', '#1B263B', '#415A77', '#778DA9', '#E0E1DD'],
      gradient: 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 25%, #415A77 50%, #778DA9 75%, #E0E1DD 100%)',
    },
  ],
};

// Quotes mapped to vibes
export const QUOTES: Record<string, Quote[]> = {
  cozy: [
    { text: "The best things in life are the people we love, the places we've been, and the memories we've made." },
    { text: "Home is where your story begins." },
    { text: "There is nothing like staying at home for real comfort.", author: "Jane Austen" },
    { text: "Cozy moments are the ones we treasure most." },
    { text: "Warmth is not just a temperature, it's a feeling." },
  ],
  energetic: [
    { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Be fearless in the pursuit of what sets your soul on fire." },
    { text: "Your energy introduces you before you even speak." },
  ],
  dreamy: [
    { text: "Dreams are the touchstones of our characters.", author: "Henry David Thoreau" },
    { text: "All that we see or seem is but a dream within a dream.", author: "Edgar Allan Poe" },
    { text: "Magic is believing in yourself. If you can do that, you can make anything happen." },
    { text: "She was a wild, wicked slip of a girl. She burned too bright for this world.", author: "Emily Brontë" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  ],
  focused: [
    { text: "Clarity comes from action, not thought.", author: "Marie Forleo" },
    { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
    { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    { text: "Where focus goes, energy flows." },
    { text: "Concentrate all your thoughts upon the work in hand.", author: "Alexander Graham Bell" },
  ],
  melancholic: [
    { text: "The wound is the place where the light enters you.", author: "Rumi" },
    { text: "In the depth of winter, I finally learned that there was in me an invincible summer.", author: "Albert Camus" },
    { text: "The heart was made to be broken.", author: "Oscar Wilde" },
    { text: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" },
    { text: "There is a pleasure in the pathless woods.", author: "Lord Byron" },
  ],
  euphoric: [
    { text: "Joy is not in things; it is in us.", author: "Richard Wagner" },
    { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
    { text: "Let your joy scream across the pain.", author: "Terri Guillemets" },
    { text: "Find ecstasy in life; the mere sense of living is joy enough.", author: "Emily Dickinson" },
    { text: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam" },
  ],
  cosmic: [
    { text: "We are all made of stars.", author: "Carl Sagan" },
    { text: "The cosmos is within us. We are made of star-stuff.", author: "Carl Sagan" },
    { text: "Look up at the stars and not down at your feet.", author: "Stephen Hawking" },
    { text: "The universe is not outside of you. Look inside yourself; everything that you want, you already are.", author: "Rumi" },
    { text: "We are a way for the cosmos to know itself." },
  ],
  midnight: [
    { text: "Night is the wonderful opportunity to take rest, to forgive, to smile, to get ready for all the battles that you have to fight tomorrow.", author: "Allen Ginsberg" },
    { text: "The night is more alive and more richly colored than the day.", author: "Vincent Van Gogh" },
    { text: "I have loved the stars too fondly to be fearful of the night.", author: "Sarah Williams" },
    { text: "Silence is the sleep that nourishes wisdom.", author: "Francis Bacon" },
    { text: "The darker the night, the brighter the stars." },
  ],
};

// Generate a random vibe card
export function generateVibeCard(vibeId: string): GeneratedVibeCard {
  const vibe = VIBES.find((v) => v.id === vibeId);
  if (!vibe) {
    throw new Error(`Vibe with id ${vibeId} not found`);
  }

  const palettes = COLOR_PALETTES[vibeId];
  const quotes = QUOTES[vibeId];

  const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    vibe,
    palette: randomPalette,
    quote: randomQuote,
    timestamp: Date.now(),
  };
}

// Shuffle to get a new combination for the current vibe
export function shuffleVibeCard(currentCard: GeneratedVibeCard): GeneratedVibeCard {
  return generateVibeCard(currentCard.vibe.id);
}

