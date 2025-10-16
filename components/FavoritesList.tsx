'use client';

import { GeneratedVibeCard } from '@/lib/vibes';
import { motion } from 'framer-motion';

interface FavoritesListProps {
  favorites: GeneratedVibeCard[];
  onSelect: (card: GeneratedVibeCard) => void;
  onRemove: (timestamp: number) => void;
}

export default function FavoritesList({ favorites, onSelect, onRemove }: FavoritesListProps) {
  if (favorites.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto mt-16">
        <div className="text-center p-12 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20">
          <div className="text-6xl mb-4">💫</div>
          <p className="text-white/60 text-lg">No saved vibes yet. Start generating and save your favorites!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Your Saved Vibes</h2>
        <p className="text-white/70">Click on a card to view it again</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((card, index) => (
          <motion.div
            key={card.timestamp}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="group relative"
          >
            <button
              onClick={() => onSelect(card)}
              className="w-full text-left relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105"
              style={{ background: card.palette.gradient }}
            >
              <div className="p-6 backdrop-blur-sm bg-black/20">
                <div className="text-4xl mb-2">{card.vibe.emoji}</div>
                <h3 className="text-white font-bold text-xl mb-1">{card.vibe.name}</h3>
                <p className="text-white/80 text-sm mb-3">{card.palette.name}</p>
                
                <div className="flex gap-1">
                  {card.palette.colors.slice(0, 5).map((color, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded border border-white/30"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </button>

            {/* Remove button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(card.timestamp);
              }}
              className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-red-500/80 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

