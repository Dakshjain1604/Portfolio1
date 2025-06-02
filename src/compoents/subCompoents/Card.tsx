import { MouseEventHandler } from "react";
import { Github } from "../../icons/github";
import { motion } from "framer-motion";

interface card {
    title: string,
    image?: string,
    onClick?: MouseEventHandler,
    delay?: number,
}

export function Card(props: card) {
    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: props.delay,ease: ["easeIn", "easeOut"] }}
            viewport={{ once: true }}
            className="text-white flex flex-col rounded-lg w-[500px] h-[400px] border-2 p-4 border-gray-800"
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-between py-3 px-2"
            >
                <div className="text-3xl font-bold">
                    {props.title}
                </div>
                <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    onClick={props.onClick} 
                    className="hover:scale-125"
                >
                    {<Github height={30} width={30} />}
                </motion.div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1 pt-3"
            >
                <img 
                    src={props.image} 
                    className="rounded-lg shadow-lg shadow-gray-400 w-fit h-full object-cover" 
                    alt={props.title}
                />
            </motion.div>
        </motion.div>
    );
}

