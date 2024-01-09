import { useState } from "react";
import Modal from "react-modal";

const Button = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    agreement: false,
  });
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      zIndex: 10000,
      width: "80%", // Adjust the width based on your needs
      maxWidth: "400px", // Set a max-width for larger screens
      height: "80%", // Adjust the height based on your needs
      maxHeight: "600px", // Set a max-height for larger screens
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      duration: "500s",
    },
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your logic to handle the form data (e.g., send it to a server)
    // Reset the form data if needed
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      agreement: false,
    });
    // Close the modal
    setShowModal(false);
  };

    return (
      <>
        <button
          className=" border-none uppercase hover:bg-transparent hover:text-white rounded-md px-3 py-3 text-black  bg-[#fff] "
          onClick={() => setShowModal(true)}
        >
          GET IN TOUCH
        </button>
        <Modal
          style={customStyles}
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          contentLabel="Contact Form"
        >
          <div className="">
            <span className="close  " onClick={() => setShowModal(false)}>
              &times;
            </span>

            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-cinzel py-2">GET IN TOUCH</h2>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  placeholder="Enter Full Name"
                  onChange={handleInputChange}
                  required
                />
              </label>

              <div className="grid mt-3 w-full max-w-xs items-center gap-1.5">
                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <input
                  placeholder="example@email.com"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="bg-white rounded-lg w-full ">
                <label className="text-gray-600 text-sm">Phone number</label>
                <div className="relative text-gray-500">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm outline-none rounded-lg h-full">
                      <option>US</option>
                      <option>ES</option>
                      <option>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="  +1 (555) 000-000"
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>

              <div className="flex my-4 items-center">
                <label className="flex items-center ">
                  <input
                    className="mr-4 "
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleInputChange}
                    required
                  />
                  I agree to the terms and conditions
                </label>
              </div>
              <p className="my-4">
                Please visit the privacy policy to understand how FigTree
                handles your personal data.
              </p>
              <div className="flex items-center justify-center">
                <button className="w-full my-5 py-3 bg-blue-700 text-black">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
}

export default Button
