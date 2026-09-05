'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

type Props = {
     title: string;
     className?: string;
}

const Title: React.FC<Props> = ({ title, className }) => {
     return (
          <motion.h1
               initial={{ y: 35, opacity: 0, filter: "blur(10px)" }}
               whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
               transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98]
               }}
               viewport={{ once: true }}
               className={cn(
                    'relative z-10 text-center mb-10 md:mb-16 from-yellow-300 via-white to-blue-400',
                    className
               )}
          >
               <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-yellow-500/10 via-blue-500/10 to-transparent blur-3xl opacity-75" />

               <span className="block text-4xl md:text-5xl lg:text-6xl font-black font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r drop-shadow-[0_6px_25px_rgba(0,0,0,0.8)]">
                    {title}
               </span>

               <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80px' }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    className="h-1 rounded-full bg-gradient-to-r from-yellow-400 via-white to-blue-500 mx-auto mt-3 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
               />
          </motion.h1>
     )
}

export default Title