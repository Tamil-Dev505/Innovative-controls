import { Box, Grid, Typography, Link, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Github } from "lucide-react";
import logo from "../../assets/logom.png";

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

      <Container maxWidth={false} sx={{ position: "relative", zIndex: 1, py: { xs: 4, md: 8 }, px: 0 }}>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {/* Top row: logo + tagline only (other top columns removed per request) */}
            <Grid container spacing={{ xs: 2, md: 2 }} sx={{ mb: 1.5, width: "100%" }} alignItems="center">
              <Grid item xs={12} md={12} sx={{ px: { xs: 2, md: 6 } }}>
                <MotionBox variants={itemVariants} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'inline-flex', width: 'fit-content' }}>
                    <Box component="img" src={logo} alt="Innovative Controls" sx={{ width: { xs: '140px', md: '220px' }, display: 'block' }} />
                  </Box>
                 
                </MotionBox>
              </Grid>
            </Grid>

          {/* Bottom row: column content (evenly spaced, left-aligned on md+) */}
          <Grid container spacing={{ xs: 2, md: 2 }} sx={{ mb: 1.5, width: "100%" }} alignItems="flex-start" justifyContent={{ xs: 'center', md: 'space-between' }}>
            <Grid item xs={12} md={3} sx={{ px: { xs: 2, md: 6 }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <MotionBox variants={itemVariants}>
                <Typography sx={{ fontWeight: 700, mb: 1.5, fontSize: "1.125rem", color: "#F3F4F6" }}>Contact</Typography>
                <Typography sx={{ color: "#D1D5DB", mb: 1, fontSize: "1rem" }}>123 Industrial Park, Suite 4B</Typography>
                <Typography sx={{ color: "#D1D5DB", mb: 0.5, fontSize: "1rem" }}>Phone: +1 (555) 123-4567</Typography>
                <Typography sx={{ color: "#D1D5DB", fontSize: "1rem" }}>Email: info@innovativecontrols.com</Typography>
                <Box sx={{ display: "flex", gap: 1.5, mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  {socialIcons.map(({ Icon, label, color }) => (
                    <MotionBox
                      key={label}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        width: { xs: "38px", md: "46px" },
                        height: { xs: "38px", md: "46px" },
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        "&:hover": { background: color },
                      }}
                    >
                      <Icon size={20} />
                    </MotionBox>
                  ))}
                </Box>
              </MotionBox>
            </Grid>

            <Grid item xs={12} md={3} sx={{ px: { xs: 2, md: 4 }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <MotionBox variants={itemVariants}>
                  <Typography sx={{ fontWeight: 700, mb: 1.5, fontSize: "1.125rem", color: "#F3F4F6", textTransform: "uppercase", letterSpacing: "0.5px" }}>QUICK LINKS</Typography>
                {[
                  "Home",
                  "About Us",
                  "Business",
                  "AI Energy",
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

            <Grid item xs={12} md={3} sx={{ px: { xs: 2, md: 4 }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <MotionBox variants={itemVariants}>
                    <Typography sx={{ fontWeight: 700, mb: 1.5, fontSize: "1.125rem", color: "#F3F4F6", textTransform: "uppercase", letterSpacing: "0.5px" }}>SOLUTIONS</Typography>
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

            <Grid item xs={12} md={3} sx={{ px: { xs: 2, md: 6 }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <MotionBox variants={itemVariants}>
                    <Typography sx={{ fontWeight: 700, mb: 1.5, fontSize: "1.125rem", color: "#F3F4F6", textTransform: "uppercase", letterSpacing: "0.5px" }}>NEWSLETTER</Typography>

                <Typography sx={{ color: "#D1D5DB", mb: 2, fontSize: "0.95rem" }}>
                  Subscribe to our newsletter for updates and insights.
                </Typography>

                <Box component="form" onSubmit={(e)=>e.preventDefault()} sx={{ display: 'flex', gap: 1, alignItems: 'center', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
                  <Box component="input" type="email" placeholder="Your email" aria-label="email" sx={{ flex: 1, width: '100%', p: { xs: '10px 12px', md: '12px 14px' }, borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: '#D1D5DB' }} />
                  <Box component="button" type="submit" sx={{ px: 3, py: 1, mt: { xs: 1, md: 0 }, background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Subscribe
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>

          <Divider sx={{ background: "rgba(255, 255, 255, 0.08)", my: 3 }} />

          <MotionBox variants={itemVariants} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" }, flexWrap: "wrap", gap: { xs: 2, md: 1 }, textAlign: { xs: "center", md: "left" } }}>
            <Typography sx={{ opacity: 0.7, fontSize: "0.9rem", color: "#9CA3AF" }}>
              © {new Date().getFullYear()} Innovative Controls. All Rights Reserved.
            </Typography>

            <Box sx={{ display: "flex", gap: { xs: 2, md: 4 }, flexWrap: "wrap", justifyContent: "center" }}>
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

          <Typography sx={{ textAlign: "center", mt: 2, fontSize: "0.85rem", color: "#6B7280" }}>
            Designed by{" "}
            <Link href="https://apexinfo.co.in/" target="_blank" rel="noopener noreferrer" sx={{ color: "#60A5FA", textDecoration: "none", fontWeight: 600, "&:hover": { color: "#3B82F6" } }}>
              Apex Infosys Solutions
            </Link>
          </Typography>
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
