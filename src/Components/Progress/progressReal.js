// import { React } from "react";
// import LinearProgress from "@mui/material/LinearProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { withStyles } from "@material-ui/core/styles";

// const styles = (props) => ({
//   colorPrimary: {
//     backgroundColor: "#4f0069",
//   },
//   barColorPrimary: {
//     backgroundColor: "#4f0069",
//   },
// });

// const BarraProgreso = ({ result }) => {
//   const colorResult = (percentage) => {
//     if (percentage >= 80) {
//       return "primary";
//     } else if (percentage <= 40) {
//       return "success";
//     } else {
//       return "warning";
//     }
//   };

//   const { classes } = this.props;

//   return (
//     <Box sx={{ display: "flex", alignItems: "center" }}>
//       <Box sx={{ width: "100%", mr: 1 }}>
//         <LinearProgress
//           variant="determinate"
//           value={result}
//           // color={colorResult(result)}
//           style={{ borderRadius: 5, height: 10 }}
//           classes={{
//             colorPrimary: classes.colorPrimary,
//             barColorPrimary: classes.barColorPrimary,
//           }}
//         />
//       </Box>
//       <Box sx={{ minWidth: 35 }}>
//         <Typography
//           variant="body2"
//           color="text.secondary"
//         >{`${result}%`}</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default withStyles(styles)(BarraProgreso);

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

class BarraProgreso extends Component {
  render() {
    const { classes, result } = this.props;
    console.log(result);
    let barColor;
    if (result >= 80) {
      barColor = classes.barRed;
    } else if (result <= 40) {
      barColor = classes.barGreen;
    } else {
      barColor = classes.barYellow;
    }
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={result}
            style={{ borderRadius: 5, height: 10 }}
            {...this.props}
            classes={{
              colorPrimary: classes.yellow,
              barColorPrimary: barColor,
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            color="text.secondary"
          >{`${result}%`}</Typography>
        </Box>
      </Box>
    );
  }
}

const styles = (props) => ({
  green: {
    backgroundColor: "#4f0069",
  },
  barGreen: {
    backgroundColor: "#90EE90",
  },
  yellow: {
    backgroundColor: "#ffffff",
  },
  barYellow: {
    backgroundColor: "#ffffe0",
  },
  red: {
    backgroundColor: "#ffffff",
  },
  barRed: {
    backgroundColor: "#FF7F7F",
  },
});

export default withStyles(styles)(BarraProgreso);
