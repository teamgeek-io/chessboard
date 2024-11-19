import { useState } from "react";

export default function Piece({
  children,
  position,
}: {
  children: React.ReactNode;
  position: [number, number, number];
}) {
  const [hovering, setHovering] = useState(false);

  const currentPosition = hovering
    ? ([0, 0 + 0.3, 0] as const)
    : ([0, 0, 0] as const);
  const currentRotation = hovering
    ? ([0, 0, Math.PI * 0.1] as const)
    : ([0, 0, 0] as const);

  return (
    <group
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      position={position}
    >
      <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <group position={currentPosition} rotation={[...currentRotation]}>
        {children}
      </group>
    </group>
  );
}
