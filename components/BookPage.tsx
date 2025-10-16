'use client';

import { Story } from '@/lib/stories';
import { motion } from 'framer-motion';

interface BookPageProps {
  story: Story;
  pageNumber: number;
  onClose?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const categoryColors = {
  triumph: 'from-green-500 to-emerald-600',
  disaster: 'from-red-500 to-rose-600',
  pivot: 'from-purple-500 to-violet-600',
  feature: 'from-blue-500 to-cyan-600',
  design: 'from-pink-500 to-fuchsia-600',
  culture: 'from-amber-500 to-orange-600',
};

const categoryBadges = {
  triumph: { icon: '🏆', label: 'Triumph' },
  disaster: { icon: '💥', label: 'Disaster' },
  pivot: { icon: '🔄', label: 'Pivot' },
  feature: { icon: '⚡', label: 'Feature' },
  design: { icon: '🎨', label: 'Design' },
  culture: { icon: '🌟', label: 'Culture' },
};

export default function BookPage({ story, pageNumber, onClose, onNext, onPrevious }: BookPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
      onClick={onClose}
    >
      <div className="relative w-full max-w-7xl h-[90vh] flex items-center justify-center">
        {/* Book Container */}
        <motion.div
          initial={{ scale: 0.9, rotateY: -15 }}
          animate={{ scale: 1, rotateY: 0 }}
          className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 bg-black/80 hover:bg-black rounded-full transition-all hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Book Spread - Two Pages Side by Side */}
          <div className="flex h-full">
            {/* Left Page */}
            <div className="w-1/2 h-full border-r border-neutral-200 relative overflow-y-auto">
              {/* Hero Image Section */}
              <div className="relative h-[40%] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  {story.imageUrl ? (
                    /* Real Product Screenshot */
                    <div className="relative w-full h-full">
                      <img 
                        src={story.imageUrl}
                        alt={story.imageDescription}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  ) : (
                    /* Placeholder with illustration */
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                      <div className="text-center p-8">
                        <div className="text-8xl mb-4">{categoryBadges[story.category].icon}</div>
                        <p className="text-neutral-600 text-sm font-medium max-w-md">
                          {story.imageDescription}
                        </p>
                      </div>
                    </div>
                  )}
                
                {/* Category Badge Overlay */}
                <div className="absolute top-6 left-6">
                  <div className={`px-4 py-2 bg-gradient-to-r ${categoryColors[story.category]} rounded-full text-white font-bold text-sm shadow-lg`}>
                    {categoryBadges[story.category].icon} {categoryBadges[story.category].label}
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-6 right-6">
                  <div className="px-6 py-3 bg-black/80 backdrop-blur-sm rounded-full text-white font-bold text-2xl">
                    {story.year}
                  </div>
                </div>
              </div>

              {/* Left Page Content */}
              <div className="p-12">
                {/* Chapter Number */}
                <div className="text-neutral-400 text-sm font-bold tracking-widest mb-6">
                  CHAPTER {pageNumber.toString().padStart(2, '0')}
                </div>

                {/* Title */}
                <h1 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight font-serif">
                  {story.title}
                </h1>

                {/* Summary - Lead paragraph */}
                <p className="text-xl text-neutral-700 leading-relaxed mb-8 font-serif italic border-l-4 border-neutral-300 pl-6">
                  {story.summary}
                </p>

                {/* Pull Quote */}
                <div className="my-12 p-8 bg-neutral-50 rounded-lg border-l-4 border-neutral-900">
                  <p className="text-2xl font-serif italic text-neutral-800 leading-relaxed">
                    "{story.lesson.split('.')[0]}."
                  </p>
                </div>
              </div>

              {/* Page Number - Bottom Left */}
              <div className="absolute bottom-8 left-12 text-neutral-400 font-serif text-sm">
                {pageNumber * 2}
              </div>
            </div>

            {/* Right Page */}
            <div className="w-1/2 h-full relative overflow-y-auto bg-neutral-50">
              <div className="p-12 pt-20">
                {/* Impact Section */}
                <section className="mb-10">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-serif flex items-center gap-3">
                    <span className="text-4xl">💥</span>
                    The Impact
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed font-serif">
                    {story.impact}
                  </p>
                </section>

                {/* Timeline of Events */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-serif">
                    How It Unfolded
                  </h2>
                  <div className="space-y-6">
                    {story.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${categoryColors[story.category]} flex items-center justify-center text-white font-bold shadow-lg`}>
                          {index + 1}
                        </div>
                        <p className="text-neutral-700 leading-relaxed pt-2 font-serif">
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* The Lesson - Highlighted */}
                <section className="mt-12 p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200 shadow-lg">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 font-serif flex items-center gap-3">
                    <span className="text-3xl">💡</span>
                    The Lesson
                  </h2>
                  <p className="text-lg text-neutral-800 leading-relaxed font-serif font-medium">
                    {story.lesson}
                  </p>
                </section>

                {/* Caption */}
                <div className="mt-12 pt-8 border-t border-neutral-300">
                  <p className="text-sm text-neutral-500 italic font-serif">
                    This story shaped how we think about {story.category} in tech. 
                    {story.relatedBrands && story.relatedBrands.length > 0 && (
                      <span> Related to: {story.relatedBrands.join(', ')}.</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Page Number - Bottom Right */}
              <div className="absolute bottom-8 right-12 text-neutral-400 font-serif text-sm">
                {pageNumber * 2 + 1}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {onPrevious && (
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/90 hover:bg-white rounded-full shadow-xl transition-all hover:scale-110 z-40"
            >
              <svg className="w-6 h-6 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/90 hover:bg-white rounded-full shadow-xl transition-all hover:scale-110 z-40"
            >
              <svg className="w-6 h-6 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Book Spine Shadow */}
          <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent" />
          </div>
        </motion.div>

        {/* Keyboard Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-serif">
          Use ← → arrow keys to turn pages • ESC to close
        </div>
      </div>
    </motion.div>
  );
}

