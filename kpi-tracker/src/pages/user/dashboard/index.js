import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import UserLayout from "../../../layouts/user";
import {
  getTodayAttendance,
  markAttendance,
  updateAttendane,
} from "src/services/attendance";
import dayjs from "dayjs";
import AttendanceCard from "./AttendanceCard";

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

const Dashboard = () => {
  const [clockedIn, setClockedIn] = useState(false);
  const [clockedInTime, setClockedInTime] = useState("");

  const handleClockIn = async () => {
    setClockedIn(!clockedIn);
    const response = await markAttendance({
      date: dayjs("2022-04-22").format("YYYY-MM-DD"),
      start_time: "09:00:00",
      present: true,
      user_id: 1,
    });
  };

  const handleClockOut = async () => {
    const response = await updateAttendane({
      end_time: "20:00",
      user_id: 1,
      date: dayjs("2022-04-22").format("YYYY-MM-DD"),
    });
    console.log(response);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getTodayAttendance({
        user_id: 1,
        date: "2022-04-23",
      });
      if (response.success && response.data.length) {
        setClockedIn(true);
        setClockedInTime(dayjs(response.data?.start_time).format("HH mm A"));
      }
    };
    getData();
  }, []);

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
        <AttendanceCard
          clockedIn={clockedIn}
          onButtonClick={clockedIn ? handleClockOut : handleClockIn}
          clockedInTime={clockedInTime}
        />
      </div>
    </UserLayout>
  );
};

export default Dashboard;
