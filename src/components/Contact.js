import React from "react";
const Contact = () => {
  return <div>
    <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
    <form>
      <input type="text" placeholder="name" className="p-2 m-2 border border-gray-200" />
      <input type="text" placeholder="message" className="p-2 m-2 border border-gray-200 rounded-lg" />
      <button className="p-2 m-2 bg-blue-500 text-white">Submit</button>

    </form>
  </div>;
};

export default Contact;
