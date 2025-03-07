
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function Careers() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior UX Designer",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "We're looking for a Senior UX Designer to join our growing team. You'll work closely with clients and our internal team to create intuitive, user-centered digital experiences."
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Join our development team to build beautiful, responsive, and performance-optimized user interfaces using modern frontend technologies and frameworks."
    },
    {
      id: 3,
      title: "Project Manager",
      location: "Remote",
      type: "Full-time",
      description: "We're seeking an experienced Project Manager to lead our client projects from inception to completion, ensuring they're delivered on time and exceed expectations."
    },
    {
      id: 4,
      title: "Content Strategist",
      location: "London, UK / Remote",
      type: "Full-time",
      description: "Help our clients tell their stories effectively across digital platforms. You'll develop content strategies that engage audiences and drive conversion."
    },
    {
      id: 5,
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable backend systems that power our clients' digital products. Experience with Node.js, Python, or similar technologies required."
    }
  ]);
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Add colors for benefit cards
  const benefitColors = [
    'from-blue-500/20 to-blue-600/20',   // Blue gradient
    'from-purple-500/20 to-purple-600/20', // Purple gradient
    'from-green-500/20 to-green-600/20',  // Green gradient
    'from-amber-500/20 to-amber-600/20',  // Amber gradient
    'from-pink-500/20 to-pink-600/20',    // Pink gradient
    'from-cyan-500/20 to-cyan-600/20',    // Cyan gradient
  ];
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-slide-in');
          }, index * 100);
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe job cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.job-card');
      cards.forEach((card) => {
        observerRef.current?.observe(card);
      });
    }
    
    // Observe benefit cards
    if (benefitsRef.current) {
      const benefits = benefitsRef.current.querySelectorAll('.benefit-card');
      benefits.forEach((benefit) => {
        observerRef.current?.observe(benefit);
      });
    }

    // Add subtle parallax effect to hero section
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroElements = heroRef.current.querySelectorAll('.parallax');
        heroElements.forEach((el, index) => {
          const speed = 0.1 * (index + 1);
          (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleApply = (job: any) => {
    setSelectedJob(job);
    setShowForm(true);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend
    toast.success('Application submitted successfully!', {
      description: `Thank you for applying for the ${selectedJob?.title} position.`,
    });
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
  };
  
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-secondary/80 to-secondary py-24 md:py-32 overflow-hidden relative">
        <div ref={heroRef} className="section-container relative z-10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          {/* Floating shapes */}
          <div className="absolute top-12 left-1/4 w-8 h-8 rounded bg-primary/10 parallax floating-element"></div>
          <div className="absolute bottom-24 left-1/3 w-12 h-12 rounded-full bg-primary/10 parallax floating-element" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-lg bg-primary/10 parallax floating-element" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-title opacity-0 animate-fade-in parallax">Join Our Team</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl opacity-0 animate-fade-in parallax" style={{ animationDelay: '0.2s' }}>
              Build Your Career With Us
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in parallax" style={{ animationDelay: '0.4s' }}>
              We're always looking for talented individuals to join our growing team of digital professionals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Current openings */}
      <section className="section-container relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        
        <div className="text-center relative">
          <p className="section-title">Current Opportunities</p>
          <h2 className="section-heading">Open Positions</h2>
        </div>
        
        <div ref={cardsRef} className="mt-16 space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="job-card opacity-0 group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs">
                    {job.location}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs">
                    {job.type}
                  </span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="default"
                  className="relative overflow-hidden group"
                  onClick={() => handleApply(job)}
                >
                  <span className="relative z-10">Apply Now</span>
                  <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-white/20 group-hover:h-full transition-all duration-300 ease-in-out"></span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Application dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-[500px] backdrop-blur-sm bg-background/95 border-primary/10">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
          </div>
          
          <DialogHeader className="relative z-10">
            <DialogTitle className="text-gradient-primary">Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Please fill out the form below to submit your application.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="glow-effect transition-all duration-300 focus:scale-[1.01]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glow-effect transition-all duration-300 focus:scale-[1.01]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="glow-effect transition-all duration-300 focus:scale-[1.01]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resume">Resume</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  onChange={handleFileChange}
                  required
                  className="glow-effect transition-all duration-300 focus:scale-[1.01]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={5}
                  className="glow-effect transition-all duration-300 focus:scale-[1.01]"
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-end">
              <Button 
                type="submit" 
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">Submit Application</span>
                <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-white/20 group-hover:h-full transition-all duration-300 ease-in-out"></span>
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Why work with us */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        
        {/* Decorative blurred circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <p className="section-title">Why Choose Us</p>
            <h2 className="section-heading">Benefits of Working at PrefixStudio</h2>
          </div>
          
          <div className="relative overflow-hidden py-10">
            {/* First track (left to right) */}
            <div className="benefits-track benefits-track-ltr mb-8">
              {[
                {
                  title: "Flexible Work",
                  description: "Work from anywhere with flexible hours that accommodate your lifestyle and peak productivity times.",
                  icon: "home"
                },
                {
                  title: "Professional Growth",
                  description: "Continuous learning opportunities, conference allowances, and career advancement paths.",
                  icon: "trending-up"
                },
                {
                  title: "Health & Wellness",
                  description: "Comprehensive health insurance, mental health resources, and wellness programs.",
                  icon: "heart"
                }
              ].map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className={`benefit-card-moving transform-style-3d perspective-1000 bg-gradient-to-br ${benefitColors[index % benefitColors.length]}`}
                >
                  <div className="rounded-xl border border-border bg-card/95 p-8 shadow-md h-full flex flex-col transform transition-transform duration-500">
                    <div className="mb-4 text-primary text-2xl">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {benefit.icon === "home" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>}
                        {benefit.icon === "trending-up" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>}
                        {benefit.icon === "heart" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second track (right to left) */}
            <div className="benefits-track benefits-track-rtl">
              {[
                {
                  title: "Competitive Compensation",
                  description: "Salary packages that recognize your skills and experience, plus performance bonuses.",
                  icon: "dollar-sign"
                },
                {
                  title: "Collaborative Culture",
                  description: "Work alongside talented professionals in a supportive, innovative environment.",
                  icon: "users"
                },
                {
                  title: "Work-Life Balance",
                  description: "Generous PTO, paid holidays, and policies that respect your time outside of work.",
                  icon: "clock"
                }
              ].map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className={`benefit-card-moving transform-style-3d perspective-1000 bg-gradient-to-br ${benefitColors[(index + 3) % benefitColors.length]}`}
                >
                  <div className="rounded-xl border border-border bg-card/95 p-8 shadow-md h-full flex flex-col transform transition-transform duration-500">
                    <div className="mb-4 text-primary text-2xl">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {benefit.icon === "dollar-sign" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>}
                        {benefit.icon === "users" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                        {benefit.icon === "clock" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* No positions section */}
      <section className="section-container">
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/90 p-12 text-center relative overflow-hidden group">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "0s" }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-bold">Don't See a Position That Fits?</h2>
            <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
              We're always interested in connecting with talented individuals. Send us your resume for future opportunities.
            </p>
            <Button 
              className="relative overflow-hidden group"
              asChild
            >
              <a href="mailto:careers@prefixstudio.com">
                <span className="relative z-10">Send Your Resume</span>
                <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-white/20 group-hover:h-full transition-all duration-300 ease-in-out"></span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
