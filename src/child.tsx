import React from "react";

export const Child: React.FC= () => {
  console.log("Child");

  return (
    <>
      <p>Child component</p>
    </>
  );
};










/// useMemo
// import React from "react";

// export const Child: React.FC = () => {

//   console.log("Child");

//   return (
//     <>
//       <p>Child component</p>
//     </>
//   );
// };

/// useCallback
// import React from "react";

// interface Props {
//   flashMessage: (type: MessageType) => void;
// }

// type MessageType = "card" | "plan"

// export const Child: React.FC<Props> = React.memo(({ flashMessage }: Props) => {
//   console.log("Child");

//   return (
//     <>
//       <button onClick={() => flashMessage("card")}></button>
//       <button onClick={() => flashMessage("plan")}></button>
//       <p>Child component</p>
//     </>
//   );
// });

// memo
// import React from "react";

// export const Child: React.FC = React.memo(() => {

//   console.log("Child");

//   return (
//     <>
//       <p>Child component</p>
//     </>
//   );
// });
