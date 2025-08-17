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
    
       <div className="app-container">
         <h1 className='text-2xl m-2'>Zaid's CV Maker</h1>
    <div className="main flex gap-20">
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
       </div>
    
  );
}

export default App;
