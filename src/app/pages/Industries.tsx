import {
  Heart,
  Code,
  Wrench,
  HardHat,
  UtensilsCrossed,
  Sprout,
  Factory,
  Truck,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import  Healthcare  from "../images/healthcare.jpg";
import  IT  from "../images/it.webp";
import  Logistics  from "../images/logistics.webp";
import  Hospitality  from "../images/hospitality.webp";
import  Agri  from "../images/agri.jpg";
import  Construction  from "../images/construction.jpg";
import  Engineering  from "../images/engineering.jpeg";
import  Manufacturing  from "../images/manufacturing.webp";

export function Industries() {
  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      description:
        "Supplying nurses, caregivers, medical technicians, and healthcare professionals to hospitals, clinics, and care facilities worldwide.",
      specialties: [
        "Registered Nurses",
        "Licensed Practical Nurses",
        "Caregivers",
        "Medical Technicians",
        "Healthcare Assistants",
        "Physiotherapists",
      ],
      image: Healthcare,
    },
    {
      icon: Code,
      name: "Information Technology",
      description:
        "Providing skilled IT professionals for software development, network administration, and technical support roles.",
      specialties: [
        "Software Developers",
        "Network Engineers",
        "Database Administrators",
        "IT Support Specialists",
        "Web Developers",
        "System Analysts",
      ],
      image: IT,
    },
    {
      icon: Wrench,
      name: "Engineering",
      description:
        "Supplying qualified engineers for infrastructure, industrial, and manufacturing projects.",
      specialties: [
        "Civil Engineers",
        "Mechanical Engineers",
        "Electrical Engineers",
        "Chemical Engineers",
        "Industrial Engineers",
        "Quality Control Engineers",
      ],
      image: Engineering,
    },
    {
      icon: HardHat,
      name: "Construction",
      description:
        "Providing skilled construction workers for building, infrastructure, and development projects.",
      specialties: [
        "Site Supervisors",
        "Heavy Equipment Operators",
        "Masons",
        "Carpenters",
        "Electricians",
        "Plumbers",
      ],
      image: Construction,
    },
    {
      icon: UtensilsCrossed,
      name: "Hospitality",
      description:
        "Supplying hospitality professionals for hotels, restaurants, and service industries.",
      specialties: [
        "Professional Chefs",
        "Hotel Managers",
        "Front Desk Staff",
        "Housekeeping",
        "Restaurant Staff",
        "Bartenders",
      ],
      image: Hospitality,
    },
    {
      icon: Sprout,
      name: "Agriculture",
      description:
        "Providing skilled agricultural workers and farm managers for modern farming operations.",
      specialties: [
        "Farm Managers",
        "Agricultural Workers",
        "Greenhouse Technicians",
        "Livestock Handlers",
        "Agricultural Engineers",
        "Horticulturists",
      ],
      image: Agri,
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description:
        "Supplying production workers, technicians, and supervisors for manufacturing facilities.",
      specialties: [
        "Production Supervisors",
        "Machine Operators",
        "Quality Control Inspectors",
        "Maintenance Technicians",
        "Assembly Workers",
        "Warehouse Staff",
      ],
      image: Manufacturing,
    },
    {
      icon: Truck,
      name: "Logistics",
      description:
        "Providing logistics professionals for supply chain, warehousing, and transportation operations.",
      specialties: [
        "Warehouse Managers",
        "Logistics Coordinators",
        "Supply Chain Analysts",
        "Truck Drivers",
        "Forklift Operators",
        "Inventory Controllers",
      ],
      image: Logistics,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Providing skilled manpower across diverse sectors worldwide
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                    <industry.icon className="text-[#00a651]" size={32} />
                  </div>
                  <h2 className="text-3xl mb-4 text-gray-900">{industry.name}</h2>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Available Positions:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.specialties.map((specialty) => (
                        <div
                          key={specialty}
                          className="flex items-center space-x-2 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-[#00a651] rounded-full" />
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`relative h-96 overflow-hidden rounded-lg shadow-xl border border-gray-200 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Don't See Your Industry?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We work across many other sectors. Contact us to discuss your specific
            manpower requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/for-employers"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Partner with Us
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
