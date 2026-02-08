import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 bg-background rounded-sm shadow-sm"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-heritage-cream mb-5">
              <Clock size={24} className="text-heritage-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Service Times
            </h3>
            <div className="font-body text-sm text-muted-foreground space-y-2">
              <p>
                <span className="font-medium text-foreground">Sunday Morning</span>
                <br />
                10:30 AM
              </p>
              <p>
                <span className="font-medium text-foreground">Wednesday Evening</span>
                <br />
                7:00 PM
              </p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center p-8 bg-background rounded-sm shadow-sm"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-heritage-cream mb-5">
              <MapPin size={24} className="text-heritage-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Location
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Heritage Baptist Church
              <br />
              California
              <br />
              <span className="text-heritage-gold font-medium mt-2 inline-block">
                Get Directions →
              </span>
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-8 bg-background rounded-sm shadow-sm"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-heritage-cream mb-5">
              <Mail size={24} className="text-heritage-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Contact Us
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              We'd love to hear from you!
              <br />
              <span className="text-heritage-gold font-medium mt-2 inline-block">
                info@heritagebaptist.church
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
