import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GlosifiCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after a brief moment
    const timer = setTimeout(() => {
      window.location.href = "https://glosifi.com/";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gradient-to-br from-background via-accent/5 to-background relative flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Glosifi</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Redirecting to the live website...
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = "https://glosifi.com/"}
              >
                Visit Glosifi Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
