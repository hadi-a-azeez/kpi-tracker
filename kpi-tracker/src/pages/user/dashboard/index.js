import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import UserLayout from "../../../layouts/user";

const ProfileSection = styled.div`
  ${tw`flex flex-row items-center gap-2 w-full`}
  margin-top: 30px;
  // transform animation
  animation: transform-animation 0.5s ease-in-out;
  @keyframes transform-animation {
    0% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const ProfilePicture = styled.div`
  ${tw`rounded-full bg-gray-200`}
  height: 35px;
  width: 35px;
`;

const Card = styled.div`
  ${tw`rounded-lg shadow-lg p-5 mt-4 grid place-items-center gap-2 
  `}
  ${(props) => props.clockedIn && tw`bg-blue-500`}
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  //animation
  animation: transform-animation 0.5s ease-in-out;
  @keyframes transform-animation {
    0% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const CardText = styled.h1`
  ${tw`text-lg font-bold text-gray-700`}
  ${(props) => props.clockedIn && tw`text-white`}
`;

const CardDescription = styled.h1`
  ${tw`text-sm font-bold text-gray-600`}
  ${(props) => props.clockedIn && tw`text-white`}
`;

const Button = styled.button`
  ${tw`bg-blue-500  text-white font-bold py-2 w-full rounded`}
  ${(props) => props.clockedIn && tw`bg-white text-blue-500`}
`;

const Dashboard = () => {
  const [clockedIn, setClockedIn] = useState(false);

  const onButtonClick = () => {
    setClockedIn(!clockedIn);
  };
  return (
    <UserLayout>
      <div className="w-full min-h-screen p-3">
        <ProfileSection>
          <ProfilePicture></ProfilePicture>
          <div className="flex flex-col">
            <h1 className="text-normal font-bold text-gray-800">
              Welcome, Muhamed
            </h1>
            <p className="text-sm text-gray-400 font-semibold ">
              Digital Product Designer
            </p>
          </div>
        </ProfileSection>
        <Card clockedIn={clockedIn}>
          <CardText clockedIn={clockedIn}>Let's get to work💼</CardText>
          <Button onClick={() => onButtonClick()} clockedIn={clockedIn}>
            {clockedIn ? "Clock Out" : "Clock In"}
          </Button>
          <CardDescription clockedIn={clockedIn}>
            {clockedIn
              ? "Clocked In at 9:56 AM"
              : "Your hour's will be calculated here."}
          </CardDescription>
        </Card>
      </div>
    </UserLayout>
  );
};

export default Dashboard;
