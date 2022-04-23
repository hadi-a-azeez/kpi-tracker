import React, { useEffect, useState } from "react";
import { getAllAttendance } from "src/services/attendance";
import UserLayout from "../../../layouts/user";
import Card from "./Card";

const AttendanceList = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await getAllAttendance({
      user_id: 1,
      date: "",
    });
    if (response.status) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserLayout>
      <div className="p-2">
        <h1 className="mt-4 font-bold text-black-800 text-lg">My attendance</h1>
        <div className="grid gap-3 mt-3">
          {data.length &&
            data.map((item) => <Card data={item} key={item?.id} />)}
        </div>
      </div>
    </UserLayout>
  );
};

export default AttendanceList;
