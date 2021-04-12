import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme ,fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import images_chkdIcon from './../images/images_chkdIcon.png'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import Scroll from 'react-scroll'
import { Element } from 'react-scroll'
import {GoPrimitiveDot} from 'react-icons/go'
import { createRef } from "react";
import Dedication from './Dedication_data';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import TraumaProgram from './TraumaProgram';
import { spacing } from '@material-ui/system';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// const ScrollLink = Scroll.ScrollLink


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingLeft: theme.spacing(30)
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  appBarSpacer: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000",
    color: "#fff"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  nested: {
    paddingLeft: theme.spacing(5)
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundColor: 'white',
    color:'black'
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      backgroundColor: 'White',
      color:'black'
    }),
    marginLeft: 0,
  },
  toolbar: theme.mixins.toolbar,
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(135),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },


}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleOpenNestedItem() {
    setOpenCollapse(!openCollapse);
    
  }
  

  let offsetAppBar = 70;

  var scrollSmoothHandler = (elementID) => {
    var topOfElement =
      document.querySelector(elementID).offsetTop - offsetAppBar;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img className="photo" src={images_chkdIcon} alt="Logo">
            </img>
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
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        className={classes.drawer}
        // variant="persistent"
        variant="temporary"
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "white" }} />
            ) : (
              <ChevronRightIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </div>
       
       
        {/* <Divider style={{ color: "white" }} /> */}
        <ListItem button onClick={handleOpenNestedItem}>
          <ListItemIcon>
            <MailIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Introduction" />
          {openCollapse ? (
            <ExpandLess style={{ color: "white" }} />
          ) : (
            <ExpandMore style={{ color: "white" }} />
          )}
        </ListItem>
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
               onClick={() => scrollSmoothHandler("#dedication") }
              // onclick={function() { scrollSmoothHandler("#dedication"); handleDrawerClose(); }}
              button
              className={classes.nested}
            >
              <ListItemIcon>
              <GoPrimitiveDot style={{color: "#fff"}}/>
            </ListItemIcon>
              <ListItemText  primary="Dedication" />
            </ListItem>
            <ListItem
              onClick={() => scrollSmoothHandler("#traumaProgram")}
              button
              className={classes.nested}
            >
              <ListItemIcon>
              <GoPrimitiveDot style={{color: "#fff"}}/>
            </ListItemIcon>
              <ListItemText  primary="Introduction and Trauma Program Mission" />
            </ListItem>
            <ListItem
              onClick={() => scrollSmoothHandler("")}
              button
              className={classes.nested}
            >
              <ListItemIcon>
              <GoPrimitiveDot style={{color: "#fff"}}/>
            </ListItemIcon>
              <ListItemText  primary="Trauma Orhanizational Chart" />
            </ListItem>
          </List>
        </Collapse>
      </SwipeableDrawer>
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        <div style={{ paddingLeft: 3, paddingRight: 3 }}>
        <div id="dedication">
        
        <Dedication />
        </div>
        <div id="traumaProgram">
          <TraumaProgram/>
          </div>
           
          
        </div>
      </main>
    </div>
  );
}