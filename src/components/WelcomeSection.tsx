import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="welcome" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-heritage-gold mb-4">
              A Word From Our Pastor
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-2">
              Welcome to Heritage
            </h2>
            <div className="w-16 h-0.5 bg-heritage-gold mx-auto mt-4 mb-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-body text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              My name is Evan. I have the privilege to pastor here at Heritage Baptist Church. 
              Thank you for taking the time to learn about us.
            </p>
            <p>
              I assume that you are here because God has created within you a desire to worship God 
              in community with His people. This is an evidence of God's working in your life. We 
              aren't supposed to live an independent lifestyle. God created us for fellowship – with 
              Him and with one another.
            </p>
            <p>
              So let me invite you to come and join us at one of our gatherings. They are pretty 
              simple. We study the Bible, pray, and sing.
            </p>
            <p>
              The Bible is central in our gatherings, because it is how God tells us about Himself. 
              We pray because we believe that we actually have a relationship with God – we are not 
              just performing religious rituals. And we sing, because we believe that Jesus Christ is 
              worthy of praise – because of Who He is and What He has done for us.
            </p>
            <p className="font-medium text-foreground italic font-display text-xl md:text-2xl pt-4">
              "Whether you have been a Christian for years or just started considering Christ, 
              you are welcome here at Heritage. We hope to see you soon!"
            </p>
            <p className="text-sm text-heritage-gold font-medium tracking-wider uppercase pt-2">
              — Pastor Evan
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
