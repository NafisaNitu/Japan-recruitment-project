import { useState } from "react";
import {
  Building2,
  CheckCircle,
  Clock,
  Shield,
  Users,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ForEmployers() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    positions: "",
    quantity: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      country: "",
      industry: "",
      positions: "",
      quantity: "",
      requirements: "",
    });
  };

  const benefits = [
    {
      icon: Users,
      title: "Access to Skilled & Verified Workforce",
      description: "Pre-screened and qualified candidates ready for deployment",
    },
    {
      icon: Clock,
      title: "Fast & Efficient Recruitment Process",
      description: "Streamlined procedures to meet your urgent staffing needs",
    },
    {
      icon: Shield,
      title: "Ethical & Legal Compliance",
      description: "Full adherence to international labor standards and regulations",
    },
    {
      icon: FileCheck,
      title: "Background Verification",
      description: "Thorough screening and credential verification of all candidates",
    },
    {
      icon: CheckCircle,
      title: "Pre-Deployment Training",
      description: "Orientation and skill enhancement programs before deployment",
    },
    {
      icon: Building2,
      title: "Ongoing Support",
      description: "Continued assistance after deployment to ensure smooth integration",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Employer Requirement Submission",
      description: "Share your workforce needs and job specifications",
    },
    {
      step: "02",
      title: "Candidate Sourcing",
      description: "We identify and recruit suitable candidates from our database",
    },
    {
      step: "03",
      title: "Screening & Interview",
      description: "Rigorous evaluation and interview process",
    },
    {
      step: "04",
      title: "Final Selection",
      description: "You select the best candidates from our shortlist",
    },
    {
      step: "05",
      title: "Documentation & Visa Processing",
      description: "We handle all paperwork and visa processing",
    },
    {
      step: "06",
      title: "Deployment",
      description: "Smooth deployment with pre-departure orientation",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Building2 size={48} />
            <h1 className="text-4xl md:text-5xl">For Employers</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-3xl">
            Partner with us for reliable, skilled workforce solutions tailored to your
            business needs
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Why Partner with NAC?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive recruitment solutions that save you time and
              resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                    <benefit.icon className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Recruitment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined, transparent process from requirement to deployment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={step.step} className="relative">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-3">{step.step}</div>
                  <h3 className="text-xl mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-green-600 hidden lg:block" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlfGVufDF8fHx8MTc3MTgyMjM1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business Meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Industries We Serve
              </h2>
              <p className="text-gray-600 mb-6">
                We supply qualified workforce across multiple sectors:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Healthcare",
                  "Information Technology",
                  "Engineering",
                  "Construction",
                  "Hospitality",
                  "Agriculture",
                  "Manufacturing",
                  "Logistics",
                ].map((industry) => (
                  <div key={industry} className="flex items-center space-x-2">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-6">
                <a href="/industries">View All Industries</a>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Inquiry Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Submit Your Requirement
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will contact you within 24 hours
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={(e) =>
                        setFormData({ ...formData, contactPerson: e.target.value })
                      }
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Country where workers are needed"
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Input
                      id="industry"
                      required
                      value={formData.industry}
                      onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })
                      }
                      placeholder="e.g., Healthcare, Construction"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="positions">Position(s) Required *</Label>
                    <Input
                      id="positions"
                      required
                      value={formData.positions}
                      onChange={(e) =>
                        setFormData({ ...formData, positions: e.target.value })
                      }
                      placeholder="e.g., Nurses, Engineers"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Number of Workers *</Label>
                    <Input
                      id="quantity"
                      required
                      type="number"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      placeholder="e.g., 50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirements">Detailed Requirements</Label>
                  <Textarea
                    id="requirements"
                    rows={5}
                    value={formData.requirements}
                    onChange={(e) =>
                      setFormData({ ...formData, requirements: e.target.value })
                    }
                    placeholder="Please provide details about your requirements, qualifications needed, experience level, etc."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Requirement
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
