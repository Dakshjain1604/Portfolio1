import { ReactElement } from "react";
import { motion } from "framer-motion";

interface Skills {
    logo: ReactElement,
    text: string,
}

export function SkillBox(props: Skills) {
    return <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
        }}
        drag 
        dragConstraints={{
            top: 2,
            bottom: 2,
            left: 2,
            right: 2
        }}
        className="flex flex-row rounded-3xl shadow-lg shadow-gray-800 bg-black text-white sm:w-fit h-fit justify-center items-center p-4"
    >
        <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="pr-3"
        >
            {props.logo}
        </motion.div>
        <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-xs sm:text-lg"
        >
            {props.text}
        </motion.div>
    </motion.div>
}



