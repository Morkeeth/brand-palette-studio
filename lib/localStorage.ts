// Local storage helpers for saving favorite vibes

import { GeneratedVibeCard } from './vibes';

const FAVORITES_KEY = 'vibe-generator-favorites';
const MAX_FAVORITES = 20;

export function getFavorites(): GeneratedVibeCard[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
}

export function saveFavorite(card: GeneratedVibeCard): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const favorites = getFavorites();
    
    // Check if already exists (based on timestamp)
    const exists = favorites.some((fav) => fav.timestamp === card.timestamp);
    if (exists) return false;
    
    // Add to beginning and limit to MAX_FAVORITES
    const updated = [card, ...favorites].slice(0, MAX_FAVORITES);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Error saving favorite:', error);
    return false;
  }
}

export function removeFavorite(timestamp: number): void {
  if (typeof window === 'undefined') return;
  
  try {
    const favorites = getFavorites();
    const updated = favorites.filter((fav) => fav.timestamp !== timestamp);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
}

export function isFavorite(timestamp: number): boolean {
  if (typeof window === 'undefined') return false;
  
  const favorites = getFavorites();
  return favorites.some((fav) => fav.timestamp === timestamp);
}

