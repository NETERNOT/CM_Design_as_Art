import React, { useState, useEffect } from "react";
import { motion, Reorder } from "framer-motion";
import { Link } from "react-router-dom";
import "./Sorting.css";

import StarIcon from "../../assets/star.svg";
import EmptyStarIcon from "../../assets/empty-star.svg";
import Bruno from "../../assets/BrunoMunari/face1.jpg";

interface Chair {
  id: number;
  src: string;
  function: number;
  aesthetics: number;
  luxury: number;
}

import Chair01 from "../../assets/chairs/chair01.svg";
import Chair02 from "../../assets/chairs/chair02.svg";
import Chair03 from "../../assets/chairs/chair03.svg";
import Chair04 from "../../assets/chairs/chair04.svg";
import Chair05 from "../../assets/chairs/chair05.svg";
import Chair06 from "../../assets/chairs/chair06.svg";
import Chair07 from "../../assets/chairs/chair07.svg";
import Chair08 from "../../assets/chairs/chair08.svg";
import Chair09 from "../../assets/chairs/chair09.svg";
import Chair10 from "../../assets/chairs/chair10.svg";
import Chair11 from "../../assets/chairs/chair11.svg";
import Chair12 from "../../assets/chairs/chair12.svg";
import Chair13 from "../../assets/chairs/chair13.svg";
import Chair14 from "../../assets/chairs/chair14.svg";
import Chair15 from "../../assets/chairs/chair15.svg";
import Chair16 from "../../assets/chairs/chair16.svg";
import Chair17 from "../../assets/chairs/chair17.svg";
import Chair18 from "../../assets/chairs/chair18.svg";
import Chair19 from "../../assets/chairs/chair19.svg";
import Chair20 from "../../assets/chairs/chair20.svg";
import Chair21 from "../../assets/chairs/chair21.svg";
import Chair22 from "../../assets/chairs/chair22.svg";
import Chair23 from "../../assets/chairs/chair23.svg";
import Chair24 from "../../assets/chairs/chair24.svg";
import Chair25 from "../../assets/chairs/chair25.svg";
import Chair26 from "../../assets/chairs/chair26.svg";
import Chair27 from "../../assets/chairs/chair27.svg";
import Chair28 from "../../assets/chairs/chair28.svg";
import Chair29 from "../../assets/chairs/chair29.svg";
import Chair30 from "../../assets/chairs/chair30.svg";
import Chair31 from "../../assets/chairs/chair31.svg";
import Chair32 from "../../assets/chairs/chair32.svg";
import Chair33 from "../../assets/chairs/chair33.svg";
import Chair34 from "../../assets/chairs/chair34.svg";
import Chair35 from "../../assets/chairs/chair35.svg";
import Chair36 from "../../assets/chairs/chair36.svg";
import Chair37 from "../../assets/chairs/chair37.svg";
import Chair38 from "../../assets/chairs/chair38.svg";
import Chair39 from "../../assets/chairs/chair39.svg";
import Chair40 from "../../assets/chairs/chair40.svg";
import Chair41 from "../../assets/chairs/chair41.svg";
import Chair42 from "../../assets/chairs/chair42.svg";
import Chair43 from "../../assets/chairs/chair43.svg";
import Chair44 from "../../assets/chairs/chair44.svg";
import Chair45 from "../../assets/chairs/chair45.svg";
import Chair46 from "../../assets/chairs/chair46.svg";
import Chair47 from "../../assets/chairs/chair47.svg";
import Chair48 from "../../assets/chairs/chair48.svg";
import Chair49 from "../../assets/chairs/chair49.svg";
import Chair50 from "../../assets/chairs/chair50.svg";
import Chair51 from "../../assets/chairs/chair51.svg";
import Chair52 from "../../assets/chairs/chair52.svg";
import Chair53 from "../../assets/chairs/chair53.svg";
import Chair54 from "../../assets/chairs/chair54.svg";
import Chair55 from "../../assets/chairs/chair55.svg";
import Chair56 from "../../assets/chairs/chair56.svg";
import Chair57 from "../../assets/chairs/chair57.svg";
import Chair58 from "../../assets/chairs/chair58.svg";
import Chair59 from "../../assets/chairs/chair59.svg";
import Chair60 from "../../assets/chairs/chair60.svg";
import Chair61 from "../../assets/chairs/chair61.svg";
import Chair62 from "../../assets/chairs/chair62.svg";
import Chair63 from "../../assets/chairs/chair63.svg";
import Chair64 from "../../assets/chairs/chair64.svg";
import Chair65 from "../../assets/chairs/chair65.svg";
import Chair66 from "../../assets/chairs/chair66.svg";
import Chair67 from "../../assets/chairs/chair67.svg";
import Chair68 from "../../assets/chairs/chair68.svg";

