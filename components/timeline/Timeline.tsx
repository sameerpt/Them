"use client";

import TimelineCard from "./TimelineCard";
import { timeline } from "@/data/timeline";

export default function Timeline() {
    return (
        <section className="relative ">

            <div className="mx-auto max-w-7xl">

                <div className="text-center flex">

                    <p className="tracking-[6px] uppercase text-[#D97C90]">
                        OUR JOURNEY
                    </p>

                    <h1 className="mt-5  text-6xl">
                        Every Memory
                        <br />
                        Has A Heartbeat
                    </h1>

                </div>

                <div className="mt-28 space-y-40">

                    {timeline.map((item, index) => (
                        <TimelineCard
                            key={item.id}
                            item={item}
                            reverse={index % 2 === 1}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}