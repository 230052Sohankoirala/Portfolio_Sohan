import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, UserRound } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "koiralam613@gmail.com",
            href: "mailto:koiralam613@gmail.com"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Nepal",
            href: "#"
        },
        {
            icon: UserRound,
            label: "Open For",
            value: "Internship / Junior Role",
            href: "#"
        }
    ];

    return (
        <main className="min-h-screen bg-linear-to-br from-slate-950 via-gray-900 to-teal-950 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-14 max-w-3xl"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Let us talk about opportunities.</h1>
                    <p className="mt-6 text-lg leading-relaxed text-gray-300">
                        I am open to internships, trainee programs, junior developer roles, and project collaboration where I can learn and contribute.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/50"
                            >
                                <Icon size={32} className="mb-4 text-cyan-300" />
                                <h3 className="text-lg font-semibold text-white">{info.label}</h3>
                                <p className="mt-2 text-gray-400">{info.value}</p>
                            </motion.a>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white/5 p-8">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-white/10 bg-gray-950/60 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-300"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-white/10 bg-gray-950/60 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-300"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-white/10 bg-gray-950/60 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-300"
                                        placeholder="Internship opportunity"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full resize-none rounded-lg border border-white/10 bg-gray-950/60 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-300"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 py-3 font-semibold text-gray-950 transition hover:bg-cyan-300"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>

                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 p-4 text-center text-emerald-200"
                                    >
                                        Message sent successfully. I will get back to you soon.
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-lg border border-white/10 bg-white/5 p-8"
                    >
                        <h2 className="text-2xl font-bold text-white">Connect With Me</h2>
                        <div className="mt-6 space-y-4">
                            <a
                                href="https://github.com/230052Sohankoirala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 rounded-lg bg-gray-950/60 p-4 text-gray-300 transition hover:text-cyan-200"
                            >
                                <FaGithub size={24} className="text-cyan-300" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sohan-koirala-6b0314289/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 rounded-lg bg-gray-950/60 p-4 text-gray-300 transition hover:text-cyan-200"
                            >
                                <FaLinkedin size={24} className="text-cyan-300" />
                                LinkedIn
                            </a>
                            <a
                                href="mailto:koiralam613@gmail.com"
                                className="flex items-center gap-3 rounded-lg bg-gray-950/60 p-4 text-gray-300 transition hover:text-cyan-200"
                            >
                                <Mail size={24} className="text-cyan-300" />
                                Email
                            </a>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </main>
    );
};

export default Contact;
