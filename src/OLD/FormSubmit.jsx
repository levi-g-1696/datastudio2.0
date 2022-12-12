import React from 'react';
import './formCSS/bootstrap.min.css'

export default class Contuct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "" };

        this.nameChanged = this.nameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.submit = this.submit.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(e) {
        //--GENRIC UPDATE FOR ALL INPUTS EXSIT IN FORM--

        let inputName = e.target.name;
        let newValue = e.target.value;
        this.setState({ [inputName]: newValue });

    }

    nameChanged(e) {
        let inputName = e.target.value;
        this.setState({ name: inputName });
    }

    emailChanged(e) {
        let inputEmail = e.target.value;
        this.setState({ email: inputEmail });
    }

    submit(e) {
        e.preventDefault();//DISABLE AUTO SUBMIT
        let values = "name=" + this.state.name + "," + "email=" + this.state.email;
        console.log(values);
        alert(values);
        this.setState({ name: "", email: "" });
        //AJAX REQUEST ASP.NET API POST CONTRLLER

        // this.state
    }




    render() {
        return (
            <div className="container" style={{ width: "700px" }}>
                <div className='jumbotron' >


                    <form onSubmit={this.submit}>
                        <div className="form-group row">
                            <label for="name" className="col-sm-2 col-form-label">Name:</label>
                            <input type="text" onChange={this.inputChanged} className="form-control" name="name" id="name" placeholder="name" value={this.state.name} />
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail" className="form-label mt-2">Your Email:</label>
                            <input value={this.state.email} type="email" onChange={this.inputChanged} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="col-xs-6">
                           
                            <div className="row">
                           
                                <div class="col-xs-12 col-sm-6">
                                <label className="col-xs-6">Label3</label>
                                    <input class="form-control form-control-sm" form-control-lg type="text" />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                <label className="col-xs-6">Label45</label>
                                    <input className="form-control form-control-sm" type="text" />
                                </div>
                            </div>
                        </div>
                        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
                        <input  class="form-control" type="text" placeholder="Default input" />
                       <label>small ID
                         <input  className="form-control form-control-sm" type="text" placeholder=".form-control-sm" /></label>
                        <hr></hr>
                        <input type="submit" value="send" color ='info'/>
                    </form>


                </div>
            </div>
        );
    }

}