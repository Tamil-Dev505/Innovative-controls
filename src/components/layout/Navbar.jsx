import { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logom.png";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Solutions", id: "solutions" },
  { label: "Products", id: "products" },
  { label: "Industries", id: "industries" },
  { label: "Contact", id: "contact" },
];

const megaDropdownData = [
  {
    title: "Automation Solutions",
    items: ["Process Automation", "Machine Automation", "Energy Management"],
  },
  {
    title: "Advanced Systems",
    items: ["IoT & AI Systems", "Building Management", "Healthcare Solutions"],
  },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const [activeIndex, setActiveIndex] = useState(0);
  const [showMega, setShowMega] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [focusedItem, setFocusedItem] = useState(null);
  const megaDropdownRef = useRef(null);
  const solutionsRef = useRef(null);

  // Handle mega dropdown hover
  const handleSolutionsEnter = () => {
    setActiveIndex(2); // Solutions is at index 2
    setShowMega(true);
  };

  const handleSolutionsLeave = () => {
    setShowMega(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (index === 2) {
        setShowMega(!showMega);
      }
    } else if (e.key === "Escape") {
      setShowMega(false);
      setFocusedItem(null);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % menuItems.length;
      setFocusedItem(nextIndex);
      setActiveIndex(nextIndex);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
      setFocusedItem(prevIndex);
      setActiveIndex(prevIndex);
    }
  };

  // Close mega dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        megaDropdownRef.current &&
        !megaDropdownRef.current.contains(e.target) &&
        solutionsRef.current &&
        !solutionsRef.current.contains(e.target)
      ) {
        setShowMega(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Box
      component="nav"
      role="navigation"
      sx={{
        background: "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
      }}
    >
      {/* Desktop & Tablet Navigation */}
      {!isMobile && (
        <Box sx={{ py: { xs: 1, md: 1.5 }, px: { xs: 2, md: 4 } }}>
          {/* Logo and Menu Container */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* Logo */}
            <Box sx={{ flexShrink: 0 }}>
              <img
                src={logo}
                alt="Innovative Controls Logo"
                height={isTablet ? 44 : 54}
                style={{ transition: "all 0.2s ease", display: 'block' }}
              />
            </Box>

            {/* Menu Items */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: isTablet ? 2 : 4,
                position: "relative",
                pb: 0.5,
                flex: 1,
              }}
            >
            {menuItems.map((item, index) => (
              <Box
                key={item.id}
                ref={index === 2 ? solutionsRef : null}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  if (item.label === "Solutions") handleSolutionsEnter();
                }}
                onMouseLeave={() => {
                  if (item.label === "Solutions") handleSolutionsLeave();
                }}
                sx={{ position: "relative" }}
              >
                <Button
                  onFocus={() => setFocusedItem(index)}
                  onBlur={() => setFocusedItem(null)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onClick={() => scrollToSection(item.id)}
                  tabIndex={focusedItem === index ? 0 : -1}
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: isTablet ? "13px" : "14px",
                    position: "relative",
                    transition: "all 0.2s ease",
                    textTransform: "none",
                    "&:hover": {
                      color: "#1E88E5",
                    },
                    "&:focus-visible": {
                      outline: "2px solid #1E88E5",
                      outlineOffset: "4px",
                      borderRadius: "4px",
                    },
                  }}
                >
                  {item.label}
                </Button>

                {/* Sliding Indicator */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      layoutId="nav-indicator"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        bottom: -8,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "linear-gradient(90deg, #1E88E5, #42A5F5)",
                        borderRadius: "2px",
                        transformOrigin: "center",
                      }}
                    />
                  )}
                </AnimatePresence>
              </Box>
            ))}
            </Box>
          </Box>
        </Box>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
            px: 2,
          }}
        >
          <Box sx={{ display: 'inline-flex' }}>
            <img src={logo} alt="Innovative Controls Logo" height={42} style={{ display: 'block' }} />
          </Box>
          <IconButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ color: "white" }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </Box>
      )}

      {/* Mega Dropdown */}
      <AnimatePresence>
        {showMega && !isMobile && (
          <motion.div
            ref={megaDropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseLeave={handleSolutionsLeave}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                left: 0,
                background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
                borderTop: "1px solid rgba(30, 136, 229, 0.2)",
                py: 4,
                px: 4,
                display: "flex",
                justifyContent: "center",
                gap: isTablet ? 8 : 12,
                zIndex: 10,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              {megaDropdownData.map((category, idx) => (
                <Box key={idx} sx={{ minWidth: "200px" }}>
                  <Box
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1E88E5",
                      mb: 2,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {category.title}
                  </Box>
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box
                        sx={{
                          py: 1.2,
                          px: 2,
                          color: "#e5e7eb",
                          fontSize: "13px",
                          cursor: "pointer",
                          borderRadius: "4px",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            background: "rgba(30, 136, 229, 0.1)",
                            color: "#1E88E5",
                            pl: 2.5,
                          },
                        }}
                      >
                        {item}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            background: "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
            marginTop: "0px",
            pt: 2,
            px: 2,
            minHeight: "50vh",
          },
        }}
      >
        {/* Close Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 2 }}>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              color: "white",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(30, 136, 229, 0.1)",
                color: "#1E88E5",
              },
            }}
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </IconButton>
        </Box>

        <Box sx={{ p: 2 }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Button
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveIndex(index);
                  scrollToSection(item.id);
                  if (item.label === "Solutions") setShowMega(true);
                }}
                sx={{
                  color: "white",
                  justifyContent: "flex-start",
                  py: 1.5,
                  fontSize: "15px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "8px",
                  mb: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "rgba(30, 136, 229, 0.1)",
                    color: "#1E88E5",
                    pl: 2,
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
