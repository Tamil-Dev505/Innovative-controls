import { Box, Typography, Container } from "@mui/material";
import SliderModule from "react-slick";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Slider = SliderModule.default || SliderModule;

// Import client logos
import client1 from "../../assets/logos/client1.png?url";
import client2 from "../../assets/logos/client2.png?url";
import client3 from "../../assets/logos/client3.png?url";
import client4 from "../../assets/logos/client4.png?url";
import client5 from "../../assets/logos/client5.png?url";
import client6 from "../../assets/logos/client6.png?url";
import client7 from "../../assets/logos/client7.png?url";

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const ClientsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 900, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  const clients = [client1, client2, client3, client4, client5, client6, client7];

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Character animation for title
  const titleText = "Trusted by Industry Leaders";
  const titleChars = titleText.split("");

  const charVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Enhanced heading variants
  const headingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Animated Background Orbs */}
      <MotionBox
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: { xs: "150px", md: "300px" },
          height: { xs: "150px", md: "300px" },
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "10%",
          width: { xs: "120px", md: "250px" },
          height: { xs: "120px", md: "250px" },
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "200px", md: "400px" },
          height: { xs: "200px", md: "400px" },
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Animated Grid Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          zIndex: 0,
          pointerEvents: "none",
          animation: "moveGrid 20s linear infinite",
          "@keyframes moveGrid": {
            "0%": {
              backgroundPosition: "0 0",
            },
            "100%": {
              backgroundPosition: "50px 50px",
            },
          },
        }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <MotionBox
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          sx={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: "rgba(59, 130, 246, 0.6)",
            borderRadius: "50%",
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
            zIndex: 0,
            pointerEvents: "none",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.4)",
          }}
        />
      ))}

      {/* Top Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Enhanced Animated Heading */}
          <Box sx={{ mb: 3, textAlign: "center", position: "relative" }}>
            {/* Decorative top accent */}
            <MotionBox
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              sx={{
                height: "4px",
                background: "linear-gradient(90deg, transparent, #3B82F6, transparent)",
                margin: "0 auto 1rem",
                borderRadius: "2px",
              }}
            />

            {/* Main Title with Character Animation */}
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.15em", mb: 2 }}>
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={charVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #0F172A 0%, #1F2937 50%, #374151 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.02em",
                    display: "inline-block",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </Box>

            {/* Decorative bottom accent */}
            <MotionBox
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              sx={{
                height: "3px",
                background: "linear-gradient(90deg, transparent, #2563EB, transparent)",
                margin: "1rem auto 0",
                borderRadius: "2px",
              }}
            />

            {/* Glow effect background */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                height: "200px",
                background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
          </Box>

          {/* Animated Subtitle with Fade & Slide */}
          <MotionTypography
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              maxWidth: "650px",
              margin: "0 auto",
              mb: 4,
              color: "#6B7280",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Our automation and energy intelligence solutions power enterprises across diverse industrial sectors, delivering measurable results and operational excellence.
          </MotionTypography>
        </motion.div>
      </Container>

      {/* Full-Screen Logo Slider */}
      <MotionBox
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        sx={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          borderLeft: "none",
          borderRight: "none",
          py: { xs: "1.5rem", md: "2rem" },
          px: 2,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          "&:hover": {
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.7) 100%)",
          },
        }}
      >
        <Slider {...settings}>
          {clients.map((logo, index) => (
            <Box
              key={index}
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 2, md: 4 },
              }}
            >
              <MotionBox
                component="img"
                src={logo}
                alt={`Client Logo ${index + 1}`}
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                sx={{
                  maxHeight: "100px",
                  maxWidth: "100%",
                  filter: "grayscale(100%)",
                  opacity: 0.5,
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
              />
            </Box>
          ))}
        </Slider>
      </MotionBox>

      {/* Bottom Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Animated Trust Metrics */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
              gap: 3,
              mb: 8,
            }}
          >
            {[
              { label: "Global Clients", value: "500+" },
              { label: "Industries Served", value: "15+" },
              { label: "Uptime Guarantee", value: "99.9%" },
            ].map((metric, idx) => (
              <MotionBox
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)" }}
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                    transition: "left 0.5s ease",
                  },
                  "&:hover::before": {
                    left: "100%",
                  },
                }}
              >
                <MotionTypography
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  sx={{
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 0.5,
                  }}
                >
                  {metric.value}
                </MotionTypography>
                <MotionTypography
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                  sx={{
                    fontSize: "0.95rem",
                    color: "#6B7280",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {metric.label}
                </MotionTypography>
              </MotionBox>
            ))}
          </MotionBox>

          {/* Animated Bottom Text */}
          <MotionTypography
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "#9CA3AF",
              fontWeight: 600,
              letterSpacing: "1px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Automation • Energy Intelligence • AI Solutions • Industrial Excellence
          </MotionTypography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ClientsSection;
