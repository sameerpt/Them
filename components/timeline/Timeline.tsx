"use client";

import { timeline } from "@/data/timeline";
import TimelineCard from "./TimelineCard";

export default function Timeline() {
    return (
        <section className="relative py-15 md:py-26">

            <div className="mx-auto max-w-7xl px-6">


                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="inline-block uppercase tracking-[6px] text-[#D97C90]">
                        Our Journey
                    </span>

                    <h2 className="mt-3 font-serif italic text-5xl leading-none">
                        Every Memory
                        Has  <br /> A Heartbeat
                       
                    </h2>

                </div>

                <div className="space-y-20">
                    {timeline.map((item, index) => (
                        <TimelineCard
                            key={item.id}
                            item={item}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}