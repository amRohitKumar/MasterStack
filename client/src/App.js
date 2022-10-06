import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

import { ProtectedRoutes } from "./components";
import { LogIn, Register, Dashboard, SharedLayout } from "./pages";
import "react-toastify/dist/ReactToastify.css";


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
        </Route>

        {/* ERROR PAGE */}
        {/* <Route exact path="*" element={<Error />}></Route> */}
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
