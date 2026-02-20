import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: 3,
        textAlign: "center",
        background: "linear-gradient(135deg, #0B1220, #111C35)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Accent */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "220px", md: "400px" },
          height: { xs: "220px", md: "400px" },
          background: "radial-gradient(circle, rgba(30,136,229,0.3), transparent 70%)",
          top: { xs: "-60px", md: "-100px" },
          right: { xs: "-60px", md: "-100px" },
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2.8rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Ready to Transform Your Automation Infrastructure?
          </Typography>

          <Typography
            sx={{
              opacity: 0.85,
              maxWidth: "700px",
              margin: "0 auto",
              mb: 5,
              lineHeight: 1.7,
            }}
          >
            Partner with Innovative Controls to implement intelligent,
            energy-efficient and AI-driven automation systems designed
            for long-term industrial excellence.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: 600,
                background: "#1E88E5",
                "&:hover": {
                  background: "#1565C0",
                  transform: "translateY(-3px)",
                },
              }}
            >
              Request Consultation
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: 600,
                borderColor: "#1E88E5",
                color: "#1E88E5",
                "&:hover": {
                  background: "rgba(30,136,229,0.1)",
                },
              }}
            >
              Contact Our Experts
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default CTABanner;