const ALL_CHAIRS: Chair[] = [
  { id: 1, src: Chair01, function: 6, aesthetics: 9, luxury: 4 },
  { id: 2, src: Chair02, function: 10, aesthetics: 5, luxury: 4 },
  { id: 3, src: Chair03, function: 6, aesthetics: 7, luxury: 5 },
  { id: 4, src: Chair04, function: 9, aesthetics: 4, luxury: 3 },
  { id: 5, src: Chair05, function: 8, aesthetics: 5, luxury: 6 },
  { id: 6, src: Chair06, function: 5, aesthetics: 10, luxury: 9 },
  { id: 7, src: Chair07, function: 3, aesthetics: 6, luxury: 7 },
  { id: 8, src: Chair08, function: 6, aesthetics: 7, luxury: 6 },
  { id: 9, src: Chair09, function: 7, aesthetics: 6, luxury: 6 },
  { id: 10, src: Chair10, function: 4, aesthetics: 6, luxury: 7 },
  { id: 11, src: Chair11, function: 8, aesthetics: 5, luxury: 4 },
  { id: 12, src: Chair12, function: 3, aesthetics: 9, luxury: 9 },
  { id: 13, src: Chair13, function: 7, aesthetics: 6, luxury: 5 },
  { id: 14, src: Chair14, function: 2, aesthetics: 8, luxury: 9 },
  { id: 15, src: Chair15, function: 8, aesthetics: 5, luxury: 6 },
  { id: 16, src: Chair16, function: 5, aesthetics: 6, luxury: 8 },
  { id: 17, src: Chair17, function: 6, aesthetics: 4, luxury: 5 },
  { id: 18, src: Chair18, function: 5, aesthetics: 4, luxury: 6 },
  { id: 19, src: Chair19, function: 2, aesthetics: 10, luxury: 10 },
  { id: 20, src: Chair20, function: 4, aesthetics: 9, luxury: 8 },
  { id: 21, src: Chair21, function: 8, aesthetics: 5, luxury: 6 },
  { id: 22, src: Chair22, function: 5, aesthetics: 7, luxury: 8 },
  { id: 23, src: Chair23, function: 6, aesthetics: 7, luxury: 4 },
  { id: 24, src: Chair24, function: 7, aesthetics: 6, luxury: 6 },
  { id: 25, src: Chair25, function: 5, aesthetics: 8, luxury: 7 },
  { id: 26, src: Chair26, function: 9, aesthetics: 5, luxury: 3 },
  { id: 27, src: Chair27, function: 4, aesthetics: 7, luxury: 7 },
  { id: 28, src: Chair28, function: 6, aesthetics: 4, luxury: 4 },
  { id: 29, src: Chair29, function: 4, aesthetics: 6, luxury: 6 },
  { id: 30, src: Chair30, function: 3, aesthetics: 7, luxury: 7 },
  { id: 31, src: Chair31, function: 7, aesthetics: 5, luxury: 5 },
  { id: 32, src: Chair32, function: 5, aesthetics: 7, luxury: 8 },
  { id: 33, src: Chair33, function: 6, aesthetics: 6, luxury: 5 },
  { id: 34, src: Chair34, function: 2, aesthetics: 10, luxury: 10 },
  { id: 35, src: Chair35, function: 1, aesthetics: 10, luxury: 10 },
  { id: 36, src: Chair36, function: 7, aesthetics: 4, luxury: 5 },
  { id: 37, src: Chair37, function: 6, aesthetics: 6, luxury: 6 },
  { id: 38, src: Chair38, function: 9, aesthetics: 4, luxury: 4 },
  { id: 39, src: Chair39, function: 4, aesthetics: 9, luxury: 9 },
  { id: 40, src: Chair40, function: 7, aesthetics: 6, luxury: 6 },
  { id: 41, src: Chair41, function: 3, aesthetics: 8, luxury: 9 },
  { id: 42, src: Chair42, function: 6, aesthetics: 6, luxury: 5 },
  { id: 43, src: Chair43, function: 8, aesthetics: 5, luxury: 4 },
  { id: 44, src: Chair44, function: 5, aesthetics: 7, luxury: 7 },
  { id: 45, src: Chair45, function: 3, aesthetics: 6, luxury: 7 },
  { id: 46, src: Chair46, function: 6, aesthetics: 7, luxury: 5 },
  { id: 47, src: Chair47, function: 6, aesthetics: 7, luxury: 6 },
  { id: 48, src: Chair48, function: 5, aesthetics: 9, luxury: 8 },
  { id: 49, src: Chair49, function: 2, aesthetics: 10, luxury: 10 },
  { id: 50, src: Chair50, function: 4, aesthetics: 6, luxury: 5 },
  { id: 51, src: Chair51, function: 8, aesthetics: 5, luxury: 4 },
  { id: 52, src: Chair52, function: 4, aesthetics: 7, luxury: 6 },
  { id: 53, src: Chair53, function: 7, aesthetics: 6, luxury: 5 },
  { id: 54, src: Chair54, function: 6, aesthetics: 7, luxury: 6 },
  { id: 55, src: Chair55, function: 3, aesthetics: 9, luxury: 9 },
  { id: 56, src: Chair56, function: 7, aesthetics: 5, luxury: 6 },
  { id: 57, src: Chair57, function: 6, aesthetics: 6, luxury: 4 },
  { id: 58, src: Chair58, function: 4, aesthetics: 8, luxury: 7 },
  { id: 59, src: Chair59, function: 5, aesthetics: 5, luxury: 5 },
  { id: 60, src: Chair60, function: 7, aesthetics: 6, luxury: 5 },
  { id: 61, src: Chair61, function: 6, aesthetics: 6, luxury: 6 },
  { id: 62, src: Chair62, function: 6, aesthetics: 5, luxury: 5 },
  { id: 63, src: Chair63, function: 3, aesthetics: 9, luxury: 9 },
  { id: 64, src: Chair64, function: 6, aesthetics: 7, luxury: 6 },
  { id: 65, src: Chair65, function: 5, aesthetics: 8, luxury: 8 },
  { id: 66, src: Chair66, function: 7, aesthetics: 6, luxury: 6 },
  { id: 67, src: Chair67, function: 4, aesthetics: 9, luxury: 7 },
  { id: 68, src: Chair68, function: 7, aesthetics: 4, luxury: 5 },
];

