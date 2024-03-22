import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Loginpage";
import { Homepage } from "./homepage";
import { EventForm } from "./EventForm";
import { Listpage } from "./EventListpage";
import { Read } from "./readpage";
import { EventUpdateForm } from "./EventUpdatepage";

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
                <Route path="listall" exact element={<Listpage />} />
                <Route path="readpage/:id" exact element={<Read />} />
                <Route path="updatepage/:myid" exact element={<EventUpdateForm />} />
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
