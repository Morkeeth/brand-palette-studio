'use client';

import { Vibe } from '@/lib/vibes';
import { motion } from 'framer-motion';

interface VibeSelectorProps {
  vibes: Vibe[];
  selectedVibe: Vibe | null;
  onSelect: (vibe: Vibe) => void;
}

export default function VibeSelector({ vibes, selectedVibe, onSelect }: VibeSelectorProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Choose Your Vibe
        </h2>
        <p className="text-white/70 text-lg">
          Select a mood to generate your aesthetic card
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {vibes.map((vibe, index) => (
          <motion.button
            key={vibe.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(vibe)}
            className={`relative p-6 rounded-2xl backdrop-blur-md border-2 transition-all ${
              selectedVibe?.id === vibe.id
                ? 'bg-white/20 border-white/50 shadow-2xl'
                : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
            }`}
          >
            <div className="text-5xl mb-3">{vibe.emoji}</div>
            <h3 className="text-white font-semibold text-lg mb-1">{vibe.name}</h3>
            <p className="text-white/60 text-sm">{vibe.description}</p>
            
            {selectedVibe?.id === vibe.id && (
              <motion.div
                layoutId="selected-indicator"
                className="absolute inset-0 rounded-2xl border-2 border-white/70 bg-white/10"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

