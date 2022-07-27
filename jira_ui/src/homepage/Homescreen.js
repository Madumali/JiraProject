import React from "react";
import Mainimg from "../components/images/back3.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/system";
import NavBar from "../customer_view/navbar/NavBar";

///Search component with styles/////
const Search = styled("div")(({ theme }) => ({
  position: "absolute",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  marginLeft: 0,
  marginRight: 6,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "70ch",
      "&:focus": {
        width: "75ch",
      },
    },
  },
}));

///UseStyles
const useStyles = makeStyles(() => ({
  root: {
    maxHeight: "35vh",
    backgroundImage: `url(${Mainimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alighItems: "center",
    justifyContent: "center",
    height: "150vh",
  },

  root2: {
    width: 300,
    height: 120,
    border: "1px solid #B0BEC5",
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      border: "2px solid #18FFFF",
    },
  },
  hovercard: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
}));

//Link array
const projectList = [
  {
    to: "/Devops",
    label: "ADL Common DevOps - Service...",
    descript: "Welcome! you can raise a......",
  },
  {
    to: "/managed-services",
    label: "ADL Managed Services Service...",
    descript: "Welcome! you can raise a......",
  },
  {
    to: "/code-MRT",
    label: "Axiata Code RMT",
    descript: "Welcome! you can raise a......",
  },
  {
    to: "/et-dialog-crm",
    label: "ET Dialog CRM_Co_Digi_FinP...",
    descript: "Welcome! you can raise a......",
  },
  {
    to: "/common-devops",
    label: "ADL Common DevOps ...",
    descript: "Welcome! you can raise a......",
  },
  {
    to: "/gsoc-infra-support",
    label: "GSOC Infra Support - Service Desk",
    descript: "Welcome! you can raise a......",
  },
  {
    to: "/et-io-dialog-ent",
    label: "ET_IO TMW_Dialog_Entreprise",
    descript: "Welcome! you can raise a......",
  },
  {
    to: "/jira-servicedesk",
    label: "ADL Jira Support - Service Desk.",
    descript: "Welcome! you can raise a......",
  },
  {
    to: "/xl-commet",
    label: "XL-COMET Managed Services.",
    descript: "Welcome! you can raise a......",
  },
];

////begining of Component
const HomeScreen = () => {
  const [state, setState] = React.useState({
    raised: false,
    shadow: 1,
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar/>
      {/* Grid1 start */}
      <Grid container>
        {/* Grid1 First row first 3 colomns  */}
        <Grid item xs={3}></Grid>
        {/* Grid1 First row next 6 columns start */}
        <Grid item xs={6} marginTop={15}>
          <Typography
            variant="h5"
            align="left"
            sx={{ fontWeight: 600, marginLeft: 1 }}
            color="#ff6f00"
          >
            Welcome to Axiata Digital Labs Service Desk !
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find help and services"
              inputProps={{ "aria-label": "Find help and services" }}
            />
          </Search>
        </Grid>
        {/* Grid1 First row next 6 columns end */}

        {/* Grid1 First row next 3 columns    */} 
        <Grid item xs={3}></Grid>
        {/* Grid 1 First row end   */}

        {/* Grid1 second row with total 12 columns start */}
        <Grid item xs={12}>
          <Box
            direction="column"
            alignItems="center"
            justify="center"
            marginTop={20}
            marginBottom={10}
            marginLeft={30}
            width={1100}
          >
            <Typography
              align="left"
              sx={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}
              color="text.secondary"
              gutterBottom
            >
              Frequently Used
            </Typography>
            {/* Grid2 Start */}
            <Grid container spacing={3}>
              {projectList.map((item, index) => (
                // Grid2 4 columns with 'N' rows.
                <Grid key={index} item xs={6} sm={4}>
                  <Card
                    className={classes.root2}
                    classes={{ root2: state.raised ? classes.hovercard : "" }}
                    onMouseOver={() => setState({ raised: true, shadow: 3 })}
                    onMouseOut={() => setState({ raised: false, shadow: 1 })}
                    raised={state.raised}
                    zdepth={state.shadow}
                  >
                    <CardContent align="left">
                      <Link
                        key={index}
                        to={item.to}
                        style={{
                          width: "100%",
                          textDecoration: "none",
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                        align="left"
                      >
                        {" "}
                        {item.label}{" "}
                      </Link>
                      <Typography variant="body2" marginTop={1}>
                        {item.descript}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Grid>
                // Grid2 4 columns.
              ))}
            </Grid>
            {/* Grid2 End */}
          </Box>
        </Grid>
         {/* Grid1 second row with total 12 columns end */}
      </Grid>
      {/* Grid1 End */}
    </div>
  );
};

export default HomeScreen;
