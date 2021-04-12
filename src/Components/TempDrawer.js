import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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

import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
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
    paddingLeft: theme.spacing(4)
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


}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    
  });
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  let scrollDiv = createRef();
  let traumaProgram = createRef();
  
  const scrollSmoothHandler = (elementName) => {
    window.scrollTo({ behavior: 'smooth', top: elementName.current.offsetTop })
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       
      
    </div>
  );

  return (
      
    <div>
         <AppBar style={{ background: 'black' }}
        position="fixed"
        // className={clsx(classes.appBar, {
        //   [classes.appBarShift]: open,
        // })
       

        // }
        className="not-scrolled"
        padding={10}
        mb={5}
        
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left',true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            img={images_chkdIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img className="photo" src={images_chkdIcon} alt="Logo">
            </img>
          </Typography>
        </Toolbar>
      </AppBar>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
         
          <Drawer  className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon style={{color: "#fff"}}/>
        </ListItemIcon>
        <ListItemText primary="Introduction" />
        {openMenu ? <ExpandLess style={{color: "#fff"}}/> : <ExpandMore style={{color: "#fff"}}/>}
      </ListItem>
      
      <Collapse in={openMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem onClick={()=>scrollSmoothHandler(scrollDiv) && toggleDrawer(anchor, false)} button key="Inbox" button className={classes.nested}>
            <ListItemIcon>
              <GoPrimitiveDot style={{color: "#fff"}}/>
            </ListItemIcon>
            <ListItemText primary="Dedication" />
          </ListItem>
          <ListItem onClick={()=>scrollSmoothHandler(traumaProgram)} button key="Inbox" button className={classes.nested}>
             <ListItemIcon>
                <GoPrimitiveDot style={{color: "#fff"}}/>
             </ListItemIcon>
            <ListItemText primary="Introduction and Trauma Program Mission" />
          </ListItem>
        </List>
      </Collapse>
          </Drawer>
         
        </React.Fragment>
      ))}
       
      <div style={{margin:50}}>

      <div className={classes.appBarSpacer} />
      <div ref={scrollDiv}>
            <Dedication />
            </div>
            <div ref={traumaProgram}>
          <TraumaProgram/>
        </div>
        <div >
          <TraumaProgram/>
        </div>
        <div >
          <TraumaProgram/>
        </div>
        </div>
    </div>
    
  );
}