const SortingGame: React.FC = () => {
  const [currentChairs, setCurrentChairs] = useState<Chair[]>([]);
  const [stars, setStars] = useState({
    function: false,
    aesthetics: false,
    luxury: false,
  });
  const [discoveredCategories, setDiscoveredCategories] = useState<string[]>(
    []
  );
  const [correctOrders, setCorrectOrders] = useState<Record<string, number[]>>({
    function: [],
    aesthetics: [],
    luxury: [],
  });

  // Initialize the game with random chairs
  const initializeGame = () => {
    setStars({
      function: false,
      aesthetics: false,
      luxury: false,
    });

    // Shuffle and select 5 random chairs
    const shuffled = [...ALL_CHAIRS].sort(() => 0.5 - Math.random());
    const selectedChairs = shuffled.slice(0, 5);

    // Calculate correct orders for these chairs
    const newCorrectOrders = {
      function: [...selectedChairs]
        .sort((a, b) => b.function - a.function)
        .map((c) => c.id),
      aesthetics: [...selectedChairs]
        .sort((a, b) => b.aesthetics - a.aesthetics)
        .map((c) => c.id),
      luxury: [...selectedChairs]
        .sort((a, b) => b.luxury - a.luxury)
        .map((c) => c.id),
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
      const isMatch =
        JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
      if (isMatch && !stars[category as keyof typeof stars]) {
        newStars[category as keyof typeof stars] = true;
        newDiscovered.push(category);
      }
    });

    setStars(newStars);
    if (newDiscovered.length > 0) {
      setDiscoveredCategories((prev) => [...prev, ...newDiscovered]);
    }
  };

  const handleReorder = (newChairs: Chair[]) => {
    setCurrentChairs(newChairs);
    const currentOrder = newChairs.map((chair) => chair.id);
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
  const allStarsCollected = Object.values(stars).every((val) => val);
  
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (allStarsCollected) {
      setTimeout(() => {
        setIsPlaying(false);
      }, 3600);
    }
  }, [allStarsCollected]);

  return (
    <div
      className={`sortingContainer secondTransition ${
        allStarsCollected ? "disabled" : ""
      }`}
    >
      <div className="stars-container secondTransition">
        {Object.entries(stars).map(([category, achieved]) => (
          <div key={category} className="star-wrapper">
            <img
              src={achieved ? StarIcon : EmptyStarIcon}
              alt={`${category} star`}
              className={`star-icon ${achieved ? "achieved" : ""}`}
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

      <Reorder.Group
        axis="x"
        values={currentChairs}
        onReorder={handleReorder}
        className={`chairs-container ${
          isPlaying ? "firstTransition" : "thirdTransition"
        }`}
      >
        {currentChairs.map((chair) => (
          <Reorder.Item key={chair.id} value={chair}>
            <motion.div
              className="draggable-chair"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="chair-image-container">
                <img
                  src={chair.src}
                  alt={`Chair ${chair.id}`}
                  className="chair-image"
                />
              </div>
              <div className="chair-stats">
                <span>F:{chair.function}</span>
                <span>A:{chair.aesthetics}</span>
                <span>L:{chair.luxury}</span>
              </div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div
        className={`hint-text ${
          isPlaying ? "firstTransition" : "thirdTransition"
        }`}
      >
        Reorder the chairs to discover all three categories!
      </div>

      <img src={Bruno} className="Author"></img>
      
      <div
        id="hiddenContent"
        className={isPlaying ? "secondTransition" : "firstTransition"}
      >
        <p>
          Visual characterization makes for directness and immediacy. People
          haven’t got time to stop in the street, size a poster up, see what it
          refers to and then decide whether or not it interests them.
          Communication must be instant and it must be exact. <br />
          In how many ways and with what techniques can one produce variations
          on the human face seen from the front? The graphic designer works
          without set limit and without rejecting any possible technique. His
          experiments in the visual lead him to try out all possible
          combinations and methods in order to arrive at the precise image he
          needs for the job in hand, and no other.
        </p>
        <div id="SortingLinks">
          <button
            onClick={() => {
              initializeGame();
              setTimeout(() => {
                setIsPlaying(true);
              }, 3600);
            }}
          >
            Play Again
          </button>
          <Link to="/customsorting">
          <button>Explore More</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SortingGame;
