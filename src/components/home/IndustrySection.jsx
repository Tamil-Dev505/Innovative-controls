import { Box, Typography, Button, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import aiImage from "../../assets/images/ai-automation.jpg";

const Industry40Section = () => {
  const features = [
    { icon: "⚡", title: "AI-Driven Process Optimization", desc: "Intelligent automation that learns and adapts" },
    { icon: "🔋", title: "Smart Energy Monitoring & Power SCADA", desc: "Real-time energy insights and control" },
    { icon: "📊", title: "IoT Enabled Real-Time Analytics", desc: "Connected devices, actionable intelligence" },
    { icon: "🔧", title: "Predictive Maintenance & Asset Intelligence", desc: "Prevent downtime before it happens" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Text animation for heading
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

  const headingText = "Smart Automation for the Connected Factory";
  const words = headingText.split(" ");

  return (
    <Box
      sx={{
        py: { xs: 5, md: 14 },
        px: { xs: 2, md: 6 },
        background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated blur background elements */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: -150,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30, 136, 229, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          bottom: -200,
          left: -150,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(21, 101, 192, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          top: "50%",
          right: "-10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66, 165, 245, 0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" position="relative" zIndex={1}>
        
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
              style={{ marginBottom: "1rem" }}
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
                  ✨ Industry 4.0 Solutions
                </Typography>
              </Box>
            </motion.div>

            {/* Animated Heading with word-by-word animation */}
            <Box sx={{ mb: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
              {words.map((word, i) => (
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

            {/* Description with fade-in */}
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
                  mb: 5,
                  lineHeight: 1.8,
                }}
              >
                Transform your industrial operations with AI-powered automation, real-time analytics, and intelligent energy systems. We connect, optimize, and future-proof your manufacturing environment.
              </Typography>
            </motion.div>

            {/* Feature Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ mb: 8 }}
            >
              <Grid container spacing={2}>
                {features.map((feature, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <motion.div variants={itemVariants}>
                      <Card
                        sx={{
                          p: 2.5,
                          background: "white",
                          border: "1px solid #E2E8F0",
                          borderRadius: "12px",
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
                            background: "linear-gradient(90deg, transparent, rgba(30, 136, 229, 0.1), transparent)",
                            transition: "left 0.5s ease",
                          },
                          "&:hover::before": {
                            left: "100%",
                          },
                          "&:hover": {
                            boxShadow: "0 8px 24px rgba(30, 136, 229, 0.12)",
                            borderColor: "#1E88E5",
                            transform: "translateY(-4px)",
                          },
                        }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          style={{ display: "inline-block" }}
                        >
                          <Typography sx={{ fontSize: "1.8rem", mb: 1 }}>
                            {feature.icon}
                          </Typography>
                        </motion.div>
                        <Typography
                          sx={{
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "#0F172A",
                            mb: 0.5,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            color: "#64748B",
                            lineHeight: 1.5,
                          }}
                        >
                          {feature.desc}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* CTA Button with enhanced animation (responsive alignment) */}
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mt: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="contained"
                  sx={{
                    px: 5,
                    py: 1.8,
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    background: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
                    boxShadow: "0 8px 24px rgba(30, 136, 229, 0.3)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.2)",
                      transition: "left 0.5s ease",
                    },
                    "&:hover::before": {
                      left: "100%",
                    },
                    "&:hover": {
                      boxShadow: "0 12px 32px rgba(30, 136, 229, 0.4)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Explore Our Capabilities
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>

        {/* RIGHT IMAGE */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -20,
                  background: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
                  borderRadius: "24px",
                  opacity: 0.1,
                  zIndex: -1,
                },
              }}
            >
              <Box
                component="img"
                src={aiImage}
                alt="AI Automation"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 24px 48px rgba(30, 136, 229, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Industry40Section;

