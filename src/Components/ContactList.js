import React from "react";
import {Link} from "react-router-dom";

function ContactList(){
    return (
        <React.Fragment>
           <section className="contact-search p-3">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Contact Manager
                             <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                             <i className="fa fa-plus-circle me-2"></i>
                                New</Link>
                            </p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row">
                                <div className="col">
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Search Names"></input>
                                </div>
                                </div>
                                <div className="col">
                                <div className="mb-2">
                                <input type="submit" className="btn btn-outline-dark" value="Search"></input>
                                </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           </section>
           <section className="contact-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                               <div className="row align-items-center">
                               <div className="col-md-4">
                                 <img src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="user" className="img-fluid contact-img" ></img>
                                </div>
                                <div className="col-md-7">
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
                                    </ul>

                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center d-flex justify-content-around">
                                    <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1">
                                        <i className="fa fa-pen"></i>
                                    </Link>
                                    <button className="btn btn-danger my-1">
                                        <i className="fa fa-trash"></i>
                                    </button>

                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
        </React.Fragment>
    )
}

export default ContactList;