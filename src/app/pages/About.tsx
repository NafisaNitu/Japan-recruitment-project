import { Target, Eye, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import  Healthcare  from "../images/healthcare.jpg";
import  Team1  from "../images/team1.jpg";
import  Team2  from "../images/team2.webp";
import  Team3  from "../images/team3.webp";
import  Team4  from "../images/team4.jpg";
import  Team5  from "../images/team5.webp";
import  Team6  from "../images/team6.jpg";
import  Team7  from "../images/team7.webp";

export function About() {
  const values = [
    {
      title: "Integrity",
      description: "Honest and ethical practices in all our dealings",
    },
    {
      title: "Professionalism",
      description: "Maintaining high standards in recruitment and service",
    },
    {
      title: "Transparency",
      description: "Clear communication with all stakeholders",
    },
    {
      title: "Commitment",
      description: "Dedicated to fulfilling our promises",
    },
    {
      title: "Accountability",
      description: "Taking responsibility for our actions and outcomes",
    },
  ];
  const teams = [
    {
      name: "Abdul Rahman",
      position: "Chairman",
      image: Team1,
    },
    {
      name: "Mijanur Rahman",
      position: "Managing Director",
      image: Team2,
    },
    {
      name: "Tomal Mirja",
      position: "Director",
      image: Team3,
    },
    {
      name: "Riya Khan",
      position: "Director HR",
      image: Team4,
    },
    {
      name: "Abu basar",
      position: "Visa Expert",
      image: Team5,
    },
    {
      name: "Sadia Islam",
      position: "Manager",
      image: Team6,
    },
    {
      name: "Jibon Islam",
      position: "Mentor",
      image: Team7,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">About Us</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Your trusted partner in global manpower recruitment and deployment
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">Company Overview</h2>
              <p className="text-gray-600 mb-4">
                NAC Global Employment Services Limited is a licensed manpower recruitment
                company in Bangladesh operating under the umbrella of NAC Group. Our core
                objective is to recruit, train, deploy, and export skilled, semi-skilled,
                and professional manpower to global markets including USA, Canada, Middle
                East, Europe, and other regions.
              </p>
              <p className="text-gray-600 mb-4">
                We bridge the gap between international employers and competent Bangladeshi
                professionals, ensuring both parties benefit from mutually rewarding
                partnerships.
              </p>
              <p className="text-gray-600">
                With years of experience and a strong network of international partners, we
                have successfully placed thousands of skilled workers in various industries
                worldwide.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlfGVufDF8fHx8MTc3MTgyMjM1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="shadow border-gray-100 text-black">
              <CardContent className="p-8">
                <div className="text-[#00a651] bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye size={32} />
                </div>
                <h2 className="text-3xl mb-4">Our Vision</h2>
                <p className="text-lg text-black">
                  To become a globally recognized manpower recruitment company by
                  delivering reliable, ethical, and quality workforce solutions that drive
                  success for businesses and create opportunities for professionals
                  worldwide.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="shadow border-gray-100 text-black">
              <CardContent className="p-8">
                <div className="text-[#00a651] bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl mb-4">Our Mission</h2>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                    <span>To ensure ethical recruitment practices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                    <span>
                      To enhance global employment opportunities for Bangladeshi
                      professionals
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                    <span>To build long-term partnerships with international employers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                    <span>To ensure compliance with international labor standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-[#00a651] bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our amazing team that is ready to take your project to the next level!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teams.map((team, index) => (
                <div key={team.name} className="flex flex-col items-center justify-center">
                  <div className="w-[180px] h-[180px] rounded-full">
                    <img src={team.image} alt="" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="mt-2">
                      <h2 className="xl:text-xl lg:text-lg text-base font-semibold mt-3 mb-1">{team.name}</h2>
                      <p className="xl:text-base lg:text-base text-sm text-gray-600 font-medium mb-2">{team.position}</p>
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
