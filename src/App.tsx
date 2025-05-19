import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MemoryGame from './pages/memory/Memory';
import CustomSortingGame from './pages/customSorting/CustomSorting';
import Memory from './pages/memory/Memory';
import Home from './pages/Homepage/Homepage.tsx';
import SortingGame from './pages/Sorting/Sorting.tsx';

function App() {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // 👆 Custom Cursor Logic
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let cursorSize = 40;
    let isHovering = false;

    const mouse = { x: 0, y: 0 };

    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.borderRadius = '50%';
    cursor.style.background = 'white';
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
    cursor.style.left = `${targetX}px`;
    cursor.style.top = `${targetY}px`;
    cursor.style.transform = 'translate(-50%, -50%)';

    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    });

    const interactiveElements = document.querySelectorAll('button, a, [data-interactive]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        isHovering = true;
        cursorSize = 80;
        cursor.style.width = `${cursorSize}px`;
        cursor.style.height = `${cursorSize}px`;
      });

      el.addEventListener('mouseleave', () => {
        isHovering = false;
        cursorSize = 40;
        cursor.style.width = `${cursorSize}px`;
        cursor.style.height = `${cursorSize}px`;
        cursor.style.background = 'white';
      });
    });

    document.addEventListener('mousedown', () => {
      cursor.style.width = `${cursorSize * 0.3}px`;
      cursor.style.height = `${cursorSize * 0.3}px`;
    });

    document.addEventListener('mouseup', () => {
      cursor.style.width = `${cursorSize}px`;
      cursor.style.height = `${cursorSize}px`;
    });

    function animateCursor() {
      const currentX = parseFloat(cursor.style.left) || targetX;
      const currentY = parseFloat(cursor.style.top) || targetY;

      const lerpFactor = 0.2;
      const newX = currentX + (targetX - currentX) * lerpFactor;
      const newY = currentY + (targetY - currentY) * lerpFactor;

      cursor.style.left = `${newX}px`;
      cursor.style.top = `${newY}px`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  }, [windowSize]);

  return (
    <>
      {/* Add the cursor element */}
      <div id="cursor"></div>

      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customsorting" element={<CustomSortingGame />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/sorting" element={<SortingGame />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;