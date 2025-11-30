import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  fadeInUpVariants, 
  fadeInVariants, 
  scaleInVariants,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants
} from "@/utils/scrollAnimations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight" | "stagger";
  delay?: number;
  className?: string;
}

const variantMap = {
  fadeInUp: fadeInUpVariants,
  fadeIn: fadeInVariants,
  scaleIn: scaleInVariants,
  slideInLeft: slideInLeftVariants,
  slideInRight: slideInRightVariants,
  stagger: staggerContainerVariants,
};

export const AnimatedSection = ({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className = "" 
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={variantMap[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
