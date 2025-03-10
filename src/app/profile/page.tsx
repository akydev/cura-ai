"use client";

import { Typography } from "@mui/material";
import DoctorProfile from "../Components/DoctorProfile";
import UserProfile from "../Components/UserProfile";
import { useEffect, useState } from "react";

function page() {
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    // Ensure this code only runs on the client
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  console.log(role); // Will log the role once it's retrieved from localStorage

  return (
    <>
      {role === "patient" ? (
        <UserProfile />
      ) : role === "doctor" ? (
        <DoctorProfile />
      ) : (
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: "bold", color: "#3f51b5", marginBottom: 2 }}
        >
          Profile does not exits.
        </Typography>
      )}
    </>
  );
}

export default page;
