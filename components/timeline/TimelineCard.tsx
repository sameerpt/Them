"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    item: {
        title: string;
        date: string;
        image: string;
        description: string;
    };

    reverse?: boolean;
}

export default function TimelineCard({
    item,
    reverse = false,
}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 80,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.8,
            }}
            className={`grid gap-12 items-center lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
        >
            <div>
                <div className="relative overflow-hidden rounded-4xl shadow-[0_30px_80px_rgba(0,0,0,.12)]">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={700}
                        height={900}
                        className="aspect-4/5 w-full object-cover transition duration-700 hover:scale-105"
                    />
                </div>
            </div>

            <div>
                <p className="text-[#D97C90] uppercase tracking-[5px]">
                    {item.date}
                </p>

                <h2 className="mt-3 font-[var(--font-cormorant)] text-5xl">
                    {item.title}
                </h2>

                <p className="mt-8 text-lg leading-9 text-gray-700">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}