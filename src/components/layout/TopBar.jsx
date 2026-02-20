import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const contactItems = [
    { icon: Phone, label: "+91 90036 22822", ariaLabel: "Phone number" },
    { icon: Mail, label: "info@innovativecontrols.in", ariaLabel: "Email address" },
    { icon: Clock, label: "24x7 Industrial Support", ariaLabel: "Support availability" },
  ];

  return (
    <Box
      component="header"
      role="banner"
      sx={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        color: "#fff",
        py: isMobile ? 1 : 1.2,
        px: isMobile ? 2 : 4,
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "center" : "space-around",
          alignItems: "center",
          gap: isMobile ? 2 : 4,
          flexWrap: isMobile ? "wrap" : "nowrap",
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: isMobile ? "12px" : "13px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  color: "#1E88E5",
                  transform: "translateY(-2px)",
                },
              }}
              aria-label={item.ariaLabel}
            >
              <Icon size={isMobile ? 16 : 18} strokeWidth={1.5} />
              <span>{isMobile && index > 0 ? item.label.split(" ")[0] : item.label}</span>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TopBar;
