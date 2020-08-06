import React, { useRef, useEffect, useState } from "react";
import NavigationMenu from "components/layout/NavigationMenu";
import Footer from "components/layout/Footer";
import ThemeConfig from "config/ThemeConfig";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import * as firebase from "firebase";
import Helmet from "react-helmet";
import Ukuchord from "components/core/Ukuchord";
const SongPlaying = (props) => {
  const [song, setSong] = useState([]);
  const [chords, setChords] = useState({});
  const [shownChord, setShownChord] = useState("");
  const chordsRef = useRef();
  // const setChords = (data) => {
  //   chordsRef.current = data;
  //   _setChords(data);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db
        .collection("musicType/entehno/songs/")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === "y7jw3p3yOSrcpENM1Weu") {
              const data = doc.data();
              const chordsName = data.chordsName;
              const chordsTime = data.chordsTime;
              console.log(doc.id, data);
              setSong(data);
              setChords({ time: chordsTime, name: chordsName });
              chordsRef.current = { time: chordsTime, name: chordsName };
            }
          });
        })
        .catch((err) => {
          console.log("Error getting documents", err);
        });
    };
    fetchData();
  }, []);

  const handlePlaying = (state) => {

    const chordsTime = chordsRef.current.time;
    const chordsName = chordsRef.current.name;
    const currentTime = parseInt(state.playedSeconds.toFixed());

    const index = chordsTime.findIndex(
      (chordTime) => chordTime === currentTime
    );
    if (index !== -1) setShownChord(chordsName[index]);

    console.log("Current Time: ", currentTime);
  };

  return (
    <ThemeProvider theme={ThemeConfig}>
      <NavigationMenu />
      <Box
        pb={5}
        pt={5}
        style={{
          backgroundColor: "#eadfbe",
          borderTop: "0.04em solid",
          borderColor: "#f7edcf",
          width: "100%",
        }}
      >
        <Container>
          <Grid container direction={"row"} alignContent="flex-start" alignItems="center" justify="center">
            <Grid item lg={6}>
              <Typography variant="h3" color="secondary" align={"left"}>
                {song.title}
              </Typography>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=7pG4JO1Uma0"
                youtubeConfig={{ playerVars: { showinfo: 1, controls: 1 } }}
                onProgress={handlePlaying}
                width={"100%"}
              />
            </Grid>
            <Grid container item  lg={6} >
              <Ukuchord chord = {shownChord}/>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </ThemeProvider>
  );
};

export default SongPlaying;
