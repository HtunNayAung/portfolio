import { desc } from "framer-motion/client";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import hotelProject from "../assets/hotel.png";
import airlineProject from "../assets/airline.png";
import electionProject from "../assets/election.png";



const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
};
const projectVarient = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
}

const projectData = [
    {
      title: "Hotel Management System",
      src: hotelProject,
      description: "A comprehensive system for managing hotel reservations and guest services.",
      githubLink: "https://github.com/HtunNayAung/Hotel-Management-System",
    },
    {
      title: "Election System",
      src: electionProject,
      description: "A simulator for elections and votes system",
      githubLink: "https://github.com/HtunNayAung/Election-Simulator"
    },
    {
      title: "Airline System",
      src: airlineProject,
      description: "An airline booking system to manage flights, passengers, and schedules.",
      githubLink: "https://github.com/HtunNayAung/FlyDreamAir",
    },
  ];


const Project = ({title, src, description, githubLink}) => {
    const overLay  = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projectVarient} className="relative">
            <div className={overLay}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    {description}
                </p>
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 text-blue-500 hover:underline"
                >
                    View on GitHub
                </a>
            </div>
            <img src={src} alt={projectTitle} />
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="pt-48 pb-48">
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Completed these projects where I invoked my learnt skills. These projects allowed me to develop strong foundations in software developing.
                </p>
            </motion.div>

            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3  "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                >
                    {projectData.map((project, index) => (
                        <Project
                        key={index}
                        title={project.title}
                        src={project.src}
                        description={project.description}
                        githubLink={project.githubLink}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}