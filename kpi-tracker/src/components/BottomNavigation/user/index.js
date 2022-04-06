import React from "react";
import tw, { styled } from "twin.macro";
import { userBottomNavigationRoutes } from "../../../routes/user";

const Container = styled.div`
  ${tw`grid grid-cols-4 gap-2 w-full p-2 bg-white`}
  height: 60px;
  border-top: 1px solid #e6e6e6;
  position: fixed;
  bottom: 0;
`;

const NavContainer = styled.div`
  ${tw`flex flex-col items-center justify-center gap-1 w-full`}
`;

const Label = styled.h1`
  ${tw`text-gray-500 text-xs font-semibold`}
`;

const UserBottomNavigation = () => {
  const NavItem = ({ label = "", icon = null, path = "", selected = "" }) => {
    return (
      <NavContainer>
        {icon}
        <Label>{label}</Label>
      </NavContainer>
    );
  };

  return (
    <Container>
      {userBottomNavigationRoutes.map((route, index) => (
        <NavItem key={index} {...route} />
      ))}
    </Container>
  );
};

export default UserBottomNavigation;
