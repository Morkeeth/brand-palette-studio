'use client';

import { Story } from '@/lib/stories';
import { motion } from 'framer-motion';

interface StoryCardProps {
  story: Story;
  onClose?: () => void;
}

const categoryColors = {
  triumph: 'from-green-500 to-emerald-600',
  disaster: 'from-red-500 to-rose-600',
  pivot: 'from-purple-500 to-violet-600',
  feature: 'from-blue-500 to-cyan-600',
  design: 'from-pink-500 to-fuchsia-600',
  culture: 'from-amber-500 to-orange-600',
};

const categoryLabels = {
  triumph: '🏆 Triumph',
  disaster: '💥 Disaster',
  pivot: '🔄 Pivot',
  feature: '⚡ Feature',
  design: '🎨 Design',
  culture: '🌟 Culture',
};

export default function StoryCard({ story, onClose }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/30 rounded-full backdrop-blur-sm transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Header with gradient */}
        <div className={`relative overflow-hidden bg-gradient-to-r ${categoryColors[story.category]} p-12 text-white`}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="relative">
            <div className="inline-block px-4 py-2 mb-4 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
              {categoryLabels[story.category]} • {story.year}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {story.title}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              {story.summary}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-12">
          {/* Image Description Placeholder */}
          <div className="mb-12 p-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl text-center">
            <div className="text-6xl mb-4">
              {story.category === 'triumph' && '🏆'}
              {story.category === 'disaster' && '💥'}
              {story.category === 'pivot' && '🔄'}
              {story.category === 'feature' && '⚡'}
              {story.category === 'design' && '🎨'}
              {story.category === 'culture' && '🌟'}
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {story.imageDescription}
            </p>
          </div>

          {/* Impact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">💥</span>
              Impact
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {story.impact}
            </p>
          </section>

          {/* Details Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">📖</span>
              The Full Story
            </h2>
            <div className="space-y-4">
              {story.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${categoryColors[story.category]} flex items-center justify-center text-white font-bold text-sm`}>
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                    {detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Lesson Section */}
          <section className="p-8 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">💡</span>
              The Lesson
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
              {story.lesson}
            </p>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}

