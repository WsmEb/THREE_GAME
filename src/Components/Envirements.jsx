import { Environment } from "@react-three/drei";
import * as THREE from "three"
const Envirements = () => {
  return ( 
    <>
    <Environment background >
      <mesh>
        <sphereGeometry args={[50,100,100]} />
        <meshBasicMaterial color={"#0F0F0F"} side={THREE.BackSide} />
      </mesh>
    </Environment>
    </>
   );
}
 
export default Envirements;