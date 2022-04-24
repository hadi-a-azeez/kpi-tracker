import { dateRanges } from "src/constants/date.constants";
import tw, { styled } from "twin.macro";

const Item = styled.div`
  ${tw`text-sm text-gray-500 px-4 py-1 bg-blue-50 rounded-lg uppercase cursor-pointer `}
  white-space: nowrap;
  ${(props) => props.selected && tw`bg-blue-500 text-white`}
`;

const DateRangeSection = ({ onClick = () => {}, selectedDateRange = "" }) => {
  return (
    <div className="w-full flex flex-row gap-2 overflow-scroll mb-3">
      {dateRanges.map((dateRange, index) => {
        return (
          <Item
            key={index}
            onClick={() => onClick(dateRange)}
            selected={selectedDateRange === dateRange.label}
          >
            {dateRange.label}
          </Item>
        );
      })}
    </div>
  );
};

export default DateRangeSection;
