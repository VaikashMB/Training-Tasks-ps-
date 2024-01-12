import React from "react";
import ChildComponent from "./ChildComponent";
import { useRecoilState } from "recoil";
import { fontSizeState } from "../states/Atoms";
 
const ParentComponent = () => {
  const message1ToChild = "Hello1 from Parent!";
  const message2ToChild = "Hello2 from Parent!";
 
  const [counterFontSize, setCounterFontSize] = useRecoilState(fontSizeState);
 
  return (
    <>
      {/* <ChildComponent message1={message1ToChild} message2={message2ToChild} /> */}
      <div>
        <button
          onClick={() => setCounterFontSize((size) => size + 1)}
          style={{ fontSize: counterFontSize }}
        >Click Here</button>
      </div>
    </>
  );
};
 
export default ParentComponent;
 