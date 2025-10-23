import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const AnimatedGrid = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const size = 20;
  const divisions = 20;
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const position = meshRef.current.geometry.attributes.position;
      
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const wave = Math.sin(x + time) * Math.cos(y + time) * 0.3;
        position.setZ(i, wave);
      }
      
      position.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry args={[size, size, divisions, divisions]} />
      <meshStandardMaterial
        color="#00d4ff"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

export const WaveGrid = () => {
  return (
    <div className="h-64 w-full relative -z-10">
      <Canvas camera={{ position: [0, 5, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedGrid />
      </Canvas>
    </div>
  );
};
