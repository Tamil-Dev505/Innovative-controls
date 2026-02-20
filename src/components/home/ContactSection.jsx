import { Box, Typography, Grid, TextField, Button, Container, InputAdornment } from "@mui/material";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu, India",
      color: "#3B82F6",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90036 22822",
      link: "tel:+919003622822",
      color: "#2563EB",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@innovativecontrols.in",
      link: "mailto:info@innovativecontrols.in",
      color: "#1D4ED8",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        px: 2,
        background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Animated Background Orbs */}
      <MotionBox
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "10%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <MotionBox variants={itemVariants} sx={{ textAlign: "center", mb: 10 }}>
            <Box
              sx={{
                display: "inline-block",
                px: 3,
                py: 1,
                borderRadius: "50px",
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#3B82F6",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Get In Touch
              </Typography>
            </Box>

            <MotionTypography
              variants={itemVariants}
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                mb: 3,
                color: "#111827",
                lineHeight: 1.2,
              }}
            >
              Let's Connect and
              <Box
                component="span"
                sx={{
                  display: "block",
                  background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Build Together
              </Box>
            </MotionTypography>

            <MotionTypography
              variants={itemVariants}
              sx={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "#6B7280",
                fontSize: "1.05rem",
                lineHeight: 1.7,
              }}
            >
              Have a project in mind? We'd love to hear from you. Get in touch with our team and let's create something amazing together.
            </MotionTypography>
          </MotionBox>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* LEFT CONTACT INFO */}
            <Grid item xs={12} md={6}>
              <MotionBox variants={itemVariants} sx={{ position: "relative", zIndex: 2 }}>
                {/* Contact Cards */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 6 }}>
                  {contactInfo.map(({ icon: Icon, label, value, link, color }, idx) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      <Box
                        component={link ? "a" : "div"}
                        href={link}
                        sx={{
                          display: "flex",
                          gap: 3,
                          p: 3,
                          borderRadius: "16px",
                          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.8)",
                          transition: "all 0.3s ease",
                          textDecoration: "none",
                          cursor: "pointer",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.7) 100%)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: color,
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={24} />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              fontWeight: 600,
                              color: "#6B7280",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              mb: 0.5,
                            }}
                          >
                            {label}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "1.05rem",
                              fontWeight: 700,
                              color: "#111827",
                            }}
                          >
                            {value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                {/* Certifications removed per request */}
              </MotionBox>
            </Grid>

            {/* RIGHT CONTACT FORM */}
            <Grid item xs={12} md={6}>
              <MotionBox
                variants={itemVariants}
                sx={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)",
                  backdropFilter: "blur(10px)",
                  p: { xs: 4, md: 6 },
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    mb: 4,
                    color: "#111827",
                  }}
                >
                  Send us a Message
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
                    <TextField
                      fullWidth
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <User size={16} color="#9CA3AF" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#ffffff",
                          borderRadius: "8px",
                          "& fieldset": {
                            borderColor: "#E5E7EB",
                          },
                          "&:hover fieldset": {
                            borderColor: "#3B82F6",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#111827",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <User size={16} color="#9CA3AF" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#ffffff",
                          borderRadius: "8px",
                          "& fieldset": {
                            borderColor: "#E5E7EB",
                          },
                          "&:hover fieldset": {
                            borderColor: "#3B82F6",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#111827",
                        },
                      }}
                    />
                  </Box>

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail size={16} color="#9CA3AF" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#E5E7EB",
                        },
                        "&:hover fieldset": {
                          borderColor: "#3B82F6",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#111827",
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone size={16} color="#9CA3AF" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#E5E7EB",
                        },
                        "&:hover fieldset": {
                          borderColor: "#3B82F6",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#111827",
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Project Requirement"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Send size={16} color="#9CA3AF" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#E5E7EB",
                        },
                        "&:hover fieldset": {
                          borderColor: "#3B82F6",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#111827",
                      },
                    }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      endIcon={<Send size={20} />}
                      sx={{
                        py: 1.8,
                        borderRadius: "12px",
                        fontWeight: 700,
                        fontSize: "1rem",
                        background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                          boxShadow: "0 12px 24px rgba(59, 130, 246, 0.3)",
                        },
                      }}
                    >
                      Send Inquiry
                    </Button>
                  </motion.div>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>

          {/* Map Section */}
          <MotionBox
            variants={itemVariants}
            sx={{
              mt: 12,
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              title="Company Location - Coimbatore"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=Coimbatore,+Tamil+Nadu,+India&z=13&output=embed"
            ></iframe>
          </MotionBox>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;
