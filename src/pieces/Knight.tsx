import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    knight?: THREE.Mesh;
  };
};

interface Props extends GroupProps {
  color: string;
}

export function Knight({ color, ...props }: Props) {
  const { nodes } = useGLTF("/knight.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.knight?.geometry} receiveShadow castShadow>
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/knight.glb");
