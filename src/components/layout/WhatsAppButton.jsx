import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  return (
    <Fab
      color="success"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 999,
      }}
      href="https://wa.me/919003622822"
      target="_blank"
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppButton;
