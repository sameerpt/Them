"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background */}

            <Image
                src="/images/hero/home.png"
                alt="Hero"
                fill
                priority
                className="hidden object-cover scale-110 md:block"
            />

            {/* Mobile */}
            <Image
                src="/images/hero/color.png"
                alt="Hero"
                fill
                priority
                className="object-cover md:hidden"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/20 md:bg-black/10 " />


            <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            {/* Content */}

            <div className="relative z-20 flex h-full flex-col left-5 top-70 md:left-25 md:top-45">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="tracking-[8px] text-black/70 uppercase text-lg"
                >
                    OUR STORY
                </motion.p>

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="mt-6 max-w-6xl font-serif text-5xl md:text-8xl text-white leading-tight"
                >
                    Every Beautiful Story
                    Starts With
                    A <span className="text-amber-200">Bestfriends</span> to <span className="text-pink-500">Soulmate</span>.
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                    }}
                    className="mt-8 max-w-2xl text-black/70 font-serif tracking-wider uppercase text-[14px]"
                >
                    Some memories deserve more than a place in our phones.
                    They deserve a <span className="text-white text-3xl font-bold">home</span>.
                </motion.p>


            </div>

            {/* Scroll Indicator */}

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-6xl animate-bounce">
                ↓
            </div>
        </section>
    );
}