"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
    image: string;
    caption: string;
    rotation: string;
}

export default function Polaroid({
    image,
    caption,
    rotation,
}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: .8,
                y: 80,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            whileHover={{
                rotate: 0,
                scale: 1.06,
                y: -10,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: .8,
            }}
            style={{
                rotate: rotation,
            }}
            className="relative bg-white p-4 shadow-2xl rounded-md"
        >
            {/* Tape */}

            <div className="absolute left-1/2 top-0 h-8 w-20 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[#f7e8c5]/80 backdrop-blur-sm" />

            <div className="relative h-[350px] w-[280px] overflow-hidden">
                <Image
                    fill
                    src={image}
                    alt=""
                    className="object-cover"
                />
            </div>

            <p className="mt-5 text-center font-[var(--font-dancing)] text-2xl">
                {caption}
            </p>
        </motion.div>
    );
}