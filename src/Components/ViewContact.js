import React from "react";
import {Link} from 'react-router-dom';

function ViewContact(){
    return (
        <React.Fragment>
            <section className="view-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-centre">
                        <div className="col-md-4">
                         <img src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="" className="contact-img"></img>
                        </div>
                        <div className="col-md-8">
                        <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name : <span className="fw-bold">Sammy</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Phone : <span className="fw-bold">0700123456</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email : <span className="fw-bold">Sammy@gmail.com</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Company : <span className="fw-bold">Sammy@gmail.com</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Title : <span className="fw-bold">Sammy@gmail.com</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Group : <span className="fw-bold">Sammy@gmail.com</span>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                          <Link to={"/contacts/list"} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
           
        </React.Fragment>
    )
}

export default ViewContact;