import React from 'react';
import './formCSS/bootstrap.min.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'


export default class DestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ID:props.currentDestination.ID, Name: props.currentDestination.Name, Protocol:props.currentDestination.Protocol,IP:props.currentDestination.IP,
		               Port:props.currentDestination.Port,VirtPath:"",User:"",Psw:""};
        
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
        
   
        const newDestination = {ID:this.state.ID, Name: this.state.Name, Protocol: this.state.Protocol ,IP:this.state.IP,
        Port:this.state.Port,VirtPath:this.state.ID,User:this.state.User,Psw:this.state.Psw};

        this.props.onFormSubmit(newDestination)
        //make an object and return it with callback
        // this.props.getNewDestination(this.state.)
        //AJAX REQUEST ASP.NET API POST CONTRLLER
        
        // this.state
    }




    render() {
     
        return (

            <div className="container" style={{ width: "700px" }}>
                <div className='jumbotron' >

                <label for="ID" className="col-sm-2 col-form-label">ID: {this.props.currentDestination.ID}</label>
                    <form onSubmit={this.submit}>
                        <div className="form-group row">
                            <label for="Name" className="col-sm-2 col-form-label">Name:</label>
                            <input type="text" onChange={this.inputChanged} className="form-control" name="Name" id="Name" placeholder="Name" value={this.state.Name} />
                        </div>
                        
                        {/* <div className="form-group row">
                            <label for="IPaddr" className="form-label mt-2">IP address</label>
                            <input type="text" maxlength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
							onChange={this.inputChanged} className="form-control" name="IPaddr" id="IPaddr"  placeholder="0.0.0.0" value={this.state.IP}   />
                        </div> */}
                         <div className="form-group row">
                            <label for="IP" className="form-label mt-2">IP address</label>
                            <input value={this.state.IP} type="text" 	onChange={this.inputChanged} className="form-control" name="IP" id="IP"  
                            pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="0.0.0.0"    />
                        </div>
                         {/* <div className="form-group row">
                            <label for="ipaddr" className="col-sm-2 col-form-label">Ip address</label>
                            <input value={this.state.IP} type="text" onChange={this.inputChanged} className="form-control" name="ipaddr" id="ipaddr" maxlength="15" size="15" 
                            pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="0.0.0.0"  />
                            
                        </div> */}
						<div className="form-group row">
                            <label for="Port" className="form-label mt-2">Port</label>
                            <input value={this.state.Port} type="number" 	onChange={this.inputChanged} className="form-control" name="Port" id="Port"  placeholder="21"   />
                        </div>

						<div className="form-group row">
                            <label for="Protocol" className="col-sm-2 col-form-label">Transfer protocol</label>
                            <input type="text" onChange={this.inputChanged} className="form-control" name="Protocol" id="Protocol" placeholder="" value={this.state.Protocol} />
                            
                        </div>
                        <Stack spacing={2} direction="row">
						  <Button size="small" type="submit" variant="contained">Save</Button> 
                          <Button size="small"  variant="contained" onClick={this.handleCancel }  >cancel</Button> 
                          </Stack>
                    </form>


                </div>
            </div>
        );
    }

}