import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    pawn?: THREE.Mesh;
  };
};

interface Props extends GroupProps {
  color: string;
}

export function Pawn({ color, ...props }: Props) {
  const { nodes } = useGLTF("/pawn.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pawn?.geometry} receiveShadow castShadow>
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/pawn.glb");
