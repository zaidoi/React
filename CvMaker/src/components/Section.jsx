function Section({ data, exData, edData }) {
  return (
    <div className="bg-gray-200 w-200 rounded-sm py-4 px-5">
      <div className="general">
        <h2 className="text-3xl text-center">{data.name || "Your Name"}</h2>
        <div className="sub-info flex justify-center mt-5 gap-20 ">
          <h3 className="text-lg">{data.email || "your@email.com"}</h3>
          <h3 className="text-lg">{data.phn || "000000000"}</h3>
        </div>
        <hr className="mt-4" />
      </div>

      <div className="experince mt-2 flex flex-col gap-2">
        <h3 className="text-xl">
          <b>Work Experience</b>
        </h3>
        <p>
          <b>Company Name: </b>
          {exData.company || "Masjid Ansar"}
        </p>
        <p>
          <b>Job Title: </b>
          {exData.title || "Software Developer"}
        </p>
        <p className="whitespace-normal break-words">
          <span className="font-bold">Role:</span> {exData.role || "Your Role"}
        </p>
        <p>
          <b>Date: </b>
          {exData.date || "2021 - 2024"}
        </p>
      </div>
      <hr className="mt-4" />

      <div className="education mt-2 flex flex-col gap-2">
        <h3 className="text-xl">
          <b>Education</b>
        </h3>
        <p>
          <b>Name of School: </b>
          {edData.school || "Rose Manor"}
        </p>
        <p>
          <b>Course: </b>
          {edData.course || "Web Development"}
        </p>
        <p>
          <b>Date: </b>
          {edData.date || "2021 - 2024"}
        </p>
      </div>
    </div>
  );
}

export default Section;
