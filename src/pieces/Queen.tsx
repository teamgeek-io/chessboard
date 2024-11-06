import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    queen?: THREE.Mesh;
  };
};

interface Props extends GroupProps {
  color: string;
}

export function Queen({ color, ...props }: Props) {
  const { nodes } = useGLTF("/queen.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.queen?.geometry} receiveShadow castShadow>
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/queen.glb");
