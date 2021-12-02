import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material';

const theme = createTheme({
    palette: {
        boton: {
            main: "#7879F1",
            contrastText: "#fff",
        },
        white:{
            main: "#fff",
            contrastText: "#fff"
        }
    },
});

export default function CustomizedInputBase() {
  return (
      <ThemeProvider theme={theme}>
        <Typography color="#fff" variant="h6" sx={{alignItems:"flex-start"}}>¿Vienes de una empresa? </Typography>
        <Paper
        component="form"
        color="primary"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 , backgroundColor:"#7879F1"}}
        >
            
        <InputBase
            sx={{ ml: 1, flex: 1, color:"#fff"}}
            placeholder="Codigo de Empresa"
            inputProps={{ 'aria-label': 'codigo' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SendIcon color="white" />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    </ThemeProvider>
  );
}
