import { Canvas } from "@react-three/fiber";
import Board from "./Board";
import { Pawn } from "./pieces/Pawn";
import { boardLocationToPosition } from "./utils";
import { Rook } from "./pieces/Rook";
import { Knight } from "./pieces/Knight";
import { Bishop } from "./pieces/Bishop";
import { Queen } from "./pieces/Queen";
import { King } from "./pieces/King";
import { CameraControls, SoftShadows } from "@react-three/drei";
import Piece from "./pieces/Piece";

function App() {
  return (
    <div className="flex h-dvh w-full bg-gray-100 overflow-hidden">
      <div className="h-full flex-1">
        <Canvas
          camera={{ fov: 65, near: 0.1, far: 1000, position: [5, 4, 5] }}
          shadows
        >
          <ambientLight intensity={Math.PI / 8} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, 4]}
            decay={0}
            intensity={Math.PI * 6}
          />

          <CameraControls />

          <directionalLight
            castShadow
            position={[4, 8, 9]}
            intensity={2.5}
            shadow-mapSize={1024}
          >
            <orthographicCamera
              attach="shadow-camera"
              args={[-10, 10, -10, 10, 0.1, 50]}
            />
          </directionalLight>

          {/* Black pieces */}
          <Piece position={boardLocationToPosition("a7")}>
            <Pawn color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("b7")}>
            <Pawn color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("c7")}>
            <Pawn color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("d7")}>
            <Pawn color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("e7")}>
            <Pawn color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("f7")}>
            <Pawn color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("g7")}>
            <Pawn color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("h7")}>
            <Pawn color="black" />
          </Piece>

          <Piece position={boardLocationToPosition("a8")}>
            <Rook color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("b8")}>
            <Knight color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("c8")}>
            <Bishop color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("d8")}>
            <King color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("e8")}>
            <Queen color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("f8")}>
            <Bishop color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("g8")}>
            <Knight color="black" />
          </Piece>
          <Piece position={boardLocationToPosition("h8")}>
            <Rook color="black" />
          </Piece>

          {/* White pieces */}
          <Piece position={boardLocationToPosition("a2")}>
            <Pawn color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("b2")}>
            <Pawn color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("c2")}>
            <Pawn color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("d2")}>
            <Pawn color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("e2")}>
            <Pawn color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("f2")}>
            <Pawn color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("g2")}>
            <Pawn color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("h2")}>
            <Pawn color="white" />
          </Piece>

          <Piece position={boardLocationToPosition("a1")}>
            <Rook color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("b1")}>
            <Knight color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("c1")}>
            <Bishop color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("d1")}>
            <King color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("e1")}>
            <Queen color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("f1")}>
            <Bishop color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("g1")}>
            <Knight color="white" />
          </Piece>
          <Piece position={boardLocationToPosition("h1")}>
            <Rook color="white" />
          </Piece>

          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.005, 0]}
            receiveShadow
          >
            <planeGeometry args={[9, 9]} />
            <shadowMaterial transparent opacity={0.4} />
          </mesh>

          <Board />

          <SoftShadows />
        </Canvas>
      </div>

    </div>
  );
}

export default App;
