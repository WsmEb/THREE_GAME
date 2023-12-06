import { useRef } from "react";
import { useSelector } from "react-redux";
import { useFrame } from "react-three-fiber";
import gsap from "gsap";
const MyPoint = () => {

  const ThreeStore = useSelector((three) => three.Three)
  const pointRef = useRef()
  const timeline = gsap.timeline({paused:true})
  useFrame(() => {
    if(pointRef.current) {
      pointRef.current.rotation.x += 0.05
      timeline.to(pointRef.current.position,{
        y:0.1,
        delay:2,
        duration:2,
      })
      timeline.to(pointRef.current.position,{
        y:0.2,
        delay:2,
        duration:2,
      })


      timeline.play()
    }
  })

  return ( 
    <>
        <mesh ref={pointRef}    position={[0.1,0.1,0.1]} castShadow >
        <sphereGeometry args={[0.047,0.047,0.04]} />
        <meshPhongMaterial    />
      </mesh>
    </>
   );
}
 
export default MyPoint;