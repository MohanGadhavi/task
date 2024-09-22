import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Login } from "./Components/Login.jsx";
import Admin from "./Components/Admin.jsx";
import { DataForm } from "./Components/DataForm.jsx";
import Navbar from "./Components/Navbar.jsx";
import { Form } from "./Components/Form.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex mt-10 px-10">
        <Routes>
          {/* <Switch> */}
          <Route exact path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/datafeeder" element={<DataForm />} />
          <Route path="/registration" element={<Form />} />
          {/* {isLogin === false ? (
          <div className="flex justify-center mt-10">
            <Login setIsLogin={setIsLogin} isLogin={isLogin} />
          </div>
        ) : (
          <div className="md:w-[50%]">
            <DataForm />
          </div>
        )} */}
          {/* <Admin /> */}
          {/* </Switch> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
