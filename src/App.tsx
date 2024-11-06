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
          <Pawn position={boardLocationToPosition("a7")} color="black" />
          <Pawn position={boardLocationToPosition("b7")} color="black" />
          <Pawn position={boardLocationToPosition("c7")} color="black" />
          <Pawn position={boardLocationToPosition("d7")} color="black" />
          <Pawn position={boardLocationToPosition("e7")} color="black" />
          <Pawn position={boardLocationToPosition("f7")} color="black" />
          <Pawn position={boardLocationToPosition("g7")} color="black" />
          <Pawn position={boardLocationToPosition("h7")} color="black" />

          <Rook position={boardLocationToPosition("a8")} color="black" />
          <Knight position={boardLocationToPosition("b8")} color="black" />
          <Bishop position={boardLocationToPosition("c8")} color="black" />
          <King position={boardLocationToPosition("d8")} color="black" />
          <Queen position={boardLocationToPosition("e8")} color="black" />
          <Bishop position={boardLocationToPosition("f8")} color="black" />
          <Knight position={boardLocationToPosition("g8")} color="black" />
          <Rook position={boardLocationToPosition("h8")} color="black" />

          {/* White pieces */}
          <Pawn position={boardLocationToPosition("a2")} color="white" />
          <Pawn position={boardLocationToPosition("b2")} color="white" />
          <Pawn position={boardLocationToPosition("c2")} color="white" />
          <Pawn position={boardLocationToPosition("d2")} color="white" />
          <Pawn position={boardLocationToPosition("e2")} color="white" />
          <Pawn position={boardLocationToPosition("f2")} color="white" />
          <Pawn position={boardLocationToPosition("g2")} color="white" />
          <Pawn position={boardLocationToPosition("h2")} color="white" />

          <Rook position={boardLocationToPosition("a1")} color="white" />
          <Knight position={boardLocationToPosition("b1")} color="white" />
          <Bishop position={boardLocationToPosition("c1")} color="white" />
          <King position={boardLocationToPosition("d1")} color="white" />
          <Queen position={boardLocationToPosition("e1")} color="white" />
          <Bishop position={boardLocationToPosition("f1")} color="white" />
          <Knight position={boardLocationToPosition("g1")} color="white" />
          <Rook position={boardLocationToPosition("h1")} color="white" />

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

      <div className="w-[300px] p-4 rounded-l-lg bg-white shadow-black">
        <h1>Hello!</h1>
      </div>
    </div>
  );
}

export default App;
