import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import { ProtectedRoutes, Navbar, Footer } from "./components";
import { LogIn, Register, Dashboard, SharedLayout, LandingPage } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import Items from "./pages/items/items.page";
import AddItem from "./pages/items/addItem.page";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <Navbar />
        <Box sx={{ paddingTop: "5em", paddingBottom: "4rem" }}>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/items" element={<Items />} />
            </Route>

            {/* ERROR PAGE */}
            {/* <Route exact path="*" element={<Error />}></Route> */}
          </Routes>
          <ToastContainer position="top-center" />
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
