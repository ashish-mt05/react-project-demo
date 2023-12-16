import React, {Component} from "react";
import State from './State'
import StateReadingMultipleField from "./StateReadingMultipleField";
import FormBinding from "./form-binding/FormBinding";
//import Parent from "./comunication-b/w-component/ParentToChildUsingProps/Parent";
import Parent from './comunication-b/w-component/ChildToParentUsingCallBackMethod/Parent';

export default class ComponentDemo extends Component{
    render(){
        return(
            <React.Fragment>
                {/* <State /> */}
                {/* <StateReadingMultipleField /> */}
                {/* <FormBinding /> */}
                
                {/* <Parent /> */}

                <Parent />
                
            </React.Fragment>
        )
    }
}