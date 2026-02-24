import { Globe, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function TargetMarkets() {
  const markets = [
    {
      region: "North America",
      countries: [
        {
          name: "United States of America",
          flag: "🇺🇸",
          description:
            "Major market for healthcare professionals, IT specialists, and skilled workers. Strong demand for nurses, caregivers, and technical professionals.",
          opportunities: [
            "Healthcare sector (Nurses, Caregivers)",
            "IT and Software Development",
            "Engineering professionals",
            "Hospitality and service industry",
          ],
        },
        {
          name: "Canada",
          flag: "🇨🇦",
          description:
            "Growing demand for skilled workers across multiple sectors. Active immigration programs for qualified professionals.",
          opportunities: [
            "Healthcare workers (RN, LPN, Caregivers)",
            "Construction and trades",
            "IT professionals",
            "Agricultural workers",
          ],
        },
      ],
    },
    {
      region: "Middle East",
      countries: [
        {
          name: "Saudi Arabia",
          flag: "🇸🇦",
          description:
            "Large-scale infrastructure projects and expanding economy requiring skilled workforce.",
          opportunities: [
            "Construction workers",
            "Engineers (Civil, Mechanical, Electrical)",
            "Healthcare professionals",
            "Hospitality staff",
          ],
        },
        {
          name: "United Arab Emirates",
          flag: "🇦🇪",
          description:
            "Dynamic economy with diverse opportunities in construction, hospitality, and services.",
          opportunities: [
            "Construction and engineering",
            "Hospitality and tourism",
            "IT professionals",
            "Retail and service industry",
          ],
        },
        {
          name: "Qatar",
          flag: "🇶🇦",
          description:
            "Ongoing development projects and World Cup legacy requiring skilled manpower.",
          opportunities: [
            "Construction workers",
            "Engineers and technicians",
            "Hospitality professionals",
            "Healthcare workers",
          ],
        },
        {
          name: "Oman",
          flag: "🇴🇲",
          description:
            "Growing economy with opportunities in various sectors including oil & gas.",
          opportunities: [
            "Oil & gas professionals",
            "Construction workers",
            "Healthcare staff",
            "Technical specialists",
          ],
        },
      ],
    },
    {
      region: "Europe",
      countries: [
        {
          name: "United Kingdom",
          flag: "UK",
          description:
            "Strong demand for healthcare professionals and skilled workers post-Brexit.",
          opportunities: [
            "Healthcare workers (Nurses, Care staff)",
            "IT professionals",
            "Engineering specialists",
            "Hospitality workers",
          ],
        },
        {
          name: "Other European Countries",
          flag: "🇪🇺",
          description:
            "Growing opportunities across various European nations for skilled professionals.",
          opportunities: [
            "Healthcare sector",
            "IT and technology",
            "Engineering and construction",
            "Agricultural workers",
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Globe size={48} />
            <h1 className="text-4xl md:text-5xl">Target Markets</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-3xl">
            We deploy skilled Bangladeshi workforce to major markets across the globe
          </p>
        </div>
      </section>

      {/* Markets Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Global Reach, Local Expertise
              </h2>
              <p className="text-gray-600 mb-4">
                NAC Global Employment Services has established strong partnerships with
                employers across multiple continents. Our extensive network and
                understanding of local regulations ensure smooth deployment of workforce to
                international markets.
              </p>
              <p className="text-gray-600 mb-6">
                We maintain compliance with destination country regulations and ensure all
                necessary documentation and certifications are in place before deployment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    Established partnerships in target markets
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    Full regulatory compliance support
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    Ongoing support for deployed workers
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767122227285-a75dced30c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcxODIyMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global Business"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Markets Detail */}
          <div className="space-y-12">
            {markets.map((market) => (
              <div key={market.region}>
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="text-green-600" size={32} />
                  <h2 className="text-3xl text-gray-900">{market.region}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {market.countries.map((country) => (
                    <Card key={country.name} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-4xl">{country.flag}</span>
                          <h3 className="text-xl text-gray-900">{country.name}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{country.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Key Opportunities:
                          </h4>
                          <ul className="space-y-2">
                            {country.opportunities.map((opportunity) => (
                              <li
                                key={opportunity}
                                className="flex items-start space-x-2 text-gray-700 text-sm"
                              >
                                <CheckCircle
                                  className="text-green-600 flex-shrink-0 mt-0.5"
                                  size={16}
                                />
                                <span>{opportunity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Regulatory Compliance & Partnerships
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We ensure full compliance with both Bangladesh government regulations and
              destination country requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 text-[#00a651] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl mb-2">Bangladesh Government</h3>
                <p className="text-gray-600 text-sm">
                  Licensed by relevant authorities with full BMET compliance
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 text-[#00a651] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} />
                </div>
                <h3 className="text-xl mb-2">International Standards</h3>
                <p className="text-gray-600 text-sm">
                  Adherence to ILO conventions and destination country labor laws
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 text-[#00a651] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl mb-2">Embassy Partnerships</h3>
                <p className="text-gray-600 text-sm">
                  Strong relationships with embassies for visa processing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Interested in Other Markets?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We are continuously expanding our network. Contact us to discuss opportunities
            in other regions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
