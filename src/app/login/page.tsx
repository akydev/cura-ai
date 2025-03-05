// "use client";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid2,
//   Typography,
//   TextField,
// } from "@mui/material";
// import React, { useCallback, useRef, useState } from "react";
// import authFetch from "../axiosBase/custom";

// function page() {
//   console.log("✅ Form Component Rendered"); // Should NOT re-render on every keystroke!

//   // Use state to store form data (email and password)
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   // Ensure the correct type for the input elements: HTMLInputElement | null
//   const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

//   // Handle input changes
//   const handleInputChange = useCallback(() => {
//     console.log("Current Input Values:", {
//       email: inputRefs.current["email"]?.value,
//       password: inputRefs.current["password"]?.value,
//     });
//   }, []);

//   const handleSubmit = useCallback(async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Access values directly from the refs
//     const email = inputRefs.current["email"]?.value || "";
//     const password = inputRefs.current["password"]?.value || "";

//     console.log("Form Data Sent:", { email, password }); // Log values before sending

//     // Check if all fields are filled out
//     if (!email || !password) {
//       console.log("All fields are required");
//       return; // Don't submit if any field is empty
//     }

//     try {
//       // Send the login request using the values directly from the refs
//       const res = await authFetch.post("/accounts/login", { email, password });
//       console.log(res.data);

//       // You can optionally store the data in the state after a successful login
//       // setFormData({ email, password });
//     } catch (error: any) {
//       console.log(error.response?.data?.msg || "An error occurred");
//     }
//   }, []);

//   return (
//     <Container
//       component="main"
//       maxWidth="md"
//       sx={{
//         display: "flex",
//         height: "100vh",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Grid2 container spacing={2} columns={12}>
//         {/* Left Section (Logo and Welcome Message) */}
//         <Grid2 size={6}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               textAlign: "center",
//             }}
//           >
//             <img
//               src="/images/hero-background.png"
//               alt="Logo"
//               style={{ width: "100%", height: "auto", borderRadius: "10px" }}
//             />
//             <Typography variant="h4" sx={{ mt: 3 }}>
//               Welcome to Our Platform
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 2 }}>
//               Join us and experience something amazing!
//             </Typography>
//           </Box>
//         </Grid2>

//         {/* Right Section (Login Card) */}
//         <Grid2 size={6}>
//           <Card sx={{ padding: 3 }}>
//             <CardContent>
//               <Typography variant="h5" align="center" sx={{ mb: 2 }}>
//                 Login to Your Account
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <TextField
//                   label="Email Address"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="email"
//                   type="email"
//                   ref={(el: any) => (inputRefs.current["email"] = el)} // Correct type for ref
//                   error={formData.email === ""} // Optional: error condition based on form state
//                   helperText={formData.email === "" ? "Email is required" : ""} // Optional: error message
//                   onChange={handleInputChange}
//                 />
//                 <TextField
//                   label="Password"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="password"
//                   type="password"
//                   ref={(el: any) => (inputRefs.current["password"] = el)} // Correct type for ref
//                   error={formData.password === ""} // Optional: error condition based on form state
//                   helperText={
//                     formData.password === "" ? "Password is required" : ""
//                   } // Optional: error message
//                   onChange={handleInputChange}
//                 />
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   type="submit"
//                   sx={{ mt: 3 }}
//                 >
//                   Log in
//                 </Button>
//               </form>
//               <Box sx={{ textAlign: "center", mt: 2 }}>
//                 <Typography variant="body2">
//                   Don't have an account?{" "}
//                   <a
//                     href="/signup"
//                     style={{
//                       fontWeight: "bold",
//                       textDecoration: "none",
//                       color: "#1976d2",
//                     }}
//                   >
//                     Sign up here
//                   </a>
//                 </Typography>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid2>
//       </Grid2>
//     </Container>
//   );
// }

// export default page;

"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Typography,
  TextField,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import authFetch from "../axiosBase/custom";

function page() {
  console.log("✅ Form Component Rendered");

  // Use state to store form data (email and password)
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const { email, password } = formData;

      console.log("Form Data Sent:", { email, password });

      if (!email || !password) {
        console.log("All fields are required");
        return;
      }

      try {
        setLoading(true);
        const res = await authFetch.post("/accounts/login", {
          email,
          password,
        });

        console.log(res.data); // Successful response

        // Store the token and userId in localStorage or sessionStorage
        const { token, userId, role } = res.data;
        localStorage.setItem("token", token); // Store token
        localStorage.setItem("userId", userId); // Store user ID
        localStorage.setItem("role", role); // Store role

        // Optionally store in state if needed for immediate access within the app
        setFormData({ email: "", password: "" }); // Reset the form
      } catch (error: any) {
        console.log(error.response?.data?.msg || "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [formData]
  );

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2 container spacing={2} columns={12}>
        {/* Left Section (Logo and Welcome Message) */}
        <Grid2
          size={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }
            }
          >
            <img
              src="/logo/cura-ai.png"
              alt="Logo"
              style={{
                width: "50%",
                maxWidth: "200px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
            <Typography variant="h4" sx={{ mt: 3 }}>
              Welcome to Our Platform
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Join us and experience something amazing!
            </Typography>
          </Box>
        </Grid2>

        {/* Right Section (Login Card) */}
        <Grid2 size={6}>
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                Login to Your Account
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  type="email"
                  value={formData.email} // Binding state to the input
                  error={formData.email === ""}
                  helperText={formData.email === "" ? "Email is required" : ""}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="password"
                  type="password"
                  value={formData.password} // Binding state to the input
                  error={formData.password === ""}
                  helperText={
                    formData.password === "" ? "Password is required" : ""
                  }
                  onChange={handleInputChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  sx={{ mt: 3 }}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log in"}
                </Button>
              </form>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    style={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "#1976d2",
                    }}
                  >
                    Sign up here
                  </a>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default page;
