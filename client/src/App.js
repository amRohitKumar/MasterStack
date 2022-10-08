import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

import { ProtectedRoutes } from "./components";
import { LogIn, Register, Dashboard, SharedLayout } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import Items from "./pages/items/items.page";


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route exact path="/login" element={<LogIn />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <SharedLayout />
            </ProtectedRoutes>
          }
        >
          {/* OTHER PROTECTED ROUTES */}
          <Route path="/dashboard" element = {<Dashboard />} />
          <Route path="/items" element = {<Items/>} />
        </Route>

        {/* ERROR PAGE */}
        {/* <Route exact path="*" element={<Error />}></Route> */}
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
