"use client";

import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

const ThreeJS = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ThreeJS;
