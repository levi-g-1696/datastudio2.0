import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MainBody from './mainBody';
import DataTable from './dataGrid'
import CrudButtonsPanelComp from './CrudButtons'
import SaveButtons from './saveButtons';
import DestForm from './DestForm'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
let emptyDest= {ID:"-1", Name: "", Protocol: "" ,ipaddr:"",Port:"",VirtPath:"",User:"",Psw:""};

let newDest= {ID:"-1", Name: "", Protocol: "" ,ipaddr:"",Port:"",VirtPath:"",User:"",Psw:""};



export default function DestinationComp() {
  const [userControl, setUserControl] = React.useState("read");
  const [userAction, setUserAction] = React.useState("")
  const [newDest, setNewDestination]= React.useState(emptyDest)

  // there are states: read create update 
  //there are actions : save cancel remove
  const handleClickNewEditRemove = control => {
    // 👇️ take parameter passed from Child component
    setUserControl(control);
    
  };
  const handleClickSaveCancel = act => {
    // 👇️ take parameter passed from Child component
    setUserAction(act);
  };
const getNewDestination = dest => {
                                     alert ("succesfully received " +dest.ID ) 
                                     setNewDestination({ID:"dest66.ID"});
                                     alert ("step2 received " +this.state.emptyDest.ID ) }
                                     //let id = this.state.newDest.ID }
  const cntrButtons = () => {
    if (userControl == "create") {
      return    <h5>create new destination</h5>;
    }
    else if (userControl == "read") {
      return <CrudButtonsPanelComp handleClick={handleClickNewEditRemove} />;
    }
    else if (userControl == "remove") {
      return <><h5>removee control but</h5></>;
    }
    else if (userControl == "update") {
      return <SaveButtons />;
    }

  }
  const content = () => {
    if (userControl == "create") {
      return <>    
        <DestForm handleCancel= {returnToReadMode} getNewDestination={getNewDestination} ID= '108885506'/>
      </>;
    }
    else if (userControl == "read") {
      return <> <DataTable /></>;
    }
    else if (userControl == "remove") {
      return <> <DataTable /></>;
    }
    else if (userControl == "update") {
      return <> <h5>update</h5></>;
    }

  }

  const returnToReadMode= ()=>{
    setUserControl('read')
  }

  
  return (

    <Box sx={{ width: 800 }}>
      <Stack spacing={1}>
        {cntrButtons()}
        {/* <CrudButtonsPanelComp handleClick={handleClick}  /> */}
        {content()}
        {/* <DataTable /> */}

      </Stack>
    </Box>

  );
}
