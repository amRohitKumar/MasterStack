import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Container from '@mui/material/Container';
import { ProtectedRoutes } from "./components";
import { LogIn, Register, Dashboard, SharedLayout } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import Items from "./pages/items/items.page";
import AddItem from "./pages/items/addItem.page";


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth={false} sx={{maxWidth: '100%'}}>
      <Routes>
        <Route exact path="/login" element={<LogIn />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/addItem" element={<AddItem />}></Route>
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
      </Container>
    </BrowserRouter>
  );
}

export default App;
