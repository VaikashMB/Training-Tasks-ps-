// import logo from './logo.svg';
// import './App.css';
// import ParentComponent from './components/ParentComponent';

// function App() {
//   return (
//    <ParentComponent/>
//   );
// }

// export default App;
import React from "react";
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";
import { RecoilRoot } from "recoil";
 
export const App = () => {
  return (
    <RecoilRoot>
      <ParentComponent />
    </RecoilRoot>
  );
};
 
export default App;