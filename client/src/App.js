import LandingPage from "./LandingPage";
import { useState } from 'react';
import { useMousePosition } from './MousePosition';

function App() {  
  const position = useMousePosition()
  const root = document.getElementById('html');

  if (position.x <= position.innerWidth/2) {
    root.className = 'musician-background'
  } else {
    root.className = 'swe-background'
  }
  
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;