import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    king?: THREE.Mesh;
  };
};

interface Props extends GroupProps {
  color: string;
}

export function King({ color, ...props }: Props) {
  const { nodes } = useGLTF("/king.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.king?.geometry} receiveShadow castShadow>
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/king.glb");
