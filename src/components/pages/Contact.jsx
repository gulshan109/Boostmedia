import { useState } from 'react';
import axios from 'axios';
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Contact = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const [message , setMessage] = useState("");


  const phoneNumber = "+918740870454"; // Your phone number
  const email1 = "sachin11097@gmail.com"; // Your email
  const whatsappNumber = "+918740870454"; // Your WhatsApp number
  const message1 = "Hello, I need help with BoostMedia";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/contact', {name , email , phone , message});
      console.log('Response:', response);

      alert('Form submitted successfully!');

    } catch (err) {
      console.error('Form submission error:', err);
      alert('Failed to submit form.');
    }
  };

  return (
    <section id="contact" className="bg-white py-4 px-6 md:px-12">
       <div className="h-[100%] bg-gray-100 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-white">Contact Us</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Reach out to us through the options below!
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message1)}`} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center bg-green-500 text-white p-4 rounded-full w-16 h-16">
                <FaWhatsapp className="w-8 h-8" />
              </button>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Chat on WhatsApp</h3>
            </a>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <a href={`mailto:${email1}`} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-full w-16 h-16">
                <MdOutlineEmail className="w-8 h-8" />
              </button>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Email Us</h3>
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <a href={`tel:${phoneNumber}`} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center bg-yellow-500 text-white p-4 rounded-full w-16 h-16">
                <MdOutlinePhoneInTalk className="w-8 h-8" />
              </button>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Call Us</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
{/* 
  <div className="max-w-3xl mx-auto" data-aos="fade-up">
    <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">Contact Us</h2>
    <form className="space-y-2 w-[90%]" onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        onChange={(e)=>{setName(e.target.value)}}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      <input
        type="Phone"
        placeholder="Your Phone no."
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        onChange={(e)=>{setPhone(e.target.value)}}
      />
      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        onChange={(e)=>{setMessage(e.target.value)}}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        
      >
        Send Message 
      </button>
    </form>
  </div> */}
</section>

  );
};

export default Contact;