import tw, { styled } from "twin.macro";

const Container = styled.div`
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

const ProfileSection = () => {
  return (
    <Container>
      <ProfilePicture></ProfilePicture>
      <div className="flex flex-col">
        <h1 className="text-normal font-bold text-gray-800">
          Welcome, Muhamed
        </h1>
        <p className="text-sm text-gray-400 font-semibold ">
          Digital Product Designer
        </p>
      </div>
    </Container>
  );
};

export default ProfileSection;
