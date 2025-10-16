'use client';

import { Brand } from '@/lib/brands';
import { getStoriesByBrand } from '@/lib/stories';
import { motion } from 'framer-motion';

interface BrandCardProps {
  brand: Brand;
  onNext?: () => void;
  onPrevious?: () => void;
  onSave?: () => void;
  onExport?: () => void;
  onViewStories?: () => void;
  isSaved?: boolean;
}

export default function BrandCard({
  brand,
  onNext,
  onPrevious,
  onSave,
  onExport,
  onViewStories,
  isSaved,
}: BrandCardProps) {
  const stories = getStoriesByBrand(brand.id);
  return (
    <motion.div
      key={brand.id}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div
        id="brand-card-export"
        className="relative overflow-hidden rounded-3xl shadow-2xl"
        style={{ background: brand.gradient }}
      >
        <div className="relative p-12 backdrop-blur-sm bg-black/20">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-6xl font-bold text-white mb-3"
            >
              {brand.name}
            </motion.h1>
            <p className="text-white/90 text-2xl mb-2">{brand.tagline}</p>
            <p className="text-white/70 text-lg uppercase tracking-wider">
              {brand.industry}
            </p>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-white/90 text-sm font-semibold mb-4 uppercase tracking-wider text-center">
              Brand Colors
            </h3>
            <div className="flex gap-3 justify-center flex-wrap">
              {Object.entries(brand.colors).map(([name, color], index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="group relative"
                >
                  <div
                    className="w-20 h-20 rounded-xl shadow-lg border-2 border-white/30 cursor-pointer transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                    title={`${name}: ${color}`}
                  />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs text-white bg-black/80 px-3 py-1 rounded whitespace-nowrap">
                      <div className="font-semibold">{name}</div>
                      <div>{color}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-white/90 text-sm font-semibold mb-3 uppercase tracking-wider">
              Typography
            </h3>
            <div className="grid grid-cols-2 gap-4 text-white">
              <div>
                <div className="text-white/70 text-xs mb-1">Heading</div>
                <div className="text-lg font-bold">{brand.typography.heading}</div>
              </div>
              <div>
                <div className="text-white/70 text-xs mb-1">Body</div>
                <div className="text-lg">{brand.typography.body}</div>
              </div>
            </div>
            <div className="mt-3 text-white/80 text-sm italic">
              {brand.typography.style}
            </div>
          </motion.div>

          {/* Voice & Tone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-white/90 text-sm font-semibold mb-3 uppercase tracking-wider">
              Brand Voice
            </h3>
            <p className="text-white text-lg mb-4">{brand.voice.tone}</p>
            <div className="grid grid-cols-2 gap-2">
              {brand.voice.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="text-white/90 text-sm bg-white/10 px-3 py-2 rounded-lg"
                >
                  • {principle}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-white text-2xl font-light italic leading-relaxed mb-4">
                "{brand.quote.text}"
              </p>
              <p className="text-white/70 text-sm font-medium">— {brand.quote.author}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation & Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-between mt-8 gap-4"
      >
        {/* Previous Button */}
        {onPrevious && (
          <button
            onClick={onPrevious}
            className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white transition-all hover:scale-105"
            aria-label="Previous brand"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 flex-1 justify-center flex-wrap">
          {stories.length > 0 && onViewStories && (
            <button
              onClick={onViewStories}
              className="px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 backdrop-blur-md rounded-xl border-2 border-amber-400/50 text-white font-medium transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Stories ({stories.length})
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
              <svg
                className="w-5 h-5"
                fill={isSaved ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </button>
          )}
        </div>

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white transition-all hover:scale-105"
            aria-label="Next brand"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </motion.div>

      {/* Keyboard Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mt-4 text-white/50 text-sm"
      >
        Use ← → arrow keys to navigate
      </motion.div>
    </motion.div>
  );
}

