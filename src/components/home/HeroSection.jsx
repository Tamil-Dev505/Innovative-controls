import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import bgImage from "../../assets/images/industrial-bg.jpg";


const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const bgStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `\n                linear-gradient(rgba(11,18,32,0.8), rgba(11,18,32,0.9)),\n                url(${bgImage})\n          `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 0,
    backgroundAttachment: isMobile ? "scroll" : "fixed",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "70vh", md: "100vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={bgStyle}
      />

      {/* Radial Glow Effects */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(30, 136, 229, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(66, 165, 245, 0.1) 0%, transparent 50%)
          `,
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          maxWidth: isMobile ? "90%" : "900px",
          px: isMobile ? 2 : 4,
        }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <Box
            sx={{
              display: "inline-block",
              mb: 3,
              px: 3,
              py: 1,
              borderRadius: "50px",
              background: "rgba(30, 136, 229, 0.15)",
              border: "1px solid rgba(30, 136, 229, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#42A5F5",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              ⚡ Industrial Automation Leader
            </Typography>
          </Box>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              fontSize: isMobile ? "36px" : "56px",
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 2,
              background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Engineering Intelligent
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? "36px" : "56px",
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 4,
              background: "linear-gradient(135deg, #1E88E5 0%, #42A5F5 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Automation Solutions
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              fontSize: isMobile ? "15px" : "18px",
              maxWidth: "700px",
              mx: "auto",
              mb: 5,
              opacity: 0.9,
              lineHeight: 1.6,
              color: "#e5e7eb",
            }}
          >
            Delivering advanced industrial automation, AI-driven systems, and energy management platforms backed by 35+ years of engineering excellence.
          </Typography>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size={isMobile ? "medium" : "large"}
            sx={{
              background: "linear-gradient(135deg, #1E88E5 0%, #42A5F5 100%)",
              px: isMobile ? 3 : 4,
              py: isMobile ? 1.2 : 1.5,
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: isMobile ? "14px" : "16px",
              textTransform: "none",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 12px 24px rgba(30, 136, 229, 0.4)",
              },
            }}
          >
            Explore Solutions
            <ArrowRight size={20} />
          </Button>

          <Button
            variant="outlined"
            size={isMobile ? "medium" : "large"}
            sx={{
              px: isMobile ? 3 : 4,
              py: isMobile ? 1.2 : 1.5,
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: isMobile ? "14px" : "16px",
              textTransform: "none",
              border: "2px solid rgba(30, 136, 229, 0.5)",
              color: "white",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(30, 136, 229, 0.1)",
                borderColor: "#1E88E5",
                transform: "translateY(-2px)",
              },
            }}
          >
            Request Consultation
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={itemVariants}>
          <Box sx={{ mt: 8, opacity: 0.75 }}>
            <Typography
              sx={{
                fontSize: isMobile ? "12px" : "13px",
                color: "#cbd5e1",
                letterSpacing: "0.5px",
              }}
            >
              ✓ ISO Certified • CSA • UL • 6000 Sq.Ft Manufacturing • 24x7 Support
            </Typography>
          </Box>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          color: "white",
        }}
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.div>

      {/* Bottom Fade */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "200px",
          background: "linear-gradient(to bottom, rgba(11, 18, 32, 0), #0B1220)",
          zIndex: 2,
        }}
      />

      {/* Animations */}
      <style>
        {`
          @keyframes moveGrid {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
