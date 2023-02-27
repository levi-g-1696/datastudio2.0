import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ValsTab from './valsTab';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class EditVals extends Component {
  constructor() {
    super();
    this.state = {
      currentid:"",currentTag: "", currentStartVal: "", currentEndVal: "",
      valsList:[ {id:202,tag:"monRH", StartVal: 1, EndVal: 20},{id:203,tag:"monSA",StartVal: 6, EndVal: 80},
      {id:205,tag:"monWS", StartVal: 10, EndVal: 20},{id:233,tag:"monWD",StartVal: 306, EndVal: 230 }]
    }
  };
  inputChanged= (e)=> {
    //--GENRIC UPDATE FOR ALL INPUTS EXSIT IN FORM--

    let inputName = e.target.name;
    let newValue = e.target.value;

    this.setState({ [inputName]: newValue });
    
  }
  ONremove = (itemID) => {

    this.setState({ valsList: [...this.state.valsList].filter((v) => v.id !== itemID) })
}
//=======================================================================================
ONedit = (item) => {
    this.setState({ currentid: item.id, currentTag:item.tag, currentStartVal:item.StartVal, currentEndVal: item.EndVal })

    // this.setState({ currentMonListID: item.ID, currentMonListName: item.Name, currentMonitoNames: item.MonitorNames })
    this.setState({ userControl: "edit" })
}

//===================================================
onSubmitEdit = (e) => {
  e.preventDefault();
  const newlist=  this.state.valsList.map(v =>{ 
    if (v.id===this.state.currentid){
      v.StartVal= this.state.currentStartVal
      v.EndVal = this.state.currentEndVal      
    }
    return v
  })
  
  this.setState({ valsList: [...newlist] });
  this.setState({currentid:"",currentTag: "", currentStartVal: "", currentEndVal: ""})
};
//=====================================================================
  render() {
    const valsTable = this.state.valsList.map((valsrow) =>
    //    <ValsGrid onRemove={this.ONremove} onEdit={this.ONedit} ID={valsrow.id} Name={valsrow.Name} MonitorNames={valsrow.MonitorNames} />)
    <ValsTab onEdit={this.ONedit} ID={valsrow.id} Name={valsrow.Name} columns={[valsrow.id, valsrow.tag, valsrow.StartVal,valsrow.EndVal]}>
        <Stack spacing={2} direction="row">
            <Button size="small" variant="contained" onClick={event => this.ONedit(valsrow)} >edit</Button>
            {/* <Button size="small" variant="contained" color="error" onClick={event => this.ONremove(valsrow.id)}  >remove</Button> */}
        </Stack>
    </ValsTab>)

    return (<Stack>
      <h2> Edit Vals </h2>
      <div className="App">



        <form onSubmit={this.onSubmitEditmon}>

          <Stack spacing={1} direction="row" >
            <input type="text" className="form-control" name="currentTag" id="currentTag"
              value={this.state.currentTag}
             
            />
            <input  type="text" className="form-control" name="currentStartVal" id="currentStartVal"
              value={this.state.currentStartVal}
   
              onChange={this.inputChanged }
            />
            <input
              value={this.state.currentEndVal}
              name="currentEndVal"
              id="currentEndVal"
              onChange={this.inputChanged }
            />
            <Button size="small" type="submit" variant="contained" onClick={this.onSubmitEdit}>Apply</Button>
          </Stack>
<br />
          


        </form>

        <br></br>

        {/* {tableHead()} */}
        {valsTable}
      </div>
    </Stack>

    )
  }
}