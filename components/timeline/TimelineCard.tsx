"use client";

import { motion } from "framer-motion";

interface TimelineItem {
    title: string;
    date: string;
    media: string;
    type: "image" | "video";
    description: string;
}

interface Props {
    item: TimelineItem;
    reverse?: boolean;
}

export default function TimelineCard({
    item,
    reverse = false,
}: Props) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={` max-w-6xl grid items-center gap-12 lg:grid-cols-[460px_1fr]
      ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
        >

            <div className="group relative  overflow-hidden rounded-[30px] ">

                {item.type === "image" ? (
                    <img
                        src={item.media}
                        alt={item.title}
                        className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <video
                        src={item.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="aspect-4/5 h-140 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                )}



            </div>


            <div className="max-w-lg">


                <span className="inline-flex font-semibold uppercase leading-2 tracking-[5px] text-[#D97C90]">
                    {item.date}
                </span>


                <h2 className="mt-5 font-mono text-5xl leading-[0.95] text-[#2A2526] md:text-6xl">
                    {item.title}
                </h2>



                <p className="mt-6 text-lg leading-8 text-neutral-600">
                    {item.description}
                </p>

            </div>
        </motion.article>
    );
}