import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { ProtectedRoutes } from "./components";
import { LogIn, Register, SharedLayout } from "./pages";

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
        </Route>

        {/* ERROR PAGE */}
        {/* <Route exact path="*" element={<Error />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
