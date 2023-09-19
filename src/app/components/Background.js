// //Background.js
// import { useState, useRef, useEffect } from "react";
// import NET from "vanta/dist/vanta.net.min";
// import * as THREE from "three";

// export default function Background({ width, height, children }) {
//   const [vantaEffect, setVantaEffect] = useState(0);

//   const vantaRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         NET({
//           THREE,
//           el: vantaRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           // color: "#5e4eae",
//           // // backgroundColor: "0x#090447",
//           color1: 0xabadcd,
//           color2: 0xded7d2,
//           // backgroundColor: 0x161515,
//           points: 4.0,
//           spacing: 13.0,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return <div ref={vantaRef}>{children}</div>;
// }
