
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
          <Link to="/">
  <img 
    src="/iit.jpeg" 
    alt="PrefixStudio Logo" 
    className="h-10 w-auto"
  />
</Link>

            <p className="mt-4 text-sm text-muted-foreground">
            IITLabs offers the ‘AI’ cloud for Banks, Insurers, and Financial Services (BFSI) institutions, providing access to curated AI APIs, advanced AI solutions, and robust AI governance tools to enable the deployment of trustworthy and self-learning AI engines.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">24 Fairfield Ave, Albany, NY 12205</li>
              <li className="text-sm text-muted-foreground"> United States</li>
              <li className="text-sm text-muted-foreground">+1 518-400-0755</li>
              <li className="text-sm text-muted-foreground">info@IITLabs.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} PrefixStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
