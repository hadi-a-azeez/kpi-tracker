import React from "react";
import { BottomNavigation } from "../../components";
import { userBottomNavigationRoutes } from "../../routes/user";

const UserLayout = ({ children }) => {
  return (
    <div className="relative flex-1">
      {children}
      <BottomNavigation routes={userBottomNavigationRoutes} />
    </div>
  );
};

export default UserLayout;
