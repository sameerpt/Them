import Hero from "@/components/Hero/Hero";
import Scrapbook from "@/components/scrapbook/Scrapbook";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Hero />

      <Timeline />

      <Scrapbook />
    </main>
  );
}