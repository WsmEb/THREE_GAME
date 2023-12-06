import { Canvas} from "@react-three/fiber";
import Plane from "./Plane";
import Sphere from "./Sphere";
// import { OrbitControls } from "@react-three/drei";

import Envirements from "./Envirements";
const ParentR3F = () => {
  
  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        shadows
        camera={{ position: [0, 0.5, 3] }}
      >
        <Envirements />
        <Plane />
        <Sphere />
        <pointLight args={["cyan", 1, 10]} position={[0, 2, 2]} castShadow />
        <color attach={"background"} args={["black"]} />
        {/* <OrbitControls enableDamping /> */}
      </Canvas>
    </>
  );
};

export default ParentR3F;
