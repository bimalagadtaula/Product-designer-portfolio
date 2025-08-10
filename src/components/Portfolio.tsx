import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's have a look at<br />
              my <span className="text-primary">Portfolio</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[1, 2].map((item) => (
            <FadeIn key={item} delay={item * 0.1}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">Lirante</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-4">
                    <Button variant="outline" size="sm" className="text-xs">Landing Page</Button>
                    <Button variant="outline" size="sm" className="text-xs">Product Design</Button>
                    <Button variant="outline" size="sm" className="text-xs">Animation</Button>
                    <Button variant="outline" size="sm" className="text-xs">Discussion</Button>
                    <Button variant="outline" size="sm" className="text-xs">Cards</Button>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Lirante – Food Delivery Solution</h3>
                  <p className="text-gray-600 text-sm">
                    A comprehensive food delivery platform designed to enhance user experience 
                    and streamline the ordering process.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              View More
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;