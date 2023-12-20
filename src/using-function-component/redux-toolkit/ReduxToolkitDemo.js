import React from 'react'
import { Provider } from 'react-redux'
import store from './store/Store'
import Cart from './component/Cart'
import Todo from './component/Todo'

export default function ReduxToolkitDemo() {
  return (
    <div>
        <Provider store={store}>
          {/* <Cart /> */}
          <Todo />
        </Provider>
    </div>
  )
}
