import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    rook?: THREE.Mesh;
  };
};

interface Props extends GroupProps {
  color: string;
}

export function Rook({ color, ...props }: Props) {
  const { nodes } = useGLTF("/rook.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rook?.geometry} receiveShadow castShadow>
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/rook.glb");
