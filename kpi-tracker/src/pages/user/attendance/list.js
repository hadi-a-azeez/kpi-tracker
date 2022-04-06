import React from "react";
import UserLayout from "../../../layouts/user";
import Card from "./Card";

const AttendanceList = () => {
  return (
    <UserLayout>
      <div className="p-2">
        <h1 className="mt-4 font-bold text-black-800 text-lg">My attendance</h1>
        <div className="grid gap-3 mt-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </UserLayout>
  );
};

export default AttendanceList;
