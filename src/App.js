import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Loginpage";
import { Homepage } from "./homepage";
import { EventForm } from "./EventForm";

function App() {
  return (
    <>
      {
        (sessionStorage.getItem("auth")) ?
          <>
            <BrowserRouter>
              <Homepage />
              <Routes>
                <Route path="registerpage" exact element={<EventForm />} />
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
