import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const BoxConmponent = () => {
  const ref : any = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  },0);

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxBufferGeometry args={isHovered ? [1.2, 1.2, 1.2] : [1, 1, 1]} />
      <meshLambertMaterial color={isHovered ? 0x44c2b5 : 0x9178e6} />
    </mesh>
  );
};

export const Box = () => {
    return(
        <Canvas dpr={2}>
        <color attach="background" args={[0xf5f3fd]} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[-10, 10, 10]} />
        <BoxConmponent />
        </Canvas>
    )   
}