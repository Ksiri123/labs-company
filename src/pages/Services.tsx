import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Services() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProcess, setActiveProcess] = useState(0);
  
  // Service data
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive, engaging interfaces that delight users and drive conversion.",
      details: "Our UI/UX design process begins with deep user research and ends with pixel-perfect interfaces that are both beautiful and functional. We focus on creating coherent experiences across all touchpoints.",
      icon: "layout"
    },
    {
      title: "Web Development",
      description: "Building responsive, performance-optimized websites and web applications.",
      details: "From simple marketing sites to complex web applications, we use modern frameworks and development practices to deliver fast, reliable, and secure web experiences.",
      icon: "code"
    },
    {
      title: "Mobile App Development",
      description: "Crafting native and cross-platform mobile applications for iOS and Android.",
      details: "Our mobile development team creates apps that leverage the full potential of modern devices, delivering seamless experiences that users love to engage with.",
      icon: "smartphone"
    },
    {
      title: "Brand Identity",
      description: "Developing cohesive brand identities that resonate with target audiences.",
      details: "We help establish or refresh your brand identity, creating a consistent visual language, tone of voice, and positioning that distinguishes you in the marketplace.",
      icon: "palette"
    },
    {
      title: "Digital Strategy",
      description: "Creating roadmaps for digital success aligned with business objectives.",
      details: "Our strategic approach involves analyzing market opportunities, competitive landscapes, and customer journeys to develop actionable plans that drive growth.",
      icon: "strategy"
    },
    {
      title: "Digital Marketing",
      description: "Implementing data-driven marketing campaigns that deliver measurable results.",
      details: "From SEO and content marketing to paid advertising and social media, we develop integrated marketing strategies that increase visibility and drive customer acquisition.",
      icon: "megaphone"
    }
  ];
  
  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (parallaxRef.current) {
        const { clientX, clientY } = e;
        const x = (window.innerWidth / 2 - clientX) / 25;
        const y = (window.innerHeight / 2 - clientY) / 25;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Auto-scrolling carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [services.length]);
  
  // Handle manual carousel navigation
  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
  };
  
  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };
  
  // Enhanced process animation with auto-progression
  useEffect(() => {
    const processSteps = 6; // Total number of process steps
    
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % processSteps);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Intersection Observer for fade-in and scale animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe service cards
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card');
      cards.forEach((card) => {
        observerRef.current?.observe(card);
      });
    }
    
    // Observe process steps
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll('.process-step');
      steps.forEach((step) => {
        observerRef.current?.observe(step);
      });
    }
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
  
  return (
    <>
      {/* Hero section with parallax */}
      <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
        <div 
          ref={parallaxRef} 
          className="absolute inset-0 z-0"
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                transform: `translate3d(${mousePosition.x * (i % 3 + 1) * 0.5}px, ${mousePosition.y * (i % 3 + 1) * 0.5}px, 0)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>
        
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-title opacity-0 animate-fade-in">What We Offer</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Premium Services for Digital Excellence
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              We provide end-to-end solutions that transform ideas into powerful digital experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services carousel */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="section-title">Featured Services</p>
            <h2 className="text-3xl font-bold">Our Specializations</h2>
          </div>
          
          <div ref={carouselRef} className="relative mt-12 pb-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card rounded-2xl shadow-lg p-8 border border-border h-64 flex flex-col items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                      <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-8 h-8 bg-primary rounded-md" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrevSlide}
                className="rounded-full animate-pulse-soft"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              
              {services.map((_, index) => (
                <Button
                  key={index}
                  variant={activeSlide === index ? "default" : "outline"}
                  size="sm"
                  className="w-2 h-2 p-0 rounded-full"
                  onClick={() => setActiveSlide(index)}
                />
              ))}
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNextSlide}
                className="rounded-full animate-pulse-soft"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced service cards with flip effect */}
      <section className="section-container">
        <div className="text-center">
          <p className="section-title">Our Expertise</p>
          <h2 className="section-heading">Services We Provide</h2>
        </div>
        
        <div ref={servicesRef} className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card opacity-0 group" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="service-card-face service-card-front group-hover:shadow-xl group-hover:border-primary/30">
                <div className="mb-6 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transform transition-all duration-500">
                  <div className="h-8 w-8 rounded-md bg-primary group-hover:rotate-12 transition-all duration-500"></div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-center text-muted-foreground">{service.description}</p>
              </div>
              <div className="service-card-face service-card-back group-hover:shadow-xl group-hover:border-primary/30">
                <h3 className="mb-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">{service.title}</h3>
                <p className="mb-6 text-center text-muted-foreground">{service.details}</p>
                <Button asChild size="sm" className="group overflow-hidden relative">
                  <Link to="/contact">
                    <span className="relative z-10">Learn More</span>
                    <span className="absolute inset-0 w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Process section with enhanced animations */}
      <section className="bg-secondary py-24 overflow-hidden">
        <div className="section-container">
          <div className="text-center">
            <p className="section-title">How We Work</p>
            <h2 className="section-heading">Our Process</h2>
          </div>
          
          <div ref={processRef} className="relative mt-16">
            {/* Animated progress line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border md:block hidden overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full bg-primary transition-all duration-1000 ease-in-out"
                style={{ 
                  height: `${(activeProcess + 1) * (100 / 6)}%`,
                  transition: 'height 2s cubic-bezier(0.65, 0, 0.35, 1)'
                }}
              />
              <div className="absolute top-0 left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-primary animate-pulse-soft"></div>
              <div className="absolute bottom-0 left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-primary animate-pulse-soft"></div>
            </div>
            
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business, goals, target audience, and project requirements."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy tailored to your specific needs and objectives."
              },
              {
                step: "03",
                title: "Design",
                description: "Our designers create stunning visuals that align with your brand and engage users."
              },
              {
                step: "04",
                title: "Development",
                description: "Our engineers build robust, scalable solutions using the latest technologies."
              },
              {
                step: "05",
                title: "Testing",
                description: "We rigorously test all aspects of your digital product to ensure quality and performance."
              },
              {
                step: "06",
                title: "Launch & Support",
                description: "We help you launch your product and provide ongoing support and optimization."
              }
            ].map((step, index) => (
              <div key={step.step} className={`mb-20 md:mb-24 process-step transition-all duration-700 ${
                index === activeProcess ? 'scale-105' : ''
              }`}>
                <div className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:text-right md:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'} opacity-0 animate-fade-in`} style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                    <div className={`mb-2 text-sm font-semibold text-primary transition-all duration-500 ${
                      index === activeProcess ? 'text-xl' : ''
                    }`}>Step {step.step}</div>
                    <h3 className={`mb-2 text-2xl font-bold transition-all duration-500 ${
                      index === activeProcess ? 'text-3xl text-primary' : ''
                    }`}>{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    
                    {index === activeProcess && (
                      <div className="mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['Research', 'Analysis', 'Planning'].map((tag) => (
                            <span 
                              key={tag} 
                              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className={`relative ${index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'} opacity-0 animate-fade-in`} 
                    style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                    <div className="md:hidden absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
                    <div className={`relative z-10 flex h-40 items-center justify-center rounded-xl border
                      transition-all duration-500 ease-in-out ${
                        index === activeProcess 
                          ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20 scale-105' 
                          : 'bg-card border-border'
                      }`}
                    >
                      <div className={`absolute -left-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full 
                        text-primary-foreground transition-all duration-500 md:relative md:left-auto md:top-auto ${
                          index === activeProcess 
                            ? 'bg-primary scale-110 animate-bounce-soft' 
                            : 'bg-primary/70'
                        }`}
                      >
                        {index <= activeProcess ? <CheckCircle2 className="h-6 w-6" /> : step.step}
                      </div>
                      
                      {index === activeProcess && (
                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                          <div className="absolute inset-0 opacity-20 bg-gradient-shimmer animate-shimmer"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className={`absolute left-1/2 top-1/2 hidden md:block h-10 w-10 -translate-x-1/2 -translate-y-1/2 
                    rounded-full border transition-all duration-500 ${
                      index === activeProcess 
                        ? 'border-primary bg-primary/20 scale-125' 
                        : 'border-border bg-secondary'
                    }`}
                  >
                    {index === activeProcess && (
                      <div className="absolute inset-0 rounded-full animate-ripple bg-primary/30"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA section */}
      <section className="section-container">
        <div className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 relative overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `float ${3 + i % 3}s ease-in-out infinite alternate`
              }}
            />
          ))}
          
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Ready to Transform Your Digital Presence?</p>
            <h2 className="my-4 text-3xl font-bold tracking-tight md:text-4xl">Let's Discuss Your Project</h2>
            <p className="mb-8 text-muted-foreground">
              Contact us today to schedule a consultation and discover how our services can help you achieve your goals.
            </p>
            <Button size="lg" className="group relative overflow-hidden" asChild>
              <Link to="/contact">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
