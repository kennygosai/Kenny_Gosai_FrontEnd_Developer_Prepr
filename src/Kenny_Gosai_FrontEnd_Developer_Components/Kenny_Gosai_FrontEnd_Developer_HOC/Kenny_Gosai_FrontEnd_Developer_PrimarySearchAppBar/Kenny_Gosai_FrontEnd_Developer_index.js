import React from "react";
import {
  fade,
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  hide: {
    display: "none",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.action.selected, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.action.selected, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function PrimarySearchAppBar(props) {
  const classes = useStyles();
  let theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green,
    },
    status: {
      danger: "orange",
    },
  });
  theme = responsiveFontSizes(theme);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const sideBarList = {
    Explore: {
      url: "https://preprlabs.org/front/img/explore.png",
      to: "/Kenny_Gosai_FrontEnd_Developer_Prepr",
    },
    Projects: {
      url: "https://preprlabs.org/front/img/my_projects.png",
      to: "/Kenny_Gosai_FrontEnd_Developer_Prepr/myProjects",
    },
    Labs: {
      url: "https://preprlabs.org/front/img/labs.png",
    },
    Challenges: {
      url: "https://preprlabs.org/front/img/challenges_icn.png",
      to: "/Kenny_Gosai_FrontEnd_Developer_Prepr/challenge",
    },
    Achievements: {
      url: "https://preprlabs.org/front/img/achievements_icn.png",
    },
    Inbox: {
      url: "https://preprlabs.org/front/img/inbox.png",
    },
    Resources: {
      url: "https://preprlabs.org/front/img/nav_resources.png",
    },
    "News Feed": {
      url: "https://preprlabs.org/front/img/news_feed.png",
    },
    Notifications: {
      url: "https://preprlabs.org/front/img/notification.png",
    },
    Organisation: {
      url: "https://preprlabs.org/front/img/organisation.png",
    },
    Settings: {
      url: "https://preprlabs.org/front/img/settings.png",
    },
    Help: {
      url: "https://preprlabs.org/front/img/help.png",
    },
    "Log Out": {
      url: "https://preprlabs.org/front/img/logout.png",
    },
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <MuiThemeProvider theme={theme}>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    </MuiThemeProvider>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <MuiThemeProvider theme={theme}>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    </MuiThemeProvider>
  );

  return (
    <div className={classes.grow}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="white" style={{ margin: 0 }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <img
                src="https://preprmedialive.s3.amazonaws.com/public/front/img/logo.png"
                alt="logo"
                style={{ height: "40px" }}
              ></img>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <img
              src="https://preprmedialive.s3.amazonaws.com/public/front/img/logo.png"
              alt="logo"
              style={{
                height: "40px",
                "padding-left": "10px",
                "vertical-align": "middle",
              }}
            ></img>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div style={{ height: "150", "text-align": "center" }}>
            <img
              src="https://preprmedialive.s3.ca-central-1.amazonaws.com/front/img/default-user.png"
              alt="user"
              style={{
                width: "85px",
                height: "85px",
                "padding-top": "10px",
                "padding-bottom": "10px",
              }}
            ></img>
            <Typography component="h5" variant="h6">
              Kenny Gosai
            </Typography>
          </div>
          <Divider />
          <List>
            {Object.keys(sideBarList).map((text, index) => (
              <ListItem
                button
                onClick={() => {
                  props.history.push(sideBarList[text].to);
                }}
              >
                <ListItemIcon>
                  <div
                    style={{
                      width: "23px",
                      height: "23px",
                      "background-image": `url('${sideBarList[text].url}')`,
                    }}
                  ></div>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </MuiThemeProvider>
      {renderMobileMenu}
      {renderMenu}
      <div>{props.children}</div>
    </div>
  );
}

export default withRouter(PrimarySearchAppBar);
