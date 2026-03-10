import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Award, Zap, Shield, Users } from "lucide-react";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
  };

  const highlights = [
    { icon: Award, label: "35+ Years", value: "Industry Experience" },
    { icon: Users, label: "Expert Team", value: "Skilled Engineers" },
    { icon: Shield, label: "ISO, CSA, UL", value: "Certified" },
    { icon: Zap, label: "End-to-End", value: "Solutions" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 4, md: 8 },
        px: 2,
          background: "linear-gradient(135deg, rgba(249,250,251,0.95) 0%, rgba(243,244,246,0.95) 100%)",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            {/* MAIN: Text (full width) */}
            <Grid item xs={12} md={12}>
              <MotionBox variants={itemVariants} sx={{ pr: { md: 6 } }}>
                <Box sx={{ display: "inline-block", mb: 2 }}>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    About Us
                  </Typography>
                </Box>

                <MotionTypography variants={itemVariants} sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" }, fontWeight: 900, mb: 3, color: "#0F172A" }}>
                  Distinguished Industrial
                  <Box component="span" sx={{ display: "block", background: "linear-gradient(135deg,#3B82F6 0%,#2563EB 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Automation Solutions
                  </Box>
                </MotionTypography>

                <Typography sx={{ fontSize: "1.03rem", color: "#374151", lineHeight: 1.8, mb: 2 }}>
                  We are a distinguished Industrial Automation Solution provider with <strong style={{ color: "#3B82F6" }}>35 years of industry experience</strong>, supported by a team of highly skilled automation engineers.
                </Typography>

                <Typography sx={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, mb: 3 }}>
                  We manage the entire process — from design and engineering to fabrication, delivery, and commissioning of automation and electrical control panels.
                </Typography>

                <Typography sx={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7 }}>
                  Our solutions adhere to standards including <strong style={{ color: "#3B82F6" }}>ISO, CSA, NEMA, IEC, and UL</strong>, ensuring global compliance and reliability.
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Typography sx={{ fontWeight: 700, mb: 2, color: "#0F172A" }}>Core Expertise Sectors:</Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                    {[
                      "Machine Automation",
                      "Process Automation",
                      "Building Automation",
                    ].map((sector) => (
                      <Box key={sector} sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.25, borderRadius: 2, background: "rgba(255,255,255,0.7)", border: "1px solid rgba(15,23,42,0.04)" }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg,#3B82F6,#2563EB)" }} />
                        <Typography sx={{ fontWeight: 600, color: "#374151" }}>{sector}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </MotionBox>
            </Grid>

            {/* right column removed per request */}
          </Grid>

          {/* Highlights: centered, full-width */}
          <Box sx={{ mt: { xs: 4, md: 6 } }}>
            <MotionBox variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ display: "flex", gap: { xs: 2, md: 3 }, flexWrap: "wrap", justifyContent: "center" }}>
              {highlights.map(({ icon: Icon, label, value }, idx) => (
                <MotionBox key={idx} variants={highlightVariants} whileHover={{ y: -8 }} sx={{ width: { xs: "48%", sm: "32%", md: "22%" }, p: 3, borderRadius: 3, textAlign: "center", background: "rgba(255,255,255,0.9)", boxShadow: "0 6px 18px rgba(2,6,23,0.06)", border: "1px solid rgba(15,23,42,0.03)", cursor: "default" }}>
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 1.5 }}>
                    <Box sx={{ width: 54, height: 54, borderRadius: 2, background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(37,99,235,0.08))", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B82F6" }}>
                      <Icon size={22} />
                    </Box>
                  </Box>
                  <MotionTypography initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 + 0.15 }} sx={{ fontWeight: 800, color: "#1E40AF", mb: 0.5 }}>{label}</MotionTypography>
                  <Typography sx={{ color: "#6B7280", fontWeight: 600 }}>{value}</Typography>
                </MotionBox>
              ))}
            </MotionBox>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
