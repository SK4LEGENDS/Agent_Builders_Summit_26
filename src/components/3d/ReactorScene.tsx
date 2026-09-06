import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface ReactorSceneProps {
  revealTriggered?: boolean;
  reducedMotion?: boolean;
}

export const ReactorScene: React.FC<ReactorSceneProps> = ({ revealTriggered = false, reducedMotion = false }) => {
  const outerRingRef = useRef<THREE.Group>(null);
  const midRingRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const fragmentsGroupRef = useRef<THREE.Group>(null);

  // Generate floating 3D particle coordinates
  const [particlePositions, particleColors] = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color('#629BB5');
    const color2 = new THREE.Color('#B9D8E1');
    const color3 = new THREE.Color('#447F98');

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? color1 : rand > 0.3 ? color2 : color3;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    return [positions, colors];
  }, []);

  // Generate metallic floating fragments
  const fragments = useMemo(() => {
    return Array.from({ length: 24 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 22,
      ] as [number, number, number],
      scale: Math.random() * 0.3 + 0.1,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
    }));
  }, []);


  useFrame((state, delta) => {
    if (reducedMotion) return;

    const speedMultiplier = revealTriggered ? 3.5 : 1.0;

    // Rotate reactor rings in opposite directions
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.2 * speedMultiplier;
      outerRingRef.current.rotation.x += delta * 0.1 * speedMultiplier;
    }

    if (midRingRef.current) {
      midRingRef.current.rotation.z -= delta * 0.3 * speedMultiplier;
      midRingRef.current.rotation.y += delta * 0.15 * speedMultiplier;
    }

    // Core pulsing scale & light pulse
    if (coreRef.current) {
      const pulseScale = 1 + Math.sin(state.clock.elapsedTime * (revealTriggered ? 6 : 2.5)) * 0.08;
      coreRef.current.scale.set(pulseScale, pulseScale, pulseScale);
    }

    // Rotate particle cloud slowly
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.03 * speedMultiplier;
    }

    // Rotate fragments group
    if (fragmentsGroupRef.current) {
      fragmentsGroupRef.current.rotation.y -= delta * 0.02 * speedMultiplier;
    }
  });

  return (
    <>
      {/* Fog for deep atmospheric depth */}
      <fogExp2 attach="fog" color="#D6EBF3" density={0.04} />

      {/* Dramatic Lighting */}
      <ambientLight intensity={0.2} color="#FFFFFF" />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#E8F0EE" />
      <pointLight position={[0, 0, 0]} intensity={revealTriggered ? 8 : 4} color="#629BB5" distance={15} />
      <pointLight position={[-5, 5, -5]} intensity={2.5} color="#B9D8E1" distance={20} />
      <spotLight position={[0, 15, 10]} angle={0.4} penumbra={1} intensity={3} color="#447F98" />

      {/* Central Floating Reactor / Portal Structure */}
      <Float speed={reducedMotion ? 0 : 2} rotationIntensity={0.5} floatIntensity={0.8}>
        <group position={[0, 0, 0]}>
          
          {/* Glowing Energy Core */}
          <mesh ref={coreRef}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial
              color="#629BB5"
              emissive="#447F98"
              emissiveIntensity={revealTriggered ? 4.0 : 1.8}
              roughness={0.1}
              metalness={0.9}
              wireframe={false}
            />
          </mesh>

          {/* Inner Energy Aura Sphere */}
          <mesh scale={[1.45, 1.45, 1.45]}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial
              color="#B9D8E1"
              transparent
              opacity={revealTriggered ? 0.45 : 0.25}
              wireframe
            />
          </mesh>

          {/* Middle Metallic Ring */}
          <group ref={midRingRef}>
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[2.5, 0.08, 16, 64]} />
              <meshStandardMaterial
                color="#B8C2C0"
                emissive="#B9D8E1"
                emissiveIntensity={revealTriggered ? 2.5 : 0.8}
                metalness={0.95}
                roughness={0.1}
              />
            </mesh>
          </group>

          {/* Outer Segmented Reactor Portal Ring */}
          <group ref={outerRingRef}>
            <mesh rotation={[0, Math.PI / 4, 0]}>
              <torusGeometry args={[3.8, 0.12, 16, 64]} />
              <meshStandardMaterial
                color="#FFFFFF"
                emissive="#629BB5"
                emissiveIntensity={revealTriggered ? 3.0 : 1.2}
                metalness={0.9}
                roughness={0.2}
              />
            </mesh>

            {/* Glowing Energy Nodes on Outer Ring */}
            {[0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].map((angle, idx) => (
              <mesh
                key={idx}
                position={[
                  Math.cos(angle) * 3.8,
                  Math.sin(angle) * 3.8,
                  0
                ]}
              >
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial
                  color="#629BB5"
                  emissive="#629BB5"
                  emissiveIntensity={3}
                />
              </mesh>
            ))}
          </group>

        </group>
      </Float>

      {/* Floating Particles Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Floating Metallic Fragments */}
      <group ref={fragmentsGroupRef}>
        {fragments.map((frag, idx) => (
          <mesh key={idx} position={frag.position} scale={frag.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#B8C2C0"
              emissive="#447F98"
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.15}
            />
          </mesh>
        ))}
      </group>
    </>
  );
};
