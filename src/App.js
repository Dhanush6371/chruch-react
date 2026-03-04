import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutTheStory from './pages/AboutTheStory';
import TheBelief from './pages/TheBelief';
import TheTeam from './pages/TheTeam';
import TheInvitation from './pages/TheInvitation';
import Give from './pages/Give';
import './App.css';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-the-story" element={<AboutTheStory />} />
                        <Route path="/the-belief" element={<TheBelief />} />
                        <Route path="/the-team" element={<TheTeam />} />
                        <Route path="/the-invitation" element={<TheInvitation />} />
                        <Route path="/give" element={<Give />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
