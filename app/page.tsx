'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BRANDS, Brand, getNextBrand, getPreviousBrand } from '@/lib/brands';
import { getFavorites, saveFavorite, removeFavorite, isFavorite } from '@/lib/localStorage';
import { exportVibeCard } from '@/lib/export';
import BrandCard from '@/components/BrandCard';

interface SavedBrand {
  brand: Brand;
  timestamp: number;
}

export default function Home() {
  const [currentBrand, setCurrentBrand] = useState<Brand>(BRANDS[0]);
  const [favorites, setFavorites] = useState<SavedBrand[]>([]);
  const [isBrandSaved, setIsBrandSaved] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  // Load favorites on mount
  useEffect(() => {
    const savedFavs = getFavorites();
    // Convert old format to new brand format
    setFavorites(savedFavs.map((fav: any) => ({
      brand: fav.vibe ? BRANDS[0] : fav.brand || BRANDS[0],
      timestamp: fav.timestamp,
    })));
  }, []);

  // Check if current brand is saved
  useEffect(() => {
    setIsBrandSaved(isFavorite(currentBrand.id.hashCode()));
  }, [currentBrand, favorites]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'g') {
        setShowGrid(!showGrid);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentBrand, showGrid]);

  const handleNext = () => {
    setCurrentBrand(getNextBrand(currentBrand.id));
  };

  const handlePrevious = () => {
    setCurrentBrand(getPreviousBrand(currentBrand.id));
  };

  const handleSave = () => {
    if (!isBrandSaved) {
      const saved: SavedBrand = {
        brand: currentBrand,
        timestamp: currentBrand.id.hashCode(),
      };
      const success = saveFavorite(saved as any);
      if (success) {
        setFavorites(getFavorites().map((fav: any) => ({
          brand: fav.brand || BRANDS[0],
          timestamp: fav.timestamp,
        })));
        setIsBrandSaved(true);
      }
    }
  };

  const handleExport = async () => {
    await exportVibeCard('brand-card-export');
  };

  const handleBrandSelect = (brand: Brand) => {
    setCurrentBrand(brand);
    setShowGrid(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemoveFavorite = (timestamp: number) => {
    removeFavorite(timestamp);
    setFavorites(getFavorites().map((fav: any) => ({
      brand: fav.brand || BRANDS[0],
      timestamp: fav.timestamp,
    })));
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient-slow" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
            Brand Palette Studio
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-6">
            Explore design systems from the world's best startups
          </p>
          <button
            onClick={() => setShowGrid(!showGrid)}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white font-medium transition-all hover:scale-105"
          >
            {showGrid ? '← Back to Brand' : 'View All Brands'}
          </button>
        </motion.div>

        {/* Brand Grid */}
        {showGrid ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {BRANDS.map((brand, index) => (
                <motion.button
                  key={brand.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleBrandSelect(brand)}
                  className="group relative p-6 rounded-2xl backdrop-blur-md border-2 border-white/20 hover:border-white/50 transition-all overflow-hidden"
                  style={{ background: brand.gradient }}
                >
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-xl mb-1">{brand.name}</h3>
                    <p className="text-white/80 text-sm">{brand.industry}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Current Brand Card */
          <div className="mb-16">
            <BrandCard
              brand={currentBrand}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSave={handleSave}
              onExport={handleExport}
              isSaved={isBrandSaved}
            />
          </div>
        )}

        {/* Favorites Section */}
        {favorites.length > 0 && !showGrid && (
          <div className="mt-24 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-2">Your Saved Brands</h2>
              <p className="text-white/70">Click on a brand to view it again</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((saved, index) => (
                <motion.div
                  key={saved.timestamp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <button
                    onClick={() => handleBrandSelect(saved.brand)}
                    className="w-full text-left relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105"
                    style={{ background: saved.brand.gradient }}
                  >
                    <div className="p-6 backdrop-blur-sm bg-black/20">
                      <h3 className="text-white font-bold text-2xl mb-1">{saved.brand.name}</h3>
                      <p className="text-white/80 text-sm mb-3">{saved.brand.industry}</p>
                      <div className="flex gap-1">
                        {Object.values(saved.brand.colors).slice(0, 5).map((color, i) => (
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
                      handleRemoveFavorite(saved.timestamp);
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
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-24 text-white/50 text-sm"
        >
          <p>Explore design systems from iconic startups • Use ← → to navigate</p>
        </motion.footer>
      </div>
    </main>
  );
}

// Helper to create consistent hash codes for brand IDs
declare global {
  interface String {
    hashCode(): number;
  }
}

String.prototype.hashCode = function() {
  let hash = 0;
  for (let i = 0; i < this.length; i++) {
    const char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};
