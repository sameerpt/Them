"use client";

export default function FloatingParticles() {
    return (
        <>
            <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-white/50 animate-pulse" />

            <div className="absolute right-[20%] top-[35%] h-3 w-3 rounded-full bg-pink-200/50 animate-pulse" />

            <div className="absolute bottom-[15%] left-[35%] h-2 w-2 rounded-full bg-white/40 animate-pulse" />

            <div className="absolute bottom-[30%] right-[10%] h-3 w-3 rounded-full bg-rose-200/40 animate-pulse" />
        </>
    );
}