import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} wireframe opacity={0.3} transparent />
      </mesh>
    </Float>
  );
};

export const FloatingShapes = () => {
  return (
    <div className="h-64 w-full relative -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingBox position={[-2, 0, 0]} color="#00d4ff" />
        <FloatingBox position={[2, 0, 0]} color="#a855f7" />
        <FloatingBox position={[0, 1.5, -1]} color="#10b981" />
      </Canvas>
    </div>
  );
};
