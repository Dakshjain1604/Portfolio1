import { BottomBar } from "../compoents/BottomBar";
import { Headerbar } from "../compoents/topBar";
import { motion } from "framer-motion";

export function GetinTouch() {
  return (
    <div className="flex flex-col justify-center items-center pb-20 sm:pb-32">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold flex justify-center text-gray-400 pb-5 text-center"
      >
        GET IN TOUCH
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="rounded-3xl h-fit w-fit border-gray-300 border-2 p-2 sm:p-4 hover:scale-110 transition-transform duration-300 text-white cursor-pointer text-center text-sm sm:text-lg"
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvMZDCbHbrHplLnvQpFQCgzcbVXzLFxsfvLLjBdfQpCBpMCTsQfgZQknBgQgRTcGWmhsB",
            "_blank"
          );
        }}
      >
        dakshjain080@gmail.com
      </motion.div>
    </div>
  );
}

export function ContactBottomBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 w-full text-white"
    >
      <div className="flex flex-col justify-center px-4 sm:px-10 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-10 text-2xl font-semibold text-center"
        >
          CONTACT ME
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-lg text-gray-400"
        >
          I'm always open to new opportunities, exciting collaborations, or
          just
          <br />
          a friendly hello.
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <BottomBar />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Contact() {
  return (
    <div className="bg-black min-h-screen">
      <Headerbar />
      <div className="flex flex-col justify-end">
        <div className="pt-30">
          <GetinTouch />
        </div>
        <div className="pt-20 xl:pt-50">
          <ContactBottomBar />
        </div>
      </div>
    </div>
  );
}
