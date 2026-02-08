const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Heritage <span className="text-heritage-gold">Baptist</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Worshipping Christ in Community.
              <br />
              Learning · Loving · Looking · Longing
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-4 text-heritage-gold">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Why Heritage", href: "#why-heritage" },
                { label: "Our Commitments", href: "#commitments" },
                { label: "Our Pastor", href: "#pastor" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-body text-sm text-primary-foreground/60 hover:text-heritage-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-4 text-heritage-gold">
              Gather With Us
            </h4>
            <div className="font-body text-sm text-primary-foreground/60 space-y-2">
              <p>
                <span className="text-primary-foreground/80 font-medium">Sunday Bible Study</span>
                <br />
                9:30 AM
              </p>
              <p>
                <span className="text-primary-foreground/80 font-medium">Sunday Worship</span>
                <br />
                10:30 AM
              </p>
              <p>
                <span className="text-primary-foreground/80 font-medium">Thursday Bible Study &amp; Prayer</span>
                <br />
                7:00 PM
              </p>
              <p className="pt-2">
                5200 Heidorn Ranch Rd
                <br />
                Antioch, CA 94531
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © {currentYear} Heritage Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
