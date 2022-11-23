import { Link, Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { EquipmentList } from "./Equipment/EquipmentList";

export const CapstonePlayground = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        exact
        path="/"
        element={<Link to="/equipment">To Equipment</Link>}
      />
      <Route exact path="/equipment" element={<EquipmentList />} />
      <Route
        path="*"
        element={
          <Authorized>
            <>
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
};
