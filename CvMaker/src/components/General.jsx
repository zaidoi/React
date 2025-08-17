function General({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col  bg-gray-200  box-border w-110 h-80 rounded-lg p-4 gap-2  ">
      <h1 className="text-2xl text-center mt-2">Personal Details</h1>
      <hr />

      <label htmlFor="">Name:</label>
      <input
        className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
        name="name"
        type="text"
        placeholder="Your Name here"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="">Email:</label>
      <input
        type="text"
        className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
        placeholder="xyz@gmail.com"
        value={formData.email}
        name="email"
        onChange={handleChange}
      />

      <label htmlFor="">Phn:</label>
      <input
        type="text"
        className="bg-gray-400 rounded-lg px-2 outline-none w-100 text-base h-8"
        placeholder="8080808080"
        pattern="\d{10}"
        value={formData.phn}
        name="phn"
        onChange={handleChange}
      />

      
    </div>
  );
}

export default General;
