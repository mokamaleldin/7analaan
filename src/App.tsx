import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/common';
import HomePage from './pages/Home';
import PodcastPage from './pages/Podcast';
import SoundCloudPage from './pages/SoundCloud';
import GuestsPage from './pages/Guests';
import GuestDetailPage from './pages/GuestDetail';
import ContactPage from './pages/Contact';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white" dir="rtl">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/soundcloud" element={<SoundCloudPage />} />
            <Route path="/guests" element={<GuestsPage />} />
            <Route path="/guests/:guestId" element={<GuestDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;