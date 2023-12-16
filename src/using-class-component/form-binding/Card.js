import React, { Component } from 'react'
import Form from './Form'

export default class Card extends Component {
    render() {
        return (
            <>
                <div className='card'>
                    <div className='card-header bg-info'>
                        Registration Form
                    </div>
                    <div className='card-body'>
                      <Form />
                    </div>
                </div>
            </>
        )
    }
}
