import React, {Component} from "react";
import State from './State'
import StateReadingMultipleField from "./StateReadingMultipleField";
import FormBinding from "./form-binding/FormBinding";

export default class ComponentDemo extends Component{
    render(){
        return(
            <React.Fragment>
                {/* <State /> */}
                {/* <StateReadingMultipleField /> */}
                <FormBinding />
            </React.Fragment>
        )
    }
}