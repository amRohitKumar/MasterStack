import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SharedLayout = () => (
  <div>
    <main className="dashboard">
      <div>
        <Navbar />
        <div style={{ marginTop: "5em" }} />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </main>
  </div>
);

export default SharedLayout;
