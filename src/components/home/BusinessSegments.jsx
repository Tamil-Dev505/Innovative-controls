import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import {
  Cog,
  Cpu,
  Zap,
  Network,
  Building2,
  Heart,
  ArrowRight,
} from "lucide-react";

const segments = [
  {
    title: "Process Automation",
    desc: "Advanced control systems optimizing industrial processes for efficiency and precision.",
    icon: Cog,
    color: "#00D9FF",
    bgColor: "rgba(0, 217, 255, 0.1)",
    borderColor: "rgba(0, 217, 255, 0.3)",
  },
  {
    title: "Machine Automation",
    desc: "Intelligent automation solutions for high-performance industrial machinery.",
    icon: Cpu,
    color: "#00FF88",
    bgColor: "rgba(0, 255, 136, 0.1)",
    borderColor: "rgba(0, 255, 136, 0.3)",
  },
  {
    title: "Energy Management",
    desc: "Smart monitoring and optimization systems for sustainable power usage.",
    icon: Zap,
    color: "#FFB800",
    bgColor: "rgba(255, 184, 0, 0.1)",
    borderColor: "rgba(255, 184, 0, 0.3)",
  },
  {
    title: "IoT & AI Systems",
    desc: "Connected intelligence platforms enabling predictive analytics and control.",
    icon: Network,
    color: "#FF006E",
    bgColor: "rgba(255, 0, 110, 0.1)",
    borderColor: "rgba(255, 0, 110, 0.3)",
  },
  {
    title: "Building Management",
    desc: "Integrated facility automation for energy efficiency and operational control.",
    icon: Building2,
    color: "#8B5CF6",
    bgColor: "rgba(139, 92, 246, 0.1)",
    borderColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    title: "Healthcare Solutions",
    desc: "Specialized automation systems ensuring reliable and safe healthcare environments.",
    icon: Heart,
    color: "#FF4757",
    bgColor: "rgba(255, 71, 87, 0.1)",
    borderColor: "rgba(255, 71, 87, 0.3)",
  },
];

const BusinessSegments = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0D1B2A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "-10%",
          width: { xs: "220px", md: "500px" },
          height: { xs: "220px", md: "500px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 217, 255, 0.12) 0%, transparent 70%)",
          zIndex: 0,
          transform: "translateY(-50%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: { xs: "180px", md: "400px" },
          height: { xs: "180px", md: "400px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 0, 110, 0.1) 0%, transparent 70%)",
          zIndex: 0,
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "100%",
          maxWidth: 300,
          height: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />

      <motion.div
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "100%",
          maxWidth: 350,
          height: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 184, 0, 0.12) 0%, transparent 70%)",
          zIndex: 0,
          filter: "blur(50px)",
        }}
      />

      {/* Content Container */}
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: { xs: "100%", md: "1400px" }, mx: "auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "42px" },
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Core Automation Expertise
            </Typography>

            <Box
              sx={{
                width: { xs: "60px", md: "80px" },
                height: "4px",
                background: "linear-gradient(90deg, #1E88E5, #42A5F5)",
                borderRadius: "2px",
                mx: "auto",
                mb: 3,
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#cbd5e1",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Delivering comprehensive industrial automation solutions across multiple sectors, integrating advanced technologies to enhance operational performance.
            </Typography>
          </Box>
        </motion.div>

        {/* Segments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={{ xs: 1, md: 2 }} justifyContent="center">
            {
              // Ensure a 3x3 layout: fill with placeholders if fewer than 9 items
            }
            {(() => {
              const filled = [...segments];
              while (filled.length < 9) filled.push(null);
              return filled.map((item, index) => {
                if (!item) {
                  // Placeholder cell to keep 3x3 layout
                  return (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <motion.div variants={itemVariants}>
                        <Box
                          sx={{
                              p: { xs: 1.5, md: 2 },
                              borderRadius: "16px",
                              border: "1px dashed rgba(255,255,255,0.04)",
                              background: "transparent",
                              minHeight: { xs: 120, md: 140 },
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              opacity: 0.06,
                              pointerEvents: "none",
                              width: "100%",
                              maxWidth: { xs: '100%', md: 420 },
                            }}
                        />
                      </motion.div>
                    </Grid>
                  );
                }
                const Icon = item.icon;
                return (
                  <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          p: { xs: 1.75, md: 2.5 },
                          borderRadius: "16px",
                          background: `linear-gradient(135deg, ${item.bgColor} 0%, rgba(66, 165, 245, 0.04) 100%)`,
                          border: `1px solid ${item.borderColor}`,
                          backdropFilter: "blur(10px)",
                          transition: "all 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          overflow: "hidden",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          width: "100%",
                          maxWidth: { xs: '100%', md: 420 },
                          minHeight: { xs: 120, md: 140 },
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "1px",
                            background: `linear-gradient(90deg, transparent, ${item.color}80, transparent)`,
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: `linear-gradient(135deg, ${item.color}10 0%, transparent 100%)`,
                            opacity: 0,
                            transition: "opacity 0.32s ease",
                            pointerEvents: "none",
                          },
                          "&:hover": {
                            transform: "translateY(-8px)",
                            borderColor: item.color,
                            background: `linear-gradient(135deg, ${item.bgColor} 0%, ${item.bgColor} 100%)`,
                            boxShadow: `0 18px 36px ${item.color}30, 0 0 60px ${item.color}15`,
                            "&::after": {
                              opacity: 1,
                            },
                          },
                        }}
                      >
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                        style={{ marginBottom: "20px" }}
                      >
                        <Box
                          sx={{
                            width: { xs: "48px", md: "60px" },
                            height: { xs: "48px", md: "60px" },
                            borderRadius: "14px",
                            background: item.bgColor,
                            border: `1.5px solid ${item.color}60`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Icon size={28} strokeWidth={1.5} />
                        </Box>
                      </motion.div>

                      {/* Title */}
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "17px" },
                          fontWeight: 700,
                          color: "white",
                          mb: 1.5,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", md: "13.5px" },
                          color: "#cbd5e1",
                          lineHeight: 1.6,
                          mb: 2.5,
                        }}
                      >
                        {item.desc}
                      </Typography>

                      {/* Learn More Link */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: item.color,
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              gap: "8px",
                            },
                          }}
                        >
                          Learn More
                          <ArrowRight size={16} strokeWidth={2} />
                        </Box>
                      </motion.div>

                      {/* Bottom Accent Line */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "2px",
                          background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                          ".MuiBox-root:hover &": {
                            opacity: 1,
                          },
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>
              );
            });
            })()}
          </Grid>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              p: { xs: 3, md: 5 },
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(30, 136, 229, 0.1) 0%, rgba(66, 165, 245, 0.05) 100%)",
              border: "1px solid rgba(30, 136, 229, 0.3)",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#e5e7eb",
                mb: 2,
              }}
            >
              Ready to transform your operations with intelligent automation?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", md: "14px" },
                color: "#cbd5e1",
              }}
            >
              Contact our experts to discuss your specific automation needs and discover how we can drive your business forward.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Animated Background Grid */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.03) 25%, rgba(0, 217, 255, 0.03) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.03) 75%, rgba(0, 217, 255, 0.03) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.03) 25%, rgba(0, 217, 255, 0.03) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.03) 75%, rgba(0, 217, 255, 0.03) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "100px 100px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Animated Particles */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              borderRadius: "50%",
              background: `rgba(0, 217, 255, ${0.6 - i * 0.1})`,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </Box>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
        `}
      </style>
    </Box>
  );
};

export default BusinessSegments;
