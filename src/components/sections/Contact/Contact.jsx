
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:sanskarchoudhari1122@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email Me",
      value: "sanskarchoudhari1122@gmail.com",
      link: "mailto:sanskarchoudhari1122@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Me",
      value: "+91 7083364109",
      link: "tel:+917083364109",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Chandrapur, Maharashtra, India",
      link: "https://www.google.com/maps/search/?api=1&query=Chandrapur+Maharashtra",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-950 px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let's Work <span className="text-blue-500">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project in mind or looking for a developer?
            Feel free to contact me. I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side - Contact Information */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Let's Talk About Your Project
            </h3>

            <p className="mb-8 max-w-lg text-sm leading-7 text-slate-400">
              Whether you need a business website, web application,
              or want to discuss a job opportunity, I'm always open
              to meaningful conversations and new opportunities.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactDetails.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.title === "Location" ? "_blank" : undefined}
                  rel={item.title === "Location" ? "noreferrer" : undefined}
                  className="group flex items-center gap-5 rounded-xl border border-slate-800 bg-slate-900 p-5 transition-all hover:border-blue-500/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-500 transition-all group-hover:bg-blue-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <div>
                    <p className="mb-1 text-sm text-slate-400">
                      {item.title}
                    </p>

                    <p className="break-all text-sm font-semibold text-white transition-colors group-hover:text-blue-400">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="mb-4 font-semibold text-white">
                Connect With Me
              </h4>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sanskar-choudhari-90237021a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-xl text-slate-300 transition-all hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/sanskarchoudhari"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-xl text-slate-300 transition-all hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:sanskarchoudhari1122@gmail.com"
                  aria-label="Email"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-xl text-slate-300 transition-all hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <h3 className="mb-2 text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <p className="mb-7 text-sm text-slate-400">
              Fill out the form below and let's start a conversation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all hover:bg-blue-700"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>
          </div>
        </div>

        {/* Bottom Availability Card */}
        <div className="mt-16 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
          <FaCheckCircle className="mx-auto mb-4 text-3xl text-green-400" />

          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Open to New Opportunities
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
            I'm interested in web development opportunities,
            freelance projects, and collaborations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
