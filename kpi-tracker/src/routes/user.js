import { BiHomeAlt } from "react-icons/bi";
import { FiThumbsUp, FiCalendar } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";

export const userBottomNavigationRoutes = [
  {
    path: "/user/dashboard",
    label: "Dashboard",
    icon: <BiHomeAlt />,
  },
  {
    path: "/user/attendance",
    label: "Attendance",
    icon: <FiCalendar />,
  },
  {
    path: "/user/kpi",
    label: "Kpi tracker",
    icon: <FiThumbsUp />,
  },
  {
    path: "/user/profile",
    label: "Profile",
    icon: <BiUserCircle />,
  },
];
