import { Hero } from '@/components/home/Hero';
import { ImportantDates } from '@/components/home/ImportantDates';
import { Topics } from '@/components/home/Topics';
import { Speakers } from '@/components/home/Speakers';
import { CallToAction } from '@/components/home/CallToAction';
import { AboutMedtech } from '@/components/home/AboutMedtech';
import AllEvents from '@/components/home/AllEvents';
// import { AnimatedTestimonialsDemo } from '@/components/home/Events';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <ImportantDates />
      <AboutMedtech/>
    <AllEvents/>
      <Topics />
      <Speakers />
      <CallToAction />
    </main>
  );
}