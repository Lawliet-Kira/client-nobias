import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

class ProgressBar extends Component {
  render() {
    const { classes, result } = this.props;
    console.log(result);
    let barColor;
    if (result >= 80) {
      barColor = classes.barRed;
    } else if (result >= 60) {
      barColor = classes.barOrange;
    } else if (result >= 30){
      barColor = classes.barYellow;
    } else if (result >= 10){
      barColor = classes.barYellow2;
    } else {
      barColor = classes.barGreen;
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
    backgroundColor: "#66da81",
  },
  barYellow2: {
    backgroundColor: "#B4D95C",
  },
  barYellow: {
    backgroundColor: "#DDC928",
  },
  barOrange: {
    backgroundColor: "#EFBC72",
  },
  barRed: {
    backgroundColor: "#D95C5C",
  },
});

export default withStyles(styles)(ProgressBar);
