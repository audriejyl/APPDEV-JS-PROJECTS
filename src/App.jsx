import React from 'react';
import Keyboard from 'Keyboard';
import Features from 'Features';
import Specifications from 'Specifications';
import SetupInstructions from 'Instructions';

const App = () => {
  return (
    <div className="app">
      <Keyboard />
      <Features />
      <Specifications />
      <SetupInstructions />
    </div>
  );
};

export default App;
