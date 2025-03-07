
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary px-6 text-center">
      <h1 className="text-9xl font-bold opacity-0 animate-fade-in">404</h1>
      <div className="mt-4 h-1 w-16 bg-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
      <h2 className="mt-6 text-3xl font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>Page Not Found</h2>
      <p className="mt-4 max-w-md text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
