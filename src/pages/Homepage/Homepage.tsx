import React, { useState, useEffect, useRef } from 'react';
import { Link} from "react-router-dom";
import { motion } from 'framer-motion';
import './Homepage.css';

// Import all chair SVGs
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

// Import all face SVGs
import face01 from "../../assets/faces/face01.svg";
import face02 from "../../assets/faces/face02.svg";
import face03 from "../../assets/faces/face03.svg";
import face04 from "../../assets/faces/face04.svg";
import face05 from "../../assets/faces/face05.svg";
import face06 from "../../assets/faces/face06.svg";
import face07 from "../../assets/faces/face07.svg";
import face08 from "../../assets/faces/face08.svg";
import face09 from "../../assets/faces/face09.svg";
import face10 from "../../assets/faces/face10.svg";
import face11 from "../../assets/faces/face11.svg";
import face12 from "../../assets/faces/face12.svg";
import face13 from "../../assets/faces/face13.svg";
import face14 from "../../assets/faces/face14.svg";
import face15 from "../../assets/faces/face15.svg";
import face16 from "../../assets/faces/face16.svg";
import face17 from "../../assets/faces/face17.svg";
import face18 from "../../assets/faces/face18.svg";
import face19 from "../../assets/faces/face19.svg";
import face20 from "../../assets/faces/face20.svg";
import face21 from "../../assets/faces/face21.svg";
import face22 from "../../assets/faces/face22.svg";
import face23 from "../../assets/faces/face23.svg";
import face24 from "../../assets/faces/face24.svg";
import face25 from "../../assets/faces/face25.svg";
import face26 from "../../assets/faces/face26.svg";
import face27 from "../../assets/faces/face27.svg";
import face28 from "../../assets/faces/face28.svg";
import face29 from "../../assets/faces/face29.svg";
import face30 from "../../assets/faces/face30.svg";
import face31 from "../../assets/faces/face31.svg";
import face32 from "../../assets/faces/face32.svg";
import face33 from "../../assets/faces/face33.svg";
import face34 from "../../assets/faces/face34.svg";
import face35 from "../../assets/faces/face35.svg";
import face36 from "../../assets/faces/face36.svg";
import face37 from "../../assets/faces/face37.svg";
import face38 from "../../assets/faces/face38.svg";
import face39 from "../../assets/faces/face39.svg";
import face40 from "../../assets/faces/face40.svg";
import face41 from "../../assets/faces/face41.svg";
import face42 from "../../assets/faces/face42.svg";
import face43 from "../../assets/faces/face43.svg";
import face44 from "../../assets/faces/face44.svg";
import face45 from "../../assets/faces/face45.svg";
import face46 from "../../assets/faces/face46.svg";
import face47 from "../../assets/faces/face47.svg";
import face48 from "../../assets/faces/face48.svg";
import face49 from "../../assets/faces/face49.svg";
import face50 from "../../assets/faces/face50.svg";
import face51 from "../../assets/faces/face51.svg";
import face52 from "../../assets/faces/face52.svg";
import face53 from "../../assets/faces/face53.svg";
import face54 from "../../assets/faces/face54.svg";
import face55 from "../../assets/faces/face55.svg";
import face56 from "../../assets/faces/face56.svg";
import face57 from "../../assets/faces/face57.svg";
import face58 from "../../assets/faces/face58.svg";
import face59 from "../../assets/faces/face59.svg";
import face60 from "../../assets/faces/face60.svg";
import face61 from "../../assets/faces/face61.svg";
import face62 from "../../assets/faces/face62.svg";
import face63 from "../../assets/faces/face63.svg";
import face64 from "../../assets/faces/face64.svg";
import face65 from "../../assets/faces/face65.svg";
import face66 from "../../assets/faces/face66.svg";
import face67 from "../../assets/faces/face67.svg";
import face68 from "../../assets/faces/face68.svg";
import face69 from "../../assets/faces/face69.svg";
import face70 from "../../assets/faces/face70.svg";
import face71 from "../../assets/faces/face71.svg";
import face72 from "../../assets/faces/face72.svg";
import face73 from "../../assets/faces/face73.svg";

