import { createTheme } from '@mui/material/styles';

const arcPurple = "#A5A6F6";
const arcOrange = "#FFBA60";

export default createTheme({
    palette: {
        common: {
            purple: `${arcPurple}`,
            orange: `${arcOrange}`,
        }
    },
    primary: {
        main: `${arcPurple}`
    },
    secondary: {
        main: `${arcOrange}`
    }
});