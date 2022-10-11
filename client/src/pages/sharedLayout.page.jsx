import { Outlet } from "react-router-dom";

const SharedLayout = () => (
  <div>
    <main className="dashboard">
      <div>
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </main>
  </div>
);

export default SharedLayout;
