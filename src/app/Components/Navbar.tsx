"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Switch,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo/cura-ai.png"; // Ensure logo is in the public folder
import { useThemeContext } from "../context/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const { toggleTheme, currentTheme } = useThemeContext();

  // State to track if component is mounted on the client side
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Set the isMounted state to true after the component is mounted on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering on the server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <AppBar
      position="sticky"
      color={currentTheme === "light" ? "primary" : "secondary"} // Change AppBar color based on theme
      sx={{
        backdropFilter: "blur(10px)", // Apply blur effect
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // Custom shadow
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 16px", // Add horizontal padding for consistency
        }}
      >
        {/* Left Side: Logo and Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Website Logo"
              width={40}
              height={40}
              priority
            />
          </Link>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ padding: "8px 16px", lineHeight: 1 }}
          >
            Cura Ai
          </Typography>
        </Box>

        {/* Right Side: Navigation Links and Theme Toggle */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          {/* Navigation Links */}
          <Link href="/about">
            <Button
              color="inherit"
              sx={{
                transition: "color 0.3s ease, border-bottom 0.3s ease",
                position: "relative",
                padding: "8px 16px",
                "&:hover": {
                  color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor:
                    currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.3s ease",
                },
                "&:hover:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              color="inherit"
              sx={{
                transition: "color 0.3s ease, border-bottom 0.3s ease",
                position: "relative",
                padding: "8px 16px",
                "&:hover": {
                  color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor:
                    currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.3s ease",
                },
                "&:hover:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              Contact
            </Button>
          </Link>
          <Link href="/service">
            <Button
              color="inherit"
              sx={{
                transition: "color 0.3s ease, border-bottom 0.3s ease",
                position: "relative",
                padding: "8px 16px",
                "&:hover": {
                  color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor:
                    currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.3s ease",
                },
                "&:hover:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              Service
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              color="inherit"
              sx={{
                transition: "color 0.3s ease, border-bottom 0.3s ease",
                position: "relative",
                padding: "8px 16px",
                "&:hover": {
                  color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor:
                    currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.3s ease",
                },
                "&:hover:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              Sign up
            </Button>
          </Link>
          <Link href="/login">
            <Button
              color="inherit"
              sx={{
                transition: "color 0.3s ease, border-bottom 0.3s ease",
                position: "relative",
                padding: "8px 16px",
                "&:hover": {
                  color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor:
                    currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.3s ease",
                },
                "&:hover:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              Log in
            </Button>
          </Link>

          {/* Theme Toggle */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <Switch checked={currentTheme === "dark"} onChange={toggleTheme} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// "use client";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Switch,
// } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "/public/logo/cura-ai.png"; // Ensure logo is in the public folder
// import { useThemeContext } from "../context/ThemeContext";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { useEffect, useState } from "react";

// const Navbar: React.FC = () => {
//   const { toggleTheme, currentTheme } = useThemeContext();

//   // State to track if component is mounted on the client side
//   const [isMounted, setIsMounted] = useState<boolean>(false);

//   // Set the isMounted state to true after the component is mounted on the client side
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Prevent rendering on the server to avoid hydration mismatch
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <AppBar
//       position="sticky"
//       color={currentTheme === "light" ? "primary" : "secondary"} // Change AppBar color based on theme
//       sx={{
//         backdropFilter: "blur(10px)", // Apply blur effect
//         boxShadow:
//           "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // Custom shadow
//         zIndex: 1100,
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         {/* Left Side: Logo and Title */}
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Link href="/" passHref>
//             <Image
//               src={logo}
//               alt="Website Logo"
//               width={30}
//               height={30}
//               priority
//               style={{ marginRight: "10px" }}
//             />
//           </Link>
//           <Typography variant="h6" color="inherit">
//             Cura Ai
//           </Typography>
//         </Box>

//         {/* Right Side: Navigation Links */}
//         <Box sx={{ display: "flex", gap: 3 }}>
//           <Link href="/about">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease", // Smooth transition for color and underline
//                 position: "relative", // Required to apply underline effect
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9", // Gold on light mode, Blue on dark mode
//                 },
//                 "&:after": {
//                   content: '""', // Creates the underline
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9", // Gold on light mode, Blue on dark mode
//                   transform: "scaleX(0)", // Initially hidden
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease", // Smooth animation for the underline
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)", // Show underline on hover
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               About
//             </Button>
//           </Link>
//           <Link href="/contact">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Contact
//             </Button>
//           </Link>
//           <Link href="/service">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Service
//             </Button>
//           </Link>
//           <Link href="/signup">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Sign up
//             </Button>
//           </Link>
//           <Link href="/login">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Log in
//             </Button>
//           </Link>

//           {/* Right Side: Theme Toggle */}
//           <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
//             {/* Toggle Switch */}
//             <IconButton onClick={toggleTheme} color="inherit">
//               {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//             </IconButton>
//             <Switch checked={currentTheme === "dark"} onChange={toggleTheme} />
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// "use client";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Switch,
// } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "/public/logo/cura-ai.png"; // Ensure logo is in the public folder
// import { useThemeContext } from "../context/ThemeContext";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { useEffect, useState } from "react";

// function Navbar() {
//   const { toggleTheme, currentTheme } = useThemeContext();

//   // State to track if component is mounted on the client side
//   const [isMounted, setIsMounted] = useState(false);

//   // Set the isMounted state to true after the component is mounted on the client side
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Prevent rendering on the server to avoid hydration mismatch
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <AppBar
//       position="sticky"
//       color={currentTheme === "light" ? "primary" : "secondary"} // Change AppBar color based on theme
//       sx={{
//         backdropFilter: "blur(10px)", // Apply blur effect
//         boxShadow:
//           "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // Custom shadow
//         zIndex: 1100,
//         paddingBottom: "0", // Fix unnecessary space at the bottom
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between", // Space between left side and right side
//           width: "100%",
//           alignItems: "center", // Vertically center the items
//           paddingTop: "0", // Remove any unnecessary padding
//           paddingBottom: "0", // Ensure no extra space at the bottom
//         }}
//       >
//         {/* Left Side: Logo and Title */}
//         {/* <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Website Logo"
//               width={30}
//               height={30}
//               priority
//               style={{ marginRight: "10px" }}
//             />
//           </Link>
//           <Typography variant="h6" color="inherit">
//             Cura Ai
//           </Typography>
//         </Box> */}

//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Website Logo"
//               width={30}
//               height={30}
//               priority
//               style={{ marginRight: "10px" }}
//             />
//           </Link>
//           <Typography variant="h6" color="inherit" sx={{ lineHeight: 1 }}>
//             Cura Ai
//           </Typography>
//         </Box>

//         {/* Right Side: Navigation Links */}
//         <Box sx={{ display: "flex", gap: 3 }}>
//           <Link href="/about">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease", // Smooth transition for color and underline
//                 position: "relative", // Required to apply underline effect
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9", // Gold on light mode, Blue on dark mode
//                 },
//                 "&:after": {
//                   content: '""', // Creates the underline
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9", // Gold on light mode, Blue on dark mode
//                   transform: "scaleX(0)", // Initially hidden
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease", // Smooth animation for the underline
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)", // Show underline on hover
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               About
//             </Button>
//           </Link>
//           <Link href="/contact">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Contact
//             </Button>
//           </Link>
//           <Link href="/service">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Service
//             </Button>
//           </Link>
//           <Link href="/signup">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Sign up
//             </Button>
//           </Link>
//           <Link href="/login">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Log in
//             </Button>
//           </Link>

//           {/* Right Side: Theme Toggle */}
//           <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
//             {/* Toggle Switch */}
//             <IconButton onClick={toggleTheme} color="inherit">
//               {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//             </IconButton>
//             <Switch checked={currentTheme === "dark"} onChange={toggleTheme} />
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

// "use client";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Switch,
// } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "/public/logo/cura-ai.png"; // Ensure logo is in the public folder
// import { useThemeContext } from "../context/ThemeContext";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { useEffect, useState } from "react";

// function Navbar() {
//   const { toggleTheme, currentTheme } = useThemeContext();

//   // State to track if component is mounted on the client side
//   const [isMounted, setIsMounted] = useState(false);

//   // Set the isMounted state to true after the component is mounted on the client side
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Prevent rendering on the server to avoid hydration mismatch
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <AppBar
//       position="sticky"
//       color={currentTheme === "light" ? "primary" : "secondary"} // Change AppBar color based on theme
//       sx={{
//         backdropFilter: "blur(10px)", // Apply blur effect
//         boxShadow:
//           "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // Custom shadow
//         zIndex: 1100,
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         {/* Left Side: Logo and Title */}
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Website Logo"
//               width={30}
//               height={30}
//               priority
//               style={{ marginRight: "10px" }}
//             />
//           </Link>
//           <Typography variant="h6" color="inherit">
//             Cura Ai
//           </Typography>
//         </Box>

//         {/* Right Side: Navigation Links */}
//         <Box sx={{ display: "flex", gap: 3 }}>
//           <Link href="/about">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease", // Smooth transition for color and underline
//                 position: "relative", // Required to apply underline effect
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9", // Gold on light mode, Blue on dark mode
//                 },
//                 "&:after": {
//                   content: '""', // Creates the underline
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9", // Gold on light mode, Blue on dark mode
//                   transform: "scaleX(0)", // Initially hidden
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease", // Smooth animation for the underline
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)", // Show underline on hover
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               About
//             </Button>
//           </Link>
//           <Link href="/contact">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Contact
//             </Button>
//           </Link>
//           <Link href="/service">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Service
//             </Button>
//           </Link>
//           <Link href="/signup">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Sign up
//             </Button>
//           </Link>
//           <Link href="/login">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease, border-bottom 0.3s ease",
//                 position: "relative",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "2px",
//                   backgroundColor:
//                     currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                   transform: "scaleX(0)",
//                   transformOrigin: "bottom right",
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover:after": {
//                   transform: "scaleX(1)",
//                   transformOrigin: "bottom left",
//                 },
//               }}
//             >
//               Log in
//             </Button>
//           </Link>

//           {/* Right Side: Theme Toggle */}
//           <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
//             {/* Toggle Switch */}
//             <IconButton onClick={toggleTheme} color="inherit">
//               {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//             </IconButton>
//             <Switch checked={currentTheme === "dark"} onChange={toggleTheme} />
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

// "use client";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Switch,
// } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "/public/logo/cura-ai.png"; // Ensure logo is in the public folder
// import { useThemeContext } from "../context/ThemeContext";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { useEffect, useState } from "react";

// function Navbar() {
//   const { toggleTheme, currentTheme } = useThemeContext();

//   // State to track if component is mounted on the client side
//   const [isMounted, setIsMounted] = useState(false);

//   // Set the isMounted state to true after the component is mounted on the client side
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Prevent rendering on the server to avoid hydration mismatch
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <AppBar
//       position="sticky"
//       color={currentTheme === "light" ? "primary" : "secondary"} // Change AppBar color based on theme
//       sx={{
//         backdropFilter: "blur(10px)", // Apply blur effect
//         boxShadow:
//           "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // Custom shadow
//         zIndex: 1100,
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         {/* Left Side: Logo and Title */}
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Website Logo"
//               width={40}
//               height={40}
//               priority
//               style={{ marginRight: "10px" }}
//             />
//           </Link>
//           <Typography variant="h6" color="inherit">
//             Cura Ai
//           </Typography>
//         </Box>

//         {/* Right Side: Navigation Links */}
//         <Box sx={{ display: "flex", gap: 3 }}>
//           <Link href="/about">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease", // Smooth transition for hover effect
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9", // Gold on light mode, Blue on dark mode
//                 },
//               }}
//             >
//               About
//             </Button>
//           </Link>
//           <Link href="/contact">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//               }}
//             >
//               Contact
//             </Button>
//           </Link>
//           <Link href="/service">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//               }}
//             >
//               Service
//             </Button>
//           </Link>
//           <Link href="/signup">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//               }}
//             >
//               Sign up
//             </Button>
//           </Link>
//           <Link href="/login">
//             <Button
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: currentTheme === "light" ? "#FFEB3B" : "#90CAF9",
//                 },
//               }}
//             >
//               Log in
//             </Button>
//           </Link>

//           {/* Right Side: Theme Toggle */}
//           <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
//             {/* Toggle Switch */}
//             <IconButton onClick={toggleTheme} color="inherit">
//               {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//             </IconButton>
//             <Switch checked={currentTheme === "dark"} onChange={toggleTheme} />
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

// "use client";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Switch,
// } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// // Import the image as a module
// import logo from "/public/logo/cura-ai.png";
// import { useThemeContext } from "../context/ThemeContext";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { useEffect, useState } from "react";

// function Navbar() {
//   const { toggleTheme, currentTheme } = useThemeContext();
//   // State to track if component is mounted on the client side
//   const [isMounted, setIsMounted] = useState(false);

//   // Set the isMounted state to true after the component is mounted on the client side
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Prevent rendering on the server to avoid hydration mismatch
//   if (!isMounted) {
//     return null;
//   }
//   return (
//     <AppBar
//       position="sticky"
//       color="primary"
//       sx={{
//         backdropFilter: "blur(10px)", // Apply blur effect
//         boxShadow:
//           "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // Custom shadow
//         zIndex: 1100,
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         {/* Left Side: Logo and Title */}
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Link href="/">
//             <Image
//               src={logo} // Ensure the logo is placed in the 'public' folder
//               alt="Website Logo"
//               width={40}
//               height={40}
//               priority
//               style={{ marginRight: "10px" }}
//             />
//           </Link>
//           <Typography variant="h6" color="inherit">
//             Cura Ai
//           </Typography>
//         </Box>

//         {/* Right Side: Navigation Links */}
//         <Box sx={{ display: "flex", gap: 3 }}>
//           <Link href="/about">
//             <Button color="inherit">About</Button>
//           </Link>
//           <Link href="/contact">
//             <Button color="inherit">Contact</Button>
//           </Link>
//           <Link href="/service">
//             <Button color="inherit">Service</Button>
//           </Link>
//           <Link href="/signup">
//             <Button color="inherit">Sign up</Button>
//           </Link>
//           <Link href="/login">
//             <Button color="inherit">Log in</Button>
//           </Link>

//           {/* right Side: Theme Toggle */}
//           <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
//             {/* Toggle Switch */}
//             <IconButton onClick={toggleTheme} color="inherit">
//               {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//             </IconButton>
//             <Switch checked={currentTheme === "dark"} onChange={toggleTheme} />
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;
