import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid2,
  Container,
  Box,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ISlotList } from "@/app/type/ISlot";
import SlotListSkeleton from "@/app/common/skeleton/SlotListSkeleton";
import { IDoctorList } from "@/app/type/IDoctor";

interface IProps {
  loading: boolean;
  doctors: IDoctorList | undefined;
  doctorId: string;
  data: ISlotList | undefined;
  setSlotId: (id: string) => void;
}

const SlotList = ({ loading, doctors, doctorId, data, setSlotId }: IProps) => {
  const doctor = doctors?.doctors.find((d) => d._id === doctorId);
  return (
    <Container>
      <Box style={{ padding: "2rem", backgroundColor: "primary" }}>
        <Typography variant="h4" gutterBottom align="center">
          Available Slots
        </Typography>
      </Box>
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {loading
          ? Array(3)
              .fill(null)
              .map((_, index) => <SlotListSkeleton key={index} />)
          : data?.slots.map((value, index) => {
              // Check if the slot is already booked
              const isAvailable = value.isAvailable;

              return (
                <Grid2 size={4} key={value._id}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      margin: "1.5rem auto",
                      borderRadius: "16px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      // background: "linear-gradient(145deg, #6e7dff, #5360ea)",
                      background: isAvailable ? "#000000" : "#818274",
                      overflow: "hidden",
                    }}
                  >
                    <CardContent sx={{ color: "#fff", padding: "2rem" }}>
                      {/* Slot Number Title */}
                      <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                      >
                        {index + 1} Slot
                      </Typography>

                      {/* Appointment Date */}
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "center", marginBottom: "0.5rem" }}
                      >
                        <AccessTime
                          sx={{ verticalAlign: "middle", marginRight: "8px" }}
                        />
                        date : {value.date.split("T")[0]} | time : {value.time}
                      </Typography>

                      {/* Appointment Fees */}
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "center", marginBottom: "1rem" }}
                      >
                        <CurrencyRupeeIcon
                          sx={{ verticalAlign: "middle", marginRight: "8px" }}
                        />
                        Fees :{doctor?.fees}
                      </Typography>

                      {/* Action Buttons */}
                      <Grid2 container spacing={2} columns={12}>
                        <Grid2 size={6}>
                          <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            sx={{ borderRadius: "8px" }}
                            onClick={() => isAvailable && setSlotId(value._id)}
                            disabled={!isAvailable}
                          >
                            Confirm
                          </Button>
                        </Grid2>
                        <Grid2 size={6}>
                          <Button
                            variant="outlined"
                            color="error"
                            fullWidth
                            sx={{ borderRadius: "8px" }}
                            disabled={!isAvailable}
                          >
                            Cancel
                          </Button>
                        </Grid2>
                      </Grid2>
                    </CardContent>
                  </Card>
                </Grid2>
              );
            })}
      </Grid2>
    </Container>
  );
};

export default SlotList;
