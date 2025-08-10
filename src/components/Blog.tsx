import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";

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
            <h2 className="text-h2 md:text-display font-bold mb-4">From my <span className="gradient-text">blog post</span></h2>
            <p className="text-muted-foreground text-bodyLg max-w-2xl mx-auto">Notes on process, systems, and product design.</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <Card className="border bg-card shadow-none hover:-translate-y-0.5 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="aspect-[16/9] w-full mb-4 rounded-lg bg-muted" />
                  <div className="text-xs text-muted-foreground mb-2">{p.date}</div>
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-primary">
                    Read more
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
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