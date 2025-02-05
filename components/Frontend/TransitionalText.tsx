// 'use client'
// import React from "react";
// import TextTransition, { presets } from "react-text-transition";

// const TEXTS = [
//   "Acupuncture",
//   "Medical Checkup",
//   "Physiotherapy",
//   "CAT Scan",
//   "Colonoscopy",
//   "Dietician",
// ];
// export default function TransitionalText({TEXTS}:{TEXTS:string[]}) {
//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(
//       () => setIndex((index) => index + 1),
//       3000 // every 3 seconds
//     );
//     return () => clearTimeout(intervalId);
//   }, []);

//   return (
//     <div className = "text-blue-600 xl:text-6xl">
//       <TextTransition springConfig={presets.wobbly}>
//         {TEXTS[index % TEXTS.length]}
//       </TextTransition>
//     </div>
//   );
// }
