"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    try {
      emailSchema.parse(email);
      // timeout to simulate a network request
      setTimeout(() => {
        setEmail("");
        setSubscribed(true);
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message);
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates on classes, events, and barbering tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`w-full h-12 ${emailError ? "border-red-500" : ""}`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1 text-left">{emailError}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="bg-red-700 hover:bg-red-800 text-white h-12 px-6"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
}