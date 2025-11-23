import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; 

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Walin" age={25} bio="Passionate about building precise, validated web apps with creative flair." />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;