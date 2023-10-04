import React from 'react';

import Header from '../layout/header'
import Sidebar from '../layout/sidebar';
// import Django from '../layout/django_api';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import AreaChart from '../charts/area'

import PriceArea from '../charts/price-area'

import profile2 from '../../images/profile/6.png'


const Dashboard = () => {
    return (
        <>
            <Header />
            <Sidebar />

            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-6 col-lg-6">
                            <div className="card welcome-profile">
                                <div className="card-body">
                                    <img src={profile2} alt="" />
                                    <h4>Welcome, MK!</h4>
                                    <p>Pick at least one of these before you get the crypto</p>

                                    <ul>
                                        <li>
                                            <Link to={"/price"}>
                                                <span className="verified"><i className="icofont-bitcoin icofont-3x"></i></span>
                                            Deposit Crypto
                                        </Link>
                                        </li>
                                        <li>
                                            <Link to={"/settings-payment-method"}>
                                                <span className="verified"><i className="icofont-credit-card icofont-3x"></i></span>
                                            Deposit Fiat (EUR, USD, CZK)
                                        </Link>
                                        </li>
                                        <li>
                                            <Link to={"/settings-security"}>
                                                <span className="verified"><i className="icofont-id-card icofont-3x"></i></span>
                                            Verify Account
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;