"use client"
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function OurTeam() {
    const team = [
        {
            name: "Imran Shaon",
            designation: "Founder & Software Engineer",
            experience: "6+ Years Experience",
            phone: "+880 1700-000000",
            image: "/team1.jpg",
            socials: {
                facebook: "#",
                linkedin: "#",
                github: "#",
            },
        },
        {
            name: "John Doe",
            designation: "Full-Stack Developer",
            experience: "4+ Years Experience",
            phone: "+880 1600-000000",
            image: "/team2.jpg",
            socials: {
                facebook: "#",
                linkedin: "#",
                github: "#",
            },
        },
        {
            name: "Sarah Khan",
            designation: "UI/UX Designer",
            experience: "3+ Years Experience",
            phone: "+880 1500-000000",
            image: "/team3.jpg",
            socials: {
                facebook: "#",
                linkedin: "#",
                github: "#",
            },
        },
    ];

    return (
        <section id="team" className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-5">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold mb-6 text-center pb-8 text-lime-700"
                >
                    Meet Our Team
                </motion.h2>
                <div className="grid gap-10 md:grid-cols-3">
                    {team.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={160}
                                    height={160}
                                    className="w-36 h-36 rounded-full object-cover shadow-lg mb-4"
                                />

                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.designation}</p>
                                <p className="text-gray-500 text-sm">{member.experience}</p>

                                {/* Social Icons */}
                                <div className="flex gap-4 mt-5">
                                    <a
                                        href={member.socials.facebook}
                                        className="bg-gray-200 hover:bg-[var(--primary)] hover:text-white p-3 rounded-full transition"
                                    >
                                        <FaFacebookF size={18} />
                                    </a>
                                    <a
                                        href={member.socials.linkedin}
                                        className="bg-gray-200 hover:bg-[var(--primary)] hover:text-white p-3 rounded-full transition"
                                    >
                                        <FaLinkedinIn size={18} />
                                    </a>
                                    <a
                                        href={member.socials.github}
                                        className="bg-gray-200 hover:bg-[var(--primary)] hover:text-white p-3 rounded-full transition"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
