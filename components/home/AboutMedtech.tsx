import { Button } from "@/components/ui/button";

export function AboutMedtech() {
  return (
    <div className=" bg-gray-100 text-black py-16 px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-semibold mb-10 text-center text-[#008ad8]">
          WELCOME TO THE 2nd ANNUAL MedTech Conference
        </h2>
        <p className="text-xl text-center mb-10">
          XXnd to XXth 12 20XX | IIT Jodhpur
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Why Attend?</h3>
        <p className="text-lg mb-4">
          A phenomenal pioneer event hosted jointly by the two prestigious institutes of national importance, IIT Jodhpur and AIIMS Jodhpur, focusing on the adoption of newer technologies in the healthcare ecosystem.
        </p>
        <ul className="list-disc pl-6 text-lg mb-6 space-y-2 font-bold">
          <li>Explore the state of the art in Medical Technology.</li>
          <li>
            Witness cutting-edge research presentations and discussions by extraordinary speakers from India and abroad.
          </li>
          <li>
            Participate in the healthcare hackathon, complete with an immersion experience at AIIMS Jodhpur Hospital and IIT Jodhpur's laboratories.
          </li>
        </ul>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            REGISTER HERE
          </Button>
        </div>
      </div>
    </div>
  );
}
