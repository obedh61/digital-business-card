import React from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BuildIcon from "@mui/icons-material/Build";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const services = [
  { icon: <DoorFrontIcon />, text: "התקנת דלתות חדשות" },
  { icon: <AutorenewIcon />, text: "החלפת דלתות" },
  { icon: <BuildIcon />, text: "תיקון דלתות" },
  { icon: <DesignServicesIcon />, text: "התאמת דלתות בהתאמה אישית" },
];

const whyChoose = [
  { icon: <RequestQuoteIcon />, text: "הצעות מחיר חינם" },
  { icon: <WorkspacePremiumIcon />, text: "חומרים איכותיים" },
  { icon: <VerifiedUserIcon />, text: "מורשה ומבוטח" },
];

const DigitalBusinessCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        minHeight: "100dvh", // ✅ usa altura dinámica (móvil friendly)
        px: 2,
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // ✅ mantiene el footer abajo
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Contenido principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          flexGrow: 1, // ✅ empuja el footer hacia abajo
        }}
      >
        {/* Perfil */}
        <Avatar
          src="../public/installer-avatar1.png" // o la URL completa de la imagen
          alt="התקנה עם כיפה"
          sx={{
            width: 122,
            height: 130,
            mb: 2,
            border: "2px solid #d4af37", // borde dorado opcional
            boxShadow: "0 0 10px rgba(212,175,55,0.6)", // brillo suave dorado
          }}
        />
        <Typography variant="h5" fontWeight="bold" align="center">
          עובד הררה
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          מומחה בהתקנת דלתות פנים
        </Typography>

        {/* Botones de contacto */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
        <a 
          href="https://wa.me/972527028337?text=שלום%20אני%20מעוניין%20בשירות%20התקנת%20דלתות" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="success"
            startIcon={
              <WhatsAppIcon sx={{ mr: 1, ml: 0.5, verticalAlign: "middle" }} />
            }
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            וואטסאפ
          </Button>
        </a>


        <a 
          href="mailto:obedh61@gmail.com?subject=פנייה%20מהאתר&body=שלום%20אני%20מעוניין%20לקבל%20פרטים%20נוספים" 
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="error"
            startIcon={
              <MailOutlineIcon sx={{ mr: 1, ml: 0.5, verticalAlign: "middle" }} />
            }
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            שלח מייל
          </Button>
        </a>


        </Box>

        {/* Redes sociales */}
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1CGot4ePY3/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButton
                sx={{
                  color: "#d4af37", // dorado
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#ffea00",
                    transform: "scale(1.2)",
                    textShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/newdoors61?igsh=MXg2OWdpaXIyNmg1cQ=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButton
                sx={{
                  color: "#d4af37",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#ffea00",
                    transform: "scale(1.2)",
                    textShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </a>
          </Box>


        </Box>

        {/* Servicios */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
          שירותים מוצעים
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
                <Paper
                elevation={2}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1.5,
                    bgcolor: "rgba(0,0,0,0.75)", // negro con opacidad
                    color: "#fff", // texto blanco
                    borderRadius: 2,
                    width: "100%",
                }}
                >
                <Box sx={{ color: "#d4af37" /* dorado */, p: 1, borderRadius: 1 }}>
                    {service.icon}
                </Box>
                <Typography>{service.text}</Typography>
                </Paper>
            </Grid>
            ))}

        </Grid>

        {/* Por qué elegirnos */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
         ?  למה לבחור בנו    
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {whyChoose.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
                <Paper
                elevation={2}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1.5,
                    bgcolor: "rgba(0,0,0,0.75)",
                    color: "#fff",
                    borderRadius: 2,
                    width: "100%",
                }}
                >
                <Box sx={{ color: "#d4af37", p: 1, borderRadius: 1 }}>
                    {item.icon}
                </Box>
                <Typography>{item.text}</Typography>
                </Paper>
            </Grid>
            ))}

        </Grid>

        {/* Botón principal */}
        <a
          href="mailto:obedh61@gmail.com?subject=בקשה%20להצעת%20מחיר&body=שלום%20אני%20מעוניין%20לקבל%20הצעת%20מחיר"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 4,
              width: { xs: "100%", sm: "auto" },
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              color: "#fff",
              border: "2px solid #ffd700",
              borderRadius: "12px",
              textShadow: "0 0 6px rgba(0,0,0,0.3)",
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
              background: "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)",
              backgroundSize: "200% 200%",
              animation: "shine 3s linear infinite",
              transition: "all 0.3s ease",
              "@keyframes shine": {
                "0%": { backgroundPosition: "200% 0" },
                "100%": { backgroundPosition: "-200% 0" },
              },
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 25px rgba(255, 215, 0, 0.8)",
                background: "linear-gradient(90deg, #ffcc00, #fff8dc, #ffcc00)",
                backgroundSize: "200% 200%",
              },
            }}
          >
            קבל הצעת מחיר חינם
          </Button>
        </a>



      </Box>

      {/* Footer */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ mt: 4, mb: 1, textAlign: "center" }}
      >
        © 2024 עובד התקנות . כל הזכויות שמורות.
      </Typography>
    </Box>
  );
};

export default DigitalBusinessCard;
