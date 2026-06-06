export default function BlurBackground() {
    return (
        <>
            <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-pink-300/20 blur-[120px]" />

            <div className="absolute right-[-100px] bottom-[-50px] h-96 w-96 rounded-full bg-rose-200/20 blur-[140px]" />

            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />
        </>
    );
}