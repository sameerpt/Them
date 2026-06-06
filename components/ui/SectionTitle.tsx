interface Props {
    label: string;
    title: string;
}

export default function SectionTitle({
    label,
    title,
}: Props) {
    return (
        <div className="text-center mb-24">
            <p className="tracking-[8px] uppercase text-[#D97C90] text-sm">
                {label}
            </p>

            <h2 className="mt-5 font-[var(--font-cormorant)] text-5xl md:text-7xl leading-tight">
                {title}
            </h2>
        </div>
    );
}