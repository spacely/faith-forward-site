import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import auditoriumFlowers from "@/assets/auditorium-flowers.jpg";
import coffeeFellowship from "@/assets/coffee-fellowship.jpg";
import pulpitEaster from "@/assets/pulpit-easter.jpg";

const photos = [
  { src: auditoriumFlowers, alt: "Church sanctuary with flowers" },
  { src: coffeeFellowship, alt: "Welcome area with coffee and fellowship" },
  { src: pulpitEaster, alt: "Pulpit decorated for Easter celebration" },
];

const PhotoStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-0 overflow-hidden" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.alt}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoStrip;
