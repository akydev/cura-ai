"use client";
import React from "react";
import DoctorList from "../components/DoctorList";
import SpecialtyList from "../components/SpecialtyList";
import ViewAppointment from "../components/ViewAppointment";
import SpecialtySkeleton from "../common/skeleton/SpecialtySkeleton";
import ViewAppointmentSkeleton from "../common/skeleton/ViewAppointmentSkeleton";
import DoctorLIstSkeleton from "../common/skeleton/DoctorLIstSkeleton";
import PositionedSnackbar from "../common/toastfy/PositionedSnackbar";

function page() {
  return (
    <>
      {/* <ViewAppointment /> */}
      {/* <ViewAppointmentSkeleton /> */}
      {/* <DoctorList /> */}
      {/* <DoctorLIstSkeleton /> */}
      {/* <SpecialtySkeleton /> */}
      <SpecialtyList />
      {/* <PositionedSnackbar /> */}
    </>

    // login form
    //  // Use useRef to hold form values
    //  const emailRef = useRef<HTMLInputElement | null>(null);
    //  const passwordRef = useRef<HTMLInputElement | null>(null);

    //  const [error, setError] = useState<string>("");

    //  // Use useCallback to memoize the submit handler to avoid unnecessary re-renders
    //  const handleSubmit = useCallback((e: React.FormEvent) => {
    //    e.preventDefault();
    //    setError(""); // Reset error

    //    // Accessing form values using refs
    //    const email = emailRef.current?.value;
    //    const password = passwordRef.current?.value;

    //    // Basic validation
    //    if (!email || !password) {
    //      setError("Please fill in both fields.");
    //      return;
    //    }

    //    // You can replace this with actual API call logic for login
    //    console.log("Login data submitted:", { email, password });
    //  }, []);

    // <form onSubmit={handleSubmit}>
    //       <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <TextField
    //             fullWidth
    //             label="Email"
    //             variant="outlined"
    //             type="email"
    //             inputRef={emailRef} // Attach ref here
    //             error={!!error}
    //             helperText={error && "Email is required."}
    //             required
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             fullWidth
    //             label="Password"
    //             variant="outlined"
    //             type="password"
    //             inputRef={passwordRef} // Attach ref here
    //             error={!!error}
    //             helperText={error && "Password is required."}
    //             required
    //           />
    //         </Grid>
    //         {error && (
    //           <Grid item xs={12}>
    //             <Typography color="error" variant="body2" align="center">
    //               {error}
    //             </Typography>
    //           </Grid>
    //         )}
    //         <Grid item xs={12}>
    //           <Button
    //             type="submit"
    //             variant="contained"
    //             fullWidth
    //             sx={styles.submitButton}
    //           >
    //             Login
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </form>
    //   </Paper>
    // </Box>

    // export default React.memo(LoginForm); // Use React.memo to prevent unnecessary re-renders
  );
}

export default page;
