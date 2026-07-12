"use client";

import Polaroid from "./Polaroid";
import { scrapbook } from "@/data/scrapbook";

export default function Scrapbook() {
    return (
        <section className="flex items-center justify-center py-6">

            <div className="mx-auto max-w-7xl flex gap-15 flex-col">

                <div className="text-center">

                    <p className="tracking-[6px] italic uppercase text-[#D97C90]">
                        MEMORIES
                    </p>

                    <h1 className="mt-4 font-serif italic max-w- text-5xl">
                        The Moments <br />
                        We Never Want To Forget
                    </h1>

                </div>

                <div className="mt-3 flex flex-wrap justify-center gap-14">

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