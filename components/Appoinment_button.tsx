"use client";
import Button from "@mui/material/Button";

export default function AppointmentButton({ name }: { name?: string }) {
  return (
    <Button
      variant="contained"
      size="large"
    >
      {name || "Book Appointment"}
    </Button>
  );
}
