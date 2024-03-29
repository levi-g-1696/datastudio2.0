import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
//import MainBody from './mainBody';
//import DataTable from './dataGrid'
//import CrudButtonsPanelComp from './CrudButtons'
// import SaveButtons from './saveButtons';
//import DestForm from './pages/DestForm'
import SelectSmall from './valsMlistSelect';
import ValsGrid from './valsGrid'

import { Component } from 'react';
//import ObjViewHeader from './objViewHeader';

import Button from '@mui/material/Button';
import ValsForm from './valsForm';
import ValsFormCreateNew from './valsFormCreateNew';


export default class ValuesComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userControl: "read",
            userAction: "",
            valsLists: props.valsListArr,
            
            // valsLists: [


            //     { id: 10, Name: 'Meteo1m-1', monListID: 1, monListName: "Meteorology1m" },
            //     { id: 20, Name: 'Meteo1m-2', monListID: 1, monListName: "Meteorology1m" },
            //     { id: 50, Name: 'Meteo10m-1', monListID: 2, monListName: "Meteorology10m-std" },
            //     { id: 150, Name: 'rain10m-1', monListID: 15, monListName: "Precipitation" },


            // ],
            currentVals: { id: "", Name: "", monListID: "", monListName: "" },
            currentValsID: "",
            currentValsName: "",
        }
        
    }
     stations =this.props.stationsArr
    // stations = [{ id: 1, Name: "Meteorology1m" }, { id: 2, Name: "Meteorology10m-std" },
    // { id: 15, Name: "Precipitation" }]
    //==========================================================================================
    handleClickSave = () => { alert("save") }
 //   initValsDict= (id)=>{this.stations}
    handleClickNew = () => {
        const getNewValsObjID=  Math.random()*10000
        this.setState({
            userControl: "create"
        });
        this.setState({currentVals:{ id: getNewValsObjID, Name: "", monListID: "", monListName: "" ,vals:"mon1/0/0"}})
    }
     
    //--------------------------------------------

    //------------------------------------------------------
    returnToReadMode = () => {
        this.setState({ userControl: "read" })
    }
    //==============================================================================================

    ONremove = (itemID) => {

        this.setState({ valsLists: [...this.state.valsLists].filter((v) => v.id !== itemID) })
    }
    //=======================================================================================
    ONedit = (item) => {
        this.setState({ valsLists: [...this.state.valsLists].filter((v) => v.id !== item.id) })
        this.setState({ currentVals: { ...item } })
       

        // this.setState({ currentMonListID: item.ID, currentMonListName: item.Name, currentMonitoNames: item.MonitorNames })
        this.setState({ userControl: "edit" })


    }
    //=========================================================================
    onSubmitNew= obj=> { let myid=obj.id 
        //alert("valscomp have received vals obj with id:"+ myid)
      //  alert("valscomp have received vals obj with vals:"+ obj.vals)
      
        this.setState({ valsLists: this.state.valsLists.concat(obj) })
        this.returnToReadMode()
    
    }
    testget = (item) => { alert("testget " + item) }
    render() {

        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        const ObjViewHeader = (props) => {
            return (
                <>
                    {props.children}
                </>
            )
        }

        //====================================================================

        const editMode = () => {
            if (this.state.userControl === "edit") return true;
            else return false
        };
      
        

        //======================================================================== 

        const valsTable = this.state.valsLists.map((valsrow) =>
            //    <ValsGrid onRemove={this.ONremove} onEdit={this.ONedit} ID={valsrow.id} Name={valsrow.Name} MonitorNames={valsrow.MonitorNames} />)
            <ValsGrid onEdit={this.ONedit} ID={valsrow.id} Name={valsrow.Name} columns={[valsrow.id, valsrow.Name, valsrow.monListID, valsrow.monListName]}>
                <Stack spacing={2} direction="row">
                    <Button size="small" variant="contained" onClick={event => this.ONedit(valsrow)} >edit</Button>
                    <Button size="small" variant="contained" color="error" onClick={event => this.ONremove(valsrow.id)}  >remove</Button>
                </Stack>
            </ValsGrid>)
        //========================================================== ===============     
        if (this.state.userControl === "read") {
            return (<>
                <ObjViewHeader>
                    <Stack spacing={2} direction="column">
                        <Stack spacing={60} direction="row">

                            <Button size="small" variant="contained" onClick={event => this.handleClickNew()} >New</Button>
                            <Button size="small" variant="contained" onClick={event => this.handleClickSave()} >Save</Button>

                        </Stack>

                        <ValsGrid columns={["id", "Name", "monList id", "MonList Name"]}> Action </ValsGrid>
                        {valsTable}
                    </Stack>
                </ObjViewHeader>

                {/* <ObjViewConent><h4>ObjViewConent</h4></ObjViewConent> */}
            </>
            )
        }
        else if (this.state.userControl === "edit") {

            return (<>
                <ObjViewHeader>
                    <Stack spacing={2} direction="column">
                        <Stack spacing={60} direction="row">
                            <h4>Edit values </h4>
                        </Stack>
                        {/* <ValsForm current={{ id: "9898", Name: "gdfdr", monListID: "1", monListName: "d1",vals:"mA,mC/6,7/8,9" }} editMode={true} onFormSubmit= {this.onSubmitNew}/> */}
                         <ValsForm current={this.state.currentVals} editMode={true} onFormSubmit= {this.onSubmitNew}/>
                        {/* <ValsGrid columns={["id", "Name", "monList id", "MonList Name"]}> Action </ValsGrid>
                       {valsTable}  */}
                    </Stack>
                </ObjViewHeader>

                {/* <ObjViewConent><h4>ObjViewConent</h4></ObjViewConent> */}
            </>
            )

        }

        else if (this.state.userControl === "create") {
            
            return (
                <ObjViewHeader>
                    <Stack spacing={2} direction="column">
                        <Stack spacing={60} direction="row">
                            <h4>Create new object </h4>
                        </Stack>

                        <ValsFormCreateNew id={Math.random() * 1000000} editMode={false} onFormSubmit= {this. onSubmitNew}  vals={ "mX,mY/0,0/0,0"} stations={this.stations} />
                        {/* <ValsGrid columns={["id", "Name", "monList id", "MonList Name"]}> Action </ValsGrid>
                       {valsTable}  */}
                    </Stack>
                </ObjViewHeader>)

        }



    }
}