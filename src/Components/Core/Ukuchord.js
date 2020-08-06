import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";

const Ukuchord = (props) => {
  const [open1, setOpen1] = useState("");
  const [open2, setOpen2] = useState("");
  const [open3, setOpen3] = useState("");
  const [open4, setOpen4] = useState("");

  const [showFret1, setShowFret1] = useState("none");
  const [showFret2, setShowFret2] = useState("none");
  const [showFret3, setShowFret3] = useState("none");
  const [showFret4, setShowFret4] = useState("none");

  const [distanceFret1, setDistanceFret1] = useState("90");
  const [distanceFret2, setDistanceFret2] = useState("90");
  const [distanceFret3, setDistanceFret3] = useState("90");
  const [distanceFret4, setDistanceFret4] = useState("90");

  const [textFret1, setTextFret1] = useState("");
  const [textFret2, setTextFret2] = useState("");
  const [textFret3, setTextFret3] = useState("");
  const [textFret4, setTextFret4] = useState("");

  const [barText, setBarText] = useState("");
  const [barShow, setBarShow] = useState("none");

  const resetInitial = () => {
    setShowFret1("none");
    setShowFret2("none");
    setShowFret3("none");
    setShowFret4("none");
    setOpen1("");
    setOpen2("");
    setOpen3("");
    setOpen4("");
    setBarShow("none");
  };

  const allOpen = (bool) => {
    let boolSet = "";
    if (bool === false) boolSet = "none";
    setOpen1(boolSet);
    setOpen2(boolSet);
    setOpen3(boolSet);
    setOpen4(boolSet);
  };

  const { chord } = props;

  useEffect(() => {
    resetInitial();
    switch (chord) {
      case "A":
        return (
          setShowFret1(""),
          setOpen1("none"),
          setShowFret2(""),
          setOpen2("none"),
          setDistanceFret1("180"),
          setDistanceFret2("90"),
          setTextFret1("2"),
          setTextFret2("1"),
          setBarShow("none")
        );
      case "F#m":
        return (
          setShowFret1(""),
          setOpen1("none"),
          setShowFret2(""),
          setOpen2("none"),
          setShowFret3(""),
          setOpen3("none"),
          setShowFret4("none"),
          setDistanceFret1("180"),
          setDistanceFret2("90"),
          setDistanceFret3("180"),
          setTextFret1("2"),
          setTextFret2("1"),
          setTextFret3("3"),
          setBarShow("none")
        );
      case "Bm":
        return (
          setShowFret1(""),
          setShowFret2(""),
          setShowFret3(""),
          setShowFret4(""),
          setDistanceFret1("275"),
          setDistanceFret2("180"),
          setDistanceFret3("180"),
          setDistanceFret4("180"),
          setTextFret1("3"),
          setTextFret2("1"),
          setTextFret3("1"),
          setTextFret4("1"),
          setBarShow("none"),
          allOpen(false)
        );
      case "E":
        return (
          setBarShow(""),
          setBarText("Τάστο 4"),
          setShowFret1(""),
          setShowFret2(""),
          setShowFret3(""),
          setShowFret4(""),
          setTextFret1("3"),
          setTextFret2("1"),
          setTextFret3("1"),
          setTextFret4("1"),
          setDistanceFret1("180"),
          setDistanceFret2("90"),
          setDistanceFret3("90"),
          setDistanceFret4("90"),
          allOpen(false)
        );
      default:
        return (
          setDistanceFret1("0"),
          setDistanceFret2("0"),
          setDistanceFret3("0"),
          setDistanceFret4("0"),
          setShowFret1("none"),
          setShowFret2("none"),
          setShowFret3("none"),
          setShowFret4("none"),
          setOpen1(""),
          setOpen2(""),
          setOpen3(""),
          setOpen4(""),
          setBarShow("none")
        );
    }
  }, [chord]);
  return (
    <Grid container>
      <Grid item lg={8}>
        <Box pl={4}>
          <svg width={"100%"} height={"400px"}>
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#b7ae94"
              strokeWidth="1"
              fill="white"
              display={open1}
            />
            <circle
              cx="110"
              cy="25"
              r="20"
              stroke="#b7ae94"
              strokeWidth="1"
              fill="white"
              display={open2}
            />
            <circle
              cx="195"
              cy="25"
              r="20"
              stroke="#b7ae94"
              strokeWidth="1"
              fill="white"
              display={open3}
            />
            <circle
              cx="275"
              cy="25"
              r="20"
              stroke="#b7ae94"
              strokeWidth="1"
              fill="white"
              display={open4}
            />

            <rect
              x="25"
              y="50"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />
            <rect
              x="110"
              y="50"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />
            <rect
              x="195"
              y="50"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />

            <rect
              x="25"
              y="135"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />
            <rect
              x="110"
              y="135"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />
            <rect
              x="195"
              y="135"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />

            <rect
              x="25"
              y="220"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />
            <rect
              x="110"
              y="220"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />
            <rect
              x="195"
              y="220"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />

            <rect
              x="25"
              y="305"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />
            <rect
              x="110"
              y="305"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />
            <rect
              x="195"
              y="305"
              width="80"
              height="80"
              fill="#ede5d0"
              stroke="#b7ae94"
            />

            <circle
              cx="25"
              cy={distanceFret1}
              r="20"
              stroke="#b7ae94"
              strokeWidth="1"
              fill="#312F54"
              display={showFret1}
            />
            <text
              x="25"
              y={distanceFret1}
              textAnchor="middle"
              stroke="#ffffff"
              strokeWidth="2px"
              dy=".4em"
              display={showFret1}
            >
              {textFret1}
            </text>

            <circle
              cx="110"
              cy={distanceFret2}
              r="20"
              stroke="#b7ae94"
              strokeWidth="1"
              fill="#312F54"
              display={showFret2}
            />
            <text
              x="110"
              y={distanceFret2}
              textAnchor="middle"
              stroke="#ffffff"
              strokeWidth="2px"
              dy=".4em"
              display={showFret2}
            >
              {textFret2}
            </text>

            <circle
              cx="195"
              cy={distanceFret3}
              r="20"
              stroke="#b7ae94"
              strokeWidth="1"
              fill="#312F54"
              display={showFret3}
            />
            <text
              x="195"
              y={distanceFret3}
              textAnchor="middle"
              stroke="#ffffff"
              strokeWidth="2px"
              dy=".4em"
              display={showFret3}
            >
              {textFret3}
            </text>

            <circle
              cx="275"
              cy={distanceFret4}
              r="20"
              stroke="#b7ae94"
              strokeWidth="1"
              fill="#312F54"
              display={showFret4}
            />
            <text
              x="275"
              y={distanceFret4}
              textAnchor="middle"
              stroke="#ffffff"
              strokeWidth="2px"
              dy=".4em"
              display={showFret4}
            >
              {textFret4}
            </text>

            <text
              x="330"
              y={"100"}
              textAnchor="middle"
              fill={"#FF5E6C"}
              stroke={"#FF5E6C"}
              strokeWidth={"1px"}
              dy=".4em"
              display={barShow}
            >
              {barText}
            </text>
          </svg>
        </Box>
      </Grid>
      <Grid item lg={4}>
        Ακόρντο: {chord}
      </Grid>
    </Grid>
  );
};

export default Ukuchord;
