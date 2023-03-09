import React from 'react';
import './formCSS/bootstrap.min.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import SelectSmall from './valsMlistSelect';
import EditVals from './editVals';



export default class ValsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:props.current.id, Name: props.current.Name, currentMonListID:props.current.monListID,
            currentMonListName:props.current.monListName,editMode:props.editMode}
      //  this.nameChanged = this.nameChanged.bind(this);
      //  this.emailChanged = this.emailChanged.bind(this);
        this.submit = this.submit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
         this.selectedStation =''
    }
    //====================================================================
    stations = [{ id: 1, Name: "Meteorology1f" }, { id: 2, Name: "Meteorology10m-stdf" },
    { id: 15, Name: "Precipitationf" }]

   
    getStation=(id)=>    {
        this.selectedStation= [...this.stations].filter((item)=>(item.id === parseInt(id)))                       
         return this.selectedStation                                        
                         } 
                         
stationMenu()
{if (this.state.editMode) {let id=this.state.currentMonListID
    let res=[...this.getStation(id)]
                          return res }                           
    else return this.stations}
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
        
        
        const newVals = {id:this.state.id, Name: this.state.Name, monListID: this.selectedStation[0].id ,
            monListName:this.selectedStation[0].Name};

        this.props.onFormSubmit(newVals)
        //make an object and return it with callback
        // this.props.getNewDestination(this.state.)
        //AJAX REQUEST ASP.NET API POST CONTRLLER
        
        // this.state
    }




    render() {
       
        
        
        return (

            <div className="container" style={{ width: "700px" }}>
                <div className='jumbotron' >

                <label for="id" className="col-sm-2 col-form-label">ID: {this.state.id}</label>
                    <form onSubmit={this.submit}>
                    <Button size="small" type="submit" variant="contained">Save object</Button> 
                        <div className="form-group row">
                            <label for="Name" className="col-sm-2 col-form-label">Name:</label>
                            <input type="text" onChange={this.inputChanged} className="form-control" name="Name" id="Name" placeholder="Name" value={this.state.Name} />
                        </div>                   
                      
                        <br></br>
                        <div className="form-group row">
                        <SelectSmall stations={this.stationMenu()} callback={this.getStation} editMode= {this.state.editMode}/>
                        </div>    
                      
                          <br></br>
                <EditVals />
						<br></br>
                        <Stack spacing={1} direction="row">
						  <Button size="small" type="submit" variant="contained" onClick={this.submit}>Save object</Button> 
                          {/* <Button size="small"  variant="contained" onClick={this.handleCancel }  >cancel</Button>  */}
                          </Stack>
                    </form>


                </div>
            </div>
        );
    }

}