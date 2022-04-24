import React, { useEffect, useState } from "react";
import ViewMore from "src/components/ViewMore";
import { getAllAttendance } from "src/services/attendance";
import UserLayout from "../../../layouts/user";
import Card from "./Card";
import dayjs from "dayjs";
import AnalyticsSection from "./AnalyticsSection";
import DateRangeSection from "./DateRangeSection";

const AttendanceList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [dateRange, setDateRange] = useState({
    label: "Last 7 Days",
    startDate: dayjs().subtract(7, "day").format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
  });
  const [attendanceAnalytics, setAttendanceAnalytics] = useState({
    totalPresent: 0,
    totalAbsent: 0,
    totalWeekend: 0,
    totalWorkingDay: 0,
  });

  const onDateRangeChange = (dateRange) => {
    setData([]);
    setDateRange(dateRange);
  };

  const getAttendanceAnalytics = (totalCount) => {
    //total number of sundays between startDate and endDate
    const totalDays = dayjs(dateRange.endDate).diff(
      dayjs(dateRange.startDate),
      "day"
    );
    const totalSundays = dayjs(dateRange.endDate)
      .diff(dayjs(dateRange.startDate), "week", true)
      .toFixed(0);
    const totalAbsent = totalDays - (totalCount + Number(totalSundays));
    console.log({
      totalDays: totalDays,
      totalSundays: totalSundays,
      totalAbsent: totalAbsent,
    });
    setAttendanceAnalytics({
      totalPresent: totalCount,
      totalAbsent,
      totalWeekend: totalSundays,
      totalWorkingDay: totalDays - totalSundays,
    });
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await getAllAttendance({
      user_id: 1,
      date: "",
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      length: data.length,
      offset: 1,
    });
    if (response.status) {
      setData([...data, ...response?.data]);
      setCount(response?.count);
      getAttendanceAnalytics(response.count);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [dateRange]);

  return (
    <UserLayout>
      <div className="p-2 py-6">
        <DateRangeSection
          onClick={onDateRangeChange}
          selectedDateRange={dateRange.label}
        />
        <h1 className="mt-4 font-bold text-black-800 text-lg">Overview</h1>
        <AnalyticsSection data={attendanceAnalytics} />
        <h1 className="mt-4 font-bold text-black-800 text-lg">My attendance</h1>
        <div className="grid gap-3 mt-3">
          {data.length ? (
            data.map((item) => <Card data={item} key={item?.id} />)
          ) : (
            <div>No data</div>
          )}
        </div>
        <ViewMore
          listLoading={isLoading}
          onClick={fetchData}
          totalCount={count}
          listCount={data?.length}
        />
      </div>
    </UserLayout>
  );
};

export default AttendanceList;
