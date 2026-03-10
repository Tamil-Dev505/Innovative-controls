import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import BoltIcon from "@mui/icons-material/Bolt";
import InsightsIcon from "@mui/icons-material/Insights";
import HubIcon from "@mui/icons-material/Hub";
import SecurityIcon from "@mui/icons-material/Security";

const features = [
  {
    icon: <BoltIcon />,
    title: "Smart Energy Monitoring",
    desc: "Real-time visibility of power consumption, load management and efficiency metrics.",
    color: "#FFB81C",
  },
  {
    icon: <InsightsIcon />,
    title: "AI Predictive Analytics",
    desc: "Advanced algorithms for performance optimization and predictive maintenance.",
    color: "#42A5F5",
  },
  {
    icon: <HubIcon />,
    title: "Connected IoT Systems",
    desc: "Integrated control panels, SCADA platforms and cloud-enabled intelligence.",
    color: "#66BB6A",
  },
  {
    icon: <SecurityIcon />,
    title: "Secure Digital Infrastructure",
    desc: "Robust cybersecurity frameworks ensuring safe and reliable operations.",
    color: "#EF5350",
  },
];

const AIEnergySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
        background: "linear-gradient(135deg, #0B1220 0%, #1A2332 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30, 136, 229, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          bottom: -150,
          right: -100,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66, 187, 106, 0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center" position="relative" zIndex={1}>
        
        {/* LEFT CONTENT */}
        <Grid item xs={12} md={12}>
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
                  background: "rgba(30, 136, 229, 0.15)",
                  border: "1px solid rgba(30, 136, 229, 0.4)",
                  borderRadius: "50px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#42A5F5",
                    textTransform: "uppercase",
                    letterSpacing: "1.2px",
                  }}
                >
                  ⚡ Energy Intelligence
                </Typography>
              </Box>
            </motion.div>

            {/* Animated Heading */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
                {["AI", "&"].map((word, i) => (
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
                        fontSize: { xs: "2.2rem", md: "3rem" },
                        fontWeight: 800,
                        color: "white",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      {word}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {["Energy", "Intelligence"].map((word, i) => (
                  <motion.div
                    key={i + 2}
                    custom={i + 2}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "2.2rem", md: "3rem" },
                        fontWeight: 800,
                        background: "linear-gradient(135deg, #42A5F5 0%, #66BB6A 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      {word}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
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
                  opacity: 0.85,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  color: "#CBD5E1",
                }}
              >
                Our intelligent automation ecosystem integrates AI-driven analytics, energy optimization systems, and advanced SCADA platforms to enhance efficiency, reduce operational costs, and deliver real-time actionable insights.
              </Typography>
            </motion.div>
          </motion.div>
        </Grid>

        {/* RIGHT GRID FEATURES */}
        <Grid item xs={12} md={12}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={1}>
              {features.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: `linear-gradient(90deg, ${item.color}, transparent)`,
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        },
                        "&:hover::before": {
                          opacity: 1,
                        },
                        "&:hover": {
                          borderColor: item.color,
                          transform: "translateY(-6px)",
                          boxShadow: `0 12px 28px ${item.color}20`,
                          background: "rgba(255,255,255,0.08)",
                        },
                      }}
                    >
                      {/* Icon with animation */}
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                        style={{ display: "inline-block", marginBottom: "0.75rem" }}
                      >
                        <Box
                          sx={{
                            color: item.color,
                            fontSize: "1.6rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: `${item.color}15`,
                            transition: "all 0.3s ease",
                          }}
                        >
                          {item.icon}
                        </Box>
                      </motion.div>

                      <Typography sx={{ fontWeight: 700, fontSize: "0.98rem", mb: 1.25, color: "white" }}>
                        {item.title}
                      </Typography>

                      <Typography sx={{ opacity: 0.85, fontSize: "0.86rem", lineHeight: 1.5, color: "#CBD5E1" }}>
                        {item.desc}
                      </Typography>
                    </Paper>
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

export default AIEnergySection;

