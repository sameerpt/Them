"use client";

import TimelineCard from "./TimelineCard";
import { timeline } from "@/data/timeline";

export default function Timeline() {
    return (
        <section className="relative py-32 md:py-40">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

                {/* Heading */}

                <div className="mx-auto mb-28 max-w-4xl text-center">
                    <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D97C90]">
                        OUR JOURNEY
                    </p>

                    <h2 className="font-[var(--font-cormorant)] text-5xl leading-none text-[#2A2526] md:text-7xl">
                        Every Memory
                        <br />
                        Has A Heartbeat
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-500">
                        Every picture holds a memory. Every memory tells our story.
                    </p>
                </div>

                {/* Timeline */}

                <div className="space-y-44">
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