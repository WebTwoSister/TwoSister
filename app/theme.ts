"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-bubblegum), sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: false,
      },
      styleOverrides: {
        root: {
          marginTop: "32px",
          marginBottom: "32px",
          minWidth: "200px",
          maxWidth: "250px",
          height: "50px",
          fontSize: "18px",
          borderRadius: "30px",
          backgroundColor: "#F88944",
          color: "#000",
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#E0712C",
          },
        },
      },
    },
    // InputLabel styling (works for both TextField and separate FormControl)
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          color: "#fdfdfd",
          textAlign: "left",
          transformOrigin: "left",
          "&.Mui-focused": {
            color: "#fff",
          },
        },
      },
    },
    // Stylisation Select
    MuiSelect: {
      styleOverrides: {
        select: {
          display: "flex",
          alignItems: "center",
          textAlign: "left",
          paddingLeft: "20px !important",
        },
        icon: {
          color: "#fff", // Arrow color
        },
      },
    },
    // Stylisation OutlinedInput (frame around Select and TextField)
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          "& fieldset": {
            borderRadius: "30px",
            borderColor: "#F88944",
            borderWidth: "2px",
            transition: "border-color 0.2s ease-in-out",
          },

          "&:hover fieldset": {
            borderColor: "#fff !important",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#fff !important",
            borderWidth: "2px",
          },
          "& label": {
            // label padding in top position
            paddingLeft: "8px",
            paddingRight: "8px",
          },
        },
        // Control cutout in the frame (Outline)
        notchedOutline: {
          "& legend": {
            fontSize: "0.85em",
          },
        },

        input: {
          fontSize: "1.25rem",
          color: "#fdfdfd",
          padding: "14px 1rem",
          textAlign: "left",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          justifyContent: "flex-start",
        },
      },
    },
    // Common styles for FormControl
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});
