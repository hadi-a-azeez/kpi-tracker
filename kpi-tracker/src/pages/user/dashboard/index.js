import React, { useEffect, useState } from "react";
import UserLayout from "../../../layouts/user";
import {
  getTodayAttendance,
  markAttendance,
  updateAttendane,
} from "src/services/attendance";
import dayjs from "dayjs";
import AttendanceCard from "./AttendanceCard";
import { ATTENDANCE_STATUS } from "src/constants/attendanceStatus";
import ProfileSection from "./ProfileSection";

const Dashboard = () => {
  const [attendanceStatus, setAttendanceStatus] = useState(
    ATTENDANCE_STATUS.CLOCK_IN
  );
  const [clockedInTime, setClockedInTime] = useState("");

  const handleClockIn = async () => {
    setAttendanceStatus(ATTENDANCE_STATUS.CLOCK_OUT);
    await markAttendance({
      date: dayjs().format("YYYY-MM-DD"),
      start_time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      present: true,
      user_id: 1,
    });
  };

  const handleClockOut = async () => {
    setAttendanceStatus(ATTENDANCE_STATUS.PRESENT);
    await updateAttendane({
      end_time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      user_id: 1,
      date: dayjs().format("YYYY-MM-DD"),
    });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getTodayAttendance({
        user_id: 1,
        date: dayjs().format("YYYY-MM-DD"),
      });
      if (response.success && response.data.length) {
        setClockedInTime(
          dayjs("1/1/1" + response.data?.start_time).format("h:mm A")
        );
        response.data[0]?.end_time
          ? setAttendanceStatus(ATTENDANCE_STATUS.PRESENT)
          : setAttendanceStatus(ATTENDANCE_STATUS.CLOCK_OUT);
      }
    };
    getData();
  }, []);

  return (
    <UserLayout>
      <div className="w-full min-h-screen p-3">
        <ProfileSection />
        <AttendanceCard
          status={attendanceStatus}
          onButtonClick={
            attendanceStatus === ATTENDANCE_STATUS.CLOCK_OUT
              ? handleClockOut
              : handleClockIn
          }
          clockedInTime={clockedInTime}
        />
      </div>
    </UserLayout>
  );
};

export default Dashboard;
