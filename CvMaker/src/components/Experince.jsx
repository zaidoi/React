import { useState } from "react";

function Experince({ setExperinceData }) {
  const [localData, setLocalData] = useState({
    company: "",
    title: "",
    role: "",
    date: "",
  });

  const [showInputs, setShowInputs] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({
      ...localData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setExperinceData(localData);
    setLocalData({ company: "", title: "", role: "", date: "" });
  };

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col bg-gray-200 box-border w-110 h-auto rounded-lg p-4 gap-2 mt-4">
        <h1 className="text-2xl text-center mt-2">Experience</h1>
        <hr />

        {/* Sirf inputs toggle honge */}
        {showInputs && (
          <>
            <label>Company Name:</label>
            <input
              className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
              type="text"
              value={localData.company}
              onChange={handleChange}
              name="company"
              required
            />

            <label>Position:</label>
            <input
              type="text"
              className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
              name="title"
              value={localData.title}
              onChange={handleChange}
              required
            />

            <label>Role:</label>
            <textarea
              className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-auto"
              name="role"
              value={localData.role}
              onChange={handleChange}
              required
            />

            <label>Date:</label>
            <input
              type="text"
              pattern="^(19[9][6-9]|20[0-1][0-9]|202[0-5])-(19[9][6-9]|20[0-1][0-9]|202[0-5])$"
              className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
              name="date"
              value={localData.date}
              onChange={handleChange}
              required
            />
          </>
        )}

        <div className="btn flex flex-row justify-between mt-4">
          <button
            className="bg-black text-white rounded-lg px-3 py-2 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-600"
            type="submit"
          >
            Submit
          </button>

          <button
            className="bg-black text-white rounded-lg px-4 py-2 mr-7 transition delay-200 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-600"
            type="button"
            onClick={toggleInputs}
          >
            {showInputs ? "Close" : "Edit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Experince;
