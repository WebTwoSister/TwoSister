"use client";
import Button from "@mui/material/Button";

export default function AppointmentButton({ name }: { name?: string }) {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        my: 4,
        minWidth: 200,
        maxWidth: 250,
        maxHeight: 50,
        fontSize: "18px",
        fontFamily: "var(--font-bubblegum)",
        borderRadius: "30px",
        backgroundColor: "#F88944",
        color: "#000",
        textTransform: "none", // Uppercase removal
        "&:hover": {
          backgroundColor: "#E0712C",
        },
      }}
    >
      {name || "Book Appointment"}
    </Button>
  );
}
