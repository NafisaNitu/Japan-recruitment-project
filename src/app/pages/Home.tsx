import { Link } from "react-router";
import {
  Globe,
  Users,
  Shield,
  CheckCircle,
  Award,
  Building2,
  Briefcase,
  Heart,
  Code,
  Wrench,
  UtensilsCrossed,
  HardHat,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import  Image1  from "../images/about.jpg";
import  Banner  from "../images/banner.png";
import  Healthcare  from "../images/healthcare.jpg";
import  IT  from "../images/it.webp";
import  Logistics  from "../images/logistics.webp";
import  Hospitality  from "../images/hospitality.webp";
import  Agri  from "../images/agri.jpg";
import  Construction  from "../images/construction.jpg";
import  Engineering  from "../images/engineering.jpeg";
import  Manufacturing  from "../images/manufacturing.webp";

export function Home() {
  const services = [
    {
      icon: Globe,
      title: "International Recruitment & Placement",
      description: "End-to-end recruitment solutions for global employers",
    },
    {
      icon: Users,
      title: "Overseas Manpower Deployment",
      description: "Skilled workforce deployment to international markets",
    },
    {
      icon: Heart,
      title: "Healthcare Workforce Supply",
      description: "Nurses, caregivers, and medical professionals",
    },
    {
      icon: Wrench,
      title: "Technical & Engineering Recruitment",
      description: "Engineers, technicians, and skilled tradespeople",
    },
    {
      icon: Code,
      title: "IT & Professional Staffing",
      description: "Software developers, IT specialists, and professionals",
    },
    {
      icon: UtensilsCrossed,
      title: "Pre-Departure Orientation & Training",
      description: "Comprehensive preparation for overseas employment",
    },
  ];

  const whyChooseUs = [
    "Part of Established NAC Group",
    "Ethical & Transparent Recruitment",
    "Skilled & Verified Workforce",
    "Strong Industry Network",
    "Compliance with Government Regulations",
    "Dedicated Client & Candidate Support",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black">
      {/* <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white"> */}
        <div className="absolute inset-0 opacity-80">
          
          <ImageWithFallback
            src={Banner}
            alt="Professional Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6">
              Connecting Skilled Bangladeshi Talent to Global Opportunities
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              NAC Global Employment Services Limited is a trusted manpower recruitment
              and deployment company under the NAC Group, dedicated to supplying skilled,
              semi-skilled, and professional workforce worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className=" bg-[#00a651] text-white hover:bg-[#03b559]">
              {/* <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100"> */}
                <Link to="/for-employers">Hire Talent</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-[#00a651] hover:bg-[#00a651] hover:text-white">
                <Link to="/for-candidates">Apply for Jobs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-[#00a651] hover:bg-[#00a651] hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">About NAC Global Employment Services</h2>
              <p className="text-gray-600 mb-4">
                NAC Global Employment Services Limited is one of the sister concerns of
                NAC Group. We specialize in recruitment, placement, deployment, and
                overseas employment of skilled and professional manpower across various
                industries including healthcare, IT, construction, hospitality,
                engineering, and more.
              </p>
              <p className="text-gray-600 mb-6">
                We are committed to ethical recruitment, transparency, and international
                compliance standards.
              </p>
              <Button asChild className="hover:bg-[#444343]">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img src={Image1} alt="" className="w-full h-full object-cover" />
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1767122227285-a75dced30c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcxODIyMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global Business"
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive recruitment and deployment solutions for businesses worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <service.icon className="text-[#00a651]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose NAC */}
      <section className="py-16 bg-[#00a651] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose NAC?</h2>
            <p className="max-w-2xl mx-auto">
              Your trusted partner for global manpower solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-start space-x-3">
                <CheckCircle className="flex-shrink-0" size={24} />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Providing skilled manpower across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, name: "Healthcare", image: Healthcare  },
              { icon: Code, name: "IT", image: IT },
              { icon: Wrench, name: "Engineering", image: Engineering },
              { icon: HardHat, name: "Construction", image: Construction },
              { icon: UtensilsCrossed, name: "Hospitality", image: Hospitality },
              { icon: Building2, name: "Agriculture", image: Agri },
              { icon: Briefcase, name: "Manufacturing", image: Manufacturing },
              { icon: Shield, name: "Logistics", image: Logistics },
            ].map((industry) => (
              <Card key={industry.name} className="overflow-hidden hover:shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-44">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <industry.icon size={20} className="mb-1" />
                    <p className="font-semibold text-sm">{industry.name}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/industries">Explore All Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="p-8">
                <Building2 size={48} className="mb-4" />
                <h3 className="text-2xl mb-4">For Employers</h3>
                <p className="mb-6">
                  Access skilled, verified workforce for your business. Fast recruitment
                  with ethical practices.
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/for-employers">Partner with Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 text-white border-0">
              <CardContent className="p-8">
                <Briefcase size={48} className="mb-4" />
                <h3 className="text-2xl mb-4">For Candidates</h3>
                <p className="mb-6">
                  Work abroad with confidence. We guide you through every step with
                  transparency and support.
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/for-candidates">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}
