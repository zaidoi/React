import { useState } from "react";
function Education({ setEducationData }) {
  const [localData, setLocalData] = useState({
    school: "",
    course: "",
    date: "",
  });
  const [showInputs,setShowInputs] = useState(false)

  const onEdit = (e) =>{
e.preventDefault();
setShowInputs(!showInputs)
  }
  

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
    setEducationData(localData);
    setLocalData({ school: "", course: "", date: "",  });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col  bg-gray-200  box-border w-110 h-auto rounded-lg p-4 gap-2 mt-4">
        <h1 className="text-2xl text-center mt-2">Education Details</h1>
        <hr className="" />

       {showInputs && (<>
        <label htmlFor="">Name of the School:</label>
        <input
          className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
          type="text"
          name="school"
          onChange={handleChange}
          value={localData.school}
          required
        />
        <label htmlFor="">Course:</label>
        <input
          type="text"
          className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
          name="course"
          onChange={handleChange}
          value={localData.course}
          required
        />
        <label htmlFor="">Date of Study:</label>
        <input
          type="text"
          className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
          name="date"
         pattern="^(19[9][6-9]|20[0-1][0-9]|202[0-5])-(19[9][6-9]|20[0-1][0-9]|202[0-5])$"
          onChange={handleChange}
          value={localData.date}
          required
        /></>)}
        <div className="btn  flex flex-row  justify-between mt-4">
          <button
            className="bg-black text-white rounded-lg px-3 py-2 transition delay-150 duration-20 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-600"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-black text-white rounded-lg px-4 py-2 mr-7 transition delay-20 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-600"
            type="button"
            onClick={onEdit}
          >
            {showInputs ? "Close" : "Edit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Education;
