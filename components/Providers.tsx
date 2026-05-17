'use client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/app/theme';
// import CssBaseline from '@mui/material/CssBaseline';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline resets the browser's default styles to MUI */}
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  );
}