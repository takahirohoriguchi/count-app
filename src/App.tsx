import React, { useState } from "react";
import { Child } from "./child";

export const App: React.FC = () => {
  console.log("App");

  const [count, setCount] = useState<number>(0);

  const countUp = (e: React.FormEvent) => {
    setCount(count + 1);
  };

  return (
    <>
      <p>App component</p>
      <button onClick={countUp}>count up {count}</button>
      <Child />
    </>
  );
};





/// useMemo
// import React, { useMemo, useState } from "react";
// import { Child } from "./child";

// export const App: React.FC = () => {
//   console.log("App");
//   const [count, setCount] = useState<number>(0);

//   const countUp = (e: React.FormEvent) => {
//     setCount(count + 1);
//   };

//   const CountText = useMemo(() => {
//     console.log("CountText");
//     return "こちらをクリックするとカウントされます"
//   },[]);

//   return (
//     <>
//       <p>App component</p>
//       {count}
//       {CountText}
//       <button onClick={countUp}></button>
//       <Child />
//     </>
//   );
// };




/// useCallback
// import React, { useCallback, useState } from "react";
// import { Child } from "./child";

// type MessageType = "card" | "plan"

// export const App: React.FC = () => {
//   console.log("App");

//   const [message, setMessage] = useState<string>("");

//   const flashMessage = useCallback((type: MessageType) => {
//     switch (type) {
//       case "card":
//         setMessage("カードに登録しました")
//         break
//       case "plan":
//         setMessage("プランに登録しました")
//         break
//     }
//   },[message]);

//   return (
//     <>
//       <p>App component</p>
//       {message}
//       <Child flashMessage={flashMessage}/>
//     </>
//   );
// };







/// memo
// import React, { useState } from "react";
// import { Child } from "./child";

// export const App: React.FC = () => {
//   console.log("App");
//   const [count, setCount] = useState<number>(0);

//   const countUp = (e: React.FormEvent) => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <p>App component</p>
//       <button onClick={countUp}></button>
//       <Child />
//     </>
//   );
// };
