import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor='#1a1a1a' />
      <ambientLight intensity={0.8} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={0.8}
        intensity={2.5}
        castShadow
        shadow-mapSize={2048}
      />
      <spotLight
        position={[20, 50, 10]}
        angle={0.15}
        penumbra={0.8}
        intensity={1.8}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={2} position={[0, 15, 8]} />
      <pointLight intensity={3} position={[0, -5, -5]} />
      <directionalLight
        intensity={1.2}
        position={[10, 10, 5]}
        castShadow
        shadow-mapSize={2048}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : isTablet ? 1.05 : 1.6}
        position={isMobile ? [0, -3, -2.2] : isTablet ? [0, -3.2, -1.5] : [0, -2.9, -2.9]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add listeners for changes to the screen size
    const mediaQueryMobile = window.matchMedia("(max-width: 500px)");
    const mediaQueryTablet = window.matchMedia("(max-width: 1280px)");

    // Set the initial values
    setIsMobile(mediaQueryMobile.matches);
    setIsTablet(mediaQueryTablet.matches);

    // Define callback functions
    const handleMediaQueryMobileChange = (event) => setIsMobile(event.matches);
    const handleMediaQueryTabletChange = (event) => setIsTablet(event.matches);

    // Add listeners
    mediaQueryMobile.addEventListener("change", handleMediaQueryMobileChange);
    mediaQueryTablet.addEventListener("change", handleMediaQueryTabletChange);

    // Remove listeners when the component is unmounted
    return () => {
      mediaQueryMobile.removeEventListener("change", handleMediaQueryMobileChange);
      mediaQueryTablet.removeEventListener("change", handleMediaQueryTabletChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows={{ enabled: true, type: 'soft' }}
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        shadowMap: { enabled: true, type: 'PCFSoftShadowMap' }
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.8}
          enableRotate={true}
          autoRotate={false}
          target={[0, 0, 0]}
          makeDefault
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
