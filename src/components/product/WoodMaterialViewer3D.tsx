"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";

interface WoodMaterialViewerProps {
  diffuseMap: string;
  mapsImage?: string;
  woodName?: string;
}

function WoodSlab({ diffuseMap, roughness, yOffset }: { diffuseMap: string; roughness: number; yOffset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12 + yOffset * 2) * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, yOffset, 0]} castShadow receiveShadow>
      <boxGeometry args={[2.8, 0.12, 1.2]} />
      <meshStandardMaterial
        map={diffuseMap}
        roughness={roughness}
        metalness={0.04}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

function WoodSlabLoader({ diffuseMap }: { diffuseMap: string }) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(diffuseMap, (tex) => {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(2, 0.6);
      tex.needsUpdate = true;
      setTexture(tex);
    });
  }, [diffuseMap]);

  if (!texture) return null;

  const slabs = [
    { roughness: 0.68, yOffset: -0.36 },
    { roughness: 0.72, yOffset: -0.12 },
    { roughness: 0.76, yOffset: 0.12 },
    { roughness: 0.8, yOffset: 0.36 },
  ];

  return (
    <>
      {slabs.map((slab, i) => (
        <WoodSlab
          key={i}
          diffuseMap={texture}
          roughness={slab.roughness}
          yOffset={slab.yOffset}
        />
      ))}
    </>
  );
}

function Scene({ diffuseMap }: { diffuseMap: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <WoodSlabLoader diffuseMap={diffuseMap} />
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={30}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <directionalLight position={[-4, 4, -2]} intensity={0.35} />
      <pointLight position={[0, 6, 2]} intensity={0.3} />
    </>
  );
}

export default function WoodMaterialViewer3D({
  diffuseMap,
  woodName = "Natural Wood",
}: WoodMaterialViewerProps) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        shadows
        camera={{ position: [3.5, 1.5, 3.5], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Scene diffuseMap={diffuseMap} />
          <ContactShadows
            position={[0, -0.65, 0]}
            opacity={0.35}
            scale={6}
            blur={1.5}
            far={2}
            color="#1a1a1a"
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0F6B3A] animate-pulse" />
          <span className="text-white/80 text-[11px] font-medium tracking-wide">{woodName}</span>
        </div>
        <span className="text-white/25 text-[9px] tracking-widest uppercase">Drag to rotate</span>
      </div>
    </div>
  );
}
