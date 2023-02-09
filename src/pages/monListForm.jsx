import React from 'react';
import './formCSS/bootstrap.min.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'


export default class MonListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ID:props.currentMonListID,
             Name: props.currentMonListName, 
            //  MonitorNames:props.currentMonitorNames,
            MonitorNames: 'RH,WS,WD',
              MomitorsNum:props.MonNum,
              MonNameInputFields:[]
            };
        let array= this.state.MonitorNames.split(",")
        this.setState({MonNameInputFields:[...array]})
       
      //  this.nameChanged = this.nameChanged.bind(this);
      //  this.emailChanged = this.emailChanged.bind(this);
        this.submit = this.submit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(e) {
        //--GENRIC UPDATE FOR ALL INPUTS EXSIT IN FORM--

        let inputName = e.target.name;
        let newValue = e.target.value;
      
        this.setState({ [inputName]: newValue });

    }
    handleCancel(){
        this.props.handleCancel();

    }
/*
    nameChanged(e) {
        let inputName = e.target.value;
        this.setState({ name: inputName });
    }

    emailChanged(e) {
        let inputEmail = e.target.value;
        this.setState({ email: inputEmail });
    }
	*/

    submit(e) {
        e.preventDefault();//DISABLE AUTO SUBMIT
        
   
        const newMonList = {ID:this.state.ID, Name: this.state.Name, MonitorNames: this.state.MonitorNames };

        this.props.onFormSubmit(newMonList)
        //make an object and return it with callback
        // this.props.getNewDestination(this.state.)
        //AJAX REQUEST ASP.NET API POST CONTRLLER
        
        // this.state
    }




    render() {
     //   this.state.destinations.map((destrow) =>
     const inputFields= ()=> {return (
        <div className="form-group row">
                            <label for="Monitor Name" className="col-sm-2 col-form-label">Monitor Name:</label>
                            <input type="text" onChange={this.inputChanged} className="form-control" name="Monitor Name" id="Monitor Name" placeholder="mon" value={""} />
                        </div>)
     }
        return (

            <div className="container" style={{ width: "700px" }}>
                <div className='jumbotron' >

                <label for="ID" className="col-sm-2 col-form-label">ID: {this.props.currentMonListID}</label>
                
                    {/* <form onSubmit={this.submit}>
                        <div className="form-group row">
                            <label for="Name" className="col-sm-2 col-form-label">Name:</label>
                            <input type="text" onChange={this.inputChanged} className="form-control" name="Name" id="Name" placeholder="Name" value={this.state.Name} />
                        </div> */}
                        {inputFields}
                        
                        
						{/* <div className="form-group row">
                            <label for="MonitorsNum" className="form-label mt-2">Monitors Number</label>
                            <input value={this.state.MomitorsNum} type="number" 	onChange={this.inputChanged} className="form-control" name="MonitorsNum" id="MonitorsNum"  placeholder="1"   />
                        </div> */}

						
                        <Stack spacing={2} direction="row">
						  <Button size="small" type="submit" variant="contained">Save</Button> 
                          <Button size="small"  variant="contained" onClick={this.handleCancel }  >cancel</Button> 
                          </Stack>
                    {/* </form> */}


                </div>
            </div>
        );
    }

}