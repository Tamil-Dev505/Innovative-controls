import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { TrendingUp, Award, Zap, Clock } from "lucide-react";

const statsData = [
  {
    number: "35+",
    label: "Years of Industry Excellence",
    icon: Award,
    color: "#1E88E5",
  },
  {
    number: "6000",
    label: "Sq.Ft Advanced Facility",
    icon: Zap,
    color: "#42A5F5",
  },
  {
    number: "ISO",
    label: "CSA / UL Certified Standards",
    icon: TrendingUp,
    color: "#64B5F6",
  },
  {
    number: "24x7",
    label: "Dedicated Industrial Support",
    icon: Clock,
    color: "#90CAF9",
  },
];

const StatsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        py: { xs: 8, md: 14 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, #0B1220 0%, #111827 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30, 136, 229, 0.1) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66, 165, 245, 0.08) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1400px", mx: "auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
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
              Trusted Engineering Excellence
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
              Delivering innovative automation systems with proven performance, global standards compliance, and decades of engineering expertise.
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {statsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: "16px",
                        background: "linear-gradient(135deg, rgba(30, 136, 229, 0.08) 0%, rgba(66, 165, 245, 0.04) 100%)",
                        border: "1px solid rgba(30, 136, 229, 0.2)",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "1px",
                          background: "linear-gradient(90deg, transparent, rgba(30, 136, 229, 0.5), transparent)",
                        },
                        "&:hover": {
                          transform: "translateY(-8px)",
                          borderColor: item.color,
                          background: "linear-gradient(135deg, rgba(30, 136, 229, 0.15) 0%, rgba(66, 165, 245, 0.08) 100%)",
                          boxShadow: `0 20px 40px ${item.color}20, 0 0 60px ${item.color}10`,
                        },
                      }}
                    >
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        style={{ marginBottom: "16px" }}
                      >
                        <Box
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                            border: `1px solid ${item.color}40`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                          }}
                        >
                          <Icon size={24} strokeWidth={1.5} />
                        </Box>
                      </motion.div>

                      {/* Number */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: "32px", md: "40px" },
                            fontWeight: 900,
                            background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 1,
                            letterSpacing: "-1px",
                          }}
                        >
                          {item.number}
                        </Typography>
                      </motion.div>

                      {/* Label */}
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", md: "14px" },
                          color: "#cbd5e1",
                          fontWeight: 500,
                          lineHeight: 1.5,
                          minHeight: "40px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.label}
                      </Typography>

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
            })}
          </Grid>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        >
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(30, 136, 229, 0.3), transparent)",
            }}
          />
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
            linear-gradient(0deg, transparent 24%, rgba(30, 136, 229, 0.02) 25%, rgba(30, 136, 229, 0.02) 26%, transparent 27%, transparent 74%, rgba(30, 136, 229, 0.02) 75%, rgba(30, 136, 229, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(30, 136, 229, 0.02) 25%, rgba(30, 136, 229, 0.02) 26%, transparent 27%, transparent 74%, rgba(30, 136, 229, 0.02) 75%, rgba(30, 136, 229, 0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "100px 100px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default StatsSection;
