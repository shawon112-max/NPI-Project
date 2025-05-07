import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamMembersPage from './pages/TeamMembersPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #000000;
    scroll-behavior: smooth;
    padding-top: 64px;
    
    @media (max-width: 768px) {
      padding-top: 56px;
    }
  }
  
  a {
    text-decoration: none;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setShowLoader(false);
      }, 800);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      {showLoader && <Loader isExiting={isExiting} />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team-members" element={<TeamMembersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;