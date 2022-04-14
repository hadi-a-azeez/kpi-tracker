import React from "react";
import tw, { styled } from "twin.macro";

const Container = styled.div`
  ${tw`p-2 bg-gray-100 w-full grid gap-2`}
  border-radius: 18px;
  grid-template-columns: auto 1fr 1fr;
`;
const DateCard = styled.div`
  ${tw`flex flex-col items-center justify-center font-bold text-black text-lg gap-1 h-full p-3 bg-white rounded-lg shadow-lg`}
  border-radius: 18px;
`;
const Section = styled.div`
  ${tw`flex flex-col items-center justify-center font-bold text-gray-800 text-sm gap-2 h-full p-3 `}
`;

const Card = () => {
  return (
    <Container>
      <DateCard>
        <span>12</span>
        <span>MON</span>
      </DateCard>
      <Section>
        <span>Clock In</span>
        <span className="text-gray-500">10:15 AM</span>
      </Section>
      <Section>
        <span>Clock Out</span>
        <span className="text-gray-500">07:15 AM</span>
      </Section>
    </Container>
  );
};

export default Card;
