const AnalyticsSection = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <div className="w-full bg-blue-100 rounded-lg p-3 flex flex-col gap-1">
        <h1 className="font-semibold text-gray-600 text-sm">Working Days</h1>
        <h1 className="font-bold text-gray-800 font-xl">
          {data.totalWorkingDay}
        </h1>
      </div>
      <div className="w-full bg-lime-100 rounded-lg p-3 flex flex-col gap-1">
        <h1 className="font-semibold text-gray-600 text-sm">Present Days</h1>
        <h1 className="font-bold text-gray-800 font-xl">{data.totalPresent}</h1>
      </div>
      <div className="w-full bg-red-100 rounded-lg p-3 flex flex-col gap-1">
        <h1 className="font-semibold text-gray-600 text-sm">Absent Days</h1>
        <h1 className="font-bold text-gray-800 font-xl">{data.totalAbsent}</h1>
      </div>
      <div className="w-full bg-orange-100 rounded-lg p-3 flex flex-col gap-1">
        <h1 className="font-semibold text-gray-600 text-sm">Weekend Days</h1>
        <h1 className="font-bold text-gray-800 font-xl">{data.totalWeekend}</h1>
      </div>
    </div>
  );
};

export default AnalyticsSection;