import signal01 from "../../assets/signals/signal01.svg";
import signal02 from "../../assets/signals/signal02.svg";
import signal03 from "../../assets/signals/signal03.svg";
import signal04 from "../../assets/signals/signal04.svg";
import signal05 from "../../assets/signals/signal05.svg";
import signal06 from "../../assets/signals/signal06.svg";
import signal07 from "../../assets/signals/signal07.svg";
import signal08 from "../../assets/signals/signal08.svg";
import signal09 from "../../assets/signals/signal09.svg";
import signal10 from "../../assets/signals/signal10.svg";
import signal11 from "../../assets/signals/signal11.svg";
import signal12 from "../../assets/signals/signal12.svg";
import signal13 from "../../assets/signals/signal13.svg";
import signal14 from "../../assets/signals/signal14.svg";
import signal15 from "../../assets/signals/signal15.svg";
import signal16 from "../../assets/signals/signal16.svg";
import signal17 from "../../assets/signals/signal17.svg";
import signal18 from "../../assets/signals/signal18.svg";
import signal19 from "../../assets/signals/signal19.svg";
import signal20 from "../../assets/signals/signal20.svg";
import signal21 from "../../assets/signals/signal21.svg";
import signal22 from "../../assets/signals/signal22.svg";
import signal23 from "../../assets/signals/signal23.svg";
import signal24 from "../../assets/signals/signal24.svg";
import signal25 from "../../assets/signals/signal25.svg";
import signal26 from "../../assets/signals/signal26.svg";
import signal27 from "../../assets/signals/signal27.svg";
import signal28 from "../../assets/signals/signal28.svg";
import signal29 from "../../assets/signals/signal29.svg";
import signal30 from "../../assets/signals/signal30.svg";
import signal31 from "../../assets/signals/signal31.svg";
import signal32 from "../../assets/signals/signal32.svg";
import signal33 from "../../assets/signals/signal33.svg";
import signal34 from "../../assets/signals/signal34.svg";
import signal35 from "../../assets/signals/signal35.svg";
import signal36 from "../../assets/signals/signal36.svg";
import signal37 from "../../assets/signals/signal37.svg";
import signal38 from "../../assets/signals/signal38.svg";
import signal39 from "../../assets/signals/signal39.svg";
import signal40 from "../../assets/signals/signal40.svg";
// Combine all chairs and faces into a single array with type identifiers
const allChairs = [
  Chair01, Chair02, Chair03, Chair04, Chair05, Chair06, Chair07, Chair08, Chair09, Chair10,
  Chair11, Chair12, Chair13, Chair14, Chair15, Chair16, Chair17, Chair18, Chair19, Chair20,
  Chair21, Chair22, Chair23, Chair24, Chair25, Chair26, Chair27, Chair28, Chair29, Chair30,
  Chair31, Chair32, Chair33, Chair34, Chair35, Chair36, Chair37, Chair38, Chair39, Chair40,
  Chair41, Chair42, Chair43, Chair44, Chair45, Chair46, Chair47, Chair48, Chair49, Chair50,
  Chair51, Chair52, Chair53, Chair54, Chair55, Chair56, Chair57, Chair58, Chair59, Chair60,
  Chair61, Chair62, Chair63, Chair64, Chair65, Chair66, Chair67, Chair68
];

const allFaces = [
  face01, face02, face03, face04, face05, face06, face07, face08, face09, face10,
  face11, face12, face13, face14, face15, face16, face17, face18, face19, face20,
  face21, face22, face23, face24, face25, face26, face27, face28, face29, face30,
  face31, face32, face33, face34, face35, face36, face37, face38, face39, face40,
  face41, face42, face43, face44, face45, face46, face47, face48, face49, face50,
  face51, face52, face53, face54, face55, face56, face57, face58, face59, face60,
  face61, face62, face63, face64, face65, face66, face67, face68, face69, face70,
  face71, face72, face73
];

const allSignals = [
  signal01, signal02, signal03, signal04, signal05,
  signal06, signal07, signal08, signal09, signal10,
  signal11, signal12, signal13, signal14, signal15,
  signal16, signal17, signal18, signal19, signal20,
  signal21, signal22, signal23, signal24, signal25,
  signal26, signal27, signal28, signal29, signal30,
  signal31, signal32, signal33, signal34, signal35,
  signal36, signal37, signal38, signal39, signal40
];

const allItems = [
  ...allChairs.map(img => ({ type: 'chair', img })),
  ...allFaces.map(img => ({ type: 'face', img })),
  ...allSignals.map(img => ({ type: 'signal', img }))
];

