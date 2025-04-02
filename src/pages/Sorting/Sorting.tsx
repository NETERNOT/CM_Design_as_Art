import React, { useState, useEffect } from "react";
import { motion, Reorder } from "framer-motion";
import "./Sorting.css";


import Chair1 from '../../assets/chair1.svg';
import Chair2 from "../../assets/chair2.svg";
import Chair3 from "../../assets/chair3.svg";
import Chair4 from "../../assets/chair4.svg";
import Chair5 from "../../assets/chair5.svg";
import Chair6 from "../../assets/chair6.svg";
import Chair7 from "../../assets/chair7.svg";
import Chair8 from "../../assets/chair8.svg";
import Chair9 from "../../assets/chair9.svg";
import Chair10 from "../../assets/chair10.svg";
import StarIcon from "../../assets/star.svg";
import EmptyStarIcon from "../../assets/empty-star.svg";

interface Chair {
  id: number;
  src: string;
  function: number;
  aesthetics: number;
  emotion: number;
}


const ALL_CHAIRS: Chair[] = [
  { id: 1, src: Chair1, function: 8, aesthetics: 6, emotion: 4 },
  { id: 2, src: Chair2, function: 7, aesthetics: 9, emotion: 5 },
  { id: 3, src: Chair3, function: 9, aesthetics: 5, emotion: 3 },
  { id: 4, src: Chair4, function: 6, aesthetics: 8, emotion: 6 },
  { id: 5, src: Chair5, function: 5, aesthetics: 7, emotion: 8 },
  { id: 6, src: Chair6, function: 7, aesthetics: 6, emotion: 7 },
  { id: 7, src: Chair7, function: 6, aesthetics: 7, emotion: 5 },
  { id: 8, src: Chair8, function: 8, aesthetics: 5, emotion: 4 },
  { id: 9, src: Chair9, function: 5, aesthetics: 8, emotion: 9 },
  { id: 10, src: Chair10, function: 4, aesthetics: 9, emotion: 7 },
];

const SortingGame: React.FC = () => {
  const [currentChairs, setCurrentChairs] = useState<Chair[]>([]);
  const [stars, setStars] = useState({
    function: false,
    aesthetics: false,
    emotion: false,
  });
  const [discoveredCategories, setDiscoveredCategories] = useState<string[]>([]);
  const [correctOrders, setCorrectOrders] = useState<Record<string, number[]>>({
    function: [],
    aesthetics: [],
    emotion: [],
  });

  // Initialize the game with random chairs
  const initializeGame = () => {

    setStars({
      function: false,
      aesthetics: false,
      emotion: false,
    });
    
    // Shuffle and select 5 random chairs
    const shuffled = [...ALL_CHAIRS].sort(() => 0.5 - Math.random());
    const selectedChairs = shuffled.slice(0, 5);
    
    // Calculate correct orders for these chairs
    const newCorrectOrders = {
      function: [...selectedChairs].sort((a, b) => b.function - a.function).map(c => c.id),
      aesthetics: [...selectedChairs].sort((a, b) => b.aesthetics - a.function).map(c => c.id),
      emotion: [...selectedChairs].sort((a, b) => b.emotion - a.emotion).map(c => c.id),
    };
    
    setCurrentChairs(selectedChairs);
    setCorrectOrders(newCorrectOrders);
  };

  // Initialize on first render
  useEffect(() => {
    initializeGame();
  }, []);

  // Check if current order matches any category's correct order
  const checkOrder = (currentOrder: number[]) => {
    const newStars = { ...stars };
    const newDiscovered: string[] = [];
    
    Object.entries(correctOrders).forEach(([category, correctOrder]) => {
      const isMatch = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
      if (isMatch && !stars[category as keyof typeof stars]) {
        newStars[category as keyof typeof stars] = true;
        newDiscovered.push(category);
      }
    });
    
    setStars(newStars);
    if (newDiscovered.length > 0) {
      setDiscoveredCategories(prev => [...prev, ...newDiscovered]);
    }
  };

  const handleReorder = (newChairs: Chair[]) => {
    setCurrentChairs(newChairs);
    const currentOrder = newChairs.map(chair => chair.id);
    checkOrder(currentOrder);
  };

  // Show discovery message when a new category is found
  useEffect(() => {
    if (discoveredCategories.length > 0) {
      const timer = setTimeout(() => {
        setDiscoveredCategories([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [discoveredCategories]);

  // Check if all stars are collected
  const allStarsCollected = Object.values(stars).every(val => val);

  return (
    <div className="container">
      <div className="stars-container">
        {Object.entries(stars).map(([category, achieved]) => (
          <div key={category} className="star-wrapper">
            <img 
              src={achieved ? StarIcon : EmptyStarIcon} 
              alt={`${category} star`} 
              className={`star-icon ${achieved ? 'achieved' : ''}`}
            />
            <span className="category-label">{category}</span>
          </div>
        ))}
      </div>

      {discoveredCategories.length > 0 && (
        <div className="discovery-message">
          Discovered: {discoveredCategories.join(", ")}!
        </div>
      )}

      {allStarsCollected && (
        <div className="discovery-message" style={{ color: 'green' }}>
          All categories discovered! <button onClick={initializeGame}>Play Again</button>
        </div>
      )}

      <Reorder.Group 
        axis="x" 
        values={currentChairs} 
        onReorder={handleReorder}
        className="chairs-container"
      >
        {currentChairs.map((chair) => (
          <Reorder.Item key={chair.id} value={chair}>
            <motion.div
              className="draggable-chair"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="chair-image-container">
                <img src={chair.src} alt={`Chair ${chair.id}`} className="chair-image" />
              </div>
              <div className="chair-stats">
                <span>F:{chair.function}</span>
                <span>A:{chair.aesthetics}</span>
                <span>E:{chair.emotion}</span>
              </div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="hint-text">
        Reorder the chairs to discover all three categories!
      </div>

    </div>
  );
};

export default SortingGame;