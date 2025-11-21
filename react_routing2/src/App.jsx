import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { AdminHome } from "./pages/AdminHome";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminProfile } from "./pages/AdminProfile";
import { AdminSettings } from "./pages/AdminSettings";
import { AdminNotification } from "./pages/adminNotification";
import { Homepagestudent } from "./pages/homepagestudent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<Homepagestudent />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/admin" element={<AdminHome />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<AdminSettings />}>
            <Route path="notification" element={<AdminNotification />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </>
  );
};
export default App;
