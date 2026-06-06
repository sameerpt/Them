"use client";

import { motion } from "framer-motion";

export default function Letter() {
  return (
    <section
      id="letter"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
        className="max-w-3xl rounded-3xl bg-white p-10 shadow-2xl"
      >
        <h2 className="font-[var(--font-dancing)] text-5xl text-[#D97C90]">
          Dear Love,
        </h2>

        <div className="mt-8 space-y-6 text-xl leading-10 text-[#46363C]">
          <p>
            Phones save photos.
          </p>

          <p>
            Hearts save memories.
          </p>

          <p>
            So I built a place where both can live forever.
          </p>

          <p>
            Every picture here reminds me that ordinary days became extraordinary because you were in them.
          </p>

          <p className="font-[var(--font-dancing)] text-4xl pt-6">
            ❤️ Yours, Always
          </p>
        </div>
      </motion.div>
    </section>
  );
}