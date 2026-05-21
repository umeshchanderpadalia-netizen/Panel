import { motion } from "framer-motion";

function PageTransition({
  children,
}) {

  const containerVariants = {

    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.04,
      },
    },

    exit: {
      opacity: 0,

      transition: {
        duration: 0.22,
      },
    },
  };

  const childVariants = {

    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.985,
      filter: "blur(10px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",

      transition: {
        duration: 0.55,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      },
    },

    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,

      transition: {
        duration: 0.22,
      },
    },
  };

  return (

    <motion.div
      variants={
        containerVariants
      }
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative min-h-full"
    >

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-[-200px] right-[-200px] w-[420px] h-[420px] bg-yellow-400/5 blur-[180px] rounded-full"></div>

      <div className="pointer-events-none absolute bottom-[-220px] left-[-220px] w-[460px] h-[460px] bg-amber-500/5 blur-[180px] rounded-full"></div>

      {/* Content */}
      <motion.div
        variants={
          childVariants
        }
        className="relative z-10"
      >

        {children}

      </motion.div>

    </motion.div>
  );
}

export default PageTransition;