

const Plane = () => {
  return ( 
  <>
  <mesh rotation={[-190,0,0]} receiveShadow >
    <planeGeometry args={[10,10]} />
    <meshPhongMaterial color={"white"}  />
  </mesh>
  </> );
}
 
export default Plane;