"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Float,
} from "@react-three/drei";
import { Group } from "three";

interface FloatProps {
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
}

interface Model3DProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotationSpeed?: number;
  floatProps?: FloatProps;
}

interface ThreeDViewerProps extends Model3DProps {}

/* ------------------------------ */
/* Reusable 3D Model Component */
/* ------------------------------ */

function Model3D({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotationSpeed = 0.002,
  floatProps = {},
}: Model3DProps) {
  const modelRef = useRef<Group | null>(null);

  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y += rotationSpeed;
  });

  return (
    <Float
      speed={floatProps.speed ?? 2}
      rotationIntensity={floatProps.rotationIntensity ?? 0.15}
      floatIntensity={floatProps.floatIntensity ?? 0.3}
    >
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
        position={position}
      />
    </Float>
  );
}

/* ------------------------------ */
/* Reusable Viewer Component */
/* ------------------------------ */

export default function ThreeDViewer({
  modelPath,
  scale,
  position,
  rotationSpeed,
  floatProps,
}: ThreeDViewerProps) {
  return (
    <div
      className="
        relative w-full overflow-hidden
        h-[400px]
        sm:h-[420px]
        md:h-[520px]
        lg:h-[650px]
        cursor-grab active:cursor-grabbing
      "
    >
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0, 4.8], fov: 40 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.1} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2.5}
            castShadow
          />

          <directionalLight
            position={[-4, 2, 2]}
            intensity={1.4}
          />

          <spotLight
            position={[0, 6, 4]}
            intensity={2}
            angle={0.45}
            penumbra={1}
          />

          <Environment preset="studio" />

          <Model3D
            modelPath={modelPath}
            scale={scale}
            position={position}
            rotationSpeed={rotationSpeed}
            floatProps={floatProps}
          />

          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.8}
            rotateSpeed={0.8}
            enableDamping
            dampingFactor={0.08}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}