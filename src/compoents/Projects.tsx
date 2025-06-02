import { Card } from "./subCompoents/Card";
import { motion } from "framer-motion";

export function Projects() {
    return <div className="min-h-screen">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:["easeIn", "easeOut"] }}
            viewport={{ once: true }}
            className="text-6xl font-bold pt-10 pb-10 text-white flex justify-center"
        >
            Projects
        </motion.div>
        <div className="flex flex-col gap-20">
        <div className="flex gap-20 px-35">
                <Card title="Brainly" image="/images/brainlyImages/BrainlyImage.png"  delay={0.3} onClick={()=>{
                    window.open("https://github.com/Dakshjain1604/Brainly","_blank")
                }}></Card>
            
                <Card title="Live Tracking Application" image="/images/live-tracking.png" delay={0.3} onClick={()=>{
                    window.open("https://github.com/Dakshjain1604/Live-Tracking","_blank");
                }}></Card>
            
        </div>
        <div className="flex gap-20 px-35 justify-center">
                <Card title="Transactly" image="/images/transactly.png" delay={0.35}onClick={()=>{
                    window.open("https://github.com/Dakshjain1604/transactly","_blank")
                }}></Card>
        </div>
        </div>
    </div>

}
