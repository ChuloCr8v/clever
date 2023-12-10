import React, { useEffect } from "react";
import Particles from "react-particles";
import type { Engine } from "@tsparticles/engine";
import { loadFirePreset } from "@tsparticles/preset-fire";

interface IProps {
  // Add your prop types here if needed
}

const ParticlesContainer: React.FC<IProps> = () => {
  useEffect(() => {
    const customInit = async (engine: Engine): Promise<void> => {
      await loadFirePreset(engine);
    };

    // Call the customInit function here if needed
    // For example:
    // customInit(someEngine);

    return () => {
      // Clean up or perform any necessary actions on component unmount
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const options = {
    preset: "fire",
  };

  return <Particles options={options} />;
};

export default ParticlesContainer;
