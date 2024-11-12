import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-900" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">icmi2024@iitj.ac.in</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-900" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">
                      Indian Institute of Technology Jodhpur<br />
                      NH 65, Nagaur Road<br />
                      Karwar, Jodhpur District<br />
                      Rajasthan 342037, India
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-900" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+91 (291) 280 1000</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Conference Venue</h2>
            <Card className="p-6">
              <div className="aspect-video bg-gray-100 mb-4"></div>
              <h3 className="font-semibold mb-2">IIT Jodhpur Campus</h3>
              <p className="text-gray-600">
                The conference will be held at the state-of-the-art facilities of IIT Jodhpur.
                The campus is easily accessible from Jodhpur Airport and Railway Station.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}