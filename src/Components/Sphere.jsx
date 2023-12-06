import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MyPoint from "./MyPoint";
import { useDispatch, useSelector } from "react-redux";
import { ClonePosition } from "../rtk/Slices/ThreeSlice";

const Sphere = () => {
  const sphere = useRef();
  const [key, setKey] = useState({
    up: 0.5,
    left: 0,
    right: 0,
    down: 0,
  });

  const dispatch = useDispatch()
  

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.keyCode === 38) {
        setKey({ ...key, up: key.up - 0.5 });
      } else if (e.keyCode === 40) {
        setKey({ ...key, up: key.up + 0.5 });
      } else if (e.keyCode === 37) {
        setKey({ ...key, left: key.left - 0.5 });
      } else if (e.keyCode === 39) {
        setKey({ ...key, left: key.left + 0.5 });
      }
    };

    dispatch(ClonePosition(key))

    if (sphere.current) {
      const timeline = gsap.timeline({ paused: true });

      timeline.to(sphere.current.position, {
        x: key.left,
      });
      timeline.to(sphere.current.position, {
        z: key.up,
      });
      // timeline.to(sphere.current.position,{
      //   z : key.left - 0.5,
      // })
      timeline.play();
    }
  }, [key]);

  return (
    <>
      <mesh ref={sphere} castShadow position={[0, 0.3, -2]}>
        <sphereGeometry args={[0.1, 1, 0.1]} />
        <meshBasicMaterial color={"white"} />
        <pointLight args={["cyan", 1, 5]} castShadow receiveShadow />
        <MyPoint />
      </mesh>
    </>
  );
};

export default Sphere;
