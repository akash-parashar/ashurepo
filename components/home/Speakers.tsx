import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Speakers() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Keynote Speakers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <Users className="w-20 h-20 text-gray-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-600">Distinguished Professor</p>
              <p className="text-gray-500">University TBA</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}