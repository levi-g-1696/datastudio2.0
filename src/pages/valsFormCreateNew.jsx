import React from 'react';
import './formCSS/bootstrap.min.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import SelectSmall from './valsMlistSelect';
import EditVals from './editVals';



export default class ValsFormCreateNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:props.id, Name: "", currentMonListID:"",
            currentMonListName:"",editMode:false, vals: props.vals}
      //  this.nameChanged = this.nameChanged.bind(this);
      //  this.emailChanged = this.emailChanged.bind(this);
        this.submit = this.submit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
        this.selectedStation =''
        this.stations = this.props.stations
       
    }
    //====================================================================
   

   initValsDict= (stationid)=>{
    let dict={}
    this.stations.forEach(element => {
       let id= element.id 
       let monString= element.MonitorNames
       let monArr= monString.split(",")
       let zeroString=''
       monArr.forEach(tag => {zeroString= zeroString +"0," })
       zeroString= zeroString.slice(0, -1)
       dict[id]=monString+"/"+zeroString+ "/" + zeroString
    });
    return dict[stationid]
   }
    getStation=(id)=>    {
        this.selectedStation= [...this.stations].filter((item)=>(item.id === parseInt(id)))                       
         return this.selectedStation                                        
                         } 

    getAndSaveVals= (arrOfObj)  => {

        
    }                   
stationMenu()
{ return this.stations}
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
   
   
    submit(e) {
        e.preventDefault();//DISABLE AUTO SUBMIT
        
        
        const newVals = {id:this.state.id, Name: this.state.Name, monListID: this.selectedStation[0].id ,
            monListName:this.selectedStation[0].Name, vals:this.initValsDict(this.selectedStation[0].id)};

        this.props.onFormSubmit(newVals)
        //make an object and return it with callback
        // this.props.getNewDestination(this.state.)
        //AJAX REQUEST ASP.NET API POST CONTRLLER
        
        // this.state
    }




    render() {
      
        const x=  this.initValsDict(1)
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
                        <SelectSmall stations={this.stations} callback={this.getStation} editMode= {this.state.editMode}/>
                        </div>                                          	
                    </form>
                    <br></br>
                    <br></br>
                    <h4>Save and continuue from edit mode</h4>
                </div>
            </div>
        );
    }

}