import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";


export function Hero() {
  return (
    <div className="relative h-[600px] text-white mt-16">
      <div className="absolute inset-0 bg-[url('https://lh4.googleusercontent.com/5yFqyht4z50VqrcSX4SBQvnbGaC_-kzM8kiqsZLUfpqEhFwN-Qdfigi0ZJBhVhJs8Ts5JTH8_KIcqnD7Wmu3DQ=w16383')] bg-cover bg-center opacity-100" />
      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">ICMI 2024</h1>
          <p className="text-2xl border-b-2 mb-6 border-b-blue-300 font-semibold">INDIAN CONFERENCE ON <span className="text-cyan-300">MEDTECH</span> INNOVATIONS</p>
          
          <div className="font-bold text-xl mb-6">
            The exclusive MedTech Conference in India
          </div>
          <div className="font-bold text-xl mb-6">
            <span className="text-cyan-300">ICMI-2024</span> coming to Jodhpur | 22nd to 24th February 2024 
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5  h-5" />
              <span>October 15-19, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>IIT Jodhpur, India</span>
            </div>
          </div>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
}
