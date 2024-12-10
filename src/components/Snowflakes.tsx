import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Snowflakes: React.FC = () => {
  const particles = useRef<any>([]);

  useFrame(() => {
    particles.current.forEach((particle: any) => {
      particle.position.y -= 0.02;
      if (particle.position.y < -5) particle.position.y = 5;
      particle.rotation.x += 0.01;
      particle.rotation.y += 0.01;
    });
  });

  return (
    <>
      {Array.from({ length: 150 }).map((_, i) => (
        <mesh
          key={i}
          ref={(ref) => (particles.current[i] = ref)}
          position={[
            (Math.random() - 0.5) * 20,
            Math.random() * 10,
            (Math.random() - 0.5) * 20,
          ]}
        >
          <icosahedronGeometry args={[0.1, 0]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </>
  );
};

export default Snowflakes;
