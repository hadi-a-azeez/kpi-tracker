import tw from "twin.macro";

const HasMoreContainer = tw.div`px-4 w-full grid place-items-center pb-6`;

const MoreText = tw.div`cursor-pointer text-sm text-white px-4 py-2.5 bg-blue-500 rounded-lg mt-4`;

const ViewMore = ({
  listLoading,
  onClick = () => {},
  totalCount = 0,
  listCount = 0,
}) => {
  if (listCount >= totalCount) return null;
  return (
    <HasMoreContainer>
      <MoreText onClick={() => onClick()}>
        {" "}
        {listLoading ? "Loading..." : "Load more"}
      </MoreText>
    </HasMoreContainer>
  );
};

export default ViewMore;
