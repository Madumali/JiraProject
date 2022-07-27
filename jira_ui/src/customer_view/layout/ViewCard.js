import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useStyles } from "../../components/Styles";
import { blueGrey } from "@mui/material/colors";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import VerticalLinearStepper from "./Step";
import SharedWith from "./SharedWith";
import CommentSec from "./CommentSec";
import BuildIcon from '@mui/icons-material/Build';
import { makeStyles } from '@mui/styles';


const useStyless = makeStyles(() => ({
  root: {
    maxWidth: 310,
    transition:"transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  hovercard:{
    transform:"scale3d(1.05, 1.05, 1)"
}
}))
export default function ViewCard() {
  const classes = useStyles();
  const classess = useStyless();
  const [hide, setHide] = React.useState(true);
 
  
  const hideDetails = () => {
    setHide(!hide);
  };

  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Card sx={{ maxWidth: 1500 }} >
        <CardHeader
          style={{ backgroundColor: "#1e88e5", height: 15 }}
          action={
            <IconButton aria-label="settings">
              <Typography
                variant="subtitle2"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginRight: 250,
                  marginTop: -8,
                }}
              >
                We've collapsed your detail view to help you focus on the work
                that matters most
              </Typography>

              <Close style={{ marginTop: -8, color: "#ffffff" }} />
            </IconButton>
          }

          // subheader="We've collapsed your detail view to help you focus on the work that matters most"
        ></CardHeader>
        <Divider />

        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              paddingBottom: 5,
              marginTop: 15,
              marginBottom: 20,
              textAlign: "center",
              color: blueGrey[500],
            }}
          >
            <Grid padding={1} className={classes.titleText}>
              Requesting Changes on Customer portal of NCell Technical Support
              SD
            </Grid>
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={7}>
              <Box style={{ border: "1px solid #eeeeee", borderRadius: 5 }}>

                
                <Grid container spacing={1}>
                  <Grid item xs={9}>
                    <PersonIcon style={{ marginLeft: -250 }} />
                    <Typography
                      sx={{ flexGrow: 1 }}
                      style={{
                        marginTop: -25,
                        marginLeft: -180,
                        color: blueGrey[500],
                      }}
                    >
                      user
                    </Typography>
                  </Grid>
                  {hide ? (
                    <>
                      {" "}
                      <Grid item xs={3}>
                        <Link
                          onClick={hideDetails}
                          className={classes.link}
                          style={{ textDecoration: "none" }}
                        >
                          Hide details
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          sx={{ flexGrow: 1 }}
                          style={{
                            marginTop: 20,
                            textAlign: "Left",
                            color: blueGrey[500],
                            marginLeft: 8,
                          }}
                        >
                          JIRA Service desk
                          <br />
                          Description
                          <br />
                          Dear Team,
                        </Typography>
                      </Grid>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Grid item xs={3}>
                        <Link
                          onClick={hideDetails}
                          className={classes.link}
                          style={{ textDecoration: "none" }}
                        >
                          Show details
                        </Link>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      sx={{ flexGrow: 1 }}
                      style={{
                        marginTop: 20,
                        textAlign: "Left",
                        color: blueGrey[500],
                        marginLeft: 8,
                      }}
                    >
                      Severity Level
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  marginTop: 20,
                  textAlign: "Left",
                  color: blueGrey[500],
                  marginLeft: 8,
                  fontWeight: 600,
                  marginBottom:300
                }}
              >
                Activity
              </Box>
              <CommentSec/>
            </Grid>
            <Grid item xs={5}>
              <div className={classes.seconddiv}>
                <Typography
                  variant="subtitle2"
                  sx={{ flexGrow: 1 }}
                  style={{
                    marginTop: 20,
                    textAlign: "Left",
                    color: "#263238",
                    fontWeight: 600,
                  }}
                >
                  Status
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{ flexGrow: 1 }}
                  style={{
                    marginTop: 2,
                    textAlign: "Left",
                    color: blueGrey[500],
                    backgroundColor: "#b9f6ca",
                  }}
                >
                  In Progress
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ flexGrow: 1 }}
                  style={{
                    marginTop: 20,
                    textAlign: "Left",
                    color: "#263238",
                    fontWeight: 600,
                  }}
                >
                  SLAs
                </Typography>
                <VerticalLinearStepper />
                <Grid container>
                  <Grid item xs={12}>
                    <SyncAltIcon style={{ marginTop: 15, marginLeft: -250 }} />
                    <Typography
                      variant="subtitle2"
                      sx={{ flexGrow: 0,
                        textAlign: "Left",
                        marginLeft:7,
                        marginTop:-3
                         }}
                      style={{
                        
                        color: "#263238",
                      }}
                    >
                      Request To Support
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle2"
                      sx={{ flexGrow: 0 }}
                      style={{
                        marginTop: 20,
                        textAlign: "Left",
                        color: "#263238",
                        fontWeight: 600,
                      }}
                    >
                      Request Type
                    </Typography>
                    <BuildIcon style={{ marginTop: 15, marginLeft: -250 }} />
                    <Typography
                      variant="subtitle2"
                      sx={{ flexGrow: 0,marginTop: -3,
                        textAlign: "Left",
                        marginLeft: 7, }}
                      style={{
                        
                        color: blueGrey[500],
                      }}
                    >
                      Access Request
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle2"
                      sx={{ flexGrow: 0 }}
                      style={{
                        marginTop: 20,
                        textAlign: "Left",
                        color: "#263238",
                        fontWeight: 600,
                      }}
                    >
                      Shared With
                    </Typography>
                    <PersonIcon style={{ marginLeft: -250 }} />
                    <Typography
                      sx={{ flexGrow: 1 }}
                      style={{
                        marginTop: -25,
                        marginLeft: -180,
                      }}
                    >
                      user
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{ flexGrow: 1 }}
                      style={{
                        marginTop: -65,
                        marginLeft: -170,
                        color: blueGrey[500],
                      }}
                    >
                      creator
                    </Typography>
                   
                  </Grid>
                  <Grid item xs={12}>
                  <SharedWith/>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
