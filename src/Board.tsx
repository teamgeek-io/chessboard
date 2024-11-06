import { MeshProps } from "@react-three/fiber";

export default function Board() {
  return (
    <group rotation={[0, 0, 0]}>
      {Array.from(Array(8), (_e, row) =>
        Array.from(Array(8), (_e, col) => (
          <Square
            key={`${row}${col}`}
            color={(row + col) % 2 ? "black" : "white"}
            position={[row - 4, 0, col - 4]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        )),
      )}
    </group>
  );
}

interface SquareProps extends MeshProps {
  color: "white" | "black";
}

function Square({ color, ...props }: SquareProps) {
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
