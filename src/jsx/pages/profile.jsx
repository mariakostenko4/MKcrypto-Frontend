import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar';
import { Link } from 'react-router-dom';

import profile6 from '../../images/profile/6.png'


const Profile = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="card welcome-profile">
                                <div className="card-body">
                                    <img src={profile6} alt="" />
                                    <h4>MK</h4>
                                    <ul className="settings-security">
                                        <li>
                                            <Link to={"/settings-security"}>
                                                <span className="verified"><i className="icofont-id-card icofont-3x"></i></span>
                                            Verify Account
                                        </Link>
                                        </li>

                                    </ul>
                                    <div className="card-header">
                                        <h6 className="card-title">Information </h6>
                                        <Link to={"/settings-profile"} className="btn btn-primary ml-3">Edit</Link>

                                    </div>

                                    <form className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>USER ID</span>
                                                <h6>818778</h6>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>Email</span>
                                                <h6>Hello@example.com</h6>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>Date of birth</span>
                                                <h6>10-10-2020</h6>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>Address</span>
                                                <h6>56, Old Street, Brooklyn</h6>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>City</span>
                                                <h6>New York</h6>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>Postal Codefind</span>
                                                <h6>25481</h6>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>Country</span>
                                                <h6>Czech Republic</h6>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>JOINED SINCE</span>
                                                <h6>20/10/2020</h6>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>TYPE</span>
                                                <h6>Personal</h6>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;