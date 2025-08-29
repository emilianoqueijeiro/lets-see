import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Sydney, NSW",
    service: "Plumbing",
    rating: 5,
    comment: "Found an amazing plumber through ServicePro. Quick response, fair pricing, and excellent work quality.",
    avatar: "SM"
  },
  {
    name: "James Wilson", 
    location: "Melbourne, VIC",
    service: "Electrical",
    rating: 5,
    comment: "The electrician was professional and sorted out our power issues efficiently. Highly recommend!",
    avatar: "JW"
  },
  {
    name: "Emma Thompson",
    location: "Brisbane, QLD", 
    service: "House Cleaning",
    rating: 5,
    comment: "Fantastic cleaning service! They were thorough, reliable, and left our home spotless.",
    avatar: "ET"
  },
  {
    name: "Michael Brown",
    location: "Perth, WA",
    service: "Handyman",
    rating: 5,
    comment: "Great experience! The handyman fixed multiple issues around the house. Very skilled and friendly.",
    avatar: "MB"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            What our customers say
          </h2>
          <p className="text-muted-foreground">
            Real reviews from real customers across Australia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-background hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gold/10 text-gold font-medium">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {review.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.location} • {review.service}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-medium">4.9/5 from 12,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;