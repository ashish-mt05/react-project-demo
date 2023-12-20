import React from 'react'
import Counter from './demo/component/Counter'
import { Provider } from 'react-redux'
import store from './api-call/using-fecth/store/store'
import Product from './api-call/using-fecth/component/Product'

export default function ReduxToolKitDemo() {
    return (
        <div>
            <Provider store={store}>
                <Product />
            </Provider>
        </div>
    )
}
