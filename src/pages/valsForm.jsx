import React from 'react';
import './formCSS/bootstrap.min.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import SelectSmall from './valsMlistSelect';
import EditVals from './editVals';



export default class ValsForm extends React.Component {
    constructor() {
        super();
        this.state = {id:666, Name: "fases", currentMonListID:15,
            currentMonListName:"pprecip"}
      //  this.nameChanged = this.nameChanged.bind(this);
      //  this.emailChanged = this.emailChanged.bind(this);
        this.submit = this.submit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }
    //====================================================================
    stations = [{ id: 1, Name: "Meteorology1f" }, { id: 2, Name: "Meteorology10m-stdf" },
    { id: 15, Name: "Precipitationf" }]

    testget= (item)=>{alert("testget "+item)}
   // ===========================
    inputChanged(e) {
        //--GENRIC UPDATE FOR ALL INPUTS EXSIT IN FORM--

        let inputName = e.target.name;
        let newValue = e.target.value;
      
        this.setState({ [inputName]: newValue });

    }
    handleCancel(){
        // this.props.handleCancel();

    }
   
    // handleMonitors= (monListString)=> {
       
    //     this.setState({
    //     Monitors:monListString})}

    submit(e) {
        e.preventDefault();//DISABLE AUTO SUBMIT
        
        
        const newVals = {id:this.state.currentID, Name: this.state.currentName, currentMonListID: this.state.currentMonListID ,
            currentMonListName:this.state.currentMonListName};

      //  this.props.onFormSubmit(newVals)
        //make an object and return it with callback
        // this.props.getNewDestination(this.state.)
        //AJAX REQUEST ASP.NET API POST CONTRLLER
        
        // this.state
    }




    render() {
     
        return (

            <div className="container" style={{ width: "700px" }}>
                <div className='jumbotron' >

                <label for="id" className="col-sm-2 col-form-label">ID: {this.props.currentID}</label>
                    <form onSubmit={this.submit}>
                    <Button size="small" type="submit" variant="contained">Save object</Button> 
                        <div className="form-group row">
                            <label for="Name" className="col-sm-2 col-form-label">Name:</label>
                            <input type="text" onChange={this.inputChanged} className="form-control" name="Name" id="Name" placeholder="Name" value={this.state.Name} />
                        </div>                   
                      
                        <br></br>
                        <div className="form-group row">
                        <SelectSmall stations={this.stations} callback={this.testget} />
                        </div>    
                        <h6>Edit value ranges:</h6>
                          <br></br>
                <EditVals />
						<br></br>
                        <Stack spacing={1} direction="row">
						  <Button size="small" type="submit" variant="contained">Save object</Button> 
                          {/* <Button size="small"  variant="contained" onClick={this.handleCancel }  >cancel</Button>  */}
                          </Stack>
                    </form>


                </div>
            </div>
        );
    }

}