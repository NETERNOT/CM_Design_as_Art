import React, { useState, useEffect } from "react";
import { motion, Reorder } from "framer-motion";
import "./CustomSorting.css";

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

interface Chair {
  id: number;
  src: string;
}

interface ChairCombination {
  category: string;
  author: string;
  chairs: number[];
}

const ALL_CHAIRS: Chair[] = [
  { id: 1, src: Chair01 },
  { id: 2, src: Chair02 },
  { id: 3, src: Chair03 },
  { id: 4, src: Chair04 },
  { id: 5, src: Chair05 },
  { id: 6, src: Chair06 },
  { id: 7, src: Chair07 },
  { id: 8, src: Chair08 },
  { id: 9, src: Chair09 },
  { id: 10, src: Chair10 },
  { id: 11, src: Chair11 },
  { id: 12, src: Chair12 },
  { id: 13, src: Chair13 },
  { id: 14, src: Chair14 },
  { id: 15, src: Chair15 },
  { id: 16, src: Chair16 },
  { id: 17, src: Chair17 },
  { id: 18, src: Chair18 },
  { id: 19, src: Chair19 },
  { id: 20, src: Chair20 },
  { id: 21, src: Chair21 },
  { id: 22, src: Chair22 },
  { id: 23, src: Chair23 },
  { id: 24, src: Chair24 },
  { id: 25, src: Chair25 },
  { id: 26, src: Chair26 },
  { id: 27, src: Chair27 },
  { id: 28, src: Chair28 },
  { id: 29, src: Chair29 },
  { id: 30, src: Chair30 },
  { id: 31, src: Chair31 },
  { id: 32, src: Chair32 },
  { id: 33, src: Chair33 },
  { id: 34, src: Chair34 },
  { id: 35, src: Chair35 },
  { id: 36, src: Chair36 },
  { id: 37, src: Chair37 },
  { id: 38, src: Chair38 },
  { id: 39, src: Chair39 },
  { id: 40, src: Chair40 },
  { id: 41, src: Chair41 },
  { id: 42, src: Chair42 },
  { id: 43, src: Chair43 },
  { id: 44, src: Chair44 },
  { id: 45, src: Chair45 },
  { id: 46, src: Chair46 },
  { id: 47, src: Chair47 },
  { id: 48, src: Chair48 },
  { id: 49, src: Chair49 },
  { id: 50, src: Chair50 },
  { id: 51, src: Chair51 },
  { id: 52, src: Chair52 },
  { id: 53, src: Chair53 },
  { id: 54, src: Chair54 },
  { id: 55, src: Chair55 },
  { id: 56, src: Chair56 },
  { id: 57, src: Chair57 },
  { id: 58, src: Chair58 },
  { id: 59, src: Chair59 },
  { id: 60, src: Chair60 },
  { id: 61, src: Chair61 },
  { id: 62, src: Chair62 },
  { id: 63, src: Chair63 },
  { id: 64, src: Chair64 },
  { id: 65, src: Chair65 },
  { id: 66, src: Chair66 },
  { id: 67, src: Chair67 },
  { id: 68, src: Chair68 },
];

