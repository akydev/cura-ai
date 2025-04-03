"use client";

import { Card, CardContent, Container, Typography } from "@mui/material";
import DoctorProfile from "../../components/profile/DoctorProfile";
import UserProfile from "../../components/profile/UserProfile";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { IUser } from "@/app/type/IUser";
import { IDoctor } from "@/app/type/IDoctor";
import EditProfile from "@/app/components/profile/EditProfile";
import EditDoctorProfile from "@/app/components/profile/EditDoctorProfile";

function page() {
  const { user, setUser } = useAuth();
  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [showProfile, setShowProfile] = useState("details");
  // console.log(user);
  useEffect(() => {
    // Ensure this code only runs on the client
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    } // Simulating loading delay for user data
    if (user === null) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [user]); // Watch user to trigger loading state updates
  //  // Empty dependency array ensures this runs only once after the component mounts

  // Type Guards
  const isPatient = role === "patient" && user !== null;
  const isDoctor = role === "doctor" && user !== null;
  const handleClick = (type: string) => setShowProfile(type);

  // Show a loading message until the user data is fetched
  if (isLoading) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 9,
        }}
      >
        <Card
          sx={{ width: "100%", height: "auto", maxWidth: 500, boxShadow: 3 }}
        >
          <CardContent sx={{ padding: 4 }}>
            <Typography variant="h4" textAlign="center">
              Loading profile...
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <React.Fragment>
      {showProfile === "details" && (
        <>
          {isPatient ? (
            <UserProfile data={user as IUser} handleClick={handleClick} />
          ) : isDoctor ? (
            <DoctorProfile data={user as IDoctor} handleClick={handleClick} />
          ) : (
            <Container
              maxWidth="lg"
              sx={{
                display: "flex", // Flexbox layout
                alignItems: "center", // Vertically center the content
                justifyContent: "center", // Horizontally center the content
                padding: 9, // Optional: Adds some padding around the content
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: 500,
                  boxShadow: 3,
                  borderRadius: 3,
                  backgroundColor: "primary",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent sx={{ padding: 4, paddingBottom: 2 }}>
                  <Typography
                    variant="h4"
                    textAlign="center"
                    sx={{
                      fontWeight: "bold",
                      color: "#3f51b5",
                      marginBottom: 2,
                    }}
                  >
                    Profile does not exist.
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          )}
        </>
      )}
      {/* Conditionally Render EditProfile with Correct Type */}
      {showProfile === "edit" && (
        <>
          {isPatient ? (
            <EditProfile
              user={user as IUser}
              setUser={
                setUser as React.Dispatch<React.SetStateAction<IUser | null>>
              }
            />
          ) : isDoctor ? (
            <EditDoctorProfile
              user={user as IDoctor}
              setUser={
                setUser as React.Dispatch<React.SetStateAction<IDoctor | null>>
              } // ✅ Correct
            />
          ) : null}
        </>
      )}
    </React.Fragment>
  );
}

export default page;
