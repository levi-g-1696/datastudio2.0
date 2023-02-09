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
import MonListFormV3 from './monListFormV3';
import StationFormP1 from './stationFormP1'

export default class MonitorListComp extends Component {
  constructor() {
    super();
    this.state = {
      userControl: "read",
      userAction: "",
      monLists: [


        { id: 1, Name: 'Meteorology1m', MonitorNames: 'T2m,RH,WS,WD' },
        { id: 2, Name: 'Meteorology10m-std', MonitorNames: 'monT2m,monRH,monWS,monWD,monWSmax,monPre' },
        { id: 5, Name: 'Meteorology10m-full', MonitorNames: 'monT2m,monRH,monWS,monWD,monWSmax,monPre,monPREC10' },
        { id: 15, Name: 'Precipitation', MonitorNames: 'monPREC10,monBV' },


      ],
      currentMonListID: "-1",
      currentMonListName: "defoult",
      currentMonitoNames: "mon1"

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
      userControl: "create"
    });
  }
  //--------------------------------------------

  //------------------------------------------------------
  returnToReadMode = () => {
    this.setState({ userControl: "read" })
  }
  //---------------------------------------
  handleCancel = () => {
    alert("get cancel from stationFormP1")
    // this.props.handleCancel();
  }
  //-======================================================================

  ONremove = (itemID) => {

    this.setState({ monLists: [...this.state.monLists].filter((ml) => ml.id !== itemID) })
  }
  //=======================================================================================
  ONedit = (item) => {
    this.setState({ currentMonListID: item.ID, currentMonListName: item.Name, currentMonitoNames: item.MonitorNames })
    this.setState({ userControl: "edit" })
    

  }
  //----------------- add new  ---------------------------------------------------
  getNew = mon => {

    this.setState({
      currentMonListName: mon.Name,
      currentMonListID: mon.id,
      currentMonitoNames: mon.Monitors


    })

    let newArr =[...this.state.monLists].filter((ml) => ml.id !== mon.id)
    const newMonList= {id: mon.id, Name: mon.Name, MonitorNames: mon.Monitors}
    this.setState({ monLists: newArr.concat(newMonList) })
    this.setState({ userControl: "read" })
    // 

  }



  //-------------  e d i t  ---------------------------------------------------------

  // onEditMonList = mon => {
  //   let id = mon.id

  //   let modMonList = [...this.state.monLists].filter((item) => item.id !== id)
  //   let newM = {
  //     id: mon.id, Name: mon.name
  //   };
  //   modMonList = modMonList.concat(newM)
  //   this.setState({ monLists: modMonList })

  //   this.setState({ userControl: "read" })
  //   // 

  // }

  //--------------------------------------------------
  render() {
    const monLisTable = this.state.monLists.map((mlistrow) =>
      <MonListValueGrid onRemove={this.ONremove} onEdit={this.ONedit} ID={mlistrow.id} Name={mlistrow.Name} MonitorNames={mlistrow.MonitorNames} />)
    //===============  headComponent   (buttons)   =========================================================================================

    const headComponent = () => {

      if (this.state.userControl == "create") {
        // if (this.state.userControl == "create") {
        return <>
          <h4>Create a new monitors list object</h4>
        </>
      }
      else if (this.state.userControl == "edit") {

        // if (this.state.userControl == "create") {
        return <>
          <h4>Edit monitor list object properties</h4>
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
    //=====================  contentV2 =====================================================================================================
    const contentV2 = () => {
      let str1 = this.randomInteger()

      if (this.state.userControl == "create") {
        return (         
            <StationFormP1 currentName={""} currentID={this.randomInteger()} currentMonitoNames={this.state.currentMonitoNames} onFormSubmit={this.getNew}  />
         )
      }
      else if (this.state.userControl == "edit") {
      
        return <>
<StationFormP1 currentName={this.state.currentMonListName} currentID={this.state.currentMonListID} currentMonitoNames={this.state.currentMonitoNames} onFormSubmit={this.getNew} />
          {/* < MonListFormV3 MonNamesString={this.state.currentMonitoNames} />                                                                                                                                                        */}
        </>
      }
      else if (this.state.userControl == "read") {

        // if (this.state.userControl == "create") {
        return <>
          <MonListHeadGrid />
          {monLisTable}
          {/* <h5>monlistcomp</h5> */}

        </>
      }
    }




    return (

      <Box sx={{ width: 800 }}>
        <Stack spacing={1}>
          {headComponent()}
          {contentV2()}
          {/* <MonListForm /> */}
        </Stack>
      </Box >

    );

  }
}