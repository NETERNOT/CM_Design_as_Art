import React, { useCallback, useEffect, useState } from "react";
import BrunoSigns from "../../assets/BrunoMunari/face3.jpg";
import Button from "../../Button/Button";

import ReactFlow, {
  Node,
  Edge,
  Connection,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import "./Signs.css";

import Signal01 from "../../assets/signals/signal01.svg";
import Signal02 from "../../assets/signals/signal02.svg";
import Signal03 from "../../assets/signals/signal03.svg";
import Signal04 from "../../assets/signals/signal04.svg";
import Signal05 from "../../assets/signals/signal05.svg";
import Signal06 from "../../assets/signals/signal06.svg";
import Signal07 from "../../assets/signals/signal07.svg";
import Signal08 from "../../assets/signals/signal08.svg";
import Signal09 from "../../assets/signals/signal09.svg";
import Signal10 from "../../assets/signals/signal10.svg";
import Signal11 from "../../assets/signals/signal11.svg";
import Signal12 from "../../assets/signals/signal12.svg";
import Signal13 from "../../assets/signals/signal13.svg";
import Signal14 from "../../assets/signals/signal14.svg";
import Signal15 from "../../assets/signals/signal15.svg";
import Signal16 from "../../assets/signals/signal16.svg";
import Signal17 from "../../assets/signals/signal17.svg";
import Signal18 from "../../assets/signals/signal18.svg";
import Signal19 from "../../assets/signals/signal19.svg";
import Signal20 from "../../assets/signals/signal20.svg";
import Signal21 from "../../assets/signals/signal21.svg";
import Signal22 from "../../assets/signals/signal22.svg";
import Signal23 from "../../assets/signals/signal23.svg";
import Signal24 from "../../assets/signals/signal24.svg";
import Signal25 from "../../assets/signals/signal25.svg";
import Signal26 from "../../assets/signals/signal26.svg";
import Signal27 from "../../assets/signals/signal27.svg";
import Signal28 from "../../assets/signals/signal28.svg";
import Signal29 from "../../assets/signals/signal29.svg";
import Signal30 from "../../assets/signals/signal30.svg";
import Signal31 from "../../assets/signals/signal31.svg";
import Signal32 from "../../assets/signals/signal32.svg";
import Signal33 from "../../assets/signals/signal33.svg";
import Signal34 from "../../assets/signals/signal34.svg";
import Signal35 from "../../assets/signals/signal35.svg";
import Signal36 from "../../assets/signals/signal36.svg";
import Signal37 from "../../assets/signals/signal37.svg";
import Signal38 from "../../assets/signals/signal38.svg";
import Signal39 from "../../assets/signals/signal39.svg";
import Signal40 from "../../assets/signals/signal40.svg";

const ALL_SIGNALS = [
  { id: "1", src: Signal01, text: "Precedence" },
  { id: "2", src: Signal02, text: "Sleepy Town" },
  { id: "3", src: Signal03, text: "Two-pin Socket" },
  { id: "4", src: Signal04, text: "It’s Fine Here" },
  { id: "5", src: Signal05, text: "Switch" },
  { id: "6", src: Signal06, text: "Parking" },
  { id: "7", src: Signal07, text: "Wait Here" },
  { id: "8", src: Signal08, text: "Road Narrows" },
  { id: "9", src: Signal09, text: "Drinking Water" },
  { id: "10", src: Signal10, text: "Fuse" },
  { id: "11", src: Signal11, text: "Hostility" },
  { id: "12", src: Signal12, text: "End of Runway" },
  { id: "13", src: Signal13, text: "Tell a Tear-jerking Tale" },
  { id: "14", src: Signal14, text: "Sun Halo" },
  { id: "15", src: Signal15, text: "Circuit Breaker" },
  { id: "16", src: Signal16, text: "Fierce Dog" },
  { id: "17", src: Signal17, text: "Moon Halo" },
  { id: "18", src: Signal18, text: "Rainbow" },
  { id: "19", src: Signal19, text: "Electronic Tube Directly Beated" },
  { id: "20", src: Signal20, text: "Man" },
  { id: "21", src: Signal21, text: "Cloudy Sky" },
  { id: "22", src: Signal22, text: "Go Slow" },
  { id: "23", src: Signal23, text: "Rain" },
  { id: "24", src: Signal24, text: "Storm" },
  { id: "25", src: Signal25, text: "Damp Town" },
  { id: "26", src: Signal26, text: "Woman" },
  { id: "27", src: Signal27, text: "Give Way to Buses" },
  { id: "28", src: Signal28, text: "Two-Pin Plug" },
  { id: "29", src: Signal29, text: "Electric Bulb" },
  { id: "30", src: Signal30, text: "Obstacle" },
  { id: "31", src: Signal31, text: "Mirage" },
  { id: "32", src: Signal32, text: "Bail" },
  { id: "33", src: Signal33, text: "No U-Turn" },
  { id: "34", src: Signal34, text: "Armed Man" },
  { id: "35", src: Signal35, text: "Frost" },
  { id: "36", src: Signal36, text: "Dew" },
  { id: "37", src: Signal37, text: "End of Precedence" },
  { id: "38", src: Signal38, text: "Caution" },
  { id: "39", src: Signal39, text: "Alarm" },
  { id: "40", src: Signal40, text: "Danger" },
];

const getRandomSignals = (count = 5) => {
  const shuffled = [...ALL_SIGNALS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const nodeStyle = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  border: "2px solid #555",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
};

const createNodes = (signals: typeof ALL_SIGNALS) => {
  const spacing = 200;

  const imageNodes = signals.map((signal, index) => ({
    id: `img-${signal.id}`,
    type: "default",
    position: { x: index * spacing, y: 0 },
    data: {
      label: <img src={signal.src} alt={signal.text} width={80} />,
    },
    style: nodeStyle,
    targetPosition: "bottom",
    sourcePosition: "bottom",
  }));

  const shuffledTextSignals = [...signals].sort(() => 0.5 - Math.random());

  const textNodes = shuffledTextSignals.map((signal, index) => ({
    id: `txt-${signal.id}`,
    type: "default",
    position: { x: index * spacing, y: 250 },
    data: {
      label: <strong>{signal.text}</strong>,
    },
    style: nodeStyle,
    sourcePosition: "top",
    targetPosition: "top",
  }));

  return [...imageNodes, ...textNodes];
};

export const Signs: React.FC = () => {
  const [correctConnections, setCorrectConnections] = useState(0);
  const [signals, setSignals] = useState(() => getRandomSignals());
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodesState, setNodes, onNodesChange] = useNodesState(() =>
    createNodes(signals)
  );

  const initializeGame = () => {
    const newSignals = getRandomSignals();
    setSignals(newSignals);
    setEdges([]);
    setCorrectConnections(0);
    const newNodes = createNodes(newSignals);
    setNodes(newNodes);
  };

  const isValidConnection = (connection: Connection) => {
    if (!connection.source || !connection.target) return false;
    const sourceUsed = edges.some((e) => e.source === connection.source);
    const targetUsed = edges.some((e) => e.target === connection.target);

    const isValid =
      connection.source.startsWith("img-") &&
      connection.target.startsWith("txt-");
    return isValid && !sourceUsed && !targetUsed;
  };

  const onConnect = useCallback(
    (params: Connection) => {
      if (!isValidConnection(params)) return;

      const edge: Edge = {
        ...params,
        id: `${params.source}-${params.target}`,
        type: "default",
        animated: false,
        style: { stroke: "black", strokeWidth: 5 },
        reconnectable: true,
      };

      setEdges((eds) => addEdge(edge, eds));
    },
    [edges]
  );

  const onEdgeClick = (_: React.MouseEvent, edge: Edge) => {
    setEdges((eds) => eds.filter((e) => e.id !== edge.id));
  };

  useEffect(() => {
    const correct = edges.filter((e) => {
      const fromId = e.source?.split("-")[1];
      const toId = e.target?.split("-")[1];
      return fromId === toId;
    }).length;

    setCorrectConnections(correct);
  }, [edges]);

  return (
    <div
      className={`signsContainer ${
        correctConnections === 5 ? "completed" : ""
      }`}
    >
      <ReactFlow
        className={`game `}
        nodes={nodesState}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgeClick={onEdgeClick}
        fitView
        panOnDrag={false}
        panOnScroll={false}
        edgeUpdaterRadius={0}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
      ></ReactFlow>

      {edges.length >= 5 &&
        (correctConnections === 5 ? (
          <div
            className="completedMessage"
            style={{
              position: "absolute",
              top: "90%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              marginTop: 20,
              background: "lightgreen",
              padding: 20,
              textAlign: "center",
            }}
          >
            🎉 All connections are correct!
          </div>
        ) : (
          <div
            style={{
              position: "absolute",
              top: "90%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              marginTop: 20,
              background: "lightgray",
              padding: 20,
              textAlign: "center",
            }}
          >
            Somethings wrong, try again!
          </div>
        ))}

      <img id="signsAuthor" src={BrunoSigns} />
      <div id="signsHidden">
      <Button action={initializeGame} label="Play Again"/>
        <p>
          Many of our activities today are conditioned by signs and symbols,
          though so far these are only used for visual communication and
          information. Each sign and each symbol has an exact meaning that is
          recognized the world over: everyone everywhere knows what to do when
          faced by a certain roadsign. We are already conditioned to doing what
          these signs tell us to do, and know that we cannot ignore them without
          being punished. Our movements on the roads are rigorously controlled:
          we are told how fast we may go, in which direction, whether we take
          precedence or must wait for others, what lane to drive in and when we
          may or must stop. <br />
          In this case no one may do as he wants to. Each of us is part of the
          larger organism of human society, and just as in our bodies each small
          organ must live in harmony with the others, so when we move from place
          to place we must do it in harmony with others. To neglect the rules is
          dangerous, because it fouls up the whole organism.
        </p>
      </div>
    </div>
  );
};

export default Signs;
