import React from 'react';
import { Navbar } from './components';
import { Hero, About, Events } from './sections';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Events />
    </div>
  );
};

export default App;
