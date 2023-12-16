import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            //TODO :: create one variable with user then try to reuse here
            user: {
                email: '',
                password: '',
                addressline1: '',
                addressline2: '',
                city: '',
                state: '',
                zipcode: '',
                termsandcondition: false
            }
        }

    }
    updateFieldValue = (event) => {
        //'event.target.name' will return variable which we assiged to name attribute in input tag.
        if (event.target.name === 'termsandcondition') {
            this.setState({
                user: {
                    ...this.state.user,
                    [event.target.name]: event.target.checked
                }
            })
        } else {
            this.setState({
                user: {
                    ...this.state.user,
                    [event.target.name]: event.target.value
                }
            })
        }

    }
    submitForm = (event) => {
        event.preventDefault();
        alert(JSON.stringify(this.state.user));
    }
    render() {
        const { email, password, addressline1, addressline2, city, state, zipcode, termsandcondition } = this.state.user;
        return (
            <>
                {/* 
                         For debugging purpose 
                         <p>{JSON.stringify(this.state.user)}</p>
                        */}
                <form className="row g-3" onSubmit={this.submitForm}>
                    <div className="col-md-6">
                        <input type="email" name='email' value={email} onChange={this.updateFieldValue} className="form-control" id="inputEmail4" placeholder='email' />
                    </div>
                    <div className="col-md-6">

                        <input type="password" value={password} onChange={this.updateFieldValue} name='password' className="form-control" id="inputPassword4" placeholder='password' />
                    </div>
                    <div className="col-12">
                        <input type="text" name='addressline1' value={addressline1} onChange={this.updateFieldValue} className="form-control" id="inputAddress" placeholder="address" />
                    </div>
                    <div className="col-12">
                        <input type="text" name='addressline2' value={addressline2} onChange={this.updateFieldValue} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-4">
                        <input type="text" name='city' value={city} onChange={this.updateFieldValue} className="form-control" id="inputCity" placeholder='city' />
                    </div>
                    <div className="col-md-5">
                        <select id="inputState" name='state' value={state} onChange={this.updateFieldValue} className="form-select" placeholder='select state'>
                            <option selected>Select City</option>
                            <option>UP</option>
                            <option>Delhi</option>
                            <option>HP</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name='zipcode' value={zipcode} onChange={this.updateFieldValue} className="form-control" id="inputZip" placeholder='zipcode' />
                    </div>
                    <div className="col-5">
                        <div className="form-check">
                            <input className="form-check-input" value={termsandcondition} onChange={this.updateFieldValue} name='termsandcondition' type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Terms & Condition
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </>
        )
    }
}
