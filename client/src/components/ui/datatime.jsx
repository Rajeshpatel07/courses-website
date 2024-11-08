
export function DateTime({ handleDateChange, handleTimeChange, time, date }) {


  return (
    <>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
      >
        publish on shedule
      </button>
    </>
  );
}
