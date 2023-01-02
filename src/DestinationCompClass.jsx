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
import DestValueGrid from './destValueGridV23';
import { Component } from 'react';
import DestHeadGrid from './destHeadGrid';
import Button from '@mui/material/Button';


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
      currentDestProtocol: "",
      currentDestIpaddr: "",
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
  handleClickSave= ()=>{alert("save")}
  handleClickNew =()=>{ this.setState({ userControl: "create"}) ;
                          }
  //--------------------------------------------
  
  //------------------------------------------------------
  returnToReadMode = () => {
    this.setState({ userControl: "read" })
  }
  //---------------------------------------
  
  //-------------------------------------------------------------------------
   content = () => {
      let str1= this.randomInteger()
      if (this.state.userControl == "create") {
        return <>    
          <DestForm handleCancel= {this.returnToReadMode} getNewDestination={this.getNewDestination} ID={str1}/>
        </>;
      }}
  //     else if (this.state.userControl == "read") {
  //       return <DataTable destinations= {this.state.destinations} getSelectedID= {this.testCall2}  />;
  //     }
  //     else if (this.state.userControl == "remove") {
  //       return <> <h5>remove</h5></>;
  //     }
  //     else if (this.state.userControl == "update") {
  //       return <> <h5>update {this.state.currentDestName}</h5></>;
  //     }

  //   }
  //===========================================\
  ONremove = (itemID) => { this.setState({destinations:[...this.state.destinations].filter((dest)=>dest.id !==itemID)})
     }
  ONedit = (arg) => { alert("clicked Edit row-" + arg) }
  //----------------- add new  ---------------------------------------------------
  getNewDestination = dest => {
    // alert ("succesfully received " +dest.ID ) 
    this.setState({
      currentDestName: dest.Name,
      currentDestID: dest.ID,
      currentDestIpaddr: dest.ipaddr,
      currentDestPort: dest.Port,
      currentDestProtocol: dest.Protocol,
      currentDestVirtPath: dest.VirtPath,
      currentDestUser: dest.User,
      currentDestPsw: dest.Psw
    })
    let newDestination = {
      id: dest.ID, Name: dest.Name, Protocol: this.state.currentDestProtocol, IPaddr: dest.ipaddr,
      Port: dest.Port, VirtPath: dest.VirtPath, User: dest.User, Psw: dest.Psw
    };

    this.setState({ destinations: this.state.destinations.concat(newDestination) })
    this.setState({ userControl: "read" })
    // 
    alert("edit dest 125")
  }
  // alert ("step2 received "+ this.state.currentDestID )}
  //let id = this.state.newDest.ID }


  //-------------  e d i t  ---------------------------------------------------------

  

  //--------------------------------------------------
  render() {
    const destinationsTable = this.state.destinations.map((destrow) =>
      <DestValueGrid onRemove={this.ONremove} onEdit={this.ONedit} ID={destrow.id} IP={destrow.IPaddr} Name="Negev Min" Port="21" Protocol="Ftp" />
    )


    return (

      <Box sx={{ width: 800 }}>
        <Stack spacing={1}>
          <Stack spacing={60} direction="row">

            <Button size="small" variant="contained" onClick={event => this.handleClickNew()} >New</Button>
            <Button size="small" variant="contained" onClick={event =>this.handleClickSave()} >Save</Button>

          </Stack>
          {/* {this.cntrButtons()} */}
          {/* <CrudButtonsPanelComp handleClick={handleClick}  /> */}
          {this.content()}
          {/* <DataTable /> */}
          <DestHeadGrid />
          {destinationsTable}


        </Stack>
      </Box >

    );
  }
}