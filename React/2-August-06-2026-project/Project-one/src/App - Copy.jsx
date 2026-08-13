import { useEffect, useState } from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FeaturedCollections from './components/sections/FeaturedCollections';
import BestSellers from './components/sections/BestSellers';
import FragranceFinder from './components/sections/FragranceFinder';
import BrandStory from './components/sections/BrandStory';
import GoldCollection from './components/sections/GoldCollection';
import FragranceElements from './components/sections/FragranceElements';
import CustomerReviews from './components/sections/CustomerReviews';
import PrivateCircle from './components/sections/PrivateCircle';
import Journal from './components/sections/Journal';
import Newsletter from './components/sections/Newsletter';

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('aura-oud-theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('aura-oud-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="min-h-screen bg-surface text-on-background antialiased transition-colors duration-300">
      <AnnouncementBar />
      <Header dark={dark} onThemeToggle={() => setDark((value) => !value)} />
      <main>
        <Hero />
        <FeaturedCollections />
        <BestSellers />
        <FragranceFinder />
        <BrandStory />
        <GoldCollection />
        <FragranceElements />
        <CustomerReviews />
        <PrivateCircle />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
