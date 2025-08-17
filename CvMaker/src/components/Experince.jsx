import { useState } from "react";

function Experince({ setExperinceData }) {
  const [localData, setLocalData] = useState({
    company: "",
    title: "",
    role: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
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

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="flex flex-col  bg-gray-200  box-border w-110 h-120 rounded-lg p-4 gap-2 mt-4 ">
        <h1 className="text-2xl text-center mt-2">Experince</h1>
        <hr className="" />
        <label htmlFor="">Company Name:</label>
        <input
          className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
          type="text"
          value={localData.company}
          onChange={handleChange}
          name="company"
          required
        />
        <label htmlFor="">Position:</label>
        <input
          type="text"
          className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
          name="title"
          value={localData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Role:</label>
        <textarea
          className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-auto"
          name="role"
          value={localData.role}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Date:</label>
        <input
          type="text"
          pattern="^(2020|2021|2022|2023|2024)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$"
          className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
          name="date"
          value={localData.date}
          onChange={handleChange}
          required
        />
        <div className="btn  flex flex-row  justify-between mt-4">
          <button
            className="bg-black text-white rounded-lg px-3 py-2 transition delay-150 duration-20 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 "
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-black text-white rounded-lg px-4 py-2 mr-7 transition delay-20 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 "
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Experince;
