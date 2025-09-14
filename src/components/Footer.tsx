import React from "react";
import { SocialIcon } from "@/components/ui/social-icon";

/**
 * Footer component with social links and copyright using brand colors.
 * Full width background with constrained container content.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-gray">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bw-gradual text-gold">Evolution Stables</h3>
            <p className="text-gray text-sm max-w-xs">
              Premium horse stables and equestrian facilities. Excellence in equine care and
              management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bw-gradual text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/about" className="text-gray hover:text-gold transition-colors text-sm">
                About Us
              </a>
              <a href="/services" className="text-gray hover:text-gold transition-colors text-sm">
                Services
              </a>
              <a href="/contact" className="text-gray hover:text-gold transition-colors text-sm">
                Contact
              </a>
              <a href="/my-stables" className="text-gray hover:text-gold transition-colors text-sm">
                My Stables
              </a>
            </nav>
          </div>

          {/* Social & Copyright */}
          <div className="space-y-4">
            <h4 className="text-lg font-bw-gradual text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://instagram.com/evostables"
                label="Instagram"
                icon={
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path d="M12.017 0C8.396 0 7.99.014 6.766.067 5.55.12 4.7.264 3.967.51c-.766.264-1.417.61-2.067 1.26C.233 2.42 0 3.068 0 3.833v16.334c0 .765.233 1.413.9 2.073.65.65 1.301 1.003 2.067 1.26.7.247 1.55.39 2.767.444 1.224.053 1.63.067 5.251.067s3.99-.014 5.214-.067c1.217-.053 2.067-.197 2.767-.444.766-.257 1.417-.61 2.067-1.26.667-.66.9-1.308.9-2.073V3.833c0-.765-.233-1.413-.9-2.073-.65-.65-1.301-1.003-2.067-1.26-.7-.247-1.55-.39-2.767-.444C16.004.014 15.598 0 12.017 0zm0 2.163c3.574 0 4.004.014 5.414.078 1.3.06 2.004.273 2.46.453.528.208.91.483 1.31.883.4.4.675.782.883 1.31.18.456.393 1.16.453 2.46.064 1.41.078 1.84.078 5.414s-.014 4.004-.078 5.414c-.06 1.3-.273 2.004-.453 2.46-.208.528-.483.91-.883 1.31-.4.4-.782.675-1.31.883-.456.18-1.16.393-2.46.453-1.41.064-1.84.078-5.414.078s-4.004-.014-5.414-.078c-1.3-.06-2.004-.273-2.46-.453-.528-.208-.91-.483-1.31-.883-.4-.4-.675-.782-.883-1.31-.18-.456-.393-1.16-.453-2.46C2.163 8.42 2.147 7.99 2.147 4.417s.016-4.004.078-5.414c.06-1.3.273-2.004.453-2.46.208-.528.483-.91.883-1.31.4-.4.782-.675 1.31-.883.456-.18 1.16-.393 2.46-.453C8.013 2.177 8.443 2.163 12.017 2.163zm0 3.99a6.024 6.024 0 100 12.048 6.024 6.024 0 000-12.048zm0 9.885a3.861 3.861 0 110-7.722 3.861 3.861 0 010 7.722zm6.406-11.05a1.42 1.42 0 11-2.84 0 1.42 1.42 0 012.84 0z" />
                  </svg>
                }
              />
              <SocialIcon
                href="https://twitter.com/evostables"
                label="Twitter"
                icon={
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                }
              />
              <SocialIcon
                href="https://linkedin.com/company/evostables"
                label="LinkedIn"
                icon={
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
              />
            </div>
            <p className="text-gray text-sm">© 2025 Evolution Stables. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
