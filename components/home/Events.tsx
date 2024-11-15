
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { link } from "fs";
import Link from "next/link";
import { title } from "process";




export function AnimatedTestimonialsDemo() {
  const testimonials:any= [
    {
      description:
        "This proposed conference is expected to provide a platform for young minds to bridge the gap between academia and the healthcare industry. All the accepted papers will be published as proceedings of ICMI 2024 with ISBN No.",
      title: "Scientific Paper & Poster Presentations",
      link: <Link href={"https://drive.google.com/file/d/1hQuO5Loc0HaXPGQCDq79HdfnU1eCcIyp/view"}>see for call papers here</Link>,
      src: "/event1.jpg",
    },
    {
      description:
        "The conference features expert sessions from diverse domains in the field. Good interaction with the audience will be encouraged. ",
      title: "Panel Discussions & Expert Talks",
      link:  <Link href={"https://drive.google.com/file/d/1hQuO5Loc0HaXPGQCDq79HdfnU1eCcIyp/view"}>see the Brochure here</Link>,
      src: "/event2.jpg",
    },
    {
      description:
        "A specially crafted event that includes clinical immersion followed by a discussion. An engineer and a doctor will identify a real-life problem and have a discussion on possible solutions. Participants will develop an interdisciplinary approach to address real-world needs.",
      title: "AVINYA: Hackathon with Clinical Immersion",
      link: <Link href={"https://docs.google.com/forms/d/1TY4-QcZhrDOUQSr9ZDu4mPQcW0g2BUNf9pjNuucYem0/viewform?edit_requested=true"}>see the Brochure here</Link>,
      src: "./event3.jpg",
    },
    {
      description:
        "The conference exhibit provides start-ups, companies, or organizations the opportunity to showcase their latest innovations, equipment, products & services to attendees from around the world.",
      title: "Exhibition & Product Demos",
      link: <Link href={"https://drive.google.com/file/d/1A9DfhfF0srOGCrJmI15wO_BR5Rkx1YMU/view"}>see the Brochure here</Link>,
      src: "./event4.jpg",
    },
   
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={false}  />;
}

// 
