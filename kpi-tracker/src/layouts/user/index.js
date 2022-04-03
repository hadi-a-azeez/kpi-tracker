import React from "react";
import { UserBottomNavigation } from "../../components";

const UserLayout = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <UserBottomNavigation />
    </div>
  );
};

export default UserLayout;