const CustomSortingGame: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [currentChairs, setCurrentChairs] = useState<Chair[]>([]);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  //const [savedCombinations, setSavedCombinations] = useState<
  //  ChairCombination[]
  //>([]);
  const [setCombinations, setSetCombinations] = useState<ChairCombination[]>(
    []
  );
  const [otherCombinations, setOtherCombinations] = useState<
    ChairCombination[]
  >([]);
  const [areChairsOpen, setAreChairsOpen] = useState(true);

  const saveCombination = async (
    category: string,
    author: string,
    chairs: Chair[]
  ) => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyDzmG03yMUrEiVrw4kGFnaOjJ9S_3rc6-xhRsxtzWdS-_sfew4WIPVeuHVTw8v8Ooi/exec",
      {
        method: "POST",
        body: JSON.stringify({
          category,
          author,
          chairs: chairs.map((c) => c.id),
        }),
      }
    );

    //const text = await response.text();
    const message = await response.json();

    if (message.message === "Success") {
      alert("Success! Your order has been submitted. You can check yours and others on the Collections tab.");
    } else {
      alert(message.message);
    }
  };

  const handleCombinations = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyDzmG03yMUrEiVrw4kGFnaOjJ9S_3rc6-xhRsxtzWdS-_sfew4WIPVeuHVTw8v8Ooi/exec"
      );
      const data: ChairCombination[] = await response.json();

      //setSavedCombinations(data);

      const currentIds = [...currentChairs.map((c) => c.id)].sort(
        (a, b) => a - b
      );
      const setMatches: ChairCombination[] = [];
      const otherMatches: ChairCombination[] = [];

      data.forEach((combo) => {
        const sortedCombo = [...combo.chairs].sort((a, b) => a - b);
        const isSame =
          JSON.stringify(sortedCombo) === JSON.stringify(currentIds);
        if (isSame) {
          setMatches.push(combo);
        } else {
          otherMatches.push(combo);
        }
      });

      setSetCombinations(setMatches);
      setOtherCombinations(otherMatches);
    } catch (error) {
      console.error("Failed to fetch combinations:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const prevChairsRef = React.useRef<number[]>([]);

  useEffect(() => {
    const currentIds = currentChairs.map((c) => c.id).sort((a, b) => a - b);
    const prevIds = [...prevChairsRef.current].sort((a, b) => a - b);

    const hasChanged =
      currentIds.length !== prevIds.length ||
      currentIds.some((id, i) => id !== prevIds[i]);

    if (hasChanged && currentIds.length <= 5) {
      handleCombinations();
    }

    prevChairsRef.current = currentChairs.map((c) => c.id);
  }, [currentChairs]);

  const isFormValid =
    category.trim() !== "" &&
    author.trim() !== "" &&
    currentChairs.length === 5;

  const initializeGame = () => {
    const shuffled = [...ALL_CHAIRS].sort(() => 0.5 - Math.random());
    setCurrentChairs(shuffled.slice(0, 5));
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleReorder = (newChairs: Chair[]) => {
    setCurrentChairs(newChairs);
    if (!areChairsOpen) {
      setAuthor("");
      setCategory("");
    }
  };

  const handleRemoveChair = (id: number) => {
    setCurrentChairs(currentChairs.filter((chair) => chair.id !== id));
  };

  const handleAddChair = (chair: Chair) => {
    if (
      currentChairs.length < 5 &&
      !currentChairs.some((c) => c.id === chair.id)
    ) {
      setCurrentChairs([...currentChairs, chair]);
    }
  };

  return (
    <div className="container">
      <div id="upperSection">
        {areChairsOpen ? (
          <div className="upperUpper">
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <div style={{ flexBasis: "100%", height: 0 }} />
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        ) : (
          <div className="upperUpper alt">
            <p id="category">{category=="" ? "Custom" : category}</p>
            <br />
            <p id="author">by {author=="" ? "You" : author }</p>
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
                  <img
                    src={chair.src}
                    alt={`Chair ${chair.id}`}
                    className="chair-image"
                  />
                </div>
                <svg
                  className={`removeChair ${areChairsOpen ?"":"alt"}`}
                  onClick={() => {
                    if (areChairsOpen) handleRemoveChair(chair.id);
                  }}
                  width="38"
                  height="37"
                  viewBox="0 0 38 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="37"
                    height="36"
                    rx="18"
                    stroke="black"
                  />
                  <path
                    d="M27 10.1111H23L21.8571 9H16.1429L15 10.1111H11V12.3333H27M12.1429 26.7778C12.1429 27.3671 12.3837 27.9324 12.8123 28.3491C13.241 28.7659 13.8224 29 14.4286 29H23.5714C24.1776 29 24.759 28.7659 25.1877 28.3491C25.6163 27.9324 25.8571 27.3671 25.8571 26.7778V13.4444H12.1429V26.7778Z"
                    fill="black"
                  />
                </svg>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>

        <p id="hightolow">
          Highest{" "}
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1293 20L11.4886 18.3807L18.2429 11.6264H0.75V9.28267H18.2429L11.4886 2.54972L13.1293 0.909091L22.6747 10.4545L13.1293 20Z"
              fill="black"
            />
          </svg>
          Lowest
        </p>
      </div>

      <div id="lowerSection">
        <div id="left">
          <div id="topicContainer">
            <div
              className={`topic ${areChairsOpen ? "open" : ""}`}
              onClick={() => {setAreChairsOpen(true); setAuthor(""); setCategory("");} }
            >
              <p>Chairs</p>
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7351 20.3942L10.8175 18.4979L17.4759 11.8395H0.75V9.0696H17.4759L10.8175 2.42188L12.7351 0.514914L22.6747 10.4545L12.7351 20.3942Z"
                  fill="black"
                />
              </svg>
            </div>
            <div
              className={`topic ${!areChairsOpen ? "open" : ""}`}
              onClick={() => {
                handleCombinations();
                setAreChairsOpen(false);
              }}
            >
              <p>Collections</p>
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7351 20.3942L10.8175 18.4979L17.4759 11.8395H0.75V9.0696H17.4759L10.8175 2.42188L12.7351 0.514914L22.6747 10.4545L12.7351 20.3942Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <button
            disabled={!isFormValid}
            onClick={() => saveCombination(category, author, currentChairs)}
            id="submit"
          >
            Submit your order
            <div id="reqs">
              Category and Author must be filled.
              <br />
              Must select 5 chairs.
            </div>
          </button>
        </div>

        <div id="right">
          {areChairsOpen ? (
            <div id="chairs">
              {ALL_CHAIRS.map((chair) => {
                const isSelected = currentChairs.some((c) => c.id === chair.id);
                return (
                  <div
                    key={chair.id}
                    className={`chair-item-container ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() =>
                      !isSelected &&
                      currentChairs.length < 5 &&
                      handleAddChair(chair)
                    }
                  >
                    <img
                      src={chair.src}
                      alt={`Chair ${chair.id}`}
                      className="chair-Item"
                    />
                  </div>
                );
              })}
            </div>
          ) : loading ? (
            <div className="loading">Loading...</div> // 👈 Replace with spinner if needed
          ) : (
            <div id="combinations">
              <div id="setCombinations">
                <h2 className="sectionTitle">For this set:</h2>
                <div className="comboContainer">
                  {setCombinations.map((combo, index) => (
                    <p
                      className="combo"
                      key={index}
                      onClick={() => {
                        setCurrentChairs(
                          combo.chairs.map(
                            (id) =>
                              ALL_CHAIRS.find(
                                (chair) => chair.id === id
                              ) as Chair
                          )
                        );
                        setAuthor(combo.author);
                        setCategory(combo.category);
                      }}
                    >
                      <b>{combo.category}</b> <br></br>by {combo.author}
                    </p>
                  ))}
                </div>
              </div>
              <div id="otherCombinations">
                <h2 className="sectionTitle">Others:</h2>
                <div className="comboContainer">
                  {otherCombinations.map((combo, index) => (
                    <p
                      className="combo"
                      key={index}
                      onClick={() => {
                        setCurrentChairs(
                          combo.chairs.map(
                            (id) =>
                              ALL_CHAIRS.find(
                                (chair) => chair.id === id
                              ) as Chair
                          )
                        );
                        setAuthor(combo.author);
                        setCategory(combo.category);
                      }}
                    >
                      <b>{combo.category}</b> <br></br>by {combo.author}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomSortingGame;
