import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "NAC Global Employment Services Limited",
        "House #XX, Road #XX, Block X",
        "Dhaka-1000, Bangladesh",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+880 XXX XXXXXX", "+880 XXX XXXXXX (Hotline)"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nacglobal.com", "hr@nacglobal.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: Closed"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Get in touch with us for any inquiries about our services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info) => (
              <Card key={info.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                    <info.icon className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Send us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+880 XXX XXXXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Please describe your inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Visit Our Office</h2>
              <Card className="mb-6">
                <CardContent className="p-0">
                  {/* Google Maps Placeholder */}
                  <div className="w-full h-[465px] bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p className="font-semibold">Google Maps Integration</p>
                      <p className="text-sm mt-1">
                        Embed your office location here
                      </p>
                      <p className="text-xs mt-2 max-w-xs mx-auto">
                        Replace this placeholder with actual Google Maps embed code
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Cards */}
              {/* <div className="space-y-4">
                <Card className="bg-blue-600 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">For Employers</h3>
                    <p className="text-blue-100 mb-3 text-sm">
                      Looking to hire skilled workers? Contact our recruitment team.
                    </p>
                    <Button asChild variant="secondary" size="sm">
                      <a href="/for-employers">Partner with Us</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">For Job Seekers</h3>
                    <p className="text-gray-300 mb-3 text-sm">
                      Ready to work abroad? Submit your application today.
                    </p>
                    <Button asChild variant="secondary" size="sm">
                      <a href="/for-candidates">Apply Now</a>
                    </Button>
                  </CardContent>
                </Card>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp & Social Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6 text-gray-900">Connect With Us</h2>
          <p className="text-gray-600 mb-8">
            Reach out to us through your preferred communication channel
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-green-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-3">Chat with us directly</p>
                <p className="text-blue-600 font-semibold">+880 XXX XXXXXX</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-red-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600 mb-3">Send us an email</p>
                <p className="text-blue-600 font-semibold text-sm">
                  info@nacglobal.com
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hotline</h3>
                <p className="text-sm text-gray-600 mb-3">Call us anytime</p>
                <p className="text-blue-600 font-semibold">+880 XXX XXXXXX</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">For Employers</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      Looking to hire skilled workers? Contact our recruitment team.
                    </p>
                    <Button asChild variant="secondary" size="sm">
                      <a href="/for-employers">Partner with Us</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">For Job Seekers</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      Ready to work abroad? Submit your application today.
                    </p>
                    <Button asChild variant="secondary" size="sm">
                      <a href="/for-candidates">Apply Now</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
        </div>
      </section>
    </div>
  );
}
