import { Box, Typography, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SecurityIcon from "@mui/icons-material/Security";

const industries = [
  { name: "Cement & Construction", icon: <BuildIcon />, color: "#FF9800" },
  { name: "Textile & Manufacturing", icon: <LocalShippingIcon />, color: "#9C27B0" },
  { name: "Automotive", icon: <DirectionsCarIcon />, color: "#2196F3" },
  { name: "Power & Energy", icon: <ElectricBoltIcon />, color: "#FFB81C" },
  { name: "Water & Waste Management", icon: <WaterDropIcon />, color: "#00BCD4" },
  { name: "Sugar & Agro", icon: <AgricultureIcon />, color: "#4CAF50" },
  { name: "Food & Breweries", icon: <RestaurantIcon />, color: "#FF6F00" },
  { name: "Defence & Infrastructure", icon: <SecurityIcon />, color: "#F44336" },
];

const IndustrySectionV2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <Box
      sx={{
        py: { xs: 5, md: 14 },
        px: { xs: 2, md: 6 },
        background: "linear-gradient(135deg, #F8FAFC 0%, #F0F4F8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: -150,
          right: -100,
          width: "100%",
          maxWidth: 400,
          height: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30, 136, 229, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          bottom: -200,
          left: -150,
          width: "100%",
          maxWidth: 350,
          height: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66, 187, 106, 0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Additional animated orbs */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "-5%",
          width: "100%",
          maxWidth: 300,
          height: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "100%",
          maxWidth: 280,
          height: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(102, 187, 106, 0.07) 0%, transparent 70%)",
          filter: "blur(85px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating particles effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          style={{
            position: "absolute",
            width: 4 + i * 2,
            height: 4 + i * 2,
            borderRadius: "50%",
            background: `rgba(30, 136, 229, ${0.3 + i * 0.1})`,
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
            pointerEvents: "none",
          }}
        />
      ))}

      <Grid container spacing={{ xs: 4, md: 10 }} alignItems="center" position="relative" zIndex={1}>
        
        {/* LEFT CONTENT */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ marginBottom: "1.5rem" }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  background: "rgba(30, 136, 229, 0.1)",
                  border: "1px solid rgba(30, 136, 229, 0.3)",
                  borderRadius: "50px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#1E88E5",
                    textTransform: "uppercase",
                    letterSpacing: "1.2px",
                  }}
                >
                  🏭 Industry Expertise
                </Typography>
              </Box>
            </motion.div>

            {/* Animated Heading */}
            <Box sx={{ mb: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
              {["Empowering", "Diverse", "Industrial", "Sectors"].map((word, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.8rem" },
                      fontWeight: 800,
                      color: "#0F172A",
                      lineHeight: 1.2,
                      display: "inline",
                      position: "relative",
                      "&::after": i === 2 ? {
                        content: '""',
                        position: "absolute",
                        bottom: -8,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #1E88E5 0%, #42A5F5 100%)",
                        borderRadius: "2px",
                      } : {},
                    }}
                  >
                    {word}
                  </Typography>
                </motion.div>
              ))}
            </Box>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  color: "#475569",
                  lineHeight: 1.8,
                }}
              >
                Innovative Controls delivers advanced automation, AI-driven intelligence, and energy management solutions tailored to the unique operational demands of multiple industrial verticals.
              </Typography>
            </motion.div>
          </motion.div>
        </Grid>

        {/* RIGHT INDUSTRY GRID */}
        <Grid item xs={12} md={6}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={2.5}>
              {industries.map((industry, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "14px",
                        background: "white",
                        border: "1.5px solid #E2E8F0",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: industry.color,
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                          transition: "transform 0.3s ease",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(135deg, ${industry.color}10 0%, transparent 100%)`,
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          pointerEvents: "none",
                        },
                        "&:hover::before": {
                          transform: "scaleX(1)",
                        },
                        "&:hover::after": {
                          opacity: 1,
                        },
                        "&:hover": {
                          borderColor: industry.color,
                          transform: "translateY(-6px)",
                          boxShadow: `0 12px 32px ${industry.color}20`,
                          background: `${industry.color}08`,
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {/* Icon */}
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "48px",
                            height: "48px",
                            borderRadius: "10px",
                            background: `${industry.color}15`,
                            color: industry.color,
                            fontSize: "1.5rem",
                            position: "relative",
                          }}
                        >
                          {/* Glow effect */}
                          <motion.div
                            animate={{
                              boxShadow: [
                                `0 0 0 0 ${industry.color}40`,
                                `0 0 0 8px ${industry.color}00`,
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.15,
                            }}
                            style={{
                              position: "absolute",
                              inset: 0,
                              borderRadius: "10px",
                              pointerEvents: "none",
                            }}
                          />
                          {industry.icon}
                        </motion.div>

                        {/* Text */}
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            color: "#0F172A",
                            lineHeight: 1.4,
                          }}
                        >
                          {industry.name}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndustrySectionV2;
