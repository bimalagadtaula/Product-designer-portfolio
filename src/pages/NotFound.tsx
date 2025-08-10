import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30">
      <div className="text-center px-6">
        <h1 className="text-6xl font-extrabold mb-3 gradient-text">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
