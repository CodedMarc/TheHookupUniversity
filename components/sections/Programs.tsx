import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Clock } from "lucide-react";
import Image from "next/image";

export function Programs() {
  const programs = [
    {
      id: 1,
      name: "Barber Fundamentals",
      description: "Learn the basics of barbering, including cutting, styling, and grooming techniques.",
      duration: "12 weeks",
      price: 5000,
    },
    {
      id: 2,
      name: "Advanced Techniques",
      description: "Master advanced cutting techniques and styles to elevate your barbering skills.",
      duration: "4 weeks",
      price: 3000,
    },
    {
      id: 3,
      name: "Business & Ownership",
      description: "Gain the knowledge and skills needed to run a successful barbershop business.",
      duration: "8 weeks",
      price: 4000,
    },
  ]
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Barber Education</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Comprehensive training programs designed to develop your barbering skills, prepare you for certification, and build your business knowledge.
          </p>
        </div>
        
        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs?.map((program) => (
            <Card key={program.id} className="overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="h-56 bg-gray-100 relative overflow-hidden">
                <Image
                  fill
                  src={getProgramImage(program.name)}
                  alt={program.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute top-0 right-0 bg-red-700 text-white font-medium py-2 px-4 rounded-bl-lg">
                  {program.duration}
                </div>
              </div>
              <CardContent className="p-6">     
                <h3 className="font-bold text-xl mb-2">{program.name}</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{program.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {getProgramTags(program.name).map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-red-50 text-red-800 border-red-200 hover:bg-red-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-lg font-bold text-red-700">${program.price}</span>
                  <Link href="#apply">
                    <Button className="bg-red-700 hover:bg-red-800 text-white">
                      Apply
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Programs Button */}
        <div className="text-center mt-16">
          <Link href="#all-programs">
            <Button variant="outline" className="border-red-700 text-red-700 hover:bg-red-50 flex items-center gap-2 px-6 py-2">
              View All Programs
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Helper functions to match program names with appropriate images and tags
function getProgramImage(programName: string): string {
  switch (programName) {
    case "Barber Fundamentals":
      return "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case "Advanced Techniques":
      return "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80";
    case "Business & Ownership":
      return "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80";
    default:
      return "https://images.unsplash.com/photo-1581591524083-b2d01256a6b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80";
  }
}

function getProgramTags(programName: string): string[] {
  switch (programName) {
    case "Barber Fundamentals":
      return ["Beginner Friendly", "Certification", "Hands-On"];
    case "Advanced Techniques":
      return ["Experienced", "Specialization", "Portfolio Building"];
    case "Business & Ownership":
      return ["Entrepreneurship", "Marketing", "Management"];
    default:
      return ["Professional", "Certification", "Hands-On"];
  }
}