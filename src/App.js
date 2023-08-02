import "./styles.css";
import React, { useState, useRef } from "react";
import {
  ForceGraph2D,
  ForceGraph3D,
  ForceGraphVR,
  ForceGraphAR
} from "react-force-graph";

function genRandomTree(N = 80, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i, group: i % 5 })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
      }))
  };
}

function genRandomTree2(a, b, reverse = false) {
  return {
    nodes: [...Array(a.length).keys()].map((i) => ({
      id: i,

      group: b[i]
    })),
    links: [...Array(a.length).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: 0,
        [reverse ? "source" : "target"]: id
      }))
  };
}

export default function App() {
  const { useRef } = React;

  const data = genRandomTree();
  console.log(data);
  const color = "dark";

  const valueid = [158];

  const valuename = "AT3G07780";
  const valueids = [
    599,
    871,
    244,
    169,
    2499,
    784,
    800,
    355,
    2256,
    994,
    1632,
    1833,
    462,
    484,
    1605,
    827,
    2412,
    2185,
    2117,
    1480,
    2336,
    1038,
    267,
    2367,
    1427,
    2602,
    1863
  ];
  const sumvalue = valueid.concat(valueids);
  const group1 = [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ];
  console.log(group1.length);
  const data2 = genRandomTree2(sumvalue, group1);
  console.log(sumvalue);
  console.log([...Array(5).keys()]);
  const distance = 1400;

  const CameraOrbit = () => {
    const fgRef = useRef();

    return (
      <ForceGraph3D
        ref={fgRef}
        graphData={data2}
        nodeAutoColorBy="group"
        linkDirectionalParticleColor={() => "red"}
        linkDirectionalParticleWidth={6}
        linkHoverPrecision={10}
        onNodeDragEnd={(node) => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        }}
        onLinkClick={(link) => fgRef.current.emitParticle(link)}
      />
    );
  };

  return (
    <div className="App">
      <CameraOrbit />
    </div>
  );
}
