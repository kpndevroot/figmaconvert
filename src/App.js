// import logo from "./logo.svg";
import "./App.css";
import Login from "./componets/Login";
import SignUp from "./componets/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tost from "./Tost";
import Website from "./componets/website/Website";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="sign" element={<SignUp />} />
          <Route path="t" element={<Tost />} />
          <Route path="w" element={<Website />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
