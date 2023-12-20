import React, { Component } from 'react'
import ConstructorDemo from './constructor/ConstructorDemo'
import RendorMethodOnceComponetGotLoaded from './render-method/RendorMethodOnceComponetGotLoaded'
import RendorMethodOnceStateGotUpdated from './render-method/RendorMethodOnceStateGotUpdated'
import RendorMethodOncePropsGotUpdated from './render-method/RendorMethodOncePropsGotUpdated'

export default class LifeCycleDemo extends Component {
  render() {
    return (
      <div>
        {/* <ConstructorDemo /> */}
        {/* <RendorMethodOnceComponetGotLoaded /> */}
        {/* <RendorMethodOnceStateGotUpdated /> */}
        <RendorMethodOncePropsGotUpdated />
      </div>
    )
  }
}
