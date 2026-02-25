import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import  Logo  from "../images/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} className="w-32 h-16" alt="" />
          </Link>
              
            </div>
            <p className="text-sm mb-4">
              A trusted manpower recruitment and deployment company under the NAC Group,
              dedicated to supplying skilled workforce worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#00a651] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00a651] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#00a651] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/target-markets" className="hover:text-[#00a651] transition-colors">
                  Target Markets
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-[#00a651] transition-colors">
                  Compliance & License
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/for-employers" className="hover:text-[#00a651] transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/for-candidates" className="hover:text-[#00a651] transition-colors">
                  For Candidates
                </Link>
              </li>
              <li>
                <Link to="/group-profile" className="hover:text-[#00a651] transition-colors">
                  Group Profile
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00a651] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+880 XXX XXXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@nacglobal.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2 text-sm">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-white hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 NAC Global Employment Services Limited. All rights reserved.</p>
            <p className="mt-2 md:mt-0">One ICT Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
