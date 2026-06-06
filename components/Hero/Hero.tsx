"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background */}

            <Image
                src="/images/hero/wallpaper.jpg"
                alt="Hero"
                fill
                priority
                className="hidden object-cover scale-110 md:block"
            />

            {/* Mobile */}
            <Image
                src="/images/hero/mobile-wallpaper.jpg"
                alt="Hero"
                fill
                priority
                className="object-cover md:hidden"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/20 md:bg-black/30 " />

            {/* Decorative Blur */}

            <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            {/* Content */}

            <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="tracking-[8px] text-white/70 uppercase"
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
                    className="mt-6 max-w-5xl font-[var(--font-cormorant)] text-5xl md:text-7xl text-white leading-tight"
                >
                    Every beautiful story
                    <br />
                    starts with
                    <br />
                    a single hello.
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
                    className="mt-8 max-w-xl text-white/80 text-lg"
                >
                    Some memories deserve more than a place in our phones.
                    They deserve a home.
                </motion.p>

                <Button>
                    Begin Our Journey ❤️
                </Button>
            </div>

            {/* Scroll Indicator */}

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
                ↓
            </div>
        </section>
    );
}