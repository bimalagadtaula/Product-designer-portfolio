import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

const blogPosts = [
  {
    image: "/lovable-uploads/d818fcbb-46ee-4736-95cf-e037c774a80c.png",
    date: "Dec 15, 2024",
    title: "The Future of UX Design",
    description: "Exploring emerging trends and technologies that will shape the future of user experience design."
  },
  {
    image: "/lovable-uploads/d818fcbb-46ee-4736-95cf-e037c774a80c.png", 
    date: "Dec 10, 2024",
    title: "Design System Best Practices",
    description: "How to build and maintain scalable design systems that grow with your product."
  },
  {
    image: "/lovable-uploads/d818fcbb-46ee-4736-95cf-e037c774a80c.png",
    date: "Dec 5, 2024", 
    title: "User Research Fundamentals",
    description: "Essential methods and techniques for conducting effective user research."
  }
];

const Blog = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From my <span className="text-primary">blog post</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.title} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              View All Posts
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Blog;