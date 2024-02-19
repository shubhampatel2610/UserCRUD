import { Route, Routes } from "react-router-dom";
import UserListing from "../pages/userListing";
import User from "../pages/user/user";
import UserDetail from "../pages/userDetails/userDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<UserListing />} />
      <Route path="/user" element={<User />} />
      <Route path="/user-details" element={<UserDetail />} />
    </Routes>
  );
};

export default Routing;
