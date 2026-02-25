import {
  Globe,
  Heart,
  Wrench,
  Code,
  UtensilsCrossed,
  HardHat,
  FileCheck,
  Users,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import  International  from "../images/international.webp";
import  Healthcare  from "../images/healthcare.jpg";
import  Engineering  from "../images/engineering.jpeg";
import  IT  from "../images/it.webp";
import  Hospitality  from "../images/hospitality.webp";
import  Construction  from "../images/construction.jpg";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "International Recruitment",
      description:
        "We provide end-to-end recruitment solutions including sourcing, screening, interviewing, and shortlisting of candidates according to employer requirements.",
      features: [
        "Candidate sourcing and headhunting",
        "Skills assessment and verification",
        "Interview coordination",
        "Background checks",
        "Final selection support",
      ],
      image: International,
    },
    // {
    //   icon: Heart,
    //   title: "Healthcare Recruitment",
    //   description:
    //     "Specialized healthcare workforce supply with special focus on USA and Canada markets.",
    //   features: [
    //     "Registered Nurses (RN)",
    //     "Licensed Practical Nurses (LPN)",
    //     "Caregivers",
    //     "Medical Technicians",
    //     "Healthcare Assistants",
    //   ],
    //   image: Healthcare,
    // },
    {
      icon: Wrench,
      title: "Technical & Engineering Manpower",
      description:
        "Skilled technical and engineering professionals for construction and industrial projects.",
      features: [
        "Civil Engineers",
        "Mechanical Engineers",
        "Electricians",
        "Plumbers",
        "Technicians",
        "Welders",
      ],
      image: Engineering,
    },
    {
      icon: Code,
      title: "IT & Professional Staffing",
      description:
        "Technology and professional workforce for modern business needs.",
      features: [
        "Software Developers",
        "Network Engineers",
        "IT Support Specialists",
        "Accountants",
        "Office Managers",
      ],
      image: IT,
    },
    {
      icon: UtensilsCrossed,
      title: "Hospitality & Service Industry",
      description:
        "Experienced hospitality professionals for hotels, restaurants, and service industries.",
      features: [
        "Professional Chefs",
        "Hotel Staff",
        "Housekeeping",
        "Restaurant Staff",
        "Front Desk Personnel",
      ],
      image: Hospitality,
    },
    {
      icon: HardHat,
      title: "Construction Workforce",
      description:
        "Skilled construction workers for building and infrastructure projects.",
      features: [
        "Skilled Laborers",
        "Site Supervisors",
        "Heavy Equipment Operators",
        "Masons",
        "Carpenters",
      ],
      image: Construction,
    },
  ];

  const complianceServices = [
    "Documentation Processing",
    "Visa Assistance",
    "Medical Test Coordination",
    "Orientation & Training Programs",
    "Government Compliance Support",
    "Embassy Liaison",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Comprehensive recruitment and deployment solutions for global workforce needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Current Services</h2>
            </div>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="">
                    <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                      <Heart className="text-[#00a651]" size={32} />
                    </div>
                  <h2 className="text-3xl mb-4 text-gray-900">Healthcare Recruitment</h2>
                  <p className="text-gray-600 mb-6">Specialized healthcare workforce supply with special focus on USA and Canada markets.</p>
                  <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-[#00a651] flex-shrink-0"  />
                        <span className="text-gray-700">Registered Nurses (RN)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-[#00a651] flex-shrink-0"  />
                        <span className="text-gray-700">Licensed Practical Nurses (LPN)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-[#00a651] flex-shrink-0"  />
                        <span className="text-gray-700">Caregivers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-[#00a651] flex-shrink-0"  />
                        <span className="text-gray-700">Medical Technicians</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-[#00a651] flex-shrink-0"  />
                        <span className="text-gray-700">Healthcare Assistants</span>
                      </div>
                  </div>
                </div>
                <div
                  className="relative h-96 rounded-lg overflow-hidden shadow-xl border border-gray-200"
                >
                  <img
                    src={Healthcare}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
           
          </div>
          {/* Upcoming services */}

          <div className="space-y-16 mt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Upcoming Services</h2>
            </div>
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                    <service.icon className="text-[#00a651]" size={32} />
                  </div>
                  <h2 className="text-3xl mb-4 text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="text-[#00a651] flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`relative h-96 overflow-hidden rounded-lg shadow-xl border border-gray-200 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Departure & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <FileCheck className="text-[#00a651]" size={32} />
              </div>
              <h2 className="text-3xl mb-4 text-gray-900">
                Pre-Departure & Compliance Support
              </h2>
              <p className="text-gray-600 mb-6">
                We ensure smooth transition for candidates with comprehensive pre-departure
                support and full compliance with government regulations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {complianceServices.map((service) => (
                  <Card key={service} className="border-2 border-green-100">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-[#00a651] flex-shrink-0" size={20} />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlfGVufDF8fHx8MTc3MTgyMjM1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pre-departure Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Service Process</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              A streamlined approach to global recruitment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Requirement Analysis", desc: "Understanding client needs" },
              { step: "02", title: "Candidate Sourcing", desc: "Finding the right talent" },
              { step: "03", title: "Screening & Selection", desc: "Rigorous evaluation process" },
              { step: "04", title: "Deployment", desc: "Smooth transition abroad" },
            ].map((item) => (
              <Card key={item.step} className="bg-blue-700 border-blue-500 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-3">{item.step}</div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
