import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class MonNamesApp extends Component {

    constructor(props) {
        // lg notes 1
        // our component has list of monList objects
        // and it must to know a few state values
        //props.MonNamesString
        //props.GetValueArray function
        super(props);
        let namesArr=  this.props.MonNamesString.split(",");
        let objArr= namesArr.map((item)=>{
            let idval= Math.random()
            return {name:item,id:idval}
        
         })
        this.state = {
            StationName:"",
            id:"",
            currentNameValue: "", 
            MonNames: [...objArr], //list
            value: "",  // on screen form value 
            editing: false,   // what are we doing now
            currentid: "",     // what element we are changing
            currentMonValue: "",   // element value

        }
      //  let namesArr=  this.props.MonNamesString.split(",");
     
        console.log(this.state.MonNames)    
     
      //his.delay(1000)
      // console.log(namesArr)
      
    }

     
    //Sync state.value to Add button 
    onChange = (e) => {
        this.setState({ value: e.target.value });
    };
    onNameChange = (e) => {
        this.setState({ currentNameValue:  e.target.value});
    }; 

    //Get The Id of mon to delete
    //create new array by filtering all mons except tasl width itemId 
    onDeleteMon = (itemId) => {
        const  localMonNames=[...this.state.MonNames].filter((m) => m.id !== itemId)
        this.setState({
            MonNames: [...this.state.MonNames].filter((m) => m.id !== itemId),
        });
     
        let monString=""
        localMonNames.forEach((item)=>{     
 monString= monString + item.name +","
        })
        monString = monString.slice(0, -1);
       
       this.props.GetMonitorsNames(monString)
 
    };

    //Change State To Edit
    //- currentid : id edited task
    //- currentMonValue: value
    onToggleEdit = (mon) => {
        this.setState({ editing: true });
        this.setState({ currentid: mon.id });
        this.setState({ currentMonValue: mon.name });
    };

    //Add new to do task
    onAddMon = (e) => {
        e.preventDefault();
        let localMonNames=[]
        const obj = {
            name: this.state.value,
            id: Math.random(),
        };
        if (this.state.value !== "") {
            localMonNames=   [...this.state.MonNames,obj]
            this.setState({ MonNames: this.state.MonNames.concat(obj) });
            this.setState({ value: "" });//Clean Text BOX
        }
        let monString=""
       localMonNames.forEach((item)=>{     
monString= monString + item.name +","
       })
       monString = monString.slice(0, -1);
      
      this.props.GetMonitorsNames(monString)

    };

    //Search id in list and update the item name in list
    onEditmon = (id, newValue) => {
        this.state.MonNames.map((mon) => {
            if (mon.id === id) {
                mon.name = newValue;
            }
        });
    };
    onSubmitObj = (e) => {
        e.preventDefault();

      
       let monString=""
       this.state.MonNames.forEach((item)=>{     
monString= monString + item.name +","
       })
       monString = monString.slice(0, -1);
      
      this.props.GetMonitorsNames(monString)

    };
    onSubmitEditmon = (e) => {
        e.preventDefault();

        this.onEditmon(this.state.currentid, this.state.currentMonValue);
        this.setState({ editing: false });
    };
    onSubmitName = (e) => {
        e.preventDefault();

       
        this.setState({ StationName: e.target.value});
    };

    onEditInputChange = (e) => {
        this.setState({ currentMonValue: e.target.value });
    };


    render() {
//lg notes 3
// list of elements as li html 

        const mylist = this.state.MonNames.map((mon) => (
            <li className="mon_item">
                {mon.name}
                <button onClick={() => this.onToggleEdit(mon)}>Edit</button> {/*  */}
                <button onClick={() => this.onDeleteMon(mon.id)}>Remove</button>
            </li>



        ));
//##################################################

const col1_width= 3
const col2_width= 4
const col3_width= 5
const tableHead= () => {   
      return(
    <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
                <Grid item xs={col1_width} >
                    <Item>Mon.Number</Item>                   
                </Grid>
                <Grid item xs={col2_width}>
                    <Item>Mon.Name</Item>
                </Grid>
               
                <Grid item xs={col3_width}>
                    <Item>Acton  </Item>
                </Grid>
            </Grid>
        </Box>)  }  
  //###############################################          
let indx=0 
const listV3= this.state.MonNames.map((mon) => {
    
    indx= indx+1
    return(
    <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
                <Grid item xs={col1_width} >
                    <Item>{ indx}</Item>
                   
                </Grid>
                <Grid item xs={col2_width}>
                    <Item>{mon.name}</Item>
                </Grid>
               
                <Grid item xs={col3_width}>
                    <Item>
                        <Stack spacing={2} direction="row">
                            <Button size="small" variant="contained" onClick={()=>(this.onToggleEdit(mon))} >edit</Button>
                            <Button size="small" variant="contained" color="error" onClick={()=>(this.onDeleteMon(mon.id))} >remove</Button>
                        </Stack>
                    </Item>
                </Grid>
            </Grid>
        </Box>)});
//########################################################################
        return (
            //lg notes2
            //our component every moment has 2 sections
            //1: form to add or edit  2: list of elements width 2 buttons every one
            <>
            
                <div className="App">
               
                    {this.state.editing === false ? (

                        <form onSubmit={this.onAddMon}>
                            <input
                                placeholder="monitor Tag"
                                value={this.state.value}
                                onChange={this.onChange}
                            />
                            {" "}
                            <button onClick={this.onAddMon}>Add Item</button>
                            {/* {"................ "}  */}
                            {/* <button onClick={this.onSubmitObj}>Save</button> */}
                        </form>
                    ) : (
                        <form onSubmit={this.onSubmitEditmon}>
                            <input
                                placeholder="edit your monitor"
                                value={this.state.currentMonValue}
                                name={this.state.currentMonValue}
                                onChange={this.onEditInputChange}
                            />
                            <button onClick={this.onSubmitEditmon}>Update Item</button>
                            
                            
                        </form>
                    )}
                    <br></br>

                   {tableHead()}
                    {listV3}
                </div>
            </>
        );
    }




}
