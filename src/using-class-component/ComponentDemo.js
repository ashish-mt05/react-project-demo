import React, {Component} from "react";
import State from './State'
import StateReadingMultipleField from "./StateReadingMultipleField";

export default class ComponentDemo extends Component{
    render(){
        return(
            <React.Fragment>
                {/* <State /> */}
                <StateReadingMultipleField />
            </React.Fragment>
        )
    }
}