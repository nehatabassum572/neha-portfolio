import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Send, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 }); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "General inquiries",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", inquiry: "General inquiries", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-4xl font-myfont text-[#f8e8f7] mb-4">
              Contact Me
            </h2>
            {/* Underline Animation */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#30A6C7] to-black-500 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "20%" } : { width: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <p className="text-gray-300 mb-8">
              Open to any adventure that involves learning and making cool stuff!
            </p>

            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <Mail className="text-[#b771bb]" size={20} />
                <span>tabassumneha572@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#b771bb]" size={20} />
                <span>India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-10">
              {[
                { href: "https://github.com/nehatabassum572", icon: <Github size={18} /> },
                { href: "https://www.linkedin.com/in/nehatabassum572/", icon: <Linkedin size={18} /> },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r p-3 rounded-full text-white shadow-lg bg-blue-600 hover:bg-blue-700"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-black/40 backdrop-blur-md border border-white/50 rounded-xl p-8 shadow-xl "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none"
              />
              <select
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none"
              >
                <option>General inquiries</option>
                <option>Collaboration</option>
                <option>Bug Report</option>
                <option>Project inquiries</option>
                <option>FeedBack</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                <Send className="mr-2 " size={18} /> Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
