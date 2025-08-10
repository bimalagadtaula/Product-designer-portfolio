import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";

const posts = [
  { title: "Designing with systems", excerpt: "How design tokens streamline multi‑platform products.", date: "Jun 2024" },
  { title: "From research to UI", excerpt: "Synthesizing findings into clear design decisions.", date: "May 2024" },
  { title: "Measuring UX impact", excerpt: "Simple metrics to align teams and track outcomes.", date: "Apr 2024" },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest <span className="gradient-text">Writing</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Notes on process, systems, and product design.</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <Card className="hover-lift border-0 bg-card">
                <CardContent className="p-6">
                  <div className="text-xs text-muted-foreground mb-2">{p.date}</div>
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.excerpt}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;