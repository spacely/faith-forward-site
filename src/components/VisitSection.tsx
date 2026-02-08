import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Mail, Youtube } from "lucide-react";

const VisitSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="visit" className="py-24 md:py-32 bg-heritage-cream">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-heritage-gold mb-4">
            Join Us This Sunday
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-2">
            Plan Your Visit
          </h2>
          <div className="w-16 h-0.5 bg-heritage-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6 md:p-8 bg-background rounded-sm shadow-sm"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-heritage-cream mb-5">
              <Clock size={24} className="text-heritage-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Service Times
            </h3>
            <div className="font-body text-sm text-muted-foreground space-y-4">
              <div>
                <p className="font-semibold text-xs tracking-[0.15em] uppercase text-heritage-gold mb-1">
                  Sundays
                </p>
                <p>
                  <span className="font-medium text-foreground">Bible Study for All Ages</span>
                  <br />
                  9:30 AM
                </p>
                <p className="mt-2">
                  <span className="font-medium text-foreground">Morning Worship</span>
                  <br />
                  10:30 AM
                  <br />
                  <span className="text-xs italic">Junior Church for ages 4–4th grade</span>
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-xs tracking-[0.15em] uppercase text-heritage-gold mb-1">
                  Thursdays
                </p>
                <p>
                  <span className="font-medium text-foreground">Bible Study &amp; Prayer</span>
                  <br />
                  7:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center p-6 md:p-8 bg-background rounded-sm shadow-sm"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-heritage-cream mb-5">
              <MapPin size={24} className="text-heritage-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Location
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              5200 Heidorn Ranch Rd
              <br />
              Antioch, CA 94531
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=5200+Heidorn+Ranch+Rd+Antioch+CA+94531"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-heritage-gold font-medium hover:underline"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-6 md:p-8 bg-background rounded-sm shadow-sm sm:col-span-2 lg:col-span-1"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-heritage-cream mb-5">
              <Mail size={24} className="text-heritage-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Contact
            </h3>
            <a
              href="mailto:pastorevan@heritagebaptistacademy.com"
              className="font-body text-sm text-heritage-gold font-medium hover:underline break-all"
            >
              pastorevan@heritagebaptistacademy.com
            </a>
            <div className="mt-4">
              <a
                href="https://www.youtube.com/@heritageantioch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-heritage-gold transition-colors"
              >
                <Youtube size={18} />
                Watch Sermons
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
