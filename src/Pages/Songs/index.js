import React, { Fragment, useEffect, useState } from "react";
import NavigationMenu from "components/layout/NavigationMenu";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container,Grid, Box } from "@material-ui/core";
import ThemeConfig from "config/ThemeConfig";
import Footer from "components/layout/Footer";
import * as firebase from "firebase";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:"#f2f3f2"
  },
 title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Songs = (props) => {
  const classes = useStyles();

  const [songs, setSongs] = useState([]);
  const [metaData, setMetaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("musicType/entehno/songs").get();
      setSongs(data.docs.map((song) => song.data()));
    };
    fetchData();
  }, []);
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <NavigationMenu />
        <Box pb={5} pt={5} style={{backgroundColor:"#eadfbe",borderTop:"0.04em solid",
          borderColor:"#f7edcf"}}>
        <Container>
          <Grid container>
            {songs.map((song, index) => {
              return (
                <Grid item lg={4} key={index}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {song.title}
                      </Typography>
                      <Box mt={2} mb={2}>
                        <img src={`https://img.youtube.com/vi/${song.yt_link}/0.jpg`} alt={`video ${song.title} thumbnail`} width={"90%"}/>
                      </Box>
                      <Typography variant="body2" component="p">
                        {song.composer}
                        <br />
                      </Typography>
                      <Box mt={1}>
                      <Typography variant={"body2"} component={"p"}>
                        Τόνος: {song.tone}
                      </Typography>
                      <Typography variant={"body2"} color={"secondary"} component={"p"}>
                        Ρυθμός: {song.rythm}
                      </Typography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button color ="primary" variant={"contained"} href={"/songplaying"}>Γρατσούνα το</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Songs;
