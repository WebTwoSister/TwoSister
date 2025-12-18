'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    // Set the default font for all MUI components
    fontFamily: 'var(--font-bubblegum), sans-serif',
  },
  components: {
    // Style for button (Button)
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: false, //shadow
      },
      styleOverrides: {
        root: {
          marginTop: '32px',
          marginBottom: '32px',
          minWidth: '200px',
          maxWidth: '250px',
          height: '50px', 
          fontSize: '18px',
          borderRadius: '30px',
          backgroundColor: '#F88944',
          color: '#000',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#E0712C',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          width: '100%',
          // Setting Label
          '& .MuiInputLabel-root': {
            fontSize: '18px',
            color: '#fdfdfd',
            textAlign: 'center',
            '&.Mui-focused': {
              color: '#fff',
            },
          },
          // Setting field (Input)
          '& .MuiInputBase-input': {
            fontSize: '1.25rem',
            color: '#fdfdfd',
            padding: '14px 1rem',
          },
          // Setting frame (OutlinedInput)
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: '30px',
              borderColor: '#F88944',
              borderWidth: '2px',
              transition: 'border-color 0.2s ease-in-out',
            },
            '&:hover fieldset': {
              borderColor: '#ff5722',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
              borderWidth: '2px',
            },
            // Style for Select (arrow)
            '& .MuiSelect-icon': {
              color: '#fff',
            },
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '18px',
        },
      },
    },
  },
});