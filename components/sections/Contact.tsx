"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Clock, Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// Contact form schema
const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  programId: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const programs = [{
    id: 1,
    name: "Barber Fundamentals",
    description: "Learn the basics of barbering, including cutting, styling, and grooming techniques.",
    duration: "12 weeks",
    price: 5000,
    isActive: true,
  }, {
    id: 2,
    name: "Advanced Techniques",
    description: "Master advanced cutting techniques and styles to elevate your barbering skills.",
    duration: "4 weeks",
    price: 3000,
    isActive: true,
  }, {
    id: 3,
    name: "Business & Ownership",
    description: "Gain the knowledge and skills needed to run a successful barbershop business.",
    duration: "8 weeks",
    price: 4000,
    isActive: true,
  }]
  // Form setup
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      programId: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // setIsSubmitting(true);
    console.log("Form submitted:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    form.reset();
    // setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our programs, tuition, or enrollment process? We are here to help you take the next step in your barbering career.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold font-heading">Visit Us</h3>
                  <p className="text-gray-600">402 N. Conway<br/>Mission, TX 78572</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold font-heading">Call Us</h3>
                  <p className="text-gray-600">(956) 445-3139</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <MessageCircle className="text-white"/> 
                </div>
                <div>
                  <h3 className="font-bold font-heading">Email Us</h3>
                  <p className="text-gray-600">thehookupbarberuniversity@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <Clock className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold font-heading">Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 8AM-8PM<br/>Saturday: 9AM-5PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
            {/* Map Container */}
            <div className="rounded-lg overflow-hidden shadow-lg h-60 my-8">
              <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7159.197482989541!2d-98.326617!3d26.209728199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a8693d5364d3%3A0x226dba5a7a6368c2!2s402%20N%20Conway%20Ave%2C%20Mission%2C%20TX%2078572!5e0!3m2!1sen!2sus!4v1746559693316!5m2!1sen!2sus" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-bold font-heading mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary hover:bg-gray-800 text-white rounded-full">
                  <Facebook />
                </a>
                <a href="#" className="bg-primary hover:bg-gray-800 text-white rounded-full">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          
          {/* Map & Contact Form */}
          <div>
            
            {/* Quick Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold font-heading mb-6 text-red-600">Start Your Journey Today</h3>
              <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Your name"
                                className="px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="email"
                                placeholder="your@email.com"
                                className="px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="tel"
                                placeholder="(123) 456-7890"
                                className="px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="programId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary">Program of Interest</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none">
                                  <SelectValue placeholder="Select a program" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="none">Not sure/Other</SelectItem>
                                {programs?.map((program) => (
                                  <SelectItem
                                    key={program.id}
                                    value={program.id.toString()}
                                  >
                                    {program.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary">Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Any questions or specific information you need?"
                                className="px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none text-white h-24 resize-none"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md shadow-lg"
                        >
                          Submit Request
                        </Button>
                      </div>
                      
                      <p className="text-gray-500 text-xs mt-4">
                        By submitting this form, you agree to our privacy policy and consent to be contacted regarding your request.
                      </p>
                    </form>
                  </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}