import React, { Component } from "react"

export default class StateReadingMultipleField extends Component{
    constructor(){
        //first line must be super()
        super();
        // initialize variable in state
        this.state = {
            fname :'',
            lname : '',
            email : ''
        }

    }
    
    upDateField = ()=>{
        //update variable
        this.setState({
            fname :'ashish',
            lname : 'kumar',
            email : 'ashish@gmail.com'
        })
    }

    render(){
        //destruct data from state
        const {fname, lname, email} = this.state;
        return(
            <>
              <h3>Update and Read Mulitple field using state</h3>
              <button onClick={this.upDateField} className="btn btn-primary">updateFieldValue</button>
              <pre>{fname} {lname} {email}</pre>
            </>
        );
    }
}