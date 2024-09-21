import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import skills from "../assets/skills.png";
import { FaReact, FaPython, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiCsharp, SiSpringboot, SiCplusplus } from "react-icons/si";
import { FaGlobeAmericas } from "react-icons/fa";

export default function MySkills() {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-3">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I am proficient in a variety of programming languages and frameworks, continuously learning to stay updated with the latest trends.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={skills}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skills} />
          )}
        </div>
      </div>

      {/* SKILLS AND TOOLS */}
      <div className="md:flex md:justify-between mt-12 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Academic Excellence
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Excelled in key subjects such as OOP and database, applying learned concepts to develop projects. Achieved WAM over 90.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I love exploring innovative approaches to problem-solving and pushing boundaries in software engineering.
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Imagination fuels my passion for creating user-centric solutions that are both secure and creative.
          </p>
        </motion.div>
      </div>

      {/* PROGRAMMING LANGUAGES & FRAMEWORKS */}
      <div className="md:flex md:justify-between mt-8 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">04</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Languages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-slate-700 absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="flex mt-5 space-x-4">
            <FaJava className="text-red text-4xl" />  
            <FaJsSquare className="text-yellow text-4xl" />
            <SiCplusplus className="text-blue text-4xl" />
            <SiCsharp className="text-purple-600 text-4xl" />
            <FaHtml5 className="text-orange-600 text-4xl" />
            <FaCss3Alt className="text-blue text-4xl" />
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">05</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frameworks
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-purple-400 absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="flex mt-5 space-x-4 algin">
            <FaReact className="text-blue text-4xl" />
            <FaNodeJs className="text-green-600 text-4xl" />
            <SiSpringboot className="text-green-500 text-4xl" />
          </div>
        </motion.div>
      

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">06</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Language Proficiency
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-indigo-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="flex mt-5 space-x-4">
            <FaGlobeAmericas className="text-blue-500 text-4xl" />
            <span className="text-gray-600 text-2xl">English (Fluent)</span>
            <span className="text-gray-600 text-2xl">Burmese (Fluent)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
