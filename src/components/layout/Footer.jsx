import { Box, Grid, Typography, Link, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Github } from "lucide-react";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const socialIcons = [
    { Icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
    { Icon: Twitter, label: "Twitter", color: "#1DA1F2" },
    { Icon: Facebook, label: "Facebook", color: "#1877F2" },
    { Icon: Github, label: "GitHub", color: "#333" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0B1220 0%, #1a2332 50%, #0f1623 100%)",
        color: "white",
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
      <MotionBox
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: { xs: "120px", md: "200px" },
          height: { xs: "120px", md: "200px" },
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: { xs: "140px", md: "250px" },
          height: { xs: "140px", md: "250px" },
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth={false} sx={{ position: "relative", zIndex: 1, py: { xs: 3, md: 5 }, px: { xs: 3, md: 6 } }}>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Grid container spacing={{ xs: 2, md: 2.5 }} sx={{ mb: 1.5, width: "100%" }} justifyContent="space-between" alignItems="flex-start">
            <Grid item xs={12} md={3}>
              <MotionBox variants={itemVariants}>
                <MotionTypography
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.6rem" },
                    fontWeight: 800,
                    mb: 1,
                    background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Innovative Controls
                </MotionTypography>

                <Typography sx={{ opacity: 0.9, lineHeight: 1.6, fontSize: "1rem", color: "#D1D5DB", mb: 1 }}>
                  Delivering intelligent automation, AI-driven systems, and energy management solutions to transform industrial operations into smart, efficient ecosystems.
                </Typography>

                <Box sx={{ display: "flex", gap: 1.25 }}>
                  {socialIcons.map(({ Icon, label, color }) => (
                    <MotionBox
                      key={label}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        width: { xs: "34px", md: "40px" },
                        height: { xs: "34px", md: "40px" },
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        "&:hover": {
                          background: color,
                        },
                      }}
                    >
                      <Icon size={18} />
                    </MotionBox>
                  ))}
                </Box>
              </MotionBox>
            </Grid>

            <Grid item xs={6} md={3}>
              <MotionBox variants={itemVariants}>
                <Typography sx={{ fontWeight: 700, mb: 1.5, fontSize: "1rem", color: "#F3F4F6", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Quick Links
                </Typography>
                {[
                  "Home",
                  "About Us",
                  "Industries",
                  "Projects",
                  "Contact",
                ].map((link, idx) => (
                  <motion.div key={link} variants={linkVariants} custom={idx}>
                    <FooterLink text={link} />
                  </motion.div>
                ))}
              </MotionBox>
            </Grid>

            <Grid item xs={6} md={3}>
              <MotionBox variants={itemVariants}>
                <Typography sx={{ fontWeight: 700, mb: 1.5, fontSize: "1rem", color: "#F3F4F6", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Solutions
                </Typography>
                {[
                  "Process Automation",
                  "Machine Automation",
                  "Energy Management",
                  "IoT & AI Systems",
                  "SCADA Systems",
                ].map((link, idx) => (
                  <motion.div key={link} variants={linkVariants} custom={idx}>
                    <FooterLink text={link} />
                  </motion.div>
                ))}
              </MotionBox>
            </Grid>

            {/* intentionally no contact column here; contact moved to ContactSection */}
          </Grid>

          <Divider sx={{ background: "rgba(255, 255, 255, 0.08)", my: 2 }} />

          <MotionBox variants={itemVariants} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
            <Typography sx={{ opacity: 0.7, fontSize: "0.9rem", color: "#9CA3AF" }}>
              © {new Date().getFullYear()} Innovative Controls. All Rights Reserved.
            </Typography>

            <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              { ["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  sx={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem", transition: "all 0.3s ease", "&:hover": { color: "#60A5FA" } }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </MotionBox>
        </motion.div>
      </Container>
    </Box>
  );
};

const FooterLink = ({ text }) => (
  <Link
    href="#"
    underline="none"
    sx={{
      display: "block",
      color: "#D1D5DB",
      opacity: 0.8,
      mb: 1.5,
      fontSize: "0.95rem",
      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: 0,
        height: "2px",
        background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
        transition: "width 0.3s ease",
      },
      "&:hover": {
        opacity: 1,
        color: "#60A5FA",
        "&::before": { width: "100%" },
      },
    }}
  >
    {text}
  </Link>
);

export default Footer;
