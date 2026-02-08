import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Heart, Eye, Star } from "lucide-react";

const commitments = [
  {
    icon: BookOpen,
    title: "Learning",
    description:
      "As disciples of Christ, we are committed to studying the Scriptures to learn God and His ways.",
  },
  {
    icon: Heart,
    title: "Loving",
    description:
      "As the body of Christ, we are committed to showing His love to one another through acts of sacrifice and service.",
  },
  {
    icon: Eye,
    title: "Looking",
    description:
      "As ambassadors for Christ, we are committed to looking outward, seeing the need of our world for Christ and seeking to make a difference in individual lives.",
  },
  {
    icon: Star,
    title: "Longing",
    description:
      "As the bride of Christ, we are longing to see Him, waiting for His return and believing that this world is not our home.",
  },
];

const CommitmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="commitments" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-heritage-gold mb-4">
            What We Stand For
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-2">
            Our Commitments
          </h2>
          <div className="w-16 h-0.5 bg-heritage-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-heritage-gold/30 mb-6 group-hover:border-heritage-gold transition-colors duration-300">
                <item.icon size={28} className="text-heritage-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-primary-foreground/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
