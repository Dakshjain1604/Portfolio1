import { motion } from "framer-motion";

interface exp {
  title: string;
  company: string;
  description: string;
  image: string;
  date: string;
}

export function ExperienceCard(props: exp) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full rounded-xl px-6 md:px-20 pb-10 shadow-md shadow-gray-300 text-gray-300 mt-10 border border-white"
    >

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between py-5 px-5 mt-4 text-2xl md:text-3xl rounded-xl shadow-md shadow-gray-600 mb-5"
      >
        <div className="flex flex-wrap items-baseline">
          <div className="font-bold">{props.title}</div>
          <div className="pl-2">| {props.company}</div>
        </div>
        <div className="text-lg md:text-xl mt-2 md:mt-0">
          {props.date}
        </div>
      </motion.div>


      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row justify-evenly gap-6 shadow-md shadow-gray-600 rounded-xl px-5 md:px-10 pb-10 pt-5"
      >
        <div className="flex gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-justify text-gray-400 text-base md:text-lg leading-relaxed"
        >
          {props.description}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-start"
        >
          <img
            src={props.image}
            alt="experience"
            className="rounded-xl w-full max-w-sm md:max-w-sm lg:max-w-lg h-auto object-cover"
          />
        </motion.div>
        </div>

      </motion.div>
    </motion.div>
  );
}
