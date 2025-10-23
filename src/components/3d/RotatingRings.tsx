import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Ring = ({ radius, color, speed }: { radius: number; color: string; speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[radius, 0.05, 16, 100]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.4} />
    </mesh>
  );
};

export const RotatingRings = () => {
  return (
    <div className="h-64 w-full relative -z-10">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Ring radius={1.2} color="#00d4ff" speed={0.003} />
        <Ring radius={1.5} color="#a855f7" speed={-0.002} />
        <Ring radius={1.8} color="#10b981" speed={0.004} />
      </Canvas>
    </div>
  );
};
