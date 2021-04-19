import React ,{useState, useEffect} from 'react';
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
import getSearchData from './Dedication_data';
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
    float:"right",
    right:0,
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
  var elasticlunr = require('elasticlunr');
  const [searchData, setSearchData] = useState(null);
  var index = elasticlunr(function () {
      this.addField('title');
      this.addField('body');
      this.setRef('id');
  });
 
  function getSearchData(searchData)
  {
      console.log(index.search(searchData));
      console.log(index.search("special"));
  }
  var doc1 = {
    "id": "dedication",
    "title": "Oracle released its latest database Oracle 12g",
    "body": "Michele was special. Once you met her, you couldn't imagine a time without her. She had that unique ability to make you feel better about yourself. You liked who you were when you were with her. You missed her when she wasn't around.Her husband Joe posted an entry on face book for her birthday, October 23. When I read it I didn't think that I could do better at describing how Michele affected everyone who came in contact with her and how she approached life. With his permission I am going to share some of what was posted.When confronted with metastatic breast cancer she persevered, choosing to go out on her terms and leaving it all on the field. Rather than be weighed down by sadness, anger, or self-pity, her thoughts and actions remained selfless and positive. She was far less concerned about herself than of how her illness and premature passing would impact everyone else."
}
var doc2 = {
    "id": "traumaProgram",
    "title": "Oracle released its profit report of 2015",
    "body": "The CHKD trauma program serves the children of Hampton Roads, Virginia's Eastern Shore and Northeastern North Carolina. As a specialized pediatric medical center, CHKD provides a multi- disciplinary approach to care for injured children for all ranges of acuity and injuries. The commitment to provide care to traumatically injured children and their families extends from the frontline providers to the board of directors. CHKD is currently seeking trauma center verification from the Virginia Department of Health which will allow for pediatric specialists from ED, surgery, ICU and all subspecialties to care for patients directly from the field. The trauma service is staffed by board-certified pediatric surgeons and their support team of physician assistants, nurse practitioners, residents, interns and office staff.The trauma program is led by a board-certified pediatric surgeon who completed a fellowship in trauma. The program is co-managed by a pediatric emergency physician and employs a full-time RN trauma program manager, RN trauma registrar and RN clinical practice educator specialist.The program director chairs the hospital multi-disciplinary trauma PI committee which includes representatives from all the major surgical specialties and services including administration and nursing. The trauma PI committee provides oversight for systems, patient care, quality, policies and procedures to ensure the optimum care of any injured patient is achieved.Trauma is a surgical disease that requires the need for multiple specialty services which CHKD is uniquely qualified to provide. The purpose of this manual is to document established guidelines that ensure an organized and systematic approach to care."

}
index.addDoc(doc1);
index.addDoc(doc2);
 
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
    console.log(elementID)
    var topOfElement =
      document.querySelector(elementID).offsetTop - offsetAppBar;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  };
  const [search, setSearch] = React.useState('')

  useEffect(() => {
    if(search != ''){
      console.log("calling scroll func")
      scrollSmoothHandler(search)
    }
   
    
  }, [search])
  //  function twoCalls (event) {
  //   setSearchData(event.target.value)
  //   this.getSearchData()
  // }


  const handleChageFunc = (event) => {
    if(event && event.target ){
      switch(event.target.name){
        case "searchField":
          // setSearch(event.target.value)
          console.log(index.search(event.target.value))
          if(index.search(event.target.value).length != 0){
            let max = 0;
            index.search(event.target.value).map((eachItem) => {
              if(eachItem.score > max){
                max = eachItem.score
                setSearch("#"+eachItem.ref)
              }
            })
          }


        case "field2":
          console.log(event.target.value)
      }
    }
  }
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
          <img className="photo" src={images_chkdIcon} alt="Logo" >
            </img>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              name="searchField"
              onChange={handleChageFunc}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            {/* <InputBase
              placeholder="Search…"
              name="field2"
              onChange={handleChageFunc}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            /> */}
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
          <img className="photo" src={images_chkdIcon} alt="Logo"></img>
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
