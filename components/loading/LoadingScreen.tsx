"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-[#FFF8F5]"
        >
            <div className="text-center">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="font-[var(--font-cormorant)] text-6xl"
                >
                    ❤️
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: .8,
                    }}
                    className="mt-4 text-lg tracking-[4px]"
                >
                    OUR STORY
                </motion.p>
            </div>
        </motion.div>
    );
}