import React, { useEffect, useState } from "react";
import "./Memory.css";
import Bruno from "../../assets/BrunoMunari/face2.jpg";
import { Link, useLocation } from "react-router-dom";
import Button from "../../Button/Button";
interface Face {
  id: number;
  src: string;
}

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
import face69 from "../../assets/faces/face56.svg";
import face70 from "../../assets/faces/face57.svg";
import face71 from "../../assets/faces/face58.svg";
import face72 from "../../assets/faces/face59.svg";
import face73 from "../../assets/faces/face60.svg";

const Faces: Face[] = [
  { id: 1, src: face01 },
  { id: 2, src: face02 },
  { id: 3, src: face03 },
  { id: 4, src: face04 },
  { id: 5, src: face05 },
  { id: 6, src: face06 },
  { id: 7, src: face07 },
  { id: 8, src: face08 },
  { id: 9, src: face09 },
  { id: 10, src: face10 },
  { id: 11, src: face11 },
  { id: 12, src: face12 },
  { id: 13, src: face13 },
  { id: 14, src: face14 },
  { id: 15, src: face15 },
  { id: 16, src: face16 },
  { id: 17, src: face17 },
  { id: 18, src: face18 },
  { id: 19, src: face19 },
  { id: 20, src: face20 },
  { id: 21, src: face21 },
  { id: 22, src: face22 },
  { id: 23, src: face23 },
  { id: 24, src: face24 },
  { id: 25, src: face25 },
  { id: 26, src: face26 },
  { id: 27, src: face27 },
  { id: 28, src: face28 },
  { id: 29, src: face29 },
  { id: 30, src: face30 },
  { id: 31, src: face31 },
  { id: 32, src: face32 },
  { id: 33, src: face33 },
  { id: 34, src: face34 },
  { id: 35, src: face35 },
  { id: 36, src: face36 },
  { id: 37, src: face37 },
  { id: 38, src: face38 },
  { id: 39, src: face39 },
  { id: 40, src: face40 },
  { id: 41, src: face41 },
  { id: 42, src: face42 },
  { id: 43, src: face43 },
  { id: 44, src: face44 },
  { id: 45, src: face45 },
  { id: 46, src: face46 },
  { id: 47, src: face47 },
  { id: 48, src: face48 },
  { id: 49, src: face49 },
  { id: 50, src: face50 },
  { id: 51, src: face51 },
  { id: 52, src: face52 },
  { id: 53, src: face53 },
  { id: 54, src: face54 },
  { id: 55, src: face55 },
  { id: 56, src: face56 },
  { id: 57, src: face57 },
  { id: 58, src: face58 },
  { id: 59, src: face59 },
  { id: 60, src: face60 },
  { id: 61, src: face61 },
  { id: 62, src: face62 },
  { id: 63, src: face63 },
  { id: 64, src: face64 },
  { id: 65, src: face65 },
  { id: 66, src: face66 },
  { id: 67, src: face67 },
  { id: 68, src: face68 },
  { id: 69, src: face69 },
  { id: 70, src: face70 },
  { id: 71, src: face71 },
  { id: 72, src: face72 },
  { id: 73, src: face73 },
];

const MemoryGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentFace, setCurrentFace] = useState(
    Math.floor(Math.random() * Faces.length) + 1
  );
  const [facesSeen, setFacesSeen] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const check = (a: number) => {
    const condition =
      a === 0
        ? facesSeen.includes(currentFace)
        : !facesSeen.includes(currentFace);
    let newLives = lives;

    if (condition) {
      newLives = lives - 1;
      setLives(newLives);
    } else {
      setScore(score + 1);
    }
    if (!facesSeen.includes(currentFace)) {
      setFacesSeen([...facesSeen, currentFace]);
    }
    setCurrentFace(Math.floor(Math.random() * Faces.length) + 1);
  };

  useEffect(() => {
    if (lives <= 0) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 2600);
    }
  }, [lives]);

  const initializeGame = () => {
    setScore(0);
    setLives(3);
    setFacesSeen([]);
    setTimeout(() => {
      setIsGameOver(false);
    }, 2600);
  };

  return (
    <div className={`${isGameOver? "t2":"t1"} memoryContainer ${lives <= 0 ? "over" : ""}`}>

<div className="back">
  <Link to="/">
  <svg width="380" height="521" viewBox="0 0 380 521" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M265.476 483.612C260.979 499.198 257.748 510.476 254.898 520.359C217.968 522.577 3.79931 301.14 -0.000678811 256.219C41.2993 165.173 167.292 67.9194 239.125 -0.000551825C250.97 9.37646 260.219 16.6624 267.82 22.6814C261.929 127.666 82.6003 164.793 80.1303 268.194C148.289 337.127 207.262 405.871 265.413 483.612L265.476 483.612Z" fill="black"/>
<path d="M373.163 62.3454C374.81 71.2164 377.027 82.6834 379.117 93.7074C333.889 160.487 251.224 185.64 210.493 255.017C243.623 332.504 384.882 397.89 352.829 490.139C305.384 500.974 156.587 284.352 134.733 250.012C154.623 207.182 320.143 36.3054 373.163 62.2824L373.163 62.3454Z" fill="black"/>
</svg>

</Link>

</div>

      <p id="counters" className={isGameOver? "t2":"t1"}>
        Lives: {lives} | Score: {score}
      </p>


      <div id="currentFace" className={isGameOver? "t2":"t1"}>
        <img
          src={Faces.find((face) => face.id === currentFace)?.src}
          draggable="false"
        />
        <div id="hidden" className={isGameOver? "t2":"t1"}>
          <h2>Final Score: {score}</h2>
    
          <Button action={initializeGame} label="Play Again"  />
        </div>
      </div>


      <div className={`buttons ${isGameOver? "t2":"t1"}`}>
   

        <Button action={() => check(1)} isdisabled={lives <= 0 ? true : false} label="Seen"/>
        <Button action={() => check(0)} isdisabled={lives <= 0 ? true : false} label="New"/>
      </div>


      <img src={Bruno} className="Author" />
      <p id="text" className={isGameOver ? "t1" : "t2"}>
        Many of our activities today are conditioned by signs and symbols,
        though so far these are only used for visual communication and
        information. Each sign and each symbol has an exact meaning that is
        recognized the world over: everyone everywhere knows what to do when
        faced by a certain roadsign. We are already conditioned to doing what
        these signs tell us to do, and know that we cannot ignore them without
        being punished. Our movements on the roads are rigorously controlled: we
        are told how fast we may go, in which direction, whether we take
        precedence or must wait for others, what lane to drive in and when we
        may or must stop. <br/>In this case no one may do as he wants to. Each of us
        is part of the larger organism of human society, and just as in our
        bodies each small organ must live in harmony with the others, so when we
        move from place to place we must do it in harmony with others. To
        neglect the rules is dangerous, because it fouls up the whole organism.
      </p>
    </div>
  );
};

export default MemoryGame;
