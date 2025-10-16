'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VIBES, generateVibeCard, shuffleVibeCard, GeneratedVibeCard, Vibe } from '@/lib/vibes';
import { getFavorites, saveFavorite, removeFavorite, isFavorite } from '@/lib/localStorage';
import { exportVibeCard } from '@/lib/export';
import VibeSelector from '@/components/VibeSelector';
import VibeCard from '@/components/VibeCard';
import FavoritesList from '@/components/FavoritesList';

export default function Home() {
  const [selectedVibe, setSelectedVibe] = useState<Vibe | null>(null);
  const [currentCard, setCurrentCard] = useState<GeneratedVibeCard | null>(null);
  const [favorites, setFavorites] = useState<GeneratedVibeCard[]>([]);
  const [isCardSaved, setIsCardSaved] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  // Load favorites on mount
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  // Check if current card is saved
  useEffect(() => {
    if (currentCard) {
      setIsCardSaved(isFavorite(currentCard.timestamp));
    }
  }, [currentCard, favorites]);

  const handleVibeSelect = (vibe: Vibe) => {
    setSelectedVibe(vibe);
    const newCard = generateVibeCard(vibe.id);
    setCurrentCard(newCard);
  };

  const handleShuffle = () => {
    if (currentCard) {
      const newCard = shuffleVibeCard(currentCard);
      setCurrentCard(newCard);
    }
  };

  const handleSave = () => {
    if (currentCard && !isCardSaved) {
      const success = saveFavorite(currentCard);
      if (success) {
        setFavorites(getFavorites());
        setIsCardSaved(true);
      }
    }
  };

  const handleExport = async () => {
    await exportVibeCard('vibe-card-export');
  };

  const handleFavoriteSelect = (card: GeneratedVibeCard) => {
    setSelectedVibe(card.vibe);
    setCurrentCard(card);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemoveFavorite = (timestamp: number) => {
    removeFavorite(timestamp);
    setFavorites(getFavorites());
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 animate-gradient-slow" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
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
            Vibe Generator
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Create stunning aesthetic mood boards that match your energy ✨
          </p>
        </motion.div>

        {/* Vibe Selector */}
        {!currentCard && (
          <div className="mb-16">
            <VibeSelector vibes={VIBES} selectedVibe={selectedVibe} onSelect={handleVibeSelect} />
          </div>
        )}

        {/* Current Vibe Card */}
        {currentCard && (
          <div className="mb-16">
            <VibeCard
              card={currentCard}
              onShuffle={handleShuffle}
              onSave={handleSave}
              onExport={handleExport}
              isSaved={isCardSaved}
            />

            {/* Back to Selection */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => {
                  setCurrentCard(null);
                  setSelectedVibe(null);
                }}
                className="text-white/70 hover:text-white transition-colors underline"
              >
                Choose a different vibe
              </button>
            </motion.div>
          </div>
        )}

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="mt-24">
            <FavoritesList
              favorites={favorites}
              onSelect={handleFavoriteSelect}
              onRemove={handleRemoveFavorite}
            />
          </div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-24 text-white/50 text-sm"
        >
          <p>Made with ❤️ for aesthetic vibes</p>
        </motion.footer>
      </div>
    </main>
  );
}
