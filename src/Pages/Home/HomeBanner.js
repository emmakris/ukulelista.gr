import React from "react";
import { Container, Grid, Box, Typography,Button } from "@material-ui/core";
import { ReactComponent as UkuleleGirl } from "assets/illustrations/ukulele_girl.svg";

const HomeBanner = (props) => {
  return (
    <Box pb={5} pt={5} style={{backgroundColor:"#eadfbe",borderTop:"0.04em solid",
      borderColor:"#f7edcf"}}>
      <Container>
        <Grid
          container
          direction={"row"}
          alignContent={"center"}
          alignItems={"center"}
          justify={"center"}
        >
          <Grid item lg={4}>

            <Box>
              <Typography variant={"h2"}>Δες , άκου, παίξε</Typography>
            </Box>
            <Box mt={2}>
              <Typography>
                Πιάσε το γιουκαλίλι, κούρδισέ το και ετοιμάσου να παίξεις όποιο
                κομμάτι σ'αρέσει απο την συλλογή μας. Βρες το τραγούδι που σου
                ταιριάζει και γρατσούνα το.
              </Typography>
            </Box>
            <Box mt={2}>
              <Button color={"primary"} variant={"outlined"}>
                Πως το κουρδίζω;
              </Button>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
            <UkuleleGirl />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeBanner;
