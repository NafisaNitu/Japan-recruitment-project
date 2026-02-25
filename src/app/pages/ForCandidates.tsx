import { useState } from "react";
import {
  Briefcase,
  CheckCircle,
  FileCheck,
  GraduationCap,
  Plane,
  UserCheck,
  Upload,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ForCandidates() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    education: "",
    experience: "",
    position: "",
    nid: "",
    language: "",
    preferredCountry: "",
    skills: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your application! We will review your CV and contact you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
      education: "",
      experience: "",
      position: "",
      nid: "",
      language: "",
      preferredCountry: "",
      skills: "",
    });
  };

  const processSteps = [
    {
      icon: UserCheck,
      title: "Registration",
      description: "Submit your CV and complete registration form",
    },
    {
      icon: GraduationCap,
      title: "Skill Assessment",
      description: "Evaluation of your qualifications and experience",
    },
    {
      icon: CheckCircle,
      title: "Interview",
      description: "Interview with potential employers",
    },
    {
      icon: FileCheck,
      title: "Medical Test",
      description: "Required medical examination and documentation",
    },
    {
      icon: FileCheck,
      title: "Visa Processing",
      description: "We handle all visa and documentation requirements",
    },
    {
      icon: Plane,
      title: "Pre-Departure Orientation",
      description: "Training and preparation before deployment",
    },
  ];

  const benefits = [
    "Transparent and ethical recruitment process",
    "No hidden fees or surprise charges",
    "Assistance with visa and documentation",
    "Pre-departure orientation programs",
    "Ongoing support after deployment",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Briefcase size={48} />
            <h1 className="text-4xl md:text-5xl">For Candidates</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-3xl">
            We guide candidates throughout the recruitment process with transparency and integrity.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Work Abroad with Confidence
              </h2>
              <p className="text-gray-600 mb-6">
                NAC Global Employment Services is committed to helping Bangladeshi
                professionals find rewarding career opportunities abroad. We ensure a
                transparent, ethical, and supportive recruitment process from start to
                finish.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start space-x-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767122227285-a75dced30c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcxODIyMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global Opportunities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Recruitment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A clear, step-by-step journey to your international career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-green-600" size={28} />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Opportunities */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Available Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We recruit for various positions across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Healthcare",
                positions: ["Nurses", "Caregivers", "Medical Technicians"],
                image: "https://images.unsplash.com/photo-1758575514487-0390fcacc339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbnVyc2VzJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NzE4MjIzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                category: "Engineering",
                positions: ["Civil Engineers", "Electricians", "Technicians"],
                image: "https://images.unsplash.com/photo-1706581324170-d847716c4512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcnMlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc3MTcxODcyOXww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                category: "IT Professionals",
                positions: ["Developers", "Network Engineers", "IT Support"],
                image: "https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGVuZ2luZWVycyUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzcxODIyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                category: "Hospitality",
                positions: ["Chefs", "Hotel Staff", "Restaurant Workers"],
                image: "https://images.unsplash.com/photo-1767257630215-0579fbd9aeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbGl0eSUyMGhvdGVsJTIwc3RhZmYlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MTgyMjM1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((category) => (
              <Card key={category.category} className="overflow-hidden">
                <div className="relative h-40">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-semibold mb-1">{category.category}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <ul className="space-y-1 text-sm text-gray-600">
                    {category.positions.map((position) => (
                      <li key={position} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span>{position}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CV Submission Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Submit Your Application
            </h2>
            <p className="text-gray-600">
              Fill out the form below to apply for international job opportunities
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="mb-2">Full Name *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="mb-2">Phone Number *</Label>
                    <Input
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth" className="mb-2">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        setFormData({ ...formData, dateOfBirth: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="mb-2">Current Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Your current address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="education" className="mb-2">Highest Education *</Label>
                    <Input
                      id="education"
                      required
                      value={formData.education}
                      onChange={(e) =>
                        setFormData({ ...formData, education: e.target.value })
                      }
                      placeholder="Your Highest Education"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience" className="mb-2">Years of Experience *</Label>
                    <Input
                      id="experience"
                      required
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      placeholder="Your Experience years"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="position" className="mb-2">Desired Position *</Label>
                    <Input
                      id="position"
                      required
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      placeholder="Your desired position"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredCountry" className="mb-2">Preferred Country *</Label>
                    <Input
                      id="preferredCountry"
                      required
                      value={formData.preferredCountry}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredCountry: e.target.value })
                      }
                      placeholder="Your Preferred Country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nid" className="mb-2">NID Number *</Label>
                    <Input
                      id="nid"
                      required
                      value={formData.nid}
                      onChange={(e) =>
                        setFormData({ ...formData, nid: e.target.value })
                      }
                      placeholder="Your NID Number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="language" className="mb-2">Language Proficiency *</Label>
                    <Input
                      id="language"
                      required
                      value={formData.language}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                      placeholder="Your Language Proficiency"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="skills" className="mb-2">Skills & Qualifications</Label>
                  <Textarea
                    id="skills"
                    rows={4}
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="List your skills, certifications, and relevant qualifications"
                  />
                </div>

                <div>
                  <Label htmlFor="cvUpload" className="mb-2">Upload CV/Resume *</Label>
                  <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors cursor-pointer">
                    <div className="text-center">
                      <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our terms and conditions. We will
                  review your application and contact you if there is a suitable
                  opportunity.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Information */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl mb-4">Important Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-blue-700 border-blue-500 text-white">
              <CardContent className="p-6 text-center">
                <CheckCircle className="mx-auto mb-3" size={32} />
                <h3 className="text-lg mb-2">No Advance Fees</h3>
                <p className="text-blue-200 text-sm">
                  We do not charge any upfront fees for registration or CV submission
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-700 border-blue-500 text-white">
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto mb-3" size={32} />
                <h3 className="text-lg mb-2">Ethical Recruitment</h3>
                <p className="text-blue-200 text-sm">
                  Full transparency in the recruitment process with no hidden charges
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-700 border-blue-500 text-white">
              <CardContent className="p-6 text-center">
                <FileCheck className="mx-auto mb-3" size={32} />
                <h3 className="text-lg mb-2">Legal Support</h3>
                <p className="text-blue-200 text-sm">
                  Complete assistance with documentation and visa processing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}