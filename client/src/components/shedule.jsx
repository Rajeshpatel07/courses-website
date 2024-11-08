import { useState } from "react";
import { DateTime } from "./ui/datatime";
import axios from "axios";
import config from "../config/config";

export default function Shedule({ setIsPublish, title, content, image, desc }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  const handlePublish = async (e, schedule) => {
    e.preventDefault();
    console.log(schedule)
    try {
      const response = await axios.post(`${config.api}/api/v1/blogs/new`, {
        title,
        content,
        image,
        desc,
        userId: localStorage.getItem("userId"),
        scheduledAt: schedule ? { date, time } : null,
        published: schedule ? false : true,
      });
      console.log(response);
      if (response.status === 201) {
        setIsPublish(false);
      }
    } catch (err) {
      console.log(err)
      setError("Error while creating the blog");
    }
  };

  return (

    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <div className="flex flex-col items-center gap-5 my-5">
          <div className="flex flex-col items-center justify-center w-96 h-96 bg-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Select Date and Time</h2>
            <form onSubmit={(e) => handlePublish(e, "schedule")}
              className="bg-white  p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
              <DateTime
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
                time={time}
                date={date}
              />
            </form>
          </div>
          <p>or</p>
          <button
            onClick={handlePublish}
            className="px-4 py-2 bg-blue-600 w-full text-white font-bold rounded-lg"
          >
            Publish Now
          </button>
        </div>

        {error.length > 0 && <p className="text-red-500">{error}</p>}

        <button
          onClick={() => setIsPublish(false)}
          className="px-4 py-2 bg-gray-300 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
