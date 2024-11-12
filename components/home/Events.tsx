// @ts-nocheck
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Link from "next/link";




export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      description:
        "This proposed conference is expected to provide a platform for young minds to bridge the gap between academia and the healthcare industry. All the accepted papers will be published as proceedings of ICMI 2024 with ISBN No.",
      title: "Scientific Paper & Poster Presentations",
      link: <Link href={"https://drive.google.com/file/d/1hQuO5Loc0HaXPGQCDq79HdfnU1eCcIyp/view"}>see for call papers here</Link>,
      src: "https://lh5.googleusercontent.com/ACq_VK2u6R0456nj-SJ05W0uoVhllXHxMoxnciugdtbKodwFJ9_sKWjnGbxqDatQG_VPh2Gsb-FCR8CVK_ScliBasK0CFfXT87HPZe1c0oCmJ-EhNTuxErHM1KcCaTNe0w=w1280",
    },
    {
      description:
        "The conference features expert sessions from diverse domains in the field. Good interaction with the audience will be encouraged. ",
      title: "Panel Discussions & Expert Talks",
      link:  <Link href={"https://drive.google.com/file/d/1hQuO5Loc0HaXPGQCDq79HdfnU1eCcIyp/view"}>see the Brochure here</Link>,
      src: "https://lh4.googleusercontent.com/kJJvH4gl5QEFEh6VQgMsc2VmY-q7YqRZ_o2MqwVII3mCIHbDqb_d1cXhGxk4ApChNJtiyCQggxHErmbj5WyEG4HjItkbpLfxrUNF3YrhZx9WKP7rTjEevfs3BJQJ-KdoKw=w1280",
    },
    {
      description:
        "A specially crafted event that includes clinical immersion followed by a discussion. An engineer and a doctor will identify a real-life problem and have a discussion on possible solutions. Participants will develop an interdisciplinary approach to address real-world needs.",
      title: "AVINYA: Hackathon with Clinical Immersion",
      link: <Link href={"https://docs.google.com/forms/d/1TY4-QcZhrDOUQSr9ZDu4mPQcW0g2BUNf9pjNuucYem0/viewform?edit_requested=true"}>see the Brochure here</Link>,
      src: "https://lh6.googleusercontent.com/CYEs3qgLkeqESDFTAo6Johr8cMZehWvB7kikyazLXJ7F3K7TpytvoUDw5NtzcUMhqsaBt0WleBLEGRCEnBhVfHieaAxgeth4oDCc9U1_42kwEukheH5w-xMnRDWtoGjhDA=w1280",
    },
    {
      description:
        "The conference exhibit provides start-ups, companies, or organizations the opportunity to showcase their latest innovations, equipment, products & services to attendees from around the world.",
      name: "Exhibition & Product Demos",
      designation: <Link href={"https://drive.google.com/file/d/1A9DfhfF0srOGCrJmI15wO_BR5Rkx1YMU/view"}>see the Brochure here</Link>,
      src: "https://lh3.googleusercontent.com/DCLTCxylYp629N94QC-dSDy5mLq8l4ecUNT2MUCBA_9jKg6CVcSY3qmtH4KYq1s8Sn6aLjlurS6PfVURzujkXXeQohy2y5XDVARZbsEXfLq-vmjPAe_lMm9ErxqED9B6NA=w1280",
    },
   
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true}  />;
}

// 
