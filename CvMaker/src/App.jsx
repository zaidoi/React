import General from "./components/General";
import Education from "./components/Education";
import Experince from "./components/Experince";
import Section from "./components/Section";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phn: "",
  });

  const [educationData, setEducationData] = useState({
    school: "",
    course: "",
    date: "",
  });

  const [experinceData, setExperinceData] = useState({
    company: "",
    title: "",
    role: "",
    date: "",
  });

  return (
    <>
      <div className="main w-100 h-100 flex gap-20">
        <div className="section-main">
          <General formData={formData} setFormData={setFormData} />
          <Education setEducationData={setEducationData} />
          <Experince setExperinceData={setExperinceData} />
        </div>

        <div className="section-display">
          <Section
            data={formData}
            exData={experinceData}
            edData={educationData}
          />
        </div>
      </div>
    </>
  );
}

export default App;
