
import { useEffect, useRef } from 'react';
import { ArrowRight, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<Array<HTMLElement | null>>([]);
  
  useEffect(() => {
    // Text scramble animation
    if (textRef.current) {
      let iteration = 0;
      let interval: NodeJS.Timeout | null = null;
      
      interval = setInterval(() => {
        const target = "TRANSFORMING DIGITAL EXPERIENCES";
        
        if (textRef.current) {
          textRef.current.innerText = target
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return target[index];
              }
              
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        }
        
        if (iteration >= target.length) {
          if (interval) clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 50);
      
      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, []);
  
  // Staggered animation for features
  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      if (item) {
        item.style.animationDelay = `${i * 0.15}s`;
      }
    });
  }, []);
  
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28 lg:py-32">
        <div className="section-container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="text-center md:text-left">
              <p className="section-title opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>Welcome to PrefixStudio</p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Premium Design <br /> & Development Studio
              </h1>
              <h2 ref={textRef} className="mb-8 text-xl text-muted-foreground font-mono opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                TRANSFORMING DIGITAL EXPERIENCES
              </h2>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <Button size="lg" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative md:h-[500px] opacity-0 animate-fade-in-right" style={{ animationDelay: '0.7s' }}>
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 animate-pulse-soft"></div>
              <div className="relative flex h-full items-center justify-center">
                <div className="h-[350px] w-[350px] rounded-2xl border border-border bg-card p-3 shadow-lg rotate-3 animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Designer working on laptop" 
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute h-[350px] w-[350px] rounded-2xl border border-border bg-card p-3 shadow-lg -rotate-3 animate-float" style={{ animationDelay: '1.5s' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Modern workspace" 
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="section-container relative overflow-hidden">
        <div className="text-center">
          <p className="section-title">Why Choose Us</p>
          <h2 className="section-heading">Our Core Values</h2>
        </div>
        
        <div className="relative mt-16">
          {/* Animation track */}
          <div className="absolute top-1/2 left-0 w-full h-2 bg-secondary rounded-full -translate-y-1/2 z-0"></div>
          
          {/* First row - moving left to right */}
          <div className="values-track values-track-ltr mb-12">
            {[
              {
                title: "Premium Design",
                description: "Our design philosophy combines aesthetics with functionality, creating interfaces that are both beautiful and intuitive.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
              },
              {
                title: "Cutting-Edge Technology",
                description: "We leverage the latest technologies to build robust, scalable, and future-proof digital solutions.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              },
              {
                title: "User-Centered Approach",
                description: "We place users at the heart of everything we do, ensuring products that truly resonate with their needs.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              }
            ].map((feature, index) => (
              <div 
                key={`ltr-${feature.title}`}
                className="value-card rounded-xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="mb-4 h-40 w-full overflow-hidden rounded-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Second row - moving right to left */}
          <div className="values-track values-track-rtl">
            {[
              {
                title: "Collaborative Process",
                description: "We work closely with our clients, maintaining transparent communication throughout the project lifecycle.",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              },
              {
                title: "Sustainable Development",
                description: "Our solutions are built with longevity in mind, ensuring they remain relevant and effective for years to come.",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12"
              },
              {
                title: "Continuous Innovation",
                description: "We never stop learning and exploring new ways to push the boundaries of what's possible in digital.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              }
            ].map((feature, index) => (
              <div 
                key={`rtl-${feature.title}`}
                className="value-card rounded-xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="mb-4 h-40 w-full overflow-hidden rounded-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {index + 4}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-title">Ready to Get Started?</p>
            <h2 className="section-heading">Let's Create Something Amazing Together</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Transform your digital presence with our premium design and development services.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
