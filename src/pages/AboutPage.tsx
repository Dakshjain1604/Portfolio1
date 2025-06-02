import { Headerbar } from "../compoents/topBar";
import { ContactBottomBar } from "./Contact";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <div className="bg-black text-white max-h-screen h-screen">
      <Headerbar />
      <div className="flex flex-col lg:flex-row justify-center items-center px-6 sm:px-10 lg:px-20 gap-10">
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg pt-10 sm:pt-20 flex flex-col pb-10 sm:pb-20 max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl pb-4 sm:pb-8"
          >
            Hi, I'm{" "}
            <b className="text-9xl sm:text-7xl text-white">Daksh Jain</b>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-justify leading-relaxed text-sm sm:text-base md:text-lg"
          >
            <p>
              Full-stack web developer with a strong foundation in building
              scalable and secure web applications using technologies like
              Node.js, Express, React.js, MySQL, and Docker. I've gained
              industry experience through internships at Celebal Technologies,
              where I worked on backend systems, JWT authentication, API design,
              and containerized deployments. I also have hands-on knowledge in
              data science and machine learning, including experience with
              classification models and tools like Pandas, NumPy, and
              Scikit-learn.
            </p>

            <ul className="list-disc pl-5 pt-6">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <b>Brainly – Personal Content Saver:</b> A platform to save,
                organize, and share content across platforms with features like
                JWT authentication, public/private links, and embedded media
                previews.
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <b>Live Tracking Application:</b> A real-time tracking tool
                focused on smooth UI interaction and efficient backend logic for
                location-based services.
              </motion.li>
            </ul>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              I'm a <b>5×</b> Microsoft Certified professional and a consistent
              learner who's always exploring new technologies and improving my
              craft. I enjoy turning ideas into reliable solutions and
              collaborating on meaningful projects. Let's connect and build
              something impactful together!
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="/images/profile.jpg"
            alt="Daksh"
            className="rounded-full w-40 sm:w-56 md:w-72 lg:w-80 h-auto object-cover"
          />
        </motion.div>
      </div>
      <ContactBottomBar />
    </div>
  );
}
