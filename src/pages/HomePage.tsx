import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, MessageCircle, Mail } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import JoinSection from '../components/JoinSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <JoinSection />
    </div>
  );
};

export default HomePage;