const Homepage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(allItems.length);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [randomSvgs, setRandomSvgs] = useState({
    face: allFaces[0],
    chair: allChairs[0],
    signal: allSignals[0]
  });
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const scrollSpeed = 0.5;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to get random items from each category
  const getRandomSvgs = () => {
    setRandomSvgs({
      face: allFaces[Math.floor(Math.random() * allFaces.length)],
      chair: allChairs[Math.floor(Math.random() * allChairs.length)],
      signal: allSignals[Math.floor(Math.random() * allSignals.length)]
    });
  };

  // Shuffle array function
  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Get shuffled items for grid
  const [shuffledItems, setShuffledItems] = useState(shuffleArray(allItems));

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const itemHeight = 40;
    const itemWidth = 40;
    const containerWidth = container.clientWidth;
    const containerHeight = windowSize.height - 200;

    const itemsPerRow = Math.floor(containerWidth / itemWidth);
    const rows = Math.ceil(containerHeight / itemHeight);
    
    setVisibleItems(Math.max(allItems.length, itemsPerRow * rows));
    setShuffledItems(shuffleArray(allItems));
    getRandomSvgs();
  }, [windowSize]);

  useEffect(() => {
    if (!scrollRef.current) return;

    let scrollPosition = 0;
    let maxScroll = scrollRef.current.scrollHeight - window.innerHeight;
    let animationFrameId: number;

    const animateScroll = () => {
      if (!scrollRef.current) return;

      if (scrollDirection === 'up') {
        scrollPosition -= scrollSpeed;
        if (scrollPosition <= 0) {
          scrollPosition = 0;
          setScrollDirection('down');
        }
      } else {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= maxScroll) {
          scrollPosition = maxScroll;
          setScrollDirection('up');
        }
      }

      scrollRef.current.scrollTop = scrollPosition;
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    const handleResize = () => {
      maxScroll = scrollRef.current ? scrollRef.current.scrollHeight - window.innerHeight : 0;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollDirection]);

  return (
    <div className="homepage">
      <div className="grid-container">
        <div 
          ref={scrollRef} 
          className="items-container"
          style={{
            overflowY: 'hidden',
            height: '100vh'
          }}
        >
          {Array.from({ length: visibleItems }).map((_, index) => {
            const itemIndex = index % shuffledItems.length;
            return (
              <GridItem 
                key={`item-${index}`}
                item={shuffledItems[itemIndex]}
              />
            );
          })}
        </div>
      </div>
      
      <div className="content-section">
        <h1 className="title">Design <br/>as Art</h1>
        <p className="text">
          A work based on the book "Design as Art" by Bruno Munari<br/>
          A website by Nuno Pinto and Pedro Anjinho in the context of the Multimedia Communication discipline at the University of Coimbra
        </p>
        
        <div className="bottom-svgs">
          <Link to="/memory">
            <motion.div 
              className="bottom-svg-container"
              whileHover={{ scale: 1.1 }}
            >
              <img src={randomSvgs.face} alt="Random Face" className="bottom-svg" />
            </motion.div>
          </Link>
          <Link to="/sorting">
            <motion.div 
              className="bottom-svg-container"
              whileHover={{ scale: 1.1 }}
              
            >
              <img src={randomSvgs.chair} alt="Random Chair" className="bottom-svg" />
            </motion.div>
          </Link>
          <Link to="/signal">
            <motion.div 
              className="bottom-svg-container"
              whileHover={{ scale: 1.1 }}
            >
              <img src={randomSvgs.signal} alt="Random Signal" className="bottom-svg" />
            </motion.div>
          </Link>
          
        </div>
        <div className='select'> Select a minigame</div>
      </div>
    </div>
  );
};

interface GridItemProps {
  item: {
    type: string;
    img: string;
  };
}

const GridItem: React.FC<GridItemProps> = ({ item }) => {
  const [currentItem, setCurrentItem] = useState(item);
  const [canChange, setCanChange] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const isFirstHover = useRef(true);

  const getRandomItem = () => {
    let newItem;
    do {
      newItem = allItems[Math.floor(Math.random() * allItems.length)];
    } while (newItem.img === currentItem.img && allItems.length > 1);
    return newItem;
  };

  const handleHover = () => {
    if (!canChange && !isFirstHover.current) return;
    
    setCurrentItem(getRandomItem());
    
    if (isFirstHover.current) {
      isFirstHover.current = false;
    } else {
      setCanChange(false);
      
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = window.setTimeout(() => {
       setCanChange(true);
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onHoverStart={handleHover}
      onHoverEnd={() => {
        isFirstHover.current = true;
      }}
      className={`grid-item ${currentItem.type}`}
    >
      <motion.img
        key={currentItem.img}
        src={currentItem.img}
        alt={`${currentItem.type}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="item-image"
      />
    </motion.div>
  );
};

export default Homepage;











