import { useMemo } from "react";
import { ATTENDANCE_STATUS } from "src/constants/attendanceStatus";
import tw, { styled } from "twin.macro";

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

const getButtonText = (status) => {
  switch (status) {
    case ATTENDANCE_STATUS.CLOCK_IN:
      return "Clock In";
    case ATTENDANCE_STATUS.CLOCK_OUT:
      return "Clock Out";
    default:
      return "Congratulations🎉";
  }
};

const getMessage = (status, clockedInTime) => {
  switch (status) {
    case ATTENDANCE_STATUS.CLOCK_IN:
      return "Your hour's will be calculated here.";
    case ATTENDANCE_STATUS.CLOCK_OUT:
      return `Clocked In at ${clockedInTime}`;
    default:
      return "You finished your hour🎉";
  }
};

const AttendanceCard = ({
  status,
  onButtonClick = () => {},
  clockedInTime = "",
}) => {
  const isClockedIn = useMemo(
    () => status === ATTENDANCE_STATUS.CLOCK_OUT,
    [status]
  );
  return (
    <Card clockedIn={isClockedIn}>
      <CardText clockedIn={isClockedIn}>Let's get to work💼</CardText>
      <Button
        onClick={() => onButtonClick()}
        clockedIn={isClockedIn}
        disabled={status === ATTENDANCE_STATUS.PRESENT}
      >
        {getButtonText(status)}
      </Button>
      <CardDescription clockedIn={isClockedIn}>
        {getMessage(status, clockedInTime)}
      </CardDescription>
    </Card>
  );
};

export default AttendanceCard;
