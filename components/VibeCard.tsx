'use client';

import { GeneratedVibeCard } from '@/lib/vibes';
import { motion } from 'framer-motion';

interface VibeCardProps {
  card: GeneratedVibeCard;
  onShuffle?: () => void;
  onSave?: () => void;
  onExport?: () => void;
  isSaved?: boolean;
}

export default function VibeCard({ card, onShuffle, onSave, onExport, isSaved }: VibeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div
        id="vibe-card-export"
        className="relative overflow-hidden rounded-3xl shadow-2xl"
        style={{ background: card.palette.gradient }}
      >
        <div className="relative p-12 backdrop-blur-sm bg-black/20">
          {/* Vibe Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="text-7xl mb-4"
            >
              {card.vibe.emoji}
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-2">{card.vibe.name}</h2>
            <p className="text-white/80 text-lg">{card.vibe.description}</p>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-white/90 text-sm font-semibold mb-3 uppercase tracking-wider">
              Color Palette
            </h3>
            <div className="flex gap-2 justify-center">
              {card.palette.colors.map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className="w-16 h-16 rounded-xl shadow-lg border-2 border-white/30 cursor-pointer transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-white bg-black/70 px-2 py-1 rounded whitespace-nowrap">
                      {color}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed mb-4">
                &ldquo;{card.quote.text}&rdquo;
              </p>
              {card.quote.author && (
                <p className="text-white/70 text-sm font-medium">— {card.quote.author}</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Action Buttons */}
      {(onShuffle || onSave || onExport) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center mt-8"
        >
          {onShuffle && (
            <button
              onClick={onShuffle}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white font-medium transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Shuffle
            </button>
          )}
          {onSave && (
            <button
              onClick={onSave}
              disabled={isSaved}
              className={`px-6 py-3 backdrop-blur-md rounded-xl border font-medium transition-all hover:scale-105 flex items-center gap-2 ${
                isSaved
                  ? 'bg-green-500/30 border-green-400/50 text-green-100 cursor-not-allowed'
                  : 'bg-white/10 hover:bg-white/20 border-white/30 text-white'
              }`}
            >
              <svg className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {isSaved ? 'Saved' : 'Save'}
            </button>
          )}
          {onExport && (
            <button
              onClick={onExport}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white font-medium transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

