import { Building2, Pill, Sprout, Code, Heart, Home } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import  Image1  from "../images/nac.webp";
import  Image2  from "../images/one-pharma.jpg";
import  Image3  from "../images/nac2.webp";
import  Image4  from "../images/one-ict.png";
import  Image5  from "../images/no-chinta.webp";
import  Image6  from "../images/cgdl.jpeg";

export function GroupProfile() {
  const companies = [
    {
      icon: Pill,
      name: "NAC Pharmaceutical Industry",
      description:
        "Leading pharmaceutical company dedicated to manufacturing high-quality medicines and healthcare products.",
      services: [
        "Generic and branded medicines",
        "Healthcare supplements",
        "Medical equipment",
        "Quality pharmaceutical research",
      ],
      image: Image2,
    },
    {
      icon: Sprout,
      name: "NAC Agricare Industry",
      description:
        "Modern agricultural solutions company focusing on sustainable farming and crop production.",
      services: [
        "Agricultural products and solutions",
        "Crop protection products",
        "Organic farming solutions",
        "Agricultural technology",
      ],
      image: Image3
    },
    {
      icon: Code,
      name: "NAC ICT Company",
      description:
        "Information and Communication Technology solutions provider offering cutting-edge digital services.",
      services: [
        "Software development",
        "IT consulting services",
        "Digital transformation",
        "Technology solutions",
      ],
      image: Image4,
    },
    {
      icon: Heart,
      name: "NAC Caregiving Services - No Chinta",
      description:
        "Professional caregiving services providing compassionate care for elderly and individuals with special needs.",
      services: [
        "Elderly care services",
        "Home healthcare",
        "Professional caregivers",
        "24/7 care support",
      ],
      image: Image5,
    },
    {
      icon: Home,
      name: "NAC Housing Company",
      description:
        "Real estate development company focused on creating quality residential and commercial properties.",
      services: [
        "Residential development",
        "Commercial properties",
        "Property management",
        "Real estate consulting",
      ],
      image: Image6,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Building2 size={48} />
            <h1 className="text-4xl md:text-5xl">NAC Group </h1>
          </div>
          <p className="text-xl text-gray-100 max-w-3xl">
            A diversified business conglomerate with presence across multiple industries
          </p>
        </div>
      </section>

      {/* Group Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">About NAC Group </h2>
              <p className="text-gray-600 mb-4">
                NAC Group is a well-established business conglomerate in Bangladesh with a
                diverse portfolio spanning across pharmaceuticals, agriculture, information
                technology, healthcare services, real estate, and international manpower
                recruitment.
              </p>
              <p className="text-gray-600 mb-4">
                Founded with a vision to contribute to Bangladesh's economic growth and
                social development, NAC Group has consistently delivered quality products
                and services across all its business verticals.
              </p>
              <p className="text-gray-600">
                With a strong commitment to excellence, innovation, and ethical business
                practices, NAC Group continues to expand its footprint both nationally and
                internationally, creating value for stakeholders and opportunities for the
                community.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img src={Image1} alt="Banner" />
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1749310726959-d8fccfef7ee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzE3ODAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="NAC Group"
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Our Sister Concerns
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A diversified portfolio of companies serving various sectors
            </p>
          </div>
          <div className="space-y-12">
            {companies.map((company, index) => (
              <Card
                key={company.name}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative h-64 lg:h-auto ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <ImageWithFallback
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent
                    className={`p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                      <company.icon className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-2xl mb-3 text-gray-900">{company.name}</h3>
                    <p className="text-gray-600 mb-6">{company.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Services & Products:
                      </h4>
                      <ul className="space-y-2">
                        {company.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start space-x-2 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Group Strength */}
      <section className="py-16 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Strength and Diversification</h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              A proven track record of excellence across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Diversified Portfolio",
                desc: "Multiple business verticals serving different sectors",
              },
              {
                title: "Experienced Management",
                desc: "Led by industry experts with proven track records",
              },
              {
                title: "Quality Commitment",
                desc: "Unwavering dedication to excellence in all operations",
              },
              {
                title: "Social Responsibility",
                desc: "Contributing to community development and growth",
              },
            ].map((item) => (
              <Card key={item.title} className="hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl mb-4">Vision</h2>
                <p className="text-lg text-blue-100">
                  To be a leading diversified business group in Bangladesh and the region,
                  creating sustainable value through innovation, quality, and ethical
                  business practices while contributing to national development and global
                  competitiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl mb-4">Mission</h2>
                <p className="text-lg text-gray-300">
                  To deliver excellence across all our business verticals, foster
                  innovation, maintain the highest standards of quality and ethics, create
                  employment opportunities, and contribute positively to society and the
                  economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}
