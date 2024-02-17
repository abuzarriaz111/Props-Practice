// import { useState } from "react";
// const Box = ({ id, color }) => (
//     <div key={id} style={{ width: '100px', height: '100px', backgroundColor: color, margin: '5px' }}></div>
//   );

//   const BoxList = () => {
//     const initialBoxes = [
//       { id: 1, color: 'red' },
//       { id: 2, color: 'green' },
//       { id: 3, color: 'blue' },
//       // Add more boxes as needed
//     ];
//     const [boxes, setBoxes] = useState(initialBoxes);

//   const reverseBoxes = () => {
//     const reversedBoxes = [...boxes].reverse();
//     setBoxes(reversedBoxes);
//   };


//   return (
//     <div>
//       <button onClick={reverseBoxes}>Reverse Boxes</button>
//       <div style={{ display: 'flex', flexDirection: 'row' }}>
//         {boxes.map((box) => (
//           <Box key={box.id} {...box} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BoxList;