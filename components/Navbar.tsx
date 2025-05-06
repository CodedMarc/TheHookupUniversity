"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/#programs", label: "Programs" },
    { href: "/#about", label: "About Us" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    // Check if the current path matches the link's href
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <div className="text-red-700 font-bold text-2xl tracking-tight font-serif uppercase">The Hook Up</div>
              <div className="text-gray-700 text-sm uppercase tracking-widest mt-[-2px]">University</div>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navigationLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className={`font-medium hover:text-red-700 transition-colors ${isActive(link.href) ? "text-red-700" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          {/* {isAuthenticated && (
            <Link 
              href="/admin"
              className={`font-medium hover:text-red-700 transition-colors ${isActive("/admin") ? "text-red-700" : ""}`}
            >
              Dashboard
            </Link>
          )} */}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/#apply">
            <Button className="bg-red-700 hover:bg-red-600 text-white font-medium shadow-lg">
              Apply Now
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className={`py-2 font-medium hover:text-red-700 transition-colors ${isActive(link.href) ? "text-red-700" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}


            <>
              <Link 
                href="/#apply"
                className="bg-red-700 hover:bg-red-600 text-white py-2 px-6 rounded-md font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </>
            
          </div>
        </div>
      )}
    </header>
  );
}
