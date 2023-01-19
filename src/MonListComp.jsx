import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MainBody from './mainBody';
//import DataTable from './dataGrid'
import CrudButtonsPanelComp from './CrudButtons'
import SaveButtons from './saveButtons';
import DestForm from './DestForm'
import DestValueGrid from './destValueGridV23';
import { Component } from 'react';
import DestHeadGrid from './destHeadGrid';
import Button from '@mui/material/Button';
import MonListHeadGrid from './monListHeadGrid';
import MonListValueGrid from './monListValueGrid';
import MonListForm from './monListForm';

export default class MonitorListComp extends Component {
  constructor() {
    super();
    this.state = {
      userControl: "read",
      userAction: "",
      monLists: [


        { id: 1, Name: 'Meteorology1m', MonitorNames: 'T2m,RH,WS,WD'},
        { id: 2, Name: 'Meteorology10m-std', MonitorNames: 'monT2m,monRH,monWS,monWD,monWSmax,monPre'},
        { id: 5, Name: 'Meteorology10m-full', MonitorNames: 'monT2m,monRH,monWS,monWD,monWSmax,monPre,monPREC10' },
        { id: 15, Name: 'Precipitation', MonitorNames: 'monPREC10,monBV' },
        

      ],
      currentMonListID: "-1",
      currentMonListName: "defoult",
      currentMonitoNames:"mon1"
      
    }
  }
  //--------------------------------------------------------
 
  //-------------------------------------------------------------
  randomInteger() {
    const max = 99999
    const min = 9000
    return Math.floor(Math.random() * (max - min) + min);
  }
  //----------------------
  handleClickSave = () => { alert("save") }
  handleClickNew = () => {
   
    this.setState({ 
      userControl: "create" });
  }
  //--------------------------------------------

  //------------------------------------------------------
  returnToReadMode = () => {
    this.setState({ userControl: "read" })
  }
  //---------------------------------------

  //-------------------------------------------------------------------------

  ONremove = (itemID) => {
   
    this.setState({ monLists: [...this.state.monLists].filter((ml) => ml.id !== itemID) })
  }
  ONedit = (item) => {

    this.setState({ userControl: "edit" })
    this.setState({ currentMonListID: item.ID, currentMonListName:item.Name, currentMonitoNames:item.MonitorNames  })
  
  }
  //----------------- add new  ---------------------------------------------------
  getNewDestination = dest => {
     
    this.setState({
      currentDestName: dest.Name,
      currentDestID: dest.ID,
      currentDestIP: dest.IP,
      currentDestPort: dest.Port,
      currentDestProtocol: dest.Protocol,
      currentDestVirtPath: dest.VirtPath,
      currentDestUser: dest.User,
      currentDestPsw: dest.Psw
    })
    let newDestination = {
      id: dest.ID, Name: dest.Name, Protocol: dest.Protocol, IPaddr: dest.IP,
      Port: dest.Port, VirtPath: dest.VirtPath, User: dest.User, Psw: dest.Psw
    };

    this.setState({ monLists: this.state.monLists.concat(newDestination) })
    this.setState({ userControl: "read" })
    // 

  }
  // alert ("step2 received "+ this.state.currentDestID )}
  //let id = this.state.newDest.ID }


  //-------------  e d i t  ---------------------------------------------------------

  onEditDestination = dest => {
    let id= dest.ID
   
    let modDest= [...this.state.monLists].filter((item) => item.id !== id)
       let newDestination = {
      id: dest.ID, Name: dest.Name, Protocol: dest.Protocol, IPaddr: dest.IP,
      Port: dest.Port, VirtPath: dest.VirtPath, User: dest.User, Psw: dest.Psw
    };
    modDest= modDest.concat(newDestination)
    this.setState({ monLists: modDest})
    
    this.setState({ userControl: "read" })
    // 

  }

  //--------------------------------------------------
  render() {
    const monLisTable = this.state.monLists.map((mlistrow) =>
      <MonListValueGrid onRemove={this.ONremove} onEdit={this.ONedit} ID={mlistrow.id}  Name={mlistrow.Name}  MonitorNames={mlistrow.MonitorNames} />)

    const contentV2 = () => {
      let str1 = this.randomInteger()
     
         if (this.state.userControl == "create") { <h4>create new monlist form</h4>
        // return <>
       
        //    <DestForm handleCancel={this.returnToReadMode} onFormSubmit={this.getNewDestination} ID={str1}
        //     currentDestination={{ID:str1, Name:"",IP: "",Port:"",
        //       Protocol:""}} 
        //     />
        // </>
      }
      else if (this.state.userControl == "edit") {
        
     
        return <>
          {/* <DestForm handleCancel={this.returnToReadMode} onFormSubmit={this.onEditDestination}  
           currentDestination={{ID:this.state.currentDestID, Name:this.state.currentDestName,IP: this.state.currentDestIP,Port:this.state.currentDestPort,
          Protocol:this.state.currentDestProtocol}} 
    
          /> */}
        </>
      }
      else if (this.state.userControl == "read") {

        // if (this.state.userControl == "create") {
        return <>
          <MonListHeadGrid />
         {monLisTable}
          
          
        </>
      }
    }
    //========================================================================================================

    const headComponent = () => {
      if (this.state.userControl == "create") {
        // if (this.state.userControl == "create") {
        return <>
          <h4>Create a new destination object</h4>
        </>
      }
      else if (this.state.userControl == "edit") {

        // if (this.state.userControl == "create") {
        return <>
          <h4>Edit destination properties</h4>
        </>
      }
      else if (this.state.userControl == "read") {

        // if (this.state.userControl == "create") {
        return <>
          <Stack spacing={60} direction="row">

            <Button size="small" variant="contained" onClick={event => this.handleClickNew()} >New</Button>
            <Button size="small" variant="contained" onClick={event => this.handleClickSave()} >Save</Button>

          </Stack>
        </>
      }
    }



    return (

      <Box sx={{ width: 800 }}>
        <Stack spacing={1}>
         
          {headComponent()}
          
          {contentV2()}
          <MonListForm />
       
        </Stack> 
      </Box >

    );
  }
}