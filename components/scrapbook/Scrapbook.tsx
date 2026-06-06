"use client";

import Polaroid from "./Polaroid";
import { scrapbook } from "@/data/scrapbook";

export default function Scrapbook() {
    return (
        <section className="relative py-40">

            <div className="mx-auto max-w-7xl">

                <div className="text-center">

                    <p className="tracking-[6px] uppercase text-[#D97C90]">
                        MEMORIES
                    </p>

                    <h1 className="mt-5 font-[var(--font-cormorant)] text-6xl">
                        The Moments
                        <br />
                        We Never Want To Forget
                    </h1>

                </div>

                <div className="mt-24 flex flex-wrap justify-center gap-14">

                    {scrapbook.map((item) => (
                        <Polaroid
                            key={item.id}
                            image={item.image}
                            caption={item.caption}
                            rotation={item.rotation}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}