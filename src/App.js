import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Loginpage";
import { Homepage } from "./homepage";

function App() {
  return (
    <>
      {
        (sessionStorage.getItem("auth")) ?
          <>
            <BrowserRouter>
              <Homepage />
              <Routes>
              </Routes>
            </BrowserRouter>
          </>

          :

          <>
            <Login />
          </>
      }
    </>
  );
}

export default App;
