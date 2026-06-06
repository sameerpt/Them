import Hero from "@/components/Hero/Hero";
import Letter from "@/components/letter/Letter";
import Scrapbook from "@/components/scrapbook/Scrapbook";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Hero />

      <Letter />

      <Timeline />

      <Scrapbook />
    </main>
  );
}