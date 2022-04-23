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

const AttendanceCard = ({
  clockedIn = false,
  onButtonClick = () => {},
  clockedInTime = "",
}) => {
  return (
    <Card clockedIn={clockedIn}>
      <CardText clockedIn={clockedIn}>Let's get to work💼</CardText>
      <Button onClick={() => onButtonClick()} clockedIn={clockedIn}>
        {clockedIn ? "Clock Out" : "Clock In"}
      </Button>
      <CardDescription clockedIn={clockedIn}>
        {clockedIn
          ? `Clocked In at ${clockedInTime}`
          : "Your hour's will be calculated here."}
      </CardDescription>
    </Card>
  );
};

export default AttendanceCard;
