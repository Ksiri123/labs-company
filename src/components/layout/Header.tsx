
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
          <Link to="/">
  <img 
    src="/iit.jpeg" 
    alt="PrefixStudio Logo" 
    className="h-10 w-auto"
  />
</Link>

          </div>
          
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "nav-link",
                      location.pathname === item.href && "active"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="ml-4">
                <Button size="sm">Get Started</Button>
              </li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <Button
              variant="ghost" 
              size="icon"
              
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-background/95 backdrop-blur-md px-6 py-4 shadow-lg">
            <ul className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium text-foreground hover:text-primary",
                      location.pathname === item.href && "text-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button className="w-full" size="sm">Get Started</Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
