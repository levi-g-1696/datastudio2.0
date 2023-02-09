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
import MonListForm from './monListForm';

export default class DestinationCompV2c extends Component {
  constructor() {
    super();
    this.state = {
      userControl: "read",
      userAction: "",
      destinations: [


        { id: 10, Name: 'Negev Minerals', IPaddr: '84.112.113.114', Port: 2021, Protocol: 'FTP' },
        { id: 20, Name: 'Bazan', IPaddr: '84.12.112.114', Port: 2021, Protocol: 'FTP' },
        { id: 55, Name: 'Agan', IPaddr: '84.182.113.119', Port: 2021, Protocol: 'FTP' },
        { id: 156, Name: 'yehuda pladot', IPaddr: '84.112.113.154', Port: 21, Protocol: 'FTP' },
        { id: 159, Name: 'Psagot Plastic', IPaddr: '84.112.113.4', Port: 21, Protocol: 'FTP' },
        { id: 68, Name: 'DeadSea Plants', IPaddr: '84.112.13.14', Port: 2021, Protocol: 'FTP' },
        { id: 70, Name: 'Asbest Galil', IPaddr: '84.112.3.114', Port: 22, Protocol: 'SFTP' },
        { id: 80, Name: 'Pri Katif', IPaddr: '84.112.110.11', Port: 2021, Protocol: 'FTP' },
        { id: 90, Name: 'Netivot mun', IPaddr: '84.112.113.2', Port: 2021, Protocol: 'FTP' },

      ],
      currentDestID: "-1",
      currentDestName: "defoult",
      currentDestProtocol: "empty",
      currentDestIP: "",
      currentDestPort: "",
      currentDestVirtPath: "",
      currentDestUser: "",
      currentDestPsw: ""
    }
  }
  //--------------------------------------------------------
  handleStateValue() {
    this.setState({ currentDestName: "val987987" });
  }
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
    this.setState({ destinations: [...this.state.destinations].filter((dest) => dest.id !== itemID) })
  }
  ONedit = (dest) => {

    this.setState({ userControl: "edit" })
    this.setState({ currentDestID: dest.ID, currentDestName:dest.Name, currentDestIP:dest.IP ,currentDestPort:dest.Port,currentDestProtocol:dest.Protocol })
  
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

    this.setState({ destinations: this.state.destinations.concat(newDestination) })
    this.setState({ userControl: "read" })
    // 

  }
  // alert ("step2 received "+ this.state.currentDestID )}
  //let id = this.state.newDest.ID }


  //-------------  e d i t  ---------------------------------------------------------

  onEditDestination = dest => {
    let id= dest.ID
   
    let modDest= [...this.state.destinations].filter((item) => item.id !== id)
       let newDestination = {
      id: dest.ID, Name: dest.Name, Protocol: dest.Protocol, IPaddr: dest.IP,
      Port: dest.Port, VirtPath: dest.VirtPath, User: dest.User, Psw: dest.Psw
    };
    modDest= modDest.concat(newDestination)
    this.setState({ destinations: modDest})
    
    this.setState({ userControl: "read" })
    // 

  }

  //--------------------------------------------------
  render() {
    const destinationsTable = this.state.destinations.map((destrow) =>
      <DestValueGrid onRemove={this.ONremove} onEdit={this.ONedit} ID={destrow.id} IP={destrow.IPaddr} Name={destrow.Name} Port={destrow.Port} Protocol={destrow.Protocol} />)

    const contentV2 = () => {
      let str1 = this.randomInteger()
      if (this.state.userControl == "create") {
        // if (this.state.userControl == "create") {
        return <>
       
           <DestForm handleCancel={this.returnToReadMode} onFormSubmit={this.getNewDestination} ID={str1}
            currentDestination={{ID:str1, Name:"",IP: "",Port:"",
              Protocol:""}} 
            />
        </>
      }
      else if (this.state.userControl == "edit") {
        
     
        return <>
          <DestForm handleCancel={this.returnToReadMode} onFormSubmit={this.onEditDestination}  
           currentDestination={{ID:this.state.currentDestID, Name:this.state.currentDestName,IP: this.state.currentDestIP,Port:this.state.currentDestPort,
          Protocol:this.state.currentDestProtocol}} 
    
          />
        </>
      }
      else if (this.state.userControl == "read") {

        // if (this.state.userControl == "create") {
        return <>
          <DestHeadGrid />
          {destinationsTable}
          <MonListForm></MonListForm>
        </>
      }
    }
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
          

        </Stack>
      </Box >

    );
  }
}