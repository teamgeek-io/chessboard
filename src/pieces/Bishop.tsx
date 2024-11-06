import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    bishop?: THREE.Mesh;
  };
};

interface Props extends GroupProps {
  color: string;
}

export function Bishop({ color, ...props }: Props) {
  const { nodes } = useGLTF("/bishop.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.bishop?.geometry} receiveShadow castShadow>
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/bishop.glb");
