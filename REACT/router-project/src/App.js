import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import UserComponents from "./Components/UserComponents";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Contact' element={<Contact />}/>
      <Route path='Login' element={<Login />}/>
      <Route path="usercomponent/:id" element={<UserComponents/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
