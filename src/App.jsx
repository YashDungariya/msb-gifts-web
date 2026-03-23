import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
  createTheme,
  ThemeProvider,
  CssBaseline,
  IconButton,
  Rating,
  Avatar,
  Fab,
  Zoom,
  Tooltip,
} from "@mui/material";

import {
  WhatsApp,
  Instagram,
  Facebook,
  LocationOn,
  Email,
  Phone,
} from "@mui/icons-material";
import clientLogo from "./assets/logo.png";
import googleLogo from "./assets/google-logo.png";

// --- Theme Setup (Aesthetic & Minimal) ---
const theme = createTheme({
  palette: {
    primary: { main: "#FDCB6E" }, // Warm Yellow from the image
  },
  typography: {
    fontFamily: "'Inter', 'Poppins', sans-serif",
    h1: { fontWeight: 700, letterSpacing: "-2px" },
  },
});

function App() {
  // Navigation Smooth Scroll (Optional)
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* MAIN WRAPPER: Yahan aap apni Background Image ka path dalen */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2000')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* --- 1. MINIMALIST NAVBAR (Gift Shop Version) --- */}
        <Box sx={{ position: "absolute", width: "100%", zIndex: 10, top: 0 }}>
          {/* 1. TOP BAR (Contact & Socials) */}
          <Box
            sx={{
              bgcolor: "rgba(0,0,0,0.2)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              py: 1,
              display: { xs: "none", md: "block" }, // Mobile pe hide rahega clean look ke liye
            }}
          >
            <Container maxWidth="lg">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Contact Info Group */}
                <Stack direction="row" spacing={4}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Phone sx={{ color: "#FDCB6E", fontSize: "0.9rem" }} />
                    <Typography
                      variant="caption"
                      sx={{ color: "white", fontWeight: 500 }}
                    >
                      +91 77780 77229
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Email sx={{ color: "#FDCB6E", fontSize: "0.9rem" }} />
                    <Typography
                      variant="caption"
                      sx={{ color: "white", fontWeight: 500 }}
                    >
                      maasundribhavanigiftarticles@gmail.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOn sx={{ color: "#FDCB6E", fontSize: "0.9rem" }} />
                    <Typography
                      variant="caption"
                      sx={{ color: "white", fontWeight: 500 }}
                    >
                      Rajkot, Gujarat
                    </Typography>
                  </Stack>
                </Stack>

                {/* Social Icons Group */}
                <Stack direction="row" spacing={2}>
                  {/* Instagram Link */}
                  <IconButton
                    size="small"
                    component="a"
                    href="https://www.instagram.com/maa_sundari_bhavani_gift_artic?igsh=MTlwZWVtbGRmMnRu"
                    target="_blank" // New tab me khulne ke liye
                    rel="noopener noreferrer"
                    sx={{ color: "white", "&:hover": { color: "#FDCB6E" } }}
                  >
                    <Instagram sx={{ fontSize: "1.1rem" }} />
                  </IconButton>

                  {/* WhatsApp Link (Replace XXXXXXXXXX with actual 10-digit number) */}
                  <IconButton
                    size="small"
                    component="a"
                    href="https://wa.me/917778077229" // 91 ke baad client ka number likhein
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "white", "&:hover": { color: "#FDCB6E" } }}
                  >
                    <WhatsApp sx={{ fontSize: "1.1rem" }} />
                  </IconButton>

                  {/* Facebook Link (Placeholder) */}
                  <IconButton
                    size="small"
                    component="a"
                    href="https://facebook.com" // Yahan Facebook link dalen
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "white", "&:hover": { color: "#FDCB6E" } }}
                  >
                    <Facebook sx={{ fontSize: "1.1rem" }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Container>
          </Box>

          {/* 2. MAIN NAVBAR */}
          <AppBar
            position="static"
            sx={{ bgcolor: "transparent", boxShadow: "none", py: 2 }}
          >
            <Container maxWidth="lg">
              <Toolbar
                sx={{ justifyContent: "space-between", px: "0 !important" }}
              >
                {/* Logo Group */}
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    component="img"
                    src={clientLogo}
                    alt="MSB Gifts Logo"
                    sx={{
                      height: { xs: 50, md: 80 }, // Logo thoda bada rakha hai jaisa aapne set kiya tha
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Stack>

                {/* Nav Links */}
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  {["Home", "About", "Gifts", "Review", "Contact"].map(
                    (item) => (
                      <Typography
                        key={item}
                        onClick={() => scrollTo(item.toLowerCase())}
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          cursor: "pointer",
                          fontSize: "0.85rem",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          transition: "0.3s",
                          "&:hover": { color: "#FDCB6E" },
                        }}
                      >
                        {item}
                      </Typography>
                    ),
                  )}
                </Stack>

                {/* Action Button */}
                <Button
                  variant="contained"
                  onClick={() => scrollTo("contact")}
                  sx={{
                    bgcolor: "#FDCB6E",
                    color: "#000",
                    borderRadius: "4px",
                    px: 4,
                    py: 1.2,
                    textTransform: "uppercase",
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    letterSpacing: "1px",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#f1bd5a", boxShadow: "none" },
                  }}
                >
                  Contact Now
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>

        {/* --- 2. HERO CONTENT --- */}
        <Container
          maxWidth="lg"
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center", maxWidth: "950px" }}>
            <Box sx={{ position: "relative", display: "inline-block", mb: 6 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3.5rem", md: "6rem" }, // Thoda size bada kiya hai impact ke liye
                  color: "white",
                  lineHeight: 1, // 0.85 se 1 kiya taaki spacing maintain ho
                  fontWeight: 900,
                  textShadow: "0 10px 40px rgba(0,0,0,0.3)",

                  // --- Spacing Controls ---
                  letterSpacing: { xs: "1px", md: "4px" }, // Characters ke bich ki space (Modern look ke liye minus mein rakha hai)
                  wordSpacing: { xs: "5px", md: "15px" }, // Words ke bich ki space

                  textTransform: "none",
                }}
              >
                Celebrate every <br /> special moment
              </Typography>

              {/* Yellow Accent Underline - Adjusted for new spacing */}
              <Box
                sx={{
                  height: "10px",
                  width: "40%",
                  bgcolor: "#FDCB6E",
                  mx: "auto",
                  mt: 3,
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(253, 203, 110, 0.4)", // Soft glow for the line
                }}
              />
            </Box>

            <Box>
              <Button
                variant="contained"
                // Yahan click event add kiya gaya hai
                onClick={() => scrollTo("gifts")}
                sx={{
                  bgcolor: "#FDCB6E",
                  color: "#000",
                  borderRadius: "4px",
                  px: 6,
                  py: 2.5,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "1.5px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  "&:hover": {
                    bgcolor: "#f1bd5a",
                    transform: "translateY(-2px)",
                  },
                  transition: "0.3s",
                }}
              >
                Explore Collection
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- ABOUT SECTION --- */}
      <Box
        id="about"
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "#FFFFFF",
          color: "#1A1A1A",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 6, md: 12 },
              alignItems: "center",
            }}
          >
            {/* Left Side: Minimal Content */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#FDCB6E",
                  fontWeight: 800,
                  letterSpacing: "4px",
                  display: "block",
                  mb: 1,
                }}
              >
                OUR LEGACY
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1,
                  mb: 3,
                  fontSize: { xs: "3rem", md: "4rem" },
                  letterSpacing: "-3px",
                }}
              >
                Gifts that <br />
                <span style={{ color: "#FDCB6E" }}>define you.</span>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#5F6368",
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  maxWidth: "450px",
                  mb: 5,
                  fontWeight: 500,
                }}
              >
                Maa Sundari Bhavani Gift Article Private Limited is Rajkot's
                premier destination for handpicked gift articles. We believe in
                quality, uniqueness, and the art of giving.
              </Typography>

              {/* Stats: Clean & Horizontal */}
              <Stack direction="row" spacing={8}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900 }}>
                    15+
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 700, color: "#FDCB6E" }}
                  >
                    YEARS
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900 }}>
                    5K+
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 700, color: "#FDCB6E" }}
                  >
                    COLLECTION
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Right Side: Simple Image */}
            <Box sx={{ flex: 1, width: "100%" }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000"
                alt="Premium Gift"
                sx={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  boxShadow: "50px 50px 0px -10px #FDCB6E", // Thinner & cleaner shadow
                  transition: "0.5s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- GIFTS CATEGORIES SECTION --- */}
      <Box
        id="gifts"
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "#F9F9F9", // Subtle grey background to separate from About section
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ mb: 10, textAlign: "left" }}>
            <Typography
              variant="overline"
              sx={{ color: "#FDCB6E", fontWeight: 800, letterSpacing: "2px" }}
            >
              OUR COLLECTION
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mt: 1,
                fontSize: { xs: "2.5rem", md: "4rem" },
                letterSpacing: "-1px",
              }}
            >
              Gifts for every <br />
              <span style={{ color: "#FDCB6E" }}>Emotion.</span>
            </Typography>
          </Box>

          {/* Categories Flex Grid */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {[
              {
                title: "Personalized Gifts",
                img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600",
              },
              {
                title: "Modern Home Decor",
                img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600",
              },
              {
                title: "Premium Toys",
                img: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=600",
              },
              {
                title: "Exclusive Frames",
                img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600",
              },
            ].map((cat, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" },
                  position: "relative",
                  overflow: "hidden",
                  height: "450px",
                  cursor: "pointer",
                  transition: "0.5s ease-in-out",
                  "&:hover": {
                    "& .cat-img": { transform: "scale(1.1)" },
                    "& .cat-overlay": { bgcolor: "rgba(0,0,0,0.5)" },
                  },
                }}
              >
                {/* Category Image */}
                <Box
                  className="cat-img"
                  component="img"
                  src={cat.img}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.7s ease",
                  }}
                />

                {/* Dark Overlay with Title */}
                <Box
                  className="cat-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 4,
                    transition: "0.4s",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: 800, mb: 1 }}
                  >
                    {cat.title}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{
                      color: "#FDCB6E",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "1px",
                    }}
                  >
                    VIEW DETAILS →
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* --- GOOGLE REVIEWS STYLE SECTION --- */}
      <Box id="review" sx={{ py: { xs: 10, md: 15 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: "#FDCB6E", fontWeight: 800, letterSpacing: "2px" }}
            >
              GOOGLE REVIEWS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mt: 1,
                fontSize: { xs: "2.5rem", md: "4rem" },
                letterSpacing: "-2px",
              }}
            >
              What our <span style={{ color: "#FDCB6E" }}>Clients say.</span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {[
              {
                name: "Rahul Sharma",
                date: "2 months ago",
                text: "Maa Sundari Bhavani has the best gift variety in Rajkot. Their personalized frames are of top-notch quality. Highly recommended!",
                avatar: "R",
              },
              {
                name: "Priya Patel",
                date: "1 month ago",
                text: "Found a very unique collection at a reasonable price. This is my favorite gift shop in Gujarat. Great service!",
                avatar: "P",
              },
              {
                name: "Ankit Mehta",
                date: "3 weeks ago",
                text: "Excellent customer service! I ordered an anniversary gift and it was delivered perfectly on time. 5 stars for the quality.",
                avatar: "A",
              },
            ].map((rev, i) => (
              <Box
                key={i}
                sx={{
                  flex: 1,
                  p: 4,
                  bgcolor: "#fff",
                  borderRadius: "12px",
                  border: "1px solid #E0E0E0",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  },
                }}
              >
                {/* Header: Avatar, Name & Google Logo */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ mb: 2 }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "#FDCB6E", fontWeight: 700 }}>
                      {rev.avatar}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, lineHeight: 1.2 }}
                      >
                        {rev.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {rev.date}
                      </Typography>
                    </Box>
                  </Stack>
                  {/* Google Icon Placeholder */}
                  <Box
                    component="img"
                    src={googleLogo}
                    sx={{ width: 35, height: 35 }}
                  />
                </Stack>

                {/* 5 Star Rating */}
                <Rating
                  value={5}
                  readOnly
                  size="small"
                  sx={{ mb: 2, color: "#FBBC04" }}
                />

                {/* Review Text */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#444",
                    lineHeight: 1.6,
                    minHeight: "80px",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {rev.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Bottom Link to Google Profile */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="text"
              sx={{ color: "#4285F4", fontWeight: 700, textTransform: "none" }}
              href="#" // Replace with actual Google Maps Review link
              target="_blank"
            >
              View more reviews on Google Maps →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* --- CONTACT SECTION (With Full Color Map) --- */}
      <Box id="contact" sx={{ py: { xs: 10, md: 15 }, bgcolor: "#F9F9F9" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 10,
            }}
          >
            {/* Left side: Contact Details */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="overline"
                sx={{ color: "#FDCB6E", fontWeight: 800, letterSpacing: "2px" }}
              >
                GET IN TOUCH
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mt: 1,
                  mb: 6,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                }}
              >
                Visit our <span style={{ color: "#FDCB6E" }}>Shop.</span>
              </Typography>

              <Stack spacing={4}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <LocationOn sx={{ color: "#FDCB6E" }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      Store Address
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#5F6368" }}>
                      MAA SUNDARI BHAVANI GIFT ARTICLE PRIVATE LIMITED, <br />
                      Mavdi Chowkdi Main Road, Opp. Jitariya Bala Hanumanji
                      Temple, Rajkot, Gujarat - 360004
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Phone sx={{ color: "#FDCB6E" }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      Call Us
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#5F6368" }}>
                      +91 77780 77229
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Email sx={{ color: "#FDCB6E" }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      Email Address
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#5F6368" }}>
                      maasundribhavanigiftarticles@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              {/* Social Icons */}
              <Stack direction="row" spacing={2} sx={{ mt: 6 }}>
                {[
                  {
                    icon: <WhatsApp />,
                    link: "https://wa.me/917778077229", // Yahan client ka 10-digit number likhein
                  },
                  {
                    icon: <Instagram />,
                    link: "https://www.instagram.com/maa_sundari_bhavani_gift_artic?igsh=MTlwZWVtbGRmMnRu",
                  },
                  {
                    icon: <Facebook />,
                    link: "https://facebook.com/your-page-link", // Yahan Facebook link dalen
                  },
                ].map((item, i) => (
                  <IconButton
                    key={i}
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "#1A1A1A",
                      color: "white",
                      p: 1.3, // Thoda padding badhaya hai taaki click karne mein aasani ho
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#FDCB6E",
                        color: "black",
                        transform: "translateY(-3px)", // Chota sa animation effect
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>

            {/* Right side: Google Map Embed (Color Filter Removed) */}
            <Box
              sx={{
                flex: 1.2,
                height: { xs: "400px", md: "auto" },
                minHeight: "500px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "450px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="MSB Gifts Exact Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3691.758!2d70.781083!3d22.26386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE1JzQ5LjkiTiA3MMKwNDcnMDEuMiJF!5e0!3m2!1sen!2sin!4v1711180000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- SIMPLE FOOTER --- */}
      <Box
        sx={{
          py: 4,
          textAlign: "center",
          bgcolor: "#FFFFFF",
          borderTop: "1px solid #EEEEEE",
        }}
      >
        <Typography variant="body2" sx={{ color: "#5F6368", fontWeight: 500 }}>
          © {new Date().getFullYear()} MAA SUNDARI BHAVANI GIFT ARTICLE PRIVATE
          LIMITED ALL RIGHTS RESERVED.
        </Typography>
      </Box>

      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
          <Fab
            color="success"
            aria-label="whatsapp"
            onClick={() =>
              window.open(
                "https://wa.me/917778077229?text=Hi!%20I%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20your%20gifts.",
                "_blank",
              )
            }
            sx={{
              position: "fixed",
              bottom: { xs: 20, md: 40 },
              right: { xs: 20, md: 40 },
              bgcolor: "#25D366", // WhatsApp Official Green
              color: "white",
              width: { xs: 55, md: 65 },
              height: { xs: 55, md: 65 },
              boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)",
              zIndex: 2000,
              "&:hover": {
                bgcolor: "#128C7E", // Darker green on hover
                transform: "scale(1.1) rotate(10deg)", // Modern bounce & tilt effect
              },
              transition: "0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <WhatsApp sx={{ fontSize: { xs: 30, md: 35 } }} />
          </Fab>
        </Zoom>
      </Tooltip>
    </ThemeProvider>
  );
}

export default App;
