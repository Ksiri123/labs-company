
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, MapPin, Phone, Image } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you as soon as possible.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-secondary py-24 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a" 
            alt="Contact Us Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-title opacity-0 animate-fade-in">Get In Touch</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact form and info */}
      <section className="section-container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
            <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Address</h3>
                  <p className="text-muted-foreground">24 Fairfield Ave, Albany</p>
                  <p className="text-muted-foreground">United States, NY 12205</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@IITLabs.com</p>
                  <p className="text-muted-foreground"> Andrew@iitlabs.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+1 518-400-0755</p>
                  
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="mb-4 text-xl font-semibold">Business Hours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2" 
                alt="Our office" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
            <h2 className="mb-6 text-3xl font-bold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="glow-effect"
                />
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glow-effect"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="glow-effect"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="glow-effect"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="glow-effect"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full animate-bounce-soft" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="mt-24">
        <div className="aspect-[21/9] w-full bg-muted overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <img 
            src="https://www.google.com/maps/vt/data=f_98u6IR7by_Ht_9YB2YDyYPWkf9kT0wHTfIuBubgly3bsUK6muO2icT64P8Me3SPGc0fRPki3x94IQskEzsiepQxQR7f2bA9IL6QOhmccCOQLElsJ8e53CClbKSxz0Xtzhad4uT9ZJ-DNb-Fv49AHDQh1662J5DnTu2p6K1Ps39YTEgS2DZRsXkQRjCib4lQdERt6oJNtnxnDTY3HFnBUam5i8g0GZumgdsiPk2FN2TcauHr8TcqQnjAMAHH4ZWI8_b4BYwoTjrEWImtU8Z5KV-9ifFpmkn2hTkFg7rdU5NSmvL87vngpZLzgBc6qLUbXD1OlaUz5PJGj6hK0qP1XiHtBYp25Qgt1oYHY20_Qwf"
            alt="Office location map" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>
    </>
  );
}
