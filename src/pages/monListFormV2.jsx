
import React, { Component, useState } from 'react';
// import MainBody from './mainBody';
// import Appf from './basicfield2';

// import DestHeadGrid from './destHeadGrid';
// import DestValueGrid from './destValueGridV23';
// import MonitorListComp from './monListComp';

import BasicTextFields2 from './basicfield2';

export default class MonListFormV2 extends Component {

    constructor() {
        super();
        this.state = {
            fields: [{ name: "", id: 1 }],
            fieldsNum: 1
        }
    }
    //=====================
    //Add new to do task
    onAddField = (e) => {
        e.preventDefault();
       let newFieldsNum = this.state.fieldsNum + 1
       this.setState({fieldsNum:newFieldsNum})
        const obj = {
            name: "",
            id: newFieldsNum
        };

        this.setState({ fields:[ ...this.state.fields,obj] });

    };

    onEditTodo = (id, newValue) => {
       const updated= this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.name = newValue;
            }
        });
    };

    onRemoveField = (itemId) => {
        alert("remove item "+ itemId)
        let updatedArray= [...this.state.fields].filter((fld) => fld.id !== itemId)
        let indx=0
        // let updatedArray2= updatedArray.map((elem)=>{ indx=indx+1 ,
                                                          

        // })
        this.setState({
            fields: [...this.state.fields].filter((fld) => fld.id !== itemId)

        });
    };


    //==============
    SetStateForAll = (val, i) => {
     let updatedArray=    this.state.fields.map((fld) => {
            if (fld.id === i) { fld.name = val } 
            return fld
        })
        this.setState({fields:updatedArray})
         console.log( this.state.fields)
    }
    render() {
        const fieldComponents = this.state.fields.map((fld) => (
         <>
          <BasicTextFields2 MonNameValue={fld.name } Index={fld.id} callback={this.SetStateForAll} />
           
           <button onClick={() => this.onRemoveField(fld.id)}>Remove</button>
         </>
               
            ))
        return (
            <> 
            <button onClick={this.onAddField}>New</button>
                {/* <BasicTextFields2 MonNameValue={"WS"} Index={5} callback={this.SetStateForAll} />
                <BasicTextFields2 MonNameValue={"WS"} Index={7} callback={this.SetStateForAll} /> */}
                <ul>
                {fieldComponents}  
                </ul>
              
            </>



        )
    }

}
