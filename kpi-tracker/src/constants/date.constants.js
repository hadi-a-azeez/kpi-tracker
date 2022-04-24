import dayjs from "dayjs";

export const dateRanges = [
  {
    label: "Today",
    startDate: dayjs().format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
  },
  {
    label: "Yesterday",
    startDate: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
    endDate: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
  },
  {
    label: "Last 7 Days",
    startDate: dayjs().subtract(7, "day").format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
  },
  {
    label: "Last 30 Days",
    startDate: dayjs().subtract(30, "day").format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
  },
  {
    label: "This Month",
    startDate: dayjs().startOf("month").format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
  },
  {
    label: "Last Month",
    startDate: dayjs()
      .subtract(1, "month")
      .startOf("month")
      .format("YYYY-MM-DD"),
    endDate: dayjs().subtract(1, "month").endOf("month").format("YYYY-MM-DD"),
  },
];
