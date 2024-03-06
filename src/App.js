import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
