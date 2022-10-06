import React from "react";
import {Link} from 'react-router-dom'

function AddContact(){
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder='Name'></input>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder='Photo url'></input>
                                </div>
                                <div className="mb-2">
                                    <input type="number" className="form-control" placeholder='Phone'></input>
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder='Email'></input>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder='Company'></input>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder='Title'></input>
                                </div>
                                <div className="mb-2">
                                   <select className="form-control">
                                    <option value="">Select group</option>
                                   </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value="Create"></input>
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AddContact;