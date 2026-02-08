import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import pastorPortrait from "@/assets/pastor-portrait.jpg";
import charlesFamily from "@/assets/charles-family.jpg";

const PastorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pastor" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Pastor Bio */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-heritage-gold mb-4">
              Meet Our Shepherd
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
              Pastor Evan
            </h2>

            <div className="space-y-5 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Pastor Evan began pastoring at Heritage in August of 2025. He came to serve here
                in California after pastoral roles in Charlotte, NC and Long Island, NY.
              </p>
              <p>
                As a shepherd of God's flock, Evan prioritizes expository preaching and personal
                relationships. He has learned that God uses weak things and simple faith to build
                up His church. And he anticipates what God has in store for Heritage.
              </p>
            </div>
          </motion.div>

          {/* Pastor Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-sm">
              <img
                src={pastorPortrait}
                alt="Pastor Evan Charles"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-heritage-gold rounded-sm -z-10" />
          </motion.div>
        </div>

        {/* Family Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20 lg:mt-28">
          {/* Family Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-sm">
              <img
                src={charlesFamily}
                alt="The Charles Family - Evan, Jamie, Landon, Blair, Layton, and Chelsea"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-heritage-gold rounded-sm -z-10" />
          </motion.div>

          {/* Family Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-heritage-gold mb-4">
              The Charles Family
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Life Together
            </h3>

            <div className="space-y-5 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                In family life, God has blessed Evan with Jamie, his co-adventurer through life
                and best friend. Through their marriage, God has provided four children to accompany
                them on the journey. Landon, Blair, Layton, and Chelsea bring excitement and joy to
                the Charles household.
              </p>
              <p className="italic text-foreground/80">
                You will probably find the Charles family hiking, reading books, or enjoying a
                quiet (read: "loud") evening at home together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PastorSection;
