import React from "react";
import tw, { styled } from "twin.macro";
import { useNavigate } from "react-router-dom";

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
  ${({ selected }) => selected && tw`text-blue-500 font-semibold`}
`;

const BottomNavigation = ({ routes = [] }) => {
  const navigate = useNavigate();
  const selected = routes.find(
    (route) => route?.path === window.location.pathname
  );

  const NavItem = ({
    label = "",
    icon = null,
    path = "",
    isSelected = false,
  }) => {
    return (
      <NavContainer onClick={() => navigate(path)}>
        {icon({
          className: isSelected
            ? "text-blue-500 icon icon-selected"
            : "text-gray-500 icon",
        })}
        <Label selected={isSelected}>{label}</Label>
      </NavContainer>
    );
  };

  return (
    <Container>
      {routes.map((route, index) => (
        <NavItem
          key={index}
          {...route}
          isSelected={selected?.path === route?.path}
        />
      ))}
    </Container>
  );
};

export default BottomNavigation;
