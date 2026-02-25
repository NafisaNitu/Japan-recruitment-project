import { Target, Eye, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import  Partner1  from "../images/partner1.jpg";
import  Partner2  from "../images/partner2.jpg";
import  Partner3  from "../images/partner3.jpg";
import  Partner4  from "../images/partner4.png";

export function Partnership() {
  const teams = [
    {
      name: "Caregiver Institute of Bangladesh (CIB)",
      image: Partner1,
    },
    {
      name: "Japan Bangladesh Friendship Hospital",
      image: Partner2,
    },
    {
      name: "Yamagata Dhaka Friendship Hospital",
      image: Partner3,
    },
    {
      name: "Starling International Ltd",
      image: Partner4,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Our Partners</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Your trusted partner in global manpower recruitment and deployment
          </p>
        </div>
      </section>


      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our amazing partner they are working us!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teams.map((team, index) => (
                <div key={team.name} className="flex flex-col">
                  <div className="">
                    <img src={team.image} alt="" className="h-[120px]" />
                  </div>
                  <div className="mt-2">
                      <h2 className="xl:text-xl lg:text-lg text-base font-semibold mt-3 mb-1">{team.name}</h2>
                  </div>
                </div>
            ))} 
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">What Sets Us Apart</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="flex-shrink-0 mt-1 text-blue-200" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Part of NAC Group</h3>
                    <p className="text-blue-100">
                      Backed by the established NAC Group with decades of experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="flex-shrink-0 mt-1 text-blue-200" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Ethical & Transparent Practices
                    </h3>
                    <p className="text-blue-100">
                      Commitment to honest dealings with all stakeholders
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="flex-shrink-0 mt-1 text-blue-200" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Skilled & Verified Workforce
                    </h3>
                    <p className="text-blue-100">
                      Rigorous screening and verification of all candidates
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="flex-shrink-0 mt-1 text-blue-200" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      International Compliance
                    </h3>
                    <p className="text-blue-100">
                      Full adherence to government regulations and international standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767122227285-a75dced30c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcxODIyMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="International Business"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
