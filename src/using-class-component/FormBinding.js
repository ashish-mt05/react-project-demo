import React, { Component } from 'react';
import Card from './Card';

export default class FormBinding extends Component {
    
    render() {
       
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-5'>
                        <Card />
                    </div>
                </div>
            </div>

        );
    }
}
