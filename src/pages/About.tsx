import { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe timeline items
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        observerRef.current?.observe(item);
      });
    }
    
    // Observe team members
    if (teamRef.current) {
      const members = teamRef.current.querySelectorAll('.team-member');
      members.forEach((member) => {
        observerRef.current?.observe(member);
      });
    }
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
  
  const teamMembers = [
    {
      name: "Alexandra Wright",
      role: "Founder & CEO",
      image: "https://picsum.photos/seed/person1/300/300",
      bio: "Alexandra founded PrefixStudio with a vision to create digital experiences that transform brands and delight users.",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://picsum.photos/seed/person2/300/300",
      bio: "With over 15 years of design experience, Michael leads our creative team in pushing boundaries and setting new standards.",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "https://picsum.photos/seed/person3/300/300",
      bio: "Sarah brings technical excellence and innovation to every project, ensuring our solutions are robust and future-proof.",
      color: "from-orange-500 to-pink-500"
    },
    {
      name: "David Garcia",
      role: "UX Director",
      image: "https://picsum.photos/seed/person4/300/300",
      bio: "David's user-centered approach ensures that every experience we create is intuitive, accessible, and delightful.",
      color: "from-purple-500 to-indigo-500"
    }
  ];
  
  return (
    <>
      {/* Hero section */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-title opacity-0 animate-fade-in">Our Story</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Building Digital Experiences Since 2013
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              From our humble beginnings to industry leadership, we've been at the forefront of digital innovation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company history */}
      <section className="section-container">
        <div className="text-center">
          <p className="section-title">Our Journey</p>
          <h2 className="section-heading">The IITLabs Timeline</h2>
        </div>
        
        <div ref={timelineRef} className="relative mt-16 border-l border-primary/30 pl-8 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:-translate-x-1/2 before:rounded-full before:bg-primary after:absolute after:bottom-0 after:left-0 after:h-4 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-primary">
          {[
            {
              year: "2013",
              title: "Foundation",
              description: "IITLabs was founded with a vision to create premium digital experiences that transform brands."
            },
            {
              year: "2013",
              title: "First Major Client",
              description: "Secured our first Fortune 500 client, marking a significant milestone in our growth journey."
            },
            {
              year: "2015",
              title: "International Expansion",
              description: "Opened our first international office in London, extending our reach to European markets."
            },
            {
              year: "2017",
              title: "Award Recognition",
              description: "Received multiple industry awards for our innovative design and development work."
            },
            {
              year: "2020",
              title: "Digital Transformation",
              description: "Pivoted to fully remote operations while maintaining our high standards of excellence."
            },
            {
              year: "2023",
              title: "Today",
              description: "Continuing to push boundaries and set new standards in digital experience design."
            }
          ].map((item, index) => (
            <div 
              key={item.year} 
              className="timeline-item mb-12 opacity-0 relative before:absolute before:-left-12 before:top-0 before:h-3 before:w-3 before:rounded-full before:border-4 before:border-background before:bg-primary"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-1 text-sm font-semibold text-primary">{item.year}</div>
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Our Vision section with team integration */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/50">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="section-title opacity-0 animate-fade-in">Our Vision</p>
            <h2 className="section-heading opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              The Team Behind Our Vision
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Meet the visionaries who are shaping the future of digital experiences.
            </p>
          </div>
          
          <div ref={teamRef} className="team-container flex flex-col items-center justify-center gap-8">
            {/* Team explorer card - displays in the center when no member is selected */}
            <div className={cn(
              "team-explorer w-full max-w-2xl mx-auto transition-all duration-700 transform",
              selectedMember === null ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute"
            )}>
              <div className="relative flex flex-col items-center rounded-2xl overflow-hidden bg-card border border-primary/20 shadow-xl p-8">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="w-24 h-24 mb-6 rounded-full bg-primary/10 flex items-center justify-center rotating-border">
                  <Eye className="w-12 h-12 text-primary animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-center">Explore Our Vision</h3>
                <p className="text-muted-foreground mb-8 text-center max-w-lg">
                  Click on a team member below to learn more about their role and vision at IITLabs.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                  {teamMembers.map((member, index) => (
                    <div 
                      key={member.name}
                      className="team-member cursor-pointer group relative rounded-xl overflow-hidden aspect-square shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-1"
                      onClick={() => setSelectedMember(index)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-background/80 backdrop-blur-sm rounded p-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                         
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className="bg-background/80 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transform rotate-45 scale-0 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300">
                          <Info className="w-4 h-4 text-primary info-icon-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Selected member profile card - appears when a member is clicked */}
            <div className={cn(
              "selected-member w-full max-w-2xl mx-auto relative perspective-3d transition-all duration-700 transform",
              selectedMember !== null ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute"
            )}>
              {teamMembers.map((member, index) => (
                selectedMember === index && (
                  <div 
                    key={member.name}
                    className="bg-card rounded-2xl overflow-hidden shadow-2xl transform-style-3d transition-all duration-700 animate-float"
                  >
                    <div className={`bg-gradient-to-br ${member.color} h-32 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay"></div>
                      <button
                        onClick={() => setSelectedMember(null)}
                        className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-background/40 transition-colors duration-300"
                      >
                        <EyeOff className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="px-8 pt-16 pb-8 relative">
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 ">
                    <h4 className="font-semibold mb-2 text-lg">Our Vision</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-secondary rounded-xl">
                          <h4 className="font-semibold mb-2 text-lg">About</h4>
                        <p>To lead the financial services industry towards a future where AI is not only powerful but also ethical, transparent, and compliant. We envision a world where banks, insurers, and financial institutions can harness the full potential of AI while upholding the highest standards of responsibility and trust.</p>
                        </div>
                        
                        <div className="p-4 bg-secondary rounded-xl">
                          <h4 className="font-semibold mb-2 text-lg">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {["Leadership", "Strategy", "Innovation", "Design Thinking"].map(skill => (
                              <span key={skill} className="px-3 py-1 bg-background rounded-full text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 text-center">
                        <button
                          onClick={() => setSelectedMember(null)}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors duration-300"
                        >
                          Back to Team
                        </button>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-title">Our Philosophy</p>
          <h2 className="section-heading">What Drives Us Forward</h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Our values are the foundation of everything we do, guiding our decisions and shaping our culture.
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Excellence",
              description: "We pursue excellence in everything we do, from the smallest details to the largest projects."
            },
            {
              title: "Innovation",
              description: "We constantly push boundaries and explore new possibilities in design and technology."
            },
            {
              title: "Integrity",
              description: "We build relationships based on trust, transparency, and mutual respect."
            }
          ].map((value, index) => (
            <div 
              key={value.title} 
              className="opacity-0 animate-fade-in text-center"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <div className="h-10 w-10 rounded-md bg-primary"></div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
