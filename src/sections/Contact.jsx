import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {ArrowUp} from '../assets/arrow-up.png'
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_9am06fs

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.send(
        "service_9am06fs",
        "template_hllwe9n",
        {
          name: form.name,
          to_name: "Ahmad",
          from_email: form.email,
          to_email: "ahmadlaham792@gmail.com",
          message: form.message,
        },
        "A4YSgnxMKCNGEtpXb"
      );

      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Somthing went wrong!");
    }
  };

  return (
    <section className="sm:px-10 px-5 pb-[90px]" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="src/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen "
        />
        <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
          <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
            Let's talk
          </h3>
          <p className="text-lg text-neutral-400">
            whether you're looking to build new website , improve your existing
            platform , or bring a unique project to life , I'm here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7 ">
            <label className="space-y-3">
              <span className="text-lg text-neutral-400">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className=" w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-neutral-600 shadow-black-200 shadow-2xl focus:outline-none"
                placeholder="Moaz"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-neutral-400">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className=" w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-neutral-600  shadow-black-200 shadow-2xl focus:outline-none"
                placeholder="moaz@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-neutral-400">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className=" w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-neutral-600 shadow-black-200 shadow-2xl focus:outline-none"
                placeholder="Hi , I'm interested in ..."
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#2e2e37] px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3">
              {loading ? "Sending" : "Send Message"}
              <img
                src={ArrowUp}
                alt="arrow up"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
