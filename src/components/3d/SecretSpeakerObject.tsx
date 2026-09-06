import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SecretSpeakerObjectProps {
  isDecrypted: boolean;
  decryptStage: string;
  reducedMotion?: boolean;
}

export const SecretSpeakerObject: React.FC<SecretSpeakerObjectProps> = ({
  isDecrypted,
  decryptStage,
  reducedMotion = false,
}) => {
  const containerRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (reducedMotion) return;

    const speed = isDecrypted ? 2.5 : 1.0;

    if (containerRef.current) {
      containerRef.current.rotation.y += delta * 0.4 * speed;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.8 * speed;
      ringRef.current.rotation.z -= delta * 0.6 * speed;
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(Date.now() * 0.005 * speed) * 0.05;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <Float speed={reducedMotion ? 0 : 2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={containerRef} position={[0, 0, 0]}>
        
        {/* Outer Dark Glass Outer Cylinder Capsule */}
        <mesh>
          <cylinderGeometry args={[1.4, 1.4, 3.2, 32]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            transmission={0.8}
            opacity={0.85}
            transparent
            roughness={0.15}
            metalness={0.9}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Metallic Structural Frame Caps */}
        <mesh position={[0, 1.65, 0]}>
          <cylinderGeometry args={[1.5, 1.4, 0.3, 32]} />
          <meshStandardMaterial color="#B8C2C0" metalness={0.95} roughness={0.1} emissive="#447F98" emissiveIntensity={0.4} />
        </mesh>

        <mesh position={[0, -1.65, 0]}>
          <cylinderGeometry args={[1.4, 1.5, 0.3, 32]} />
          <meshStandardMaterial color="#B8C2C0" metalness={0.95} roughness={0.1} emissive="#447F98" emissiveIntensity={0.4} />
        </mesh>

        {/* Inner Glowing Holographic Core Capsule */}
        <mesh ref={coreRef}>
          <cylinderGeometry args={[0.9, 0.9, 2.4, 32]} />
          <meshStandardMaterial
            color="#629BB5"
            emissive="#629BB5"
            emissiveIntensity={isDecrypted ? 4.5 : 1.6}
            wireframe
          />
        </mesh>

        {/* Rotating Energy Ring around object */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.0, 0.05, 16, 64]} />
          <meshStandardMaterial
            color="#B9D8E1"
            emissive="#B9D8E1"
            emissiveIntensity={isDecrypted ? 5.0 : 2.0}
          />
        </mesh>

        {/* Front Holographic System Panel Overlay */}
        <Html
          position={[0, 0, 1.5]}
          center
          distanceFactor={6}
          transform
          occlude
        >
          <div className="w-64 p-4 rounded-xl bg-white/90 border border-[#629BB5]/60 backdrop-blur-md shadow-2xl text-center select-none font-mono">
            <div className="flex items-center justify-between text-[10px] text-[#447F98] border-b border-[#629BB5]/30 pb-1 mb-2">
              <span>SYS // INFO</span>
              <span className="w-2 h-2 rounded-full bg-[#629BB5] animate-ping" />
            </div>

            <div className="text-xs font-bold text-gray-600 tracking-wider mb-1">
              [ DETAILS ]
            </div>

            <div className="text-base font-extrabold text-[#3A6F86] tracking-widest uppercase mb-1">
              {isDecrypted ? 'REGISTRATION CONFIRMED' : decryptStage || 'IDENTITY SEALED'}
            </div>

            <div className="text-[10px] text-gray-500">
              STATUS: AVAILABLE <br />
              ABS // '26
            </div>
          </div>
        </Html>

      </group>
    </Float>
  );
};
