import { Shield, Award, FileCheck, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import  Image1  from "../images/nac.webp";

export function Compliance() {
  const licenses = [
    {
      title: "Government License",
      number: "RL-XXXX/2023",
      issuer: "Ministry of Expatriates' Welfare and Overseas Employment",
      status: "Active",
    },
    {
      title: "Trade License",
      number: "TL-XXXXXX",
      issuer: "Dhaka City Corporation",
      status: "Active",
    },
    {
      title: "BMET Registration",
      number: "BMET-XXXXX",
      issuer: "Bureau of Manpower, Employment and Training",
      status: "Active",
    },
  ];

  const memberships = [
    "Member of BAIRA (Bangladesh Association of International Recruiting Agencies)",
    "Registered with Ministry of Expatriates' Welfare and Overseas Employment",
    "Compliance with ILO (International Labour Organization) Standards",
    "Adherence to Bangladesh Labour Act 2006",
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      status: "Certified",
    },
    {
      title: "Ethical Recruitment",
      description: "Compliance with international ethical recruitment standards",
      status: "Verified",
    },
    {
      title: "Government Compliance",
      description: "Full compliance with Bangladesh government regulations",
      status: "Active",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield size={48} />
            <h1 className="text-4xl md:text-5xl">Compliance & License</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-3xl">
            Fully licensed and compliant with all government regulations and international
            standards
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Our Commitment to Compliance
              </h2>
              <p className="text-gray-600 mb-4">
                NAC Global Employment Services Limited operates with full transparency and
                in strict compliance with all relevant laws and regulations. We are
                committed to ethical recruitment practices and maintaining the highest
                standards of professional conduct.
              </p>
              <p className="text-gray-600 mb-6">
                Our licenses and certifications demonstrate our commitment to legal
                operations and ethical treatment of both clients and candidates.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    Licensed by Bangladesh government authorities
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    Adherence to international labor standards
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    Ethical recruitment with zero exploitation
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    Transparent processes with no hidden costs
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src={Image1}
                alt="Corporate Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Licenses & Registrations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All required licenses and registrations for legal manpower recruitment
              operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenses.map((license) => (
              <Card key={license.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                    <FileCheck className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{license.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">License Number:</span>
                      <p className="text-gray-900 font-mono">{license.number}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Issued By:</span>
                      <p className="text-gray-700">{license.issuer}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {license.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Memberships & Affiliations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Active membership in professional bodies and associations
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {memberships.map((membership) => (
                    <div key={membership} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{membership}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quality and compliance certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{cert.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{cert.description}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {cert.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">International Compliance</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We ensure compliance with destination country regulations and international
              labor standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "ILO Standards",
                desc: "Compliance with International Labour Organization conventions",
              },
              {
                title: "Destination Laws",
                desc: "Adherence to target country employment regulations",
              },
              {
                title: "Worker Protection",
                desc: "Ensuring rights and protection of deployed workers",
              },
              {
                title: "Ethical Practices",
                desc: "Zero tolerance for exploitation or unethical conduct",
              },
            ].map((item) => (
              <Card key={item.title} className="bg-blue-700 border-blue-500 text-white">
                <CardContent className="p-6 text-center">
                  <Shield className="mx-auto mb-3" size={32} />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Document Verification */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Verify Our Credentials
          </h2>
          <p className="text-gray-600 mb-8">
            All our licenses and certifications can be verified with the respective
            authorities. Contact us to view official documents or for any verification
            inquiries.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact for Verification
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
