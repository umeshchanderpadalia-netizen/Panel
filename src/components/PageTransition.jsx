import { motion } from "framer-motion";

function PageTransition({
  children,
}) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        scale: 0.985,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >

      {children}

    </motion.div>
  );
}

export default PageTransition;